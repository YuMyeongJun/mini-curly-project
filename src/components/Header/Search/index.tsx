import React from "react";
import './style.css';

function Search() {
    return (
        <div className="search__wrapper">
            <form className="form">
                <input type="text" placeholder="검색어를 입력해주세요." className="search__input" />
                <input type="image" src="https://res.kurly.com/pc/service/common/1908/ico_search_x2.png" className="btn__search" />
            </form>
        </div>
    );
}

export default Search;