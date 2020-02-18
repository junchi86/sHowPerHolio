import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function Join() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [password2, setPassword2] = useState()

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const onChangePassword2 = (e) => {
        setPassword2(e.target.value)
    }

    const onSubmitAction = (e) => {
        e.preventDefault()
        console.log(email, password, password2)
        //const auth = async()=> await axios.post('/join',{email,password})
    }


    return (
        <div>
            <div id="id01" className="modal">
                <form className="modal-content" onSubmit={onSubmitAction} action="/join" method="post">
                    <div className="container">
                        <h1>JOIN</h1>
                        <p><br />Please fill the blanks.</p>
                        <hr />
                        <label htmlFor="email"><b>Email</b></label>
                        <input type="text" onChange={onChangeEmail} placeholder="Enter Email" name="email" required />
                        <label htmlFor="password"><b>Password</b></label>
                        <input type="password" onChange={onChangePassword} placeholder="Enter Password" name="password" required />
                        <label htmlFor="password2"><b>Repeat Password</b></label>
                        <input type="password" onChange={onChangePassword2} placeholder="Repeat Password" name="password2" required />
                        <p>By creating an account you agree to our <div style={{ color: 'dodgerblue' }}>Terms &amp; Privacy</div><br /></p>
                        <div className="clearfix">
                            <Link to='/'><button type="button" className="cancelbtn">Cancel</button></Link>
                            <button type="submit" className="signupbtn">Sign Up</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Join
