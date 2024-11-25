import { React, useState } from "react";
import style from "../styles/signup.module.css";
import CustomButton from "../reusables/CustomButton";
import { Link , useNavigate} from "react-router-dom";

const SignUp = () => {

  const navigate = useNavigate();

  const userDetails = {
    username: "",
    email: "",
    password: "",
  };

  const [data, setData] = useState(userDetails);

  function handleChange(event){
    const {name, value} = event.target
    // setData((prevData)=>({...prevData, [name]:value}));
    setData((prevData)=>{
      return {...prevData, [name]: value}
    });
  };
  console.log(data)
  

  const handleSubmit = () =>{
    console.log("Submitted......");
    //setTimeout(()=>{
      navigate("/login")
    //}, 2000)
  }


  return (
    <div>
      <form  onSubmit={handleSubmit} action="">
        <div>
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            className={style.input}
            onChange = {handleChange}
            //value={data.username}
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="email"
            placeholder="Enter Email"
            className="input"
            required
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            className="input"
            required
          />
        </div>
        <CustomButton style={style.btn} type="submit" textContent="submit"/>
      </form>
      <div>
        <span>Already have an account?</span>
        <span><Link to={'/login'}>Login</Link></span>
      </div>
    </div>
  );
};

export default SignUp;
