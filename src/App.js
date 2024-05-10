import './App.css';
import NavbarComponent from './components/Navbar';
import Header from './components/Header';
import Users from './components/Users';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Header />
      <Users />
    </div>
  );
}

export default App;
