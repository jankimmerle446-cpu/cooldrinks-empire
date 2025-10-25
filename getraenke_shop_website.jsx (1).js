import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Store, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

export default function CoolDrinksEmpire() {
  const [cart, setCart] = useState([]);

  const drinks = [
    { id: 1, name: "FrostWave Energy", price: 2.99, img: "https://images.unsplash.com/photo-1613470206471-2a7d1b2c9b4b" },
    { id: 2, name: "NeonFuel Soda", price: 1.99, img: "https://images.unsplash.com/photo-1582101957582-592f89b8b8d1" },
    { id: 3, name: "Galaxy Spark Water", price: 3.49, img: "https://images.unsplash.com/photo-1613470206760-9d81a3b6bb02" },
    { id: 4, name: "Tropical Byte Juice", price: 2.49, img: "https://images.unsplash.com/photo-1613470206329-f4f57e3f7b8a" }
  ];

  const addToCart = (drink) => {
    setCart([...cart, drink]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-800 to-pink-700 text-white p-6">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-center mb-8 drop-shadow-lg"
      >
        CoolDrinks Empire 🥤
      </motion.h1>

      <div className="flex justify-center gap-4 mb-6">
        <Button className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-2">
          <Store size={18} /> In Stores erhältlich
        </Button>
        <Button className="bg-yellow-500 hover:bg-yellow-600 text-white flex items-center gap-2">
          <DollarSign size={18} /> Jetzt investieren
        </Button>
        <Button className="bg-pink-500 hover:bg-pink-600 text-white flex items-center gap-2">
          <ShoppingCart size={18} /> ({cart.length}) Warenkorb
        </Button>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {drinks.map((drink) => (
          <Card key={drink.id} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-xl">
            <img src={drink.img} alt={drink.name} className="w-full h-48 object-cover" />
            <CardContent className="p-4 text-center">
              <h2 className="text-xl font-bold mb-2">{drink.name}</h2>
              <p className="text-lg mb-4">€{drink.price.toFixed(2)}</p>
              <Button onClick={() => addToCart(drink)} className="bg-blue-500 hover:bg-blue-600 text-white w-full">
                In den Warenkorb
              </Button>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      <footer className="mt-12 text-center text-sm opacity-70">
        © 2025 CoolDrinks Empire — Frische. Power. Erfolg.
      </footer>
    </div>
  );
}
