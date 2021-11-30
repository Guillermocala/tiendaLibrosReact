import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Routes from "./routes";
import CartContextProvider from './contexts/CartContex';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <CartContextProvider>
      <Router>
        <Header/>
        <div className="container">
          <Routes />
        </div>
      </Router>
    </CartContextProvider>
  );
}
export default App;