import React from "react";

function header() {
    return (
        <>
            <div className="header__warpper">
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
            </div>
        </>
    );
}

export default header;