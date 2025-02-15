import React from 'react';

interface MemoItemProps {
    task: string;
    index: number;
    onDelete: (index: number) => void;
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