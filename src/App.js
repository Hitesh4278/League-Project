import { Home } from "./pages/Home";
import { Navbar } from "../src/components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FollowPage } from "./pages/FollowPage";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}>
        </Route>
        <Route path="/follow-us" element={ <FollowPage />}>
         
        </Route>

      </Routes>
    </>
  );
}

export default App;
