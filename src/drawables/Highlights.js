import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

function Highlights({ color }) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill={color ?? '#000'}
      xmlns="http://www.w3.org/2000/svg">
      <G clipPath="url(#prefix__clip0)">
        <Path
          d="M12.694 6.975a1.256 1.256 0 000 2.512h5.025a1.256 1.256 0 100-2.512h-5.026zM12.694 18.281a1.256 1.256 0 000 2.513h5.025a1.256 1.256 0 000-2.513h-5.026z"
          fill={color ?? '#000'}
          fillOpacity={0.4}
        />
        <Path
          d="M12.694 3.206a1.256 1.256 0 000 2.513h10.05a1.256 1.256 0 100-2.513h-10.05zM12.694 14.513a1.256 1.256 0 100 2.512h10.05a1.256 1.256 0 100-2.512h-10.05z"
          fill={color ?? '#000'}
          fillOpacity={0.8}
        />
        <Path
          d="M1.256 1.952A1.256 1.256 0 000 3.21V9.49a1.256 1.256 0 001.256 1.256h6.282A1.256 1.256 0 008.794 9.49V3.209a1.256 1.256 0 00-1.256-1.257H1.256zM1.256 13.254A1.256 1.256 0 000 14.51v6.281a1.256 1.256 0 001.256 1.257h6.282a1.256 1.256 0 001.256-1.256V14.51a1.256 1.256 0 00-1.256-1.256H1.256z"
          fill={color ?? '#000'}
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill={color ?? '#000'} d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default Highlights;
