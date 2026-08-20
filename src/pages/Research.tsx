import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import euFundingLogo from "@/assets/eu-funding-logo.png";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Research = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="section-container max-w-3xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
            Pētniecības projekts ZP15
          </h1>

          <div className="bg-card border border-border rounded-xl p-8 space-y-6">
            <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground leading-snug">
              "EMS (Energy Management System) šķeldu koģenerācijas iekārtu ekonomiskās atdeves
              paaugstināšanai ar BESS"
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Oktobrī tika uzsākts pētniecības projekts, kura mērķis ir izstrādāt un komercializēt
              integrētu viedās enerģijas vadības sistēmas (EMS) un enerģijas uzkrāšanas sistēmas
              (BESS) risinājumu, kas pielāgots Latvijas mežsaimniecības un kokapstrādes nozares
              biomasas koģenerācijas staciju (CHP) vajadzībām, lai optimizētu elektroenerģijas un
              siltumenerģijas ražošanu, samazinātu pašpatēriņa izmaksas, uzlabotu energoefektivitāti
              un veicinātu elastīgāku darbību energotirgū.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-muted rounded-lg p-4">
                <p className="text-sm text-muted-foreground mb-1">Realizācijas periods</p>
                <p className="font-medium text-foreground">01.10.2025. – 31.09.2026.</p>
              </div>
              <div className="bg-muted rounded-lg p-4">
                <p className="text-sm text-muted-foreground mb-1">Kopējās izmaksas</p>
                <p className="font-medium text-foreground">175 350.00 EUR</p>
              </div>
              <div className="bg-muted rounded-lg p-4 sm:col-span-2">
                <p className="text-sm text-muted-foreground mb-1">Atveseļošanas fonda līdzfinansējums</p>
                <p className="font-medium text-foreground">127 394.00 EUR</p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed text-sm">
              Pētniecības projekts tiek īstenots SIA "Meža nozares kompetences cents" īstenotā ANM
              plāna investīcijas pasākuma 1.2.1.2.i.2. pasākuma "Inovatīvu produktu un tehnoloģiju
              izstrāde" projekta "Meža nozares kompetences centrs - energoefektivitāte" ietvaros.
            </p>

            <p className="text-sm text-muted-foreground">
              Investīciju projekta identifikācijas Nr.:{" "}
              <span className="font-medium text-foreground">
                Nr. 1.2.1.2.i.2/1/24/A/CFLA/001
              </span>
            </p>

            <div className="pt-4 border-t border-border">
              <img
                src={euFundingLogo}
                alt="Funded by the European Union – NextGenerationEU · National Development Plan 2027"
                className="max-h-24 object-contain"
              />
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-8 space-y-6 mt-8">
            <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground leading-snug">
              Projekta progress
            </h2>

            <div className="bg-muted rounded-lg p-4 inline-block">
              <p className="text-sm text-muted-foreground mb-1">Periods</p>
              <p className="font-medium text-foreground">10.2025. – 03.2026.</p>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Projekta pirmajos sešos mēnešos uzņēmums "Forward IT Consulting" ir veiksmīgi
              īstenojis TRL 4, izstrādājot un laboratoriski validējot viedās enerģijas vadības
              sistēmas (EMS) pamata moduļus: datu iegūšanu, cenu prognozēšanu un darbības
              optimizāciju. Veiktas tehniskās izpētes vizītes un datu audits koģenerācijas stacijā
              "Warmeston Granulas", pēc kurām precizēti EMS integrācijas scenāriji, identificēti BESS
              ieviešanas riski, pielāgota turpmākā pētījuma plānošana.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Paralēli tehniskajam darbam tika stiprināta pētnieciskā bāze un uzsākta integrācijas
              fāze, apvienojot EMS moduļus vienotā prototipā un simulējot reāllaika datu plūsmas no
              koģenerācijas un bateriju (BESS) sistēmām.
            </p>

            <div className="pt-4 border-t border-border">
              <img
                src={euFundingLogo}
                alt="Funded by the European Union – NextGenerationEU · National Development Plan 2027"
                className="max-h-24 object-contain"
              />
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-8 space-y-6 mt-8">
            <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground leading-snug">
              Projekta progress
            </h2>

            <div className="bg-muted rounded-lg p-4 inline-block">
              <p className="text-sm text-muted-foreground mb-1">Periods</p>
              <p className="font-medium text-foreground">04.2026. – 09.2026.</p>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Projektā ar jūniju tika noslēgts rūpnieciskā pētījuma posms, veiksmīgi izstrādājot un
              laboratorijas vidē validējot EMS+BESS risinājuma moduļus šķeldas koģenerācijas iekārtu
              ekonomiskās atdeves paaugstināšanai. Ar pētījumu un tā rezultātiem piedalījāmies
              konferencē Norvēģijā (22nd International Conference on EUROPEAN ENERGY MARKET – EEM
              2026), kuras noslēgumā zinātniskā publikācija tika iekļauta gan IEEEXplore, gan Scopus
              datubāzēs.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Ar jūliju ir uzsākts projekta eksperimentālās izstrādes posms, kas turpināsies līdz
              gada beigām. Tajā sistēmas prototips sākotnēji tiks testēts laboratorijas vidē, pēc tam
              kontrolētā vidē un visbeidzot – reālajā ražošanas vidē.
            </p>

            <div className="pt-4 border-t border-border">
              <img
                src={euFundingLogo}
                alt="Funded by the European Union – NextGenerationEU · National Development Plan 2027"
                className="max-h-24 object-contain"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Research;
