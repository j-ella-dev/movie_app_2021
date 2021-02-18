import React from 'react';

//함수형 컴포넌트는 return문이 JSX 반환
//클래스형 컴포넌트는 render() 함수가 JSX 반환
//state를 사용하기 위해 클래스형 컴포넌트 사용
class App extends React.Component { 
   //React.Component 클래스의 기능을 추가한 App 클래스

   //리액트는 state가 변경되면 render() 함수를 다시 실행하여 변경된 state를 화면에 출력함
   //state를 직접 변경하는 경우에는 render() 함수를 다시 실행하지 않음
   //그래서 setState 함수를 사용해서 state 값을 변경하고 render 함수를 동작시킴
   state = { //동적 데이터를 다루기
      count: 0,
   };

   //리액트에서 마운트(Mount)로 분류하는 생명주기 함수
   //constructor -> render -> componentDidMount

   //render보다 먼저 실행됨
   constructor(props) {
      super(props);
      console.log('hello');
   }

   //render보다 나중에 실행됨
   componentDidMount() {
      console.log('component rendered');
   }

   //화면이 업데이트되면 실행 (Add버튼, Minus버튼 클릭시)
   componentDidUpdate() {
      console.log('I just updated');
   }

   //컴포넌트가 화면에서 떠날 때 실행 Unmount
   componentWillUnmount() {
      console.log('Goobye')
   }

   add = () => {
      this.setState(current => ({ //current에 현재 state가 넘어옴
         count: current.count + 1,
      }));
   };

   minus = () => {
      this.setState(current => ({
         count: current.count - 1,
      }));
   };

   render() {
      console.log("I'm rendering");
      return (
         <div>
            <h1>The number is: {this.state.count}</h1>
            <button onClick={this.add}>Add</button>
            <button onClick={this.minus}>Minus</button>
         </div>
      );
   }
}

export default App;
