import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"
import Pagination from "../components/Pagination"
import * as S from "../components/ListWrapper/styles"

const BlogList = ({ data, pageContext: { currentPage, numPages } }) => {
  const postList = data.allMarkdownRemark.edges
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage === 2 ? "/" : `/page/${currentPage - 1}`
  const nextPage = `/page/${currentPage + 1}`

  return (
    <Layout>
      <SEO title="Home" />
      <S.ListWrapper>
        {postList.map(
          ({
            node: {
              timeToRead,
              fields: { slug },
              frontmatter: { background, category, date, title, description },
            },
          }) => (
            <PostItem
              key={title}
              slug={slug}
              background={background}
              category={category}
              date={date}
              timeToRead={timeToRead}
              title={title}
              description={description}
            />
          )
        )}
      </S.ListWrapper>
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        currentPage={currentPage}
        numPages={numPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Layout>
  )
}

export const query = graphql`
  query PostList($limit: Int!, $skip: Int!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            background
            category
            date(formatString: "DD [de] MMMM [de] Y", locale: "pt-br")
            description
            title
          }
          timeToRead
          fields {
            slug
          }
        }
      }
    }
  }
`

export default BlogList
