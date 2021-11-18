import logo from './logo.svg';
import './App.css';
import { UseMemo } from './components/UseMemo';
import { UseCallback } from './components/UseCallback';
import { UseRef } from './components/UseRef';
import { FirstIssues } from './components/FirstIssues';
import { SecondIssuesParent } from './components/SecondIssuesParent';

function App() {
  return (
    <div className="App">

      <FirstIssues />
      {/* <SecondIssuesParent /> */}
      {/* <UseRef /> */}
      {/* <UseMemo /> */}
      {/* <UseCallback /> */}
    </div>

  );
}

export default App;
