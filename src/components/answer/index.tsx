import AnswerModel from "../../../model/answer";
import styles from "./styles.module.css";

interface AnswerProps {
  value: AnswerModel;
  letter: string;
  index: number;
  letterColor: string;
  answerProvided: (index: number) => void;
}

export default function Answer(props: AnswerProps) {
  const answer = props.value.toObject();
  const answerRevealed = answer.revealed ? styles.answerRevealed : ''; 

  return (
    <div className={styles.answer} onClick={() => props.answerProvided(props.index)}>
      <div className={`${answerRevealed} ${styles.answerContent}`}>
        {!answer.revealed ? (
          <div className={styles.front}>
          <div className={styles.letter} style={{ backgroundColor: props.letterColor }}>
            {props.letter}
          </div>
          <div className={styles.value}>{answer.value}</div>
        </div>
        ) : (
          <div className={styles.back}>
          {answer.right ? (
            <div className={styles.correct}>
              <span>A resposta correta é...</span>
              <span className={styles.value}>{answer.value}</span>
            </div>
          ) : (
            <div className={styles.wrong}>
              <span>A resposta informada está errada...</span>
              <span className={styles.value}>{answer.value}</span>
            </div>
          )}
        </div>
        )}
      </div>
    </div>
  );
}
