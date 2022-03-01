import * as SectionComponents from "./sections";
import capitalizeString from "../utils/capitalizeString";

function resolveSections(section) {
  const Section = SectionComponents[capitalizeString(section._type)];

  if (Section) {
    return Section;
  }

  return null;
}

function RenderSections(props) {
  const { sections } = props;

  if (!sections) {
    return <div>Missing sections</div>;
  }

  return (
    <>
      {sections.map((section) => {
        const SectionComponent = resolveSections(section);
        if (!SectionComponent) {
          return <div key={section._key}>Missing section {section._type}</div>;
        }
        return <SectionComponent {...section} key={section._key} />;
      })}
    </>
  );
}

export default RenderSections;
