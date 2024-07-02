import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const product = {
    id,
    title: "Smartphone XYZ",
    price: "$799",
    description: "A high-end smartphone with a sleek design and powerful features.",
  };

  return (
    <div className="space-y-8">
      <header className="flex flex-col items-center space-y-4">
        <h1 className="text-4xl font-bold">{product.title}</h1>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>{product.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{product.price}</p>
          <p>{product.description}</p>
        </CardContent>
        <CardFooter>
          <Button onClick={() => alert("Added to cart")}>Add to Cart</Button>
        </CardFooter>
      </Card>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Related Products</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <ProductCard
            title="Laptop ABC"
            price="$1299"
            onAddToCart={() => alert("Added to cart")}
          />
          <ProductCard
            title="Wireless Headphones"
            price="$199"
            onAddToCart={() => alert("Added to cart")}
          />
          <ProductCard
            title="Smartwatch 123"
            price="$299"
            onAddToCart={() => alert("Added to cart")}
          />
        </div>
      </section>
    </div>
  );
};

const ProductCard = ({ title, price, onAddToCart }) => (
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p>{price}</p>
    </CardContent>
    <CardFooter>
      <Button onClick={onAddToCart}>Add to Cart</Button>
    </CardFooter>
  </Card>
);

export default ProductDetail;