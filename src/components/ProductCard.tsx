import { Button } from "@/components/ui/button"
import {  Product } from "@/interfaces/product"
import { Card, CardContent } from "./ui/card"

interface ProductCardProps {
  product: Product
  onAddToCart: (product: Product) => void
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="flex gap-4 p-4">
          <img
            alt={product.name}
            className="rounded-md object-cover"
            height={100}
            src={product.image}
            width={100}
          />
          <div className="flex flex-1 flex-col justify-between">
            <div>
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-sm text-muted-foreground">{product.description}</p>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-semibold">£{product.price.toFixed(2)}</span>
              <Button
                className="bg-yellow-400 text-black hover:bg-yellow-500"
                onClick={() => onAddToCart(product)}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

