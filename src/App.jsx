import './App.css';
import CardContainer from './components/CardContainer';
import Header from './components/Header';

function App() {
  
  return (
    <div className='flex flex-col w-full h-screen'>
      <Header/> 
      <CardContainer/>   
    </div>
  );
}

export default App
