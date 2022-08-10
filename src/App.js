import { useState } from 'react'
import Button from './components/Button'
import Statistics from './components/Statistics'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [feed, setFeed] = useState(0)
  const handleGood = () => {
    setFeed (1)
    const newGood = good +1 
    const newAll = all +1
    setGood(newGood)
    setAll(newAll)
    const newAverage = (average + 1)
    setAverage (newAverage)
    console.log("good clicked", {newGood})
  }
  const handleNeutral = () => {
    setFeed (1)
    const newneutral = neutral +1 
    const newAll = all +1
    setNeutral(newneutral)
    setAll(newAll)
    console.log("Neutral clicked" , {newneutral})
  }
  const handleBad = () => {
    setFeed (1)
    const newbad = bad +1 
    const newAll = all +1
    setBad(newbad)
    setAll(newAll)
    const newAverage = (average - 1) 
    setAverage (newAverage)
    console.log("Bad clicked", {newbad})
  }
  if (feed === 1){
   return (
    <div>
      <h1> Give your feedback </h1>
      <Button cls="btn btn-success" text='Good' handleclick= {handleGood}/>
      <Button cls="btn btn-primary" text='Neuteral' handleclick= {handleNeutral} />
      <Button cls="btn btn-secondary" text='Bad' handleclick= {handleBad}/>
      <h2> Statistics </h2>
      <div class="table-responsive-sm">
      <Statistics text = 'Good' value = {good}/>
      <Statistics text = 'Neutral' value = {neutral}/>
      <Statistics text = 'Bad' value = {bad}/>
      <Statistics text = 'all' value = {all}/>
      <Statistics text = 'average' value = {average / all}/>
      <Statistics text = 'positive' value = {(good / all) * 100}/>
      </div>

      
    </div>
  )}
  else {
    return (
      <div>
        <h1> Give your feedback </h1>
        <Button cls="btn btn-success" text='Good' handleclick= {handleGood}/>
        <Button cls="btn btn-primary" text='Neuteral' handleclick= {handleNeutral} />
        <Button cls="btn btn-secondary" text='Bad' handleclick= {handleBad}/>
        <h2> Statistics </h2>
        <p> No feedback provided</p>
        </div>
        )
  }
}

export default App