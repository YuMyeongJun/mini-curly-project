import React from "react";
import './style.css';

function Search() {
    return (
        <div className="search__wrapper">
            <form className="form">
                <input type="text" placeholder="검색어를 입력해주세요." className="search__input" />
                <input type="image" src={`${process.env.PUBLIC_URL}/images/ico_search_x2.webp`} className="btn__search" />
            </form>
        </div>
    );
}

export default Search;