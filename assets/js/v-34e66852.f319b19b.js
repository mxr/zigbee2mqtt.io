"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[72241],{414407:(e,t,o)=>{o.r(t),o.d(t,{data:()=>d});const d=JSON.parse('{"key":"v-34e66852","path":"/devices/SE-20-250-1000-W2Z2.html","title":"Ltech SE-20-250-1000-W2Z2 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Ltech SE-20-250-1000-W2Z2 control via MQTT","description":"Integrate your Ltech SE-20-250-1000-W2Z2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-06-30T19:12:33.000Z"},"excerpt":"","headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Light","slug":"light","link":"#light","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1721468772000},"filePathRelative":"devices/SE-20-250-1000-W2Z2.md"}')},819037:(e,t,o)=>{o.r(t),o.d(t,{default:()=>g});var d=o(166252);const i=(0,d._)("h1",{id:"ltech-se-20-250-1000-w2z2",tabindex:"-1"},[(0,d._)("a",{class:"header-anchor",href:"#ltech-se-20-250-1000-w2z2","aria-hidden":"true"},"#"),(0,d.Uk)(" Ltech SE-20-250-1000-W2Z2")],-1),l=(0,d._)("thead",null,[(0,d._)("tr",null,[(0,d._)("th"),(0,d._)("th")])],-1),a=(0,d._)("tr",null,[(0,d._)("td",null,"Model"),(0,d._)("td",null,"SE-20-250-1000-W2Z2")],-1),c=(0,d._)("td",null,"Vendor",-1),s=(0,d._)("tr",null,[(0,d._)("td",null,"Description"),(0,d._)("td",null,"LED (CCT mode)")],-1),n=(0,d._)("tr",null,[(0,d._)("td",null,"Exposes"),(0,d._)("td",null,"light (state, brightness, color_temp), linkquality")],-1),r=(0,d._)("tr",null,[(0,d._)("td",null,"Picture"),(0,d._)("td",null,[(0,d._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/SE-20-250-1000-W2Z2.png",alt:"Ltech SE-20-250-1000-W2Z2"})])],-1),u=(0,d.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="light" tabindex="-1"><a class="header-anchor" href="#light" aria-hidden="true">#</a> Light</h3><p>This light supports the following features: <code>state</code>, <code>brightness</code>, <code>color_temp</code>.</p><ul><li><code>state</code>: To control the state publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the state send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</li><li><code>brightness</code>: To control the brightness publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;brightness&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>254</code>. To read the brightness send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;brightness&quot;: &quot;&quot;}</code>.</li><li><code>color_temp</code>: To control the color temperature (in reciprocal megakelvin a.k.a. mired scale) publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;color_temp&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>250</code> and <code>454</code>, the higher the warmer the color. To read the color temperature send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;color_temp&quot;: &quot;&quot;}</code>. Besides the numeric values the following values are accepted: <code>coolest</code>, <code>cool</code>, <code>neutral</code>, <code>warm</code>, <code>warmest</code>.</li></ul><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',6),h={},g=(0,o(983744).Z)(h,[["render",function(e,t){const o=(0,d.up)("RouterLink");return(0,d.wg)(),(0,d.iD)("div",null,[(0,d.kq)(" !!!! "),(0,d.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,d.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,d.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,d.kq)(" !!!! "),i,(0,d._)("table",null,[l,(0,d._)("tbody",null,[a,(0,d._)("tr",null,[c,(0,d._)("td",null,[(0,d.Wm)(o,{to:"/supported-devices/#v=Ltech"},{default:(0,d.w5)((()=>[(0,d.Uk)("Ltech")])),_:1})])]),s,n,r])]),(0,d.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,d.kq)(" Notes END: Do not edit below this line "),u])}]])}}]);