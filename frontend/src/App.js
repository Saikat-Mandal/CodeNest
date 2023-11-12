import "./App.css";
// import Editor from "./pages/Editor";
import Home from "./pages/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Join from "./pages/Join";
import Editor from "./pages/Editor";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {useGetUserId} from "./hooks/useGetUserId"
function App() {

  const userId = useGetUserId()
console.log(userId);
  return (
    <div>
      {
        userId ? (
       
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/join" element={<Join />} />
           <Route path="/join/:roomId" element={<Editor />} />
           <Route path="*" element={<Navigate to="/" />} />
         </Routes>
        ) : (
          <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        )
      }
    </div>
  );
}

export default App;
