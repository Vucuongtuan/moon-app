import React from 'react';
import { Text, View, useColorScheme } from 'react-native';
import { RenderChildren } from '../renderChildren';
import { LexicalNode } from '../types';
import { styles } from './HeadingNode.styles';

export const HeadingNode = ({ node }: { node: LexicalNode }) => {
  const colorScheme = useColorScheme();
  const textColor = colorScheme === 'dark' ? 'white' : 'black';

  let sizeStyle = styles.defaultSize;
  if (node.tag === 'h1') sizeStyle = styles.h1;
  else if (node.tag === 'h2') sizeStyle = styles.h2;
  else if (node.tag === 'h3') sizeStyle = styles.h3;
  else if (node.tag === 'h4') sizeStyle = styles.h4;

  return (
    <View style={styles.container}>
       <Text style={[sizeStyle, styles.baseText, { color: textColor }]}>
        <RenderChildren children={node.children} />
       </Text>
    </View>
  );
};
