import React from "react";
import './style.css';

function SignUp() {
const spanAn = <span className="color-red">*</span>;

    return (
        <section className="sign__up__container">
            <article className="header__title">
                회원가입
            </article>
            <article className="form__container">
                <form className="form__wrapper" method="POST">
                    <div className="caption">{spanAn}필수입력사항</div>
                    <hr className="hr-line"/>
                    <div className="divTable">
                        <div className="divTableBody">
                            <div className="divTableRow">
                                <div className="divTableCell" style={{padding: "10px 5px"}}>
                                    아이디{spanAn}
                                </div>
                                <div className="divTableCell" style={{padding: "10px 5px"}}>
                                    <input type="text" className="inputs" placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합" />
                                </div>
                                <div className="divTableCell" style={{padding: "10px 5px"}}>
                                    <a href="#" className="btn">중복체크</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </article>
        </section>
    );
}

export default SignUp;