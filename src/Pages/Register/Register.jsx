import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Register = () => {

  const {createUser} = useContext(AuthContext);
  

  const handleRegister = (e)=>{
    e.preventDefault();
    // const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(name ,email, password);
    createUser(email, password)
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
        <form onSubmit={handleRegister}>
        <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" name="name" placeholder="name" className="input input-bordered" />
          </div>
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
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <p>Already have an account? please <Link className="text-blue-600 font-semibold" to='/login'>Login</Link></p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Register;