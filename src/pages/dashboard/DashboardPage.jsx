import DashboardStateGrid from "../../components/dashboard/dashboardstategrid/DashboardStateGrid";
import TransactionChart from "../../components/dashboard/transactionchart/TransactionChart";
import BuyerProfileChart from "../../components/dashboard/buyerprofilechart/BuyerProfileChart";

const DashboardPage = () => {
  return (
    <section className="flex flex-col gap-4">
      <DashboardStateGrid />
      <ChartsWrapper>
        <TransactionChart />
        <BuyerProfileChart />
      </ChartsWrapper>

      <ChartsWrapper>
        <div className="flex flex-col flex-1 p-4 bg-white rounded-sm border border-neutral-200">
          left part
        </div>
        <div className="w-[20rem]">right part</div>
      </ChartsWrapper>
    </section>
  );
};

export default DashboardPage;

const ChartsWrapper = ({ children }) => {
  return <section className=" w-full h-[22rem] flex gap-4">{children}</section>;
};
