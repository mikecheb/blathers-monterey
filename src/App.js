import React from 'react';
import './App.css';

const DATA = {
  clownfish: {
    id: "clownfish",
    name: "Clown Fish",
    icon: "NH-Icon-clownfish.png",
    joke: "I caught a clown fish! How many can fit in a carfish?",
    blurb: "Few can deny the delightful qualities of the clown fish. These vibrant fishes make their home among venomous anemones. It's a mutually beneficial arrangement. The clown fish finds safety in the anemone's wriggling arms, as well as leftover scraps of food. In return, clown fish ward off parasites and predators for the anemone. Thus these colorful fish remind us of the importance of maintaining good cheer among our roommates.",
  },
  anchovy: {
    id: "anchovy",
    name: "Anchovy",
    icon: "NH-Icon-anchovy.png",
    joke: "I caught an anchovy! Stay away from my pizza!",
    blurb: <span>There are more than 140 species of anchovy, but they do all have some things in common. They are all small and feed by simply swimming with heir mouths open to filter food particles from the sea. <small>In my sleepier moments, I sometimes wish I could do that...</small></span>,
  },
  giantisopod: {
    id: "giantisopod",
    name: "Giant Isopod",
    icon: "Giant_Isopod_NH_Icon.png",
    joke: <span><big>GAAAAH!</big> I got a giant isopod! It's the crustodian of the sea.</span>,
    blurb: <span>Growing up to neatly 20 inches, the sea-dwelling giant isopod is the world's largest cousin of the pill bug. <small>Twenty inches?! Twenty times as revolting, I say!</small> Making matters worse for those of us who find the pill bug repulsive rather than "cute"... The giant isopod can swim shockingly fast and is known for its voracious appetite. In fact, it's most happy when dining on the carcasses of animals that have sunk to the bottom of the sea! This behavior has earned it a nickname..."the vacuum cleaner of the deep." <small>Why must nature play such awful pranks on me?</small></span>,
  },
  hammerhead: {
    id: "hammerhead",
    name: "Hammerhead Shark",
    icon: "Hammerhead_Shark_NH_Icon.png",
    joke: "I caught a hammerhead shark! I hit the nail on the head!",
    blurb: "The hammerhead shark is known for its distinctive, hammer-shaped head, hence the name. Er, obviously. Anyhoot, this oddly shaped head allows the beast to see 360 degrees around itself, from top to bottom. Imagine being able to see so widely! You could check for untied shoelaces AND imminent rain simultaneously!",
  },
  moonjelly: {
    id: "moonjelly",
    name: "Moon Jellyfish",
    icon: "NH-Icon-moonjellyfish.png",
    joke: "I got a moon jellyfish! Now to find a sun peanutbutterfish.",
    blurb: "Ah, the moon jellyfish...what's not to love about this pretty floating flower of the sea... Well, I suppose its tentacles do give a sting when touched...but it's only a mild thing to the likes of us. Other creatures may not be so fond of this translucent beauty. Though who can blame them, really? Moon jellyfish have stinging cells called cnidocytes that kill fish and other small critters that float by. And they use their \"oral arms\" to pull these morsels into their mouths and stomachs. Indeed, one need but observe the moon jellyfish to see how brutal AND beautiful nature can be.",
  },
  abalone: {
    id: "abalone",
    name: "Abalone",
    icon: "Abalone_NH_Icon.png",
    joke: "I got an abalone! Why do I want a sandwich now?",
    blurb: "My feathers, but the abalone is a most deceptive sea snail, wot wot! After seeing its dull brown shell from the outside, one would think it quite plain. But take a gander inside, and you'll see that the abalone's home is a shimmering beauty to behold! The inner layer of the shell is made of \"nacre,\" or \"mother-of-pearl,\" and, hoo, what a dazzling iridescent hue! Let this be a lesson! You mustn't judge a sea snail by the outside of its shell. Judge by the inside of its shell instead.",
  },
  mussel: {
    id: "mussel",
    name: "Mussel",
    icon: "Mussel_NH_Icon.png",
    joke: "I got a mussel! It's been working out.",
    blurb: `Did you know that the mussel has a beard?! Hoo! It's true! Well, partially true, anyway. Mussels have a special gland that secretes a thing called "byssus" or "byssal thread." They use these tough beard-like fibers to anchor themselves to rocks and keep themselves in place. So, you see, the mussel's beard is functional rather than merely stylish. Then again, perhaps all beards should be this way.`,
  },
  hermitcrab: {
    id: "hermitcrab",
    name: "Hermit Crab",
    icon: "NH-Icon-hermitcrab.png",
    joke: "I caught a hermit crab! I think it wanted to be left alone!",
    blurb: <span>The hermit crab is not an insect... Though it most certainly resembles one! Blech! It looks much like a spider—what with its creepy eyes and crawly legs—but is, in fact, a crustacean. As such, the hermit crab has 10 legs and also wears a shell. But it doesn't grow this shell itself. It slips its soft body into shells left behind by snails, you see, and moves into ever-larger ones as it grows. <small>Talk about a strange way to make a home.</small></span>,
  },
  dab: {
    id: "dab",
    name: "Dab",
    icon: "NH-Icon-dab.png",
    joke: "I caught a dab! Not bad!",
    blurb: `The dab is a flatfish that bears some resemblance to the olive flounder, though their mouths are different. Personally, I am morbidly fascinated by each fish's eye placement. The dab's eyes are both on its right side, while the olive flounder's are on the left. These fish spend lots of time lying on their sides in the sand, so the odd eye placement makes some sense... But it's-how can I put this? Creepy? Viscerally disturbing? Profoundly upsetting to fans of symmetry?`,
  },
  giantclam: {
    id: "giantclam",
    name: "Gigas Giant Clam",
    icon: "Gigas_Giant_Clam_NH_Icon.png",
    joke: "I got a gigas giant clam! It's kind of a big deal.",
    blurb: `Gigas giant clams live in warm-water coral reefs and are the biggest bivalves in the world. Growing as wide as six feet and weighing up to 600 pounds, these clams can live to be 100 years old. And yes, these mighty creatures look as though they could eat a swimmer whole. But they eat plankton instead and get valuable nutrients from an algae they live in symbiosis with. Indeed, these enormous gents get all the sustenance they need by lying face up with their shells half-open. If such was my life, I'd be happy as a clam too.`,
  },
  seabass: {
    id: "seabass",
    name: "Sea Bass",
    icon: "NH-Icon-seabass.png",
    joke: "I caught a sea bass! No, wait—it's at least a C+!",
    blurb: `Sea bass is a name given to a variety of different species of saltwater fish. They are a varied bunch with some as small as four inches and some as staggeringly ginormous as eight feet! "Sea bass" is a bit pedestrian, though. Many species have better names, such as "redbanded perch." Or the delightfully whimsical dusky grouper! Or the potato cod! WILL NO ONE THINK OF THE PINK MAOMAO?!`,
  },
  sturgeon: {
    id: "sturgeon",
    name: "Sturgeon",
    icon: "NH-Icon-sturgeon.png",
    joke: "I caught a sturgeon! Wonder if it can perform sturgery...",
    blurb: `The sturgeon is a large and long-lived fish which has changed little in the last 300 million years. One curious behavior of theirs is leaping high out of the water and falling back in on their sides. The smacking sounds of their re-entry can be heard for up to half a mile away, likely more underwater! No one knows why they do it, but I like to think it's their impression of bread popping out of a toaster!`,
  },
  seacucumber: {
    id: "seacucumber",
    name: "Sea Cucumber",
    icon: "Sea_Cucumber_NH_Icon.png",
    joke: "I got a sea cucumber! It's a bit cumbersome...",
    blurb: `The sea cucumber, much like its relatives the sea urchin and sea star, has no heart nor brain. However, unlike its relatives, it has no shell nor spikes with which to protect itself either. So, how does a softy such as this stay safe in the open ocean? Brace yourself, I say... When threatened, sea cucumbers jettison their innards...out of their backsides! Hoo! Gross but true! The sticky, stringy stuff ensnares predators, allowing the cuke to make its escape and grow its insides back. One might say...the sea cucumber is a GUTSY creature, indeed. Hoo hoo, hee hee! Do forgive me!`,
  },
};

