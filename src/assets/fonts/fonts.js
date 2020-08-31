import { createGlobalStyle } from "styled-components";
import LeviafanNormalTTF from "./Leviafan-Normal.ttf";
import TRYGrtskGigaRegular from "./TRYGrtskGigaRegular.otf";
import TRYGrtskGigaBold from "./TRYGrtskGigaBold.otf";

export default createGlobalStyle`
   @font-face {
     font-family: 'Leviafan-Normal';
     src: url(${LeviafanNormalTTF}) format('truetype');
   }
   @font-face {
    font-family: 'TRYGrtskGigaRegular';
    src: url(${TRYGrtskGigaRegular}) format('opentype');
  }
   @font-face {
    font-family: 'TRYGrtskGigaBold';
    src: url(${TRYGrtskGigaBold}) format('opentype');
  }
`;
