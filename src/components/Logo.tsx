const Logo = () => {
  return (
    <svg
      width="45"
      height="45"
      viewBox="0 0 250 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="250" height="250" rx="30" fill="url(#paint0_linear_1_3)" />
      <g filter="url(#filter0_d_1_3)">
        <path
          d="M113.543 147.432H139.679L152.818 164.335L165.744 179.392L190.105 209.932H161.412L144.651 189.335L136.057 177.119L113.543 147.432ZM192.307 125.273C192.307 141.134 189.3 154.629 183.287 165.756C177.321 176.883 169.177 185.382 158.855 191.253C148.58 197.077 137.027 199.989 124.196 199.989C111.27 199.989 99.6695 197.053 89.3949 191.182C79.1203 185.311 71 176.812 65.0341 165.685C59.0682 154.558 56.0852 141.087 56.0852 125.273C56.0852 109.411 59.0682 95.9167 65.0341 84.7898C71 73.6629 79.1203 65.1875 89.3949 59.3636C99.6695 53.4924 111.27 50.5568 124.196 50.5568C137.027 50.5568 148.58 53.4924 158.855 59.3636C169.177 65.1875 177.321 73.6629 183.287 84.7898C189.3 95.9167 192.307 109.411 192.307 125.273ZM161.128 125.273C161.128 114.998 159.589 106.333 156.511 99.2784C153.481 92.2235 149.196 86.8731 143.656 83.2273C138.116 79.5814 131.63 77.7585 124.196 77.7585C116.762 77.7585 110.276 79.5814 104.736 83.2273C99.196 86.8731 94.8873 92.2235 91.8097 99.2784C88.7794 106.333 87.2642 114.998 87.2642 125.273C87.2642 135.547 88.7794 144.212 91.8097 151.267C94.8873 158.322 99.196 163.672 104.736 167.318C110.276 170.964 116.762 172.787 124.196 172.787C131.63 172.787 138.116 170.964 143.656 167.318C149.196 163.672 153.481 158.322 156.511 151.267C159.589 144.212 161.128 135.547 161.128 125.273Z"
          fill="url(#paint1_angular_1_3)"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1_3"
          x="44.0852"
          y="45.5568"
          width="156.222"
          height="179.375"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-2" dy="5" />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_3"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_3"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1_3"
          x1="250"
          y1="0"
          x2="0"
          y2="250"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0BEDAE" />
          <stop offset="1" stopColor="#078B66" />
        </linearGradient>
        <radialGradient
          id="paint1_angular_1_3"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(124.5 125) rotate(-122.974) scale(144.233 93.5728)"
        >
          <stop stopColor="#1DF4B8" />
          <stop offset="1" stopColor="#0AD49C" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default Logo;
