import DashboardStateGrid from "../../components/dashboard/dashboardstategrid/DashboardStateGrid";
import TransactionChart from "../../components/dashboard/transactionchart/TransactionChart";
import BuyerProfileChart from "../../components/dashboard/buyerprofilechart/BuyerProfileChart";
import DashboardTable from "../../components/shared/table/Table";

const DashboardPage = () => {
  return (
    <section className="flex flex-col gap-4">
      <DashboardStateGrid />
      <ChartsWrapper>
        <TransactionChart />
        <BuyerProfileChart />
      </ChartsWrapper>

      <ChartsWrapper>
        <DashboardTable />

        <div className="w-[20rem]">right part</div>
      </ChartsWrapper>
    </section>
  );
};

export default DashboardPage;

const ChartsWrapper = ({ children }) => {
  return <section className=" w-full h-[22rem] flex gap-4">{children}</section>;
};
