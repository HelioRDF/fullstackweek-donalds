import { useContext, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { formatCurrency } from "@/helpers/format-currency";

import { CartContext } from "../../context/cart";
import CardProductItem from "./cart-product-item";
import FinishOrderDialog from "./finish-order-dialog";

const CartSheet = () => {
  const [FinishOrderDialogIsOpen, setFinishOrderDialogIsOpen] = useState(false);
  const { isOpen, toggleCart, products, total } = useContext(CartContext);
  return (
    <Sheet open={isOpen} onOpenChange={toggleCart}>
      <SheetContent className="w-[80%]">
        <SheetHeader>
          <SheetTitle className="text-left mb-5">Sacola</SheetTitle>
        </SheetHeader>

        <ScrollArea className="h-85%">
          <div className="flex flex-cool h-full py-5">
            <div className="flex-auto">
              {products.map((product) => (
                <h1 key={product.id}>
                  <CardProductItem key={product.id} product={product} />
                </h1>
              ))}
            </div>
            <br></br>
          </div>
        </ScrollArea>
        <div className="absolute bottom-4 left-4 right-4">
          <Card>
            <CardContent>
              <div className="flex justify-between ">
                <p className="text-sm text-muted-foreground">Total</p>
                <p className="font-semibold text-sm">{formatCurrency(total)}</p>
              </div>
            </CardContent>
          </Card>
          <Button
            className="w-full"
            onClick={() => setFinishOrderDialogIsOpen(true)}
          >
            Concluir Pedido!
          </Button>
          <FinishOrderDialog
            open={FinishOrderDialogIsOpen}
            onOpenChange={setFinishOrderDialogIsOpen}
          ></FinishOrderDialog>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
