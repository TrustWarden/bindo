import Container from "./components/Container";
import HeaderLanding from "./components/HeaderLanding";
import Landing from "./components/Landing";

function App() {
  return (
    <div className="bg-landing max-h-screen">
      <HeaderLanding />
      <Container>
        <Landing />
      </Container>
    </div>
  );
}

export default App;
