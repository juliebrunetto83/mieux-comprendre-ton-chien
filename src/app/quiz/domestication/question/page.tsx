import styles from "./page.module.css";
import Domestication from "@/components/domestication";
import {Suspense} from "react";

export default function DomesticationQuizPage({
                                                  searchParams,
                                              }: {
    searchParams: Promise<{ etape?: string }>
}) {
    return (
        <Suspense fallback={<>...</>}>
            <main className={styles.container}>
                <Domestication searchParams={searchParams}/>
            </main>
        </Suspense>
    )
}
