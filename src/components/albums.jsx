import React from 'react'
import { Link } from 'react-router-dom'
const albums = () => {

  return (
    <>
    <nav>
     <ul>
     <li><Link to={"/"}>Logout</Link></li>
       <li><Link to={"/Photos"}>Photos</Link></li>
       <li><Link to={"/Posts"}>Posts</Link></li>
       <li><Link to={"/Todos"}>Todos</Link></li>
       <li><Link to={"/Albums"}>Albums</Link></li>
       <li><Link to={"/Commennts"}>Commennts</Link></li>
     </ul>
   </nav> 
   <h1>alnums</h1>   
   </>

  )
}

export default albums