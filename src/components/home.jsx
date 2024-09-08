import React from 'react';
import { Link,useLocation } from 'react-router-dom';

const Home = () => {
const location = useLocation();
const {user} = location.state || {};

  return (
    <>
  <h1>{`Hi, ${ user ?.name || 'Guest'}`}</h1>
  <h1>Home</h1>
      <nav>
        <ul >
          <li><Link to={"/"}>Logout</Link></li>
          <li><Link to={"/home"}>home</Link></li>
          <li><Link to={"/photos"}>Photos</Link></li>
          <li><Link to={"/posts"}>Posts</Link></li>
          <li><Link to={"/todos"}>Todos</Link></li>
          <li><Link to={"/albums"}>Albums</Link></li>
          <li><Link to={"/info"} state= {{user}} >info</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Home;
