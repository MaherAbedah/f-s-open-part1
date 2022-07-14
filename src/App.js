import { useState } from "react"
import Display  from "./components/Display"
import Button from "./components/Button"
const App = () => {
  const [counter , setCounter] = useState (0) 

  const increaseByOne = () => {setCounter(counter + 1)}
  const setToZero = () => {setCounter(0)}
  const decreaseByOne = () => {setCounter(counter - 1)}
  
  return (
    <>
      <Display counter = {counter}/>
      <Button onClick={increaseByOne} text ={"plus"}/>
      <br></br>
      <Button onClick={decreaseByOne} text ={"minus"}/>
      <br></br>
      <Button onClick={setToZero} text ={"reset"}/>            
    </>
  )
}
export default App
