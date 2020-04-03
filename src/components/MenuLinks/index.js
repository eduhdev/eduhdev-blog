import React from "react"

import links from "./content"

import * as S from "./styles"

const MenuLinks = () => (
  <S.MenuLinksWrapper>
    <S.MenuLinksList>
      {links.map(({ label, url }, i) => (
        <S.MenuLinksItem key={i}>
          <S.MenusLinksLink activeClassName="active" to={url}>
            {label}
          </S.MenusLinksLink>
        </S.MenuLinksItem>
      ))}
    </S.MenuLinksList>
  </S.MenuLinksWrapper>
)

export default MenuLinks
