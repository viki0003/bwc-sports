import Banner from "../../Components/SchoolPrograms/BannerSection/BannerSection";
import Blurbs from "../../Components/SchoolPrograms/Blurbs/Blurbs";
import ChoosePlans from "../../Components/SchoolPrograms/ChoosePlans/ChoosePlanss";
import Recess from "../../Components/SchoolPrograms/Recess/Recess";
import SportsRecDay from "../../Components/SchoolPrograms/SportsRecDay/SportsRecDay";

const SchoolPrograms = () => {
  return (
    <>
      <Banner />
      <Blurbs />
      <Recess />
      <ChoosePlans />
      <SportsRecDay/>
    </>
  );
};
export default SchoolPrograms;
