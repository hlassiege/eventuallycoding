interface Toc {
    title: string;
    link?: string;
    subsections?: Toc[];
}

const tocEn = [
    {
        title: "Table of contents",
        link: "https://eventuallycoding.com/en/2023/02/impactful-software-engineering",
        subsections: [
            {
                title: "Introduction - Being in the room",
                link: "https://eventuallycoding.com/en/2023/03/being-in-the-room",
            },
        ],
    },
    {
        title: "Individual Impact",
        link: "https://eventuallycoding.com/en/2023/03/individual-impact",
        subsections: [
            {
                title: "It's not just a matter of technique",
                link: "https://eventuallycoding.com/en/2023/02/not-only-about-technique",
            },
            {
                title: "Measure everything",
                link: "https://eventuallycoding.com/en/2023/02/measuring-everything",
            },
            {
                title: "Choose your battles",
                link: "https://eventuallycoding.com/en/2023/03/choose-your-battles",
            },
            {
                title: "Accepting boredom",
                link: "https://eventuallycoding.com/en/2023/03/accept-boredom",
            },
            {
                title: "Tech Marketing",
                link: "https://eventuallycoding.com/en/2023/05/tech-marketing",
            },
        ],
    },
    {
        title: "Engineering Leadership",
        link: "https://eventuallycoding.com/en/2023/05/engineering-leadership",
        subsections: [
            {
                title: "Soft versus hard leadership",
            },
            {
                title: "Alignment, autonomy and context",
                link: "https://eventuallycoding.com/en/2023/05/alignment-autonomy-context",
            },
            {
                title: "Create a technical vision",
            },
            {
                title: "Building 10x teams",
            },
            {
                title: "Anti-patterns",
            },
        ],
    },
    {
        title: "Engineering Organization",
        subsections: [
            {
                title: "Should we measure performance of engineering teams?",
                link: "https://medium.com/nerds-malt/should-we-measure-the-performance-of-an-engineering-team-e461ccff1cd4",
            },
            {
                title: "Engineering culture and agility",
            },
            {
                title: "Continuous discovery",
            },
            {
                title: "The benefits of constraints",
                link: "https://eventuallycoding.com/en/2022/09/working-with-constraints",
            },
            {
                title: "Fighting complexity",
                link: "https://eventuallycoding.com/en/2023/07/fighting-complexity",
            },
            {
                title: "Estimation and planning within impactful teams",
                link: "https://eventuallycoding.com/en/2023/10/planning-efficient-teams",
            },
            {
                title: "Team engineering maturity model",
            },
        ],
    },
    {
        title: "Engineering and Discovery",
        subsections: [
            {
                title: "The trio PM/UX/Engineering",
            },
            {
                title: "The role of engineering team in discovery",
            },
            {
                title: "Being the 10th person",
            },
            {
                title: "Being an explorer",
            },
        ],
    },
    {
        title: "Engineering and Delivery",
        subsections: [
            {
                title: "The role of engineering team in delivery",
            },
            {
                title: "Tech Lead Vs/And Engineering Manager",
                link: "https://eventuallycoding.com/en/2024/01/tech-lead-engineering-manager",
            },
            {
                title: "What does an engineering manager do?",
                link: "https://medium.com/nerds-malt/what-does-an-engineering-manager-bae1929850ba",
            },
            {
                title: "Claim your independence",
            },
            {
                title: "Buy or build?",
            },
        ],
    },
];

const tocFr = [
    {
        title: "Table des matières",
        link: "https://eventuallycoding.com/2023/02/impactful-software-engineering",
        subsections: [
            {
                title: "Introduction - Amenez des ingénieurs dans la salle",
                link: "https://eventuallycoding.com/2023/03/amenez-ingenieurs-dans-la-salle",
            },
        ],
    },
    {
        title: "L'impact individuel",
        link: "https://eventuallycoding.com/2023/03/individual-impact",
        subsections: [
            {
                title: "Ce n'est pas juste une question de technique",
                link: "https://eventuallycoding.com/2023/02/not-only-about-technique",
            },
            {
                title: "Tout mesurer",
                link: "https://eventuallycoding.com/2023/02/measuring-everything",
            },
            {
                title: "Choisissez vos batailles",
                link: "https://eventuallycoding.com/2023/03/choisissez-vos-batailles",
            },
            {
                title: "Accepter l'ennui",
                link: "https://eventuallycoding.com/2023/03/accept-boredom",
            },
            {
                title: "Tech Marketing",
                link: "https://eventuallycoding.com/2023/05/tech-marketing",
            },
        ],
    },
    {
        title: "Engineering Leadership",
        link: "https://eventuallycoding.com/2023/05/engineering-leadership",
        subsections: [
            {
                title: "Soft versus hard leadership",
            },
            {
                title: "Alignement, autonomie et contexte",
                link: "https://eventuallycoding.com/2023/05/alignment-autonomy-context",
            },
            {
                title: "Créer une vision technique",
            },
            {
                title: "Construire des équipes 10x",
            },
            {
                title: "Anti-patterns",
            },
        ],
    },
    {
        title: "Engineering Organization",
        subsections: [
            {
                title: "Faut-il mesurer la performance d’une équipe engineering ?",
                link: "https://eventuallycoding.com/2021/10/07/faut-il-mesurer-la-performance-dune-equipe-engineering",
            },
            {
                title: "Culture engineering et agilité",
            },
            {
                title: "Continuous discovery",
            },
            {
                title: "Travailler avec des contraintes",
                link: "https://eventuallycoding.com/2022/09/travailler-avec-contraintes",
            },
            {
                title: "Combattre la complexité",
                link: "https://eventuallycoding.com/2023/07/fighting-complexity",
            },
            {
                title: "Estimation et planification dans les équipes à impact",
                link: "https://eventuallycoding.com/2023/10/planning-efficient-teams",
            },
            {
                title: "Modèle de maturité des équipes engineering",
            },
        ],
    },
    {
        title: "Engineering et Discovery",
        subsections: [
            {
                title: "Le trio PM/UX/Engineering",
            },
            {
                title: "Le rôle de l'engineering dans la discovery",
            },
            {
                title: "Devenir explorateur(rice)",
            },
        ],
    },
    {
        title: "Engineering et Delivery",
        subsections: [
            {
                title: "Le rôle de l'Engineering dans la delivery",
            },
            {
                title: "Tech Lead Vs/et Engineering Manager",
                link: "https://eventuallycoding.com/2024/01/tech-lead-engineering-manager",
            },
            {
                title: "Que fait un engineering Manager?",
                link: "https://eventuallycoding.com/2022/01/31/que-fait-un-engineering-manager",
            },
            {
                title: "Réclamez votre indépendance",
            },
            {
                title: "Buy or build?",
            },
        ],
    },
];

const books: { [key: string]: { [key: string]: Toc[] } } = {
    impactfulSoftwareEngineering: {
        en: tocEn,
        fr: tocFr,
    },
};
export default books;
