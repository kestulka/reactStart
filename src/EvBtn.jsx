function EventButton() {
  const handleClick = (event) => (event.target.textContent = "poof");

  return <button onClick={(event) => handleClick(event)}>Click me</button>;

  // let count = 0;
  // const handleClick = (name) => {
  //   if (count < 3) {
  //     count++;
  //     console.log(`${name} you clicked me ${count} times`);
  //   } else {
  //     console.log(`${name} stop clicking me`);
  //   }
  // };

  // return <button onClick={() => handleClick("sigmis")}>Click me</button>;
}

export default EventButton;
