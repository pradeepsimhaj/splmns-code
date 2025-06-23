import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import AnimationCanvas from './AnimationCanvas';
import ConfettiBackground from './ConfettiBackground';

const PageWrapper = styled.div`
  position: relative;
  height: 100vh;
  background: black;
`;

const NavButton = styled.button`
  position: relative;
  top: 20px;
  right: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100; /* Ensure it stays on top */
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  background-color: #39ff14;
  color: black;
  cursor: pointer;
  &:hover {
    background-color: #00ffff;
  }
`;

export default function AnimationPage({ tags, onAnimationComplete }) {
  const navigate = useNavigate();

  const handleNavigation = () => {
    console.log('Button clicked, attempting to navigate to /'); // Enhanced debug log
    try {
      navigate('/');
      console.log('Navigation successful');
    } catch (error) {
      console.error('Navigation failed:', error);
    }
  };

  return (
    <PageWrapper>
      <AnimationCanvas tags={tags} onAnimationComplete={onAnimationComplete} />
      <ConfettiBackground style={{ zIndex: 0 }} /> {/* Ensure z-index is explicitly 0 */}
      <NavButton onClick={handleNavigation}>Back to Input</NavButton>
    </PageWrapper>
  );
}