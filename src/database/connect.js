import { connect } from "mongoose";

const Connect = async () => {
    try {
        const { connection } = await connect(process.env.NEXT_PUBLIC_MONGODB_URL, {
            dbName: "Patients",
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        if (connection.readyState === 1) {
            console.log("Patients Database Connected!");
        }
    } catch (error) {
        console.log("เชื่อมต่อไม่สำเร็จ");
        throw error;
    }
};

export default Connect;
