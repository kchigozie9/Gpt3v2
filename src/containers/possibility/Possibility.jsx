import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Ogemegs/MegzCraft = 5/6</h4>
      <h1 className="gradient__text">Another reason why  <br /> I love you is Megzcraft</h1>
      <p>There's something truly special about the way you make boxes, the effort you put into making a box is always heartwarming because each box becomes a miniature work of art, and a testament to your creativity my goddess.</p>
      <h4>Keep doing Good Work my goddess!</h4>
    </div>
  </div>
);

export default Possibility;