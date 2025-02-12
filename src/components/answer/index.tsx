import AnswerModel from "@/model/answer";
import stiles from './styles.module.css'

interface AnswerProps {
    value: AnswerModel,
    letter: string,
    index: number,
    letterColor: string,
    onResponse: (index: number) => void
}

export default function Answer(props: AnswerProps) {
    const answer = props.value
    return(
        <div className={stiles.answer} onClick={() => props.onResponse(props.index)}>
            <div className={stiles.content}>
                {!answer.revealed ? (
                                    <div className={stiles.front}>
                                    <div 
                                        className={stiles.letter}
                                        style={{backgroundColor: props.letterColor}}
                                    >
                                        {props.letter}
                                    </div>
                                    <div className={stiles.value}>{answer.value}</div>
                                </div>
                ) : (
<div className={stiles.back}>
                    {answer.right ? (
                        <div className={stiles.correct}>
                            <span>A resposta correta é...</span>
                            <span className={stiles.value}>{answer.value}</span>
                        </div>
                    ) : (
                        <div className={stiles.wrong}>
                            <span>A resposta informada está errada...</span>
                            <span className={stiles.value}>{answer.value}</span>
                        </div>
                    )}
                </div>
                )}

                
            </div>

        </div>
    )

}