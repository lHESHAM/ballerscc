import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../pages/Animation - 1739881551990.json';

const LoadingAnimation = () => {
  return (
    <Lottie
      animationData={animationData}
      loop={true}
      style={{ width: 43, height: 53 }}
    />
  );
};

export default LoadingAnimation;
