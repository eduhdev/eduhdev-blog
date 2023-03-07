import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const ProfileWrapper = styled.section`
  color: var(--texts);
  display: flex;
  flex-direction: column;

  ${media.lessThan("medium")`
    padding: 1rem;
    width: 100%;
    align-items: ;
    background: var(--mediumBackground);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    pointer-events: initial;
  `}
`

export const ProfileLink = styled(AniLink)`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;
  cursor: pointer;

  ${media.lessThan("medium")`
    display: flex;
    text-align: left;
  `}

  &:hover {
    color: var(--highlight);
  }
`

export const ProfileAuthor = styled.h1`
  font-size: 1.6rem;
  margin: 0.5rem auto 1.5rem;

  ${media.lessThan("medium")`
    font-size: 1.2rem;
    margin: 0 0 0 10px;
  `}
`

export const ProfilePosition = styled.small`
  display: block;
  font-size: 1.2rem;
  font-weight: 300;
  margin-top: 0.2rem;

  ${media.lessThan("medium")`
    font-size: 0.8rem;
  `}
`

export const MobMenu = styled.button`
  display: none;
  flex-direction: column;
  gap: 0.3rem;
  border: 0;
  padding: 0;
  background: transparent;

  span {
    height: 3px;
    width: 28px;
    content: "";
    background: var(--texts);
  }

  ${media.lessThan("medium")`
    display: flex;
  `}
`
