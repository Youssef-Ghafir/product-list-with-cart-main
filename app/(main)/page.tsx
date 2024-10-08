import { CardItems } from "./CardItems";
import { ProviderData } from "./context-data";
import { data } from "./data";
import { DesertCard } from "./desert-card";

export default async function Home() {
  return (
    <ProviderData>
      <div className="container py-10 grid grid-cols-1 lg:grid-cols-[70%_27%] gap-y-4 md:justify-between">
        <div>
          <h1 className="text-rose-950 font-bold text-3xl mb-6">Desserts</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.map((desert, i) => (
              <DesertCard
                key={i}
                name={desert.name}
                category={desert.category}
                price={desert.price}
                image={desert.image.desktop}
              />
            ))}
          </div>
        </div>
        <CardItems />
      </div>
    </ProviderData>
  );
}
