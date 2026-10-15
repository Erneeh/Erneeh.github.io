import PropTypes from 'prop-types';
import { FiGlobe, FiSmartphone, FiArrowUpRight } from 'react-icons/fi';
import { FaApple } from 'react-icons/fa';

const projects = [
  { name: 'Kur slėptis?', url: 'https://kursleptis.vercel.app/', domain: 'kursleptis.vercel.app', type: 'webapp', logo: '/projects/kursleptis.png', color: 'from-slate-300/20 to-sky-900/30' },
  { name: 'Nord Barbershop', url: 'https://nordbarbershop.lt', domain: 'nordbarbershop.lt', type: 'website', logo: '/projects/nord.jpeg', cover: true, color: 'from-stone-500/30 to-stone-900/30' },
  { name: 'Igmita', url: 'https://igmita.lt', domain: 'igmita.lt', type: 'website', logo: '/projects/igmita.png', color: 'from-emerald-400/20 to-teal-900/30' },
  { name: 'MarcoMatch', url: 'https://www.marcomatch.com/', domain: 'marcomatch.com', type: 'app', logo: '/projects/marcomatch.png', color: 'from-sky-400/25 to-indigo-900/30', appStore: 'https://apps.apple.com/app/id6797470286' },
  { name: 'KukuApp', url: 'https://kukuapp.vercel.app/', domain: 'kukuapp.vercel.app', type: 'app', logo: '/projects/kukuapp.png', color: 'from-amber-300/25 to-orange-900/30', comingSoon: true },
  { name: 'Vaikų pasakos', url: 'https://vaiku-pasakos-info.vercel.app/', domain: 'vaiku-pasakos-info.vercel.app', type: 'app', mark: 'V', color: 'from-violet-400/25 to-purple-900/30', comingSoon: true },
];

const copy = {
  lt: { title: 'Mano projektai', intro: 'Interneto svetainės ir programėlės, kurias sukūriau.', webapp: 'Internetinė programėlė', website: 'Svetainė', app: 'Programėlė', visit: 'Atidaryti', soon: 'App Store — netrukus' },
  en: { title: 'My projects', intro: 'Websites and apps I’ve built.', webapp: 'Web app', website: 'Website', app: 'Mobile App', visit: 'Open', soon: 'App Store — coming soon' },
};

export default function Portfolio({ language }) {
  const text = copy[language];
  return (
    <section className="project-section" aria-labelledby="projects-title">
      <h1 id="projects-title" className="text-lg font-medium text-white">{text.title}</h1>
      <div className="project-grid">
        {projects.map(project => {
          const TypeIcon = project.type === 'app' ? FiSmartphone : FiGlobe;
          return (
            <article key={project.url} className="project-card">
              <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} — ${text.visit}`} className={`project-image group flex items-center justify-center bg-gradient-to-br ${project.color} focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-200`}>
                {project.logo ? (
                  <img src={project.logo} alt={`${project.name} logo`} width="96" height="96" loading="lazy" className="h-full w-full object-cover transition-transform group-hover:scale-105" />
                ) : (
                  <span aria-hidden="true" className="text-6xl font-semibold tracking-tight text-white/80 transition-transform group-hover:scale-110">{project.mark}</span>
                )}
              </a>
              <div className="project-caption">
                <span className="flex items-center gap-2 text-[10px] font-medium text-slate-300"><TypeIcon aria-hidden="true" />{text[project.type]}</span>
                <h2 className="text-sm font-medium text-white">{project.name}</h2>
                <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-200">{text.visit}<FiArrowUpRight aria-hidden="true" /></a>
                  {project.appStore && <a href={project.appStore} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} — App Store`} className="inline-flex items-center gap-2 text-sky-200 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-200"><FaApple aria-hidden="true" />App Store</a>}
                  {project.comingSoon && <span className="inline-flex items-center gap-2 text-xs text-slate-400"><FaApple aria-hidden="true" />{text.soon}</span>}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

Portfolio.propTypes = { language: PropTypes.oneOf(['lt', 'en']).isRequired };
