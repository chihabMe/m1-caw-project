
import { CartItemRow } from "@/components/CardItem"
import { SearchBar } from "@/components/Searchbar"
import { Button } from "@/components/ui/button"
import { CartItem } from "@/interfaces/cartItem"
import { useState } from "react"
import { Link } from "react-router"

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>([
    { id: "margherita", name: "Margherita", price: 12.99, quantity: 1 },
    { id: "mediterranean", name: "Mediterranean", price: 14.99, quantity: 1 },
  ])

  const handleUpdateQuantity = (id: string, delta: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    )
  }

  const handleRemove = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  const handleClearCart = () => {
    setItems([])
  }

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-10 bg-yellow-400 p-4 shadow-md">
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-4">
          <div className="flex-1">
            <SearchBar />
          </div>
          <Link to="/">
            <Button variant="outline">Menu</Button>
          </Link>
        </div>
      </header>
      <main className="mx-auto max-w-4xl p-4">
        <div className="rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-xl font-semibold">Your cart, £{total.toFixed(2)}</h2>
          <div className="divide-y">
            {items.map((item) => (
              <CartItemRow
                key={item.id}
                item={item}
                onUpdateQuantity={handleUpdateQuantity}
                onRemove={handleRemove}
              />
            ))}
          </div>
          <div className="mt-6 flex justify-between gap-4">
            <Button variant="outline" onClick={handleClearCart}>
              Clear Cart
            </Button>
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500">Order Pizzas</Button>
          </div>
        </div>
      </main>
    </div>
  )
}

