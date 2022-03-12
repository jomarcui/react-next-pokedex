import styled from "styled-components";
import { Colors } from "../../../enum/colors";
import { Screen } from "../../../enum/screen";
import { makeShadowColor } from "../../../helpers/colors";

interface ICard {
  backgroundColor?: string;
  backgroundImageColor?: string;
  color?: string;
  height?: number;
  shadowColor?: string;
  shadowed?: boolean;
  width?: number | string;
}

export const Card = styled.div<ICard>`
  background: ${({ backgroundColor }) =>
      backgroundColor ? backgroundColor : Colors.WHITE}
    url('data:image/svg+xml;utf8,<svg fill="hsl(0, 0%, 96%)" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"><g><g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)"><path d="M4611.3,5000.3c-1105.4-80.2-2176.7-561.2-2990.5-1343.4c-320.7-306.1-507.7-532-741-889.1C454.7,2116.7,168,1295.6,114.6,576.5L100,362.7h1287.6h1287.6l29.1,153c194.3,1025.2,996,1783.2,2018.8,1911.9c655.9,82.6,1353.2-143.3,1843.9-595.2c364.4-337.7,609.8-772.5,706.9-1251.1l41.3-206.5l1292.4-7.3c1117.5-4.9,1290,0,1290,29.1c0,19.4-17,165.2-36.4,323.1C9642.5,2388.8,8627,3797.8,7116,4529c-364.4,177.3-821.1,330.4-1197.7,398.4c-240.5,46.2-835.7,104.5-976.6,97.2C4907.7,5022.2,4759.5,5012.5,4611.3,5000.3z"/><path d="M4752.2,1893.2C4045.3,1796,3437.9,1254.3,3248.4,557c-58.3-216.2-58.3-682.6,0-898.9c138.5-510.2,490.7-942.6,952.3-1166.1c298.8-143.3,461.6-179.8,813.8-179.8c274.5,2.4,325.5,9.7,522.3,75.3c313.4,106.9,502.9,225.9,740.9,466.4c172.5,172.5,228.3,250.2,323.1,439.7c160.4,325.5,194.4,498,179.8,886.7c-14.6,422.7-89.9,646.2-320.7,971.7C6081.1,1689.1,5400.8,1983.1,4752.2,1893.2z M5208.9,858.3c274.5-75.3,500.5-323.1,558.8-609.8c70.4-332.8-114.2-694.8-432.4-850.3c-119-58.3-167.6-68-345-68c-167.6,2.4-225.9,12.1-315.8,58.3c-182.2,94.7-279.4,187.1-364.4,345c-157.9,296.4-116.6,651,104.5,889.1C4638,863.1,4905.3,943.3,5208.9,858.3z"/><path d="M114.6-371c68-874.6,481-1892.5,1054.4-2594.6c165.2-204.1,556.3-595.2,760.4-760.4C3411.2-4926,5476.2-5144.7,7188.8-4284.7c500.4,252.6,867.3,517.5,1275.4,928c821.1,823.5,1302.1,1851.2,1421.2,3034.2l14.6,150.6H8602.7H7307.9l-31.6-174.9c-123.9-731.2-714.2-1450.3-1409-1717.5c-340.1-131.2-490.8-157.9-877-157.9c-289.1,0-388.7,9.7-558.8,55.9C3518.1-1923.3,2857.3-1197,2697-261.7l-17,89.9H1390H100L114.6-371z"/></g></g></svg>')
    no-repeat right top;
  background-size: 501px;
  border-radius: 1rem;
  box-shadow: ${({ shadowColor, shadowed }) =>
    shadowed
      ? `0 .5rem 1rem ${
          shadowColor ? makeShadowColor(shadowColor, 0.15) : "rgba(0,0,0,.15)"
        }!important`
      : "initial"};
  color: ${({ color }) => color || Colors.BLACK};
  display: flex;
  flex-direction: column;
  height: ${({ height }) => (height ? `${height}px` : "auto")};
  padding: 1rem;
  width: ${({ width }) =>
    width
      ? `${isNaN(Number(width)) ? width : `${width}px`} !important`
      : "auto"};

  @media (min-width: ${Screen.EXTRA_SMALL}) {
    background-position: 115px -238px;
  }

  @media (min-width: ${Screen.SMALL}) {
    background-position: 172px -238px;
  }

  @media (min-width: ${Screen.MEDIUM}) {
    background-position: 144px -238px;
  }

  @media (min-width: ${Screen.LARGE}) {
    width: ${Screen.LARGE} !important;
    background-position: 652px -238px;
  }
`;
