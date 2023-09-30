import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ArticlesPage from './Pages/ArticlesPage';
import ArticlePage from './Pages/ArticlePage';
import NotFoundPage from "./Pages/NotFoundPage";
import LoginPage from "./Pages/LoginPage";
import useUser from "./hooks/useUser";
import CreateAccountPage from "./Pages/CreateAccountPage";

function App() {
    const { user, isLoading } = useUser();
    console.log("user: ", user);
    return (
      <BrowserRouter>
          <div className='App'>
              <NavBar />
              <h1>My Awesome Blog</h1>
              <div id='page-body'>
                  <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/about" element={<AboutPage />} />
                      <Route path="/articles" element={<ArticlesPage />} />
                      <Route path="/articles/:articleId" element={<ArticlePage />} />
                      <Route path="/login" element={<LoginPage />} />
                      <Route path="/register" element={<CreateAccountPage />} />
                      <Route path="*" element={<NotFoundPage />} />
                  </Routes>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
