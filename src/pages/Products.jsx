import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    filterProducts(query, selectedCategory, selectedPriceRange, selectedBrand);
  };

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
    filterProducts(searchQuery, value, selectedPriceRange, selectedBrand);
  };

  const handlePriceRangeChange = (value) => {
    setSelectedPriceRange(value);
    filterProducts(searchQuery, selectedCategory, value, selectedBrand);
  };

  const handleBrandChange = (value) => {
    setSelectedBrand(value);
    filterProducts(searchQuery, selectedCategory, selectedPriceRange, value);
  };

  const filterProducts = (query, category, priceRange, brand) => {
    let filtered = products;

    if (query) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(query)
      );
    }

    if (category) {
      filtered = filtered.filter((product) => product.category === category);
    }

    if (priceRange) {
      const [min, max] = priceRange.split("-");
      filtered = filtered.filter(
        (product) => product.price >= min && product.price <= max
      );
    }

    if (brand) {
      filtered = filtered.filter((product) => product.brand === brand);
    }

    setFilteredProducts(filtered);
  };

  return (
    <div className="space-y-8">
      <header className="flex flex-col items-center space-y-4">
        <h1 className="text-4xl font-bold">Products</h1>
        <Input
          placeholder="Search for products..."
          className="max-w-lg"
          value={searchQuery}
          onChange={handleSearch}
        />
        <div className="flex flex-wrap gap-4">
          <Select onValueChange={handleCategoryChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All</SelectItem>
              <SelectItem value="laptops">Laptops</SelectItem>
              <SelectItem value="smartphones">Smartphones</SelectItem>
              <SelectItem value="accessories">Accessories</SelectItem>
            </SelectContent>
          </Select>
          <Select onValueChange={handlePriceRangeChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Price Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All</SelectItem>
              <SelectItem value="0-500">$0 - $500</SelectItem>
              <SelectItem value="500-1000">$500 - $1000</SelectItem>
              <SelectItem value="1000-1500">$1000 - $1500</SelectItem>
            </SelectContent>
          </Select>
          <Select onValueChange={handleBrandChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Brand" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All</SelectItem>
              <SelectItem value="brandA">Brand A</SelectItem>
              <SelectItem value="brandB">Brand B</SelectItem>
              <SelectItem value="brandC">Brand C</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </header>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.map((product) => (
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

const products = [
  { id: 1, title: "Smartphone XYZ", price: 799, category: "smartphones", brand: "brandA" },
  { id: 2, title: "Laptop ABC", price: 1299, category: "laptops", brand: "brandB" },
  { id: 3, title: "Wireless Headphones", price: 199, category: "accessories", brand: "brandC" },
  { id: 4, title: "Smartwatch 123", price: 299, category: "accessories", brand: "brandA" },
];

const ProductCard = ({ title, price, onAddToCart, onClick }) => (
  <Card className="cursor-pointer" onClick={onClick}>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p>${price}</p>
    </CardContent>
    <CardFooter>
      <Button onClick={onAddToCart}>Add to Cart</Button>
    </CardFooter>
  </Card>
);

export default Products;