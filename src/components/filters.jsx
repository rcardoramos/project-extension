import { Button } from "./button";

export const Filters = ({ setFilter }) => {
  const handleClick = (event) => {
    console.log(event.target.textContent);
    setFilter(event.target.textContent);
  };

  return (
    <div className="mb-6 md:flex md:items-center md:justify-between">
      <h2 className="dark:text-Neutral-0 text-center text-[34px] font-bold mb-6  ">
        Extensions List
      </h2>

      <div className="flex justify-between mb-6 md:gap-4">
        <Button handleClick={handleClick}>All</Button>
        <Button handleClick={handleClick}>Active</Button>
        <Button handleClick={handleClick}>Inactive</Button>
      </div>
    </div>
  );
};
