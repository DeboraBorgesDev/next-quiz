import AnswerModel from "@/model/answer";
import stiles from './styles.module.css'

interface AnswerProps {
    value: AnswerModel,
    letter: string,
    index: number,
    letterColor: string
}

export default function Answer(props: AnswerProps) {
    const answer = props.value
    return(
        <div className={stiles.answer}>
            <div className={stiles.content}>
                <div className={stiles.front}>
                    <div 
                        className={stiles.letter}
                        style={{backgroundColor: props.letterColor}}
                    >
                        {props.letter}
                    </div>
                    <div className={stiles.value}>{answer.value}</div>
                </div>
                <div className={stiles.back}>
                    
                </div>
            </div>

        </div>
    )

}