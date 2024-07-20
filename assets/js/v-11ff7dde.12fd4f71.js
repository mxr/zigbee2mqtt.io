"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[52684],{253686:(e,t,a)=>{a.r(t),a.d(t,{data:()=>i});const i=JSON.parse('{"key":"v-11ff7dde","path":"/devices/CSM-300ZB_V2.html","title":"ShinaSystem CSM-300ZB_V2 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"ShinaSystem CSM-300ZB_V2 control via MQTT","description":"Integrate your ShinaSystem CSM-300ZB_V2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-08-31T11:26:27.000Z"},"excerpt":"","headers":[{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Status (enum)","slug":"status-enum","link":"#status-enum","children":[]},{"level":3,"title":"People (numeric)","slug":"people-numeric","link":"#people-numeric","children":[]},{"level":3,"title":"Rf pairing on (enum)","slug":"rf-pairing-on-enum","link":"#rf-pairing-on-enum","children":[]},{"level":3,"title":"Counting freeze (binary)","slug":"counting-freeze-binary","link":"#counting-freeze-binary","children":[]},{"level":3,"title":"Tof init (enum)","slug":"tof-init-enum","link":"#tof-init-enum","children":[]},{"level":3,"title":"Led state (binary)","slug":"led-state-binary","link":"#led-state-binary","children":[]},{"level":3,"title":"Rf state (binary)","slug":"rf-state-binary","link":"#rf-state-binary","children":[]},{"level":3,"title":"Transaction (enum)","slug":"transaction-enum","link":"#transaction-enum","children":[]},{"level":3,"title":"Fast in (binary)","slug":"fast-in-binary","link":"#fast-in-binary","children":[]},{"level":3,"title":"Fast out (binary)","slug":"fast-out-binary","link":"#fast-out-binary","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1721468772000},"filePathRelative":"devices/CSM-300ZB_V2.md"}')},769132:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var i=a(166252);const o=(0,i._)("h1",{id:"shinasystem-csm-300zb-v2",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#shinasystem-csm-300zb-v2","aria-hidden":"true"},"#"),(0,i.Uk)(" ShinaSystem CSM-300ZB_V2")],-1),n=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),s=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"CSM-300ZB_V2")],-1),d=(0,i._)("td",null,"Vendor",-1),l=(0,i._)("tr",null,[(0,i._)("td",null,"Description"),(0,i._)("td",null,"SiHAS multipurpose ToF sensor")],-1),r=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"battery, voltage, status, people, rf_pairing_on, counting_freeze, tof_init, led_state, rf_state, transaction, fast_in, fast_out, linkquality")],-1),u=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/CSM-300ZB_V2.png",alt:"ShinaSystem CSM-300ZB_V2"})])],-1),c=(0,i._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,i.Uk)(" OTA updates")],-1),h=(0,i.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="status-enum" tabindex="-1"><a class="header-anchor" href="#status-enum" aria-hidden="true">#</a> Status (enum)</h3><p>Currently status. Value can be found in the published state on the <code>status</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>idle</code>, <code>in</code>, <code>out</code>.</p><h3 id="people-numeric" tabindex="-1"><a class="header-anchor" href="#people-numeric" aria-hidden="true">#</a> People (numeric)</h3><p>People count. Value can be found in the published state on the <code>people</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;people&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;people&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>.</p><h3 id="rf-pairing-on-enum" tabindex="-1"><a class="header-anchor" href="#rf-pairing-on-enum" aria-hidden="true">#</a> Rf pairing on (enum)</h3><p>Run RF pairing mode. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;rf_pairing_on&quot;: NEW_VALUE}</code>. The possible values are: <code>run</code>.</p><h3 id="counting-freeze-binary" tabindex="-1"><a class="header-anchor" href="#counting-freeze-binary" aria-hidden="true">#</a> Counting freeze (binary)</h3><p>Counting Freeze ON/OFF, not reporting people value when is ON. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;counting_freeze&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> counting freeze is ON, if <code>OFF</code> OFF.</p><h3 id="tof-init-enum" tabindex="-1"><a class="header-anchor" href="#tof-init-enum" aria-hidden="true">#</a> Tof init (enum)</h3><p>ToF sensor initial. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;tof_init&quot;: NEW_VALUE}</code>. The possible values are: <code>initial</code>.</p><h3 id="led-state-binary" tabindex="-1"><a class="header-anchor" href="#led-state-binary" aria-hidden="true">#</a> Led state (binary)</h3><p>Indicate LED enable/disable, default : enable. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;led_state&quot;: NEW_VALUE}</code>. If value equals <code>enable</code> led state is ON, if <code>disable</code> OFF.</p><h3 id="rf-state-binary" tabindex="-1"><a class="header-anchor" href="#rf-state-binary" aria-hidden="true">#</a> Rf state (binary)</h3><p>RF function enable/disable, default : disable. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;rf_state&quot;: NEW_VALUE}</code>. If value equals <code>enable</code> rf state is ON, if <code>disable</code> OFF.</p><h3 id="transaction-enum" tabindex="-1"><a class="header-anchor" href="#transaction-enum" aria-hidden="true">#</a> Transaction (enum)</h3><p>Transaction interval, default : 400ms. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;transaction&quot;: NEW_VALUE}</code>. The possible values are: <code>0ms</code>, <code>200ms</code>, <code>400ms</code>, <code>600ms</code>, <code>800ms</code>, <code>1,000ms</code>.</p><h3 id="fast-in-binary" tabindex="-1"><a class="header-anchor" href="#fast-in-binary" aria-hidden="true">#</a> Fast in (binary)</h3><p>Fast process enable/disable when people 0 to 1. default : enable. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;fast_in&quot;: NEW_VALUE}</code>. If value equals <code>enable</code> fast in is ON, if <code>disable</code> OFF.</p><h3 id="fast-out-binary" tabindex="-1"><a class="header-anchor" href="#fast-out-binary" aria-hidden="true">#</a> Fast out (binary)</h3><p>Fast process enable/disable when people 1 to 0. default : enable. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;fast_out&quot;: NEW_VALUE}</code>. If value equals <code>enable</code> fast out is ON, if <code>disable</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',27),p={},b=(0,a(983744).Z)(p,[["render",function(e,t){const a=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),o,(0,i._)("table",null,[n,(0,i._)("tbody",null,[s,(0,i._)("tr",null,[d,(0,i._)("td",null,[(0,i.Wm)(a,{to:"/supported-devices/#v=ShinaSystem"},{default:(0,i.w5)((()=>[(0,i.Uk)("ShinaSystem")])),_:1})])]),l,r,u])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,i.kq)(" Notes END: Do not edit below this line "),c,(0,i._)("p",null,[(0,i.Uk)("This device supports OTA updates, for more information see "),(0,i.Wm)(a,{to:"/guide/usage/ota_updates.html"},{default:(0,i.w5)((()=>[(0,i.Uk)("OTA updates")])),_:1}),(0,i.Uk)(".")]),h])}]])}}]);