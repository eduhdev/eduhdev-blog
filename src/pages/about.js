import React from "react"

import Layout from "../components/Layout/"
import SEO from "../components/seo"
import SocialLinks from "../components/SocialLinks"

import { MainContent } from "../styles/base"

const AboutPage = () => (
  <Layout>
    <SEO
      title="Sobre mim"
      description="Saiba um pouco mais sobre o desenvolvedor por trás deste blog."
    />
    <MainContent>
      <h1>Sobre mim</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, ex
        minus accusantium aliquid quis fugit, magnam aperiam sit omnis placeat
        aliquam architecto nostrum modi recusandae. Eum labore maxime quam
        eaque!
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
        accusantium ullam commodi, sint quaerat porro perferendis inventore unde
        accusamus delectus labore provident doloribus quibusdam nostrum atque
        necessitatibus consequatur dolore. Deserunt!
      </p>
      <h2>Habilidades</h2>

      <ul>
        <li>HTML e Template Languages</li>
        <li>Design Responsivo (Mobile First)</li>
        <li>CSS (Sass, FlexBox, GridLayout, Bootstrap)</li>
        <li>Javascript (Design Patterns, Testes, ES6/7)</li>
        <li>ReactJS / Redux / Flux / ReactNative</li>
        <li>NodeJS</li>
        <li>Automatizadores (Gulp, Webpack)</li>
        <li>Git</li>
        <li>MySQL - MongoDB</li>
        <li>Scrum and Kanban</li>
        <li>TDD e Continuous Integration</li>
        <li>O que eu não sei, aprendo rápido =)</li>
      </ul>

      <h2>Contato</h2>

      <p>
        Você pode entrar em contato comigo através de qualquer uma das minhas
        redes sociais.
      </p>

      <SocialLinks hideStyle />
    </MainContent>
  </Layout>
)

export default AboutPage
