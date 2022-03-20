
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';


function App() {
  return (
    <>
    <FontAwesomeIcon icon={faSearch} />
    <FontAwesomeIcon icon={faPerson} />
    <FontAwesomeIcon icon={faHeart} />
    <FontAwesomeIcon icon={faCartShopping} />
      <Header></Header>
    </>
  );
}

export default App;
