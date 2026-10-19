import { church } from "../data/site";
// <title> and description for a page.
export const head = (title?: string, description = "Canyon Springs Christian Church in Middleton, Idaho. Sundays at 9:00 and 10:30 AM.") => ({
  meta: [
    { title: title ? `${title} · ${church.short}` : `${church.name} · Middleton, Idaho` },
    { name: "description", content: description },
  ],
});
