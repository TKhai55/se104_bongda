import React from 'react'
import "./SignIn.css"


const SignIn = () => {
    return (
        <div>
            <section className='SignIn'>
                <div className="Signbox">
                    <div className="title">
                        <h3>Đăng nhập</h3>
                    </div>
                    <div className="content">
                        <form>
                            <div className="form_content">
                                <label htmlFor="account">Tài khoản</label>
                                <input type="text" name="account" id="account" placeholder="Tên đăng nhập" />
                            </div>
                            <div className="form_content">
                                <label htmlFor="password">Mật khẩu</label>
                                <input type="password" name="password" id="password" placeholder="Mật khẩu" />
                            </div>
                            <button className='signin_btn'><h3>Đăng nhập</h3></button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SignIn