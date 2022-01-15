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
                        <ul>
                            <li><a href="#" className="sign__up__btn">회원가입</a></li>
                            <li><a href="#" className="sign__in__btn">로그인</a></li>
                            <li><a href="#" className="customer__service__center">고객센터</a></li>
                        </ul>
                    </div>
                </div>
                <div className="header__img">
                    <img src={logo} alt="~" />
                </div>
                <div className="menu__wrapper">
                    <Categorys />
                </div>
            </header>
        </>
    );
}

export default Header;