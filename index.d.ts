declare module "iso-639-1" {
  interface ISO6391 {
    getName: (code: string) => string;
    getAllNames: () => Array<string>;
    getNativeName: (code: string) => string;
    getAllNativeNames: () => Array<string>;
    getCode: (name: string) => string;
    getAllCodes: () => Array<string>;
    validate: (code: string) => boolean;
    getLanguages: (codes: Array<string>) => Array<{
      code: string;
      name: string;
      nativeName: string;
    }>;
  }

  let localeCode: ISO6391;

  export default localeCode;
}
