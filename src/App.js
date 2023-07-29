import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import SideMenu from './components/sidemenu/SideMenu';

function App() {
  return (
    <div className="App">
      <div className='row'>
        <div className='col-md-9'>

        </div>
        <div className='col-md-3'>
          <SideMenu/>
        </div>
      </div>
    </div>
  );
}

export default App;
