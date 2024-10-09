import Header from "./components/Header";
import Grid from "./components/Grid";

function App() {
  return (
    <>
      <main className="flex flex-col font-agb font-bold bg-[url('/images/halloween-pattern.jpg')] bg-cover min-h-screen">
        <Header />
        <Grid />
      </main>
    </>
  );
}

export default App;
