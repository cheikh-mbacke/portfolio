// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Cheikh Mbacke - Portfolio",
  description:
    "Développeur web full stack en France, spécialisé en JavaScript. Expert en création d'applications web réactives et performantes, développement front-end et back-end, intégration API et maintenance de sites. Solutions personnalisées pour tous vos projets numériques.",
  og: {
    title: "Cheikh Mbacke - Portfolio",
    type: "website",
    url: "https://portfolio-om44.onrender.com",
  },
};

//Home Page
const greeting = {
  title: "Cheikh MBACKE",
  logo_name: "CheikhMbacke",
  nickname: "Cheikhouna",
  subTitle:
    "Développeur web full stack en France, spécialisé en JavaScript. Expert en création d'applications web réactives et performantes, développement front-end et back-end, intégration API et maintenance de sites. Solutions personnalisées pour tous vos projets numériques.",
  resumeLink:
    "https://drive.google.com/file/d/1Lm9vjhDWFb38Mo0O0Jte7IUQLRqV638S/view?usp=sharing",
  portfolio_repository: "https://github.com/cheikh-mbacke/portfolio",
  githubProfile: "https://github.com/cheikh-mbacke?tab=repositories",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/cheikh-mbacke",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "www.linkedin.com/in/mbcheikh",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:mbackecheikhouna7@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  }
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Développement de modèles prêts pour la production, hautement évolutifs pour divers cas d'usage en apprentissage profond et statistique",
        "⚡ Expérience de travail sur des projets de vision par ordinateur et de traitement du langage naturel (NLP)",
        "⚡ Modélisation quantitative complexe pour la prévision dynamique et l'analyse de séries temporelles",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Développement de l'interface de sites web réactifs",
        "⚡ Développement d'applications mobiles utilisant Flutter, React Native et création d'applications Android individuelles avec Kotlin",
        "⚡ Création de back-end d'applications avec Node, Express et Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#563d7c",
          },
        },
        {
          skillName: "Tailwind CSS",
          imageSrc: "tailwindcss_logo.png",
        },
        {
          skillName: "FoundationCSS",
          imageSrc: "foundation_logo.png",
        },
        {
          skillName: "Materialize",
          imageSrc: "materialize_logo.png",
        },
        {
          skillName: "Vue.js",
          imageSrc: "vuejs_logo.png",
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            color: "#c3002f",
          },
        },
        {
          skillName: "Express.js",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#010101",
          },
        },
        {
          skillName: "Next.js",
          imageSrc: "nextjs_logo.png",
        },
        {
          skillName: "NestJS",
          imageSrc: "nestjs_logo.svg",
        },
        {
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0769ad",
          },
        },
        {
          skillName: "React Native",
          imageSrc: "reactnative_logo.svg",
        },
        {
          skillName: "Visual Studio Code",
          imageSrc: "visualStudioCode_logo.webp",
        },
        {
          skillName: "IntelliJ IDEA",
          imageSrc: "intelliJIDEA_logo.png",
        },
        {
          skillName: "Eclipse",
          imageSrc: "eclipse_logo.svg",
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Expérience de travail sur plusieurs plateformes d'hébergement",
        "⚡ Hébergement et maintenance de sites web sur des instances de machines virtuelles avec intégration de bases de données",
        "⚡ Configuration de travaux de streaming de la base de données vers le serveur ou inversement sur GCP et AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#00758f",
          },
        },
        {
          skillName: "Vagran",
          imageSrc: "vagrant_logo.png",
        },
        {
          skillName: "Github",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#2b3137",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#f34f29",
          },
        },
        {
          skillName: "JIRA",
          fontAwesomeClassname: "simple-icons:jira",
          style: {
            color: "#0052CC",
          },
        },
        {
          skillName: "Confluence",
          fontAwesomeClassname: "simple-icons:confluence",
          style: {
            color: "#2185FF",
          },
        },
        {
          skillName: "GitLab",
          imageSrc: "gitLab_logo.png",
        },
        {
          skillName: "Ansible",
          fontAwesomeClassname: "simple-icons:ansible",
          style: {
            color: "#000000",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Conception d'interfaces utilisateur attrayantes pour applications mobiles et web",
        "⚡ Personnalisation de designs de logos et création de logos à partir de zéro",
        "⚡ Création du flux des fonctionnalités des applications pour optimiser l'expérience utilisateur",
      ],
      softwareSkills: [
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Canvas",
          imageSrc: "canva_logo.png",
        },
      ],
    },
  ],
};

