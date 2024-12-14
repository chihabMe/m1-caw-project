import { ShoppingCart } from 'lucide-react'
import { SearchBar } from "../../components/Searchbar"
import { Link } from "react-router"
import { Button } from "@/components/ui/button"
import {  products } from "@/data/products"
import {  ProductCard } from "@/components/ProductCard"
import { useMenu } from "@/hooks/useMenu"
import { Product } from '@/interfaces/product'

export default function MenuPage() {
  const {addItem,items} = useMenu()


  const handleAddToCart = (item: Product) => {
    addItem({item,quantity:1})

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
              {items.length > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                  {items.length}
                </span>
              )}
            </Button>
          </Link>
        </div>
      </header>
      <main className="mx-auto max-w-4xl p-4">
        <div className="grid gap-4">
          {products.map(item=>(
            <ProductCard product={item} onAddToCart={handleAddToCart} />
          ))}
        </div>
      </main>
    </div>
  )
}

