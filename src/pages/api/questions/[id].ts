import questions from "../questionsDatabase";
import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
    const id = parseInt(req.query.id as string, 10);

    const filteredQuestion = questions.filter(question => question.id === id)

    if(filteredQuestion.length === 1){
        const questionSelected = filteredQuestion[0].shuffleAnswers()
        return res.status(200).json(questionSelected.toObject());
    } else{
        return res.status(204).send("Nenhuma pergunta encontrada!")
    }

};
