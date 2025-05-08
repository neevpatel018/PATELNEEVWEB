import { useState, useEffect } from "react";

type ScrollPosition = {
  scrollY: number;
  scrollX: number;
};

export function useScrollPosition(): ScrollPosition {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    scrollY: 0,
    scrollX: 0,
  });

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition({
        scrollY: window.scrollY,
        scrollX: window.scrollX,
      });
    };

    window.addEventListener("scroll", updatePosition);
    updatePosition();

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPosition;
}

export function useActiveSection(sectionIds: string[], offset = 80): string | null {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const { scrollY } = useScrollPosition();

  useEffect(() => {
    // Check which section is in view
    const checkActiveSection = () => {
      const sections = sectionIds.map(id => {
        const element = document.getElementById(id);
        if (!element) return null;

        const top = element.offsetTop - offset;
        const bottom = top + element.offsetHeight;

        return { id, top, bottom };
      }).filter(Boolean);

      // Add a "buffer" section at the end to prevent the last section from being active when scrolled past it
      if (sections.length > 0) {
        const lastSection = sections[sections.length - 1];
        if (lastSection) {
          sections.push({
            id: "end",
            top: lastSection.bottom,
            bottom: document.body.scrollHeight,
          });
        }
      }

      // Find active section
      let active = null;
      for (const section of sections) {
        if (!section) continue;
        
        if (scrollY >= section.top && scrollY < section.bottom) {
          active = section.id;
          break;
        }
      }

      if (active !== "end") {
        setActiveSection(active);
      }
    };

    checkActiveSection();
  }, [scrollY, sectionIds, offset]);

  return activeSection;
}

export default useScrollPosition;
