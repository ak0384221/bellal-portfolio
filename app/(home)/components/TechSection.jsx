import Heading from "@/app/(home)/atomic-Component/heading";
import TechMaker from "./TechMaker";

export default function TechSection({ frontendTech }) {
  return (
    <section className="space-y-5">
      <Heading textSize="2xl">I have worked with</Heading>

      <div className="columns-2 gap-4 space-y-4">
        {Object.entries(frontendTech).map(([category, items]) => (
          <TechMaker key={category} category={category} items={items} />
        ))}
      </div>
    </section>
  );
}
