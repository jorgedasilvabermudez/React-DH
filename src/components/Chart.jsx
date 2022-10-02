import ChartRow from "./ChartRow";

const Chart = () => {
    const rows = [
        {
          id: "1",
          title: "Lord Of The Rings",
          year: "0000",
        },
        {
          id: "2",
          title: "The Crow",
          year: "0001",
        },
        {
          id: "3",
          title: "Matrix",
          year: "0002",
        },
        {
          id: "4",
          title: "Avengers",
          year: "0003",
        },
        {
          id: "5",
          title: "Interestellar",
          year: "0004",
        },
      ];
  return (
    <div className="container">
        <table className="table table-striped table-hover ">
            <thead>
                <tr className="table-dark">   
                    <th scope="col">Id</th>
                    <th scope="col">Titulo</th>
                    <th scope="col">Año</th>
                </tr>
            </thead>
            <tbody>
                {rows.map((element) => (<ChartRow {...rows} key={element.id} title={element.title} id={element.id} year={element.year} /> ))}
            </tbody>
        </table>        
    </div>
  )
}

export default Chart