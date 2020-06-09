import React from 'react';

const Progress = (props) => {
  return (
    <div>
      <h1>
        question {props.current} of {props.total}
      </h1>
    </div>
  );
};

export default Progress;
