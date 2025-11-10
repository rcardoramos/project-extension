import { Card } from "./card";
import data from "../data.json";

export const CardsContainer = () => {
  return (
    <div className="flex flex-col gap-3">
      {data.map((extension) => (
        <Card key={extension.name} {...extension} />
      ))}
    </div>
  );
};
