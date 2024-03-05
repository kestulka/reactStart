import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card/Card.jsx";
import Button from "./Button/Button.jsx";
import Student from "./Student/Student.jsx";

function App() {
  return (
    <>
      <Header />
      <Food />
      <Footer />
      <Card />
      <Card />
      <Card />
      <Button />
      <Student name="Squidward" age={55} isStudent={false} />
      <Student name="Patrick" age={36} isStudent={false} />
      <Student name="Spongebob" age={30} isStudent={true} />
      <Student name="Sandy" age={27} isStudent={true} />
      <Student />
      <Student name="Crab" />
    </>
  );
}

export default App;
