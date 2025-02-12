import QuestionModel from "@/model/question";
import styles from './style.module.css'
import Title from "../title";
import Answer from "../answer";
interface QuestionProps {
    value: QuestionModel
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
        return question.answers.map((answer, i) => {
            return (
                <Answer
                    key={i}
                    value={answer}
                    index={i}
                    letter={letters[i].value}
                    letterColor={letters[i].color}
                />
            )
        })
    }

    return(
        <div className={styles.question}>
            <Title value={question.title}/>
            {renderAnswers()}
        </div>
    )
}