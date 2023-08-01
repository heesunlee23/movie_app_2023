import React from 'react';

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} />
    </div>
  );
}

const foodILike = [
  {
    // 아이스바인
    name: 'Eisbein',
    image: 'https://georgies.co.za/wp-content/uploads/2022/05/Eisbein-Main-image-2-cropped.jpg', 
  }, 
  {
    // 슈바인스학세 
    name: 'Schweinshaxe', 
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Schweinshaxe_Chiang_Mai.JPG/534px-Schweinshaxe_Chiang_Mai.JPG',
  }, 
  {
    // 커리부어스트
    name: 'Currywurst', 
    image: 'https://i0.wp.com/pretzelandme.blog/wp-content/uploads/2022/06/Currywurst.jpg?w=1000&ssl=1',
  }, 
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (<Food name={dish.name} picture={dish.image} />))}
    </div>
  );
}

export default App;


