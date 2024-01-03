import Navbar from './Components/Navbar';
import './App.css';
import Home from './Pages/Home/Home'
import Cricketnews from './Pages/Cricket-news/Cricketnews';
import Educationnews from './Pages/Education-news/Educationnews';
import LoginPage from './Pages/Login-Page/LoginPage'
import Politicsnews from './Pages/Politic_news/Politicsnews';
import {RouterProvider, createBrowserRouter } from 'react-router-dom';
import NewsDetail1 from './Pages/News_Details/1st_News_Detail/NewsDetail1';
import NewsDetail2 from './Pages/News_Details/2nd_News_Detail/NewsDetail2';
import CreateAccount from './Pages/CreateAccountPage/CreateAccount';

function App() {

  const BrowserRouter=createBrowserRouter([
    {path:'/',element:<Navbar />,
    children:[{index:true,element:<Home />},
    {path:'cricket_news',element:<Cricketnews />},
    {path:'education_news',element:<Educationnews />},
    {path:'Politics_news',element:<Politicsnews />},
    {path:'LoginPage',element:<LoginPage />},
    {path:'CreateAccount',element:<CreateAccount />},
    {path:'News_Detail_1',element:<NewsDetail1 />},
    {path:'News_Detail_2',element:<NewsDetail2 />}
  ]}
  ])
  return (
    <>
    <RouterProvider router={BrowserRouter}/>  
    </>
  );
}

export default App;
