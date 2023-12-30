import Connect from "@/database/connectdt";
import { getData } from "@/database/controllerdt";

export default async function Doctor(req, res) {
    try {
        await Connect().catch((err) => console.log(err));
        const { method } = req;
        const actions = { GET: getData };
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
