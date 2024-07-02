import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-8">
      <header className="flex flex-col items-center space-y-4">
        <h1 className="text-4xl font-bold">Welcome to ElectroMart</h1>
        <Input placeholder="Search for products..." className="max-w-lg" />
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Featured Products</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <ProductCard
            title="Smartphone XYZ"
            price="$799"
            onAddToCart={() => alert("Added to cart")}
          />
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

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Product Categories</h2>
        <div className="flex flex-wrap gap-4">
          <CategoryCard title="Laptops" onClick={() => navigate("/products?category=laptops")} />
          <CategoryCard title="Smartphones" onClick={() => navigate("/products?category=smartphones")} />
          <CategoryCard title="Accessories" onClick={() => navigate("/products?category=accessories")} />
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

const CategoryCard = ({ title, onClick }) => (
  <Card className="cursor-pointer" onClick={onClick}>
    <CardContent>
      <h3 className="text-lg font-semibold">{title}</h3>
    </CardContent>
  </Card>
);

export default Index;