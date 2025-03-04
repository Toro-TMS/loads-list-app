import Load from "./Load"
import "./App.css"
import createLoad from "./createLoad"

const exampleLoad = createLoad();

function App() {
  return (
    <div className="p-10">
      <h1 className="text-2xl">Loads</h1>
      <div className="space-y-4 mt-4">
        <Load load={exampleLoad} />
      </div>
    </div>
  )
}

export default App