// Education Page
const degrees = {
  degrees: [
    {
      title:
        "Licence Professionnelle Métiers de l'Informatique Applications Web",
      subtitle: "Université de Bourgogne : UFR Sciences et Techniques (Dijon)",
      logo_path: "logo_ub_orange.png",
      alt_name: "Université de Bourgogne : UFR Sciences et Techniques (Dijon)",
      duration: "2022 - 2023",
      descriptions: [
        "⚡ J'ai étudié des sujets fondamentaux en génie logiciel tels que les structures de données, les algorithmes, les systèmes de gestion de bases de données.",
        "⚡ J'ai également suivi des cours en  développement full stack, compétences essentielles pour concevoir, déployer, gérer et faire évoluer des applications web ou mobiles.",
        "⚡ J'ai appris aussi les méthodologies (séquentielles/agiles) de gestion de projet informatique, ce qui me permet de travailler efficacement en équipe.",
        "⚡ Enfin, j'ai suivi des cours langue pour apprendre à communiquer oralement et à l'écrit en anglais.",
      ],
      website_link:
        "https://formations.u-bourgogne.fr/fr/offre-de-formation/licence-professionnelle-DP/licence-professionnelle-metiers-de-l-informatique-applications-web-LMGC23QT.html",
    },
    {
      title: "Développeur informatique",
      subtitle: "Openclassrooms",
      logo_path: "logo_openClassrooms.webp",
      alt_name: "Openclassrooms",
      duration: "2021 - 2022",
      descriptions: [
        "⚡ J'ai appris à construire des sites web responsives et dynamiques s’adaptant à tout type d’écran grâce à l’intégration des éléments des maquettes graphiques avec HTML, CSS, JavaScript et React",
        "⚡ J'ai appris à créer des API et des bases de données pour développer des sites complets et dynamiques et assurer le bon fonctionnement côté serveur avec NodeJS, Express et MongoDB.",
        "⚡ J'ai appris également à optimiser les performances et réaliser la maintenance de sites web déjà existants pour permettre leur fonctionnement optimal et une bonne visibilité sur les moteurs de recherche (SEO).",
        "⚡ Enfin, j'ai fait de la planification du projet à la présentation de la solution au client, en passant par la rédaction des spécifications techniques.",
      ],
      website_link: "https://openclassrooms.com/fr/paths/899-developpeur-web",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Comprendre le Web",
      subtitle: "- Openclassrooms",
      logo_path: "logo_openclassrooms_certif.png",
      certificate_link:
        "https://drive.google.com/file/d/1XSATFKpvguAFGSuyDVX-r3FxG5-Y4-sE/view?usp=sharing",
      alt_name: "Openclassrooms",
      color_code: "#fff",
    },
    {
      title: "Découvrez les métiers de développeur",
      subtitle: "- Openclassrooms",
      logo_path: "logo_openclassrooms_certif.png",
      certificate_link:
        "https://drive.google.com/file/d/1AJramj5dmRIViUl75z0ODyGS_aJnQJA2/view?usp=sharing",
      alt_name: "Openclassrooms",
      color_code: "#fff",
    },
    {
      title: "Mettez en place votre environnement front-end",
      subtitle: "- Openclassrooms",
      logo_path: "logo_openclassrooms_certif.png",
      certificate_link:
        "https://drive.google.com/file/d/1nwOoidgNK4QW_jwwPWIvqtO_sRrMR2uI/view?usp=sharing",
      alt_name: "Openclassrooms",
      color_code: "#fff",
    }
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Alternance, Stage et Freelance",
  description:
    "Au cours de ma formation en tant qu'apprenti développeur web, j'ai acquis une expérience professionnelle significative avec Airbus. J'ai ensuite réalisé un stage enrichissant chez RTE, une entreprise de l'Etat français, avant de travailler comme développeur freelance pour Openclassrooms, une école en ligne.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Expériences",
      work: true,
      experiences: [
        {
          title: "Mentor/Formateur en Développement web",
          company: "Openclassrooms",
          company_url: "https://openclassrooms.com/fr/",
          logo_path: "logo_openClassrooms.webp",
          duration: "Mars 2021 - À ce jour",
          location: "Paris, France",
          description:
            "Former des étudiants en formation en Développement web.",
          color: "#000000",
        },
        {
          title: "Développeur Full Stack",
          company: "Réseau de transport d'électricité (RTE)",
          company_url: "https://www.rte-france.com/",
          logo_path: "logo_rte.png",
          duration: "Avril 2023 - Septembre 2023",
          location: "Nantes, France",
          description:
            "Développement d'une application permettant la : Visualisation cartographique des réseaux électriques, Gestion des projets d'insertion, Intégration des données prévisionnelles, Gestion des utilisateurs et des rôles.",
          color: "#0879bf",
        },
        {
          title: "Développeur web Full Stack",
          company: "Airbus",
          company_url:
            "https://www.airbus.com/fr/space/space-made-in-france-by-airbus",
          logo_path: "logo_airbus.png",
          duration: "Juillet 2021 - Décembre 2021",
          location: "Blagnac, France",
          description:
            "Développement d'une application web complexe pour la gestion des commandes de peinture des avions. Mes tâches consistaient à réaliser : Un formulaire de commande en HTML, CSS, Bootstrap, Javascript et AJAX; Un système de recherche; Un process d'export et d'import d'un fichier .xsl à envoyer aux fournisseurs de peintures; Un système de notification; Des comptes utilisateurs pour différents services.",
          color: "#9b1578",
        },
        {
          title: "Développeur Front-end",
          company: "Sogeclair Aerospace SAS",
          company_url: "https://sogeclair.com/",
          logo_path: "logo_sogeclair.png",
          duration: "Mars 2021 - Juin 2021",
          location: "Blagnac, France",
          description:
            "Développement d'une appstore pour recencer les applications de l'entreprise. Mon rôle fut de mettre en place l'interface utilisateur de cette application avec ReactJS",
          color: "#fc1f20",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Mes Projets",
  description:
    "Mes projets utilisent une grande variété d’outils technologiques les plus récents.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
