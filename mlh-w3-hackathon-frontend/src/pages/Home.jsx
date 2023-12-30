//Section Imports
import Header from '../sections/Header.jsx';
import TitledImage from '../sections/TitledImage.jsx';
import contractIcon from "../assets/contracticon.png";
import stockIcon from "../assets/stockicon.png";
import talkingIcon from "../assets/talkingicon.png";

function Home() {

    return (
      <>
        <Header/>
        <HomeBanner/>
        <HomeWhy/>
      </>
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