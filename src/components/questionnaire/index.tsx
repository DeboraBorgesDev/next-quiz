import QuestionModel from "@/model/question"
import styles from './styles.module.css'
import Question from "../question"
import Button from "../button"

interface QuestionnaireProps{
    question: QuestionModel
    lastQuestion: boolean
    onNextStep: () => void
    answeredQuestion: (question: QuestionModel) => void
}

export default function Questionnaire(props: QuestionnaireProps) {

    const answerProvided = (index: number) => {
        if(!props.question.answered){
            props.answeredQuestion(props.question.repplyWith(index))
        }
    }

   

    return (
        <div className={styles.questionnaire}>
            <Question
                value={props.question}
                answerProvided={answerProvided}
                timeOut={props.onNextStep}
            />
            <Button text={props.lastQuestion ? 'Finalizar' : 'Próxima'} onClick={props.onNextStep}/>
        </div>
    )
}