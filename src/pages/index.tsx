
import { Poppins} from "next/font/google";
import QuestionModel from "../../model/question";
import styles from './styles.module.css'
import { useEffect, useState } from "react";
import Questionnaire from "@/components/questionnaire";
import { getQuestion, getQuestionsIds } from "../../services/questions";
import { useRouter } from "next/router";

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '700'] });

export default function Home() {
  const router = useRouter()

  const [question, setQuestion] = useState<QuestionModel>();
  const [questionsIds, setQuestionsIds] = useState<number[]>([])
  const [rightAnswers, setRightAnswers] = useState<number>(0)


  const answeredQuestion = (question: QuestionModel) => {
    setQuestion(question)
    const right = question.right
    setRightAnswers(rightAnswers + (right ? 1 : 0))
    if(right){
      onNextStep()
    }
  }

  const idNextQuestion = () => {
    const nextIndice = questionsIds.indexOf(question?.id as number) + 1
    return questionsIds[nextIndice]
  }

  const handleNextQuestion = (id: number) => {
    handleQuestion(id)
  }

  const onFinish = () => {
    router.push({
      pathname: '/result',
      query: {
        total: questionsIds.length,
        rightAnswers
      }
    })
  }

  const onNextStep = () => {
    const nextQuestion = idNextQuestion()
    nextQuestion ? handleNextQuestion(nextQuestion) : onFinish()
  }

  const handleQuestionsIds = async (): Promise<void> => {
    const resp = await getQuestionsIds();
    const ids = await resp.json();
    setQuestionsIds(ids);
  };

  const handleQuestion = async (id: number): Promise<void> => {
    const resp = await getQuestion(id);
    const json = await resp.json();
    setQuestion(QuestionModel.fromObject(json))
  };
  
  useEffect(() => {
    handleQuestionsIds();
  }, []);
  
  useEffect(() => {
    questionsIds.length > 0 && handleQuestion(questionsIds[0])
  }, [questionsIds])



  return (
    <div
      className={`${poppins} ${styles.container}`}
    >
      {question ? (
        <Questionnaire 
        question={question as QuestionModel} 
        lastQuestion={idNextQuestion() === undefined} 
        onNextStep={onNextStep} 
        answeredQuestion={answeredQuestion} 
      />
      ) : false
      }
    </div>
  );
}
