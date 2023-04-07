import React, { useEffect, useState } from "react"

import Layout from "../../components/Layout"
import Seo from "../../components/seo"

import { MainContent } from "../../styles/base"
import { dollarPrice, realPrice } from "../../utils"

import { Wrapper } from "./styles"

const HourConverter = ({ toolsOpened }) => {
  let savedHourRate = ""
  if (typeof window !== "undefined" && window.localStorage) {
    savedHourRate = localStorage.getItem("hour-rate") || ""
  }
  const [hourRate, setHourRate] = useState(savedHourRate)
  const [totalHours, setTotalHours] = useState("")
  const [result, setResult] = useState()
  const [dollarRate, setDollarRate] = useState()
  const [loading, setLoading] = useState(true)

  const calulate = (e) => {
    e.preventDefault()
    if (hourRate && totalHours) {
      setResult(hourRate * totalHours)
      localStorage.setItem("hour-rate", hourRate)
    }
  }

  const clear = () => {
    setTotalHours("")
    setResult()
  }

  useEffect(() => {
    var myHeaders = new Headers()
    myHeaders.append("apikey", process.env.GATSBY_API_LAYER_KEY)

    var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    }

    fetch(
      "https://api.apilayer.com/currency_data/convert?to=BRL&from=USD&amount=1",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => setDollarRate(data.result))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }, [])

  return (
    <Layout toolsOpened={toolsOpened}>
      <Seo
        title="About Me"
        description="I'm a passionate frontend developer with expertise in HTML, CSS, JavaScript, and React. With a strong foundation in programming, problem-solving skills, and a constant desire to learn and grow, I am committed to delivering high-quality web solutions. Let's connect and bring your web project to life."
      />
      <MainContent>
        <h1>USD-BRL Rate Calculator.</h1>
        <p>
          This tool is a convenient way for Brazilian workers who are employed
          by international companies to convert their hourly rate from US
          dollars to Brazilian reals. By automatically retrieving the current
          dollar-to-real exchange rate, this tool provides an accurate and
          up-to-date conversion. This can help workers avoid the hassle of
          manually calculating their hourly rate in Brazilian reals and ensure
          that they are being paid fairly for their work. Overall, this tool
          simplifies the process of converting hourly rates for workers and can
          help them manage their finances more effectively.
        </p>

        <Wrapper onSubmit={calulate}>
          {loading ? (
            <p>Loading ...</p>
          ) : (
            <>
              <span className="converter">
                {dollarPrice(1)} = {realPrice(dollarRate)}
              </span>
              <div className="flex">
                <p>What's your current hour rate? (in Dollars)</p>
                <input
                  type="number"
                  value={hourRate}
                  onChange={(e) => setHourRate(e.target.value)}
                  required
                />
              </div>
              <div className="flex">
                <p>How many hours do you wanna calc?</p>
                <input
                  type="number"
                  value={totalHours}
                  onChange={(e) => setTotalHours(e.target.value)}
                  required
                />
              </div>
              <div className="btns">
                {result ? (
                  <button className="outlined" onClick={clear}>
                    Clear
                  </button>
                ) : (
                  <div />
                )}
                <button type="Submit">Calculate</button>
              </div>
              {result && (
                <div className="result">
                  <p>
                    Your hour rate is: {dollarPrice(hourRate)} or{" "}
                    {realPrice(hourRate * dollarRate)}
                  </p>
                  <p>
                    The income is: {dollarPrice(result)} or{" "}
                    {realPrice(result * dollarRate)}
                  </p>
                </div>
              )}
            </>
          )}
        </Wrapper>
      </MainContent>
    </Layout>
  )
}

export default HourConverter
