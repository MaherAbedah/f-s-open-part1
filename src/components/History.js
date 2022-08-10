const History = (props) => {
  console.log(props)
  if (props.allCounts.length === 0){
    return(
      <div>
        The app is used by clicking the buttons
      </div>
    )
  }
  return(
    <div>
      button press history : {props.allCounts.join("-")}
    </div>
  )
}

export default History