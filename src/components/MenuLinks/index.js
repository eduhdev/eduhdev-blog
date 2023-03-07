import React from "react"

import getThemeColor from "../../utils/getThemeColor"

import links from "./content"

import * as S from "./styles"

const MenuLinks = ({isMenuOpen}) => (
  <>
  <S.MenuLinksWrapper isMenuOpen={isMenuOpen}>
    <S.MenuLinksList>
      {links.map(({ label, url }, i) => (
        <S.MenuLinksItem key={i}>
          <S.MenusLinksLink
            cover="true"
            direction="left"
            bg={getThemeColor()}
            duration={0.6}
            activeClassName="active"
            to={url}
          >
            {label}
          </S.MenusLinksLink>
        </S.MenuLinksItem>
      ))}
    </S.MenuLinksList>
  </S.MenuLinksWrapper>
  </>
)

export default MenuLinks
