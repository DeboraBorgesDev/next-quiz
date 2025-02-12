import styles from './styles.module.css'

interface TitleProps {
    value: string
}

export default function Title(props: TitleProps){
    return (
        <div className={styles.title}>
            <span className={styles.text}>{props.value}</span>
        </div>
    )
}