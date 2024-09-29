import styled from "styled-components";

export const Box = styled.div`
  padding: 5% 2.5%;
  background: #f9f9f9;
  bottom: 0;
  width: 100%;
  font-family: 'Arial', sans-serif;

  @media (max-width: 1000px) {
    padding: 20px 10px;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  background: transparent;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;

  @media (max-width: 768px) {
    margin-left: 30px;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #4a4a4a; /* Darker color for better readability */
  margin-bottom: 10px; /* Reduced space between links */
  font-size: 16px;
  text-decoration: none;
  transition: color 0.2s ease-in;
  font-family: 'Roboto', sans-serif;

  &:hover {
    color: #a0bf5c; /* Vibrant color for hover effect */
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 20px;
  color: #333;
  margin-bottom: 10px; /* Reduced space below headings */
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
`;
