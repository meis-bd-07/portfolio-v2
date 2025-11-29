export type FinderBase = {
  id: number;
  name: string;
  icon: string;
  kind: "folder" | "file";
  position?: string;
  windowPosition?: string;
  subtitle?: string;
  image?: string;
};

export type FinderFile = FinderBase & {
  kind: "file";
  fileType: "txt" | "url" | "img" | "fig" | "pdf";
  description?: string[];
  href?: string;
  imageUrl?: string;
};

export type FinderFolder = FinderBase & {
    type?: "work" | "about" | "resume" | "trash"
    kind: "folder";
    children: FinderItem[];
};

export type FinderItem = FinderFolder | FinderFile;

export type FinderLocations = Record<string, FinderFolder>;
