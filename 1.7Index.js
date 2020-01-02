import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Display = props => <div>{props.name}: {props.value}</div>

const All = props => <div>{props.name}: {props.value1 + props.value2 +
  props.value3}</div>

const Average = props =>
  <div>
    {props.name}: {(props.value1 +
    props.value3 * -1) / (props.value1 + props.value2 + props.value3)}
  </div>

const Positive = props =>
  <div>
    {props.name}: {props.value1 / (props.value1 + props.value2 + props.value3) * 100 + '%'}
  </div>
  

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
        <Display name='good' value={good} />
        <Display name='neutral' value={neutral} />
        <Display name='bad' value={bad} />
        <All name='all' value1={good} value2={neutral} value3={bad} />
        <Average name='average' value1={good} value2={neutral} value3={bad} />
        <Positive name='positive' value1={good} value2={neutral} value3={bad} />
      </div>
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
