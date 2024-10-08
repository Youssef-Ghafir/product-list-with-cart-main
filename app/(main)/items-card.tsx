import { useContext } from "react";
import { data, DataContext } from "./context-data";
import Image from "next/image";
export const ItemsCard = ({ name, price, quantity }: data) => {
  let { data, setdataCard } = useContext(DataContext);
  return (
    <div className="flex items-center justify-between py-4 border-b">
      <div>
        <h3 className="text-rose-900 text-sm font-semibold mb-3">{name}</h3>
        <div className="flex gap-3">
          <span className="text-red font-semibold text-sm">{quantity}x</span>
          <div className="flex gap-1">
            <span className="text-sm  text-rose-500">
              @ ${price.toFixed(2)}
            </span>
            <span className="text-sm font-semibold text-rose-500">
              $ {(price * quantity).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
      <span
        className="border rounded-full p-1 border-rose-400 hover:border-rose-900 cursor-pointer"
        onClick={() => setdataCard(data.filter((el) => el.name !== name))}
      >
        <Image
          src={"/images/icon-remove-item.svg"}
          alt="remove"
          width={10}
          height={10}
        />
      </span>
    </div>
  );
};
