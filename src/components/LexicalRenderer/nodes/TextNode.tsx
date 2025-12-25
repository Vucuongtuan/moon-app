import React from 'react';
import { Text } from 'react-native';
import { LexicalNode, TEXT_FORMAT_BOLD, TEXT_FORMAT_ITALIC, TEXT_FORMAT_STRIKETHROUGH, TEXT_FORMAT_UNDERLINE } from '../types';

export const TextNode = ({ node }: { node: LexicalNode }) => {
  const format = node.format || 0;

  let classes = "text-base leading-6 dark:text-white text-black";
  
  if (format & TEXT_FORMAT_BOLD) classes += " font-bold";
  if (format & TEXT_FORMAT_ITALIC) classes += " italic";
  if (format & TEXT_FORMAT_STRIKETHROUGH) classes += " line-through";
  if (format & TEXT_FORMAT_UNDERLINE) classes += " underline";

  return <Text className={classes}>{node.text}</Text>;
};
