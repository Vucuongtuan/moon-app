import React from 'react';

export const RenderChildren: React.FC<{ children: {
        type: any;
        version: number;
        [k: string]: unknown;
      }[] | undefined }> = ({ children }) => {
  if (!children || children.length === 0) return null;
  
  const { NodeRenderer } = require('./NodeRenderer');
  
  return (
    <>
      {children.map((child, index) => (
        <NodeRenderer key={index} node={child} />
      ))}
    </>
  );
};
