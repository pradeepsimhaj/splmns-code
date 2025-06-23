// // import React from 'react';
// // import styled, { keyframes } from 'styled-components';
// // import { motion } from 'framer-motion';
// // import ConfettiBackground from './ConfettiBackground';

// // const Canvas = styled.div`
// //   position: fixed; inset: 0; overflow: hidden; z-index: 1;
// // `;

// // const glow = keyframes`
// //   0% { text-shadow: 0 0 8px; }
// //   50% { text-shadow: 0 0 20px; }
// //   100% { text-shadow: 0 0 8px; }
// // `;

// // const Tag = styled(motion.div)`
// //   position: absolute;
// //   font-size: 24px; font-weight: bold;
// //   white-space: nowrap;
// //   pointer-events: none;
// //   animation: ${glow} 1.5s ease-in-out infinite;
// //   filter: drop-shadow(0 0 6px currentColor) blur(0.5px);
// // `;

// // const neonColors = ['#39ff14','#00ffff','#ff4fef','#ffd700','#ff6ec7','#ff8c00'];
// // const emojis = ['🌟','✨','🎉','💫','🔥','🌈','💥'];

// // function rand(arr) {
// //   return arr[Math.floor(Math.random() * arr.length)];
// // }

// // export default function AnimationCanvas({ tags, onAnimationComplete }) {
// //   return (
// //     <>
// //       <ConfettiBackground />
// //       <Canvas>
// //         {tags.map(({ id, text }) => {
// //           const top = Math.random() * 80 + 10;
// //           const xDist = 100 + Math.random() * 50;
// //           const yDist = Math.random() > 0.5 ? -30 : 30;
// //           const dur = 5 + Math.random() * 3;
// //           const color = rand(neonColors);
// //           const emoji = rand(emojis);
// //           const content = Math.random() > 0.5 ? `${emoji} ${text}` : `${text} ${emoji}`;


// //           return (
// //             <Tag
// //               key={id}
// //                   style={{ top: `${top}vh`, left: '-200px', color }}
// //               initial={{ x: 0, opacity: 1 }}
// //                   animate={{ x: `${xDist}vw`, y: `${yDist}vh`, opacity: 0 }}
// //               transition={{ duration: dur }}
// //               onAnimationComplete={() => onAnimationComplete(id)}
// //             >
// //               {content}
// //             </Tag>
// //           );
// //         })}
// //       </Canvas>
// //     </>
// //   );
// // }





















// // import React, { useState, useEffect, useRef } from 'react';
// // import styled, { keyframes } from 'styled-components';
// // import { motion } from 'framer-motion';
// // import ConfettiBackground from './ConfettiBackground';

// // const Canvas = styled.div`
// //   position: fixed; inset: 0; overflow: hidden; z-index: 1;
// // `;

// // const glow = keyframes`
// //   0% { text-shadow: 0 0 8px; }
// //   50% { text-shadow: 0 0 20px; }
// //   100% { text-shadow: 0 0 8px; }
// // `;

// // const Tag = styled(motion.div)`
// //   position: absolute;
// //   font-size: 24px; font-weight: bold;
// //   white-space: nowrap;
// //   pointer-events: none;
// //   animation: ${glow} 1.5s ease-in-out infinite;
// //   filter: drop-shadow(0 0 6px currentColor) blur(0.5px);
// // `;

// // const neonColors = ['#39ff14','#00ffff','#ff4fef','#ffd700','#ff6ec7','#ff8c00'];
// // const emojis = ['🌟','✨','🎉','💫','🔥','🌈','💥'];

// // function rand(arr) {
// //   return arr[Math.floor(Math.random() * arr.length)];
// // }

// // export default function AnimationCanvas({ tags, }) {
// //   const [activeTags, setActiveTags] = useState([]);
// //   const tagRefs = useRef({});
// //   const velocities = useRef({});

// //   useEffect(() => {
// //     setActiveTags(tags);
// //   }, [tags]);

// //   useEffect(() => {
// //     const updatePositions = () => {
// //       Object.keys(tagRefs.current).forEach(id => {
// //         const el = tagRefs.current[id];
// //         if (!el) return;

// //         const rect = el.getBoundingClientRect();
// //         let { x, y, dx, dy } = velocities.current[id];

// //         // Update position
// //         x += dx / 60; // Assuming 60 FPS
// //         y += dy / 60;

// //         // Screen border collision
// //         if (rect.left + dx / 60 <= 0 || rect.right + dx / 60 >= window.innerWidth) {
// //           dx = -dx;
// //         }
// //         if (rect.top + dy / 60 <= 0 || rect.bottom + dy / 60 >= window.innerHeight) {
// //           dy = -dy;
// //         }

// //         // Update element position and velocity
// //         el.style.transform = `translate(${x}px, ${y}px)`;
// //         velocities.current[id] = { x, y, dx, dy };
// //       });

