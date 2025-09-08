import Heading from "../atomic-Component/heading";

export default function Footer({ contacts }) {
  return (
    <footer>
      <Heading>Reach me here</Heading>
      <div className="flex justify-center gap-6 mt-8">
        {contacts.map((contact) => (
          <a
            key={contact.platform}
            href={contact.link}
            target="_blank"
            className="flex flex-col items-center text-center group transition-transform transform hover:-translate-y-1"
          >
            <div className="w-8 h-8 mb-2">
              <img
                src={contact.img}
                alt={contact.platform}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform"
              />
            </div>
            <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-blue-500 transition-colors">
              {contact.platform}
            </span>
          </a>
        ))}
      </div>
    </footer>
  );
}
