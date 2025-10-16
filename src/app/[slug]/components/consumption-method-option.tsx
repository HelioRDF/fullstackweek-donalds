import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { consumptionMethod } from "@prisma/client";

interface ConsuptionMethodOptionProps {
  slug: string;
  imageUrl: string;
  imageAlt: string;
  buttonText: string;
  option: consumptionMethod;
}

const ConsumptionMethodOption = ({
  slug,
  imageUrl,
  imageAlt,
  buttonText,
  option,
}: ConsuptionMethodOptionProps) => {
  return (
    <Card>
      <CardContent className="flex flex-col items-center gap-8 py-8">
        <div className="relative h-[80px] w-[80px]">
          <Image
            src={imageUrl}
            fill
            alt={imageAlt}
            className="object-contain"
          ></Image>
        </div>
        <Button variant="secondary" className="rounded-full" asChild>
          <Link href={`/${slug}/menu?consumptionMethod=${option}`}>
            {buttonText}
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};
export default ConsumptionMethodOption;
