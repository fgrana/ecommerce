import Footer from "../containers/Footer/Footer";
import Header from "../containers/Header/Header";
import Sidebar from "../containers/Sidebar/Sidebar";
import PokemonProjectStyles from "./PokemonProject.module.css"

function PokemonProject() {
  return (
    <>
      <div className={PokemonProjectStyles.PokemonProject}>
        <Header />
        <Sidebar />
        <Footer />
      </div>
      
    </>
  );
}

export default PokemonProject;
