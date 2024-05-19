const SkillName = ({ name }) => {
    return (
        <div className="skill-card__name-section">
            <div className="skill-card__highlight"></div>
            <h3 className="skill-card__name">{name}</h3>
        </div>
    );
}

export default SkillName;