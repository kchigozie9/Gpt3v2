import React from 'react';
import {Feature} from '../../components';
import './features.css';

const featuresData = [
  {
    title: 'Your Infectious Smile and Laughter',
    text: 'Your laughter is like music to my ears. Its contagious and full of life, making even the most mundane moments become joyful.',
  },
  {
    title: 'Your Supportive Spirit',
    text: 'You are my biggest cheerleader. you celebrates my wins even more than i do and you are always ready to offer unwavering support during hard times. Knowing you believe in me gives me the strength to push forward.',
  },
  {
    title: 'Your Sense of Adventure',
    text: 'You are always willing to try new things, with me. Our adventures together are really filled with laughter and unforgettable memories',
  },
  {
    title: 'Your Strength and Resilience',
    text: 'Life throws curveballs, but you always face them head-on like the Mrs Gonzalez that you are. Your bravery inspires me to be a better person.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text"> The following are the reasons why i love maintaining you.</h1>
      <p>Please read and digest carefully.</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;