import styles from "./Background.module.scss";

const HEARTS_COUNT = 100;
const HEART_COLORS = ["#FF1493", "#FF69B4", "#DB7093", "#FFC0CB"];

export const Background = () => {
  const hearts = Array.from({ length: HEARTS_COUNT }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.floor(Math.random() * 16) + 10,
    color: HEART_COLORS[Math.floor(Math.random() * HEART_COLORS.length)],
  }));

  return (
    <div className={styles.background}>
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className={styles.heart}
          style={{
            left: `${heart.x}%`,
            top: `${heart.y}%`,
            width: `${heart.size}px`,
            color: heart.color,
          }}>
          ❤
        </span>
      ))}
    </div>
  );
};
