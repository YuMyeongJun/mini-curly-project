import React from "react";
import { Route, Link } from 'react-router-dom';
import Categorys from "../../components/Header/Categorys";
import imformationImg from "../../images/kurlyRes.png";
import "./style.css";

function Header() {
    return (
        <div className="header__container">
            <header className="header__wrapper">
                <div className="top__wrapper">
                    <div className="top__wrapper__left">
                        <Link to="/" className="shipping__information">
                            <img src={`${process.env.PUBLIC_URL}/images/kurlyRes.png`} alt="~" />
                        </Link>
                    </div>
                    <div className="top__wrapper__right">
                        <ul>
                            <li className="a1"><Link to="/signUp" className="sign__up__link">회원가입</Link></li>
                            <li className="a2"><Link to="/signIn" className="sign__in__link">로그인</Link></li>
                            <li className="a3"><Link to="/" className="customer__service__center_link">고객센터</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="header__img">
                    <Link to="/">
                        <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="~" />
                    </Link>
                </div>
            </header>
        </div>
    );
}

export default Header;