//@ts-ignore
import bcrypt from "bcryptjs";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { NextAuthOptions } from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { db } from "@/db/db";
import {
  getUserByEmail,
  getUsersAccountTableData,
  reSendVerificationToken,
} from "@/data/user";
import { encode, decode } from "next-auth/jwt";

const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/Login",
  },
  session: {
    strategy: "jwt",
  },
  jwt: { encode, decode },
  //@ts-ignore-
  adapter: DrizzleAdapter(db),
  providers: [
    FacebookProvider({
      clientId: process.env.AUTH_FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.AUTH_FACEBOOK_CLIENT_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET as string,
    }),

    CredentialsProvider({
      async authorize(credentials: any) {
        if (credentials === null) return null;
        if (credentials === undefined) return null;

        try {
          const user = await getUserByEmail(credentials?.email);
          if (!user) {
            throw new Error("User not found");
          }
          // sendEmail({ address: user.email, type: "Good" });
          const isUserOAuth = await getUsersAccountTableData(user?.id);
          if (isUserOAuth) {
            throw new Error("Please Sign in using Google | GitHub");
          }

          // if (user.emailVerified !== true || user.emailVerified !== null) {
          //   reSendVerificationToken(user.id, user.email);
          //   throw new Error("Email is not verified"); //Send the mail from here
          // }

          if (await bcrypt.compare(credentials?.password, user.password)) {
            return {
              id: user.id,
              name: user.name,
              email: user.email,
              image: user.image,
            };
          } else {
            throw new Error("Password does not match");
          }
        } catch (err: any) {
          throw new Error(err);
        }
      },
      credentials: undefined,
    } as any),
  ],
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
      }
      console.log(token);
      return token;
    },
    async session({ session, token, user }) {
      if (token?.sub !== undefined) {
        session.user.id = token?.sub;
      }
      return session;
    },
  },
};
export default authOptions;
