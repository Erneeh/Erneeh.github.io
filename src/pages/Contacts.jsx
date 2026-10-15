import PropTypes from 'prop-types';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { RiTiktokLine } from 'react-icons/ri';

const links = [
  { name: 'LinkedIn', Icon: FiLinkedin, url: 'https://www.linkedin.com/in/ernestas-undz%C4%97nas-b8a814213/' },
  { name: 'Instagram', Icon: FiInstagram, url: 'https://www.instagram.com/erneeu/' },
  { name: 'TikTok', Icon: RiTiktokLine, url: 'https://www.tiktok.com/@erneeuu' },
  { name: 'GitHub', Icon: FiGithub, url: 'https://github.com/Erneeh' },
];
const copy = {
  lt: { title: 'Susisiekime.', email: 'Parašykite man', social: 'Socialiniai tinklai' },
  en: { title: 'Get in touch.', email: 'Email me', social: 'Social links' },
};

export default function Contacts({ language }) {
  const text = copy[language];
  return (
    <section className="w-full max-w-5xl px-6 py-8 sm:px-10" aria-labelledby="contact-title">
      <h1 id="contact-title" className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">{text.title}</h1>
      <a href="mailto:erne.undze@gmail.com" aria-label={`${text.email}: erne.undze@gmail.com`} className="mt-6 inline-block break-all text-xl text-sky-200 underline-offset-4 hover:underline sm:text-3xl">erne.undze@gmail.com</a>
      <nav aria-label={text.social} className="mt-8">
        <ul className="flex flex-wrap gap-x-6 gap-y-4 text-sm text-slate-300">
          {links.map(({ name, Icon, url }) => <li key={name}><a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white"><Icon aria-hidden="true" />{name}</a></li>)}
        </ul>
      </nav>
    </section>
  );
}
Contacts.propTypes = { language: PropTypes.oneOf(['lt', 'en']).isRequired };
