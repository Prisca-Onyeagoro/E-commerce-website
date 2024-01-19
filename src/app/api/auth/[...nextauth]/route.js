import { connect } from '@/utils/db';
import NextAuth from 'next-auth';
import User from '../../../../../models/User';
import bcrypt from 'bcryptjs';
import CredentialsProvider from 'next-auth/providers/credentials';

const authOptions = {
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user?._id) token._id = user._id;
      if (user?.isAdmin) token.isAdmin = user._isAdmin;
      return token;
    },
    async session({ session, token }) {
      if (token?._id) session.user._id = token._id;
      if (token?.isAdmin) session.user.isAdmin = token._isAdmin;
      return session;
    },
  },

  //   providers
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        await connect();
        const user = await User.findOne({
          email: credentials.email,
        });
        console.log(user.email);
        if (user && bcrypt.compareSync(credentials.password, user.password)) {
          return {
            _id: user._id,
            name: user.name,
            email: user.email,
            image: 'f',
            isAdmin: user.isAdmin,
          };
        }
        throw new Error('invalid email or password');
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
