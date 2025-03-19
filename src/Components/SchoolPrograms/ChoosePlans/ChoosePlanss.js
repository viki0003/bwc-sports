import "./chooseplans.css";
import RecessPImage from "../../../Assets/Images/recess-p-img.png";
import PricingBlock from "./PricingBlock";

const ChoosePlanss = () => {
  const plans = [
    {
      color: "red",
      title: "Recess Package #1",
      price: "$ 1,175",
      features: [
        "Based on 3 lunch periods",
        "1 or more sessions pricing",
        "$1,175 for three instructors",
        "$1,025 for two instructors",
      ],
      image: RecessPImage,
    },
    {
      color: "red",
      title: "Recess Package #2",
      price: "$ 1,500",
      features: [
        "Based on 5 lunch periods",
        "2 or more sessions pricing",
        "$1,500 for four instructors",
        "$1,250 for three instructors",
      ],
      image: RecessPImage,
    },
    {
      color: "red",
      title: "Recess Package #2",
      price: "$ 1,500",
      features: [
        "Based on 5 lunch periods",
        "2 or more sessions pricing",
        "$1,500 for four instructors",
        "$1,250 for three instructors",
      ],
      image: RecessPImage,
    },
  ];

  return (
    <div className="choose-plans">
      <div className="choose-plans-heading">
        <h2>Choose Your Plan</h2>
      </div>

      <div className="choose-plans-list">
        {/* <div className="cpl-item">
          <h4>Recess Package #1</h4>
          <div className="cpl-item-content">
            <h5>$ 1,175</h5>
            <ul className="cpl-item-list">
              <li>
                <span className="cpl-check-icon">
                  <FaCheckCircle />
                </span>
                Based on 3 lunch periods
              </li>
              <li>
                <span className="cpl-check-icon">
                  <FaCheckCircle />
                </span>
                1 or more sessions pricing
              </li>
              <li>
                <span className="cpl-check-icon">
                  <FaCheckCircle />
                </span>
                $1,175 for three instructors
              </li>
              <li>
                <span className="cpl-check-icon">
                  <FaCheckCircle />
                </span>
                $1,025 for two instructors
              </li>
            </ul>
            <button className="more-info">More Info</button>
            <img src={RecessPImage} alt="recess" />
          </div>
        </div> */}
        {plans.map((plan, index) => (
          <PricingBlock
            key={index}
            title={plan.title}
            price={plan.price}
            features={plan.features}
            image={plan.image}
            color={plan.color}
          />
        ))}
      </div>
    </div>
  );
};
export default ChoosePlanss;
