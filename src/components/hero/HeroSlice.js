import HeroTextSection from './HeroTextSection';
import HeroMoreInfo from './HeroMoreInfo';
import './styles/Hero.css';


let HeroSlice = () => {

    return (
        <header id="about" className="about-me hidden section" aria-label="About me" >
            <HeroTextSection />
            <HeroMoreInfo />
        </header >
    );
}

export default HeroSlice;