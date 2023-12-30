import Connect from "@/database/connectdt";
import { getDatas, createData, deleteData } from "@/database/controllerdt";

export default async function Doctor(req, res) {
    try {
        await Connect().catch((err) => console.log(err));
        const { method } = req;
        const actions = { GET: getDatas, POST: createData, DELETE: deleteData };
        const action = actions[method];

        if (!action) {
            res.setHeader("Allow", ["GET", "POST", "DELETE"]);
            return res.status(405).end(`Method ${method} Not Allow`);
        }

        await action(req, res);
    } catch (error) {
        res.status(404).json({ error });
    }
}
