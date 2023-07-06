
import NavbarComp from '../components/Navigation'
import TabsComp from '../components/Tabs'
import FooterComp from '../components/FooterComp';


function HomePage() {
  return (

    <div className="Homepage">
        <NavbarComp />
            <br/>
        <TabsComp />
            <br/>
        <FooterComp />
            </div>
  );
}

export default HomePage;
