import logo from "./logo.svg";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import TodoList from "./TodoList";
import Error from "./Error";

function App() {
  // 경로 설정
  let router = createBrowserRouter(
    [
      {
        path: "/",
        element: <TodoList />,
        errorElement: <Error />,
      },
    ],
    {
      basename: "/",
    }
  );
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
