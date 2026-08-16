import { ubuntu } from "@/app/layout";

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
        <h1
          className={`${ubuntu.className} font-extrabold text-3xl text-[#f7f0eb] tracking-[-0.05em]`}
        >
          Bellal Hossain
        </h1>
        {/* Badge */}
        <div className="my-2 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/5 px-4 py-2 text-[11px] text-orange-300 uppercase tracking-[0.12em]">
          <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
          Aspiring System Engineer • Linux Administrator
        </div>
      </div>
    </header>
  );
}
