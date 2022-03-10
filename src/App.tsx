import { Outlet } from 'react-router-dom';
import './App.css';
import { WorkspaceSidebar } from './components';

const App = () => {
  return (
    <div className="App-container">
      <WorkspaceSidebar />
      <Outlet />
    </div>
  );
};

export default App;
