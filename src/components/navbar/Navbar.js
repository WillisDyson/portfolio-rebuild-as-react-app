import React from "react";
import NavOptions from "./NavOptions";

const Navbar = () => {

    return (
        <nav className="nav hidden">
            <div role="button" tabIndex="0" className="nav__hamburger">
                <svg xmlns="http://www.w3.org/2000/svg" width="23.84" height="16.894" viewBox="0 0 23.84 16.894">
                    <g id="Icon_feather-menu" data-name="Icon feather-menu" transform="translate(-3 -7.5)">
                        <path id="Path_12" data-name="Path 12" d="M4.5,18H25.34" transform="translate(0 -2.053)" fill="none"
                            stroke="#00cf6e" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
                        <path id="Path_13" data-name="Path 13" d="M4.5,9H25.34" fill="none" stroke="#00cf6e"
                            stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
                        <path id="Path_14" data-name="Path 14" d="M4.5,27H25.34" transform="translate(0 -4.106)" fill="none"
                            stroke="#00cf6e" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
                    </g>
                </svg>
            </div>
            <div className="nav__wrap nav__wrap--retracted">
                <div role="button" tabIndex="0" className="nav__close">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18.979" height="18.979" viewBox="0 0 18.979 18.979">
                        <g id="Icon_feather-menu" data-name="Icon feather-menu" transform="translate(-5.431 -6.457)">
                            <path id="Path_12" data-name="Path 12" d="M4.5,18H25.34"
                                transform="translate(-8.358 13.769) rotate(-45)" fill="none" stroke="#00cf6e"
                                stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
                            <path id="Path_14" data-name="Path 14" d="M4.5,27H25.34"
                                transform="translate(23.462 -13.695) rotate(45)" fill="none" stroke="#00cf6e"
                                stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
                        </g>
                    </svg>

                </div>
                <div className="nav__inner">
                    <NavOptions />
                </div>
            </div>

        </nav>
    );
}



export default Navbar;