import React,  {useState } from "react";
import style from '../styles/login.module.css';
import CustomButton from '../reusables/CustomButton';
import { Link } from "react-router-dom";


const Login = () =>{
const userDetails = {
    email: "",
    password: "",
  };

  const [data, setData] = useState(userDetails);

  function handleChange(event){
    const {name, value} = event.target
    //setData((prevData))=>({...prevData, [name]:value}));
    setData((prevData)=>{
      return {...prevData, [name]: value}
    })
  }

  return (
    <div>
      <form action="">
        <div>
          <input
            type="text"
            name="email"
            placeholder="Enter Your Email"
            className={style.input}
            onChange = {handleChange}
            required
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Enter your Password"
            className={style.input}
            onChange = {handleChange}
           required
          />
        </div>
        <CustomButton style={style.btn} type="submit" textContent="Login"/>
      </form>
        <div>
          <span>Have no account?</span>
          <span><Link to={'/signup'}>Sign Up</Link></span>
        </div>
    </div>
  );
  }
  
  export default Login