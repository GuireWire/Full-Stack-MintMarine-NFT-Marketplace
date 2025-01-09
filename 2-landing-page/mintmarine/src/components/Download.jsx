import React from 'react';

import styles from '../styles/Global';
import assets from '../assets';
import VideoSection from './VideoSection';

const Download = () => {
  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.blackText}`}>Download the Source Code</h1>
          <p className={`${styles.pText} ${styles.blackText}`}>Get the full source code on GitHub</p>
        </div>
        <button className={styles.btnPrimary}
          onClick={() => window.open('https://github.com/GuireWire/Full-Stack-MintMarine-NFT-Marketplace', '_blank')}
        >Source Code</button>
        <div className={styles.flexCenter}>
          {/* <img
            src={assets.scene}
            alt="download_png"
            className={styles.fullImg}
          /> */}
          <VideoSection
            videoSource={assets.landing5}
            customVideoClass={`${styles.sectionImg} translate-x-[1%]`}
          />
        </div>
      </div>
    </div>
  )
}

export default Download