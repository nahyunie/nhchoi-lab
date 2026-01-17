'use client'

import React, { FC } from "react";

const ComingSoon: FC = () => {
  return (
    <div className="cs-container">
      <div className="cs-hanging-wrapper">
        {/* 줄 */}
        <div className="cs-string" />

        {/* 고리 */}
        <div className="cs-ring" />

        {/* 팻말 */}
        <div className="cs-sign-board">
          <div className="cs-sign-text">
            COMING
          </div>
          <div className="cs-sign-text cs-sign-text-sub">
            SOON
          </div>
        </div>
      </div>

      <div className="cs-message">
        🚧 재밌는 거 금방 만들어올게요 ! 🚧
      </div>
    </div>
  );
}

export default ComingSoon;