import { Route, Routes } from "react-router-dom";
import Home from "./comp/Home"
import './App.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import { About } from "./comp/About";
import { Contact } from "./comp/Contact";
import { Navbar } from "./comp/Navbar";
import { Free } from "./comp/Free";
import { useState } from "react";
import Footer from "./comp/Footer";
import { Display } from "./comp/Display";
import FAQPage from "./comp/FAQPage";
import BlogPage from "./comp/BlogPage";
import { Login } from "./comp/pages/Login";
import { Profile } from "./comp/Profile";
import {Signup} from "./comp/Signup";
import { GovermentSchemes } from "./comp/GovermentSchemes";
import CropAdvisory from "./comp/CropAdvisory";
import MarketInformation from "./comp/MarketInformation";
import AgriculturePortal from "./comp/AgriculturePortal";
import KnowledgeHub from "./comp/KnowledgeHub";
import WeatherBlogPage from "./comp/WeatherBlogPage";
const App = (props) => {
  const [downloadModle, setDownloadModle] = useState([]);

  const downloadNowFunc = (items) => {
    const temp = [...downloadModle, items];
    setDownloadModle(temp);
    console.log(downloadModle);
  }

  return (
    <>
      <Navbar />
      <ParallaxProvider>
      <Routes>
        <Route path="/home" element={<Home downloadNow={downloadNowFunc} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/free" element={<Free downloadNow={downloadNowFunc} />}/>
        <Route path="/display" element={<Display downloadNow={downloadModle} />} />
        <Route path="/que" element={<FAQPage />}/>
        <Route path="/blog" element={<BlogPage />}/>
        <Route path="/" element={<Login />}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/profile" element={<Profile />} />
        <Route path="/scehemes" element={<GovermentSchemes />} />
        <Route path="/cropadvisory" element={<CropAdvisory />} />
        <Route path="/marketinfo" element={<MarketInformation />} />
        <Route path="/agriportal" element={<AgriculturePortal />} />
        <Route path="/know" element={<KnowledgeHub />} />
        <Route path="/weather" element={<WeatherBlogPage />} />
        </Routes>
        </ParallaxProvider>
      <Footer/>
    </>
  );
}

export default App;
// environment={"sunset"}