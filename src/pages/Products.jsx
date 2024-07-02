import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();

  const products = [
    { id: 1, title: "Smartphone XYZ", price: "$799" },
    { id: 2, title: "Laptop ABC", price: "$1299" },
    { id: 3, title: "Wireless Headphones", price: "$199" },
    { id: 4, title: "Smartwatch 123", price: "$299" },
  ];

  return (
    <div className="space-y-8">
      <header className="flex flex-col items-center space-y-4">
        <h1 className="text-4xl font-bold">Products</h1>
      </header>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            onAddToCart={() => alert("Added to cart")}
            onClick={() => navigate(`/products/${product.id}`)}
          />
        ))}
      </section>
    </div>
  );
};

const ProductCard = ({ title, price, onAddToCart, onClick }) => (
  <Card className="cursor-pointer" onClick={onClick}>
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

export default Products;