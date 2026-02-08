import styles from "./page.module.css";

export default function GeneralQuizIntroPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>
        Est‑ce que tu es prêt ?
      </h1>
      <p className={styles.intro}>
        Bienvenue dans le quiz sur la domestication du chien. Réponds aux questions et découvre ton
        niveau !
      </p>

      <div className={styles.actions}>
        <a href="/quiz/domestication/question?etape=1" className={styles.cta}>
          Let's go !
        </a>
      </div>
    </main>
  );
}
