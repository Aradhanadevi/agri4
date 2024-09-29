import React from "react";
import { NavLink } from "react-router-dom";
import {
  Box,
  FooterContainer,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "#333", textAlign: "center", margin: "10px 0", fontFamily: "'Roboto', sans-serif", fontSize: "24px", fontWeight: "bold" }}>Agriculture</h1>
      <FooterContainer>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink as={NavLink} to="/about">Aim</FooterLink>
            <FooterLink as={NavLink} to="/about">Vision</FooterLink>
            <FooterLink as={NavLink} to="/about">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink as={NavLink} to="/contact">Soil Health</FooterLink>
            <FooterLink as={NavLink} to="/contact">Disease Management</FooterLink>
            <FooterLink as={NavLink} to="/contact">Irrigation Management</FooterLink>
            <FooterLink as={NavLink} to="/contact">Yield Maximization</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="https://www.linkedin.com/in/aradhanadevi-jadeja-58a10226a" target="_blank">
              <i className="fab fa-linkedin-in"></i>
              <span style={{ marginLeft: "10px" }}>LinkedIn</span>
            </FooterLink>
            <FooterLink href="https://www.youtube.com/@aradhanajadeja5783" target="_blank">
              <i className="fab fa-youtube"></i>
              <span style={{ marginLeft: "10px" }}>YouTube</span>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-facebook-f"></i>
              <span style={{ marginLeft: "10px" }}>Facebook</span>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram"></i>
              <span style={{ marginLeft: "10px" }}>Instagram</span>
            </FooterLink>
          </Column>
          <Column>
            <Heading>Navigate</Heading>
            <FooterLink as={NavLink} to="/que">FAQ</FooterLink>
            <FooterLink as={NavLink} to="/blog">Blog</FooterLink>
          </Column>
        </Row>
      </FooterContainer>
    </Box>
  );
};

export default Footer;
