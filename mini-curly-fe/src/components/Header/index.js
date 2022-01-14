import React from "react";
import Categorys from "../Categorys";
import logo from "../../images/logo.png";
import imformationImg from "../../images/kurlyRes.png";
import "./index.css";


function Header() {
    return (
        <>
            <header className="header__wrapper">
                <div className="top__wrapper">
                    <div className="top__wrapper__left">
                        <a src="#" className="shipping__information">
                            <img src={imformationImg} alt="~" />
                        </a>
                    </div>
                    <div className="top__wrapper__right">
                        <a href="#" className="sign__up__btn">회원가입</a>
                        <a href="#" className="sign__in__btn">로그인</a>
                        <a href="#" className="customer__service__center">고객센터</a>
                    </div>
                </div>
                <div className="header__img">
                    <img src={logo} alt="~" />
                </div>
                <div className="menu__wrapper">
                    <Categorys className="categorys" />
                    <a href="#" className="new__product">신상품</a>
                    <a href="#" className="new__product">신상품</a>
                    <a href="#" className="new__product">신상품</a>
                    <div className="search__wrapper">검색</div>
                </div>
            </header>
        </>
    );
}

export default Header;