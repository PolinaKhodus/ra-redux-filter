import './App.css';

import ServiceAdd from './components/ServiceAdd';
import ServiceList from './components/ServiceList';

function App() {

  return (
    <>
      <div className="task-title">Filter</div>
      <ServiceAdd />
      <ServiceList />
    </>
  );
}

export default App;
