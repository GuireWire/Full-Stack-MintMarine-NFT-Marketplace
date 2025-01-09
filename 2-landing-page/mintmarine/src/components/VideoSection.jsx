import React, { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const VideoSection = ({ videoSource, styles, customVideoClass }) => {
    const videoRef = useRef(null);
    const [hasPlayed, setHasPlayed] = useState(false);
    const [ref, inView] = useInView({
        threshold: 0.3,
        triggerOnce: false
    });

    useEffect(() => {
        if (inView && videoRef.current) {
            if (!hasPlayed || window.scrollY < videoRef.current.getBoundingClientRect().top) {
                const playPromise = videoRef.current.play();
                if (playPromise !== undefined) {
                    playPromise.catch(error => {
                        console.log("Video play error:", error);
                    });
                }
                setHasPlayed(true);
            }
        } else if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
            if (!inView) {
                setHasPlayed(false);
            }
        }
    }, [inView, hasPlayed]);

    return (
        <div ref={ref}>
            <video
                ref={videoRef}
                muted
                playsInline
                autoPlay={false}
                className={customVideoClass}
                style={{ width: "200%", height: "auto" }}
            >
                <source
                    src={videoSource}
                    type="video/webm; codecs=vp9"
                />
            </video>
        </div>
    );
};

export default VideoSection;