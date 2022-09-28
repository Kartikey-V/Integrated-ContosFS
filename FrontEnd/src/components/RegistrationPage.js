import React, {useState} from "react";
// import { useForm } from "react-hook-form";
// import { Recaptcha } from "react-recaptcha";
import logo from "../assets/images/logo.png"
import "./RegistrationPageCSS.css"
import { useNavigate } from 'react-router-dom';

function RegistrationPage() {
//   const {register, handleSubmit, formState: { errors } } = useForm();

const navigate = useNavigate();

const goToDashboard = () => {
    navigate("/dashboard");
}
  const [signIn,setSignIn]=useState(
    {
        signInForm: 
    {
        email: "",
        password: ""
    }
    }
  );
  const [signUp,setSignUp]=useState(
    {
        signUpForm:
        {
            username: "",
            email: "",
            password: ""
        }
    }
  );
  const [login,setLogin]=useState({
    login1:true
    
  });
//   const onSubmit = (data) => console.log(data);
  


//   const handleInput=(e)=>
//   {
//     const name=e.target.name;
//     const value=e.target.value;
//     console.log(name,value);
//     setLogin({...login, [name]:value});
//   }

// const signUp=(e)=>
// {
//     const name=e.target.name;
//     const value=e.target.value;
//     console.log(name,value);
//     setLogin({
//         signUpForm:{
//             ...login.signUpForm,[name]:value
//         }
//     })
    // setLogin({...login, [name]:value});
    
// }

// function signUp(){
//     this.setLogin({
//         signUpForm: {
//             username: ""
//             // password: "",
//             // email: ""
//           }

//     }
// )
// }
// function signIn(){
//     console.log(this.state);
//     alert(`${this.state.signInForm.email} Registered Successfully !!!!`)
//     this.setLogin(
//     {
//     email:""
//     }
// )
// }




  return (
    <>
    {/* <p className="title">Registration Form</p> */}


        <div className="login">
        <div
          className={`login__colored-container ${
            login.login1
              ? "login__colored-container--left"
              : "login__colored-container--right"
          }`}
        ></div>
   
        <div className={`login__welcome-back ${
            login.login1
              ? "login__welcome-back--active"
              : "login__welcome-back--inactive"
          }`}>
        
          <div className="login__welcome-back__logo-container">
            <img
              className="login__welcome-back__logo-container--image"
              src={logo}
              alt="Budwriter"
            />
            App
          </div>
          <div className="login__welcome-back__main-container">
            <div className="login__welcome-back__main-container__text-container">
              <span className="login__welcome-back__main-container__text-container--title">
                Welcome Back!
              </span>
              <span className="login__welcome-back__main-container__text-container--secondary">
                To keep sharing your work with us, please log in.
              </span>
            </div>
            <div
              onClick={() => {
                setLogin({
                  login1: !login.login1
                })
              }}
              className="login__welcome-back__main-container__button-container"
            >
              Sign In
            </div>
          </div>
        </div>
        
        <div
          className={`login__create-container ${
            login.login1
              ? "login__create-container--active"
              : "login__create-container--inactive"
          }`}
        >
          Create Account
          
    
          <div className="login__create-container__form-container">
            <form
              className="login__create-container__form-container__form"
              onSubmit={e => {
                e.preventDefault()
                // signUp()
                console.log(signUp)
              }}
            // onSubmit={e=>{
            //         e.preventDefault()
            //         console.log("Signed Up Successfully")}}
              >
            {/* <form
              className="login__create-container__form-container__form"
              onSubmit={handleSubmit()}
            > */}
              <input
                className="login__create-container__form-container__form--name"
                type="text"
                placeholder="Name"
                value={signUp.signUpForm.username}
                // values={""}
                onChange={value =>
                  setSignUp({
                    signUpForm: {
                      password: signUp.signUpForm.password,
                      username: value.target.value,
                      email: signUp.signUpForm.email
                    }
                  })}
                required
              />
              <input
                className="login__create-container__form-container__form--email"
                type="email"
                placeholder="Email"
                value={signUp.signUpForm.email}
                // values={""}
                onChange={value =>
                  setSignUp({
                    signUpForm: {
                      email: value.target.value,
                      name: signUp.signUpForm.name,
                      password: signUp.signUpForm.password
                    }
                  })
                }
                required
              />
              <input
                className="login__create-container__form-container__form--password"
                type="password"
                placeholder="Password"
                value={signUp.signUpForm.password}
                // values={""}
                onChange={value =>
                  setSignUp({
                    signUpForm: {
                      password: value.target.value,
                      name: signUp.signUpForm.name,
                      email: signUp.signUpForm.email
                    }
                  })
                }
                required
              />
              <button className="login__create-container__form-container__form--submit">
                Sign Up
              </button>
            </form>
          </div>
        </div>

{/* Login Page Code */}



        <div
          className={`login__login-container ${
            !login.login1
              ? "login__login-container--active"
              : "login__login-container--inactive"
          }`}
        >
          <div className="login__login-container__logo-container">
            <img
              className="login__login-container__logo-container--image"
              src={logo}
              alt="Budwriter"
            />
            Login Page
          </div>
          <div className="login__login-container__main-container">
            {/* <div className="login__login-container__main-container__social-container">
              <img
                className="login__login-container__main-container__social-container--facebook-icon"
                src={facebook}
                alt=""
              />
              <img
                className="login__login-container__main-container__social-container--google-icon"
                src={google}
                alt=""
              />
              <img
                className="login__login-container__main-container__social-container--linkedin-icon"
                src={linkedin}
                alt=""
              />
            </div>
            <span className="login__login-container__main-container--info-text">
              or use email for your login
            </span> */}
            <div className="login__login-container__main-container__form-container">
              <form
                className="login__login-container__main-container__form-container__form"
                // onSubmit={e => {
                //   e.preventDefault()
                //   signIn()
                // }}
                onSubmit={ e=>{
                    e.preventDefault()
                    console.log(signIn)}}
              >
                <input
                  className="login__login-container__main-container__form-container__form--email"
                  type="email"
                  placeholder="Email"
                  value={signIn.signInForm.email}
                //   values={""}
                  onChange={value =>
                    setSignIn({
                      signInForm: {
                        email: value.target.value,
                        password: signIn.signInForm.password
                      }
                    })
                  }
                  required
                />
                <input
                  className="login__login-container__main-container__form-container__form--password"
                  type="password"
                  placeholder="Password"
                  value={signIn.signInForm.password}
                // values={""}
                  onChange={value =>
                    setSignIn({
                      signInForm: {
                        password: value.target.value,
                        email: signIn.signInForm.email
                      }
                    })
                  }
                  required
                />
                <button className="login__login-container__main-container__form-container__form--submit" onClick={goToDashboard}>
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
        <div
          className={`login__hello-container ${
            !login.login1
              ? "login__hello-container--active"
              : "login__hello-container--inactive"
          }`}
        >
          <div className="login__welcome-back__main-container__text-container">
            <span className="login__welcome-back__main-container__text-container--title">
              Hello, stranger!
            </span>
            <span className="login__welcome-back__main-container__text-container--secondary">
              Enter your personal details and start your own portfolio!
            </span>
          </div>
          <div
            onClick={() => {
              setLogin({
                login1: !login.login1,
              })
            }}
            className="login__welcome-back__main-container__button-container"
          >
            Sign Up
          </div>
        </div>
        
        <div
          className={`login__colored-container ${
            login.login1
              ? "login__colored-container--left"
              : "login__colored-container--right"
          }`}
        ></div>










      

      {/* <form  action="" onSubmit={handleSubmit}>
      <label htmlFor="username" >Name</label>
        <input type="text" placeholder="Name" name="username" value={login.username} onChange={handleInput} /> */}
        {/* <input  type="email" placeholder="Email"{...register("email", { required: true })} />
        {errors.email && <span style={{ color: "red" }}>
        *Email* is mandatory </span>}
        <input  type="password" placeholder="Password" {...register("password")} />
        <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} /> */}
      {/* </form> */}
      </div>
    </>
  );
}

// function 
export default RegistrationPage;