import React, { useRef, useEffect } from 'react';
import SkillCards from "./SkillCards";
import './styles/Skills.css';

const SkillsSlice = () => {
    const skillsWrapRef = useRef();

    useEffect(() => {
        if (skillsWrapRef.current) {
            const skillsWrapElement = skillsWrapRef.current.querySelector('.skills__wrap');
            console.log(skillsWrapElement);
        }
    }, []);

    return (
        <section id="skills" className="skills-section hidden section" aria-label="Skills">
            <div className="skills">
                <h2 className="skills__heading heading-two">Skills</h2>
                <SkillCards ref={skillsWrapRef} />
            </div>
        </section>
    );
}

export default SkillsSlice;