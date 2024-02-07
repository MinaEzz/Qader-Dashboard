import { RECENT_ORDER_DATA } from "../../data/data";

const RecentOrders = () => {
  return (
    <div className="flex flex-col flex-1 p-4 bg-white rounded-sm border border-neutral-200 overflow-auto">
      <strong className="text-lg font-medium text-neutral-500 capitalize">
        recent orders
      </strong>

      <table className="w-full mt-4 text-center text-sm " cellPadding={8}>
        <thead className="bg-neutral-100">
          <tr className="capitalize ">
            <th>product id</th>
            <th>customer id</th>
            <th>customer name</th>
            <th>date</th>
            <th>total</th>
            <th>shipment address</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          {RECENT_ORDER_DATA.map((item) => {
            return (
              <tr className="border-b " key={item.id}>
                <td>{item.product_id}</td>
                <td>{item.customer_id}</td>
                <td>{item.customer_name}</td>
                <td>{new Date(item.order_date).toLocaleString()}</td>
                <td>{item.order_total}</td>
                <td>{item.shipment_address}</td>
                <td>{item.current_order_status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;
