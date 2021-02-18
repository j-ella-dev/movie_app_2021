import React from 'react';

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
            return <span>{location.state.title}</span>;
        } else {
            return null;
        }
    }
}

export default Detail;