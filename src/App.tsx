import Auth from './features/Auth/Auth';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './features/Auth/Login/Login';
import Register from './features/Auth/Register/Register';
import AddBook from './features/BookRsv/BookAdding/AddBook';
import Footer from './Shared/Footer';
import Main from './features/Main/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App"></div>
      <Switch>
        <Route exact path="/" component={Main}></Route>
        <Route exact path="/auth" component={Auth} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/addBook" component={AddBook} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
