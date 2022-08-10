const Button = ({handleclick, text, cls}) => {
  return (
    <button style={{margin : '5px'}} type="button" class={cls} onClick={handleclick}>
      {text}
    </button>
  )
}
export default Button