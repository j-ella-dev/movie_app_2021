import React from 'react';
//리액트는 필요한 부분만 페이지 변경하는게 장점
//a의 href 속성은 페이지 전체를 다시 그리기 때문에 안좋음
import {Link} from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    );
}

export default Navigation;