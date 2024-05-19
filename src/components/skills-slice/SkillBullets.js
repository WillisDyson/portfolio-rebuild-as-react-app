const SkillBullets = ({ bullets }) => {
    return (
        <ul className="skill-card__skills-list">
            {bullets.map((bullet, index) => (
                <li class="skill-card__skill-listing" key={index}>{bullet}</li>
            ))}
        </ul>
    );
};

export default SkillBullets;