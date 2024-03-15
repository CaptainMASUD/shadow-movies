import React from 'react';

export default function Login() {
  return (
    <>
    <div className="logheader">
    <h3>Sing in to request for your <span>Movies, Tv-seires others</span>.</h3>
    </div>
    <div className="con2">
      <div className="main">  	
        <input type="checkbox" id="chk" aria-hidden="true"/>

        <div className="signup">
          <form>
            <label className='chk' htmlFor="chk" aria-hidden="true">Sign up</label>
            <input type="text" name="txt" placeholder="User name" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="pswd" placeholder="Password" required />
            <button className='fbtn1'>Sign up</button>
          </form>
        </div>

        <div className="login">
          <form>
            <label htmlFor="chk" aria-hidden="true">Login</label>
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="pswd" placeholder="Password" required />
            <button className='fbtn2' >Login</button>
          </form>
        </div>
      </div>
      </div>
    </>
  );
}
