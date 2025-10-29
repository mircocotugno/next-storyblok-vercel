export function sbVersion(preview?: boolean) {
  // in locale/QA puoi forzare sempre draft
  if (process.env.NEXT_PUBLIC_SB_LOCAL_DRAFT === "true")
    return "draft" as const;
  // altrimenti rispetta il preview mode, altrimenti published
  return preview ? ("draft" as const) : ("published" as const);
}

// opzionale: bust cache Storyblok quando sei in draft
export function sbCacheVersion(version: "draft" | "published") {
  return version === "draft" ? Date.now() : undefined;
}
