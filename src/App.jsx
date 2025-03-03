import Load from "./Load"

function App() {
  const loads = [];

  return (
    <div className="p-10">
      <h1 className="text-2xl">Loads</h1>
      <div className="space-y-4 mt-4">
        {loads.map((load) => (
          <Load key={load.id} load={load} />
        ))}
      </div>
    </div>
  )
}

export default App
