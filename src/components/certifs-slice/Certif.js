import { forwardRef } from "react";
import React, { useContext } from 'react';
import { ImgLocationContext } from '../../App';

const certifsData = [
    {
        link: "https://www.coursera.org/account/accomplishments/verify/9HKUP9XT5HGW",
        name: "Advanced React",
        provider: "Meta",
        date: "April 2024",
        logoSrc: "logo-Meta.png"
    },
    {
        link: "https://www.coursera.org/account/accomplishments/verify/F5ERDPRB6SEY",
        name: "React Basics",
        provider: "Meta",
        date: "January 2024",
        logoSrc: "logo-Meta.png"
    },
    {
        link: "https://www.coursera.org/account/accomplishments/verify/GN4LFM5RTS4C",
        name: "Programming with JavaScript",
        provider: "Meta",
        date: "November 2023",
        logoSrc: "logo-Meta.png"
    },
    {
        link: "https://courses.edx.org/certificates/1921f1cc711447a3aeed6edf61508c12",
        name: "Introduction to Web Accessibility",
        provider: "W3C",
        date: "September 2023",
        logoSrc: "w3c-white.png"
    },
    {
        link: "https://www.credly.com/badges/802c6142-fd3a-41a2-84dd-8196f056d8a7/public_url",
        name: "AgilePM® Foundation",
        provider: "APMG",
        date: "October 2022",
        logoSrc: "apmg-white.png"
    },
    {
        link: "https://www.coursera.org/account/accomplishments/verify/8D5L6K7CWHL4",
        name: "Foundations of User Experience (UX) Design",
        provider: "Google",
        date: "August 2021",
        logoSrc: "google.png"
    }
];

const Certif = forwardRef((props, ref) => {
    const imgLocation = useContext(ImgLocationContext);

    return (

        <div ref={ref} className="certifs__inner-wrap">
            {certifsData.map((certif, index) => (
                <a key={index} href={certif.link} class="certif">
                    <div class="certif__info">
                        <div class="certif__name">
                            <div class="certif__highlight"></div>
                            <div class="certif__name-wrap">
                                <h3 class="certif__course">{certif.name}</h3>
                                <span class="certif__provider">{certif.provider}</span>
                            </div>
                        </div>
                        <div class="certif__date">
                            <small>Completed {certif.date}</small>
                        </div>
                    </div>
                    <div class="certif__logo">
                        <img alt="Google logo"
                            src={`${imgLocation}${certif.logoSrc}`} />
                    </div>
                </a>
            ))}
        </div>
    )
});

export default Certif;