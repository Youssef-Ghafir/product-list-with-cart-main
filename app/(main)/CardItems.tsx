"use client";
import { useContext } from "react";
import { DataContext } from "./context-data";
import Image from "next/image";
import { ItemsCard } from "./items-card";
import { ConfirmOrder } from "./confirm-order";

export const CardItems = () => {
  let { data } = useContext(DataContext);
  const getTotal = () => {
    return data.reduce(
      (current, accumlate) => accumlate.price * accumlate.quantity + current,
      0
    );
  };
  return (
    <div className="bg-white h-fit rounded-lg px-4 py-7 sticky top-0">
      <h1 className="text-xl text-red font-bold">
        Your Cart{" "}
        {`(${data.reduce(
          (current, accumlate) => accumlate.quantity + current,
          0
        )})`}
      </h1>
      {data.length == 0 && (
        <div className="mt-6 flex justify-center flex-col items-center">
          <Image
            src={"/images/illustration-empty-cart.svg"}
            width={100}
            alt="Empty Cart"
            height={100}
          />
          <p className="text-rose-400 text-sm">
            Your added items will appear here
          </p>
        </div>
      )}
      {data.length > 0 && (
        <>
          {data.map((item, i) => (
            <ItemsCard
              key={i}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
            />
          ))}
          <div className="flex justify-between items-center mt-4 mb-5">
            <p className="text-sm">Order Total</p>
            <h3 className="text-2xl font-bold">
              ${`${getTotal().toFixed(2)}`}
            </h3>
          </div>
          <div className="text-center flex items-center justify-center gap-1 bg-rose-100 py-3 rounded-lg">
            <Image
              src="/images/icon-carbon-neutral.svg"
              width={15}
              height={15}
              alt="Carbon"
            />
            <p className="text-sm">
              This is a <b>carbon-neutral</b> delivrey
            </p>
          </div>
          <ConfirmOrder />
        </>
      )}
    </div>
  );
};
