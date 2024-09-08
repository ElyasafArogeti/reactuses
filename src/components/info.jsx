import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Info = () => {
  const location = useLocation();
  const { user } = location.state || {};

  return (
    <div> <nav>
    <ul>
    <li><Link to={"/"}>Logout</Link></li>
      <li><Link to={"/home"}>Home</Link></li>  
      <li><Link to={"/Photos"}>Photos</Link></li>
      <li><Link to={"/Posts"}>Posts</Link></li>
      <li><Link to={"/Todos"}>Todos</Link></li>
      <li><Link to={"/Albums"}>Albums</Link></li>
      <li><Link to={"/Commennts"}>Commennts</Link></li>
    </ul>
  </nav>    
        <Link></Link>
      <h1> {`Hi, ${user?.name || 'Guest'}`}</h1>
      <hr />
      <p><strong>Username :</strong> {user?.username}</p>
      <hr />
      <p><strong>Email :</strong> {user?.email}</p>
      <hr />
      <p><strong>Website :</strong> {user?.website}</p>
      <hr />
      <p><strong>Phone :</strong> {user?.phone}</p>
      <hr />
      <p><strong>City :</strong> {user?.address?.city}</p>
      <hr />
      <p><strong>Street :</strong> {user?.address?.street}</p>
    </div>
  );
};

export default Info;
