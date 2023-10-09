import {useState} from 'react'
import Sidebar from "./components/sidebar"
import Dashboard from "./components/Dashboard"
import Create from "./components/Create"
import Edit from "./components/Edit"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  let [data,setData] = useState([
    {
      name : "Ajith",
      username : "ajith123",
      email : "ajith@gmail.com",
      mobile: "1234567890",
      batch : "B500",
    },
    {
      name : "Kumar",
      username : "kum123",
      email : "kumar@gmail.com",
      mobile: "6789054321",
      batch : "B501",
    }
  ])
 return <>
 <div id="wrapper">
    <BrowserRouter>
    <Sidebar />
          <Routes>\
            <Route path='/dashboard' element={<Dashboard data={data}/>}/>
            <Route path='/create' element={<Create/>}/>
            <Route path='/edit' element={<Edit/>}/>
          </Routes>
    </BrowserRouter>
 
 </div>
 </>
}

export default App
