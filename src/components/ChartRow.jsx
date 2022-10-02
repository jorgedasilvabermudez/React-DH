const ChartRow = ({id,title,year}) => {
  return (
    <tr>
        <th scope="row">{id}</th>
        <td>{title}</td>
        <td>{year}</td>
    </tr>
  )
}

export default ChartRow