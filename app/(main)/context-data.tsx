"use client";
export type data = {
  name: string;
  price: number;
  quantity: number;
  img?: string;
};
import { createContext, useEffect, useRef, useState } from "react";
export const DataContext = createContext<{ data: data[]; setdataCard?: any }>({
  data: [],
});
export const ProviderData = ({ children }: { children: React.ReactNode }) => {
  let [dataCard, setdataCard] = useState<data[]>([]);
  const mounted = useRef<boolean>(false);
  useEffect(() => {
    if (!mounted.current) {
      const data = window.localStorage.getItem("data");
      if (data) setdataCard(JSON.parse(data));
      mounted.current = true;
    } else {
      window.localStorage.setItem("data", JSON.stringify(dataCard));
    }
  }, [dataCard]);
  return (
    <DataContext.Provider value={{ data: dataCard, setdataCard }}>
      {children}
    </DataContext.Provider>
  );
};
