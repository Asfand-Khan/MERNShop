import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import Homescreen from "./screens/Homescreen";

function App() {
  return (
    <>
      <Header />
      <main>
        <Container className="text-center py-3">
          <Homescreen />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
