import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero.jsx';
import Join from './components/Join/Join';
import Plans from './components/Plans/Plans.jsx';
import Programs from './components/Programs/Programs.jsx';
import Reasons from './components/Reasons/Reasons';
import Testimonials from './components/Testimonials/Testimonials';
function App() {
  return (
    <div className="App">
         <Hero/>
         <Programs/>
         <Reasons/>
         <Plans/>
         <Testimonials/>
         <Join/>
         <Footer/>
    </div>
  );
}

export default App;
