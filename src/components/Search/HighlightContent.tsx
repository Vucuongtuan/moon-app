import { Lang } from "@/src/types";
import { englishCharMap, vietnameseCharMap } from "@/src/utils/charMap";
import { Text } from "react-native";

const normalizeChar = (char: string,locale:Lang): string => {
  return locale === 'vi' ? vietnameseCharMap[char] || char.toLowerCase() : englishCharMap[char] || char.toLowerCase();
};

const normalize = (str: string,locale:Lang): string => {
  return str.split("").map((char) => normalizeChar(char,locale)).join("");
};

const escapeRegex = (str: string): string =>
  str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");




export default function HighlightContent({text,keyword,locale}: {text: string,keyword: string,locale: Lang}) {
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
            result.push(<Text key={start} className="font-bold text-primary">{text.slice(start, end)}</Text>);
            lastIndex = end;
        }

        result.push(text.slice(lastIndex));
        return <Text>{result}</Text>;
}