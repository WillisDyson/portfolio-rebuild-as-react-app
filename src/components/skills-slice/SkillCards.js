import React, { forwardRef } from 'react';
import SkillName from "./SkillName";
import SkillDesc from "./SkillDesc";
import SkillTiles from "./SkillTiles";
import SkillBullets from "./SkillBullets";

const skillsData = [
    {
        skillName: "Front End Web Development",
        skillDesc: "Currently employed as a Front End Developer, with 3+ years of professional experience.",
        hasTiles: true,
        bullets: []
    },
    {
        skillName: "Web Accessibility",
        skillDesc: "I have specialised in and advocated for Web Accessibility throughout my career as a Developer, as it is a cause that is incredibly important to me.",
        hasTiles: false,
        bullets: ["Accessible-needs user research", "Leading in-house training", "Production of guides & documentation", "W3C WCAGs fluency", "Accessible development techniques & design patterns"]
    },
    {
        skillName: "UX/UI Design",
        skillDesc: "I have a strong UX/UI design background, with 2+ years of professional experience in these fields, alongside several years of part-time freelance work.",
        hasTiles: false,
        bullets: ["UI Design", "User Research", "UX Principles", "Wireframing & Prototyping", "A / B Testing", "Data & Analytics", "Adobe XD, Adobe Photoshop, Figma"]
    }
];

const skillTilesData = [
    { tileImgSrc: "images/react.png", tileName: "React" },
    { tileImgSrc: "images/sass.png", tileName: "SASS (SCSS)" },
    { tileImgSrc: "images/html.png", tileName: "HTML" },
    { tileImgSrc: "images/css.png", tileName: "CSS" },
    { tileImgSrc: "images/js.png", tileName: "JavaScript" },
    { tileImgSrc: "images/git.png", tileName: "GIT" },
    { tileImgSrc: "images/jira.png", tileName: "Jira" },
    { tileImgSrc: "images/browserstack.png", tileName: "Browserstack" }
];


const SkillCards = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="skills__wrap">
            {skillsData.map((skill, index) => (
                <div key={index} className="skill-card">
                    <SkillName name={skill.skillName} />
                    <SkillDesc desc={skill.skillDesc} />
                    <h4 className="skill-card__subtitle">Main skills</h4>
                    <SkillTiles hasTiles={skill.hasTiles} skillTilesData={skillTilesData} />
                    <SkillBullets bullets={skill.bullets} />
                </div>
            ))}
        </div>
    );
});

export default SkillCards;