const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Certifications', href: '#certifs' },
    { label: 'Career & Education', href: '#career' },
    { label: 'Projects', href: '#work' },
    { label: 'Social Media & Contact', href: '#contact' },
    { label: 'Download my CV', href: '/assets/WillisDyson-CV-2024.pdf', class: 'nav__item--cv', attribute: 'download' }
];

let NavOptions = () => {
    return (
        navLinks.map((link, index) => (
            <a key={index} className={'nav__item ' + (link.class ? link.class : '')} href={link.href}{...(link.attribute ? { download: '' } : {})}>
                {link.label}
            </a>
        ))
    );
}

export default NavOptions;