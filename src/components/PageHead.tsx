import type { ReactNode } from "react";
import { asset } from "../lib/content";

type Props = { title: string; lead?: string; photo?: string; alt?: string; pos?: string; children?: ReactNode };

export function PageHead({ title, lead, photo, alt = "", pos = "50% 50%", children }: Props) {
  return (
    <>
      <header className="page-head wrap">
        <h1 className="rise">{title}</h1>
        {lead && <p className="lead rise" style={{ "--i": 1 } as React.CSSProperties}>{lead}</p>}
        {children}
      </header>
      {photo && <img className="band-photo" src={asset(`photos/${photo}`)} alt={alt} style={{ objectPosition: pos }} />}
    </>
  );
}
