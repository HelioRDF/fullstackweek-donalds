"use client";

import { Prisma } from "@prisma/client";
import { ChefHatIcon, ChevronsLeftIcon, ChevronsRightIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/helpers/format-currency";
import { notFound } from "next/navigation";

interface ProductDetailsProps {
  product: Prisma.ProductGetPayLoad<{
    include: {
      restaurant: {
        select: {
          name: true;
          avatarImageUrl: true;
        };
      };
    };
  }>;
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const [quantity, setQuantity] = useState<number>(1);
  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };
  console.log(product);

  return (
    <div className="relative z-50 rounded-t-3xl py-5 p-5 flex-auto  flex flex-col">
      <div className="flex-auto">
        <div className="flex items-center gap-1.5  ">
          <Image
            src={product.restaurant.avatarImageUrl}
            alt={product.restaurant.name}
            width={16}
            height={16}
            className="rounded-full"
          />
          <p className="text-xs text-muted-forground ">
            {product.restaurant.name}
          </p>
        </div>
        <h2 className="mt-1 text-xl font-semibold">{product.name}</h2>

        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">
            {formatCurrency(product.price)}
          </h3>
          <div className="flex items-center gap-3 text-cent">
            <Button
              variant="outline"
              className="h-8 w-8 rounded-xl"
              onClick={handleDecreaseQuantity}
            >
              <ChevronsLeftIcon />
            </Button>
            <p className="w-4">{quantity}</p>
            <Button
              variant="destructive"
              className="h-8 w-8 rounded-xl"
              onClick={handleIncreaseQuantity}
            >
              <ChevronsRightIcon />
            </Button>
          </div>
        </div>
        <div className="mt-6 space-y-3">
          <h4 className="font-semibold">Sobre</h4>
          <p className="text-sm text-mute"> {product.description}</p>
        </div>

        <div className="mt-6 space-y-3">
          <div className="5 flex items-center gap-1">
            <ChefHatIcon size={18}></ChefHatIcon>
            <h4 className="font-semibold">Ingredientes</h4>
          </div>
          <p className="text-sm text-mute"> {product.ingredients}</p>
        </div>
      </div>
      <Button className="mt-9 w-full ">Adicionar à Sacola</Button>
    </div>
  );
};

export default ProductDetails;
