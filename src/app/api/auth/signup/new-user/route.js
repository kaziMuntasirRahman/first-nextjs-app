import { connectDB } from '@/lib/connectDB'

export const POST = async request => {
  try {
    const db = await connectDB()
    const userCollection = db.collection('users')
    const newUser = await request.json()
    const result = await userCollection.insertOne(newUser)
    return Response.json(result)
  } catch (error) {
    console.log(error)
  }
}
