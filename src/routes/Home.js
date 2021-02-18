import React from 'react';
import axios from 'axios'; //API 호출
import Movie from '../components/Movie';
import './Home.css';

class Home extends React.Component { 
   state = {
      isLoading: true,
      movies: [],
   };

   //async : getMovies 함수는 시간이 필요하다
   //await : axios.get의 실행을 기다려 달라
   getMovies = async () => {
      //axios.get()이 반환한 결과를 movies에 저장
      const { //ES6 구조 분해 할당
         data: {
            data: { movies },
         },
      } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
      this.setState({ movies, isLoading: false }); //앞의 movies는 state, 영화 데이터가 있는 변수
   }

   componentDidMount(){
      //영화 데이터 로딩!
      //axios는 네트워크를 사용하므로 느리게 동작함
      //그래서 axios.get()를 분리해줌
      // axios.get('https://yts-proxy.now.sh/list_movies.json');
      this.getMovies();
   }

   render() {
      const {isLoading, movies} = this.state;
      return (
         <section className="container">
            {isLoading 
               ? ( <div className="loader">
                     <span className="loader__text">Loading...</span>
                  </div> )
               : ( <div className="movies"> {
                  movies.map(movie => (
                   <Movie 
                     key={movie.id} //key 값을 항상 확인
                     id={movie.id}
                     year={movie.year}
                     title={movie.title}
                     summary={movie.summary}
                     poster={movie.medium_cover_image}
                     genres={movie.genres}
                  /> ))}
               </div>
            )}
         </section>
      );
   }
}

export default Home;
