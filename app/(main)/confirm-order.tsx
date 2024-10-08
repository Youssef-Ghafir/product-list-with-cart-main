import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import { useContext } from "react";
import { DataContext } from "./context-data";
import { ConfirmOrderItem } from "./confirm-item-order";
import { DialogClose } from "@radix-ui/react-dialog";
export const ConfirmOrder = () => {
  const { data, setdataCard } = useContext(DataContext);
  const getTotal = () => {
    return data.reduce(
      (current, accumlate) => accumlate.price * accumlate.quantity + current,
      0
    );
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full mt-4 rounded-full" size={"lg"}>
          Confirm Order
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[550px] overflow-y-auto">
        <div className="">
          <Image
            src="/images/icon-order-confirmed.svg"
            width={40}
            height={40}
            alt="confirm"
          />
          <h1 className="text-2xl font-bold mt-7 mb-2">Order Confirmed</h1>
          <p className="text-rose-400 text-sm mb-8">
            We hoop you enjoy the food
          </p>
          <div className="bg-rose-100 p-4 rounded-lg">
            {data.map((item, index) => (
              <ConfirmOrderItem
                key={index}
                image={item.img as string}
                name={item.name}
                price={item.price}
                qunatity={item.quantity}
              />
            ))}
            <div className="flex justify-between items-center mt-7 mb-5">
              <p className="text-sm">Order Total</p>
              <h3 className="text-2xl font-bold">
                ${`${getTotal().toFixed(2)}`}
              </h3>
            </div>
          </div>
          <DialogClose asChild>
            <Button
              className="w-full mt-6 rounded-full"
              size={"lg"}
              onClick={() => setdataCard([])}
            >
              Start new Order
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};
