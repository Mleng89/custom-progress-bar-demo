import React, { useState } from 'react';

import Form from '../form';
import { PROGRESS_DEFAULT } from '../../constants';

import './index.css';

/**
 * PROGRESS BAR COMPONENT
 */
interface ProgressProps {
    done?: number | string;
}
const Progress: React.FC<ProgressProps> = ({ done }) => {
    return (
        <div className="progress-bar-outer">
            <div
                className="progress-bar-inner"
                style={{ opacity: 1, width: `${done}%` }}
            >
                <p className="percentage">{done}%</p>
            </div>
        </div>
    );
};
const App = () => {
    const [formProgress, setFormProgress] = useState(PROGRESS_DEFAULT);

    const handleFormProgress = (currentProgress: number) => {
        // can add the following to protect against edge cases
        // * don't set below 0 and above 100
        // * const setValue = formProgress + currentProgress <= 0 :
        // * formProgress + currentProgress <= 0 then 0
        // * formProgress + currentProgress >= 100 then 100
        // * else formProgress + currentProgress
        setFormProgress(formProgress + currentProgress);
    };

    return (
        <div className="container">
            <Progress done={formProgress} />
            <Form handleFormProgress={handleFormProgress} />
        </div>
    );
};

export default App;
