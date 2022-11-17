import React from "react";
interface ITag {
  children: string;
}
const Tag: React.FC<ITag> = ({ children }) => {
  return (
    <div className="bg-indigo-300 rounded-md px-2 py-1 text-xs">{children}</div>
  );
};

export default Tag;
