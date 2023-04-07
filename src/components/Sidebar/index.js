import React, { useState } from "react"

import Profile from "../Profile"
import SocialLinks from "../SocialLinks"
import MenuLinks from "../MenuLinks"

import * as S from "./styles"

const Sidebar = ({ toolsOpened }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <S.SidebarWrapper>
      <Profile onClickMenu={() => setMenuOpen(!menuOpen)} />
      <SocialLinks />
      <MenuLinks isMenuOpen={menuOpen} toolsOpened={toolsOpened} />
    </S.SidebarWrapper>
  )
}

export default Sidebar
