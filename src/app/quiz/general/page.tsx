import styles from "./page.module.css";

export default function GeneralQuizIntroPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>
        Est‑ce que tu es prêt ?
      </h1>
      <p className={styles.intro}>
        Bienvenue dans le quiz général sur le chien. Réponds aux questions, découvre ton
        niveau et apprends en t'amusant !
      </p>

      <div className={styles.actions}>
        <a href="/quiz/general/1" className={styles.cta}>
          Let's go !
        </a>
      </div>

      <p className={styles.hint}>
        Astuce: réponds spontanément, il n'y a pas de mauvaise réponse.
      </p>
    </main>
  );
}
