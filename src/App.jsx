// ------------------------------------------
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card/Card.jsx";
import Button from "./Button/Button.jsx";
import Student from "./Student/Student.jsx";
// ------------------------------------------

import UserGreeting from "./UserGreeting.jsx";

// ------------------------------------------

import List from "./List.jsx";

// ------------------------------------------

function App() {
  return (
    <>
      {/* Components */}
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
      {/* Conditional rendering */}
      <UserGreeting isLoggedIn={true} username="kestulka" />
      <UserGreeting />
      {/* Render Lists */}
      return(
      <List items={fruits} category="Fruits" />)
    </>
  );
}

export default App;
