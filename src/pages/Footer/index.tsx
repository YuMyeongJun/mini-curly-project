import React from "react";
import { Route, Link } from 'react-router-dom';
import './style.css';

function Footer() {
    return (
        <footer className="footer__wrapper">
            <div className="footer__top">
                <div className="left__wrapper">
                    <div className="title">고객행복센터</div>
                    <div className="detail__wrapper">
                        <div className="detail__left">1644-1107</div>
                        <dl className="detail__right">
                            <dt>365고객센터</dt>
                            <dd>오전7시 ~ 오후 7시</dd>
                        </dl>
                    </div>
                    <div className="detail__wrapper">
                        <div className="detail__left">카카오톡 문의</div>
                        <dl className="detail__right">
                            <dt>365고객센터</dt>
                            <dd>오전7시 ~ 오후 7시</dd>
                        </dl>
                    </div>
                    <div className="detail__wrapper">
                        <div className="detail__left">1:1 문의</div>
                        <dl className="detail__right">
                            <dt>25시간 접수 가능</dt>
                            <dd>고객센터 운영시간에 순차적으로 답변해드리겠습니다.</dd>
                        </dl>
                    </div>
                    <div className="detail__wrapper">
                        <div className="detail__left">대량주문 문의</div>
                        <dl className="detail__right">
                            <dt></dt>
                            <dd>비회원의 경우 메일로 문의 바랍니다.</dd>
                        </dl>
                    </div>
                </div>
                <div className="right__wrapper">
                    <div className="title__link">
                        <Link to="/">컬리소개</Link>
                        <Link to="/">컬리소개영상</Link>
                        <Link to="/">인재채용</Link>
                        <Link to="/">이용약관</Link>
                        <Link to="/">개인정보처리방침</Link>
                        <Link to="/">이용안내</Link>
                    </div>
                    <div className="detail__wrapper">
                        <div className="">법인명 (상호): 주식회사 미니컬리 | 사업자등록번호: 111-11-11111 <a href="#">사업자정보 확인</a></div>
                        <div className="">통신판매업:제 2018-서울강남-00000호 | 개인정보보호책임자: 이종섭</div>
                        <div className="">주소: 서울턱별시 간낭구 테란헤로 123, 2층(역샘동) | 대표이사: 박시온</div>
                        <div className="">입점문의: <a href="#">입점문의하기</a> | 마케팅제휴:<a href="#">y120@gmail.com</a></div>
                        <div className="">채용문의:<a href="#">y120@gmail.com</a></div>
                    </div>
                    <div className="sns__link">
                        <ul>
                            <li>
                                <a href="#">
                                    <img src={`${process.env.PUBLIC_URL}/images/ico_instagram.png`} />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={`${process.env.PUBLIC_URL}/images/ico_fb.png`} />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={`${process.env.PUBLIC_URL}/images/youtube.png`} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer__bottom"></div>
        </footer>
    )
}

export default Footer;