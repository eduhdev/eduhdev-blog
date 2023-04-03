import React from "react"
import { Trash } from "@styled-icons/boxicons-solid/Trash"
import styled from "styled-components"

export { default as PercentTotalCalculator } from "./PercentTotalCalculator"
export { default as PercentConversionCalculator } from "./PercentConversionCalculator"
export { default as PercentageChangeCalculator } from "./PercentageChangeCalculator"

const Wrapper = styled.div`
  position: relative;
  padding-right: 3rem;
  margin-left: auto;
`

export const ActionResultCalc = ({ result, onClear, hasPercentageSign }) => (
  <Wrapper>
    <Trash
      size={30}
      color="#666"
      style={{ marginRight: 10, cursor: "pointer" }}
      onClick={onClear}
    />
    <button type="submit">Calculate</button>
    <input type="number" value={result} disabled />
    {hasPercentageSign && <span className="percentage-sign">%</span>}
  </Wrapper>
)

export const Input = ({ value, onChange, resetResult }) => (
  <input
    type="number"
    required
    value={value}
    onChange={(e) => {
      onChange(e.target.value)
      resetResult()
    }}
  />
)
