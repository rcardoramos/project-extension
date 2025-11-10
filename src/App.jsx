import { Header } from "./components/header";
import { CardsContainer } from "./components/cards-container";
import { Filters } from "./components/filters";

function App() {
  return (
    <main className="light-gradient dark:dark-gradient min-h-screen flex flex-col items-center">
      <section className="w-[343px] my-6 md:w-2xl xl:w-[1170px]">
        <Header />
        <Filters />
        <CardsContainer />
      </section>
    </main>
  );
}

export default App;
