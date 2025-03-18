import { useRef, useState } from "react";
import RecessImage from "../../../Assets/Images/recess-1.png";
import RecessImageTwo from "../../../Assets/Images/recess-2.png";
import RecessImageThree from "../../../Assets/Images/recess-3.png";
import { BsFillPlayCircleFill, BsFillPauseCircleFill } from "react-icons/bs";
import RecessPImage from "../../../Assets/Images/recess-p-img.png";
import PricingBlock from "../ChoosePlans/PricingBlock";
import "./sportsrecday.css";

const SportsRecDay = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  const plans = [
    {
      color: "blue",
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
  ];
  return (
    <div className="sports-rec-day">
      <div className="recess-heading">
        <h2>Sports & Rec Day</h2>
        <div className="recess-images">
          <img src={RecessImage} alt="recess" />
          <img src={RecessImageTwo} alt="recess" />
          <img src={RecessImageThree} alt="recess" />
        </div>
      </div>
      <div className="sports-rec-day-content">
        <div className="choose-plans-list">
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

        <div className="video-container">
          <video
            ref={videoRef}
            src="https://videos.pexels.com/video-files/30822229/13182339_640_360_25fps.mp4"
            className="w-full"
            onEnded={handleVideoEnd}
          />
          <div className="video-controls">
            <button onClick={togglePlay} className="video-play-btn">
              {isPlaying ? (
                <BsFillPauseCircleFill size={40} />
              ) : (
                <BsFillPlayCircleFill size={40} />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SportsRecDay;
