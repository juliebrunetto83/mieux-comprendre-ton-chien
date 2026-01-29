"use client";
import styles from "./page.module.css";
import {useParams} from "next/navigation";
import {useState} from "react";

const etapes: {
    [key: string]: { question: string; reponse: string; propositions: string[], indexValidProposition: number }
} = {
    "1": {
        question: "D'où vient le mythe que le chien doit manger après son référent ?",
        propositions: ["Manger avant son chien permet d’éviter la transmission de maladies entre le chien et son référent", 'Ce mythe vient de l’observation de meute de loups captif, où le loup dominant mange toujours en premier', "Une superstition paysanne affirme que nourrir son chien en premier inverse l’ordre des saisons.", "Manger en meme temps que son chien lui apprend que ma nourriture = sa nourriture"],
        indexValidProposition: 1,
        reponse: "Ca vient du mythe de la dominance blablabla"
    },
    "2": {
        question: "coucou",
        propositions: ["Manger avant son chien permet d’éviter la transmission de maladies entre le chien et son référent", 'Ce mythe vient de l’observation de meute de loups captif, où le loup dominant mange toujours en premier', "Une superstition paysanne affirme que nourrir son chien en premier inverse l’ordre des saisons.", "Manger en meme temps que son chien lui apprend que ma nourriture = sa nourriture"],
        indexValidProposition: 1,
        reponse: "Ca vient du mythe de la dominance"
    }
}

export default function GeneralQuizIntroPage() {
    const {etape} = useParams<{ etape: string }>();
    const etapeInfo = etapes[etape]
    const [isSuccess, setIsSuccess] = useState<boolean | undefined>(undefined);
    const [answerSelected, setAnswerSelected] = useState<number[]>([]);

    function onChooseProposition(event: React.ChangeEvent<HTMLInputElement>) {
        const indexProposition = etapeInfo.propositions.indexOf(event.target.value)
        if (indexProposition === etapeInfo.indexValidProposition) {
            setIsSuccess(true);
            return
        }
        if (!answerSelected.includes(indexProposition)) {
            setAnswerSelected((previousAnswerSelected) => [...previousAnswerSelected, indexProposition])
        }
    }

    return (
        <main className={styles.container}>
            {!isSuccess && (
                <form className={styles.form}>
                    <fieldset className={styles.fieldset}>
                        <legend className={styles.legend}>
                            <h1 className={styles.title}>{etapeInfo.question}</h1>
                        </legend>

                        <p className={styles.hint}>Choisis une réponse ci-dessous :</p>

                        <div className={styles.options}>
                            {etapeInfo.propositions.map((proposition, index) => {
                                const isIncorrect = answerSelected.includes(index)
                                return (
                                  <label
                                    key={index}
                                    className={styles.option}
                                  >
                                    <input
                                      className={styles.optionInput}
                                      type="checkbox"
                                      name="answer"
                                      value={proposition}
                                      aria-invalid={isIncorrect ? "true" : undefined}
                                      onChange={onChooseProposition}
                                    />
                                    <div className={`${styles.optionCard} ${isIncorrect ? styles.optionCardIncorrect : ""}`}>
                                      <span className={`${styles.optionText} ${isIncorrect ? styles.optionTextIncorrect : ""}`}>{proposition}</span>
                                    </div>
                                  </label>
                                );
                            })}
                        </div>
                    </fieldset>
                </form>
            )}

            {isSuccess && (
                <div className={styles.success} aria-live="polite">
                    <h1 className={styles.title}>{etapeInfo.question}</h1>
                    <h2 className={styles.successTitle}>Bravo ! 🎉</h2>
                    <p className={styles.successText}>
                        {etapeInfo.reponse}
                    </p>
                    <div className={styles.successActions}>
                        <a
                            href={`/quiz/general/${Number(etape) + 1}`}
                            className={styles.nextLink}
                        >
                            Question suivante
                        </a>
                    </div>
                </div>
            )}
        </main>
    );
}
