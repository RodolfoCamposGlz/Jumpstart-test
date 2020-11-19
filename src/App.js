import './App.css';
import{Card} from './components/Card/Card'
import {GlobalStyle,typeScale} from './utils'
function App() {
  return (
    <div className="app-container">
      <Card
      header="Default State"
      menu={false}
      title="Corporate Bylaws"
      description="An internal document that details the operating rules for the corporation and are typically adopted at the organizational meeting of the board of directors."
      />
      <Card
      header="Hover State"
      menu={true}
      title="Corporate Bylaws"
      description="An internal document that details the operating rules for the corporation and are typically adopted at the organizational meeting of the board of directors."
      />
    <GlobalStyle/>
    </div>
  );
}

export default App;

