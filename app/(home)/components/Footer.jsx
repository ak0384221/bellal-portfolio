import Heading from "@/app/(home)/atomic-Component/heading";
import ContactLink from "./ContactLink";

export default function Footer({ contacts }) {
  return (
    <footer className="border-t border-white/10 pt-8 mt-12">
      <Heading textSize="2xl">Reach me here</Heading>

      <div className="mt-6  flex justify-start items-center px-2 gap-3">
        {contacts.map((contact) => (
          <ContactLink key={contact.id} contact={contact} />
        ))}
      </div>
    </footer>
  );
}
