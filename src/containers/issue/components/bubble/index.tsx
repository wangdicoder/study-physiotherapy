import React from 'react';
import './bubble.scss';

export type BubbleProps = {
  left?: boolean;
  avatar?: string;
  contents: string[],
  bgColor?: string;
};

const Bubble = ({avatar = require('../../../../assets/avatar/placeholder-profile.jpg'), left = true, bgColor= '8d66cc', contents}: BubbleProps) => (
  <div className={`bubble bubble_${left ? 'left' : 'right'} bubble_${bgColor}`}>
    <img src={avatar} alt="avatar" className="bubble__avatar"/>
    <div className="bubble__content">
      <ul className="bubble__ul">
        {contents.map((content, idx) => (
          <li key={idx} className="bubble__sentence">{content}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default Bubble;
