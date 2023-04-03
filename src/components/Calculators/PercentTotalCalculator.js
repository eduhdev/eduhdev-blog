import React, { useState } from "react"
import { ActionResultCalc, Input } from "."
import * as S from "./styles"

const PercentTotalCalculator = () => {
  const [percent, setPercent] = useState("")
  const [value, setValue] = useState("")

  const [result, setResult] = useState("")

  const calculate = (e) => {
    e.preventDefault()

    if (percent && value) {
      setResult((value * percent) / 100)
    }
  }

  const resetResult = () => {
    if (result) setResult("")
  }

  const onClear = () => {
    resetResult()
    setPercent('')
    setValue('')
  }

  return (
    <S.Wrapper>
      <form onSubmit={calculate}>
        <div className="values">
          What is
          <Input value={percent} onChange={setPercent} resetResult={resetResult} />
          % of
          <Input value={value} onChange={setValue} resetResult={resetResult} />
          ?
        </div>
        <ActionResultCalc result={result} onClear={onClear} />
      </form>
      {result && (
        <p className="hint">
          If you wanna to discount <span>{percent}%</span> of{" "}
          <span>{value}</span> the new value will be:{" "}
          <span>{value - result}</span>
        </p>
      )}
    </S.Wrapper>
  )
}

export default PercentTotalCalculator
