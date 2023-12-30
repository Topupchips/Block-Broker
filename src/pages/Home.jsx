import "./Home.css";

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
        <h2>Lorem Ipsum Dolor Amet Aenean blandit, massa a viverra!</h2>
        <button>Get Started</button>
      </div>
    </div>
  );

}

function HomeAbout(){

  let aboutHeading = "Our Mission";
  let aboutParagraph = "Donec eu porta turpis. Aenean blandit, massa a viverra dictum, purus erat aliquet turpis, quis eleifend purus nunc ac erat. Nam pharetra turpis sit amet lacinia aliquet. Vestibulum at placerat odio. Sed ex nisi, semper eget metus non, dapibus feugiat est. Integer nec condimentum elit. Mauris lobortis, nisl eget euismod porta, ex velit faucibus lacus, ut lobortis turpis lectus id risus. Praesent laoreet a velit sed elementum. ";

  return (
    <div className="HomeAbout">
      <Card imgUrl={aboutImage} imgAlt="image of blocks" heading={aboutHeading} paragraph={aboutParagraph}/>
    </div>
  );
}
  
function HomeWhy(){
  return (
    <div className="HomeWhy">
      <h2 className="whyHeading">Why Your Contract is Right for You</h2>
      <div className='foldoutContainer'>
          <TitledImage 
            title="Lorem Ipsum" 
            imgUrl={contractIcon} 
            alt='tbd' 
            compId='why1'
            description ="Etiam a risus at ipsum elementum convallis. Phasellus efficitur."
          />
          <TitledImage 
            title="Lorem Ipsum"
            imgUrl={stockIcon}
            alt='tbd'
            compId='why2'
            description ="Etiam a risus at ipsum elementum convallis. Phasellus efficitur."
          />
          <TitledImage
            title="Lorem Ipsum"
            imgUrl={talkingIcon}
            alt='tbd'
            compId='why3'
            description ="Etiam a risus at ipsum elementum convallis. Phasellus efficitur."
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h1>
        <button className='HomeBannerButton'>
          Get Started
        </button>
      </div>
    </div>
  );
}
  
  
  
  export default Home