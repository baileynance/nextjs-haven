import NextAuth, { type AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials ?? {};
        // Your auth logic here
        if (email === "admin@example.com" && password === "password") {
          return { id: "1", name: "Admin", email };
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
};

// Create the NextAuth handler using the options
const handler = NextAuth(authOptions);

// Export handler only for GET and POST routes
export { handler as GET, handler as POST };
