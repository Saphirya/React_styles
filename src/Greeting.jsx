import styles from "./Greeting.module.scss";

export default function Greeting() {
  return (
    <h1 className={styles.title}>
      Greeting <span>!!!</span>
    </h1>
  );
}
