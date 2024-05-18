import { useEffect } from 'react';

const GlobalScripts = () => {
    useEffect(() => {
    const elements = document.querySelectorAll('.hidden');
    elements.forEach((element) => {
        element.classList.remove('hidden');
    });
}, []);

return null;
};

export default GlobalScripts;