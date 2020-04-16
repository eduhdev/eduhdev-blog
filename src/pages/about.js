import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import * as S from "../components/Post/styles"

const AboutPage = () => {
  return (
    <Layout>
      <SEO
        title="Sobre mim"
        description="uma pequena descricao sobre Eduardo Carvalho"
        image
      />
      <S.PostHeader>
        <S.PostTitle>My Name is Eduardo Carvalho</S.PostTitle>
      </S.PostHeader>
      <S.MainContent>
        <div>
          <p>
            Meu nome é Eduardo Carvalho - Web Developer, 23 anos, natural de
            Uraí - PR. Minha experiência com a tecnologia começou em 2008, aos
            13 anos, quando comprei meu primeiro computador e aprendi como
            montar, desmontar, e também a formatar, nascia ali minha paixão pela
            computação. Logo comecei a trabalhar como técnico de informática na
            VLC Informática. Em 2015 ingressei no curso de Análise e
            Desenvolvimento de Sistemas e comecei a trabalhar como técnico de
            redes na empresa Urainet Telecom, pequeno provedor de internet de
            minha cidade natal. No começo de 2017, com o final do curso
            chegando, decidi me mudar para Londrina - PR e finalmente começar
            minha carreira como desenvolvedor na GELT Tecnologias e Sistemas.
            Iniciei trabalhando com ASPNET MVC, pouco tempo depois comecei
            também a trabalhar com Java(Android) e também PHP(Wordpress). Nesse
            período tive uma boa base de Front End, Back End, Mobile, Web Api,
            Versionamento de código e Trabalho em equipe. Em maio de 2018,
            comecei a trabalhar na K2 Estratégia Digital, uma agência de
            Marketing Digital e Inbound Marketing. Nesse período trabalhei na
            maior parte do tempo com sites Wordpress e um pouco com sites
            Magento. Além de criar novos sites, tinha como principal função
            fazer ajustes de performance e SEO nos sites já existentes.
            Trabalhei na K2 até o final de março deste ano, quando resolvi sair.
            Nessa minha até então curta carreira, além das habilidades já
            descritas anteriormente, ja vinha estudando à algum tempo javascript
            (NodeJs, ReactJs e ReactNative) e CSS (Sass, FlexBox, GridLayouts).
            Após todas essas experiências, cheguei à conclusão que quero focar
            no Front End daqui pra frente. Desejo trabalhar em uma empresa onde
            eu possa agregar conhecimento e crescer com toda a equipe, tenho
            disponibilidade de mudança para qualquer lugar.
          </p>
        </div>
      </S.MainContent>
    </Layout>
  )
}

export default AboutPage
