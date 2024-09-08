import React from 'react'

const todos = () => {
  return (
    <>
    <nav>
     <ul>
       <li><Link to={"/"}>Home</Link></li>  
       <li><Link to={"/Photos"}>Photos</Link></li>
       <li><Link to={"/Posts"}>Posts</Link></li>
       <li><Link to={"/Todos"}>Todos</Link></li>
       <li><Link to={"/Albums"}>Albums</Link></li>
       <li><Link to={"/Commennts"}>Commennts</Link></li>
     </ul>
   </nav> 
   <h1>todos</h1>   
   </>
  )
}

export default todos