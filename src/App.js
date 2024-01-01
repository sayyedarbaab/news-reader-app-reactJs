import Navbar from './Components/Navbar';
import './App.css';
import Home from './Pages/Home/Home'
import Cricket_news from './Pages/Cricket-news/Cricket_news';
import Education_news from './Pages/Education-news/Education_news'
import LoginPage from './Pages/Login-Page/LoginPage'
import Politics_news from './Pages/Politic_news/Politics_news'
import {RouterProvider,Routes, createBrowserRouter } from 'react-router-dom';
import News_Detail_1 from './Pages/News_Details/1st_News_Detail/News_Detail_1';
import News_Detail_2 from './Pages/News_Details/2nd_News_Detail/News_Detail_2';

function App() {

  const BrowserRouter=createBrowserRouter([
    {path:'/',element:<Navbar />,
    children:[{index:true,element:<Home />},
    {path:'cricket_news',element:<Cricket_news />},
    {path:'education_news',element:<Education_news />},
    {path:'Politics_news',element:<Politics_news />},
    {path:'LoginPage',element:<LoginPage />},
    {path:'News_Detail_1',element:<News_Detail_1 />},
    {path:'News_Detail_2',element:<News_Detail_2 />}
  ]}
  ])
  return (
    <>
    <RouterProvider router={BrowserRouter}/>  
    </>
  );
}

export default App;
