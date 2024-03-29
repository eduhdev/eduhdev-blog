import React from "react"
import PropTypes from "prop-types"
import { TransitionPortal } from "gatsby-plugin-transition-link"

import SideBar from "../Sidebar"
import MenuBar from "../MenuBar"

import * as S from "./styles"
import GlobalStyles from "../../styles/global"

const Layout = ({ children, toolsOpened }) => (
  <>
    <GlobalStyles />
    <S.LayoutWrapper>
      <TransitionPortal level="top">
        <SideBar toolsOpened={toolsOpened} />
      </TransitionPortal>
      <S.LayoutMain>{children}</S.LayoutMain>
      <TransitionPortal level="top">
        <MenuBar />
      </TransitionPortal>
    </S.LayoutWrapper>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
