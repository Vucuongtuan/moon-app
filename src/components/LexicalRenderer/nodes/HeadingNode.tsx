import React from 'react';
import { Text, View } from 'react-native';
import { RenderChildren } from '../renderChildren';
import { LexicalNode } from '../types';

export const HeadingNode = ({ node }: { node: LexicalNode }) => {
  let sizeClass = 'text-xl';
  if (node.tag === 'h1') sizeClass = 'text-3xl';
  else if (node.tag === 'h2') sizeClass = 'text-2xl';
  else if (node.tag === 'h3') sizeClass = 'text-xl';
  else if (node.tag === 'h4') sizeClass = 'text-lg';

  return (
    <View className="mt-4 mb-2">
       <Text className={`${sizeClass} font-bold dark:text-white text-black`}>
        <RenderChildren children={node.children} />
       </Text>
    </View>
  );
};
