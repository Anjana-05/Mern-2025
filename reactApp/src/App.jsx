import Child from './components/Child'
import About from './Pages/About'
import Home from './Pages/Home'
import Skills from './Pages/Skills'
import Contact from './Pages/Contact'
import './App.css'
const App = () => {
  var day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  var users = {username: "Anjana",password:"12345"}
  return (
    <div>
    <Child name="Anjana" phoneno="1234567895" dept="IT"/>
    <Home days={day} users={users} />
    </div>
  )
}

export default App

