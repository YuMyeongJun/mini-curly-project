import React from "react";
import Categorys from "./Categorys";
import logo from "../images/logo.png";

function Header() {
    return (
        <>
            <header className="header__warpper">
                <div className="top__wrapper">
                    <div className="top__wrapper__left">
                        <button className="shippng__information__btn">샛별-택배 배송안내 &gt; </button>
                    </div>
                    <div className="top__wrapper__right">
                        <button className="sign__up__btn">회원가입</button>
                        <button className="sign__in__btn">로그인</button>
                        <button className="customer__service__center">고객센터</button>
                    </div>
                </div>
                <div className="header__img">
                    <img src={logo} alt="~" />
                </div>
                <div className="category__wrapper">
                    <Categorys />
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