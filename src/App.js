//import logo from './logo.svg';
import './App.css';
//Get homepage component to main component
import HomePage from './pages/homepage/homepage.component';
import {Route} from 'react-router-dom';
import Header from './components/header/header.component'
import ArticlePage from './pages/article-page/article-page.component';
//13th line i gave <HomePage/> 

//RENDERING
function App() {
  return (
    <div>
      
      <Header/> 
      
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/news" component={ArticlePage}/>
      
    </div>
  );
}

export default App;