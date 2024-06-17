import styles from './main.module.css'

export const Mains = () => {
    return (
        <div className={styles.absolute}>
            <div className={styles.absolute + ' ' + styles.inset-0 + ' ' + styles.justifyCenter}>
                <div className={styles.bgShape1 + ' ' + styles.bgTeal + ' ' + styles.opacity50 + ' ' + styles.bgBlur}></div>
                <div className={styles.bgShape2 + ' ' + styles.bgPrimary + ' ' + styles.opacity50 + ' ' + styles.bgBlur}></div>
                <div className={styles.bgShape3 + ' ' + styles.bgPurple + ' ' + styles.opacity50 + ' ' + styles.bgBlur}></div>
                <div className={styles.bgShape4 + ' ' + styles.bgRed + ' ' + styles.opacity50 + ' ' + styles.bgBlur}></div>
                <div className={styles.bgShape5 + ' ' + styles.bgGreen + ' ' + styles.opacity50 + ' ' + styles.bgBlur}></div>
            </div>
            <div><h1>SunSet</h1></div>
        </div>
    )
}