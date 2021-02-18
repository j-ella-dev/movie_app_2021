import React from 'react';
import PropTypes from 'prop-types'; //컴포넌트가 전달받은 props가 정확한지 검사함

//Food 컴포넌트 정의
//props : 컴포넌트에서 컴포넌트로 전달하는 데이터 (like 매개변수)
function Food({name, picture, rating}) {
   return (
      <div>
         <h2>I love {name}</h2>
         <h4>{rating}/5.0</h4>
         {/* img의 alt 속성은 시각 장애인을 위한 것 */}
         <img src={picture} alt={name} width="200"/>
      </div>
   );
}

//리액트는 Food 컴포넌트가 서로 다르다는 걸 알 방법이 없기 때문에
//컴포넌트에 key props (=id) 를 추가해 줘야함
const foodLike = [
   {
      id: 1,
      name: 'burger',
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsmithandjonesjournal.files.wordpress.com%2F2012%2F05%2Fburger.jpg&f=1&nofb=1',
      rating: 4,
   },
   {
      id: 2,
      name: 'cheese burger',
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthecozycook.com%2Fwp-content%2Fuploads%2F2019%2F04%2FMarinated-Ranch-Bacon-Cheeseburger.jpg&f=1&nofb=1',
      rating: 4.3,
   },
   {
      id: 3,
      name: 'bacon cheese burger',
      image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fa57.foxnews.com%2Fglobal.fncstatic.com%2Fstatic%2Fmanaged%2Fimg%2FU.S.%2F876%2F493%2Fbdcheesburger.jpg%3Fve%3D1%26tl%3D1&f=1&nofb=1',
      rating: 4.9,
   },
];

//App 컴포넌트 정의 & 재사용
function App() {
   //return <div className="App"/>;
   return (
      <div>
         <h1>My Favorite Food! : )</h1>
         {/* map 함수 : 리스트에 있는 값들을 전부 가져와서 매핑함 */}
         {foodLike.map(dish => (<Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />))}
         {/* {foodLike.map(renderFood)} */}
         {/* <Food fav="burger"/>
         <Food fav="cheese burger"/>
         <Food fav="bacon cheese burger"/> */}
      </div>
   );
}

Food.PropTypes = {
   name: PropTypes.string.isRequired, //name은 string여야 한다
   picture: PropTypes.string.isRequired,
   rating: PropTypes.number, //rating은 number. 평점이 아직 없을 수도 있으니깐 isRequired는 뺌
};

//map 안에 반환값 화살표 함수 처리
// const renderFood = dish => <Food name={dish.name} picture={dish.image} />;

//map 안에 반환값 함수 처리
// function renderFood(dish) {
//    return <Food name={dish.name} picture={dish.image} />;
// }

export default App;
