"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7733],{7733:(h,c,a)=>{a.r(c),a.d(c,{GoogleAuthWeb:()=>p});var r=a(5861),g=a(7423);class p extends g.Uw{constructor(){super()}loadScript(){if(typeof document>"u")return;const e="gapi";if(null==document?void 0:document.getElementById(e))return;const n=document.getElementsByTagName("head")[0],s=document.createElement("script");s.type="text/javascript",s.defer=!0,s.async=!0,s.id=e,s.onload=this.platformJsLoaded.bind(this),s.src="https://apis.google.com/js/platform.js",n.appendChild(s)}initialize(e={clientId:"",scopes:[],grantOfflineAccess:!1}){var t,n;if(typeof window>"u")return;const s=null===(t=document.getElementsByName("google-signin-client_id")[0])||void 0===t?void 0:t.content,i=e.clientId||s||"";i||console.warn("GoogleAuthPlugin - clientId is empty"),this.options={clientId:i,grantOfflineAccess:null!==(n=e.grantOfflineAccess)&&void 0!==n&&n,scopes:e.scopes||[]},this.gapiLoaded=new Promise(o=>{window.gapiResolve=o,this.loadScript()}),this.addUserChangeListener()}platformJsLoaded(){gapi.load("auth2",()=>{const e={client_id:this.options.clientId,plugin_name:"CodetrixStudioCapacitorGoogleAuth"};this.options.scopes.length&&(e.scope=this.options.scopes.join(" ")),gapi.auth2.init(e),window.gapiResolve()})}signIn(){var e=this;return(0,r.Z)(function*(){return new Promise(function(){var t=(0,r.Z)(function*(n,s){var i;try{let o;const u=null!==(i=e.options.grantOfflineAccess)&&void 0!==i&&i;u?o=(yield gapi.auth2.getAuthInstance().grantOfflineAccess()).code:yield gapi.auth2.getAuthInstance().signIn();const l=gapi.auth2.getAuthInstance().currentUser.get();u&&(yield l.reloadAuthResponse());const d=e.getUserFrom(l);d.serverAuthCode=o,n(d)}catch(o){s(o)}});return function(n,s){return t.apply(this,arguments)}}())})()}refresh(){return(0,r.Z)(function*(){const e=yield gapi.auth2.getAuthInstance().currentUser.get().reloadAuthResponse();return{accessToken:e.access_token,idToken:e.id_token,refreshToken:""}})()}signOut(){return(0,r.Z)(function*(){return gapi.auth2.getAuthInstance().signOut()})()}addUserChangeListener(){var e=this;return(0,r.Z)(function*(){yield e.gapiLoaded,gapi.auth2.getAuthInstance().currentUser.listen(t=>{e.notifyListeners("userChange",t.isSignedIn()?e.getUserFrom(t):null)})})()}getUserFrom(e){const t={},n=e.getBasicProfile();t.email=n.getEmail(),t.familyName=n.getFamilyName(),t.givenName=n.getGivenName(),t.id=n.getId(),t.imageUrl=n.getImageUrl(),t.name=n.getName();const s=e.getAuthResponse(!0);return t.authentication={accessToken:s.access_token,idToken:s.id_token,refreshToken:""},t}}}}]);