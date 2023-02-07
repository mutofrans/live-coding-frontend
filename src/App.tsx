import "./App.css";
import useApi from "./hooks/useApi";
import { FormEvent, useEffect, useState } from "react";
import Tag from "./components/Tag";

function App() {
  const [supplier, setSupplier] = useState({ name: "", "tags-certificates": [{}], 
  "tags-general": [{ name: "", id: 0, type: "" }], "tags-portfolio": [{}] });
  const [tag, setTag] = useState('');
  const [tagArray, setTagArray] = useState<string[]>([]);
  const [error, setError] = useState("");
  const [tagCategories, setTagCategories] = useState<string[]>([]);
  const { getSupplier } = useApi();

  for (const [key] of Object.entries(getSupplier())) {  
    const found = tagCategories.find(i => i === key);
    if(!found){
      setTagCategories(prev => [...prev, key]);
    }
  }
  
  useEffect(() => {
    const supplierObj = getSupplier();
    setSupplier(supplierObj);
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const tagExists = tagArray.find(i => i === tag);

    if (tagExists) {
      setError(`${tag} is already declared!`)
    }

    if (tag && !tagExists) {
      setTagArray([...tagArray, tag]);
      setTag("");
      setError("");
    }
  }

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
        {JSON.stringify(supplier, null, 4)}
      </pre>
      <p className="">
        2. Please display all items under "tags-general" as a Tag. You can use
        the Tag component where the text in the component should be the name
        attribute.
      </p>
      <div className="flex gap-2">{supplier["tags-general"].map(i =>
        <Tag key={i.id} children={i.name}></Tag>)}
      </div>
      <p className="">
        3. Please add an input on the right of the last Tag and allow the user
        to add a new tag by entering a value and then submitting it using{" "}
        <kbd>Enter</kbd>
      </p>
      <div className="flex gap-2">
        {supplier["tags-general"].map(i =>
          <Tag key={i.id} children={i.name}></Tag>)
        }
        {tagArray.length > 0 && tagArray.map(i => <Tag key={`new-tag-${i}`}>{i}</Tag>)}
        {error && error}
        <form onSubmit={e => handleSubmit(e)}>
          <input
            name="inputForTags"
            placeholder="Type for new tags"
            value={tag}
            onChange={e => setTag(e.target.value)}>
          </input>
        </form>

      </div>
      <p className="">
        4. Bonus question: How would you automatically display all tag
        categories using only loops and without manually writing down the tag
        categories.
      </p>
      {tagCategories.length > 0 && tagCategories.map(tagCategory =>
        <div key={`id-${tagCategory}`}>{tagCategory}</div>)}
    </div>
  );
}

export default App;
