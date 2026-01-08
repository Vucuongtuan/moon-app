import { Lang } from "@/src/types";
import { englishCharMap, vietnameseCharMap } from "@/src/utils/charMap";
import { Text } from "react-native";
import { styles } from "./HighlightContent.styles";
import { useThemeColor } from "@/src/hooks/use-theme-color";

const normalizeChar = (char: string,locale:Lang): string => {
  return locale === 'vi' ? vietnameseCharMap[char] || char.toLowerCase() : englishCharMap[char] || char.toLowerCase();
};

const normalize = (str: string,locale:Lang): string => {
  return str.split("").map((char) => normalizeChar(char,locale)).join("");
};

const escapeRegex = (str: string): string =>
  str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");




export default function HighlightContent({text,keyword,locale}: {text: string,keyword: string,locale: Lang}) {
    // This hook call might violate rules if HighlightContent is called conditionally or in a loop.
    // However, HighlightContent is a component.
    // BUT the return statement `if(!keyword) return ...` happens BEFORE hook call if I put it at the top.
    // Hooks must be at the top level.
    const primaryColor = useThemeColor({}, 'primary');

    if(!keyword) return <Text>{text}</Text>
    const keywords = keyword.split(/\s+/)
    .map((k) => normalize(k.trim(),locale))
    .filter(Boolean);

    if(keyword.length === 0) return <Text>{text}</Text>

    const patterns = keywords.map((normKeyword) => {
        return normKeyword
        .split("")
        .map((char) => {
            const vietnameseVariants = Object.keys(vietnameseCharMap).filter(
            (key) => vietnameseCharMap[key] === char,
            );
            if (vietnameseVariants.length > 0) {
            return `(${[char, ...vietnameseVariants].join("|")})`;
            }
            return escapeRegex(char);
        })
        .join("");
    });

      const finalRegex = new RegExp(patterns.join("|"), "gi");

        let match;
        const result: React.ReactNode[] = [];
        let lastIndex = 0;

        while ((match = finalRegex.exec(text)) !== null) {
            const start = match.index;
            const end = finalRegex.lastIndex;
            if (start > lastIndex) result.push(text.slice(lastIndex, start));
            result.push(<Text key={start} style={[styles.highlight, { color: primaryColor }]}>{text.slice(start, end)}</Text>);
            lastIndex = end;
        }

        result.push(text.slice(lastIndex));
        return <Text>{result}</Text>;
}