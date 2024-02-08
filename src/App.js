import logo from './logo.svg';
import './App.css';
import './index.css';

import keyconcept from './assets/images/key-concepts.png'
import events from './assets/images/events.png'
import state from './assets/images/state.png'
import components from './assets/images/components.png'
import BoxComponent from './components/boxComponent';
import Header from './components/Header';


function App() {

  const concepts = [
    {
      title: 'Components',
      image: components,
      description:
        'Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.',
    },
    {
      title: 'State',
      image: state,
      description:
        'State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.',
    },
    {
      title: 'Events',
      image: events,
      description:
        'Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.',
    },
  ];
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
       
       <Header></Header>
   
     {/* <BoxComponent image={concepts[0].image} title={concepts[0].title} description={concepts[0].image}></BoxComponent>
     <BoxComponent image={concepts[1].image} title={concepts[1].title} description={concepts[1].image}></BoxComponent>

     <BoxComponent image={concepts[2].image} title={concepts[2].title} description={concepts[2].image}></BoxComponent> */}


<ul id="concepts">

       <BoxComponent data={concepts[0]}></BoxComponent>
       <BoxComponent data={concepts[1]}></BoxComponent>

       <BoxComponent data={concepts[2]}></BoxComponent>

</ul>

     </div>
  );
}

export default App;
