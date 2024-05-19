import HeroGreeting from './HeroGreeting';
import HeroWelcome from './HeroWelcome';
import ProfileImage from './ProfileImage';

const HeroTextSection = () => {
    return (
        <div className="about">
            <ProfileImage />
            <HeroGreeting />
            <HeroWelcome />
        </div>
    );
}

export default HeroTextSection;