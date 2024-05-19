import { useContext } from 'react';
import { ImgLocationContext } from '../../App';


const careerLogoData = [
    {
        name: "TopCashback",
        logoSrc: "tcb.png"
    },
    {
        name: "Ebuyer",
        logoSrc: "ebuyer.png"
    },
    {
        name: "Graduation",
        logoSrc: "uoh.png"
    }
];

const CareerLogo = ({ name }) => {
    const filteredCompanies = careerLogoData.filter(company => company.name === name);
    const imgLocation = useContext(ImgLocationContext);

    return (
        filteredCompanies.map((company, index) => (
            <div key={index} className="career-grid__logo career-child">
                <img alt={company.name} src={imgLocation + company.logoSrc} />
            </div>
        ))
    );
}

export default CareerLogo;