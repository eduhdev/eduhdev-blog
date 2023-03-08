import React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Search from "../components/Search"

const SearchPage = () => (
  <Layout>
    <Seo title="About" />
    <Search />
  </Layout>
)

export default SearchPage
