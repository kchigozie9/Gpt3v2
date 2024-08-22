import React from 'react';
import './header.css';
import people from '../../assets/people.jpg';
import ai from '../../assets/ai.jpeg';

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">12 Reasons Why I love Ogemeg</h1>
        <p>They say love is a mystery, but for me it has been crystal clear since the day you used my fine red shirt to clean your teary eyes.Here are 12 reasons why i can't get enough of Ogemeg!!</p>
        <div className="gpt3__header-content__input">
         {/*   <input type="email" placeholder="Your Email Address" />
          <button type="button">Meet MegzCraft</button>*/}
        </div>

        <div className="gpt3__header-content__people">
           {/* <img src={people} alt="people" />
          <p>MegzCraft is Ogemegs little baby</p> */}
        </div>
      </div>
      <div className="gpt3__header-image">
      <img src= {ai} alt="ai" />
        </div>
    </div>
  )
}

export default Header