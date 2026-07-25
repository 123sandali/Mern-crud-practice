import { Route, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import CreatePage from "./pages/CreatePage"
import NoteDetailPage from "./pages/NoteDetailPage"
//import toast from "react-hot-toast"

function App() {
 
  return (
    <>
      {/* example for toast->  
      <button onClick={()=>toast.success("congrats")} className="text-red-500 p-4 bg-pink-300 bg"> click me</button> */}
      <div data-theme="forest">
      <Routes>
        <Route path ="/" element={<HomePage/>}/>
        <Route path ="/create" element={<CreatePage/>}/>
        <Route path ="/note/:id" element={<NoteDetailPage/>}/>
      </Routes>
      </div>
      
      
    </>
  )
}

export default App
