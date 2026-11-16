import type { MarkdownInstance } from "astro";

export interface StorySource {
  title: string;
  url: string;
  asOf: string;
}
export interface StoryFrontmatter {
  title: string;
  slug: string;
  dek: string;
  kicker: string;
  published: string;
  updated: string;
  photo: string;
  feature?: boolean;
  related: string[];
  sources: StorySource[];
}

const modules = import.meta.glob<MarkdownInstance<StoryFrontmatter>>("../journal/*.md", { eager: true });

export const stories = Object.values(modules).sort(
  (a, b) => b.frontmatter.published.localeCompare(a.frontmatter.published) || Number(!!b.frontmatter.feature) - Number(!!a.frontmatter.feature),
);

export const storyPath = (slug: string) => `/journal/${slug}/`;

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
export function longDate(iso: string) {
  const [y, m, d] = iso.split("-");
  return `${Number(d)} ${MONTHS[Number(m) - 1]} ${y}`;
}
