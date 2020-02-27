import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()

function Login() {
    const history = useHistory()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const onSubmitAction = async (e) => {
        e.preventDefault()
        try {
            const params = { email, password }
            const auth = await Axios.post('http://localhost:4000/login', params, {
                withCredentials: true,
            })
            if (auth.data === 'HOME') { return window.confirm('로그인 성공!') && history.push('/') }
            else { return alert('로그인이 실패했습니다.') }
        } catch (error) {
            return alert('로그인이 실패했습니다!')
        }




        // try {
        //     if (window.confirm('로그인을 진행합니다.')) {
        //         let auth = await Axios.post(`${BACK_SUB}/login`, params)
        //         console.log(auth)
        //     }
        // } catch (error) {
        //     console.log(error)
        //     window.confirm('로그인에 실패했습니다.') && history.push('/login')
        // }

    }


    return (
        <div>
            <div id="id01" className="modal">
                <form className="modal-content" onSubmit={onSubmitAction}>
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
