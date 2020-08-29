import { createGlobalStyle } from "styled-components";
import LeviafanNormalTTF from "./Leviafan-Normal.ttf";

export default createGlobalStyle`
   @font-face {
     font-family: 'Leviafan-Normal';
     src: url(${LeviafanNormalTTF}) format('truetype');
   }
`;
