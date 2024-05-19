const careerInfoData = [
    {
        name: "TopCashback",
        location: "Stafford, West Midlands, UK",
        role: "Front End Developer",
        duration: "Current role since Feb. 2022",
        paragraphs: ["Returned to TopCashback after a previous successful year as a UX Design Intern.Currently working as a Front End Developer within the Design / UX team.My main purpose is to 'bridge the gap' between the UX Designers and the Back End Developers. I work closely with Designers to bring their ideas to life, whether it be in the form of prototypes, or fully- functional User Interfaces.", "I have been involved in developing the front end in many large-scale projects, most notably including the redesign / rebuild of both the sitewide navigation system and the merchant (brand) pages across the site.", "I have (and continue to) put considerable time and effort into advocating for Accessibility andchampioning the improvement of TopCashback's website accessibility in general. I have led user research sessions and in -house training, as well as produced documentation and checklists to ensure maximum WCAG compliance by any staff who work with online content."]
    },
    {
        name: "Ebuyer",
        location: "Howden, East Yorkshire, UK",
        role: "Web Designer/Developer",
        duration: "May 2021 – Feb 2022",
        paragraphs: ["My role was a hybrid between Web Developer and Web (UI) Designer.", "I was responsible for designing and building user-friendly and visually impressive landing pages for promotional content, as well as being involved in several redesign projects.", "I greatly developed my UI Design and Front End Development skills during my time here and made many great connections for the future."]
    },
    {
        name: "Graduation",
        location: "Huddersfield, West Yorkshire, UK",
        role: "1st Class Information & Communication Technology (BSc) Graduate",
        duration: "Graduated May 2021",
        paragraphs: ["I graduated from The University of Huddersfield with a 1st Class Undergraduate Degree in Information & Communication Technology.", "Due to my interest in UX Design and the ongoing COVID-19 pandemic at the time, I based my dissertation project on performing a usability review and redesign of the NHS COVID-19 'Test and Trace' app.", "In this project, I performed several rounds of user research to highlight particular usability concerns within the app. I then produced design solutions and iteratively tested and modified them, until there was clear data to prove that my solutions improved the usability of the app overall. I received a grade of 82% for my project.", "My course also delved into many areas of development and design, and this is where I discovered my deep interest in both Front End Web Development and UX/UI Design."]
    },
    {
        name: "TopCashback Internship",
        location: "Stafford, West Midlands, UK",
        role: "UX Designer (12 months internship)",
        duration: "July 2019 – Sep 2020",
        paragraphs: ["As part of my Undergraduate course, I spent 12 months working as a UX Design Intern at TopCashback within the Design/UX team.", "Regardless of my Intern status, I was immediately given a great deal of responsibility and involved in some large-scale projects – most notably the complete redesign of TopCashback's 'About us' page.", "I massively improved my Design skills and overall professionalism during this year, and I made a wealth of great friends/connections, many of whom I still work with today upon my return to TopCashback's Design/UX team as a Front End Developer in 2022."]
    }
];

const CareerInfoSection = ({ name }) => {
    const filteredCompany = careerInfoData.find(company => company.name === name);

    if (!filteredCompany) return null;

    return (
        <div className="career-info career-child">
            <small className="career-info__location">{filteredCompany.location}</small>
            <h3 className="career-info__role">{filteredCompany.role}</h3>
            <span className="career-info__duration">{filteredCompany.duration}</span>
            <div className="career-info__more-info" role="button" tabIndex="0">Read summary
                <svg
                    className="career-info__icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14.977"
                    height="14.977"
                    viewBox="0 0 14.977 14.977">
                    <path
                        id="Icon_ion-ios-arrow-dropdown-circle"
                        data-name="Icon ion-ios-arrow-dropdown-circle"
                        d="M3.375,10.864a7.489,7.489,0,1,0,7.489-7.489A7.487,7.487,0,0,0,3.375,10.864ZM13.783,9.3a.7.7,0,0,1,.983,0,.686.686,0,0,1,.2.49.7.7,0,0,1-.205.493l-3.4,3.384a.694.694,0,0,1-.958-.022L6.964,10.212a.695.695,0,0,1,.983-.983l2.92,2.949Z"
                        transform="translate(-3.375 -3.375)"
                        fill="#00cf6e"
                    />
                </svg>
            </div>
            <div className="career-info__more-info-text career-info__more-info-text--hidden">
                {filteredCompany.paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
            <div className="career-grid__line-wrap" role="presentation">
                <div className="career-grid__line" role="presentation"></div>
            </div>
        </div>
    );
}

export default CareerInfoSection;