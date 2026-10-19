import { createFileRoute } from "@tanstack/react-router";
import { church } from "../data/site";
import { PageHead } from "../components/PageHead";
import { head } from "../lib/head";

export const Route = createFileRoute("/give")({
  head: () => head("Give", "Give online to Canyon Springs Christian Church through Pushpay."),
  component: () => (
    <>
      <PageHead title="Give" lead="Thank you for supporting the work of Canyon Springs.">
        <div className="btn-row give-row"><a className="btn" href={church.giveUrl} rel="noopener">Give online with Pushpay</a></div>
      </PageHead>
      <section className="wrap section-tight split">
        <div><h2 className="h-sm">Other ways</h2></div>
        <dl className="facts">
          <div><dt>The app</dt><dd>Get the Canyon Springs app: <a href={church.appStore} rel="noopener">App Store</a> · <a href={church.playStore} rel="noopener">Google Play</a></dd></div>
          <div><dt>Questions</dt><dd>Tana Lyle, bookkeeper: <a href="mailto:Canyonspringsfinance@gmail.com">Canyonspringsfinance@gmail.com</a></dd></div>
        </dl>
      </section>
    </>
  ),
});
