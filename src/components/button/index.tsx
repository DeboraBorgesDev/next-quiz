import Link from 'next/link'
import styles from './styles.module.css'
import { Url } from 'next/dist/shared/lib/router/router'

interface ButtonProps {
    text: string,
    href?: Url | string,
    onClick?: (e: any) => void 
}

export default function Button(props: ButtonProps) {

    const renderButton = () => {
        return (
            <button
                onClick={props.onClick}
                className={styles.button}
            >
                {props.text}
            </button>
        )
    }

    return props.href ? (
        <Link href={props?.href}>
            {renderButton()}
        </Link>
    ) : renderButton()
}