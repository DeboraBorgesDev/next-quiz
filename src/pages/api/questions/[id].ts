import questions from "../questionsDatabase";
import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json(questions[0].toObject());
};
