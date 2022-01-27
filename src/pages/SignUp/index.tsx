import React, { useState } from "react";
import './style.css';

function SignUp() {
    const spanAn = <span className="color-red">*</span>;
    const [idCellStyle, setIdCellStyle] = useState({ display: "none" });
    const [passWord, setPassWord] = useState({ display: "none" });
    const [passWordCheck, setPassWordCheck] = useState({ display: "none" });

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
                                <div className="divTableHeaderCell">
                                    아이디{spanAn}
                                </div>
                                <div className="divTableCell">
                                    <input type="text" className="inputs" placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합" onClick={() => { setIdCellStyle({ display: "" }) }} />
                                    <p className="cell__caption__wrapper" style={idCellStyle}>
                                        <span className="txt">6자 이상의 영문 혹은 영문과 숫자를 조합</span>
                                        <span className="txt">아이디 중복확인</span>
                                    </p>
                                </div>
                                <div className="divTableBtnCell">
                                    <a href="#" className="btn">중복체크</a>
                                </div>
                            </div>
                            <div className="divTableRow">
                                <div className="divTableHeaderCell">
                                    비밀번호{spanAn}
                                </div>
                                <div className="divTableCell">
                                    <input type="text" className="inputs" placeholder="비밀번호를 입력해주세요" onClick={() => { setPassWord({ display: "" }) }} />
                                    <p className="cell__caption__wrapper" style={passWord}>
                                        <span className="txt">10자 이상 입력</span>
                                        <span className="txt">영문/숫자/특수문자(공백 제외)만 허영하며, 2개 이상 조합</span>
                                        <span className="txt">동일한 숫자 3개 이상 연속 사용 불가</span>
                                    </p>
                                </div>
                            </div>
                            <div className="divTableRow">
                                <div className="divTableHeaderCell">
                                    비밀번호확인{spanAn}
                                </div>
                                <div className="divTableCell">
                                    <input type="text" className="inputs" placeholder="비밀번호를 한번 더 입력해주세요" onClick={() => { setPassWordCheck({ display: "" }) }} />
                                    <p className="cell__caption__wrapper" style={passWordCheck}>
                                        <span className="txt">동일한 비밀번호를 입력해주세요.</span>
                                    </p>
                                </div>
                            </div>
                            <div className="divTableRow">
                                <div className="divTableHeaderCell">
                                    이름{spanAn}
                                </div>
                                <div className="divTableCell">
                                    <input type="text" className="inputs" placeholder="이름을 입력해주세요" />
                                </div>
                            </div>
                            <div className="divTableRow">
                                <div className="divTableHeaderCell">
                                    이메일{spanAn}
                                </div>
                                <div className="divTableCell">
                                    <input type="text" className="inputs" placeholder="예: minikurly@kurly.com" />
                                </div>
                                <div className="divTableBtnCell">
                                    <a href="#" className="btn">중복체크</a>
                                </div>
                            </div>
                            <div className="divTableRow">
                                <div className="divTableHeaderCell">
                                    휴대폰{spanAn}
                                </div>
                                <div className="divTableCell">
                                    <input type="text" className="inputs" placeholder="숫자만 입력해주세요" />
                                </div>
                            </div>
                            <div className="divTableRow">
                                <div className="divTableHeaderCell">
                                    주소{spanAn}
                                </div>
                                <div className="divTableCell">
                                    <a href="#" className="btn">
                                        <span className="address_search_img">주소 검색</span>
                                    </a>
                                    <p className="cell__caption__wrapper">
                                        배송지에 따라 상품 정보가 달라질 수 있습니다.
                                    </p>
                                </div>
                            </div>
                            <div className="divTableRow">
                                <div className="divTableHeaderCell">
                                    성별
                                </div>
                                <div className="divTableCell">
                                    <label className="label">
                                        <input type="radio" name="sex" value="m" />
                                        <span className="ico"></span>
                                        남자
                                    </label>
                                    <label className="label">
                                        <input type="radio" name="sex" value="w" />
                                        <span className="ico"></span>
                                        여자
                                    </label>
                                    <label className="label">
                                        <input type="radio" name="sex" value="n" />
                                        <span className="ico"></span>
                                        선택안함
                                    </label>
                                </div>
                            </div>
                            <div className="divTableRow">
                                <div className="divTableHeaderCell">
                                    생년월일
                                </div>
                                <div className="divTableCell">
                                    <div className="birth__day__wrapper">
                                        <input type="text" pattern="[0-9]" size={4} maxLength={4} placeholder="YYYY" />
                                        <span className="bar"></span>

                                        <input type="text" pattern="[0-9]" size={2} maxLength={2} placeholder="MM" />
                                        <span className="bar"></span>

                                        <input type="text" pattern="[0-9]" size={2} maxLength={2} placeholder="DD" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="hr-line" />
                    <div className="reg__wrapper">
                        <div className="title">
                            이용약관동의{spanAn}
                        </div>
                        <div className="check__list">
                            <div className="check">
                                <input type="checkbox" name="all_check" />
                                <span className="ico"></span>
                                전체 동의합니다.
                                <p className="sub">
                                    선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할 수 있습니다.
                                </p>
                            </div>
                            <div className="check_view">
                                <label className="check_agree">
                                    <input type="checkbox" name="agree" />
                                    <span className="ico"></span>
                                    이용약관 동의
                                    <span className="sub">(필수)</span>
                                </label>
                                <a href="#" className="btn_agreement">약관보기</a>
                            </div>

                            <div className="check_view">
                                <label className="check_agree">
                                    <input type="checkbox" name="private1" />
                                    <span className="ico"></span>
                                    개인정보 수집·이용 동의
                                    <span className="sub">(필수)</span>
                                </label>
                                <a href="#" className="btn_agreement">약관보기</a>
                            </div>

                            <div className="check_view">
                                <label className="check_agree">
                                    <input type="checkbox" name="hiddenCheck" />
                                    <span className="ico"></span>
                                    개인정보 수집·이용 동의
                                    <span className="sub">(선택)</span>
                                </label>
                                <a href="#" className="btn_agreement">약관보기</a>
                            </div>
                            <div className="check_view">
                                <label className="check_agree">
                                    <input type="checkbox" name="marketing" />
                                    <span className="ico"></span>
                                    무료배송, 할인쿠폰 등 혜택/정보 수신 동의
                                    <span className="sub">(선택)</span>
                                </label>
                                <div className="email_sms">
                                    <label className="check_agree">
                                        <input type="checkbox" name="sms" />
                                        <span className="ico"></span>
                                        SMS
                                    </label>

                                    <label className="check_agree">
                                        <input type="checkbox" name="email" />
                                        <span className="ico"></span>
                                        이메일
                                    </label>
                                </div>
                            </div>

                            <div className="check_view">
                                <label className="check_agree">
                                    <input type="checkbox" name="fourteen_chk" />
                                    <span className="ico"></span>
                                    본인은 만 14세 이상입니다.
                                    <span className="sub">(필수)</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="form__footer">
                        <button type="button" className="btn">가입하기</button>
                    </div>
                </form>
            </article>
        </section>
    );
}

export default SignUp;