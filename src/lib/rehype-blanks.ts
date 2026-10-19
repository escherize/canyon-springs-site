// Turns {{blank}} / {{blank:answer}} in sermon notes into <blank> elements.
// The Notes component renders each one as a fill-in field, with a hint button when there is an answer.
import type { Root, Element, Text, ElementContent } from "hast";

const BLANK = /\{\{blank(?::([^}]*))?\}\}/g;

export function rehypeBlanks() {
  return (tree: Root) => {
    let n = 0;
    const walk = (node: Root | Element) => {
      node.children = (node.children as ElementContent[]).flatMap((c): ElementContent[] => {
        if (c.type === "element") { walk(c); return [c]; }
        if (c.type !== "text" || !c.value.includes("{{blank")) return [c];
        const out: ElementContent[] = [];
        let last = 0;
        for (const m of c.value.matchAll(BLANK)) {
          if (m.index! > last) out.push({ type: "text", value: c.value.slice(last, m.index) } as Text);
          n += 1;
          const answer = m[1]?.trim() ?? "";
          out.push({ type: "element", tagName: "blank", properties: { dataN: String(n), dataAnswer: answer }, children: [] });
          last = m.index! + m[0].length;
        }
        if (last < c.value.length) out.push({ type: "text", value: c.value.slice(last) } as Text);
        return out;
      });
    };
    walk(tree);
  };
}
