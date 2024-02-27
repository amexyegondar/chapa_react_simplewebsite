import About from './components/About.jsx';
import Donate from './components/Donate.jsx';
import Navbar from './components/Navbar.jsx';
import Thanks from './components/Thanks.jsx';


function App() {
  return (
    <div>
      <div className='bg-purple-600  fixed w-screen ' >
        <Navbar />
      </div>
      
        <div className='w-screen h-screen   flex justify-center items-center ' id='donate'>
        <Donate/>
        </div>
        <div className='w-screen h-screen   flex justify-center items-center' id='about'>
       <About/>
        </div>
        <div className='w-screen h-screen  flex justify-center items-center' id='thanks'>
         <Thanks/>
        </div>
      
    </div>
  );
}

export default App;