// //       requestAnimationFrame(updatePositions);
// //     };

// //     const animId = requestAnimationFrame(updatePositions);
// //     return () => cancelAnimationFrame(animId);
// //   }, [activeTags]);

// //   return (
// //     <>
// //       <ConfettiBackground />
// //       <Canvas>
// //         {activeTags.map(({ id, text }) => {
// //           const top = Math.random() * 80 + 10;
// //           const minSpeed = 20;
// //           const maxSpeed = 40;
// //           const speedX = (Math.random() * (maxSpeed - minSpeed) + minSpeed) * (Math.random() > 0.5 ? 1 : -1);
// //           const speedY = (Math.random() * (maxSpeed - minSpeed) + minSpeed) * (Math.random() > 0.5 ? 1 : -1);
// //           const color = rand(neonColors);
// //           const emoji = rand(emojis);
// //           const content = Math.random() > 0.5 ? `${emoji} ${text}` : `${text} ${emoji}`;

// //           // Initialize velocity and position
// //           velocities.current[id] = {
// //             x: window.innerWidth * 0.1, // Start at 10vw
// //             y: window.innerHeight * (top / 100),
// //             dx: speedX,
// //             dy: speedY,
// //           };

// //           return (
// //             <Tag
// //               key={id}
// //               ref={el => (tagRefs.current[id] = el)}
// //               style={{ top: 0, left: 0, color }}
// //               initial={{ opacity: 1 }}
// //               id={`tag-${id}`}
// //               className="tag"
// //             >
// //               {content}
// //             </Tag>
// //           );
// //         })}
// //       </Canvas>
// //     </>
// //   );
// // }










// import React, { useState, useEffect, useRef } from 'react';
// import styled, { keyframes } from 'styled-components';
// import { motion } from 'framer-motion';
// import ConfettiBackground from './ConfettiBackground';

// const Canvas = styled.div`
//   position: fixed; inset: 0; overflow: hidden; z-index: 1;
// `;

// const glow = keyframes`
//   0% { text-shadow: 0 0 8px; }
//   50% { text-shadow: 0 0 20px; }
//   100% { text-shadow: 0 0 8px; }
// `;

// const Tag = styled(motion.div)`
//   position: absolute;
//   font-size: 24px; font-weight: bold;
//   white-space: nowrap;
//   pointer-events: none;
//   animation: ${glow} 1.5s ease-in-out infinite;
//   filter: drop-shadow(0 0 6px currentColor) blur(0.5px);
// `;

// const neonColors = ['#39ff14','#00ffff','#ff4fef','#ffd700','#ff6ec7','#ff8c00'];
// const emojis = ['🌟','✨','🎉','💫','🔥','🌈','💥'];

// function rand(arr) {
//   return arr[Math.floor(Math.random() * arr.length)];
// }

// export default function AnimationCanvas({ tags }) {
//   const [activeTags, setActiveTags] = useState([]);
//   const tagRefs = useRef({});
//   const velocities = useRef({});
//   const tagStates = useRef({}); // Store initial properties for each tag

//   useEffect(() => {
//     // Update activeTags, preserving existing tag states
//     setActiveTags(tags.map(tag => {
//       if (tagStates.current[tag.id]) {
//         // Return existing state for tags already initialized
//         return { ...tag, ...tagStates.current[tag.id] };
//       }
//       // Initialize new tag
//       const top = Math.random() * 80 + 10;
//       const minSpeed = 20;
//       const maxSpeed = 40;
//       const speedX = (Math.random() * (maxSpeed - minSpeed) + minSpeed) * (Math.random() > 0.5 ? 1 : -1);
//       const speedY = (Math.random() * (maxSpeed - minSpeed) + minSpeed) * (Math.random() > 0.5 ? 1 : -1);
//       const color = rand(neonColors);
//       const emoji = rand(emojis);
//       const content = Math.random() > 0.5 ? `${emoji} ${tag.text}` : `${tag.text} ${emoji}`;

//       // Store initial state
//       tagStates.current[tag.id] = { top, speedX, speedY, color, emoji, content };
//       velocities.current[tag.id] = {
//         x: window.innerWidth * 0.1, // Start at 10vw
//         y: window.innerHeight * (top / 100),
//         dx: speedX,
//         dy: speedY,
//       };

//       return { ...tag, top, speedX, speedY, color, emoji, content };
//     }));
//   }, [tags]);

//   useEffect(() => {
//     const updatePositions = () => {
//       Object.keys(tagRefs.current).forEach(id => {
//         const el = tagRefs.current[id];
//         if (!el) return;

//         const rect = el.getBoundingClientRect();
//         let { x, y, dx, dy } = velocities.current[id];

//         // Update position
//         x += dx / 60; // Assuming 60 FPS
//         y += dy / 60;

