import React from "react"
import {
  PercentageChangeCalculator,
  PercentConversionCalculator,
  PercentTotalCalculator,
} from "../../components/Calculators"

import Layout from "../../components/Layout"
import Seo from "../../components/seo"

import { MainContent } from "../../styles/base"
import { Wrapper } from "./styles"

const PercentageCalculator = () => {
  return (
    <Layout>
      <Seo
        title="About Me"
        description="I'm a passionate frontend developer with expertise in HTML, CSS, JavaScript, and React. With a strong foundation in programming, problem-solving skills, and a constant desire to learn and grow, I am committed to delivering high-quality web solutions. Let's connect and bring your web project to life."
      />
      <MainContent>
        <h1>Percentage Calculator</h1>
        <p>
          It's a helpful tool that can simplify various calculations involving
          percentages. Whether you need to calculate discounts, taxes, tips, or
          simply convert fractions into percentages, this calculator can save
          you time and effort.
        </p>
        <Wrapper>
          <PercentTotalCalculator />
          <PercentConversionCalculator />
          <PercentageChangeCalculator />
        </Wrapper>
      </MainContent>
    </Layout>
  )
}

export default PercentageCalculator
