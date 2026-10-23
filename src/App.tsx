import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLayout from "./Components/layouts/PageLayout";
import Dashboard from "./pages/Dashboard";
import CreateTaskPage from "./pages/createTask";

function App() {
  //const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<PageLayout />}>
                  <Route index element={<Dashboard />} />
                  <Route path="tasks/" element={<CreateTaskPage />} />
              </Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App
