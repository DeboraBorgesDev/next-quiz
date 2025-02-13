import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import styles from './styles.module.css'

interface TimerProps{
    duration: number,
    key: number,
    timeOut: () => void

}

export default function Timer(props: TimerProps){
    return (
        <div className={styles.timer}>
            <CountdownCircleTimer 
                isPlaying
                size={100}
                duration={props.duration}
                onComplete={props.timeOut}
                colors={['#BCE596', '#F7B801', '#ED827A', '#ED827A']}
                colorsTime={[7, 5, 3, 0]}
            >
                {({remainingTime})=> remainingTime}
            </CountdownCircleTimer>
        </div>
    )
}