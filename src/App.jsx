import {
  Hero,
  SuperQuality,
  Services,
  CustomerReview,
  Newletter,
  Offers,
  PopularProducts,
  Footer,
  Navbar,
} from "./Sections";

const App = () => {
  return (
    <main>
      <section className="padding">
        <Navbar />
      </section>
      <section className="padding">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding">
        <Services />
      </section>
      <section className="padding">
        <Offers />
      </section>
      <section className="padding">
        <CustomerReview />
      </section>
      <section className="padding">
        <Newletter />
      </section>
      <section className="padding">
        <Footer />
      </section>
    </main>
  );
};

export default App;
