import React from 'react';
import { View } from 'react-native';
import { RenderChildren } from '../renderChildren';
import { LexicalNode } from '../types';

export const ParagraphNode = ({ node }: { node: LexicalNode }) => {
  return (
    <View className="mb-2 flex-row flex-wrap">
      <RenderChildren children={node.children} />
    </View>
  );
};
