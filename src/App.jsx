import Card from "./components/UI/Card";
import TopNav from "./components/Layout/TopNav";
import ProductImages from "./components/Product/ProductImages";
import ProductDescription from "./components/Product/ProductDescription";
import CartProvider from "./store/CartProvider";

//data item shoes
const itemShoes = {
  id: 1,
  title: "Fall Limited Edition Senakers",
  company: "sneaker company",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole. They will withstand everything the wheater can offer.",
  price: 250,
  discount: 50,
  images: {
    bigImg: [
      "/assets/images/image-product-1.jpg",
      "/assets/images/image-product-2.jpg",
      "/assets/images/image-product-3.jpg",
      "/assets/images/image-product-4.jpg",
    ],
    thumbImg: [
      "/assets/images/image-product-1-thumbnail.jpg",
      "/assets/images/image-product-2-thumbnail.jpg",
      "/assets/images/image-product-3-thumbnail.jpg",
      "/assets/images/image-product-4-thumbnail.jpg",
    ],
  },
};

function App() {
  return (
    <CartProvider>
      <TopNav />

      <main className="px-16 py-24">
        <section>
          <Card className="flex gap-24">
            <div className="flex flex-col flex-none w-2/5 gap-4">
              <ProductImages
                bigImg={itemShoes.images.bigImg}
                thumbImg={itemShoes.images.thumbImg}
              />
            </div>
            <div className="flex flex-col gap-8">
              <ProductDescription
                id={itemShoes.id}
                title={itemShoes.title}
                company={itemShoes.company}
                description={itemShoes.description}
                price={itemShoes.price}
                discount={itemShoes.discount}
                thumbImage={itemShoes.images.thumbImg[0]}
              />
            </div>
          </Card>
        </section>
      </main>
    </CartProvider>
  );
}

export default App;
