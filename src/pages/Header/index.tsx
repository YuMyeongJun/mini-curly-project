import React from "react";
import { Route, Link } from 'react-router-dom';
import Categorys from "../../components/Header/Categorys";
import imformationImg from "../../images/kurlyRes.png";
import "./style.css";

function Header() {
    return (
        <>
            <header className="header__wrapper">
                <div className="top__wrapper">
                    <div className="top__wrapper__left">
                        <a href="#" className="shipping__information">
                            <img src={`${process.env.PUBLIC_URL}/images/kurlyRes.png`} alt="~" />
                        </a>
                    </div>
                    <div className="top__wrapper__right">
                        <ul>
                            <li><Link to="/signUp" className="sign__up__link">회원가입</Link></li>
                            <li><Link to="/signIn" className="sign__in__link">로그인</Link></li>
                            <li><Link to="/" className="customer__service__center_link">고객센터</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="header__img">
                    <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="~" />
                </div>
                <div className="menu__wrapper">
                    <Categorys />
                </div>
            </header>
        </>
    );
}

export default Header;