//         // Screen border collision
//         if (rect.left + dx / 60 <= 0 || rect.right + dx / 60 >= window.innerWidth) {
//           dx = -dx;
//         }
//         if (rect.top + dy / 60 <= 0 || rect.bottom + dy / 60 >= window.innerHeight) {
//           dy = -dy;
//         }

//         // Update element position and velocity
//         el.style.transform = `translate(${x}px, ${y}px)`;
//         velocities.current[id] = { x, y, dx, dy };
//       });

//       requestAnimationFrame(updatePositions);
//     };

//     const animId = requestAnimationFrame(updatePositions);
//     return () => cancelAnimationFrame(animId);
//   }, [activeTags]);

//   return (
//     <>
//       <ConfettiBackground />
//       <Canvas>
//         {activeTags.map(({ id, content }) => (
//           <Tag
//             key={id}
//             ref={el => (tagRefs.current[id] = el)}
//             style={{ top: 0, left: 0, color: tagStates.current[id]?.color || 'white' }}
//             initial={{ opacity: 1 }}
//             id={`tag-${id}`}
//             className="tag"
//           >
//             {content}
//           </Tag>
//         ))}
//       </Canvas>
//     </>
//   );
// }













import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const Canvas = styled.div`
  position: fixed;
  inset: 0;
  overflow: hidden;
  z-index: 10; /* Lower than the button's z-index (100) */
`;

const glow = keyframes`
  0% { text-shadow: 0 0 8px; }
  50% { text-shadow: 0 0 20px; }
  100% { text-shadow: 0 0 8px; }
`;

const Tag = styled(motion.div)`
  position: absolute;
  font-size: 24px;
  font-weight: bold;
  white-space: nowrap;
  pointer-events: none;
  animation: ${glow} 1.5s ease-in-out infinite;
  filter: drop-shadow(0 0 6px currentColor) blur(0.5px);
`;

const neonColors = ['#39ff14', '#00ffff', '#ff4fef', '#ffd700', '#ff6ec7', '#ff8c00'];
const emojis = ['🌟', '✨', '🎉', '💫', '🔥', '🌈', '💥'];

function rand(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function AnimationCanvas({ tags }) {
  const [activeTags, setActiveTags] = useState([]);
  const tagRefs = useRef({});
  const velocities = useRef({});
  const tagStates = useRef({});

  useEffect(() => {
    setActiveTags(tags.map(tag => {
      if (tagStates.current[tag.id]) {
        return { ...tag, ...tagStates.current[tag.id] };
      }
      const top = Math.random() * 80 + 10;
      const minSpeed = 20;
      const maxSpeed = 40;
      const speedX = (Math.random() * (maxSpeed - minSpeed) + minSpeed) * (Math.random() > 0.5 ? 1 : -1);
      const speedY = (Math.random() * (maxSpeed - minSpeed) + minSpeed) * (Math.random() > 0.5 ? 1 : -1);
      const color = rand(neonColors);
      const emoji = rand(emojis);
      const content = Math.random() > 0.5 ? `${emoji} ${tag.text}` : `${tag.text} ${emoji}`;

      tagStates.current[tag.id] = { top, speedX, speedY, color, emoji, content };
      velocities.current[tag.id] = {
        x: window.innerWidth * 0.1,
        y: window.innerHeight * (top / 100),
        dx: speedX,
        dy: speedY,
      };

      return { ...tag, top, speedX, speedY, color, emoji, content };
    }));
  }, [tags]);

  useEffect(() => {
    const updatePositions = () => {
      Object.keys(tagRefs.current).forEach(id => {
        const el = tagRefs.current[id];
        if (!el) return;

        const rect = el.getBoundingClientRect();
        let { x, y, dx, dy } = velocities.current[id];

        x += dx / 60;
        y += dy / 60;

        if (rect.left + dx / 60 <= 0 || rect.right + dx / 60 >= window.innerWidth) {
          dx = -dx;
        }
        if (rect.top + dy / 60 <= 0 || rect.bottom + dy / 60 >= window.innerHeight) {
          dy = -dy;
        }

        el.style.transform = `translate(${x}px, ${y}px)`;
        velocities.current[id] = { x, y, dx, dy };
      });

      requestAnimationFrame(updatePositions);
    };

    const animId = requestAnimationFrame(updatePositions);
    return () => cancelAnimationFrame(animId);
  }, [activeTags]);

  return (
    <Canvas>
      {activeTags.map(({ id, content }) => (
        <Tag
          key={id}
          ref={el => (tagRefs.current[id] = el)}
          style={{ top: 0, left: 0, color: tagStates.current[id]?.color || 'white' }}
          initial={{ opacity: 1 }}
          id={`tag-${id}`}
          className="tag"
        >
          {content}
        </Tag>
      ))}
    </Canvas>
  );
}