import { Routes, Route } from 'react-router-dom';
import PokemonProject from './pages/PokemonProject';


function App() {
  return(
  <>
         <Routes>
            <Route path="/" element={<PokemonProject />} />
         </Routes>
      </>
  )
}

export default App
