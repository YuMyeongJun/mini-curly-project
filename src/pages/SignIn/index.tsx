import React from "react";
import { Link } from "react-router-dom";
import './style.css';

function SignIn() {
    return (
        <section className="sign__in__container">
            <article className="header__title">
                로그인
            </article>
            <article className="form__container">
                <form className="form__wrapper" method="POST">
                    <input type="text" name="memberId" id="memberId" size={20} placeholder="아이디를 입력해주세요." />
                    <input type="password" name="password" id="password" size={20} placeholder="비밀번호를 입력해주세요." />
                    <div className="checkbox_save">
                        <label className="label_checkbox"></label>
                        <div className="login_search">
                            <Link to="/SignIn" className="link">아이디 찾기</Link>
                            <span className="bar"></span>
                            <Link to="/SignIn" className="link">비밀번호 찾기</Link>
                        </div>
                    </div>
                    <button type="submit" className="btn btn_login">로그인</button>
                </form>
                <Link to="/SignUp" className="btn btn_signUp"><span>회원가입</span></Link>
            </article>
        </section>
    );
}

export default SignIn;