import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MainPage from './component/page/MainPage';
import LoginPage from './component/page/LoginPage';
import JoinPage from './component/page/JoinPage';
import MyPage from './component/page/MyPage';
import PostCreatePage from './component/page/PostCreatePage';
import BoardViewPage from './component/page/BoardViewPage';
import RedirectPage from "./component/page/RedirectPage";


const App = () => {

  return (
    <Router>
      <Routes>
        <Route path='/' element = {<MainPage />} />
        <Route path='/join' element = {<JoinPage />} />
        <Route path='/mypage' element = {<MyPage />} />
        <Route path='/write' element = {<PostCreatePage />} />
        <Route path='/board/:id' element = {<BoardViewPage />} />
        <Route path='/login/oauth2/code' element={<RedirectPage/>}/>
      </Routes>
    </Router>
  );
};

export default App;
