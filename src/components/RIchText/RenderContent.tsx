import { WebView } from 'react-native-webview';

interface RenderContent {
    html: string;
    className?: string;
}

export default function RenderContent(props: RenderContent) {
    const { html, className } = props;


    const inlineWrapHTML = `
   <html>
   
    <style>
        body { font-family: sans-serif; line-height: 1.6; color: #333; font-size: 1.1em; } /* Tăng kích thước chữ cơ bản */
        h1, h2, h3, h4, h5, h6 { margin-top: 1.5em; margin-bottom: 0.5em; font-weight: bold; line-height: 1.2; }
        h1 { font-size: 4em; } /* Tăng kích thước H1 */
        h2 { font-size: 3.5em; } /* Tăng kích thước H2 */
        h3 { font-size: 3.2em; } /* Tăng kích thước H3 */
        h4 { font-size: 2.9em; } /* Tăng kích thước H4 */
        p { margin-bottom: 1em; font-size: 2.5rem; } /* Tăng kích thước chữ đoạn văn */
        a { color: #007bff; text-decoration: none; }
        a:hover { text-decoration: underline; }
        ul, ol { margin-bottom: 1em; margin-left: 1.5em; padding: 0; }
        li { margin-bottom: 0.5em; font-size: 2.5rem; }
        blockquote { border-left: 4px solid #ccc; margin: 1.5em 0; padding: 0.5em 1em; color: #666; }
        pre { background-color: #f4f4f4; padding: 1em; border-radius: 4px; overflow-x: auto; }
        code { font-family: monospace; background-color: #f4f4f4; padding: 0.2em 0.4em; border-radius: 3px; }
        img { max-width: 100%; height: auto; display: block; margin: 1em auto; }
        table { width: 100%; border-collapse: collapse; margin-bottom: 1em; }
        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
        th { background-color: #f2f2f2; }
    </style>
   <body>
    ${html}
    </body>
   </html>
    `
    return <WebView source={{ html: inlineWrapHTML }} style={{ flex: 1, backgroundColor: 'transparent' }} />;
}