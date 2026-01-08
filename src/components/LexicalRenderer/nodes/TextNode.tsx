import React from 'react';
import { Text, useColorScheme, TextStyle } from 'react-native';
import { LexicalNode, TEXT_FORMAT_BOLD, TEXT_FORMAT_ITALIC, TEXT_FORMAT_STRIKETHROUGH, TEXT_FORMAT_UNDERLINE } from '../types';
import { styles } from './TextNode.styles';

export const TextNode = ({ node }: { node: LexicalNode }) => {
  const format = node.format || 0;
  const colorScheme = useColorScheme();
  const textColor = colorScheme === 'dark' ? 'white' : 'black';

  const textStyles: TextStyle[] = [styles.base, { color: textColor }];
  
  if (format & TEXT_FORMAT_BOLD) textStyles.push(styles.bold);
  if (format & TEXT_FORMAT_ITALIC) textStyles.push(styles.italic);
  
  const decorations: string[] = [];
  if (format & TEXT_FORMAT_STRIKETHROUGH) decorations.push('line-through');
  if (format & TEXT_FORMAT_UNDERLINE) decorations.push('underline');

  if (decorations.length > 0) {
      textStyles.push({ textDecorationLine: decorations.join(' ') as TextStyle['textDecorationLine'] });
  }

  return <Text style={textStyles}>{node.text}</Text>;
};
