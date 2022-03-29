import './App.css';
import AddEvents from './components/AddEvents/Add.Events';
import AddEvents2 from './components/AddEvents/AddEvents2';
import EventBind from './components/eventBinding/EventBind';
import Form from './components/form/Form';
import Form2 from './components/form/Form';
import KeyboardEvents from './components/keyboardEvents/KeyboardEvents';
import MouseEvents from './components/mouseEvents/MouseEvents';
import MouseEvents2 from './components/mouseEvents/MouseEvents2';

function App() {
  return (
    <div className="App">
      <h1>Events in React Js</h1>
      {/* <AddEvents /> */}
      {/* <MouseEvents /> */}
      {/* <Form /> */}
      {/* <KeyboardEvents /> */}
      {/* <EventBind /> */}

      {/* <AddEvents2 /> */}
      {/* <MouseEvents2 /> */}
      <Form2 />

    </div>
  );
}

export default App;
