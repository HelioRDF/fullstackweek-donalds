import { useContext } from "react";
import CardProductItem from "./cart-product-item";

import { ScrollArea } from "@/components/ui/scroll-area";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import { CartContext } from "../../context/cart";

const CartSheet = () => {
  const { isOpen, toggleCart, products } = useContext(CartContext);
  return (
    <Sheet open={isOpen} onOpenChange={toggleCart}>
      <SheetContent className="w-[80%]">
        <SheetHeader>
          <SheetTitle className="text-left mb-5">Sacola</SheetTitle>
        </SheetHeader>
        <ScrollArea className="h-full">
          <div className="py-6">
            xxx
            {products.map((product) => (
              <h1 key={product.id}>
                <CardProductItem key={product.id} product={product} />
              </h1>
            ))}
            xxx
          </div>
            <br></br>
            <br></br>

        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
