import React from "react";
import Search from "../Search";
import './style.css';

function Categorys() {
    return (
        <>
            <div className="category__container">
                <div className="category__warpper">
                    <ul>
                        <li>
                            <a href="#">
                                <span className="category__icon"></span>
                                <span>전체 카테고리</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="new__product">신상품</a>
                        </li>
                        <li>
                            <a href="#" className="new__product">베스트</a>
                        </li>
                        <li>
                            <a href="#" className="new__product">알뜰쇼핑</a>
                        </li>
                        <li>
                            <a href="#" className="new__product">특가/혜택</a>
                        </li>
                    </ul>
                </div>
                <Search />
                <div className="location__wrapper">
                    <button type="button" className="btn__location">배송지 설정하기</button>
                </div>
                <div className="favorite__wrapper">
                    <a href="/shop/mypage/mypage_pick.php" className="btn__pick">찜한 상품 보기</a>
                </div>
                <div className="cart__wrapper">
                    <a href="/shop/goods/goods_cart.php" className="btn__cart">
                        <span className="screen_out">장바구니</span>
                        <span className="realtime__cartcount">2</span>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Categorys;