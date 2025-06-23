// import React, { useState } from 'react';
// import styled from 'styled-components';

// const FormWrapper = styled.div`
//   position: absolute; top: 20px; left: 20px; z-index: 10;
//   background: rgba(0,0,0,0.6); padding: 10px; border-radius: 8px;
// `;

// export default function InputForm({ onSubmit }) {
//   const [text, setText] = useState('');
//   const handle = e => {
//     e.preventDefault();
//     if (!text.trim()) return;
//     onSubmit(text.trim());
//     setText('');
//   };

//   return (
//     <FormWrapper>
//       <form onSubmit={handle}>
//         <input
//           type="text" value={text}
//           placeholder="Enter name/phrase"
//           onChange={e => setText(e.target.value)}
//           maxLength={30}
//         />
//         <button type="submit">Launch</button>
//       </form>
//     </FormWrapper>
//   );
// }





















import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  padding: 20px;
  border-radius: 8px;
`;

const Form = styled.form`
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
`;

const Input = styled.input`
  padding: 8px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
`;

const Button = styled.button`
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

export default function InputForm({ onSubmit }) {
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const handle = e => {
    e.preventDefault();
    if (!text.trim()) return;
    onSubmit(text.trim());
    setText('');
  };

  return (
    <FormWrapper>
      <Form onSubmit={handle}>
        <Input
          type="text"
          value={text}
          placeholder="Enter name/phrase"
          onChange={e => setText(e.target.value)}
          maxLength={30}
        />
        <Button type="submit">Launch</Button>
      </Form>
      <Button onClick={() => navigate('/animation')}>Go to Animation</Button>
    </FormWrapper>
  );
}