import { inter, saira } from "@/app/layout";

export default function Header() {
  return (
    <header className=" flex  p-2 items-center  gap-2 ">
      <div className="picture  size-18 border-2   rounded-full relative overflow-hidden">
        <img
          src="./ayaan.png" // path inside public folder
          alt="Ayaan"
          className="absolute w-full h-full object-cover"
        />
      </div>
      <div className="details  w-4/5 p-1">
        <h1 className={`${inter.className} font-extrabold text-3xl`}>
          MD Bellal hossain
        </h1>
        {/* Badge */}
        <div className="my-2 inline-flex items-center gap-2 rounded-full bg-cyan-400/5 px-4 py-2 text-[11px] text-cyan-300">
          <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
          Data Analyst • ETL Engineer • Developer
        </div>
      </div>
    </header>
  );
}
