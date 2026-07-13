import DataTable from "react-data-table-component";

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

const dummyData = [
  {
    sno: 1,
    admin: "Admin1",
    auditor: "Auditor1",
    paymentID: 10001,
    payments: 13000
  },
  { sno: 2, admin: "Admin2", auditor: "Auditor2", paymentID: 10002, payments: 15000 },
];
export default function DisplayMainTable() {
  return <DataTable columns={columnValues} data={dummyData} />;
}
