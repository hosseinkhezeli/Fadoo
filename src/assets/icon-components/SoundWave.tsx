import React from "react";

const SoundWave = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
    >
      {/* <rect width={2.8} height={12} x={1} y={6} fill="currentColor">
        <animate
          attributeName="y"
          begin="svgSpinnersBarsScaleMiddle0.begin+0.4s"
          calcMode="spline"
          dur="0.6s"
          keySplines=".14,.73,.34,1;.65,.26,.82,.45"
          values="6;1;6"
        ></animate>
        <animate
          attributeName="height"
          begin="svgSpinnersBarsScaleMiddle0.begin+0.4s"
          calcMode="spline"
          dur="0.6s"
          keySplines=".14,.73,.34,1;.65,.26,.82,.45"
          values="12;22;12"
        ></animate>
      </rect> */}
      <rect width={2} height={6} x={5.8} y={9} fill="inherit" rx="1">
        <animate
          attributeName="y"
          begin="svgSpinnersBarsScaleMiddle0.begin+0.2s"
          calcMode="spline"
          dur="0.6s"
          mode="infinite"
          keySplines=".14,.73,.34,1;.65,.26,.82,.45"
          values="9;6;9"
          repeatCount="indefinite"
        ></animate>
        <animate
          attributeName="height"
          begin="svgSpinnersBarsScaleMiddle0.begin+0.2s"
          calcMode="spline"
          dur="0.6s"
          keySplines=".14,.73,.34,1;.65,.26,.82,.45"
          values="6;12;6"
          repeatCount="indefinite"
        ></animate>
      </rect>
      <rect width={2} height={12} x={10.6} y={6} fill="inherit" rx="1">
        <animate
          id="svgSpinnersBarsScaleMiddle0"
          attributeName="y"
          begin="0;svgSpinnersBarsScaleMiddle1.end-0.1s"
          calcMode="spline"
          dur="0.9s"
          keySplines=".14,.73,.34,1;.65,.26,.82,.45"
          values="4;9.5;4"
          repeatCount="indefinite"
        ></animate>
        <animate
          attributeName="height"
          begin="0;svgSpinnersBarsScaleMiddle1.end-0.1s"
          calcMode="spline"
          dur="0.9s"
          keySplines=".14,.73,.34,1;.65,.26,.82,.45"
          values="16;4;16"
          repeatCount="indefinite"
        ></animate>
      </rect>
      <rect width={2} height={6} x={15.4} y={9} fill="inherit" rx="1">
        <animate
          attributeName="y"
          begin="svgSpinnersBarsScaleMiddle0.begin+0.4s"
          calcMode="spline"
          dur="0.5s"
          keySplines=".14,.73,.34,1;.65,.26,.82,.45"
          values="9;6;9"
          repeatCount="indefinite"
        ></animate>
        <animate
          attributeName="height"
          begin="svgSpinnersBarsScaleMiddle0.begin+0.4s"
          calcMode="spline"
          dur="0.5s"
          keySplines=".14,.73,.34,1;.65,.26,.82,.45"
          values="6;12;6"
          repeatCount="indefinite"
        ></animate>
      </rect>
      {/* <rect width={2.8} height={12} x={20.2} y={6} fill="inherit">
        <animate
          id="svgSpinnersBarsScaleMiddle1"
          attributeName="y"
          begin="svgSpinnersBarsScaleMiddle0.begin+0.4s"
          calcMode="spline"
          dur="0.6s"
          keySplines=".14,.73,.34,1;.65,.26,.82,.45"
          values="6;1;6"
        ></animate>
        <animate
          attributeName="height"
          begin="svgSpinnersBarsScaleMiddle0.begin+0.4s"
          calcMode="spline"
          dur="0.6s"
          keySplines=".14,.73,.34,1;.65,.26,.82,.45"
          values="12;22;12"
        ></animate>
      </rect> */}
    </svg>
  );
};

export default SoundWave;
