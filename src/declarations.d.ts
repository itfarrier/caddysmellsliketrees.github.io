declare const graphql: (query: TemplateStringsArray) => void;

declare module "*/package.json" {
  export const version: string;
  export const author: string;
}

declare module "*.scss" {
  export const content: { [className: string]: string };
}
