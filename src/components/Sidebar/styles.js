import styled from "styled-components"
import media from "styled-media-query"

export const SidebarWrapper = styled.aside`
  align-items: center;
  border-right: 1px solid var(--borders);
  background: var(--mediumBackground);
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  padding: 2rem;
  text-align: center;
  width: 20rem;

  ${media.lessThan("medium")`
    width: 100%;
    height: 100%;
    align-items: flex-start;
    padding: 1rem 2rem;
    background: transparent;
    padding: 0;
    pointer-events: none;
  `}
`
