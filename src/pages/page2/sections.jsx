import SectionContent from "../../components/page2/SectionContent";
import StickyData from "../../components/page2/StickyData";
import SectionNav from "../../components/page2/SectionNav";
import { sectionList } from "./tempData";

const Sections = () => {
  return (
    <section className="contentSection">
      <h2 className="sectionHeading">
        <b>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </b>
      </h2>
      <div className="sectionGrid">
        <div className="contentSectionsScroll">
          {sectionList.map((section, index) => {
            return (
              <div id={section.id} key={index}>
                <SectionContent
                  heading={section.heading}
                  title={section.title}
                  imageSrc={section.imageSrc}
                  sectionText={section.sectionText}
                />
              </div>
            );
          })}
        </div>

        <StickyData images={["./photography.png",
                            "./photography.png",
                            "./photography.png"]}
                    headings={["Lorem ipsum dolor sit",
                              "Lorem ipsum dolor sit",
                              "Lorem ipsum dolor sit"]} />
        <div className="responsive-large">
          <SectionNav idList={sectionList} offset={-50} />
        </div>
      </div>
    </section>
  );
};

export default Sections;