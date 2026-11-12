// Shape of an employment entry from the Hygraph `employments` query in pages/index.tsx.
export type Employment = {
  id: string;
  position: string;
  company: string;
  start: string;
  end: string;
};
