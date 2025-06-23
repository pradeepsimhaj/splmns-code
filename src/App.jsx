// // import React, { useState, useEffect } from 'react';
// // import GlobalStyles from './styles/GlobalStyles';
// // import InputForm from './components/InputForm';
// // import AnimationCanvas from './components/AnimationCanvas';

// // export default function App() {
// //   const [tags, setTags] = useState([]);
// //   const maxTags = 5;

// //   useEffect(() => {
// //     if (tags.length === maxTags) {
// //       const timer = setTimeout(() => {
// //         setTags([]); // Reset to initial empty state
// //       }, 10000); // 10 seconds
// //       return () => clearTimeout(timer); // Cleanup timer on unmount or tags change
// //     }
// //   }, [tags]);

// //   const addTag = text => {
// //     if (tags.length < maxTags) {
// //       setTags([...tags, { id: Date.now(), text }]);
// //     }
// //   };

// //   const removeTag = id => {
// //     setTags(tags.filter(t => t.id !== id));
// //   };

// //   return (
// //     <>
// //       <GlobalStyles />
// //       <InputForm onSubmit={addTag} />
// //       <AnimationCanvas tags={tags} onAnimationComplete={removeTag} />
// //     </>
// //   );
// // }

















// import React, { useState, useEffect } from 'react';
// import GlobalStyles from './styles/GlobalStyles';
// import InputForm from './components/InputForm';
// import AnimationCanvas from './components/AnimationCanvas';

// export default function App() {
//   const [tags, setTags] = useState(() => {
//     // Load tags from local storage on initial render
//     const savedTags = localStorage.getItem('tags');
//     return savedTags ? JSON.parse(savedTags) : [];
//   });
//   const maxTags = 5;

//   // Save tags to local storage whenever they change
//   useEffect(() => {
//     localStorage.setItem('tags', JSON.stringify(tags));
//   }, [tags]);

//   // Handle tag limit and reset after 10 seconds
//   useEffect(() => {
//     if (tags.length === maxTags) {
//       const timer = setTimeout(() => {
//         setTags([]); // Reset to empty state
//         localStorage.setItem('tags', JSON.stringify([])); // Clear local storage
//       }, 10000); // 10 seconds
//       return () => clearTimeout(timer); // Cleanup timer
//     }
//   }, [tags]);

//   const addTag = text => {
//     if (tags.length < maxTags) {
//       const newTag = { id: Date.now(), text };
//       setTags([...tags, newTag]);
//     }
//   };

//   const removeTag = id => {
//     setTags(tags.filter(t => t.id !== id));
//   };

//   return (
//     <>
//       <GlobalStyles />
//       <InputForm onSubmit={addTag} />
//       <AnimationCanvas tags={tags} onAnimationComplete={removeTag} />
//     </>
//   );
// }
















import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import InputPage from './components/InputPage';
import AnimationPage from './components/AnimationPage';

export default function App() {
  const [tags, setTags] = useState(() => {
    const savedTags = localStorage.getItem('tags');
    return savedTags ? JSON.parse(savedTags) : [];
  });
  const maxTags = 5;

  useEffect(() => {
    localStorage.setItem('tags', JSON.stringify(tags));
  }, [tags]);

  useEffect(() => {
    if (tags.length === maxTags) {
      const timer = setTimeout(() => {
        setTags([]);
        localStorage.setItem('tags', JSON.stringify([]));
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [tags]);

  const addTag = text => {
    if (tags.length < maxTags) {
      const newTag = { id: Date.now(), text };
      setTags([...tags, newTag]);
    }
  };

  const removeTag = id => {
    setTags(tags.filter(t => t.id !== id));
  };

  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<InputPage onSubmit={addTag} />} />
        <Route path="/animation" element={<AnimationPage tags={tags} onAnimationComplete={removeTag} />} />
      </Routes>
    </Router>
  );
}