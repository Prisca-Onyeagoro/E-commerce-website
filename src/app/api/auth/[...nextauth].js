import NextAuth from 'next-auth';

export const authOptions = {
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user?._id) token._id = user._id;
      if (user?.isAdmin) token.isAdmin = user._isAdmin;
      return token;
    },
  },
  async session({ session, token }) {
    if (token?._id) session.user._id = token._id;
    if (token?.isAdmin) session.user.isAdmin = token._isAdmin;
    return session;
  },
  //   providers
  providers: [
    CredentialsProvider({
      async authorize() {},
    }),
  ],
};

export default NextAuth(authOptions);
