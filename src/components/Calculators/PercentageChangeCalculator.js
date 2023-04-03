import React, { useState } from "react"
import { ActionResultCalc, Input } from "."
import { formatPercentage } from "../../utils"
import * as S from "./styles"

const PercentChangeCalculator = () => {
  const [newVal, setNewVal] = useState("")
  const [oldVal, setOldVal] = useState("")

  const [result, setResult] = useState("")

  const calculate = (e) => {
    e.preventDefault()
    if (newVal && oldVal) {
      const newResult = formatPercentage(((newVal - oldVal) / oldVal) * 100)

      setResult(Number(newResult))
    }
  }

  const resetResult = () => {
    if (result) setResult("")
  }

  const onClear = () => {
    resetResult()
    setNewVal("")
    setOldVal("")
  }

  return (
    <S.Wrapper>
      <form onSubmit={calculate}>
        <div className="values">
          What is the percentage increase/decrease from:
          <Input
            value={oldVal}
            onChange={setOldVal}
            resetResult={resetResult}
          />
          to
          <Input
            value={newVal}
            onChange={setNewVal}
            resetResult={resetResult}
          />
          ?
        </div>
        <ActionResultCalc hasPercentageSign result={result} onClear={onClear} />
      </form>
    </S.Wrapper>
  )
}

export default PercentChangeCalculator
