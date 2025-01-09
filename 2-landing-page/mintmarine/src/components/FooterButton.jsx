import React from 'react';
import styles from '../styles/Global';

const FooterButton = ({ assetUrl, link }) => {
    return (
        <div
            className={styles.btnBlack}
            onClick={() => window.open(link, "_blank")}
        >
            <div className="flex flex-col justify-start">
                <p className={`${styles.btnText} font-bold text-xs`}>Powered by GuireWire</p>
            </div>
        </div>
    )
}

export default FooterButton