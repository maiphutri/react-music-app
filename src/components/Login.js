import React from 'react';

function Login() {
  return (
    <section className='Login'>
      <form>
        <div className="input-group" id='email'>
          <div className="input-group-prepend">
            <span className="input-group-text bg-dark text-light" id="input-email">Email</span>
          </div>
          <input type="text" className="form-control bg-transparent text-light outline" placeholder="@example.com" aria-label="Username" aria-describedby="addon-wrapping" required/>
        </div>
        <div className="input-group" id='password'>
          <div className="input-group-prepend">
            <span className="input-group-text bg-dark text-light" id="addon-wrapping">Password</span>
          </div>
          <input type="password" className="form-control bg-transparent outline text-light" aria-label="Password" aria-describedby="basic-addon2" required/>
        </div>
        <button type="Submit" className="btn btn-success rounded-pill">Log In</button>
      </form>
    </section>
  )
}

export default Login;
