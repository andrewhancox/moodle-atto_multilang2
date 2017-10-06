YUI.add("moodle-atto_multilang2-button",function(e,t){var n={TAG:"filter-multilang-tag"},r="%lang",i="%content",s="languages",o="capability",u="highlight",a="css",f='{"en":"English (en)"}',l=!0,c=!0,h="outline: 1px dotted;padding: 0.1em;margin: 0em 0.1em;background-color: #ffffaa;",p='<span class="'+n.TAG+'">',d="</span>",v={SPANNED:"&nbsp;"+p+"{mlang "+r+"}"+d+i+p+"{mlang}"+d+"&nbsp;",NOT_SPANNED:"{mlang "+r+"}"+i+"{mlang}"};e.namespace("M.atto_multilang2").Button=e.Base.create("button",e.M.editor_atto.EditorPlugin,[],{_highlight:!0,initializer:function(){var e=this.get(o),t,n,r;e&&(t=this._initializeToolbarItems(),this.addToolbarMenu({globalItemConfig:{callback:this._addTags},icon:"icon",iconComponent:"atto_multilang2",items:t}),this._tagTemplate=v.NOT_SPANNED,this._highlight=this.get(u),this._highlight&&(this._tagTemplate=v.SPANNED,n=this.get("host"),r=n.textarea.ancestor("form"),r&&r.on("submit",this._cleanMlangTags,this),this.get("host").on("atto:selectionchanged",this._checkSelectionChange,this),this.get("host").on("pluginsloaded",this._addHighlightingCss,this),this.get("host").on("pluginsloaded",this._highlightMlangTags,this),this._hookUpdateOriginal(),this._hookUpdateFromTextArea()))},_initializeToolbarItems:function(){var e=[],t,n;t=JSON.parse(this.get(s));for(n in t)t.hasOwnProperty(n)&&e.push({text:t[n],callbackArgs:n});return e},_addHighlightingCss:function(){var e="."+n.TAG+" {"+this.get(a)+"}",t;t=document.createElement("style"),t.type="text/css",t.innerHTML=e,document.head.appendChild(t)},_hookUpdateOriginal:function(){var e=this.get("host"),t=this;e.updateOriginal=function(){var n=e.updateOriginal;return function(){return t._highlight&&this.updateOriginal.caller===e.plugins.html._showHTML&&t.editor.setHTML(t._getHTMLwithCleanedTags(t.editor.getHTML())),n.apply(this,arguments)}}()},_hookUpdateFromTextArea:function(){var e=this.get("host"),t=this;e.updateFromTextArea=function(){var n=e.updateFromTextArea;return function(){var r=n.apply(this,arguments);return t._highlight&&this.updateFromTextArea.caller===e.plugins.html._showHTML&&t._highlightMlangTags(),r}}()},_addTags:function(e,t){var n,s=this.get("host"),o,u;o=this._tagTemplate,n=this._getSelectionHTML(),u=s.getSelection().toString().length===0?"&nbsp;":n,o=o.replace(r,t),o=o.replace(i,u),s.insertContentAtFocusPoint(o),this.markUpdated()},_getSelectionHTML:function(){var e="",t,n,r,i;if(typeof window.getSelection!="undefined"){t=window.getSelection();if(t.rangeCount){n=document.createElement("div");for(r=0,i=t.rangeCount;r<i;++r)n.appendChild(t.getRangeAt(r).cloneContents());e=n.innerHTML}}else typeof document.selection!="undefined"&&document.selection.type==="Text"&&(e=document.selection.createRange().htmlText);return e},_checkSelectionChange:function(){var t=this.get("host"),r=t.getSelectionParentNode(),i;if(typeof r=="undefined"||r===null||r===!1||typeof r.parentNode=="undefined"||r.parentNode===null)return;var s=r.parentNode.nodeName,o=r.parentNode.hasAttribute("class")?r.parentNode.getAttribute("class"):"";typeof s!="undefined"&&s!==null&&o!==""&&s==="SPAN"&&o.indexOf(n.TAG)!==-1&&(i=t.getSelectionFromNode(e.one(r)),t.setSelection(i))},_cleanMlangTags:function(){this._highlight&&(this.editor.setHTML(this._getHTMLwithCleanedTags(this.editor.getHTML())),this.markUpdated())},_highlightMlangTags:function(){var e,t,n,r,i,s,o=[],u;if(this._highlight){e=this._getHTMLwithCleanedTags(this.editor.getHTML()),t=new RegExp("{mlang.*?}","g"),n=e.match(t);if(n!==null){for(i=0;i<n.length;i++)r=n[i],u=o.indexOf(r)===-1,u&&(o.push(r),s=p+r+d,t=new RegExp(r,"g"),e=e.replace(t,s));this.editor.setHTML(e)}this.markUpdated()}},_getHTMLwithCleanedTags:function(e){var t=document.createElement("div"),r,i;return t.innerHTML=e,r=t.getElementsByTagName("span"),i=Array.prototype.slice.call(r,0),i.forEach(function(e){if(e.className.indexOf(n.TAG)!==-1){while(e.firstChild)e.parentNode.insertBefore(e.firstChild,e);e.parentNode.removeChild(e)}}),t.innerHTML}},{ATTRS:{languages:f,capability:l,highlight:c,css:h}})},"@VERSION@",{requires:["moodle-editor_atto-plugin"]});
