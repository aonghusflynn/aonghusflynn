// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import homepage from './homepage';

Vue.config.productionTip = false;

console.log("Hello world");
var entry = document.getElementsByTagName('my-app')[0];

entry.appendChild(homepage());

/* eslint-disable no-new */
new Vue({
    el: '#app',
  });

