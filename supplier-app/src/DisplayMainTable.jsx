import DataTable from "react-data-table-component";
import TableData from "./TableData.json"

const columnValues = [
  { name: "S.No", selector: (row) => row.sno, sortable: true },
  { name: "Admin", selector: (row) => row.admin, sortable: true },
  { name: "Auditor", selector: (row) => row.auditor },
  { name: "Payment ID", selector: (row) => row.paymentID },
  { name: "Vendor", selector: (row) => row.vendor },
  { name: "Payments", selector: (row) => row.payments },
  { name: "Payment Mode", selector: (row) => row.paymentMode },
  { name: "Cost Type", selector: (row) => row.costType },
];

export default function DisplayMainTable() {
  return <DataTable columns={columnValues} data={TableData} />;
}
