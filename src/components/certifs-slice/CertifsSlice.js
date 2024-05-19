import React, { useRef, useEffect } from 'react';
import Certif from './Certif';
import './styles/Certifs.css';

const CertifsSlice = () => {

    return (
        <section id="certifs" class="certifs hidden section" aria-label="Certifications">

            <div class="certifs__wrap">
                <h2 class="heading-two">Certifications</h2>
                <Certif />
            </div>

        </section>
    );
}

export default CertifsSlice;