import { STATES } from "../../constants/States";
import TransactionChart from "../../components/dashboard/TransactionChart";
import BuyerProfileChart from "../../components/dashboard/BuyerProfileChart";
import StateCard from "../../components/dashboard/StateCard";

const DashboardPage = () => {
  return (
    <section className="flex flex-col gap-4">
      <section className="w-full flex space-x-4">
        {STATES.map((state) => {
          return <StateCard key={state.title} {...state} />;
        })}
      </section>
      {/* ./ states */}

      <section className="w-full min-h-[22rem] flex gap-4">
        <TransactionChart />
        <BuyerProfileChart />
      </section>
      {/* ./ transactions and buyer profile */}

    </section>
  );
};

export default DashboardPage;
