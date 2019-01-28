import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
  const good = props.good
  const neutral = props.neutral
  const bad = props.bad
  if ((bad + neutral + good) === 0) {
    return (
      <div>
        <p>Ei yhtään palautetta annettuna</p>
      </div>

    )
  }

  return (
    <table>
      <tbody>
        <Statistic text='Hyvä' statistic={good} />
        <Statistic text='Neutraali' statistic={neutral} />
        <Statistic text='Huono' statistic={bad} />
        <Statistic text='Yhteensä' statistic={good + bad + neutral} />
        <Statistic text='keskiarvo' statistic={(good - bad) / (good + bad + neutral)} />
        <Statistic text='positiivisia' statistic={good / (good + bad + neutral) * 100 + ' %'} />
      </tbody>

    </table>

  )
}

const Statistic = (props) => {
  return (
    <tr>
      <td>{props.text}:</td>
      <td>{props.statistic}</td>
    </tr>

  )

}

const Button = (props) =>
  <button onClick={props.handleClick}>{props.text}</button>


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)




  return (
    <div>
      <h1>Anna unicafelle palautetta</h1>
      <Button handleClick={() => setGood(good + 1)} text='Hyvä' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='Neutraali' />
      <Button handleClick={() => setBad(bad + 1)} text='Huono' />
      <h2>Statistiikka:</h2>
      <Statistics good={good} bad={bad} neutral={neutral} />


    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)