import Connect from "@/database/connect";
import { searchData } from "@/database/controller";

export default async function Patient(req, res) {
    try {
        await Connect().catch((err) => console.log(err));
        const { method } = req;
        const actions = { GET: searchData };
        const action = actions[method];

        if (!action) {
            res.setHeader("Allow", ["GET"]);
            return res.status(405).end(`Method ${method} Not Allow`);
        }

        await action(req, res);
    } catch (error) {
        res.status(404).json({ error });
    }
}
