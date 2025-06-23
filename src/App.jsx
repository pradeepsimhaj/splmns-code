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