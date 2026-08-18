import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { compare } from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: { strategy: "jwt" },
  providers: [
    Credentials({
      name: "Admin",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const email = credentials.email as string;
        const password = credentials.password as string;

        const adminEmail = process.env.ADMIN_EMAIL;
        const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH;

        if (!adminEmail || !adminPasswordHash) {
          return null;
        }

        if (email !== adminEmail) {
          return null;
        }

        const isValid = await compare(password, adminPasswordHash);
        if (!isValid) {
          return null;
        }

        return {
          id: "admin",
          email: adminEmail,
          name: "Administrator",
          role: "admin",
        };
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        const role = (user as { role?: unknown }).role;
        token.role = typeof role === "string" ? role : undefined;
      }
      return token;
    },
    session: async ({ session, token }) => {
      const sessionRole = typeof token.role === "string" ? token.role : undefined;
      session.user = {
        ...session.user,
        role: sessionRole,
      };
      return session;
    },
  },
  pages: {
    signIn: "/admin/login",
  },
});
