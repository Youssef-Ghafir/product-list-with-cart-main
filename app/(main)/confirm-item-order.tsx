import Image from "next/image";
import React from "react";
type Props = {
  image: string;
  name: string;
  qunatity: number;
  price: number;
};
export const ConfirmOrderItem = ({ image, name, qunatity, price }: Props) => {
  return (
    <div className="flex justify-between items-center pb-5 border-b">
      <div className="flex gap-3">
        <Image
          src={image}
          alt="Preview Image Product"
          width={40}
          height={40}
          className="rounded-md object-cover"
        />
        <div className="text-sm">
          <h3 className="text-sm font-semibold mb-1">{name}</h3>
          <div className="flex gap-2">
            <span className="text-red font-semibold">{qunatity}x</span>
            <p className="text-rose-400">@$5.50</p>
          </div>
        </div>
      </div>
      <p className="font-semibold text-base">
        ${(price * qunatity).toFixed(2)}
      </p>
    </div>
  );
};
