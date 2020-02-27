import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Axios from 'axios'

function Join() {
    const history = useHistory()
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

    const onSubmitAction = async (e) => {
        e.preventDefault()
        const params = { email, password, password2 }
        try {
            if (password !== password2) { return alert('패스워드가 일치하지 않습니다!') }
            let auth = await Axios.post(`http://localhost:4000/join`, params)
            if (auth.status === 200) {
                return window.confirm('회원가입에 성공했습니다.') && history.push('/')
            }
            else { return alert('회원가입에 실패했습니다. ') }
        } catch (error) {
            return alert('회원가입에 실패했습니다. // 다른 아이디 사용을 추천합니다.')
        }
    }


    return (
        <div>
            <div id="id01" className="modal">
                <form className="modal-content" onSubmit={onSubmitAction}>
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
