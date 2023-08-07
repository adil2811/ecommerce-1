import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from '@/models/User';
import bcrypt from "bcryptjs";
import GoogleProvider from 'next-auth/providers/google'
import { mongooseConnect } from "@/lib/mongoose";


export default NextAuth({
  session: {
    strategy: 'jwt',
  },

  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET
      }),
    CredentialsProvider({
      async authorize(credentials, req) {
        await  mongooseConnect();

        const { email, password } = credentials;

        console.log(email,password)

        const user = await User.findOne({ email });

        if (!user) {
          throw new Error("Invalid Email or Password");
        }

        const isPasswordMatched = await bcrypt.compare(password, user.password);

        if (!isPasswordMatched) {
          throw new Error("Invalid Email or Password");
        }

        return user;
      },
    }),
  ],
  // pages: {
  //   signIn: '/login'
  // },
  secret: process.env.NEXTAUTH_SECRET,
});