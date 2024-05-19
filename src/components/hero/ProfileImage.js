import React, { useContext } from 'react';
import { ImgLocationContext } from '../../App'; // Adjust the path according to your project structure

const image = {
    filename: 'willis.png',
    alt: 'Photograph of Willis. He has short brown hair, glasses, and short facial hair. He is smiling while wearing a green and white button-up shirt, in front of palm trees.'
};

const ProfileImage = () => {
    const imgLocation = useContext(ImgLocationContext);

    return (
        <img
            className="about__img about-child"
            src={`${imgLocation}${image.filename}`}
            alt={image.alt}
        />
    );
}

export default ProfileImage;