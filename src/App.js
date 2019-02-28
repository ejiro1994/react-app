import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    console.log('this is my initializer')


    const movies = [
      {id: 0, poster_src: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/xRWht48C2V8XNfzvPehyClOvDni.jpg', title: 'alita battle angel', overview: ' the best movie'},
      {id: 1, poster_src: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/v3QyboWRoA4O9RbcsqH8tJMe8EB.jpg', title: 'creed 2', overview: ' the second best movie'}
    ]

    // this.state = {rows: [
    //   <p key="1">this is row 0</p>,
    //   <p key="2">this is row 1</p>,
    //   <p key="3">this is row 2</p>
    // ]}

    var movieRows = []

    movies.forEach((movie) => {
      console.log(movie.title)
      //  

      const movieRow = <table key={movie.id}>
        <tbody>
          <tr>
            <td>
              <img alt="poster" src={movie.poster_src}/>
            </td>
            <td>
              {movie.title}
              <p>{movie.overview}</p>
            </td>
          </tr>
        </tbody>
      </table>
      movieRows.push(movieRow)
    })
    this.state = {rows: movieRows}
  }
     
  render() {
    return (
      <div>

        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img width="100px "src="netflix.png" alt="company-logo"/>
              </td>
              <td>
                <h1>MoviesDB Search </h1>
              </td>
            </tr>
          </tbody>
        </table>

        <input style={{
          fontSize: 24,
          display: 'block',
          width: '99%',
          paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16,
        }} placeholder="Enter search term"/>

 {this.state.rows}
       </div>

      
       
    );
  }
}

export default App;
