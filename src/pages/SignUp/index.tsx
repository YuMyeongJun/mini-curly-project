import React, { useState } from "react";
import './style.css';

function SignUp() {
    const spanAn = <span className="color-red">*</span>;
    const [idCellStyle, setIdCellStyle] = useState({ display: "none", width: "100%" });
    const titlePadding = { padding: "10px 0px" };
    const inputPadding = { padding: "10px 5px" };

    return (
        <section className="sign__up__container">
            <article className="header__title">
                회원가입
            </article>
            <article className="form__container">
                <form className="form__wrapper" method="POST">
                    <div className="caption">{spanAn}필수입력사항</div>
                    <hr className="hr-line" />
                    <div className="divTable">
                        <div className="divTableBody">
                            <div className="divTableRow">
                                <div className="divTableCell" style={titlePadding}>
                                    아이디{spanAn}
                                </div>
                                <div className="divTableCell" style={inputPadding}>
                                    <input type="text" className="inputs" placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합" onClick={() => { setIdCellStyle({ display: "block", width: "100%" }) }} />
                                </div>
                                <div className="divTableCell" style={inputPadding}>
                                    <a href="#" className="btn">중복체크</a>
                                </div>
                            </div>
                            <div className="divTableRow">
                                <div className="divTableCell cell__caption__wrapper" style={idCellStyle}>
                                    <span className="txt_case1">6자 이상의 영문 혹은 영문과 숫자를 조합</span>
                                    <span className="txt_case2">아이디 중복확인</span>
                                </div>
                            </div>
                            <div className="divTableRow">
                                <div className="divTableCell" style={titlePadding}>
                                    비밀번호{spanAn}
                                </div>
                                <div className="divTableCell" style={inputPadding}>
                                    <input type="text" className="inputs" placeholder="비밀번호를 입력해주세요" />
                                </div>
                            </div>
                            <div className="divTableRow">
                                <div className="divTableCell" style={titlePadding}>
                                    비밀번호확인{spanAn}
                                </div>
                                <div className="divTableCell" style={inputPadding}>
                                    <input type="text" className="inputs" placeholder="비밀번호를 한번 더 입력해주세요" />
                                </div>
                            </div>
                            <div className="divTableRow">
                                <div className="divTableCell" style={titlePadding}>
                                    이름{spanAn}
                                </div>
                                <div className="divTableCell" style={inputPadding}>
                                    <input type="text" className="inputs" placeholder="이름을 입력해주세요" />
                                </div>
                            </div>
                            <div className="divTableRow">
                                <div className="divTableCell" style={titlePadding}>
                                    이메일{spanAn}
                                </div>
                                <div className="divTableCell" style={inputPadding}>
                                    <input type="text" className="inputs" placeholder="예: minikurly@kurly.com" />
                                </div>
                                <div className="divTableCell" style={inputPadding}>
                                    <a href="#" className="btn">중복체크</a>
                                </div>
                            </div>
                            <div className="divTableRow">
                                <div className="divTableCell" style={titlePadding}>
                                    휴대폰{spanAn}
                                </div>
                                <div className="divTableCell" style={inputPadding}>
                                    <input type="text" className="inputs" placeholder="숫자만 입력해주세요" />
                                </div>
                            </div>
                            <div className="divTableRow">
                                <div className="divTableCell" style={titlePadding}>
                                    주소{spanAn}
                                </div>
                                <div className="divTableCell" style={inputPadding}>
                                    <a href="#" className="btn">
                                        <span className="address_search_img">주소 검색</span>
                                    </a>
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