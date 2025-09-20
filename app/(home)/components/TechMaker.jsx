import { inter, roboto, ubuntu, ubuntuMono } from "@/app/layout";

export default function TechMaker({ category, items }) {
  return (
    <>
      <div
        key={category}
        className="bg-transparent border border-neutral-800 rounded-sm p-2 cursor-pointer my-2 break-inside-avoid relative "
      >
        {/* Category Title */}
        <h3
          className={`text-md  dark:text-neutral-300 text-neutral-800 mb-3 capitalize font-bold ${ubuntu.className}`}
        >
          {category
            .replace(/([A-Z])/g, " $1")
            .replace(/^./, (str) => str.toUpperCase())}
        </h3>

        {/* Nested List */}
        <ul className="ml-2 list-disc list-inside space-y-1 dark:text-neutral-400 text-sm ">
          {items.map((item) => (
            <li
              key={item}
              className={`dark:hover:text-white hover:font-bold transition-colors ${ubuntuMono.className}`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
