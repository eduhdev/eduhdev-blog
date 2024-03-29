import styled from "styled-components"
import media from "styled-media-query"
import Img from "gatsby-image"

export const AvatarWrapper = styled(Img)`
  border-radius: 50%;
  height: 6rem;
  width: 6rem;
  margin: auto;

  ${media.lessThan("medium")`
    height: 1.875rem;
    width: 1.875rem;
  `}
`
