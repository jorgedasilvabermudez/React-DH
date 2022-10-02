import ContentRowMovies from "./ContentRowMovies"
import GenresInDb from "./GenresInDb";
import LastMovieInDb from "./LastMovieInDb";
const ContentRowTop = () => {
    const data = [
        {
          titulo: "Movies in data base",
          color: "primary",
          cifra: "1",
          icono: "fa-film",
        },
        {
          titulo: "Total Awards",
          color: "success",
          cifra: "2",
          icono: "fa-award",
        },
        {
          titulo: "Actor Quantity",
          color: "warning",
          cifra: "3",
          icono: "fa-user",
        },
      ];

  return (
      <div className="container-fluid">
        {/* <!-- Content Row Top --> */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
        </div>
    
        {/* <!-- Content Row Movies--> */}
        <div className="row">
        {data.map((data)=>{return <ContentRowMovies {...data} key={data.titulo} />})}        

        </div>
        {/* <!-- End movies in Data Base --> */}
        

        {/* <!-- Content Row Last Movie in Data Base --> */}
        <div className="row">
            {/* <!-- Last Movie in DB --> */}
            <LastMovieInDb />
            {/* <!-- End content row last movie in Data Base --> */}

            {/* <!-- Genres in DB --> */}
            <GenresInDb />
        </div>
    {/* <!--End Content Row Top--> */}
    </div>
  )
}

export default ContentRowTop