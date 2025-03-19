import React from 'react'
import PricingBlock from '../ChoosePlans/PricingBlock';
import RecessImage from "../../../Assets/Images/recess-1.png";
import RecessImageTwo from "../../../Assets/Images/recess-2.png";
import RecessImageThree from "../../../Assets/Images/recess-3.png";
import RecessPImage from "../../../Assets/Images/recess-p-img.png";
import './skillsanddrills.css';
export default function SkillsAndDrills() {
    const plans = [
        {
            color: "green",
            title: "Skills & Drills",
            price: "$ 1,175",
            features: [
                "Choose One: Basketball, Soccer or Football",
                "Skills & Drills in the morning",
                "Break for lunch",
                "Games, contests, and tournaments",
            ],
            image: RecessPImage,
        },
    ];
    return (
        <div className="sports-rec-day">
            <div className="recess-heading">
                <h2>Skill & Drills</h2>
                <div className="recess-images">
                    <img src={RecessImage} alt="recess" />
                    <img src={RecessImageTwo} alt="recess" />
                    <img src={RecessImageThree} alt="recess" />
                </div>
            </div>
            <div className="sports-rec-day-content">
                <div className="choose-plans-list sad-price-container">
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

                {/* <div className="skills-images-container">
                    <div className="skills-image-item item1">
                        <img src="https://www.shutterstock.com/shutterstock/photos/2463190611/display_1500/stock-photo-different-sports-equipment-on-green-grass-flat-lay-2463190611.jpg" alt="img1"/>
                    </div>
                    <div className="skills-image-item item2">
                    <img src="https://www.shutterstock.com/shutterstock/photos/2463190611/display_1500/stock-photo-different-sports-equipment-on-green-grass-flat-lay-2463190611.jpg" alt="img2"/>
                    </div>
                    <div className="skills-image-item item3">
                        <img src="https://www.shutterstock.com/shutterstock/photos/2463190611/display_1500/stock-photo-different-sports-equipment-on-green-grass-flat-lay-2463190611.jpg" alt="img3"/>
                    </div>
                    <div className="skills-image-item item4">
                        <img src="https://www.shutterstock.com/shutterstock/photos/2463190611/display_1500/stock-photo-different-sports-equipment-on-green-grass-flat-lay-2463190611.jpg" alt="img4"/>
                    </div>
                    <div className="skills-image-item item5">
                        <img src="https://www.shutterstock.com/shutterstock/photos/2463190611/display_1500/stock-photo-different-sports-equipment-on-green-grass-flat-lay-2463190611.jpg" alt="img5"/>
                    </div>
                    <div className="skills-image-item item6">
                        <img src="https://www.shutterstock.com/shutterstock/photos/2463190611/display_1500/stock-photo-different-sports-equipment-on-green-grass-flat-lay-2463190611.jpg" alt="img6"/>
                    </div>
                </div> */}
                <div className="skills-image-container">
                    <div className="skills-image-row up">
                        <img src="https://www.shutterstock.com/shutterstock/photos/2463190611/display_1500/stock-photo-different-sports-equipment-on-green-grass-flat-lay-2463190611.jpg" className="large " />
                        <img src="https://www.shutterstock.com/shutterstock/photos/2463190611/display_1500/stock-photo-different-sports-equipment-on-green-grass-flat-lay-2463190611.jpg" className="medium " />
                        <img src="https://www.shutterstock.com/shutterstock/photos/2463190611/display_1500/stock-photo-different-sports-equipment-on-green-grass-flat-lay-2463190611.jpg" className="small " />
                    </div>
                    <div className="skills-image-row down">
                        <img src="https://www.shutterstock.com/shutterstock/photos/2463190611/display_1500/stock-photo-different-sports-equipment-on-green-grass-flat-lay-2463190611.jpg" className="small" />
                        <img src="https://www.shutterstock.com/shutterstock/photos/2463190611/display_1500/stock-photo-different-sports-equipment-on-green-grass-flat-lay-2463190611.jpg" className="medium"  />
                        <img src="https://www.shutterstock.com/shutterstock/photos/2463190611/display_1500/stock-photo-different-sports-equipment-on-green-grass-flat-lay-2463190611.jpg" className="large" />
                    </div>

                </div>
            </div>
        </div>
    );
};

