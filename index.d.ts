// Type definitions for feathers-nedb-fuzzy-search 1.3.1
// Definitions by: Blair Williams <https://nexvia.com.au>

export = search;

declare function search(options: FeathersNedbFuzzySearch.SearchOptions | string[]): any;

declare namespace FeathersNedbFuzzySearch {
  export interface SearchOptions
  {
    //Specify which fields to search.
    fields?: string[];
    //If true and fields is undefined, will search deep in objects. nedb search mode only
    deep?: boolean;
    //If true, diacritics will be ignored. 5x slower. nedb search mode only
    fuzzyDiacritics?: boolean;
    //Specify which fields to exclude from search. nedb regex mode only
    excludeFields?: string[];
  }
}
