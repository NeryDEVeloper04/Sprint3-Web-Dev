import Header from "./components/Header";
import Hero from "./components/Hero";
import Modes from "./components/Modes";
import DisparoSimulado from "./components/DisparoSimulado";
import SpecItem from "./components/SpecItem";
import CTA from "./components/CTA";
import FormularioLogin from "./components/FormularioLogin";
import Footer from "./components/Footer";
import BotaoTopo from "./components/BotaoTopo";
import BoasVindas from "./components/BoasVindas";
import modes from "./data/modes";
import specs from "./data/specs";

function App() {
  return (
    <>
      <BoasVindas />
      <Header />

      <Hero modos={modes} />

      <Modes modos={modes} />

      <DisparoSimulado />

      <section className="specs-section" id="specs">
        <div className="specs-grid">
          {specs.map((spec) => (
            <SpecItem key={spec.label} spec={spec} />
          ))}
        </div>
      </section>

      <CTA />

      <FormularioLogin />

      <Footer />

      <BotaoTopo />
    </>
  );
}

export default App;
