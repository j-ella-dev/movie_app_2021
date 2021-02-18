import React from 'react';
import '../components/Movie.css';

//리다이렉트 기능 : route props의 history 키 활용
//history키에는 push, go, goBack, goForward 등이 있음
class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props; //구조분해할당으로 location, history 얻음
        if (location.state == undefined) { //location.state가 없는 경우
            history.push('/'); //Home으로 이동
        }
    }

    render() {
        const { location } = this.props;
        if (location.state) {
            return (
                <div className="movie">
                    <img src={location.state.poster} alt={location.state.title} title={location.state.title} />
                    <div className="movie__data">
                        <h3 className="movie__title">
                            {location.state.title}
                        </h3>
                        <h5 className="movie__year">{location.state.year}</h5>
                        {/* <ul className="movie__genre">
                            {genres.map((genre, index) => { //index를 빼면 key porp 에러 메시지 발생
                                return <li key={index} className="movie_genre">{genres}</li>;
                            })}
                        </ul> */}
                        {/* 시놉시스 180자까지만 자르기 */}
                        <p className="movie__summary">{location.state.summary}</p>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default Detail;