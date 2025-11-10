import { Card } from "./card";
import data from "../data.json";

export const CardsContainer = () => {
  return (
    <div className="grid md:grid-cols-2 gap-3 xl:grid-cols-3">
      {data.map((extension) => (
        <Card key={extension.name} {...extension} />
      ))}
    </div>
  );
};
