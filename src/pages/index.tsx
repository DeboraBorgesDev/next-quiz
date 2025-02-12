
import { Poppins} from "next/font/google";
import Question from "@/components/question";
import QuestionModel from "@/model/question";
import AnswerModel from "@/model/answer";
import styles from './styles.module.css'

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '700'] });


export default function Home() {
  const questao = new QuestionModel(222, 'Cor', [
    AnswerModel.wrong('Amarela'),
    AnswerModel.wrong('Vermelha'),
    AnswerModel.wrong('Azul'),
    AnswerModel.correct('Preto'),
  ], false)
  return (
    <div
      className={`${poppins} ${styles.container}`}
    >
     <Question value={questao}/>
    </div>
  );
}
