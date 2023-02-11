import React from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';

const todo = (props) => {
  const {text, updateMode, deleteMode} = props;
  return (
    <div>
      <div><br/>{text}</div>
      <div>
        <FaEdit onClick={updateMode}/>
        <FaTrash onClick={deleteMode}/>
      </div>
    </div>
  );
};

export default todo;
