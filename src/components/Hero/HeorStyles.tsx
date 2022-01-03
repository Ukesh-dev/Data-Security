import styled from "styled-components";
import { Button } from "../../GlobalStyles";

export const HeroSection = styled.section`
  min-height: 100vh;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  padding-top: clamp(100px, 25vh, 10rem);
  box-shadow: inset 0 0 0 1000px rgba (0, 0, 0, 0.2);
`;

export const HeroVideo = styled.video`
  object-fit: cover;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
  top: 0;
  position: absolute;
  z-index: -1;
`;

export const HeroText = styled.p`
  margin-bottom: 35px;
  font-size: clamp(0.9rem, 1.5vw, 1.3rem);
  line-height: 1.3;
  text-align: center;
  letter-spacing: 2px;
  color: #ffffff;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  gap: 0.5rem;
`;

export const HeroButton = styled(Button)`
  color: black;
  /* border-style: none; */
  /* border: 1px solid #fff; */
  outline: none;
  &:before {
    background: #fff;
    /* background: none; */
    height: 800%;
  }
  &:hover:before {
    height: 0%;
  }
  &:hover {
    color: white;
  }
`;
