//Router : 사용자가 입력한 URL을 통해 특정 컴포넌트를 불러줌
//localhost:3000/home => Home 컴포넌트
//localhost:3000/about => About 컴포넌트
//react-router-dom은 여러 종류의 라우터를 제공함
import React from 'react';
// import Home from './routes/Home';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Detail from './routes/Detail';
import Navigation from './components/Navigation';

function App() {
   return (
      <HashRouter>
         <Navigation />
         {/* path props "/" : 기본 접속 컴포넌트 */}
         {/* exact props는 route 컴포넌트가 path props와 정확하게 일치하는 url에만 반응하도록 만듬 */}
         <Route path="/" exact={true} component={Home} />
         <Route path="/about" component={About} />
         <Route path="/movie-detail" component={Detail} />
      </HashRouter>

      // <HashRouter>
      //    {/* 라우터는 사용자가 /home/introduction에 접속하면 /, /home, /home/introduction순으로
      //    path props가 있는지 찾음. /home, /home/introduction이 둘 다 있으므로 home, introduction
      //    컴포넌트가 모두 그려짐 */}
      //    <Route path="/home">
      //       <h1>Home</h1>
      //    </Route>
      //    <Route path="/home/introduction">
      //       <h1>Introduction</h1>
      //    </Route>
      //    <Route path="/about">
      //       <h1>About</h1>
      //    </Route>
      // </HashRouter>
   );
}

export default App;
