import "./components/reset.css";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import beastData from "./data.json";
console.log(beastData);

function App() {
  return (
    <div className="App">
      <Header />
      <Main beastData={beastData} />
      <Footer />
    </div>
  );
}

export default App;
