import React from 'react';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './import';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot has happened, <br /> this past 3 years.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date=" A shoulder to lean on!" text ="Ogechukwu Megwalu Emily, It is been three incredible years full of ups and downs, as well as airport wahalas, but you have always been the shoulder I can lean on when things get tough; you are not only my joy partner but also my rock during difficult times. Your presence gives me comfort and a safe space to share my vulnerabilities." />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="My Perfect Match" text ="Beyond all the reasons listed, there's an unexplainable connection—a perfect fit. We complement each other beautifully, and together, we create a vibrant and fulfilling life" />
        <Article imgUrl={blog03} date="Kindness Personified" text ="The way you treats people, regardless of their background or circumstances, is heartwarming. your inherent kindness and compassion make the world a better place, one interaction at a time." />
        <Article imgUrl={blog04} date="A Giver" text ="Oge, your gifts are not just thoughtful; they are extremely insightful. You take your time to know what i need, and you make efforts to find gifts that are truly special and meaningful." />
        <Article imgUrl={blog05} date="The Unexplainable Spark:" text =" There is an undeniable spark between us, a bond that goes beyond words. Being with you feels like coming home, offering an unparalleled feeling of belonging and comfort." />
      </div>
    </div>
  </div>
);

export default Blog;
