import Connect from "@/database/connect";
import { deleteData, getData, updateData } from "@/database/controller";

export default async function Patient(req, res) {
    try {
        await Connect().catch((err) => console.log(err));
        const { method } = req;
        const actions = { PUT: updateData, DELETE: deleteData, GET: getData };
        const action = actions[method];

        if (!action) {
            res.setHeader("Allow", ["PUT", "DELETE", "GET"]);
            return res.status(405).end(`Method ${method} Not Allow`);
        }

        await action(req, res);
    } catch (error) {
        return res.json({ error });
    }
}
