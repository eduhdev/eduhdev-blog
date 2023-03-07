import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const MenuLinksWrapper = styled.nav`
  ${media.lessThan("medium")`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    width: 100%;
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

  ${media.lessThan("medium")`
    font-size: 2rem;
  `}
`

export const MenuLinksItem = styled.li`
  padding: 0.5rem 0;

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
