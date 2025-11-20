import { Button } from "./button";
import { Toggle } from "rsuite";
import "rsuite/Toggle/styles/index.css";

export const Card = ({
  logo,
  name,
  description,
  isActive,
  setExtensions,
  extensions,
}) => {
  const onToggle = () => {
    const currentExtension = extensions.filter(
      (extension) => extension.name === name
    )[0];
    console.log(currentExtension);

    const updateExtension = {
      ...currentExtension,
      isActive: !currentExtension.isActive,
    };
  };

  return (
    <div className="bg-Neutral-0 rounded-lg p-4 shadow-sm dark:bg-Neutral-800">
      <div className="flex gap-4 items-start mb-10 ">
        <img src={logo} alt="Logotipo" />
        <div>
          <h2 className="text-[1.25rem] font-bold mb-2 dark:text-Neutral-0">
            {name}
          </h2>
          <p className="text-Neutral-600 text-[.9375rem] dark:text-Neutral-300">
            {description}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <Button textSmall>Remove</Button>
        <Toggle onClick={onToggle} checked={isActive} color="red" />
      </div>
    </div>
  );
};
