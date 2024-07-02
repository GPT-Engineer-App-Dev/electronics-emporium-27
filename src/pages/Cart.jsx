import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Cart = () => {
  const cartItems = [
    { id: 1, title: "Smartphone XYZ", price: "$799", quantity: 1 },
    { id: 2, title: "Laptop ABC", price: "$1299", quantity: 1 },
  ];

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="space-y-8">
      <header className="flex flex-col items-center space-y-4">
        <h1 className="text-4xl font-bold">Cart</h1>
      </header>

      <section className="space-y-4">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </section>

      <footer className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Total: ${totalPrice}</h2>
        <Button onClick={() => alert("Proceed to checkout")}>Checkout</Button>
      </footer>
    </div>
  );
};

const CartItem = ({ item }) => (
  <Card>
    <CardHeader>
      <CardTitle>{item.title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p>Price: {item.price}</p>
      <p>Quantity: {item.quantity}</p>
    </CardContent>
    <CardFooter>
      <Button onClick={() => alert("Remove from cart")}>Remove</Button>
    </CardFooter>
  </Card>
);

export default Cart;