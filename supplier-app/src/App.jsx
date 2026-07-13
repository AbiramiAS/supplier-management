import DisplayMainTable from './DisplayMainTable'
import AddPayments from "./AddPayments"

function App() {
  return (
    <>
      <section id="header">
        <div>
          <h1>Landing Page</h1>
          <AddPayments />
        </div>
      </section>
      <section id="mainTable">
        <DisplayMainTable />
      </section>
    </>
  );
}

export default App
