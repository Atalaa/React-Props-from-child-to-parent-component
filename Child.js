import * as React from 'react';
import './style.css';

export default function Child(props) {
  return (
    <div>
      <h2>Child</h2>
      <button
        onClick={(e) => {
          props.newTitle('John');
        }}
      >
        Click to change Parent's title
      </button>
    </div>
  );
}
