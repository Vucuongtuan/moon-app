import React from 'react';
import { LexicalNode } from './types';

export const RenderChildren: React.FC<{ children: LexicalNode[] | undefined }> = ({ children }) => {
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
