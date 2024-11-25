import Layout from "../layout/layout";
import SignUp from "../auth/SignUp";
import Login from "../auth/Login";
import Counter from "../components/Counter";


const ROUTES = [
    {
        path :"/counter",
        element:  <Counter/>
    },
    
    {
        path :"/signup",
        element:  <SignUp/>
    },

    {
        path :"/login",
        element:  <Login/>
    },

    {
        path :"/",
        element:  <Login/>
    },

    {
        path :"/movie/",
        element:  <Layout/>,
        Children: [

        ]
    
    }

]

export default ROUTES;