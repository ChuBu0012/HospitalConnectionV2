import Connect from '@/database/connectdt';
import doctorModel from '@/model/doctor';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: "credentials",
            async authorize(credentials, req) {
                Connect().catch(err => err)

                // เช็คว่ามีผู้ใช้อยู่
                const result = await doctorModel.findOne({ doctor_id: credentials.name })
                if (!result) throw new Error("No user Found with Email Please sign Up...!")

                if (result.password !== credentials.password || result.doctor_id !== credentials.name) throw new Error("Username or Password doesn't match")

                return {
                    name: { name: credentials.name, role: 'Doctor' }
                }
            }
        })
    ],
    pages: {
        signIn: "/"
    },
    secret: "yH+sOgef5JvuB6TAQYfU535CMS4u99E8KV51/fdAGw8=",
})