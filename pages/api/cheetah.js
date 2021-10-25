import { createFlamingo, getCheetahs, getFlamingo } from "../../backend/database";


export default async function handler(req, res) {
    if(req.method == 'POST') {
        const data = req.body;
        const { name, pattern, speed, country } = data;

        await createFlamingo(name, pattern, speed, country);
        res.status(200).json(
            {
                success: true
            }
        );
        return;
    }

    const data = await getCheetahs();

    res.status(200).json(data); 
}