import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Login = () => {

  const navigate = useNavigate();
  const {signInUser,signInWithGoogle} = useContext(AuthContext); 


  const handleLogin = (e)=>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);
    signInUser(email, password)
    .then((result)=>{
      console.log(result.user);
      e.target.reset();
      navigate('/');
    })
    .catch((error)=>{
      console.log(error);
    })
  }


  const handleGoogleSignIn= ()=>{
    signInWithGoogle()
    .then((result)=>{
      console.log(result.user);
    })
    .catch((error)=>{
      console.log(error);
    })

  }
  return (
    <div className="min-h-[400px] w-[600px] my-12 rounded-xl m-auto bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse">
      
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
        <form onSubmit={handleLogin}>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name="email" placeholder="email" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name="password" placeholder="password" className="input input-bordered" />
          
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p>New here? please <Link className="text-blue-600 font-semibold" to='/register'>Register</Link></p>
        <p><button onClick={handleGoogleSignIn} className="btn btn-ghost">Google</button></p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Login;