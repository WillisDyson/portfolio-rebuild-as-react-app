import React, { useRef, useEffect } from 'react';
import CareerLogo from "./CareerLogo";
import CareerInfoSection from "./CareerInfoSection";
import './styles/Careers.css';

const CareersSlice = () => {

    return (
        <section id="career" class="career hidden section" aria-label="Career and education">
            <h2 class="career__heading heading-two">Career & Education</h2>


            <div class="career-grid">
                <CareerLogo name="TopCashback" />
                <CareerInfoSection name="TopCashback" />
                <CareerLogo name="Ebuyer" />
                <CareerInfoSection name="Ebuyer" />
                <CareerLogo name="Graduation" />
                <CareerInfoSection name="Graduation" />
                <CareerLogo name="TopCashback" />
                <CareerInfoSection name="TopCashback Internship" />
            </div>


        </section>
    );
}

export default CareersSlice;