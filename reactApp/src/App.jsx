import Child from './components/Child'
import About from './Pages/About'
import Home from './Pages/Home'
import Skills from './Pages/Skills'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Counter from './components/Counter'
import './App.css'
import Navbar from './components/Navbar'
import Hooks from './Pages/Hooks'
import State from './Hooks/State'
import Effect from './Hooks/Effect'
import Effect2 from './Hooks/Effect2'
import Reducer from './Hooks/Reducer'
import { Route, Routes } from 'react-router-dom'
const App = () => {
  var day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  var users = {username: "Anjana",password:"12345"}
  return (
    <div>
    {/*<Child name="Anjana" phoneno="1234567895" dept="IT"/>
    <Home days={day} users={users} />

    <Contact users={users}/>
    <Counter />*/}
    <Navbar />
    <Routes>
      <Route path='/' element={<Home days={day} users={users}/>} />
      <Route path='/about' element={<About days={day} users={users}/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/skills' element={<Skills/>} />
      <Route path='/child' element={<Child name="Anjana" phoneno="1234567895" dept="IT"/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/hooks' element={<Hooks/>}/>
      <Route path='/state' element={<State/>}/>
      <Route path='/effect' element={<Effect/>}/>
      <Route path='/effect2' element={<Effect2/>}/>
      <Route path='/reducer' element={<Reducer/>}/>
    </Routes>
    </div>
  )
}

export default App

