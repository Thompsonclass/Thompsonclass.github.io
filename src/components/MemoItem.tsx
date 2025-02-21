import React from 'react';
import styled from 'styled-components';

const TaskItemStyled = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eee;
`;

const DeleteButton = styled.button`
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    background-color: #ff1a1a;
`;

interface MemoItemProps {
  task: string;
  index: number;
  onDelete: (index: number) => void; // onDelete는 index: number를 받고, 반환값이 없는(void) 함수
}

const MemoItem: React.FC<MemoItemProps> = ({ task, index, onDelete }) => {
  return (
    <TaskItemStyled>
      <h4>{task}</h4>
      <DeleteButton onClick={() => onDelete(index)}>Delete</DeleteButton>
    </TaskItemStyled>
  );
};

export default MemoItem;
