import React from "react";
import './style.css';

function SignIn() {
    return (
        <section className="sign__in__container">
            <article className="header__title">
                회원가입
            </article>
            <article className="form__container">
                <form className="form__wrapper" method="POST">
                    <div className="title">
                        로그인
                    </div>
                    <div className="main__wrapper">
                        <input type="text" name="member_id" id="member_id" placeholder="아이디를 입력해주세요." />
                        <input type="text" name="password" id="password" placeholder="비밀번호를 입력해주세요." />
                    </div>
                </form>
            </article>
        </section>
    );
}

export default SignIn;