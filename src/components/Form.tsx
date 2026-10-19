// A form that posts to church.formEndpoint when one is set, and otherwise opens a pre-filled email to the office.
import { useState, type FormEvent, type ReactNode } from "react";
import { church } from "../data/site";

type Props = { subject: string; children: ReactNode; submitLabel: string; done: ReactNode; className?: string };

export function Form({ subject, children, submitLabel, done, className }: Props) {
  const [state, setState] = useState<"idle" | "error" | "sending" | "done">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const bad = [...form.querySelectorAll<HTMLInputElement>("[required]")].filter((el) => !el.checkValidity() || !el.value.trim());
    form.querySelectorAll("[aria-invalid]").forEach((el) => el.removeAttribute("aria-invalid"));
    if (bad.length) {
      bad.forEach((el) => el.setAttribute("aria-invalid", "true"));
      setState("error");
      bad[0].focus();
      return;
    }
    const data = new FormData(form);
    if (church.formEndpoint) {
      setState("sending");
      try {
        const res = await fetch(church.formEndpoint, { method: "POST", body: data, headers: { Accept: "application/json" } });
        if (!res.ok) throw new Error(String(res.status));
        setState("done");
      } catch {
        setState("error");
      }
      return;
    }
    const body = [...data.entries()].filter(([, v]) => typeof v === "string" && v).map(([k, v]) => `${k}: ${v}`).join("\n");
    location.href = `mailto:${church.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setState("done");
  }

  if (state === "done") return <div className="done" tabIndex={-1} ref={(el) => el?.focus()}>{done}</div>;
  return (
    <form className={className} onSubmit={onSubmit} noValidate>
      {children}
      {state === "error" && <p className="error" role="alert">Please fill in every required field, with a valid email address.</p>}
      <button className="btn" type="submit" disabled={state === "sending"}>{state === "sending" ? "Sending…" : submitLabel}</button>
      {!church.formEndpoint && <p className="hint">This opens an email to {church.email} in your mail app.</p>}
    </form>
  );
}
