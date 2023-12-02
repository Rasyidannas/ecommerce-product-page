import Card from "./components/UI/Card";
import TopNav from "./components/Layout/TopNav";
import ProductImages from "./components/Product/ProductImages";

function App() {
  return (
    <>
      <TopNav />

      <main className="px-16 py-24">
        <section>
          <Card className="flex flex-col w-2/5 gap-4">
            <ProductImages />
          </Card>
        </section>
      </main>
    </>
  );
}

export default App;
