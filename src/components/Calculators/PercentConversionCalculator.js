import React, { useState } from "react"
import { ActionResultCalc, Input } from "."
import { formatPercentage } from "../../utils"
import * as S from "./styles"

const PercentConversionCalculator = () => {
  const [num, setNum] = useState("")
  const [total, setTotal] = useState("")

  const [result, setResult] = useState("")

  const calculate = (e) => {
    e.preventDefault()
    if (num && total) {
      const newResult = formatPercentage((num / total) * 100)
      setResult(newResult)
    }
  }

  const resetResult = () => {
    if (result) setResult("")
  }

  const onClear = () => {
    resetResult()
    setNum("")
    setTotal("")
  }

  return (
    <S.Wrapper>
      <form onSubmit={calculate}>
        <div className="values">
          <Input value={num} onChange={setNum} resetResult={resetResult} />
          is what percent of
          <Input value={total} onChange={setTotal} resetResult={resetResult} />
          ?
        </div>
        <ActionResultCalc hasPercentageSign result={result} onClear={onClear} />
      </form>
    </S.Wrapper>
  )
}

export default PercentConversionCalculator
