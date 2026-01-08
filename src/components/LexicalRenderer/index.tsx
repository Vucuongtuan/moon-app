import React from 'react';
import { View } from 'react-native';
import { NodeRenderer } from './NodeRenderer';
import { LexicalRoot } from './types';
import { styles } from './LexicalRenderer.styles';

interface LexicalRendererProps {
  json: LexicalRoot | string; // Chấp nhận cả object hoặc string JSON
}

export const LexicalRenderer = ({ json }: LexicalRendererProps) => {
  if (!json) return null;

  let parsedJson: LexicalRoot;
  try {
    parsedJson = typeof json === 'string' ? JSON.parse(json) : json;
  } catch (e) {
    console.error("LexicalRenderer: Invalid JSON", e);
    return null;
  }

  if (!parsedJson?.root) return null;

  return (
    <View style={styles.container}>
      <NodeRenderer node={parsedJson.root} />
    </View>
  );
};
