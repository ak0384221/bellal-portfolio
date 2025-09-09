import Heading from "@/app/(home)/atomic-Component/heading";
import Link from "next/link";
import { ubuntuMono } from "@/app/layout";
import MySVG from "@/app/svg";
export default function Footer({ contacts }) {
  return (
    <footer>
      <Heading>Reach me here</Heading>
      <div className="flex  ">
        <ul className="">
          {contacts.map((contact) => {
            return (
              <div key={contact.id}>
                <li className=" border border-neutral-700 rounded-md hover:bg-neutral-800 transition-colors flex items-center gap-3 p-2 m-2">
                  <div className="img size-8">
                    <img
                      src={contact.img}
                      alt={contact.platform}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                    />
                  </div>

                  <Link
                    className={`${ubuntuMono.className} text-sm`}
                    target="_blank"
                    href={contact.link}
                  >
                    {contact.link}
                  </Link>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
// {
//   contacts.map((contact) => (
//     <div className="">
//       <a
//         key={contact.platform}
//         href={contact.link}
//         target="_blank"
//         className=" "
//       >
//         <div className="w-8 h-8 mb-2">
//           <img
//             src={contact.img}
//             alt={contact.platform}
//             className="w-full h-full object-contain group-hover:scale-105 transition-transform"
//           />
//         </div>
//         <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-blue-500 transition-colors">
//           {contact.link}
//         </span>
//       </a>
//     </div>
//   ));
// }
