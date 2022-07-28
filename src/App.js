import { useState } from "react"

const App = () => {
  const [left , setLeft] = useState(0)
  const [right , setRight] = useState(0)
  const [allCounts , setAll] = useState([])
  
  const handleLeftClick = () => {
    setLeft (left + 1 )
    setAll (allCounts.concat("L"))
  }

  const handleRightClick = () => {
    setRight(right + 1)
    setAll(allCounts.concat("R"))
  }

  return (
    <>
    {left}
    <button onClick={handleLeftClick}>
      left
    </button>
    <button onClick={handleRightClick}>
      right
    </button>
    {right}
    <p>
      {allCounts.join(" ")}
    </p>
    </>
  )
}
export default App
