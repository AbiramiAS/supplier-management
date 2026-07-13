import { useState } from "react";
import DisplayMainTable from "./DisplayMainTable";
import AddPayments from "./AddPayments";
import TableData from "./TableData.json";

function LandingPage() {
          const [tableData, setTableData] = useState(TableData);
          const handleTableData = (newData) => {
            setTableData((data) => [...data, { ...newData }]);
            TableData.push(newData);
          }
          return (
            <div className="display-table">
              <AddPayments addItem={handleTableData} />
              <DisplayMainTable dataList={tableData} />
            </div>
          );
}
export default LandingPage