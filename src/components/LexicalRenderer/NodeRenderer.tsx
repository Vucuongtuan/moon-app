import React from 'react';
import { View } from 'react-native';
import { HeadingNode } from './nodes/HeadingNode';
import { ParagraphNode } from './nodes/ParagraphNode';
import { TextNode } from './nodes/TextNode';
import { UploadNode } from './nodes/UploadNode';
import { RenderChildren } from './renderChildren';
import { LexicalNode } from './types';

export const NodeRenderer = ({ node }: { node: LexicalNode }) => {
  switch (node.type) {
    case 'text':
      return <TextNode node={node} />;
    
    case 'paragraph':
      return <ParagraphNode node={node} />;

    case 'heading':
      return <HeadingNode node={node} />;

    case 'upload':
      // return <>Upload</>
      return <UploadNode node={node} />;
    case 'root':
      return (
        <View>
          <RenderChildren children={node.children} />
        </View>
      );

    default:
      if (node.children && node.children.length > 0) {
        return (
          <View>
            <RenderChildren children={node.children} />
          </View>
        );
      }
      return null;
  }
};
