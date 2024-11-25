import Counter from "./components/Counter"
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import ROUTES from "./route/router"


const router = createBrowserRouter([...ROUTES]);


function App() {

  return(
    <>
    <RouterProvider router={router}/>
    </>
  )

}

export default App
