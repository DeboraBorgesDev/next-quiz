
import { useRouter } from 'next/router'
import styles from './styles.module.css'
import Statistic from '@/components/statistic'
import Button from '@/components/button'

export default function Result() {
    const router = useRouter()

    const total = Number(router.query.total)
    const corrects = Number(router.query.rightAnswers)
    const percentual = Math.round((corrects/total) * 100)

    console.log({total, corrects})

    return (
        <div className={styles.result}>
            <h1>Resultado Final</h1>
            <div style={{ display: "flex" }}>
                <Statistic text="Perguntas" value={total} />
                <Statistic text="Certas" value={corrects}
                    backgroundColor="#9CD2A4"/>
                <Statistic text="Percentual" value={`${percentual}%`}
                    backgroundColor="#DE6A33" />
            </div>
            <Button href="/" text="Tentar Novamente" />
        </div>
    )
}