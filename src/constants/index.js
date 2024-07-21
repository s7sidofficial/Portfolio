import {
  mobile,
  backend,
  creator,
  web,
  shivjyotilogo,
  nalandalogo,
  kllogo,
  rentallogo,
  hospitallogo,
  tripguide,
  awscp,
  gcp,
  redhat,
  az900,
  ai900,
  hackerankjava,
  awssaa,
  hackerankpython,
} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const experiences = [
  {
    title: "Shiv Jyoti Sr. Sec. School, Kota",
    company_name: "SSC CGPA: 7.5",
    icon: shivjyotilogo,
    iconBg: "#E6DEDD",
    date: "April 2017 - March 2018",
    points: [
      "In junior school I navigated myself through the educational tangle of trigonometry and chemical lab work, sometimes finding an explosion. developed the art of handling homework and continuing to giggle during surprise tests.",
    ],
  },
  {
    title: "Nalanda Academy, Kota",
    company_name: "Intermediate CGPA: 6.5",
    icon: nalandalogo,
    iconBg: "#E6DEDD",
    date: "April 2019 - March 2020",
    points: [
      "My intermediate school experience was basically a never-ending marathon of physics, chemistry, and math problem-solving. As for lockdown, my online classes became a journey into the depths of my own bedroom, where I mastered the art of pretending to pay attention."
    ],
  },
  {
    title: "KL University, Vijayawada",
    company_name: "B.Tech CGPA: 9.31",
    icon: kllogo,
    iconBg: "#E6DEDD",
    date: "September 2021 - Present",
    points: [
      "Lead at, Megha Club, KL University (Conduct Workshops on Cloud Domain). Exhibited skill sets in a number of learnathons and hackathons. Lead at, FOCUS - Student Governance Body of CSE, KL University." ,
    ],
  },
];

const projects = [
  {
    name: "Rental Management System",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "pink-text-gradient",
      },
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "sql",
        color: "green-text-gradient",
      },
    ],
    image: rentallogo,
    source_code_link: "https://github.com/s7sidofficial",
  },
  {
    name: "Hospital Management System",
    description:
      "Web application that manages patient information, appointments, medicine inventory, billing processes by providing a centralized platform for hospital operations.",
    tags: [
      {
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "spring boot",
        color: "green-text-gradient",
      },
      {
        name: "spring",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: hospitallogo,
    source_code_link: "https://github.com/s7sidofficial/Hospital_Management_System",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

const certifications = [
  {
    name: "AWS Cloud Practitioner",
    image: awscp,
    source_code_link: "https://www.credly.com/badges/27450d71-5615-42af-a747-cc7aa1c61dcc/public_url",
  },
  {
    name: "AWS SAA",
    image: awssaa,
    source_code_link: "https://github.com/s7sidofficial",
  },
  {
    name: "Google ACE",
    image: gcp,
    source_code_link: "https://www.credly.com/badges/bacdf7d8-fe5d-47d4-8bed-b0e7c844b03e/public_url",
  },
  {
    name: "Redhat",
    image: redhat,
    source_code_link: "https://www.credly.com/badges/251bf299-f6d9-45b5-a316-fa514a682ca8/public_url",
  },
  {
    name: "Azure 900",
    image: az900,
    source_code_link: "https://www.credly.com/badges/fdd2fd66-956b-447b-af49-06a9171f7309/public_url",
  },
  {
    name: "AI 900",
    image: ai900,
    source_code_link: "https://www.credly.com/badges/355082a3-ffb0-4667-a650-62b6d164b3d1/public_url",
  },
  {
    name: "Hackerrank",
    image: hackerankjava,
    source_code_link: "https://www.hackerrank.com/certificates/870d5ee43b13",
  },
  {
    name: "Hackerrank",
    image: hackerankpython,
    source_code_link: "https://www.hackerrank.com/certificates/068936ef7231",
  },

];

export { services, experiences, projects, certifications };