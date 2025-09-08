import { roboto } from "../../layout";

export default function Techs({ techs }) {
  return (
    <li
      className={`border border-neutral-600 px-3 py-1 text-sm z-10 rounded-3xl w-max hover:bg-white hover:text-black hover:border-white transition-colors cursor-pointer font-extralight bg-black  ${roboto.className} `}
    >
      {techs}
    </li>
  );
}
