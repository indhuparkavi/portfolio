import { Inventory, MobileFriendly, Task, Wysiwyg } from '@mui/icons-material';
import { Mail, Phone, Place } from '@mui/icons-material';
import fanmode from '../../assets/images/fanmode1.png';
import marketspark from '../../assets/images/marketspark.png';
import vinayak from '../../assets/images/project1.jpg';
import js from '../../assets/images/js.png';
// @ts-ignore
import ts from '../../assets/images/ts.jfif';
import react from '../../assets/images/react.png';
import materailUI from '../../assets/images/material.png';
import bootstrap from '../../assets/images/bootstrap.png';
import redux from '../../assets/images/redux.png';
import html from '../../assets/images/html5.gif';
import css from '../../assets/images/css3-logo.png';
import sass from '../../assets/images/sass.png';
import postman from '../../assets/images/postman.jpg';
// @ts-ignore
import swagger from '../../assets/images/swagger.jfif';
import jira from '../../assets/images/jira.png';
import planner from '../../assets/images/planner.png';
import gitlab from '../../assets/images/gitlab.png';
import github from '../../assets/images/github.png';
import query from '../../assets/images/query.png';
import formik from '../../assets/images/formik.png';
import hookForm from '../../assets/images/hookForm.jpg';


export const portfolioInfo = {
  name: "Indhu Parkavi",
  designation: "React Frontend Developer",
  about: {
    description: "Creative React Front End Web Developer with 19 months of experience in building and maintaining responsive websites and webapplications. Proficient in HTML, CSS, JS, TS, React plus modern libaries. Maintaining an organized workflow using a project management tool. Providing guidance and troubleshooting support to client. Good at interpersonal communication and leadership skills. Ability to work under tight deadlines. I value simple content structure, clean design patterns and thoughful interactions.",
    skills: [
      {
        name: "Project Management Application",
        icon: <Task color="secondary" style={{ fontSize: 30, margin: 20 }} />,
      },
      {
        name: "Stock Management Application",
        icon: <Inventory color="error" style={{ fontSize: 30, margin: 20 }} />,
      },
      {
        name: "Ecommerce",
        icon: <MobileFriendly color="warning" style={{ fontSize: 30, margin: 20 }} />,
      },
      {
        name: "Website",
        icon: <Wysiwyg color="info" style={{ fontSize: 30, margin: 20 }} />,
      }
    ],
    project: 4
  },
  skills: {
    language: [
      {
        name: 'JavaScript',
        url: js
      },
      {
        name: 'TypeScript',
        url: ts
      }
    ],
    library: [
      {
        name: 'React',
        url: react
      },
      {
        name: 'Redux',
        url: redux
      },
    ],
    tools: [
      {
        name: 'Git',
        list: [
          {
            name: 'GitHub',
            url: github
          },
          {
            name: 'GitLab',
            url: gitlab
          },
        ]
      },
      {
        name: 'Planner',
        list: [
          {
            name: 'Jira',
            url: jira
          },
          {
            name: 'Planner',
            url: planner
          },
        ]
      },
      {
        name: 'API Platform',
        list: [
          {
            name: 'Postman',
            url: postman
          },
          {
            name: 'Swagger',
            url: swagger
          },
        ]
      }
    ],
    otherLibrary: [
      html, css, sass, bootstrap, materailUI, query, formik, hookForm
    ]
  },
  education: [
    {
      name: 'Master of Business Administration',
      institution: 'Bharathiar University',
      loctaion: 'Coimbatore, Tamil Nadu',
      score: '68%'
    },
    {
      name: 'Electronic and Communication Engineering',
      institution: 'Sri Manakula Vinayagar Engineering College',
      loctaion: 'Puducherry',
      score: '8.3 CGPA'
    },
    {
      name: 'Higher Secondary School',
      institution: 'Amalorpavam Hr Sec School',
      loctaion: 'Pondicherry',
      score: 'Bio-72%'
    },
    {
      name: 'Secondary School',
      institution: 'Amalorpavam Hr Sec School',
      loctaion: 'Pondicherry',
      score: '82%'
    },
  ],
  experience: [
    {
      name: 'ZufiZ Technologies Pvt Ltd',
      jobResponsibilies: [
        {
          name: 'Job Responsibilies',
          details: [
            'Developed highly responsive user interface component via React JS',
            'Identifying and troubleshooting UX problems',
            'Ability to understand business requirements and translate them into technical requirements',
            'Collaborate with back-end developers to improve the user interface web application',
            'Mentored 3+ team members. Monitored team progress and enforced deadlines',
            'Collaborate with senior developers to update the website and create new features',
            'Interacted with the Business Analysts, Scrum Masters and Testing Team to achieve a happy path task completion',
          ]
        }
      ],
      technicalExperiences: [
        {
          name: 'Technical Experiences',
          details: [
            'Designed responsive website using HTML5, CSS3 and Bootstrap',
            'Developed user interface web application using  React JS, Redux, React Hooks, Typescript',
            'Integrated the RESTful web services calls for POST, PUT, DELETE and GET methods',
            'Performed Client side validation using Javascript',
            'Strong on customizing libraries like Material UI, Formik, Place Autocomplete, ApexCharts and third part service like Auth0',
            'Built design system and reusable components for web applications',
            'Created address search feature using Place Autocomplete and customed according to the user requirement',
            'Created a Invoice Generator with taxation using React Hook Form and provided pdf download option using React-pdf',
            'Worked on animations using Framer Motion, React Reveal, React Parallax',
            'Having knowledge of SASS'
          ]
        }
      ]
    },
  ],
  work: [
    {
      name: 'Marketspark',
      app: 'Project Management',
      url: marketspark,
      describe: 'Our comprehensive marketing solutions help businesses just like yours thrive and grow'
    },
    {
      name: 'Fanmode',
      app: 'Web Page',
      url: fanmode,
      describe: 'Make The World A Stadium'
    },
    {
      name: 'Vinayak',
      app: 'Stock Management',
      url: vinayak,
      describe: 'Scaffolding regardless of the volume.'
    },
  ],
  contact: [
    {
      name: 'Email',
      details: 'parkaviindhu90@gmail.com',
      icon: <Mail style={{ fontSize: '30px' }} />
    },
    {
      name: 'Address',
      details: "No.46,3rd cross, Sivagami nagar,Reddiyarpalayam",
      icon: <Place style={{ fontSize: '30px' }} />
    },
    {
      name: 'Contact',
      details: 8807742115,
      icon: <Phone style={{ fontSize: '30px' }
      } />
    }
  ]

}


export interface Drawer {
  name: string,
  scroll: string
}

export const drawer: Drawer[] = [
  {
    name: "Home",
    scroll: "home"
  },
  {
    name: "About",
    scroll: "about"
  },
  {
    name: "Skills",
    scroll: "skills"
  },
  {
    name: "Experience",
    scroll: "experience"
  },
  {
    name: "Education",
    scroll: "education"
  },
  {
    name: "Work",
    scroll: "work"
  },
  {
    name: "Contact",
    scroll: "contact"
  },
]
