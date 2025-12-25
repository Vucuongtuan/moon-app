//@ts-nocheck

import React from "react";
import { ThemedView } from "../themed-view";
import ContentBlock from "./blocks/Content";
import NotificationBlock from "./blocks/Notification";

const blockComponents = {
 "mobile-notification":NotificationBlock,
 "mobile-content":ContentBlock
};
export const Sections: React.FC<{
  blocks: Record<string, any>[];
}> = (props) => {

  const { blocks } = props;
  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0;

  if (hasBlocks) {
    return (
      <>
        {blocks!.map((block, idx) => {
          const { blockName, blockType } = block;
          if (blockType && blockType in blockComponents) {
            const Block =
              blockComponents[blockType as keyof typeof blockComponents];
            if (Block) {
              return (
                <ThemedView
                  aria-label={blockName || blockType}
                  key={`${blockType}-${idx}`}
                >
                  { }
                  {/* @ts-ignore - weird type mismatch here */}
                  <Block
                    {...block}
                    idx={idx}
                    lang={props.lang}
                  />
                </ThemedView>
              );
            }
          }
          return null;
        })}
      </>
    );
  }

  return null;
};
