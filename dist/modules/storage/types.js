"use strict";Object.defineProperty(exports,"__esModule",{value:true});Object.defineProperty(exports,"SimpleFileStorage",{enumerable:true,get:()=>SimpleFileStorage});const _fs=_interopRequireDefault(require("fs"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}class SimpleFileStorage{async createStorageFile(data=""){const dir_path=this.file_path.split("/").slice(0,-1).join("/");if(_fs.default.existsSync(this.file_path)){await _fs.default.promises.writeFile(this.file_path,data,{flag:"w"});return}await _fs.default.promises.mkdir(dir_path,{recursive:true});await _fs.default.promises.writeFile(this.file_path,data,{flag:"w"});return}async readStorageFile(){return await _fs.default.promises.readFile(this.file_path,{encoding:"utf8"})}constructor(file_path){this.file_path=file_path}}