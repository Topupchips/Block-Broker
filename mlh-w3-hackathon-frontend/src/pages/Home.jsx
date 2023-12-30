//Section Imports
import Header from '../sections/Header.jsx';
import TitledImage from '../sections/TitledImage.jsx';
import testImg from "../assets/aeee5775-208f-43da-a5e2-cf109c564c8a.jpeg";

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
          <TitledImage title="Lorem Ipsum" imgUrl={testImg} alt='tbd' compId='why1'/>
          <TitledImage title="Lorem Ipsum" imgUrl={testImg} alt='tbd' compId='why2'/>
          <TitledImage title="Lorem Ipsum" imgUrl={testImg} alt='tbd' compId='why3'/>
          <TitledImage title="Lorem Ipsum" imgUrl={testImg} alt='tbd' compId='why4'/>
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