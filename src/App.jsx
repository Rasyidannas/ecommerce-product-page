import Card from "./components/UI/Card";
import TopNav from "./components/Layout/TopNav";
import ProductImages from "./components/Product/ProductImages";
import ProductDescription from "./components/Product/ProductDescription";

function App() {
  return (
    <>
      <TopNav />

      <main className="px-16 py-24">
        <section className="flex gap-24">
          <Card className="flex flex-col flex-none w-2/5 gap-4">
            <ProductImages />
          </Card>
          <Card className="flex flex-col gap-8">
            <ProductDescription />
          </Card>
        </section>
      </main>
    </>
  );
}

export default App;
