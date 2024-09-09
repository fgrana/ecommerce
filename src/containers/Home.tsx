import Header from './Header/Header';
import Body from './Body/Body'
import Sidebar from './Sidebar/Sidebar';

function Home(){
   return (
    <div className='container'>
     <Header/>
     <Sidebar />
     <Body />
     <p>footer</p>
    </div>
    );
};

export default Home