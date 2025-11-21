import styles from "./Paragraph.module.css";

export function Paragraph({ text, fontSize }) {
  const size = fontSize || "20px";
  return (
    <p className={styles["paragraph"]} style={{ fontSize: size }}>
      {text}
    </p>
  );
}
