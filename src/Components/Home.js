import React from "react";
import Navbar from "./Navbar";
const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      {/* <div className="home-banner-container">
        <img src="covers-copy_orig.png" alt=""></img>
      </div> */}
      <div className="home-text-section">
        <h1 className="primary-heading">About</h1>
        <p className="primary-text">
          <strong>Lorn Hillaker</strong> is a first-time author of a story about
          dragons and magic pirates. Coincidentally, he is convinced he never
          read a book that couldn’t be improved with a sword fight. At any given
          point, he can be found chasing his daughter with a stuffed penguin,
          playing a Magic draft, or embarking upon his seventeenth reread of the
          Wheel of Time. He graduated with his PhD in history, which he now puts
          to good use making up elaborate pasts for fantasy worlds. If you
          attempt to conjure him by saying his name five times in a darkened
          room, people will look at you strangely.
        </p>
        <p>
          On the Ember Sea, the source of all magic is gold. Sailors desperately
          hunt for caches of buried treasure and pray to avoid the dragons, who
          haunt the skies in constant search for gold to fill their hoards. But
          some crews, those particularly skilled or reckless, hunt the dragons.
          Elliot Arkwright dreams of becoming a Wingbinder, one of these
          dragon-hunters. They are endowed with mystical tattoos that burn gold
          for power, power he hopes to use to free his mother from prison. And
          time is running out. Dragons are breaking through the boundaries of
          the Ember Sea in greater numbers than ever before, threatening all
          nearby human settlements. To stop the devastation and free his mother,
          Elliot will have to join the crew of the legendary ship, Serpent’s
          End, on a quest far more dangerous than anything he ever imagined.
          They must hunt an elder dragon, a threat so great it endangers the
          entire world. They’re widely considered unkillable, immortal. And the
          elder dragon may be hunting them too.
        </p>
      </div>
    </div>
  );
};

export default Home;
