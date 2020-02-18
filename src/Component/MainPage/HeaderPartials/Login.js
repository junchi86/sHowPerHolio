import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const onSubmitAction = (e) => {
        e.preventDefault()
        console.log(email, password)
        //const auth = async()=> await axios.post('/join',{email,password})
    }


    return (
        <div>
            <div id="id01" className="modal">
                <form className="modal-content" onSubmit={onSubmitAction} action="/login" method="post">
                    <div className="container">
                        <h1>LOGIN</h1>
                        <p><br />Please Login.</p>
                        <hr />
                        <label htmlFor="email"><b>Email</b></label>
                        <input type="text" onChange={onChangeEmail} placeholder="Enter Email" name="email" required />
                        <label htmlFor="password"><b>Password</b></label>
                        <input type="password" onChange={onChangePassword} placeholder="Enter Password" name="password" required />
                        <div className="clearfix">
                            <Link to='/'><button type="button" className="cancelbtn">Cancel</button></Link>
                            <button type="submit" className="signupbtn">Login</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Login
