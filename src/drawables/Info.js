import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

function Info({ color }) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill={color ?? '#fff'}
      xmlns="http://www.w3.org/2000/svg">
      <G clipPath="url(#prefix__clip0)">
        <Path d="M11 0C4.925 0 0 4.925 0 11s4.925 11 11 11 11-4.925 11-11S17.075 0 11 0zm.786 16.304a.197.197 0 01-.197.196h-1.178a.197.197 0 01-.197-.196V9.625c0-.108.089-.196.197-.196h1.178c.108 0 .197.088.197.196v6.679zM11 7.857A1.179 1.179 0 0111 5.5a1.179 1.179 0 010 2.357z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path d="M0 0h22v22H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default Info;
