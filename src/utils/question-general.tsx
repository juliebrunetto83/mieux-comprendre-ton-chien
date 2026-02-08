type Question = Array<{
        question: string;
        reponse: string | React.ReactNode;
        propositions: string[],
        indexValidProposition: number[],
        multiple?: boolean
    }>


export const questionGeneral: Question = [
    {
        question: "D'où vient le mythe selon lequel le chien doit manger après son référent ?",
        propositions: ["Manger avant son chien permet d’éviter la transmission de maladies entre le chien et son référent", 'Il vient de l’observation de meutes de loups en captivité, où le loup alpha mange toujours en premier', "Une superstition paysanne affirme que nourrir son chien en premier inverse l’ordre des saisons", "Manger en même temps que son chien lui apprend que ce qu’on mange, c’est aussi pour lui"],
        indexValidProposition: [1],
        reponse: <>
            <p>Exemples de « règles » issues de cette idée :</p>
            <ul>
                <li>Le chien doit toujours manger après son référent.</li>
                <li>Le chien ne doit pas dormir sur une place surélevée (lit, canapé, haut d’un escalier).</li>
                <li>Le chien ne doit pas passer une porte en premier.</li>
                <li>Le chien ne doit pas décider du chemin à emprunter, de ce qu’il peut manger ou quand jouer.</li>
                <li>Habituer son chien à être sur le dos, communément appelé « alpha roll ».</li>
                <li>...</li>
            </ul>
            <p>Vous vous êtes déjà demandé d’où viennent ces règles ? Elles découlent de la théorie de la dominance
                entre chien et maître. <strong>Pour faire court, si vous ne devez retenir qu’une chose, c’est que ça
                    n’existe pas !</strong></p>
            <p>Tout a commencé avec une étude sur les loups gris réalisée au zoo de Bâle par Rudolf Schenkel en 1940.
                Suite à cette étude, le zoologiste conclut qu’il existe, au sein d’une meute de loups, un modèle
                hiérarchique régi par un système composé d’un dominant (loup alpha) et de dominés.</p>
            <p>Quelques années plus tard (1950–1960), Konrad Lorenz, éthologue autrichien, fait le parallèle entre le
                loup et le chien. Il amène à penser que le chien, descendant du loup, aurait besoin d’un chef de meute —
                sinon il le deviendrait lui-même. La popularisation du concept de dominance apparaît dans les années
                1970, suite à la publication du livre « Le Loup » par David Mech, biologiste américain reconnu. Cet
                ouvrage s’appuie sur les travaux réalisés par Rudolf Schenkel sur des loups en captivité.</p>
            <p>Les années 1960, c’est aussi le développement du métier d’éducateur canin, souvent fondé sur le principe
                que le maître doit prendre la place d’alpha et que le chien doit être le soumis.</p>
            <p><strong>Sauf que :</strong></p>
            <ul>
                <li>
                    David Mech est revenu quelques années plus tard sur ses propos après avoir étudié les loups dans
                    leur milieu naturel. Eh oui ! Les premières études avaient été réalisées sur des groupes de loups
                    tenus captifs dans des espaces restreints, avec des ressources limitées. On imagine facilement
                    l’impact de la captivité sur les conflits, il suffit de regarder la téléréalité ! Sa vidéo, où il
                    remet en question le principe de « loup alpha », est très courte et est disponible ici :
                    {' '}<a href={"https://youtu.be/c4i1UuRsWqg"} target={"_blank"} rel={"noopener noreferrer"}>Voir la
                    vidéo de David Mech</a>.
                    {' '}Au final, les loups, dans leur environnement naturel, se comportent comme une famille et, au
                    sein de cette famille, les conflits sont rares ; les ressources sont partagées (en fonction de la
                    taille de la proie tuée) et les parents éduquent leurs petits grâce à une communication sociale.
                </li>
                <li>Les chiens ne sont pas des loups : il y a environ 40 000 ans de divergence entre ces deux espèces,
                    ne l’oublions pas…
                </li>
                <li>S’il vous faut encore un argument : il existe la période d’impregnation chez le chiot. Un chien sait
                    alors qu’il est un chien et il sait aussi que nous, humains, ne sommes pas des chiens. Notre
                    communication est différente ; il n’y a donc aucun intérêt à interagir avec eux comme ils le
                    feraient avec un congénère.
                </li>
            </ul>
            <p>Et puis si vous n'êtes toujours pas convaincu, je vous laisse manger le placenta de votre chiot pour lui
                montrer que vous êtes l'alpha de la meute. ;)</p>
        </>
    },
    {
        question: "Quelles sont les 4 critères du bien être canin ?",
        propositions: ["Capacité d'adaptation au milieu de vie (coping style), besoin fondamentaux, santé et état émotionnel", 'Santé, nourriture, eau et promenade', "Contact humain, besoins fondamentaux, état emotionnel, dépense physique", "Taille du panier, capacité à obéir, fréquence des friandises et calins"],
        indexValidProposition: [0],
        reponse: "Ca vient du mythe de la dominance"
    },
    {
        question: "Qu'est ce que les signaux d'apaisement ?",
        propositions: ["Montre que le chien est apaisé", "C'est le langage de communication du chien", "Permet au chien de montrer qu'il est dans un stress extrème", "Ce sont des signes de fatigue"],
        indexValidProposition: [1],
        reponse: "Ca vient du mythe de la dominance"
    }
]
