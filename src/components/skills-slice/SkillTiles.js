const SkillTiles = ({ hasTiles, skillTilesData }) => {
    return (
        <div className="skill-card__skills-section">
            {hasTiles && skillTilesData && skillTilesData.length > 0 && skillTilesData.map((skill, index) => (
                <div key={index} className="skill-card__skill">
                    <img className="skill-card__skill-img" alt={skill.tileName} src={skill.tileImgSrc} />
                    <span className="skill-card__skill-name">{skill.tileName}</span>
                </div>
            ))}
        </div>
    );
};

export default SkillTiles;