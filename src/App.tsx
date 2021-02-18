import { FC } from 'react';
import './App.css';
import 'sanitize.css';
import MainContainer from './MainContainer/MainContainer';

const App: FC = () => {
  return (
    <div className="App">
      <MainContainer />
    </div>
  );
}

export default App;