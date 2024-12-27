
import Album from "@/pages/album";
import Awards from "@/pages/awards";
import EarlyFormed from "@/pages/early-formed";
import Intro from "@/pages/intro";
import Members from "@/pages/members";
import PatTorpey from "@/pages/pat-torpey";
import Reunion from "@/pages/reunion";
import BriefHistory from "@/pages/brief-history";
import LineUpChange from "@/pages/line-up-change";
import Footer from "@/pages/footer";
import Farewell from "@/pages/farewell";

export default function Home() {
  return (
    <main className="min-h-dvh overflow-x-hidden">
      <div className="noise" />
      <Intro />
      <EarlyFormed />
      <BriefHistory />
      <Members />
      <Album />
      <Awards />
      <LineUpChange />
      <Reunion />
      <PatTorpey />
      <Farewell />
      <Footer />
    </main>
  );
}
