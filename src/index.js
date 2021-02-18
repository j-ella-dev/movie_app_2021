import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; //현재 파일이 있는 폴더 경로

//첫번쨰 인자는 App 컴포넌트. <App /> 은 HTML이 아니고 컴포넌트로 인식하기 위해 쓰는 표시.
//  App 컴포넌트가 반환하는 값을 화면에 그려줌.
//두번째 인자는 App 컴포넌트가 그려질 위치
ReactDOM.render(<App />, document.getElementById('root'));
