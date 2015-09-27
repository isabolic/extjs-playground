/*
This file is part of Ext JS 3.4

Copyright (c) 2011-2013 Sencha Inc

Contact:  http://www.sencha.com/contact

GNU General Public License Usage
This file may be used under the terms of the GNU General Public License version 3.0 as
published by the Free Software Foundation and appearing in the file LICENSE included in the
packaging of this file.

Please review the following information to ensure the GNU General Public License version 3.0
requirements will be met: http://www.gnu.org/copyleft/gpl.html.

If you are unsure which license is appropriate for your use, please contact the sales department
at http://www.sencha.com/contact.

Build date: 2013-04-03 15:07:25
*/
Ext.data.JsonP.Ext_LoadMask({"alternateClassNames":[],"aliases":{},"enum":null,"parentMixins":[],"tagname":"class","subclasses":[],"extends":null,"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/LoadMask.html#Ext-LoadMask' target='_blank'>LoadMask.js</a></div></pre><div class='doc-contents'><p>A simple utility class for generically masking elements while loading data.  If the <a href=\"#!/api/Ext.LoadMask-cfg-store\" rel=\"Ext.LoadMask-cfg-store\" class=\"docClass\">store</a>\nconfig option is specified, the masking will be automatically synchronized with the store's loading\nprocess and the mask element will be cached for reuse.  For all other elements, this mask will replace the\nelement's Updater load indicator and will be destroyed after the initial load.</p>\n\n<p>Example usage:</p>\n\n\n<pre><code>// Basic mask:\nvar myMask = new <a href=\"#!/api/Ext.LoadMask\" rel=\"Ext.LoadMask\" class=\"docClass\">Ext.LoadMask</a>(<a href=\"#!/api/Ext-method-getBody\" rel=\"Ext-method-getBody\" class=\"docClass\">Ext.getBody</a>(), {msg:\"Please wait...\"});\nmyMask.show();\n</code></pre>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-msg' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.LoadMask'>Ext.LoadMask</span><br/><a href='source/LoadMask.html#Ext-LoadMask-cfg-msg' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.LoadMask-cfg-msg' class='name expandable'>msg</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The text to display in a centered loading message box (defaults to 'Loading...') ...</div><div class='long'><p>The text to display in a centered loading message box (defaults to 'Loading...')</p>\n<p>Defaults to: <code>'Loading...'</code></p></div></div></div><div id='cfg-msgCls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.LoadMask'>Ext.LoadMask</span><br/><a href='source/LoadMask.html#Ext-LoadMask-cfg-msgCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.LoadMask-cfg-msgCls' class='name expandable'>msgCls</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The CSS class to apply to the loading message element (defaults to \"x-mask-loading\") ...</div><div class='long'><p>The CSS class to apply to the loading message element (defaults to \"x-mask-loading\")</p>\n<p>Defaults to: <code>'x-mask-loading'</code></p></div></div></div><div id='cfg-removeMask' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.LoadMask'>Ext.LoadMask</span><br/><a href='source/LoadMask.html#Ext-LoadMask-cfg-removeMask' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.LoadMask-cfg-removeMask' class='name expandable'>removeMask</a><span> : Boolean</span></div><div class='description'><div class='short'>True to create a single-use mask that is automatically destroyed after loading (useful for page loads),\nFalse to pers...</div><div class='long'><p>True to create a single-use mask that is automatically destroyed after loading (useful for page loads),\nFalse to persist the mask element reference for multiple uses (e.g., for paged data widgets).  Defaults to false.</p>\n</div></div></div><div id='cfg-store' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.LoadMask'>Ext.LoadMask</span><br/><a href='source/LoadMask.html#Ext-LoadMask-cfg-store' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.LoadMask-cfg-store' class='name expandable'>store</a><span> : <a href=\"#!/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Ext.data.Store</a></span></div><div class='description'><div class='short'>Optional Store to which the mask is bound. ...</div><div class='long'><p>Optional Store to which the mask is bound. The mask is displayed when a load request is issued, and\nhidden on either load sucess, or load fail.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-disabled' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.LoadMask'>Ext.LoadMask</span><br/><a href='source/LoadMask.html#Ext-LoadMask-property-disabled' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.LoadMask-property-disabled' class='name expandable'>disabled</a><span> : Boolean</span></div><div class='description'><div class='short'>Read-only. ...</div><div class='long'><p>Read-only. True if the mask is currently disabled so that it will not be displayed (defaults to false)</p>\n<p>Defaults to: <code>false</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.LoadMask'>Ext.LoadMask</span><br/><a href='source/LoadMask.html#Ext-LoadMask-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.LoadMask-method-constructor' class='name expandable'>Ext.LoadMask</a>( <span class='pre'>el, config</span> ) : <a href=\"#!/api/Ext.LoadMask\" rel=\"Ext.LoadMask\" class=\"docClass\">Ext.LoadMask</a></div><div class='description'><div class='short'>Create a new LoadMask ...</div><div class='long'><p>Create a new LoadMask</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : Mixed<div class='sub-desc'><p>The element or DOM node, or its id</p>\n</div></li><li><span class='pre'>config</span> : Object<div class='sub-desc'><p>The config object</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.LoadMask\" rel=\"Ext.LoadMask\" class=\"docClass\">Ext.LoadMask</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-disable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.LoadMask'>Ext.LoadMask</span><br/><a href='source/LoadMask.html#Ext-LoadMask-method-disable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.LoadMask-method-disable' class='name expandable'>disable</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Disables the mask to prevent it from being displayed ...</div><div class='long'><p>Disables the mask to prevent it from being displayed</p>\n</div></div></div><div id='method-enable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.LoadMask'>Ext.LoadMask</span><br/><a href='source/LoadMask.html#Ext-LoadMask-method-enable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.LoadMask-method-enable' class='name expandable'>enable</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Enables the mask so that it can be displayed ...</div><div class='long'><p>Enables the mask so that it can be displayed</p>\n</div></div></div><div id='method-hide' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.LoadMask'>Ext.LoadMask</span><br/><a href='source/LoadMask.html#Ext-LoadMask-method-hide' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.LoadMask-method-hide' class='name expandable'>hide</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Hide this LoadMask. ...</div><div class='long'><p>Hide this LoadMask.</p>\n</div></div></div><div id='method-show' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.LoadMask'>Ext.LoadMask</span><br/><a href='source/LoadMask.html#Ext-LoadMask-method-show' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.LoadMask-method-show' class='name expandable'>show</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Show this LoadMask over the configured Element. ...</div><div class='long'><p>Show this LoadMask over the configured Element.</p>\n</div></div></div></div></div></div></div>","superclasses":[],"meta":{},"requires":[],"html_meta":{},"statics":{"property":[],"cfg":[],"css_var":[],"method":[],"event":[],"css_mixin":[]},"files":[{"href":"LoadMask.html#Ext-LoadMask","filename":"LoadMask.js"}],"linenr":1,"members":{"property":[{"tagname":"property","owner":"Ext.LoadMask","meta":{},"name":"disabled","id":"property-disabled"}],"cfg":[{"tagname":"cfg","owner":"Ext.LoadMask","meta":{},"name":"msg","id":"cfg-msg"},{"tagname":"cfg","owner":"Ext.LoadMask","meta":{},"name":"msgCls","id":"cfg-msgCls"},{"tagname":"cfg","owner":"Ext.LoadMask","meta":{},"name":"removeMask","id":"cfg-removeMask"},{"tagname":"cfg","owner":"Ext.LoadMask","meta":{},"name":"store","id":"cfg-store"}],"css_var":[],"method":[{"tagname":"method","owner":"Ext.LoadMask","meta":{},"name":"constructor","id":"method-constructor"},{"tagname":"method","owner":"Ext.LoadMask","meta":{},"name":"disable","id":"method-disable"},{"tagname":"method","owner":"Ext.LoadMask","meta":{},"name":"enable","id":"method-enable"},{"tagname":"method","owner":"Ext.LoadMask","meta":{},"name":"hide","id":"method-hide"},{"tagname":"method","owner":"Ext.LoadMask","meta":{},"name":"show","id":"method-show"}],"event":[],"css_mixin":[]},"inheritable":null,"private":null,"component":false,"name":"Ext.LoadMask","singleton":false,"override":null,"inheritdoc":null,"id":"class-Ext.LoadMask","mixins":[],"mixedInto":[]});