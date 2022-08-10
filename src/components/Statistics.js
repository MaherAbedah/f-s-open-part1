const Statistics = (props) => {
return(
  <>
    <table class="table table-sm">
      <tbody>
        <tr>
          <td>{props.text}</td>
          <td>{props.value}</td>
        </tr>
      </tbody>
    </table>
  </>
)
}
export default Statistics