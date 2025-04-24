import React from 'react'
import { useRef, useState } from "react";
import { BsFillPlayCircleFill, BsFillPauseCircleFill } from "react-icons/bs";
import './bannervideo.css'
export default function BannerVideo() {
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

        <>
        <div className="recess fd-video">
            <div className="recess-video">
                <div className="recess-video-content">
                    <p>
                    BWC is a licensed DOE vendor with over 5 years of experience working within the NYC school system. We have served thousands of students each in both public and private schools, our DOE Vender is #BEC214306.
                    </p>
                    <div className="prgrm-cmpt">
                        <button className="watch-video-btn">Watch The Video   </button>
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
        </>
    )
}
