import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Header />
      <main>
        <Container className="text-center py-3">
          <h1>welcome to mern shop</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
