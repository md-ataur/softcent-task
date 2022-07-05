import topRightImg from '../src/images/ellipse-right.png';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import OurCustomers from './components/OurCustomers/OurCustomers';
import WhatWeDo from './components/WhatWeDo/WhatWeDo';

function App() {
    return (
        <div className="App">
            <div className="topImg">
                <img src={topRightImg} alt="" />
            </div>
            <Header />
            <Hero />
            <OurCustomers />
            <WhatWeDo />
        </div>
    );
}

export default App;
