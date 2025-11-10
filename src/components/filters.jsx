import { Button } from "./button";

export const Filters = () => {
  return (
    <div>
      <h2 className="dark:text-Neutral-0 text-center text-[34px] font-bold mb-6 ">
        Extensions List
      </h2>

      <div className="flex place-content-between mb-6 ">
        <Button>All</Button>
        <Button>Active</Button>
        <Button>Inactive</Button>
      </div>
    </div>
  );
};
