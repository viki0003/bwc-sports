import Banner from "../../Components/SchoolPrograms/BannerSection/BannerSection";
import Blurbs from "../../Components/SchoolPrograms/Blurbs/Blurbs";
import ChoosePlans from "../../Components/SchoolPrograms/ChoosePlans/ChoosePlanss";
import Recess from "../../Components/SchoolPrograms/Recess/Recess";
import SkillsAndDrills from "../../Components/SchoolPrograms/SkillsAndDrills/SkillsAndDrills";
import SportsRecDay from "../../Components/SchoolPrograms/SportsRecDay/SportsRecDay";
import Advertisement from "../../Components/SchoolPrograms/Advertisement/Advertisement";

const SchoolPrograms = () => {
  return (
    <>
      <Banner />
      <Blurbs />
      <Recess />
      <ChoosePlans />
      <SportsRecDay/>
      <SkillsAndDrills/>
      <Advertisement/>
    </>
  );
};
export default SchoolPrograms;
