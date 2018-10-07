declare const graphql: (query: TemplateStringsArray) => void;

declare module '*/package.json' {
    export const version: string;
    export const author: string;
}

interface ICSSModule {
    [className: string]: string;
}

declare module '*.module.css' {
    const cssModule: ICSSModule;
    export = cssModule;
}

declare module '*.module.scss' {
    const cssModule: ICSSModule;
    export = cssModule;
}
