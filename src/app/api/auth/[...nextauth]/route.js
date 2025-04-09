import { connectDB } from '@/lib/connectDB'
import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from "next-auth/providers/github";

export const authOptions = {
  secret: process.env.NEXT_JWT_SECRET,
  session: {
    strategy: 'jwt',
    maxAge: 24 * 60 * 60 // 30 days
  },
  providers: [
    CredentialsProvider({
      credentials: {
        // name: {
        //   label: 'Name',
        //   type: 'text',
        //   required: false,
        //   placeholder: 'Enter your name'
        // },
        email: {
          label: 'Email',
          type: 'email',
          required: false,
          placeholder: 'Your Email'
        },
        password: {
          label: 'Password',
          type: 'password',
          required: false,
          placeholder: 'Your Password'
        }
      },
      async authorize (credentials) {
        if (!credentials) {
          console.log('empty credentials...')
          return null
        }
        const db = await connectDB()
        const userCollection = await db.collection('users')
        const currentUser = await userCollection.findOne({email:credentials.email})
        // const currentUser = users.find(user => user.email === credentials.email) || null
        if (currentUser) {
          if (currentUser.password === credentials.password) {
            return currentUser
          }
           else {
            console.log('Invalid Credentials')
            return null
          }
        }
      }
    }),
    GoogleProvider({
      clientId: process.env.NEXT_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_GOOGLE_CLIENT_SECRET
    }),
    GitHubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_ID,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET
    })
  ],
  // get extra information about user besides default data (name, email, image)
  callbacks: {
    async jwt({token, account, user}){
      if(account){
        token.role = user.role
        token.id = user.id
      }
      return token
    },
    async session({session, user, token}){
      session.user.role = token.role
      return session
    }
  }
}

const handler = NextAuth(authOptions)

const users = [
  {
    id: '1',
    name: 'Rayiys Ahmed',
    email: 'rayiys@example.com',
    password: 'rayiys123',
    role: 'Admin',
    image: 'https://www.example.com/images/rayiys.jpg'
  },
  {
    id: '2',
    name: 'Fatima Khan',
    email: 'fatima@example.com',
    password: 'glueglue',
    role: 'User',
    image: 'https://www.example.com/images/fatima.jpg'
  },
  {
    id: '3',
    name: 'Ayaan Rahman',
    email: 'ayaan@example.com',
    password: 'ayaan789',
    role: 'User',
    image: 'https://www.example.com/images/ayaan.jpg'
  },
  {
    id: '4',
    name: 'Zoya Siddiqui',
    email: 'zoya@example.com',
    password: 'zoya321',
    role: 'User',
    image: 'https://www.example.com/images/zoya.jpg'
  },
  {
    id: '5',
    name: 'Hamza Ali',
    email: 'hamza@example.com',
    password: 'hamza999',
    role: 'User',
    image: 'https://www.example.com/images/hamza.jpg'
  },
  {
    id: '6',
    name: 'Sana Sheikh',
    email: 'sana@example.com',
    password: 'sana000',
    role: 'Admin',
    image: 'https://www.example.com/images/sana.jpg'
  },
  {
    id: '7',
    name: 'Yusuf Patel',
    email: 'yusuf@example.com',
    password: 'yusuf777',
    role: 'User',
    image: 'https://www.example.com/images/yusuf.jpg'
  },
  {
    id: '8',
    name: 'Nadia Islam',
    email: 'nadia@example.com',
    password: 'nadia555',
    role: 'User',
    image: 'https://www.example.com/images/nadia.jpg'
  }
]


export { handler as GET, handler as POST }
