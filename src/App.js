
const Hellow = ({name,age}) => {
  const bornYear = () => {
    return new Date().getFullYear() - age
  }
  // console.log(props)
  return(
  <div>
    <p>
      Hellow {name} you are {age} years old
    </p>
    <p>
      so you were propably born in {bornYear()}
    </p>
  </div>)
}
const App = () => {
  const name = 'Maher'
  const age = 35
  return (
    <>
      <h1>Greetings</h1>
      <Hellow name = 'Noor' age = '28'/>
      <Hellow name = {name} age = {age}/>
    </>
  )
}
export default App