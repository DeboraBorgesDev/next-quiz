import { NextApiRequest, NextApiResponse } from "next";
import questions from "../questionsDatabase";
import { shuffleQuestions } from "../../../../functions/Arrays";

export default (req: NextApiRequest, res: NextApiResponse) => {
    const questionsList = questions.map(question => question.id);
    res.status(200).json(shuffleQuestions(questionsList))
};