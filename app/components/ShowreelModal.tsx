import { Play, X } from "lucide-react";
import { media } from "../data";

export function ShowreelModal({ onClose }: { onClose: () => void }) {
  return <div className="reel-modal" role="dialog" aria-modal="true" aria-label="Showreel viewer"><button id="close-reel" className="close-reel" onClick={onClose}>Close <X size={18} /></button><div className="modal-video" style={{ backgroundImage: `url(${media.showreel})` }}><div><Play size={28} fill="currentColor" /><p>Showreel media has not been supplied yet.</p><span>Place your video in <code>/public/media</code> and update <code>app/data/media.ts</code>.</span></div></div></div>;
}
