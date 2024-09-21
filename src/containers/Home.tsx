import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import home from "./home.module.css"

function Home() {
  return (
    <>
      <div className={home.home}>
        <Header />
        <Sidebar />
        <Footer />
      </div>
      
    </>
  );
}

export default Home;
