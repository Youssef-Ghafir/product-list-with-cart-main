"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useContext, useState } from "react";
import { DataContext } from "./context-data";
import { cn } from "@/lib/utils";

type Props = {
  image: string;
  name: string;
  category: string;
  price: number;
};
export const DesertCard = ({ image, name, category, price }: Props) => {
  let { data, setdataCard } = useContext(DataContext);
  let [active, setActive] = useState(false);
  const HandleAddtoCart = () => {
    const checkIfExists = data.find((item) => item.name == name);
    if (checkIfExists) {
      checkIfExists.quantity = checkIfExists.quantity + 1;
      let newData = data.map((item) => {
        if (item.name === name) return checkIfExists;
        return item;
      });
      return setdataCard(newData);
    }
    return setdataCard([
      ...data,
      { name: name, price: price, quantity: 1, img: image },
    ]);
  };
  const decrementQuantity = () => {
    let findItem = data.find((el) => el.name === name);
    if (findItem?.quantity == 1) {
      setActive(false);
      return setdataCard(data.filter((item) => item.name !== name));
    }
    if (findItem?.quantity) findItem.quantity = findItem?.quantity - 1;
    return setdataCard(
      data.map((item) => {
        if (item.name == name) return findItem;
        return item;
      })
    );
  };
  return (
    <div>
      <div
        className="relative h-[250px]"
        onClick={() => {
          const isExists = data.find((item) => item.name == name);
          if (isExists) setActive(true);
        }}
      >
        <Image
          src={image}
          alt={name}
          priority
          fill
          className={cn(
            "rounded-lg w-auto h-auto object-cover",
            active && "border-4 border-red"
          )}
        />
        {!active ? (
          <Button
            variant={"outline"}
            onClick={HandleAddtoCart}
            onMouseEnter={() => {
              const isExists = data.find((item) => item.name == name);
              if (isExists) setActive(true);
            }}
            className="flex justify-center gap-1 absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-full"
          >
            <Image
              src={"/images/icon-add-to-cart.svg"}
              width={20}
              height={20}
              className="w-[20px] h-[20px]"
              alt="add to cart image"
            />
            Add to Cart
          </Button>
        ) : (
          <Button
            asChild
            onMouseLeave={() => setActive(false)}
            className="flex justify-center gap-1 absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-full"
          >
            <div className="flex items-center justify-between ">
              <span
                className="flex items-center justify-center w-[20px] h-[20px] border rounded-full cursor-pointer"
                onClick={HandleAddtoCart}
              >
                <Image
                  src={"/images/icon-increment-quantity.svg"}
                  width={10}
                  height={10}
                  alt="increment"
                />
              </span>
              <span>{data.find((item) => item.name == name)?.quantity}</span>
              <span
                className="flex items-center justify-center w-[20px] h-[20px] border rounded-full cursor-pointer"
                onClick={decrementQuantity}
              >
                <Image
                  src={"/images/icon-decrement-quantity.svg"}
                  width={10}
                  height={10}
                  alt="increment"
                />
              </span>
            </div>
          </Button>
        )}
      </div>
      <div className="mt-5">
        <span className="text-sm text-rose-400 font-medium mb-4">
          {category}
        </span>
        <h3 className="text-rose-950 font-semibold text-base">{name}</h3>
        <p className="font-semibold text-red">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};
