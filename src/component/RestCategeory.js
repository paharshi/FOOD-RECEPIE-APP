import React from "react";
import ListItems from "./Listitems";



const RestCategeory = ({ data, showItems, setIndexItems }) => {
  // const [showItems,setShowItems] = useState(false)
  const handleClick = () => {
    setIndexItems();
    // setShowItems(!showItems)
    // console.log("clicked")
  };

  return (
    <div className="w-6/12 mx-auto my-4  bg-gray-50 shadow-lg p-4 ">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span>⬇️ </span>
      </div>

      {showItems && <ListItems items={data.itemCards} />}
    </div>
  );
};

export default RestCategeory;
