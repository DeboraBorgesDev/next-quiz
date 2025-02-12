
import { Poppins} from "next/font/google";
import Question from "@/components/question";
import QuestionModel from "@/model/question";
import AnswerModel from "@/model/answer";
import styles from './styles.module.css'
import { useState } from "react";

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '700'] });
const questao = new QuestionModel(222, 'Cor', [
  AnswerModel.wrong('Amarela'),
  AnswerModel.wrong('Vermelha'),
  AnswerModel.wrong('Azul'),
  AnswerModel.correct('Preto'),
], false)

export default function Home() {
  const [question, setQuestion] = useState(questao);
  

  const onResponse = (index: number) => {
    setQuestion(question.repplyWith(index))
  }

  return (
    <div
      className={`${poppins} ${styles.container}`}
    >
     <Question value={question} onResponse={onResponse} />
    </div>
  );
}
