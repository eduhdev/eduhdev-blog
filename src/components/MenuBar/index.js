import React, { useState, useEffect } from "react"
import { Link } from "react-scroll"

import { Home } from "@styled-icons/boxicons-solid/Home"
import { SearchAlt2 as Search } from "@styled-icons/boxicons-regular/SearchAlt2"
import { UpArrowAlt as Arrow } from "@styled-icons/boxicons-regular/UpArrowAlt"
import { Bulb as Light } from "@styled-icons/boxicons-regular/Bulb"
import { Grid } from "@styled-icons/boxicons-solid/Grid"
import { ThList as List } from "@styled-icons/typicons/ThList"

import getThemeColor from "../../utils/getThemeColor"

import * as S from "./styles"

const MenuBar = () => {
  const [theme, setTheme] = useState(null)
  const [display, setDisplay] = useState(null)

  const isDarkMode = theme === "dark"
  const isListMode = display === "list"

  useEffect(() => {
    setTheme(window.__theme)
    setDisplay(window.__display)

    window.__onThemeChange = () => setTheme(window.__theme)
    window.__onDisplayChange = () => setDisplay(window.__display)
  }, [])

  return (
    <S.MenuBarWrapper>
      <S.MenuBarGroup>
        <S.MenuBarLink
          cover="true"
          direction="left"
          bg={getThemeColor()}
          duration={0.6}
          to="/"
          title="Voltar para Home"
        >
          <S.MenuBarItem>
            <Home />
          </S.MenuBarItem>
        </S.MenuBarLink>
        <S.MenuBarLink
          cover="true"
          direction="left"
          bg={getThemeColor()}
          duration={0.6}
          to="/search/"
          title="Procurar no Blog"
        >
          <S.MenuBarItem>
            <Search />
          </S.MenuBarItem>
        </S.MenuBarLink>
      </S.MenuBarGroup>
      <S.MenuBarGroup>
        <S.MenuBarItem
          title="Mudar o tema"
          onClick={() => {
            window.__setPreferredTheme(isDarkMode ? "light" : "dark")
          }}
          className={theme}
        >
          <Light />
        </S.MenuBarItem>
        <S.MenuBarItem
          title="Mudar Visualização"
          onClick={() => {
            window.__setPreferredDisplay(isListMode ? "grid" : "list")
          }}
          className="display"
        >
          {isListMode ? <Grid /> : <List />}
        </S.MenuBarItem>
        <Link to="___gatsby" duration={800} smooth={true}>
          <S.MenuBarItem title="Voltar ao Topo">
            <Arrow />
          </S.MenuBarItem>
        </Link>
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  )
}

export default MenuBar
