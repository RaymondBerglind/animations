import React from 'react';
import './style.css';

export default function() {
    return (
        <div className='diagonal-lines-container'>
            <svg viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-inside-1" fill="white">
                    <path d="M0 1004V0L1936.65 1004H0Z" />
                </mask>
                <path d="M0 0L460.249 -887.79L-1000 -1644.81V0H0ZM0 1004H-1000V2004H0V1004ZM1936.65 1004V2004L2396.9 116.21L1936.65 1004ZM-1000 0V1004H1000V0H-1000ZM0 2004H1936.65V3.99994H0V2004ZM2396.9 116.21L460.249 -887.79L-460.249 887.79L1476.4 1891.79L2396.9 116.21Z" transform="translate(-201.847)" fill="#16476A" mask="url(#path-1-inside-1)" />
                <path className='diagonal-animated' d="M1936.65 1254L0 250M735 0H741" transform="translate(-329 -297)" stroke="#FF9E58" stroke-width="80" />
                <path className='diagonal-animated' d="M1936.65 1254L0 250M735 0H741" transform="translate(-329 -387)" stroke="#FF5880" stroke-width="80" />
                <path className='diagonal-animated' d="M1936.65 1254L0 250M735 0H741" transform="translate(-329 -477)" stroke="#58D7FF" stroke-width="80" />
</svg>
        </div>
    );
}