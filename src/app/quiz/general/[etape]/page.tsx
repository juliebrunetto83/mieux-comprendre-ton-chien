"use client";
import styles from "./page.module.css";
import {useParams} from "next/navigation";
import {useState} from "react";

const etapes: {
    [key: string]: {
        question: string;
        reponse: string;
        propositions: string[],
        indexValidProposition: number[],
        multiple?: boolean
    }
} = {
    "1": {
        question: "D'où vient le mythe que le chien doit manger après son référent ?",
        propositions: ["Manger avant son chien permet d’éviter la transmission de maladies entre le chien et son référent", 'Ce mythe vient de l’observation de meute de loups captif, où le loup dominant mange toujours en premier', "Une superstition paysanne affirme que nourrir son chien en premier inverse l’ordre des saisons.", "Manger en même temps que son chien lui apprend que ma nourriture = sa nourriture"],
        indexValidProposition: [1],
        reponse: "Ca vient du mythe de la dominance blablabla"
    },
    "2": {
        question: "Quelles sont les 4 critères du bien être canin ?",
        propositions: ["Capacité d'adaptation au milieu de vie (coping style), besoin fondamentaux, santé et état émotionnel", 'Santé, nourriture, eau et promenade', "Contact humain, besoins fondamentaux, état emotionnel, dépense physique", "Taille du panier, capacité à obéir, fréquence des friandises et calins"],
        indexValidProposition: [0],
        reponse: "Ca vient du mythe de la dominance"
    },
    "3": {
        question: "Qu'est ce que les signaux d'apaisement ?",
        propositions: ["Montre que le chien est apaisé", "C'est le langage de communication du chien", "Permet au chien de montrer qu'il est dans un stress extrème", "Ce sont des signes de fatigue"],
        indexValidProposition: [1],
        reponse: "Ca vient du mythe de la dominance"
    },
    "4": {
        multiple: true,
        question: "Qu'est ce que les signaux d'apaisement ?",
        propositions: ["Montre que le chien est apaisé", "C'est le langage de communication du chien", "Permet au chien de montrer qu'il est dans un stress extrème", "Ce sont des signes de fatigue"],
        indexValidProposition: [1, 0],
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
        const isAllTrueAnswerSelected = etapeInfo.indexValidProposition.every((indexValid) => {
            return indexValid === indexProposition || answerSelected.includes(indexValid)
        })
        if (isAllTrueAnswerSelected) {
            setIsSuccess(true);
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

                        <p className={styles.hint}>{etapeInfo.multiple ? "Choisis les réponses valides ci-dessous" : "Choisis une réponse ci-dessous"}</p>

                        <div className={styles.options}>
                            {etapeInfo.propositions.map((proposition, index) => {
                                const isSelected = answerSelected.includes(index);
                                const isCorrectOption = etapeInfo.indexValidProposition.includes(index);
                                const isIncorrectSelected = isSelected && !isCorrectOption;
                                const isCorrectSelected = isSelected && isCorrectOption;
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
                                            aria-invalid={isIncorrectSelected ? "true" : undefined}
                                            onChange={onChooseProposition}
                                        />
                                        <div
                                            className={`${styles.optionCard} ${isIncorrectSelected ? styles.optionCardIncorrect : ""} ${isCorrectSelected ? styles.optionCardCorrect : ""}`}>
                                            <span
                                                className={`${styles.optionText} ${isIncorrectSelected ? styles.optionTextIncorrect : ""} ${isCorrectSelected ? styles.optionTextCorrect : ""}`}>{proposition}</span>
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
