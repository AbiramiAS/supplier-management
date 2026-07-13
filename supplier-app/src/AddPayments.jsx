import {useState} from 'react';
import supplierList from './SupplierList.json';
import TableData from "./TableData.json";

function AddPayments({ addItem }) {
  const [supplierName, setSupplierName] = useState("Select Supplier");
  const [mainBalance, setMainBalance] = useState(0);
  const handleVendorSelection = (event) => {
    setSupplierName(event.target.value);
    const selectedSupplier = supplierList.filter(
      (list) => list.supplierName == event.target.value
    );
    selectedSupplier && setMainBalance(selectedSupplier[0].main_balance);
  };
  const handleSaveChanges = () => {
    const selectedTableData = {
      sno: TableData.length + 1,
      admin: supplierName,
      payments: mainBalance,
      paymentMode: "Cash",
    };

    addItem(selectedTableData);
  };
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#paymentModal"
      >
        Add Payment
      </button>

      <div
        className="modal fade"
        id="paymentModal"
        tabIndex="-1"
        aria-labelledby="paymentModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h6 className="modal-title" id="paymentModalLabel">
                Add Payment
              </h6>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div>
                <label>Vendor</label>
              </div>
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="supplierDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {supplierName}
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="supplierDropdown"
                >
                  {supplierList &&
                    supplierList.map((entry) => (
                      <li key={entry.supplier_id}>
                        <button
                          className="dropdown-item"
                          type="button"
                          value={entry.supplierName}
                          onClick={handleVendorSelection}
                        >
                          {entry.supplierName}
                        </button>
                      </li>
                    ))}
                </ul>
              </div>
              {supplierName && (
                <div className="alert alert-info" role="alert">
                  Main Balance is : {mainBalance}
                </div>
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={handleSaveChanges}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddPayments