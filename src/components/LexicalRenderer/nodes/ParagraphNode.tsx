import React from 'react';
import { View } from 'react-native';
import { RenderChildren } from '../renderChildren';
import { LexicalNode } from '../types';
import { styles } from './ParagraphNode.styles';

export const ParagraphNode = ({ node }: { node: LexicalNode }) => {
  return (
    <View style={styles.container}>
      <RenderChildren children={node.children} />
    </View>
  );
};
