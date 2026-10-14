import { ArrowUpRight } from "lucide-react";
import { process, services } from "../../data";

export function Services() {
  return <section id="services" className="services section-dark"><div className="services-intro reveal"><p className="section-label">04 / Capabilities</p><h2>Production<br /><em>services.</em></h2></div><div className="service-list">{services.map((service, index) => <div className="service-row reveal" key={service}><span>0{index + 1}</span><h3>{service}</h3><ArrowUpRight size={20} /></div>)}</div><div className="process-line reveal">{process.map((item, index) => <span key={item}><b>0{index + 1}</b>{item}</span>)}</div></section>;
}
