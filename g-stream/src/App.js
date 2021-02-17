import './App.css';
import Body from './Body/Body';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      <Header />
      <div className='app__main'>
        <Sidebar />
        <Body />
      </div>
    </div>
  );
}

export default App;
