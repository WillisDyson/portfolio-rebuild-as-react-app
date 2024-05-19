const HeroMoreInfo = () => {
    return (
        <a className="more-info" href="#skills">
            <span className="more-info__text">Everything you need to know about me</span>
            <svg className="more-info-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 33">
                <g transform="translate(-1.5 -1.5)">
                    <path className="more-info-icon__stroke" id="Path_2" data-name="Path 2"
                        d="M33,18A15,15,0,1,1,18,3,15,15,0,0,1,33,18Z" fill="none" strokeLinecap="round"
                        strokeLinejoin="round" strokeWidth="3" />
                    <path className="more-info-icon__stroke" id="Path_3" data-name="Path 3" d="M12,18l6,6,6-6m-6-6V24"
                        fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                </g>
            </svg>

        </a>
    );
}

export default HeroMoreInfo;