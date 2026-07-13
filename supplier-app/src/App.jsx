import DisplayMainTable from './DisplayMainTable'

function App() {
  const openModel = () => {
    console.log("Supplier list fetching");
  }

  return (
    <>
      <section id="header">
        <div>
          <h1>Landing Page</h1>
        </div>
        <button type="button" className="counter" onClick={openModel}>
          Add Payment
        </button>
      </section>
      <section id="mainTable">
        <DisplayMainTable />
      </section>
    </>
  );
}

export default App
