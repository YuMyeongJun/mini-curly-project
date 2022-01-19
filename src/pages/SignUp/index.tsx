import React from "react";
import './style.css';

function SignUp() {
    return (
        <section className="sign__up__container">
            <article className="header__title">
                회원가입
            </article>
            <article className="sign__up__data__form">
                <form method="POSt">
                    <div className="caption"><span className="color-red">*</span>필수입력사항</div>
                    <div className="divTable">
                        <div className="divTableBody">
                            <div className="divTableRow">
                                <div className="divTableHeadCell"></div>
                                <div className="divTableCell"></div>
                                <div className="divTableCell"></div>
                            </div>
                        </div>
                    </div>
                </form>
            </article>
        </section>
    );
}

export default SignUp;