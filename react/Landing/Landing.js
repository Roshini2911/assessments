// import Navbar from"../Navbar/nav";
// import "./Landing.css";

import { useState } from "react";

// function Landing(){
//     return(
//     <> 
//            <h1>Hello</h1>
//            <Navbar/>
//     </>
//     );
//  }
// export default Landing;
// function Navbar(){
//     return(<header>
//         <ul>
//             <li><a href="#">Home</a></li>
//             <li><a href="#">About</a></li>
//             <li><a href="#">Contact Us</a></li>
//         </ul>
//     </header>)
// }
// root.render(
//     <Navbar/>
// );
// export default Navbar;


// function Landing(){
//     function add() {
//         const a=document.getElementById("num1").value; 
//         const b = document.getElementById("num2").value;
//         const sum = Number(a)+Number(b);
//         document.getElementById("result").innerText=sum;
//         console.log(sum)
//     }
//     return(
//     <>
//     <div>
//         <h1>Example for jsx expression</h1>
//         <input type="number" id="num1"/>
//         <input type="number" id="num2"/>
//         <button onClick={add}>Add</button>
//         <h2 id="result"></h2>
//     </div>
//     </>
//     );
// }
// export default Landing;

// function Landing()
// {
//     const[name,setName]=useState("");
//     return(
//         <>
//             <input type="text" onChange={(e)=>setName(e.target.value)}/>
//             <p>{name}</p>
//         </>
//     );
// }
// export default Landing;


// function Landing(){
//     const[username,setUsername]=useState("");
//     const[password,setPassword]=useState("");
//     const[submittedData,setSubmittedData]=useState(null);

//     const handleSubmit=(e)=>{
//         e.preventDefault();
//         setSubmittedData({
//             username: username;
//             password: password;
//         });
//     };
//     return(
//         <>
//         <h2>Login Form</h2>
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <input type="text" placeholder="Enter username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
//             </div>
//             <div>
//                 <input type="password" placeholder="Enter password" value={}/>
//             </div>
//         </form>
//         </>
//     )
// }