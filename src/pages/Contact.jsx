import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="space-y-8">
      <header className="flex flex-col items-center space-y-4">
        <h1 className="text-4xl font-bold">Contact Us</h1>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Get in Touch</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="Your Name" />
          <Input placeholder="Your Email" />
          <Textarea placeholder="Your Message" />
          <Button onClick={() => alert("Message sent")}>Send Message</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;