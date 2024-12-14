import { useState } from "react"
import { ShoppingCart } from 'lucide-react'
import { Pizza } from "../../interfaces/pizza"
import { SearchBar } from "../../components/Searchbar"
import { Link } from "react-router"
import { Button } from "@/components/ui/button"
import { pizzas } from "@/data/pizza"
import { PizzaCard } from "@/components/PizzaCard"

export default function MenuPage() {
  const [cart, setCart] = useState<Pizza[]>([])

  const handleAddToCart = (pizza: Pizza) => {
    setCart([...cart, pizza])
  }

  return (
    <div className="min-h-s>creen bg-gray-50">
      <header className="sticky top-0 z-10 bg-yellow-400 p-4 shadow-md">
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-4">
          <div className="flex-1">
            <SearchBar />
          </div>
          <Link to="/cart">
            <Button variant="outline" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cart.length > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                  {cart.length}
                </span>
              )}
            </Button>
          </Link>
        </div>
      </header>
      <main className="mx-auto max-w-4xl p-4">
        <div className="grid gap-4">
          {pizzas.map((pizza) => (
            <PizzaCard key={pizza.id} pizza={pizza} onAddToCart={handleAddToCart} />
          ))}
        </div>
      </main>
    </div>
  )
}

