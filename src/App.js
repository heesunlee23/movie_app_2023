import React from 'react';

function Food({ fav }) {
  return <h1>I like { fav }</h1>;
}

function App() {
  return (
    <div>
      <h1>Hello, Incoming CS MS Students!</h1>
      <Food fav="gimbap"/>
      <Food fav="ramen"/>
      <Food fav="samgiopsal"/>
      <Food fav="chukumi"/>
    </div>
  );
}

export default App;


