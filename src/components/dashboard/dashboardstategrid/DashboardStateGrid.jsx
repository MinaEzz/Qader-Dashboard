import {
  IoBagHandle,
  IoCart,
  IoPeopleSharp,
  IoPieChartSharp,
} from "react-icons/io5";

const DashboardStateGrid = () => {
  return (
    <section className="w-full flex space-x-4">
      <StateGridCard>
        <div className="p-3 rounded-tr-3xl rounded-br-3xl bg-[#0d6efd] ">
          <IoBagHandle fontSize={26} color="white" />
        </div>
        {/* ./element icon */}
        <div className="flex flex-col px-2">
          <span className="text-sm capitalize text-neutral-500 font-medium">
            total sales
          </span>
          <strong className="text-base font-semibold text-black">
            $52400.60
          </strong>
        </div>
        {/* ./element description */}
      </StateGridCard>
      <StateGridCard>
        <div className="p-3 rounded-tr-3xl rounded-br-3xl bg-[#0d6efd] ">
          <IoPieChartSharp fontSize={26} color="white" />
        </div>
        {/* ./element icon */}
        <div className="flex flex-col px-2">
          <span className="text-sm capitalize text-neutral-500 font-medium">
            total expenses
          </span>
          <strong className="text-base font-semibold text-black">
            $5200.60
          </strong>
        </div>
        {/* ./element description */}
      </StateGridCard>
      <StateGridCard>
        <div className="p-3 rounded-tr-3xl rounded-br-3xl bg-[#0d6efd] ">
          <IoPeopleSharp fontSize={26} color="white" />
        </div>
        {/* ./element icon */}
        <div className="flex flex-col px-2">
          <span className="text-sm capitalize text-neutral-500 font-medium">
            total customers
          </span>
          <strong className="text-base font-semibold text-black">200</strong>
        </div>
        {/* ./element description */}
      </StateGridCard>
      <StateGridCard>
        <div className="p-3 rounded-tr-3xl rounded-br-3xl bg-[#0d6efd] ">
          <IoCart fontSize={26} color="white" />
        </div>
        {/* ./element icon */}
        <div className="flex flex-col px-2">
          <span className="text-sm capitalize text-neutral-500 font-medium">
            total orders
          </span>
          <strong className="text-base font-semibold text-black">305</strong>
        </div>
        {/* ./element description */}
      </StateGridCard>
    </section>
  );
};

export default DashboardStateGrid;

const StateGridCard = ({ children }) => {
  return (
    <div className="flex flex-1 bg-white p-3 pl-0 items-center rounded-sm border border-neutral-200">
      {children}
    </div>
  );
};
