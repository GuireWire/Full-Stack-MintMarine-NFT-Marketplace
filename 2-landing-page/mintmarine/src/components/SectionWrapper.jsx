import React from 'react';

import styles from '../styles/Global';
import assets from '../assets';
import Button from './Button';
import VideoSection from './VideoSection';

const SectionWrapper = ({ title, description, showBtn, mockupImg, mockupVideo, customVideoClass, banner, reverse }) => {
  return (
    <div className={`min-h-screen ${styles.section} 
      ${reverse ? styles.bgWhite : styles.bgPrimary} 
      ${banner}`}>
      <div className={`flex items-center 
        ${reverse ? styles.boxReverseClass : styles.boxClass} 
        w-11/12 sm:w-full minmd:w-3/4`}>
        <div className={`${styles.descDiv} 
          ${reverse ? " fadeRightMini" : " fadeLeftMini"}
          ${reverse ? styles.textRight : styles.textLeft}
        `}>
          <h1 className={`
          ${reverse ? styles.blackText : styles.whiteText}
          ${styles.h1Text}`}>{title}</h1>
          <p className={`
          ${reverse ? styles.blackText : styles.whiteText}
          ${styles.descriptionText}`}>{description}</p>
          {showBtn && (
            <Button
              assetUrl={assets.expo}
              link="https://github.com/GuireWire/Full-Stack-MintMarine-NFT-Marketplace/blob/master/application-2ab37d0c-7923-4d4b-8164-e40e86d02eb2.aab"
            />
          )}
        </div>
        <div
          className={`flex-1 ${styles.flexCenter}p-8 sm:px-0`}
        >
          {mockupVideo ? (
            <div className={`${reverse ? " fadeLeftMini" : " fadeRightMini"}`}>
              <VideoSection videoSource={mockupVideo} styles={styles.sectionVideo}
                customVideoClass={customVideoClass} />
            </div>
          ) : (
            <img
              src={mockupImg}
              alt="mockup"
              className={`
              ${reverse ? " fadeLeftMini" : " fadeRightMini"}
              ${styles.sectionImg}`}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper