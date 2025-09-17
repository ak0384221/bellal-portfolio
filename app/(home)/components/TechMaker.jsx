export default function TechMaker({ category, items }) {
  return (
    <>
      <div
        key={category}
        className="bg-transparent border border-neutral-800 rounded-sm p-2 cursor-pointer my-2 break-inside-avoid relative "
      >
        {/* Category Title */}
        <h3 className="text-lg  text-neutral-300 mb-3 capitalize font-bold">
          {category
            .replace(/([A-Z])/g, " $1")
            .replace(/^./, (str) => str.toUpperCase())}
        </h3>

        {/* Nested List */}
        <ul className="ml-2 list-disc list-inside space-y-1 text-neutral-400 text-sm ">
          {items.map((item) => (
            <li key={item} className="hover:text-white transition-colors ">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
