import React from "react";

function Categorys() {
    return (
        <>
            <div>
                <ul>
                    <li>
                        <a href="#" className="new__product">신상품</a>
                    </li>
                    <li>
                        <a href="#" className="new__product">신상품</a>
                    </li>
                    <li>
                        <a href="#" className="new__product">신상품</a>
                    </li>
                </ul>
                <div className="search__wrapper">

                    <input type="text" placeholder="검색어를 입력해주세요." />
                </div>
            </div>
        </>
    );
}

export default Categorys;