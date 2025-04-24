import "./style.css";
// import "./blue.css";
// import "./golden.css";
import Image1 from "../../../Assets/Images/Instruction_unlimited.png";
import Image2 from "../../../Assets/Images/recess-p-img.png";
import Image3 from "../../../Assets/Images/Instruction_Single.png.png";

import PricingBlock from "./Blocks";

const ChoosePlanss = () => {
  const plans = [
    {
      color: "blue",
      title: "Single Sport Unlimited",
      price: "$ 119 ",
      billingType: "per month",
      features: ["Unlimited monthly sessions", "One sport"],
      image: Image2,
      text: "Integrated group class schedule can be found at the bottom of this page",
    },
    {
      color: "golden",
      title: "Ultimate Unlimited",
      price: "$ 325",
      billingType: "per month",
      features: ["Unlimited monthly sessions", "All four sports"],
      image: Image1,
      text: "Integrated group class schedule can be found at the bottom of this page",
      isPopular: true,
    },
    {
      color: "blue",
      title: "Single Session",
      price: "$ 50",
      billingType: "per session",
      features: ["Unlimited monthly sessions", "Any sport"],
      image: Image3,
      text: "Integrated group class schedule can be found at the bottom of this page",
    },
  ];

  return (
    <div className="choose-plans-wrapper">
      <div className="plans-header">
        <h2>Integrated Sports Programs</h2>
        <h3>BWC Weekly Group Sessions</h3>
        <p>Staten Island’s best beginner sports programs</p>
      </div>
      <div className="choose-plans-list">
        {plans.map((plan, index) => (
          <PricingBlock
            key={index}
            title={plan.title}
            price={plan.price}
            features={plan.features}
            image={plan.image}
            color={plan.color}
            text={plan.text}
            billingType={plan.billingType}
            isPopular={plan.isPopular}
          />
        ))}
      </div>
    </div>
  );
};

export default ChoosePlanss;
