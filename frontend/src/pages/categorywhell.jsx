import React, { useState } from 'react';

const rewards = [
  '5$', '1$', '100$', '15$', 'JACKPOT', '20$',
  '5$', '1$', '50$', '2$', 'ZERO', '10$'
];

const colors = [
  '#ffffff', '#1E90FF', '#FF69B4', '#800080', '#ffffff', '#FF1493',
  '#1E90FF', '#ffffff', '#1E90FF', '#ADD8E6', '#ffffff', '#1E90FF'
];

const RewardWheel = () => {
  const [angle, setAngle] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const sliceAngle = 360 / rewards.length;

  const spin = () => {
    if (isSpinning) return;
    const randomIndex = Math.floor(Math.random() * rewards.length);
    const targetAngle = 360 - randomIndex * sliceAngle - sliceAngle / 2;
    const spins = 5;
    const totalRotation = spins * 360 + targetAngle;

    setIsSpinning(true);
    setAngle((prev) => prev + totalRotation);

    setTimeout(() => {
      setIsSpinning(false);
      alert(`You got: ${rewards[randomIndex]}`);
    }, 4000);
  };

  return (
    <div className="flex flex-col items-center justify-center h-[600px]">
      {/* Pointer */}
      <div className="z-20 mb-[-25px]">
        <div className="w-0 h-0 border-l-[25px] border-l-transparent border-r-[25px] border-r-transparent border-t-[40px] border-t-yellow-400"></div>
      </div>

      {/* Wheel */}
      <div
        className="relative w-[400px] h-[400px] rounded-full border-[10px] border-blue-700 shadow-[0_0_30px_5px_rgba(0,0,0,0.3)] transition-transform duration-[4000ms] ease-out"
        style={{ transform: `rotate(${angle}deg)` }}
      >
        {rewards.map((reward, index) => {
          const rotation = index * sliceAngle;
          const textRotation = -rotation - sliceAngle / 2;
          return (
            <div
              key={index}
              className="absolute w-full h-full top-0 left-0"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              <div
                className="absolute w-1/2 h-1/2 origin-bottom-left flex items-end justify-center"
                style={{
                  backgroundColor: colors[index],
                  clipPath: 'polygon(100% 0, 0 100%, 100% 100%)',
                  transform: `rotate(${sliceAngle}deg)`
                }}
              >
                <span
                  className="text-[13px] font-bold"
                  style={{
                    transform: `rotate(${textRotation}deg)`,
                    color: index === 4 ? 'red' : 'black'
                  }}
                >
                  {reward}
                </span>
              </div>
            </div>
          );
        })}

        {/* Center circle */}
        <div className="absolute top-[190px] left-[190px] w-[20px] h-[20px] bg-blue-800 rounded-full border-[3px] border-white"></div>
      </div>

      {/* Spin button */}
      <button
        className="mt-10 bg-yellow-400 hover:bg-yellow-500 px-6 py-2 rounded-full text-lg font-bold shadow-lg"
        onClick={spin}
        disabled={isSpinning}
      >
        {isSpinning ? 'Spinning...' : 'SPIN'}
      </button>
    </div>
  );
};

export default RewardWheel;
