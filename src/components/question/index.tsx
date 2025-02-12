import QuestionModel from "@/model/question";
import styles from './style.module.css'
import Title from "../title";
interface QuestionProps {
    value: QuestionModel
}

export default function Question(props: QuestionProps) {
    const question = props.value

    return(
        <div className={styles.question}>
            <Title value={question.title}/>
        </div>
    )
}