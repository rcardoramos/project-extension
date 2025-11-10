import { Button } from "./button";
import "rsuite/Toggle/styles/index.css";
import { Toggle } from "rsuite";

export const Card = ({ logo, name, description, isActive }) => {
  return (
    <div className="bg-Neutral-0 rounded-lg p-4">
      <div className="flex gap-4 items-start mb-4">
        <img src={logo} alt="Logotipo" />
        <div>
          <h2 className="text-[1.25rem] font-bold mb-2">{name}</h2>
          <p className="text-Neutral-600 text-[.9375rem]">{description}</p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <Button textSmall>Remove</Button>
        <Toggle checked={isActive} color="red" />
      </div>
    </div>
  );
};
