//Section Imports
import Header from '../sections/Header.jsx';

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
    <>
    </>
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