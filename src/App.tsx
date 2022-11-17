import "./App.css";

function App() {
  return (
    <div className="border m-12 h-full rounded-xl border-gray-600 p-12 gap-y-4 flex flex-col">
      <h1 className="text-2xl">
        Hey there, welcome to the live coding challenge! 👋
      </h1>
      <p>
        1. First of all, please use the useApi hook to receive the JSON Data,
        assign it to a state variable and output the stringified Supplier data
        coming from the useApi hook here:
      </p>
      <pre className="p-4 rounded-xl bg-gray-200 text-xs">
        {/* Add the JSON Output here */}
      </pre>
      <p className="">
        2. Please display all items under "tags-general" as a Tag. You can use
        the Tag component where the text in the component should be the name
        attribute.
      </p>
      <div className="flex gap-2">{/* Add Tags here */}</div>
      <p className="">
        3. Please add an input on the right of the last Tag and allow the user
        to add a new tag by entering a value and then submitting it using{" "}
        <kbd>Enter</kbd>
      </p>
      <div className="flex gap-2">{/* Add Tags with input here */}</div>
      <p className="">
        4. Bonus question: How would you automatically display all tag
        categories using only loops and without manually writing down the tag
        categories.
      </p>
    </div>
  );
}

export default App;
