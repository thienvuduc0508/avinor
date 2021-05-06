import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NewsList from './components/Pages/NewsList/NewsList';
import NotFound from './components/Pages/NotFound/NotFound';
const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        {/* <Route path='/news/:airCode' component={NewsList}/> */}
        <Route path='/404' component={NotFound}/>
      </Switch>
      <Footer />
    </Router>
  );
}
export default App;