const EXHIBITS = [
  "Giant Pacific Octopus",
  "Kelp Forest",
  "Monterey Bay Habitats",
  "Sandy Shore & Aviary",
  "Rocky Shore Touch Pools",
  "Splash Zone & Penguins",
  "The Open Sea",
  "Into the Deep",
  "Tentacles",
  "Sea Otters",
  "Life on the Bay",
];

const MAPPINGS = {
  "Giant Pacific Octopus": [],
  "Kelp Forest": [{
    id: "anchovy",
    variants: "Northern anchovy",
  }, {
    id: "hermitcrab",
  }, {
    id: "seabass",
    variants: "Giant sea bass",
  }, {
    id: "seacucumber",
    variants: "Warty sea cucumber",
  }],
  "Monterey Bay Habitats": [{
    id: "dab",
    variants: "Sanddab",
  }, {
    id: "seabass",
    variants: "Giant sea bass",
  }, {
    id: "sturgeon",
    variants: "White sturgeon",
  }],
  "Sandy Shore & Aviary": [],
  "Rocky Shore Touch Pools": [{
    id: "abalone",
  }, {
    id: "mussel",
    variants: "California mussel",
  }, {
    id: "hermitcrab"
  }],
  "Splash Zone & Penguins": [{
    id: "clownfish",
  }, {
    id: "hermitcrab",
  }, {
    id: "giantclam",
    variants: "Giant Clam",
  }],
  "The Open Sea": [{
    id: "moonjelly",
  }, {
    id: "anchovy",
    variants: "Northern anchovy",
  }, {
    id: "hammerhead",
    variants: "Scalloped hammerhead shark",
  }],
  "Into the Deep": [{
    id: "giantisopod",
  }, {
    id: "seacucumber",
    variants: "Glowing sea cucumber",
  }],
  "Tentacles": [],
  "Sea Otters": [],
  "Life on the Bay": [],
}

// TODO Should visiting each variant be handled separately?
// TODO Add debug functions
// TODO Finish entries
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
