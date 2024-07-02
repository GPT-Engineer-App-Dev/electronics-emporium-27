import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredProducts(
      products.filter((product) =>
        product.title.toLowerCase().includes(query)
      )
    );
  };

  return (
    <div className="space-y-8">
      <header className="flex flex-col items-center space-y-4">
        <h1 className="text-4xl font-bold">Welcome to ElectroMart</h1>
        <Input
          placeholder="Search for products..."
          className="max-w-lg"
          value={searchQuery}
          onChange={handleSearch}
        />
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Featured Products</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              onAddToCart={() => alert("Added to cart")}
            />
          ))}
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

const products = [
  { id: 1, title: "Smartphone XYZ", price: "$799" },
  { id: 2, title: "Laptop ABC", price: "$1299" },
  { id: 3, title: "Wireless Headphones", price: "$199" },
  { id: 4, title: "Smartwatch 123", price: "$299" },
];

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