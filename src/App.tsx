import { useState } from "react";
import "./App.css";
import Tag from "./components/Tag";
import useApi from "./hooks/useApi";

function App() {
  const { getSupplier } = useApi();

  const [supplierData, setSupplierData] = useState(getSupplier());
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    setSupplierData({
      ...supplierData,
      "tags-general": [
        ...supplierData["tags-general"],
        { id: 5, name: inputValue, type: "supplierBranch-general" },
      ],
    });
    setInputValue("");
  };

  return (
    <div className="border m-12 h-full rounded-xl border-gray-600 p-12 gap-y-4 flex flex-col">
      <h1 className="text-2xl">
        Hey there, welcome to the live coding challenge!
      </h1>
      <p>
        1. First of all, please output the stringified Supplier data coming from
        the useApi hook here:
      </p>
      <pre className="p-4 rounded-xl bg-gray-200 text-xs">
        {JSON.stringify(supplierData, null, 2)}
      </pre>
      <p className="">
        2. Please display all items under "tags-general" as a Tag. You can use
        the Tag component where the text in the component should be the name
        attribute.
      </p>
      <div className="flex gap-2">
        {supplierData["tags-general"].map((s) => (
          <Tag>{s.name}</Tag>
        ))}
      </div>
      <p className="">
        3. Please add an input on the right of the last Tag and allow the user
        to add a new tag by entering a value and then submitting it using{" "}
        <kbd>Enter</kbd>
      </p>
      <div className="flex gap-2">
        {supplierData["tags-general"].map((s) => (
          <Tag>{s.name}</Tag>
        ))}
        <input
          type={"text"}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit();
            }
          }}
          className="border border-gray-600 rounded-md px-2"
        ></input>
      </div>
    </div>
  );
}

export default App;
