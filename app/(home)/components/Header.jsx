import { inter, saira } from "@/app/layout";

export default function Header() {
  return (
    <header className=" flex h-[15vh] items-center  gap-4 ">
      <div className="picture  size-18 border-2  rounded-full relative overflow-hidden">
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
        <p className={`${saira.className} font-extralight text-sm`}>
          Frontend developer | 15 months of experience <br />
          React | Next | Redux
        </p>
      </div>
    </header>
  );
}
