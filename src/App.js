import React from 'react';
import './App.css';
import { DATA, EXHIBITS, MAPPINGS } from './data.js';

// TODO Should visiting each variant be handled separately?
// TODO Add debug functions
function App() {
  // Store visited state globally.
  const [checked, setChecked] = React.useState(new Set(JSON.parse(localStorage.getItem('visited'))));
  const toggleEntry = (id) => {
    const newChecked = new Set(checked);
    if (newChecked.has(id)) {
      newChecked.delete(id);
    } else {
      newChecked.add(id);
    }

    localStorage.setItem("visited", JSON.stringify([...newChecked]));
    setChecked(newChecked);
  }

  const exhibits = EXHIBITS.filter(ex => MAPPINGS[ex].length);
  const elements = exhibits.map((ex) => {
    const entries = MAPPINGS[ex].sort((a, b) => {
      const aEntry = DATA[a.id];
      const bEntry = DATA[b.id];
      return aEntry.name.localeCompare(bEntry.name);
    }).map(exhibitEntry => {
      const entry = DATA[exhibitEntry.id];
      return (
        <Entry
          checked={checked.has(entry.id)}
          data={entry}
          toggleEntry={toggleEntry}
          variants={exhibitEntry.variants}
          key={entry.id}
        />
      )
    });
    return (
      <Exhibit
        name={ex}
        entries={entries}
        key={ex}
      />
    )
  });

  return (
    <div>
      <div className="header">
        <img className="header__monterey" src="assets/monterey.png" />
        <img className="header__blathers" src="assets/blathers-full.png" />
      </div>
      {elements}
    </div>
  );
}

const Exhibit = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="exhibit">
      <div className="exhibit__header" onClick={() => setIsOpen(!isOpen)}>
        {props.name}
        <img className={`caret ${isOpen ? "flipped" : ""}`} src="assets/caret.svg" />
      </div>
      <div className={`exhibit__contents ${isOpen ? "open" : ""}`}>
        {props.entries}
      </div>
    </div>
  )
}

const Entry = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleVisit = (e) => {
    props.toggleEntry(props.data.id);
    e.stopPropagation();
  };

  return (
    <div className="entry">
      <div className="entry__header" onClick={() => setIsOpen(!isOpen)}>
        <img className="entry__image" src={`assets/entries/${props.data.icon}`} />
        {props.data.name}
        <div className="entry__spacer" />
        <button className="entry__button" onClick={toggleVisit}>
          {props.checked && <img src="assets/logo.png" />}
        </button>
      </div>
      <div className={`entry__blurb ${isOpen ? "open" : ""}`}>
        <div className="entry__joke">{props.data.joke}</div>
        <div className="entry__blathers">
          <img className="blathers" src="assets/blathers.png" />
          <span>
            {props.data.blurb}
          </span>
        </div>
        {props.variants && <div className="entry__variants">(In this exhibit: {props.variants})</div>}
      </div>
    </div>
  );
}


export default App;
