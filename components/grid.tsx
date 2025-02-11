"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { type fave } from "@/lib/turso";
import { Item } from "@/components/item";

const LoadMoreTrigger = ({ onIntersect }: { onIntersect: () => void }) => {
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry?.isIntersecting) {
          onIntersect();
        }
      },
      {
        root: null,
        rootMargin: "200px",
        threshold: 0,
      },
    );

    const currentRef = triggerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => observer.disconnect();
  }, [onIntersect]);

  return (
    <div ref={triggerRef} className="mt-16 flex items-center justify-center">
      <p className="text-neutral-500">Loading more...</p>
    </div>
  );
};

export const Grid = ({ pagedFaves }: { pagedFaves: fave[][] }) => {
  const [visiblePages, setVisiblePages] = useState<number>(1);

  const visibleItems = pagedFaves.slice(0, visiblePages).flat();

  const loadMore = () => {
    if (visiblePages < pagedFaves.length) {
      setVisiblePages((prev) => prev + 1);
    }
  };

  return (
    <Suspense
      fallback={
        <p className="mt-8 text-3xl text-neutral-500 animate-pulse tracking-tight leading-relaxed">
          ᕙ( ~ . ~ )ᕗ
          <br />
          Fetching the images&hellip;
        </p>
      }
    >
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-7 gap-8 lg:gap-x-4 2xl:gap-8 items-end">
        {visibleItems.map((row) => (
          <Item key={row.id} item={row} />
        ))}
      </ul>

      {visiblePages < pagedFaves.length && (
        <LoadMoreTrigger onIntersect={loadMore} />
      )}
    </Suspense>
  );
};
