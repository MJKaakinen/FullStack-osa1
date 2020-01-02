import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Button = ({onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = (props) => { 
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const handleGood = () => {
    setGood(good + 1)
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }
  const handleBad = () => {
    setBad(bad + 1)
  }
  const All = good + neutral + bad
  
  const Average = (good + bad * -1) / All
  
  const Positive = good / All
  
  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button onClick={handleGood} text='good' />
        <Button onClick={handleNeutral} text='neutral' />
        <Button onClick={handleBad} text='bad' />
      </div>
      <h2>statistics</h2>
      <div>
        {good + neutral + bad === 0 &&
          <p>no feedback given</p>
        }
        {good + neutral + bad > 0 && 
          <table>
            <tbody>
              <tr>
                <td>good</td>
                <td>{good}</td>
              </tr>
              <tr>
                <td>neutral</td>
                <td>{neutral}</td>
              </tr>
              <tr>
                <td>bad</td>
                <td>{bad}</td>
              </tr>
              <tr>
                <td>all</td>
                <td>{All}</td>
              </tr>
              <tr>
                <td>average</td>
                <td>{Average.toFixed(1)}</td>
              </tr>
              <tr>
                <td>positive</td>
                <td>{(Positive * 100).toFixed(1) + '%'}</td>
              </tr>
            </tbody>
          </table>
        }
      </div>
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));
