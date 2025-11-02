import { formatCurrency } from "@/helpers/format-currency";
import { CartContext, CartProduct } from "../../context/cart";
import Image from "next/image";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsRightIcon,
  Trash2Icon,
  TrashIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useContext } from "react";

interface CartItemProps {
  product: CartProduct;
}

const CartProductItem = ({ product }: CartItemProps) => {
    const { descreaseProductQuantity } = useContext(CartContext);  
  return (
    <div className="flex items-center justify-between">
      <div className="flex  items-center gap-2">
        <div className="relative h-20 w-20 bg-gray-100">
          <Image src={product.imageUrl} alt={product.name} fill />
        </div>
        <div className="space-y-2 flex-1 ml-10">
          <p className="text-xs ">{product.name}</p>
          <p className="text-sm font-semibold">
            {formatCurrency(product.price)}
          </p>
          <div className="flex items-center gap-1"></div>
          <div className="flex item-center gap-1 text-center">
            <Button className="w-7 h-7" variant="outline" onClick={() => descreaseProductQuantity(product.id)}  >
              <ChevronLeftIcon />
            </Button>
            <p className="w-7 text-xs"> {product.quantity}</p>
            <Button className="w-7 h-7" variant="destructive">
              <ChevronRightIcon />
            </Button>
          </div>
        </div>
      </div>
      <div>
        <Button className="h-7 w-7" variant="outline" >
          <TrashIcon />
        </Button>
      </div>
    </div>
  );
};

export default CartProductItem;
