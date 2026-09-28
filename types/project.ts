import { Document } from "@contentful/rich-text-types";

export interface ProjectFields {
  title: string;
  slug: string;
  description: Document;
  thumbnail: {
    fields: {
      file: {
        url: string;
      };
    };
  };
  previewVideo?: {
    fields: {
      file: {
        url: string;
      };
    };
  };
  technologies: string[];
  url: string;
}

export interface Project {
  sys: {
    id: string;
  };
  fields: ProjectFields;
}