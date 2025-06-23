import React from 'react';
import styled from 'styled-components';
import InputForm from './InputForm';

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: black;
`;

export default function InputPage({ onSubmit }) {
  return (
    <PageWrapper>
      <InputForm onSubmit={onSubmit} />
    </PageWrapper>
  );
}