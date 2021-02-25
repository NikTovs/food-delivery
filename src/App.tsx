import { FC } from 'react';
import './App.css';
import 'sanitize.css';
import ContentWrapper from './components/ContentWrapper/ContentWrapper';

const App: FC = () => {
  return (
    <div className="App">
      <ContentWrapper />
    </div>
  );
}

export default App;