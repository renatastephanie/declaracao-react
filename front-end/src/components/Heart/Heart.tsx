import styles from './Heart.module.scss'

export const Heart = () => { 
  return (
    <div className={styles.container}>
      <div className={styles.heartWrapper}>
        <svg
          className={styles.heart}
          viewBox="0 0 100 90"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M50 85 C50 85 5 55 5 28 C5 13 17 3 30 3 C38 3 45 7 50 14 C55 7 62 3 70 3 C83 3 95 13 95 28 C95 55 50 85 50 85Z"
            fill="red"
          />{" "}
          <text
            x="50"
            y="45"
            textAnchor="middle"
            fill="white"
            fontSize="9"
            fontFamily="Verdana"
            fontWeight="bold">
            Eu te amo
          </text>
          <text
            x="50"
            y="57"
            textAnchor="middle"
            fill="white"
            fontSize="9"
            fontFamily="Verdana"
            fontWeight="bold">
            meu amor!
          </text>
        </svg>
      </div>
    </div>
  );
}
