import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import getThemeColor from "../../utils/getThemeColor"

import Avatar from "../Avatar"
import * as S from "./styles"

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, position },
    },
  } = useStaticQuery(graphql`
    query MySiteMetaData {
      site {
        siteMetadata {
          title
          position
        }
      }
    }
  `)
  return (
    <S.ProfileWrapper>
      <S.ProfileLink
        cover="true"
        direction="left"
        bg={getThemeColor()}
        duration={0.6}
        to="/"
      >
        <Avatar />
        <S.ProfileAuthor>
          {title}
          <S.ProfilePosition>{position}</S.ProfilePosition>
        </S.ProfileAuthor>
      </S.ProfileLink>
    </S.ProfileWrapper>
  )
}

export default Profile
