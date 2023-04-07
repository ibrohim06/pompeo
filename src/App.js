import "./App.css";
import Footer from "./page/Footer/Footer";
import Category from "./page/category";
import Feedback from "./page/fb/feedback";
import Navbar from "./page/navbar";
import News from "./page/news/news";
import Product from "./page/product";
import Showcase from "./page/showcase";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Showcase />
      <Category />
      <Product />
      <Feedback />
      <News />
      <Footer />
    </div>
  );
}

export default App;
