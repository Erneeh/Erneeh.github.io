import PropTypes from 'prop-types';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';

const copy = {
  lt: {
    role: 'Svetainių ir programėlių kūrėjas · AI pagalba',
    title: 'Jūsų idėja. Veikiantis skaitmeninis sprendimas.',
    description: 'Kuriu individualias interneto svetaines, el. parduotuves ir programėles. Pasitelkiu dirbtinį intelektą, suprantu, kaip sprendimas turi veikti, ir pasirūpinu, kad jis atitiktų jūsų poreikius.',
    services: ['Interneto svetainės', 'El. parduotuvės', 'Programėlės'],
    contact: 'Aptarkime jūsų idėją',
    work: 'Peržiūrėti darbus',
  },
  en: {
    role: 'AI-assisted web & app developer',
    title: 'Your idea. A digital solution that works.',
    description: 'I build custom websites, online shops, and apps. With AI as part of my toolkit, I turn your requirements into practical solutions, understand how they should work, and troubleshoot along the way.',
    services: ['Websites', 'Online shops', 'Apps'],
    contact: 'Let’s discuss your idea',
    work: 'View my work',
  },
};

export default function Home({ language }) {
  const content = copy[language];
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-5xl px-6 py-8 sm:px-10 sm:py-12"
      aria-labelledby="hero-title"
    >
      <p className="mb-5 text-xs font-medium uppercase tracking-[0.18em] text-sky-200 sm:text-sm">{content.role}</p>
      <h1 id="hero-title" className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">{content.title}</h1>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">{content.description}</p>
      <ul className="mt-7 flex flex-wrap gap-2 text-sm text-slate-200">
        {content.services.map(service => <li key={service} className="rounded-full border border-slate-500/60 px-4 py-2">{service}</li>)}
      </ul>
      <div className="mt-9 flex flex-wrap items-center gap-4">
        <Link to="/contacts" className="rounded-full bg-sky-200 px-6 py-3 font-medium text-slate-900 transition hover:bg-sky-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-200">{content.contact} <span aria-hidden="true">↗</span></Link>
        <Link to="/portfolio" className="rounded-full px-3 py-3 font-medium text-white underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-200">{content.work}</Link>
      </div>
    </motion.section>
  );
}

Home.propTypes = { language: PropTypes.oneOf(['lt', 'en']).isRequired };
