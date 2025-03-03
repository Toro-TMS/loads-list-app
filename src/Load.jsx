function Load({ load }) {
  return (
    <div className="border border-gray-200 rounded-md p-4 flex justify-between items-center">
      <div className="flex flex-col items-start">
        <h3 className="text-lg font-bold">{load.number}</h3>
        <div className="text-sm text-gray-500">{load.customer.name}</div>
      </div>
      <div className="flex flex-col items-end">
        <div className="font-semibold">{load.driver.name}</div>
        <div className="text-sm text-gray-500">{load.truck.number}</div>
      </div>
    </div>
  );
}

export default Load;
