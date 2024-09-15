import { useState } from 'react'
import './App.css';
import MapIndia from './MapIndia';
import {BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Rajastan from './components/states/Rajastan';
import Maharashtra from './components/states/Maharasthra';
import TamilNadu from './components/states/TamilNadu';
import Up from './components/states/Up';
import Mp from './components/states/Mp';
import Kerala from './components/states/Kerala';
import Gujarat from './components/states/Gujarat';
import './index.css'
import HomePage from './pages/HomePage';
import KnowIndia from './pages/KnowIndia';
import Post from './components/Blogging/Post';
import Blogpage from './compounds/Blogpage';
import Signup from './validation/Signup';
import MakeIndia from './pages/MakeIndia';
import MainBlogs from './compounds/MainBlogs';
import Cartpost from './components/MeraCart/Cartpost';
import OrderCart from './components/MeraCart/OrderCart';
import Ref from './pages/Ref';



// const STATES = {
//   Maharashtra: {

//   }
// };

function App() {

  // const [activeState,setActiveState]=useState({
  //   data: STATES.Maharashtra,
  //   name: "India"
  // })
  // const [stateLists, newStateLists] = useState(STATES)
 // style={{position:'relative',right:'5%',margin:"0%",padding:"0%"}}



  return (
    <>
      <Router>
        <Routes>
        <Route path='/ref' element={<Ref />}></Route>
        <Route path='/'  element={<HomePage />}></Route>
          <Route path='/map'  element={<MapIndia  />}></Route>
          <Route path='/Rajasthan'  element={<Rajastan/>}></Route>
          <Route path='/Maharashtra' element={<Maharashtra/>}></Route>
          <Route path='/TamilNadu' element={<TamilNadu/>}></Route>
          <Route path='/Kerala' element={<Kerala/>}></Route>
          <Route path='/MadhyaPradesh' element={<Mp/>}></Route>
          <Route path='/UttarPradesh' element={<Up/>}></Route>
          <Route path='/KnowIndia' element={<KnowIndia/>}></Route>
          <Route path='/Post' element={<Post />}></Route>
          <Route path="/blog/:id" element={<Blogpage />}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/Make-in-India' element={<MakeIndia/>}></Route>
          <Route path='/blogs' element={<MainBlogs />}></Route>
          <Route path='/MyBusiness' element={<Cartpost />}></Route>
          <Route path='/orderCart' element={<OrderCart />}></Route>
        </Routes>

      </Router>

    </>
  )
}

export default App
