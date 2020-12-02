import React, { useState } from 'react';
import {
  SkeletonText,
  SkeletonBlock,
  SkeletonImage,
  SkeletonAvatar,
} from '../../src/react';

const App = () => {
  const [effect, setEffect] = useState(null);
  const [theme, setTheme] = useState('light');

  function load(eff) {
    if (effect) return;
    setEffect(eff);
    setTimeout(() => {
      setEffect(null);
    }, 3000);
  }

  const demoItem = {
    title: 'Placeholder name',
    description: 'Lorem ipsum, dolor sit amet consectetur',
  };
  const demoListItems = Array.from({ length: 4 }).map(() => ({
    ...demoItem,
  }));

  return (
    <div className={`theme theme-${theme}`}>
      <div className="container">
        <p className="buttons">
          <button type="button" onClick={() => load('fade')}>
            Fade
          </button>
          <button type="button" onClick={() => load('pulse')}>
            Pulse
          </button>
          <button type="button" onClick={() => load('wave')}>
            Wave
          </button>

          <label>
            <input
              type="radio"
              checked={theme === 'light'}
              onChange={() => setTheme('light')}
            />
            <span>Light</span>
          </label>
          <label>
            <input
              type="radio"
              checked={theme === 'dark'}
              onChange={() => setTheme('dark')}
            />
            <span>Dark</span>
          </label>
        </p>

        <SkeletonText effect={effect} tag="h1">
          Loading Page Title
        </SkeletonText>
        <div className="demo-cols">
          <div className="demo-col">
            <SkeletonImage effect={effect} width={400} height={200} />
            <SkeletonImage
              effect={effect}
              width={20}
              height={20}
              borderRadius="10px"
            />
            <SkeletonText effect={effect} tag="h2">
              Loading Placeholder
            </SkeletonText>
            <SkeletonText effect={effect} tag="p">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
              animi nihil ullam! Asperiores recusandae ullam deleniti, modi
              adipisci omnis alias quis magnam quod quidem dolores
              exercitationem dolor repellendus neque ex.
            </SkeletonText>
          </div>
          <div className="demo-col">
            <ul className="demo-list">
              {demoListItems.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className={effect ? `skeleton-effect-${effect}` : ''}
                >
                  <div className="demo-list-avatar">
                    <SkeletonAvatar size={100} />
                  </div>
                  <div className="demo-list-content">
                    <SkeletonText tag="p" className="demo-list-title">
                      {item.title}
                    </SkeletonText>
                    <SkeletonText tag="p" className="demo-list-description">
                      {item.description}
                    </SkeletonText>
                    <SkeletonBlock
                      width="30%"
                      height="0.75em"
                      borderRadius="3px"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
