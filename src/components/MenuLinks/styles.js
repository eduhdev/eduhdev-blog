import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const MenuLinksWrapper = styled.nav`
  width: 100%;
  ${media.lessThan("medium")`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    height: 100%;
    transform: translateX(-100%);
    background: var(--mediumBackground);
    transition: transform 0.4s ease-in-out;
    pointer-events: initial;

    ${({ isMenuOpen }) =>
      isMenuOpen &&
      `
       transform: translateX(0);
    `}
  `}
`

export const MenuLinksList = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;
  width: 100%;

  ${media.lessThan("medium")`
    font-size: 2rem;
  `}
`

export const MenuLinksItem = styled.li`
  padding: 0.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  span {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  .expanded {
    width: 100%;
    background-color:  var(--lightBackground);
    padding: 15px 0 15px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  span {
    color: var(--texts);
  }

  .active {
    color: var(--highlight);
  }
`

export const MenusLinksLink = styled(AniLink)`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: var(--highlight);
  }
`
