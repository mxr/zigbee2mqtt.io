"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[54566],{37584:(e,t,i)=>{i.r(t),i.d(t,{data:()=>n});const n=JSON.parse('{"key":"v-7939a168","path":"/devices/511.324.html","title":"Iluminize 511.324 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Iluminize 511.324 control via MQTT","description":"Integrate your Iluminize 511.324 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-02-01T14:45:57.000Z"},"excerpt":"","headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Action group (numeric)","slug":"action-group-numeric","link":"#action-group-numeric","children":[]},{"level":3,"title":"Action transition time (numeric)","slug":"action-transition-time-numeric","link":"#action-transition-time-numeric","children":[]},{"level":3,"title":"Action step size (numeric)","slug":"action-step-size-numeric","link":"#action-step-size-numeric","children":[]},{"level":3,"title":"Action rate (numeric)","slug":"action-rate-numeric","link":"#action-rate-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1721468772000},"filePathRelative":"devices/511.324.md"}')},68916:(e,t,i)=>{i.r(t),i.d(t,{default:()=>m});var n=i(166252);const o=(0,n._)("h1",{id:"iluminize-511-324",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#iluminize-511-324","aria-hidden":"true"},"#"),(0,n.Uk)(" Iluminize 511.324")],-1),a=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th"),(0,n._)("th")])],-1),s=(0,n._)("tr",null,[(0,n._)("td",null,"Model"),(0,n._)("td",null,"511.324")],-1),c=(0,n._)("td",null,"Vendor",-1),d=(0,n._)("tr",null,[(0,n._)("td",null,"Description"),(0,n._)("td",null,"Zigbee handheld remote CCT 4 channels")],-1),r=(0,n._)("tr",null,[(0,n._)("td",null,"Exposes"),(0,n._)("td",null,"battery, action, action_group, action_transition_time, action_step_size, action_rate, linkquality")],-1),l=(0,n._)("tr",null,[(0,n._)("td",null,"Picture"),(0,n._)("td",null,[(0,n._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/511.324.png",alt:"Iluminize 511.324"})])],-1),u=(0,n._)("h2",{id:"options",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,n.Uk)(" Options")],-1),h=(0,n.uE)('<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span>\n  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span>\n  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>color_move</code>, <code>color_temperature_move</code>, <code>hue_move</code>, <code>brightness_step_up</code>, <code>brightness_step_down</code>, <code>recall_*</code>, <code>on</code>, <code>off</code>, <code>toggle</code>, <code>brightness_stop</code>, <code>brightness_move_up</code>, <code>brightness_move_down</code>, <code>color_loop_set</code>, <code>enhanced_move_to_hue_and_saturation</code>, <code>hue_stop</code>.</p><h3 id="action-group-numeric" tabindex="-1"><a class="header-anchor" href="#action-group-numeric" aria-hidden="true">#</a> Action group (numeric)</h3><p>Shows the zigbee2mqtt group bound to the active data point EP(1-4).. Value can be found in the published state on the <code>action_group</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="action-transition-time-numeric" tabindex="-1"><a class="header-anchor" href="#action-transition-time-numeric" aria-hidden="true">#</a> Action transition time (numeric)</h3><p>Value can be found in the published state on the <code>action_transition_time</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="action-step-size-numeric" tabindex="-1"><a class="header-anchor" href="#action-step-size-numeric" aria-hidden="true">#</a> Action step size (numeric)</h3><p>Value can be found in the published state on the <code>action_step_size</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="action-rate-numeric" tabindex="-1"><a class="header-anchor" href="#action-rate-numeric" aria-hidden="true">#</a> Action rate (numeric)</h3><p>Value can be found in the published state on the <code>action_rate</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',17),p={},m=(0,i(983744).Z)(p,[["render",function(e,t){const i=(0,n.up)("RouterLink");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.kq)(" !!!! "),(0,n.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,n.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,n.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,n.kq)(" !!!! "),o,(0,n._)("table",null,[a,(0,n._)("tbody",null,[s,(0,n._)("tr",null,[c,(0,n._)("td",null,[(0,n.Wm)(i,{to:"/supported-devices/#v=Iluminize"},{default:(0,n.w5)((()=>[(0,n.Uk)("Iluminize")])),_:1})])]),d,r,l])]),(0,n.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,n.kq)(" Notes END: Do not edit below this line "),u,(0,n._)("p",null,[(0,n._)("em",null,[(0,n.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.w5)((()=>[(0,n.Uk)("How to use device type specific configuration")])),_:1})])]),h])}]])}}]);