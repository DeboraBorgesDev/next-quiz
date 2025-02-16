import QuestionModel from "@/model/question";
import styles from './style.module.css'
import Title from "../title";
import Answer from "../answer";
import Timer from "../timer";
interface QuestionProps {
    value: QuestionModel
    answerProvided: (index: number) => void
    timeOut: () => void
}

export default function Question(props: QuestionProps) {
    const question = props.value

    const letters = [
        {value: "A", color: "#F2C866"},
        {value: "B", color: "#F266BA"},
        {value: "C", color: "#85D4F2"},
        {value: "D", color: "#BCE596"},
    ]

    const renderAnswers = () => {
        return question?.answers?.map((answer, i) => {
            return (
                <Answer
                    key={i}
                    value={answer}
                    index={i}
                    letter={letters[i].value}
                    letterColor={letters[i].color}
                    answerProvided={props.answerProvided}

                />
            )
        })
    }

    return(
        <div className={styles.question}>
            <Title value={question?.title}/>
            <Timer duration={10} timeOut={props.timeOut} key={question?.id}/>
            {renderAnswers()}
        </div>
    )
}