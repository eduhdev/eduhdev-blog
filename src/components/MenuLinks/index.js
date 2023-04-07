import React, { useState } from "react"
import { MinusSquareOutline } from "@styled-icons/evaicons-outline/MinusSquareOutline"
import { PlusSquareOutline } from "@styled-icons/evaicons-outline/PlusSquareOutline"

import getThemeColor from "../../utils/getThemeColor"

import links from "./content"

import * as S from "./styles"

const MenuLinks = ({ isMenuOpen }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <>
      <S.MenuLinksWrapper isMenuOpen={isMenuOpen}>
        <S.MenuLinksList>
          {links.map(({ label, url, items }, i) => {
            return items?.length ? (
              <S.MenuLinksItem key={i}>
                <span onClick={() => setExpanded(!expanded)}>
                  {label}
                  {expanded ? (
                    <MinusSquareOutline size={24} />
                  ) : (
                    <PlusSquareOutline size={24} />
                  )}
                </span>
                {expanded && (
                  <div className="expanded">
                    {items.map(({ label, url }) => (
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
                    ))}
                  </div>
                )}
              </S.MenuLinksItem>
            ) : (
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
            )
          })}
        </S.MenuLinksList>
      </S.MenuLinksWrapper>
    </>
  )
}

export default MenuLinks
