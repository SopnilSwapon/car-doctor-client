import { Link } from 'react-router-dom';
import phone from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
const Login = () => {
  const {login} = useContext(AuthContext)
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.error(error.message)
        })
    }
    return (
        <div className="hero mb-20 bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center mr-12 w-1/2 lg:text-left">
            <img src={phone} alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-3xl text-center pt-3 font-bold">Login now!</h1>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
              <input className="btn bg-[#ff3811] text-white" type="submit" value="Login" />
              </div>
            </form>
            <p className='text-center border'>New to this <Link className='font-bold text-orange-600' to='/signup'>Sign Up</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Login;