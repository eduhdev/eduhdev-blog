import React from "react"
import PropTypes from "prop-types"

import SideBar from "../Sidebar"
import MenuBar from "../MenuBar"

import * as S from "./styles"
import GlobalStyles from "../../styles/global"

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <S.LayoutWrapper>
      <SideBar />
      <S.LayoutMain>{children}</S.LayoutMain>
      <MenuBar />
    </S.LayoutWrapper>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
