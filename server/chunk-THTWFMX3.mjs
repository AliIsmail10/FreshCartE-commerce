import './polyfills.server.mjs';
import{a as r}from"./chunk-MCAFKGXN.mjs";import{q as a}from"./chunk-66ZGBEUF.mjs";import{T as o,Y as n}from"./chunk-N7QL3EPF.mjs";var f=(()=>{let t=class t{constructor(e){this._HttpClient=e}getAllCategories(){return this._HttpClient.get(`${r.baseUrl}/api/v1/categories`)}GetSpecificCategory(e){return this._HttpClient.get(`${r.baseUrl}/api/v1/categories/${e}`)}};t.\u0275fac=function(c){return new(c||t)(n(a))},t.\u0275prov=o({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();export{f as a};
