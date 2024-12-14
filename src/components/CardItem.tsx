import { Button } from "@/components/ui/button"
import { CartItem } from "@/interfaces/cartItem"
import { Minus, Plus, Trash2 } from 'lucide-react'

interface CartItemProps {
  item: CartItem;
  onUpdateQuantity: (id: string, delta: number) => void
  onRemove: (id: string) => void
}

export function CartItemRow({ item, onUpdateQuantity, onRemove }: CartItemProps) {
  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex-1">
        <h3 className="font-medium">{item.item.name}</h3>
        <p className="text-sm text-muted-foreground">£{item.item.price.toFixed(2)}</p>
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8"
          onClick={() => onUpdateQuantity(item.item.id, -1)}
          disabled={item.quantity <= 1}
        >
          <Minus className="h-4 w-4" />
        </Button>
        <span className="w-8 text-center">{item.quantity}</span>
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8"
          onClick={() => onUpdateQuantity(item.item.id, 1)}
        >
          <Plus className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-red-500 hover:text-red-600"
          onClick={() => onRemove(item.item.id)}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

