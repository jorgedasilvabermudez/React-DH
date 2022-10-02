import ChartRow from "./ChartRow";
import React, { Component } from "react";
class Chart extends Component{
  constructor() {
    super();
    this.state = {
      moviesList: [],
    };
  }

  async getMovies(){
    try{
      const API_KEY="e9a43a00";
      const URL = `http://www.omdbapi.com/?s=action&apikey=${API_KEY}`;
      const response = await fetch(URL);
      const data = await response.json();
      this.setState({...this.state, moviesList: [...data.Search] });
    } catch (error) {
      console.log(error);
    }
  }
  async componentDidMount() {
    try {
      await this.getMovies();
    } catch (error) {
      console.log(error);
    }
  }
  
    // const rows = [
    //     {
    //       id: "1",
    //       title: "Lord Of The Rings",
    //       year: "0000",
    //     },
    //     {
    //       id: "2",
    //       title: "The Crow",
    //       year: "0001",
    //     },
    //     {
    //       id: "3",
    //       title: "Matrix",
    //       year: "0002",
    //     },
    //     {
    //       id: "4",
    //       title: "Avengers",
    //       year: "0003",
    //     },
    //     {
    //       id: "5",
    //       title: "Interestellar",
    //       year: "0004",
    //     },
    //   ];
  render(){
    return (
      <div className="col mb-4">	
        <div className="card shadow mb-4">      
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">Actions movies in the DataBase </h5>
          </div> 
          <div className="card-body">
            <table className="table table-striped table-hover ">
                <thead>
                      <tr className="table-dark">   
                          <th scope="col">IMDB Id</th>
                          <th scope="col">Titulo</th>
                          <th scope="col">Año</th>
                      </tr>
                </thead>
                <tbody>
                    {!this.state.moviesList.length ? (
                      <tr>
                        <td>CARGANDO...</td>
                        <td>CARGANDO...</td>
                        <td>CARGANDO...</td>
                      </tr>
                    ) : (
                    this.state.moviesList.map((movie) => (
                      <ChartRow key= {movie.imdbID}
                        title={movie.Title}
                        id={movie.imdbID}
                        year={movie.Year}
                      />
                    ))
                    )}
                </tbody>
            </table>  
          </div>      
        </div>
      </div>
    )
  }
}
export default Chart