import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLayout from "./Components/layouts/PageLayout";
import Dashboard from "./pages/Dashboard";
import CreateTaskPage from "./pages/createTask";
//import TaskDetails from "./Components/tasks/taskDetails.tsx";
import TaskDetailsPage from "./pages/TaskDetailsPage.tsx";

function App() {
  //const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<PageLayout />}>
                  <Route index element={<Dashboard />} />
                  <Route path="tasks/" element={<CreateTaskPage />} />
                  <Route path="tasks/:id" element={<TaskDetailsPage />} />
              </Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App
