import{e}from"./chunk-EP6THQJ3.js";var n,o,t=e(()=>{n={comments:{lineComment:"#"}},o={defaultToken:"keyword",ignoreCase:!0,tokenPostfix:".azcli",str:/[^#\s]/,tokenizer:{root:[{include:"@comment"},[/\s-+@str*\s*/,{cases:{"@eos":{token:"key.identifier",next:"@popall"},"@default":{token:"key.identifier",next:"@type"}}}],[/^-+@str*\s*/,{cases:{"@eos":{token:"key.identifier",next:"@popall"},"@default":{token:"key.identifier",next:"@type"}}}]],type:[{include:"@comment"},[/-+@str*\s*/,{cases:{"@eos":{token:"key.identifier",next:"@popall"},"@default":"key.identifier"}}],[/@str+\s*/,{cases:{"@eos":{token:"string",next:"@popall"},"@default":"string"}}]],comment:[[/#.*$/,{cases:{"@eos":{token:"comment",next:"@popall"}}}]]}}});t();export{n as conf,o as language};
/*! Bundled license information:

monaco-editor/esm/vs/basic-languages/azcli/azcli.js:
  (*!-----------------------------------------------------------------------------
   * Copyright (c) Microsoft Corporation. All rights reserved.
   * Version: 0.43.0(94c055bcbdd49f04a0fa15515e848542a79fb948)
   * Released under the MIT license
   * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
   *-----------------------------------------------------------------------------*)
*/