import React from 'react';

interface LightProps {
    color?: 'green' | 'red' | 'yellow';
}

export const Light = ({color = 'green'}:LightProps) => {
    return (
        <div style={{
            backgroundColor: color,
            borderRadius: '50%',
            width: 50,
            height: 50,
        }}>
        </div>
    );
};