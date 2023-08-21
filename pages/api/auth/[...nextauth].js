import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { mongooseConnect } from "@/lib/mongoose";

export default NextAuth({
  // ...

  providers: [
    // ...
    CredentialsProvider({
      async authorize(credentials, req) {
        await mongooseConnect();

        const { email, password } = credentials;


        console.log(email, password);

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

  callbacks: {
    jwt: async ({ token, user}) => {
      user && (token.user = user);

      return token;

    },
    session : async ({ session , token}) => {
      session.user = token.user;

      delete session?.user?.password;

      return session

    }
  },



});
