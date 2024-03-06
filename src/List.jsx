function List(props) {
  const itemList = props.items;
  const category = props.category;

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

  // Alphabetical
  //   fruits.sort((a, b) => a.name.localeCompare(b.name));

  // Reverse Alphabetical
  //   fruits.sort((a, b) => b.name.localeCompare(a.name));

  // Numeric
  fruits.sort((a, b) => a.calories - b.calories);

  // Reverse Numeric
  //   fruits.sort((a, b) => b.calories - a.calories);

  //   const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);
  //   const highCalFruits = fruits.filter((fruit) => fruit.calories > 100);

  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name}: &nbsp; <b>{item.calories}</b>
    </li>
  ));

  //   const listItems = highCalFruits.map((highCalFruit) => (
  //     <li key={highCalFruit.id}>
  //       {highCalFruit.name}: &nbsp; <b>{highCalFruit.calories}</b>
  //     </li>
  //   ));

  return (
    <>
      <h3>{category}</h3>
      <ol>{listItems}</ol>
    </>
  );
}
export default List;
