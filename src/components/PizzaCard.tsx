import { Button } from "@/components/ui/button"
import { Pizza } from "@/interfaces/pizza"
import { Card, CardContent } from "./ui/card"

interface PizzaCardProps {
  pizza: Pizza
  onAddToCart: (pizza: Pizza) => void
}

export function PizzaCard({ pizza, onAddToCart }: PizzaCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="flex gap-4 p-4">
          <img
            alt={pizza.name}
            className="rounded-md object-cover"
            height={100}
            src={pizza.image}
            width={100}
          />
          <div className="flex flex-1 flex-col justify-between">
            <div>
              <h3 className="font-semibold">{pizza.name}</h3>
              <p className="text-sm text-muted-foreground">{pizza.description}</p>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-semibold">£{pizza.price.toFixed(2)}</span>
              <Button
                className="bg-yellow-400 text-black hover:bg-yellow-500"
                onClick={() => onAddToCart(pizza)}
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

