import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Error from "./pages/Error";

function App() {
  return (
    <Routes>
      <Route path='/'>
        <Route index element={<Home />} />
        <Route path='quiz' element={<Quiz />} />
        <Route path='*' element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
