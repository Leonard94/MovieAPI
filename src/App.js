import './App.css';
import Header from './components/Header/Header'
import TopContainer from './components/Top/TopContainer'
import SearchContainer from './components/Search/SearchContainer'
import Saved from './components/Saved/Saved'
import AboutMovieContainer from './components/AboutMovie/AboutMovieContainer'
import {Route } from 'react-router-dom';




function App() {
  return (
    <div>
        <Header />
        <Route path='/' exact component={TopContainer} />
        <Route path='/search' component={SearchContainer} />
        <Route path='/saved' component={Saved} />
        <Route path='/about/:id' component={AboutMovieContainer} />
    </div>
  );
}

export default App;
