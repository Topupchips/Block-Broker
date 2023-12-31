import "./Home.css";
import { HashLink as Link } from 'react-router-hash-link';


//Section Imports
import Header from '../sections/Header.jsx';
import TitledImage from '../sections/TitledImage.jsx';
import Card from "../sections/Card.jsx";

//Image Imports
import contractIcon from "../assets/contracticon.png";
import stockIcon from "../assets/stockicon.png";
import talkingIcon from "../assets/talkingicon.png";
import aboutImage from "../assets/aboutimage.jpeg";

function Home() {

    return (
      <>
        <Header/>
        <HomeBanner/>
        <div className="homeCombinedBackground">
          <HomeWhy/>
          <HomeAbout/>
        </div>
        <HomeCTA/>
      </>
    );
}

function HomeCTA(){
  return (
    <div className='HomeCTA'>
      <div className="bannerCtaTextWrapper">
        <h2>Take the first step towards breaking down your blockers!</h2>
        <Link to="/contracts#contractstop"><button>Get Started</button></Link>
      </div>
    </div>
  );

}

function HomeAbout(){

  let aboutHeading = "Our Mission";
  let aboutParagraph = "The inspiration behind Block Broker stems from a vision to revolutionize the freelance industry by leveraging blockchain technology. We aim to create a decentralized platform that empowers freelancers, connects clients with top talent, and eliminates the need for intermediaries.";

  return (
    <div className="HomeAbout" id="about">
      <Card imgUrl={aboutImage} imgAlt="image of blocks" heading={aboutHeading} paragraph={aboutParagraph}/>
    </div>
  );
}
  
function HomeWhy(){
  return (
    <div className="HomeWhy">
      <h2 className="whyHeading">How <span className="inlineLogo">block broker</span> can help you</h2>
      <div className='foldoutContainer'>
          <TitledImage 
            title="Quick Fund Transfer" 
            imgUrl={contractIcon} 
            alt='tbd' 
            compId='why1'
            description ="With every transaction being handled by a smart contract, fund are quickly tansfered once a contract is approved."
          />
          <TitledImage 
            title="No Middleman Means More Money"
            imgUrl={stockIcon}
            alt='tbd'
            compId='why2'
            description ="With all transactions being handled by smart contracts, the only fees are the gas needed to power the transaction."
          />
          <TitledImage
            title="Connect with a Community"
            imgUrl={talkingIcon}
            alt='tbd'
            compId='why3'
            description ="Connect with businesses and freelancers and build a patnership without having to worry about non-competes."
          />
      </div>
    </div>
  );
}
  
function HomeBanner(){

  return (
    <div className="HomeBanner">
      <div className='HomeBannerCTA'>
        <h1 className='HomeBannerText'>
        Breaking down blockers between freelancers
        </h1>
        <Link to="/contracts#contractstop">
          <button className='HomeBannerButton'>
          Get Started
          </button>
        </Link>
        
      </div>
    </div>
  );
}
  
  
  
  export default Home