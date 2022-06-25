import logo from "./logo.svg";
import "./App.css";

const getReviews = () => {
  const data = fetch(
    `https://mybusiness.googleapis.com/v4/accounts/6874287982/locations/ChIJNVyMGnhT4joRMj4VSn0hLak/reviews`
  )
    .then((response) => response.json())
    .then((data) => console.log(data));
};

function App() {
  return (
    <div className="App">
      <button onClick={getReviews}>Click me</button>
    </div>
  );
}

export default App;
