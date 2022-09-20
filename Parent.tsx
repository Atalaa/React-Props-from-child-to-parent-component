import * as React from 'react';
import { useState } from 'react';
import './style.css';
import Child from './Child';

export default function Parent() {
  const [title, setTitle] = useState('Parent');

  function handleTitleChange(e) {
    // 👇️ take parameter passed from Child component
    setTitle(e);
  }

  return (
    <div>
      <h1>{title}</h1>
      <Child newTitle={handleTitleChange} />
    </div>
  );
}
