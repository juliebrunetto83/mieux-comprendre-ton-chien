"use client";
import styles from "./domestication.module.css";
import {use, useState} from "react";
import {questionDomestication} from "@/utils/question-domestication";

export default function Domestication({searchParams,}: { searchParams: Promise<{ etape?: string }> }) {
    const params = use(searchParams)
    const searchParamEtape = params.etape
    const etape = searchParamEtape ? Number(searchParamEtape) - 1 : 1;
    const etapeInfo = questionDomestication[etape]

    if (!etapeInfo) {
        return null
    }

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
        <div>
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
                                            {isCorrectSelected ? " ✅" : isIncorrectSelected ? " ❌" : ''}
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
                    <div className={styles.successText}>
                        {etapeInfo.reponse}
                    </div>
                    <div className={styles.successActions}>
                        <a
                            href={`/quiz/domestication/question?etape=${Number(searchParamEtape) + 1}`}
                            className={styles.nextLink}
                        >
                            Question suivante
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}
