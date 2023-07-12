import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import { Words } from './Words';

function App() {
  return (
    <div className="layout">
      <Header />
      <main>{Words.mainContent}</main>
      <Footer/>
    </div>
  );
}

export default App;
