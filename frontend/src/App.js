import "./App.css";
// import Editor from "./pages/Editor";
import Home from "./pages/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Join from "./pages/Join";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {useGetUserId} from "./hooks/useGetUserId"
import EditorPage from "./pages/EditorPage";
function App() {

  const userId = useGetUserId()

  return (
    <div>
      {
        userId ? (
       
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/join" element={<Join />} />
           <Route path="/join/:roomId" element={<EditorPage />} />
           <Route path="*" element={<Navigate to="/" />} />
         </Routes>
        ) : (
          <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/register" element={<Register/>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        )
      }
    </div>
  );
}

export default App;
