// Shared types for legal content files (privacy policy, terms). See each
// content file's LEGAL REVIEW REQUIRED notice.

export interface PolicySubsection {
  heading: string;
  content: string[];
}

export interface PolicySection {
  id: string;
  heading: string;
  content?: string[];
  subsections?: PolicySubsection[];
}
