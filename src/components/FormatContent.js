const headingClasses = {
  1: "text-7xl",
  2: "text-5xl",
  3: "text-4xl",
  4: "text-3xl",
  5: "text-2xl",
  6: "text-xl",
};

export function FormatContent(blocks) {
  const formatText = (children) => {
    return children.map((child, index) => {
      if (child.type === "text") {
        let text = child.text;
        if (child.bold) text = <b key={index}>{text}</b>;
        if (child.italic) text = <em key={index}>{text}</em>;
        return text;
      }
      if (child.type === "link") {
        return (
          <a
            href={child.url}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            {formatText(child.children)}
          </a>
        );
      }
      return null;
    });
  };

  return blocks.map((block, index) => {
    if (block.type === "paragraph") {
      return (
        <p key={index} className="mb-4">
          {formatText(block.children)}
        </p>
      );
    }
    if (block.type === "image") {
      return (
        <img
          key={index}
          src={block.image.url}
          alt={block.image.alternativeText || ""}
          className="my-4 max-w-full h-auto"
        />
      );
    }
    if (block.type === "heading") {
      const HeadingTag = `h${block.level}`;
      const headingClass = headingClasses[block.level] || "text-xl";
      return (
        <HeadingTag
          key={index}
          className={`${headingClass} font-extrabold mt-12 mb-4`}
        >
          {formatText(block.children)}
        </HeadingTag>
      );
    }
    if (block.type === "quote") {
      return (
        <blockquote
          key={index}
          className="border-l-4 border-black italic pl-4 my-4"
        >
          {formatText(block.children)}
        </blockquote>
      );
    }
    if (block.type === "list") {
      const ListTag = block.format === "ordered" ? "ol" : "ul";
      const listClass =
        block.format === "ordered" ? "list-decimal pl-6" : "list-disc pl-6";
      return (
        <ListTag key={index} className={listClass}>
          {block.children.map((item, itemIndex) => (
            <li key={itemIndex}>{formatText(item.children)}</li>
          ))}
        </ListTag>
      );
    }
    return null;
  });
}
