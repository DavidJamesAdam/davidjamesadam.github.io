"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  type ReactElement,
  type ReactNode,
  useEffect,
  useMemo,
  useState,
} from "react";

export type UseTypewriterOptions = {
  startDelay?: number;
  minDelay?: number;
  maxDelay?: number;
};

type RemainingChars = {
  value: number;
};

function toGraphemes(value: string): string[] {
  return Array.from(value);
}

function extractText(node: ReactNode): string {
  if (node === null || node === undefined || typeof node === "boolean") {
    return "";
  }

  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }

  if (Array.isArray(node)) {
    return node.map(extractText).join("");
  }

  if (isValidElement(node)) {
    const element = node as ReactElement<{ children?: ReactNode }>;
    return extractText(element.props.children);
  }

  return "";
}

function truncateNode(node: ReactNode, remaining: RemainingChars): ReactNode {
  if (remaining.value <= 0) {
    return null;
  }

  if (node === null || node === undefined || typeof node === "boolean") {
    return null;
  }

  if (typeof node === "string" || typeof node === "number") {
    const source = String(node);
    const chars = toGraphemes(source);
    const take = Math.min(remaining.value, chars.length);
    const next = chars.slice(0, take).join("");

    remaining.value -= take;
    return next;
  }

  if (Array.isArray(node)) {
    const truncated = node
      .map((child) => truncateNode(child, remaining))
      .filter((child) => child !== null && child !== undefined);

    return truncated.length > 0 ? truncated : null;
  }

  if (isValidElement(node)) {
    const element = node as ReactElement<{ children?: ReactNode }>;
    const originalChildren = Children.toArray(element.props.children);

    if (originalChildren.length === 0) {
      return null;
    }

    const nextChildren = originalChildren
      .map((child) => truncateNode(child, remaining))
      .filter((child) => child !== null && child !== undefined);

    if (nextChildren.length === 0) {
      return null;
    }

    return cloneElement(element, element.props, ...nextChildren);
  }

  return null;
}

export function useTypewriter(
  content: ReactNode,
  options: UseTypewriterOptions = {}
) {
  const { startDelay = 500, minDelay = 100, maxDelay = 200 } = options;

  const fullText = useMemo(() => extractText(content), [content]);
  const totalChars = useMemo(() => toGraphemes(fullText).length, [fullText]);
  const fullChars = useMemo(() => toGraphemes(fullText), [fullText]);

  const [visibleChars, setVisibleChars] = useState(0);

  useEffect(() => {
    if (visibleChars >= totalChars) {
      return;
    }

    const timeout = window.setTimeout(
      () => {
        setVisibleChars((current) => Math.min(current + 1, totalChars));
      },
      visibleChars === 0
        ? startDelay
        : Math.max(minDelay, Math.random() * (maxDelay - minDelay) + minDelay)
    );

    return () => window.clearTimeout(timeout);
  }, [visibleChars, totalChars, startDelay, minDelay, maxDelay]);

  const typedText = useMemo(
    () => fullChars.slice(0, visibleChars).join(""),
    [fullChars, visibleChars]
  );

  const typedNode = useMemo(() => {
    const remaining: RemainingChars = { value: visibleChars };
    return truncateNode(content, remaining);
  }, [content, visibleChars]);

  return {
    typedNode,
    typedText,
    visibleChars,
    totalChars,
    isDone: visibleChars >= totalChars,
  };
}
