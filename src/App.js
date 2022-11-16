import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";

import Servers from "./components/Servers";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      {/* Header */}
      <Header />
      {/* MainContent */}
      <Servers />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
