import { Link } from "react-scroll";

const SectionNav = ({ offset, idList }) => {
  return (
    <div className="sectionNav">
      <div className="dataHeading">Jump to</div>
      {idList.map((entry, index) => (
        <Link
          activeClass="sectionNavLinkActive"
          to={entry.id}
          spy={true}
          smooth={true}
          delay={0}
          duration={100}
          offset={offset}
          key={index}
          className="sectionNavLink"
        >
          {entry.id}
        </Link>
      ))}
    </div>
  );
};

export default SectionNav;
