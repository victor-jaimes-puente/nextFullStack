import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
console.log(process.env.NEXT_GOOGLE_CLIENT_ID, 'process');
export default NextAuth({
 
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true,
    }),
  ],
  // callbacks: {
  //   async signIn(user, account, profile) {
  //     if (account.provider === "google") {
  //       user.email = profile.email;
  //       user.image = profile.picture;
  //     }
  //     return true;
  //   },
  // },
});
