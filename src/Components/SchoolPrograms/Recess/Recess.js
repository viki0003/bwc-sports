import { useRef, useState } from "react";
import RecessImage from "../../../Assets/Images/recess-1.png";
import RecessImageTwo from "../../../Assets/Images/recess-2.png";
import RecessImageThree from "../../../Assets/Images/recess-3.png";
import { BsFillPlayCircleFill, BsFillPauseCircleFill } from "react-icons/bs";
import "./recess.css";

const Recess = () => {
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
  return (
    <div className="recess">
      <div className="recess-heading">
        <h2>Recess</h2>
        <div className="recess-images">
          <img src={RecessImage} alt="recess" />
          <img src={RecessImageTwo} alt="recess" />
          <img src={RecessImageThree} alt="recess" />
        </div>
      </div>

      <div className="recess-video">
        <div className="recess-video-content">
          <p>
            Our goal is to provide students with a break from classroom
            activities, allowing them to engage in physical exercise, social
            interaction, and structured play in a safe and supervised
            environment.
          </p>
          <div className="prgrm-cmpt">
            <p>Program Components:</p>
            <ul>
              <li>Organized Games</li>
              <li> Creative Play Areas</li> <li> Quiet Zones</li>
              <li>Social Interaction</li>
              <li> Safety & Supervision</li>
            </ul>
          </div>
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
export default Recess;
