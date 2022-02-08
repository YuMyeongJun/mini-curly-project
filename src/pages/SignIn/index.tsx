import axios from "axios";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import './style.css';

function SignIn() {

    const [account, setAccount] = useState({
        memberId: "",
        password: ""
    });

    const fetchLogin = (account: any) => {
        const param = new URLSearchParams();
        param.append('memberId', account.memberId);
        param.append('password', account.password);
        axios.post('/api/login', account)
            .then((res) => {
                console.log(res)
            })
            .catch((e) => {
                console.log(e);
            })
    }


    const onSubmit = async () => {
        try {
            const user = await fetchLogin(account);
            console.log(user);
            //성공하면 해당 user 아이디 패스워드값 셋팅
            // localStorage.getItem('memberId', user.memberId);
            // localStorage.getItem('password', user.password);
        } catch (error) {

            //실패하면 throw new Error("") 값 출력
            alert(error);
        }
    };
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
                    <button type="button" className="btn btn_login" onClick={onSubmit}>로그인</button>
                </form>
                <Link to="/SignUp" className="btn btn_signUp"><span>회원가입</span></Link>
            </article>
        </section>
    );
}

export default SignIn;