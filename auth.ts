    import NextAuth from "next-auth";
    import Credentials from "next-auth/providers/credentials";
    import bcrypt from "bcryptjs";
    import { fetchUser } from "./lib/data"; // Updated import path
    import GitHub from "next-auth/providers/github";



    export const { handlers, signIn, signOut, auth } = NextAuth({
    theme: {
      brandColor: "#1ED2AF",
      logo: "/logo.png",
      buttonText: "#ffffff",
    },
    providers: [
      Credentials({
      credentials: {
        email: {
        label: "Email",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      //@ts-ignore
      authorize: async (credentials: { email: string; password: string }) => {
        const { email, password } = credentials;
        const user = await fetchUser(email);
        if (!user) return null;
        //@ts-ignore
        const passwordsMatch = await bcrypt.compare(password, user.password);
        if (passwordsMatch) return user;
        return null;
      },
    }),
    GitHub({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
      }),
    ],
    callbacks: {
  async authorize(credentials) { // ✅ Correct: Use "authorize"
    return credentials ? { id: "1", name: "User" } : null;
  }
}
    });

