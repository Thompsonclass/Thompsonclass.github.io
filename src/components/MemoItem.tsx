import React from 'react';

interface MemoItemProps {
    task: string;
    index: number;
    onDelete: (index: number) => void; //onDelete는 index: number를 받고, 반환값이 없는(void) 함수
}

const MemoItem: React.FC<MemoItemProps> = ({ task, index, onDelete }) => {
    return (
        <li className="task-item">
            <h4>{task}</h4>
            <button onClick={() => onDelete(index)} className="delete-button">
                Delete
            </button>
        </li>
    );
};

export default MemoItem;