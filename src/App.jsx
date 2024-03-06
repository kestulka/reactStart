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
  const fruits = [
    { id: 1, name: "Orange", calories: 50 },
    { id: 2, name: "Kiwi", calories: 60 },
    { id: 3, name: "Melon", calories: 65 },
    { id: 4, name: "Strawberries", calories: 30 },
    { id: 5, name: "Pineapple", calories: 50 },
    { id: 6, name: "Apple", calories: 120 },
    { id: 7, name: "Banana", calories: 105 },
    { id: 8, name: "Grapes", calories: 69 },
    { id: 9, name: "Watermelon", calories: 130 },
    { id: 10, name: "Peach", calories: 110 },
  ];

  const vegetables = [
    { id: 1, name: "Carrot", calories: 41 },
    { id: 2, name: "Broccoli", calories: 31 },
    { id: 3, name: "Spinach", calories: 23 },
    { id: 4, name: "Cucumber", calories: 16 },
    { id: 5, name: "Bell Pepper", calories: 31 },
    { id: 6, name: "Tomato", calories: 18 },
    { id: 7, name: "Onion", calories: 40 },
    { id: 8, name: "Lettuce", calories: 15 },
    { id: 9, name: "Zucchini", calories: 17 },
    { id: 10, name: "Mushroom", calories: 22 },
  ];

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
      {fruits.length > 0 && <List items={fruits} category="Fruits" />}
      {vegetables.length > 0 && (
        <List items={vegetables} category="Vegetables" />
      )}
      {/* jei listas butu tuscias, jo nerenderintu (short circuiting) */}
    </>
  );
}

export default App;
