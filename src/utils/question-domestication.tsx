type Question = Array<{
    question: string;
    reponse: string | React.ReactNode;
    propositions: string[],
    indexValidProposition: number[],
    multiple?: boolean
}>

export const questionDomestication: Question = [{
    multiple: false,
    question: "Quelle est la différence entre domestication et apprivoisement ?",
    "propositions": [
        "La domestication concerne un individu et l’apprivoisement une population",
        "La domestication repose sur les changements génétiques d’une population",
        "L’apprivoisement crée une nouvelle espèce",
        "Il n’y a pas différence entre les deux notions"
    ],
    "indexValidProposition": [1],
    "reponse": "La domestication est un processus génétique qui concerne une population entière et aboutit à une nouvelle espèce adaptée à l’homme, contrairement à l’apprivoisement qui concerne un individu sans modification génétique."
},
    {
        "multiple": false,
        "question": "De quelle espèce descend le chien domestique ?",
        "propositions": [
            "Du coyote",
            "Du renard",
            "Du loup gris (Canis lupus)",
            "D’un canidé aujourd’hui disparu"
        ],
        "indexValidProposition": [2],
        "reponse": "Les analyses génétiques, notamment de l’ADN mitochondrial, montrent que le chien descend du loup gris Canis lupus."
    },
    {
        "multiple": false,
        "question": "Pourquoi utilise-t-on l’ADN mitochondrial pour étudier l’origine du chien ?",
        "propositions": [
            "Il est plus long que l’ADN nucléaire",
            "Il est transmis par la mère sans modification",
            "Il est présent uniquement chez les chiens",
            "Il se modifie plus rapidement que les autres ADN"
        ],
        "indexValidProposition": [1],
        "reponse": "L’ADN mitochondrial est transmis uniquement par la mère, sans brassage génétique, ce qui permet de retracer plus facilement les lignées évolutives."
    },
    {
        "multiple": false,
        "question": "Quelle est la différence génétique entre le chien et le loup gris ?",
        "propositions": [
            "Environ 20 %",
            "Entre 10 et 15 %",
            "Inférieure à 3,5 %",
            "Supérieure à celle entre le loup et le coyote"
        ],
        "indexValidProposition": [2],
        "reponse": "Les études montrent une différence génétique inférieure à 0,2 % à 3,35 % entre le chien et le loup, ce qui confirme leur extrême proximité."
    },
    {
        "multiple": false,
        "question": "Quel est le plus ancien animal domestique ?",
        "propositions": [
            "Le mouton",
            "La chèvre",
            "Le chien",
            "Le porc"
        ],
        "indexValidProposition": [2],
        "reponse": "Le chien est le plus ancien animal domestique, sa domestication datant d’au moins 40 000 ans, bien avant la sédentarisation humaine."
    },
    {
        "multiple": true,
        "question": "Quelles modifications morphologiques sont associées à la domestication ?",
        "propositions": [
            "Réduction de la taille des individus",
            "Élargissement du crâne et de la mâchoire",
            "Allongement du museau",
            "Néoténie (persistance de traits juvéniles)"
        ],
        "indexValidProposition": [0, 1, 3],
        "reponse": "La domestication entraîne une réduction de la taille, un élargissement du crâne et de la mâchoire ainsi qu’une néoténie, caractérisée par la persistance de traits juvéniles. Le museau, en revanche, se raccourcit."
    },
    {
        "multiple": false,
        "question": "Qu’est-ce que la découverte d’Oberkassel ?",
        "propositions": [
            "Une peinture acrylique représentant un chien",
            "Une sépulture humaine avec des restes de chien domestique",
            "Un fossile de loup géant",
            "La première trace de dressage canin"
        ],
        "indexValidProposition": [1],
        "reponse": "La découverte d’Oberkassel correspond à une sépulture datant d’environ 12 000 av. J.-C. contenant des restes humains et un canidé présentant des caractéristiques de domestication."
    },
    {
        "multiple": false,
        "question": "Que montre l’étude du chien de l’Altaï découvert en Sibérie (-33 000 ans) ?",
        "propositions": [
            "Qu’il s’agit d’un coyote",
            "Qu’il est génétiquement plus proche du chien que du loup",
            "Qu’il n’existe aucune domestication avant la première guerre mondiale",
            "Que les chiens sont apparus en Europe"
        ],
        "indexValidProposition": [1],
        "reponse": "L’analyse génétique du chien de l’Altaï (33 000 ans) montre qu’il est plus proche génétiquement des chiens modernes que des loups."
    },
    {
        "multiple": false,
        "question": "Dans quelle région la domestication du chien aurait-elle eu lieu en premier ?",
        "propositions": [
            "En Europe",
            "En Afrique",
            "En Amérique",
            "En Asie"
        ],
        "indexValidProposition": [3],
        "reponse": "Les données génétiques et archéologiques indiquent une origine asiatique de la domestication du chien, notamment en Sibérie et en Asie centrale."
    },
    {
        "multiple": false,
        "question": "Quelle serait la première fonction du chien primitif il y a 40 000 ans?",
        "propositions": [
            "Gardien de troupeaux",
            "Auxiliaire de chasse spécialisé",
            "Éboueur éliminant les déchets humains",
            "Animal de compagnie"
        ],
        "indexValidProposition": [2],
        "reponse": "Le rôle d’éboueur, éliminant les déchets et restes alimentaires humains, est la fonction du chien primitif la plus largement reconnue scientifiquement. Ce qui permettait une prévention sanitaire, l'élimination des nuisibles et des prédateurs."
    },
    {
        "multiple": true,
        "question": "En quoi consiste et que démontre l’expérience de Dimitri Belyaev sur les renards ?",
        "propositions": [
            "C'est une expérience basée sur la tolérance du renard à l’homme",
            "L’apparition de modifications morphologiques",
            "La domestication repose d’abord sur l’apprentissage",
            "Les renards ont commencé à avoir les oreilles tombantes et à aboier comme des chiens"
        ],
        "indexValidProposition": [0, 1, 3],
        "reponse": "L’expérience de Belyaev repose sur une sélection comportementale (tolérance à l’homme) qui entraîne, sans sélection morphologique directe, l’apparition de traits physiques et comportementaux typiques des animaux domestiques."
    },
    {
        "multiple": false,
        "question": "Quelle différence comportementale distingue le chien du loup ?",
        "propositions": [
            "Le chien hurle et le loup aboie",
            "Le chien évite le regard humain",
            "Le chien sollicite l’humain pour résoudre un problème",
            "Le chien ne peut pas être dressé"
        ],
        "indexValidProposition": [2],
        "reponse": "Contrairement au loup, le chien sollicite l’humain pour résoudre un problème et établit un contact visuel."
    },
    {
        "multiple": false,
        "question": "Quel problème pose les hyper-types morphologiques ?",
        "propositions": [
            "Ils rendent les chiens plus agressifs",
            "Ils améliorent la communication canine",
            "Ils altèrent l’émission et la réception des signaux posturaux",
            "Ils n’ont aucun impact comportemental"
        ],
        "indexValidProposition": [2],
        "reponse": "Les aberrations morphologiques perturbent la communication posturale entre chiens, en altérant l’émission ou la réception des signaux de communication."
    }
]
