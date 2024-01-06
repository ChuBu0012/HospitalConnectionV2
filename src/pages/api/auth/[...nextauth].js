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
                console.log(credentials.name);
                // เช็คว่ามีผู้ใช้อยู่
                const result = await doctorModel.findOne({ username: credentials.name })
                console.log(result);
                if (!result) throw new Error("ไม่พบชื่อผู้ใช้งานนี้ กรุณาลงทะเบียน")

                if (result.password !== credentials.password || result.username !== credentials.name) throw new Error("ชื่อผู้ใช้งาน หรือรหัสผ่านไม่ตรงกัน")

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