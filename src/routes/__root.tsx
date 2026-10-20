import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import globalCss from "../styles/global.css?url";
import { Layout } from "../components/Layout";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "robots", content: "noindex" },
    ],
    links: [
      { rel: "stylesheet", href: globalCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400..700&display=swap" },
      { rel: "icon", href: `${import.meta.env.BASE_URL}logo-mark.png`, type: "image/png" },
    ],
  }),
  component: Root,
});

function Root() {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <Layout>
          <Outlet />
        </Layout>
        <Scripts />
      </body>
    </html>
  );
}
