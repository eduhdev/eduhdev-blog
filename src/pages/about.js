import React from "react"

import Layout from "../components/Layout/"
import Seo from "../components/seo"
import SocialLinks from "../components/SocialLinks"

import { MainContent } from "../styles/base"
import { getAge } from "../utils"

const birthDate = '08-05-1995'

const AboutPage = () => (
  <Layout>
    <Seo
      title="About Me"
      description="I'm a passionate frontend developer with expertise in HTML, CSS, JavaScript, and React. With a strong foundation in programming, problem-solving skills, and a constant desire to learn and grow, I am committed to delivering high-quality web solutions. Let's connect and bring your web project to life."
    />
    <MainContent>
      <h1>A little about my History 👋</h1>
      
      <p>Hi there! My name is Eduardo Carvalho, a {getAge(birthDate)}-year-old frontend developer from Brazil .</p>
      <p>My love for technology started at a young age, when I was just 13 years old. I began my career as a computer technician, working on tasks such as mounting, fixing, removing virus and formatting Windows PC. It was during this time that I realized that I had a passion for technology and knew that this was the field I wanted to pursue.</p>
      <p>In 2015, I started my journey in the programmig industry by enrolling in the Analysis and System Development Course. It was during my last semester of this course, in 2017, that I landed my first job as a software developer and I have been dedicated to this field ever since.</p>
      <p>My experience in the industry has taught me the importance of staying up-to-date with the latest technologies and trends. I am always eager to learn and expand my knowledge to continue to grow as a developer.</p>
      <p>In my free time, I love to learn new things. I enjoy reading books and I have a passion for football, both playing and watching it. Spending time with friends and family is important to me and there's nothing better than enjoying a cold beer while listening to some good music.</p>
      
      <h2>🔧 Skills</h2>

      <ul>
        <li>Strong foundation in HTML, CSS and JavaScript</li>
        <li>In-depth knowledge of React-specific concepts, including components, JSX, state and props, virtual DOM and lifecycle methods</li>
        <li>Familiarity with Redux and the Context API</li>
        <li>Experience with flexbox, grid layout, styled components, Sass, CSS modules and popular CSS frameworks such as Bootstrap, Material UI and Tailwind</li>
        <li>Experience with WordPress, Strapi and Shopify</li>
        <li>Proficient in SQL and familiar with MySQL, Postgres and MongoDB</li>
        <li>Experience with unit tests and integration tests using Jest, React Testing Library and Cypress</li>
        <li>Ability to integrate with RESTful and GraphQL APIs, using tools such as Axios, Fetch API and Apollo Client</li>
        <li>Strong problem-solving and debugging skills to tackle complex issues and find effective solutions</li>
      </ul>

      <h2>🤝 Let's connect</h2>

      <p>Feel free to reach out to me through any of these channels.</p>

      <SocialLinks hideStyle />
    </MainContent>
  </Layout>
)

export default AboutPage
