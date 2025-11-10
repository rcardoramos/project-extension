import { Button } from "./button";

export const Filters = () => {
  return (
    <div className="mb-6 md:flex md:items-center md:justify-between">
      <h2 className="dark:text-Neutral-0 text-center text-[34px] font-bold mb-6  ">
        Extensions List
      </h2>

      <div className="flex justify-between mb-6 md:gap-4">
        <Button>All</Button>
        <Button>Active</Button>
        <Button>Inactive</Button>
      </div>
    </div>
  );
};
