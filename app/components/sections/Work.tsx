import { projects } from "../../data";

export function Work() {
  return <section id="work" className="work section-light"><header className="work-head reveal"><p className="section-label">01 / Featured showcase</p><h2>Best editing<br /><em>works.</em></h2><p>Selected films, campaigns and social edits crafted for brands, creators and stories worth sharing.</p></header>
    <div className="work-grid">{projects.map(project => <article className={`work-item ${project.layout}`} key={project.title}><div className="work-image"><img src={project.image} alt={`${project.title} — ${project.category}`} loading="lazy" /></div><div className="work-meta"><p>{project.number} <span>/</span> {project.category}</p><p>{project.year}</p></div><div className="work-info"><div><h3>{project.title}</h3><p>{project.description}</p></div><p>{project.role}</p></div></article>)}</div>
  </section>;
}
