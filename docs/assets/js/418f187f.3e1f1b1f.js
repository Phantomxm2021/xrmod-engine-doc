"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[740],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,f=c["".concat(u,".").concat(m)]||c[m]||d[m]||l;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},35889:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=n(87462),a=(n(67294),n(3905)),l=n(65488),i=n(85162);const o={sidebar_position:2,title:"Embed SDK Flutter",keywords:["ar","xr","vr","apple glasses","hololens","quest","pico","easyAR","vuforia","xrmod","mod","doc","metaverse","facebook","meta","unity"],image:"img/xrmod-docs-card.png",description:"This article describes in detail how to embed XRMOD into Flutter applications."},u=void 0,s={unversionedId:"embed-flutter",id:"embed-flutter",title:"Embed SDK Flutter",description:"This article describes in detail how to embed XRMOD into Flutter applications.",source:"@site/docs/flutter-sdk/embed-flutter.mdx",sourceDirName:".",slug:"/embed-flutter",permalink:"/flutter-sdk/embed-flutter",draft:!1,editUrl:"https://github.com/Phantomxm2021/xrmod-engine-docs-source/tree/main/docs/docs/flutter-sdk/embed-flutter.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Embed SDK Flutter",keywords:["ar","xr","vr","apple glasses","hololens","quest","pico","easyAR","vuforia","xrmod","mod","doc","metaverse","facebook","meta","unity"],image:"img/xrmod-docs-card.png",description:"This article describes in detail how to embed XRMOD into Flutter applications."},sidebar:"tutorialSidebar",previous:{title:"Introduce",permalink:"/flutter-sdk/"},next:{title:"Introduce",permalink:"/flutter-sdk/api-reference/introduce"}},p={},d=[{value:"What is Flutter?",id:"what-is-flutter",level:2},{value:"XR-MOD with Flutter",id:"xr-mod-with-flutter",level:2},{value:"Setup Flutter project",id:"setup-flutter-project",level:2},{value:"Step 1",id:"step-1",level:3},{value:"Step 2",id:"step-2",level:3},{value:"Step 3",id:"step-3",level:3},{value:"Step 4",id:"step-4",level:3},{value:"Build and Test",id:"build-and-test",level:2}],c={toc:d};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-is-flutter"},"What is Flutter?"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://flutter.dev/"},"Flutter")," is Google's UI toolkit for building beautiful, natively compiled applications for mobile, web, desktop, and embedded devices from a single codebase."),(0,a.kt)("h2",{id:"xr-mod-with-flutter"},"XR-MOD with Flutter"),(0,a.kt)("p",null,"In the past, to use AR-MOD sdk in Flutter, developers need to create AR-MOD plug-ins for Flutter projects, so that Flutter can use AR-MOD!\nWe also found this problem, so we launched a plug-in that fully supports Flutter in version 0.0.4. We pushed it to pub.dev and the name is ",(0,a.kt)("a",{parentName:"p",href:"https://pub.dev/packages/flutter_armod_widget"},"flutter_armod_widget"),".\nFrom now on I will lead you to see how to use AR-MOD SDK in Flutter."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"We will skip how to install flutter and how to create a project with flutter ")),(0,a.kt)("h2",{id:"setup-flutter-project"},"Setup Flutter project"),(0,a.kt)("h3",{id:"step-1"},"Step 1"),(0,a.kt)("p",null,"Open the ",(0,a.kt)("inlineCode",{parentName:"p"},"pubspec.yaml")," file and write the ",(0,a.kt)("inlineCode",{parentName:"p"},"flutter_armod_widget: ^2.0.0-pre.1")," to dependencies ."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"dependencies:\n  flutter:\n    sdk: flutter\n  flutter_armod_widget: ^2.0.0-pre.1\n")),(0,a.kt)("h3",{id:"step-2"},"Step 2"),(0,a.kt)("p",null,"Run the ",(0,a.kt)("inlineCode",{parentName:"p"},"flutter pub get")," command in your project's termial to install the dependencies."),(0,a.kt)("h3",{id:"step-3"},"Step 3"),(0,a.kt)("p",null,"Download and unzip the AR-MOD SDK Framework from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Phantomxm2021/ARMOD-Framework"},"github"),"."),(0,a.kt)(l.Z,{groupId:"platform-setup",defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"android",mdxType:"TabItem"},(0,a.kt)("p",null,"Go to the location of ",(0,a.kt)("inlineCode",{parentName:"p"},"FLUTTER-SDK-PATH/.pub-cache/hosted/pub.dartlang.org/flutter_armod_widget-VERSION/")," folder,\nthen paste the libs to android platform folder.")),(0,a.kt)(i.Z,{value:"ios",mdxType:"TabItem"},(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create the ThirdParties folder to your XCode project."),(0,a.kt)("li",{parentName:"ul"},"Import UnityFramework.framework to the folder(ThridParties)."),(0,a.kt)("li",{parentName:"ul"},"Add the Framewrok to ",(0,a.kt)("inlineCode",{parentName:"li"},"Xcode")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"Targets")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"Your APP")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"General")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"Franework,Libraries, and Embedded Content")," area, And set the Embed mode to Embed & Sign."),(0,a.kt)("li",{parentName:"ul"},"Execute the cd iOS command and run Pod install command in your termial.")))),(0,a.kt)("h3",{id:"step-4"},"Step 4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"Flutter pub get")," command in your termial again."),(0,a.kt)("li",{parentName:"ul"},"Create and write your app token to ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Phantomxm2021/ARMOD-FlutterAppDemo/blob/main/lib/src/config/phantomsxrConfig.dart"},"PhantomsXRConfig.dart"),"."),(0,a.kt)("li",{parentName:"ul"},"And write a new screen for AR-MOD.")),(0,a.kt)("h2",{id:"build-and-test"},"Build and Test"),(0,a.kt)(l.Z,{groupId:"platform-setup",defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"android",mdxType:"TabItem"},(0,a.kt)("admonition",{type:"success"},(0,a.kt)("p",{parentName:"admonition"},"No additional configuration required"))),(0,a.kt)(i.Z,{value:"ios",mdxType:"TabItem"},(0,a.kt)("p",null,"If you're using Swift, open the ",(0,a.kt)("inlineCode",{parentName:"p"},"ios/Runner/AppDelegate.swift")," file and change the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift",metastring:'diff title="AppDelegate.swift"',diff:!0,title:'"AppDelegate.swift"'},'import UIKit\nimport Flutter\nimport flutter_armod_widget\n\n@UIApplicationMain\n@objc class AppDelegate: FlutterAppDelegate {\n  override func application(\n    _ application: UIApplication,\n    didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?\n  ) -> Bool {\n  \n    InitARMODIntegrationWithOptions(argc: CommandLine.argc, argv: CommandLine.unsafeArgv, launchOptions)\n    let nativeCalls: AnyClass? = NSClassFromString("FrameworkLibAPI")\n    nativeCalls?.registerAPIforNativeCalls(ARMODCallbackAPI())\n    \n    GeneratedPluginRegistrant.register(with: self)\n    return super.application(application, didFinishLaunchingWithOptions: launchOptions)\n  }\n}\n\n')),(0,a.kt)("p",null,"If you're using Objective-C, open the ",(0,a.kt)("inlineCode",{parentName:"p"},"ios/Runner/main.m")," file and change the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objectivec",metastring:'title="main.m"',title:'"main.m"'},'#import "flutter_armod_widget.swift.h"\nint main(int argc, char * argv[]) {\n    @autoreleasepool {\n        InitARMODIntegration(argc, argv);\n        return UIApplicationMain(argc, argv, nil, NSStringFromClass([AppDelegate class]));\n    }\n}\n')),(0,a.kt)("p",null,"Edit the ",(0,a.kt)("inlineCode",{parentName:"p"},"info.plist")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},"<dict>\n    <key>io.flutter.embedded_views_preview</key>\n    <string>YES</string>\n</dict>\n\n<dict>\n    <key>Privacy - Camera Usage Description</key>\n    <string>$(PRODUCT_NAME) uses Cameras</string>\n</dict>\n\n<dict>\n    <key>NSBonjourServices</key>\n    <string>_dartobservatory._tcp</string>\n</dict>\n")))),(0,a.kt)("p",null,"OK, you just need to run ",(0,a.kt)("inlineCode",{parentName:"p"},"flutter run --release")," command in the terminal.  An AR app will be run in your phone!\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Phantomxm2021/ARMOD-FlutterAppDemo"},"Click here")," to download this source code!"))}m.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(86010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(87462),a=n(67294),l=n(86010),i=n(72389),o=n(67392),u=n(7094),s=n(12466);const p="tabList__CuJ",d="tabItem_LNqP";function c(e){var t,n;const{lazy:i,block:c,defaultValue:m,values:f,groupId:h,className:b}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=f?f:g.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),k=(0,o.l)(v,((e,t)=>e.value===t.value));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===m?m:null!=(t=null!=m?m:null==(n=g.find((e=>e.props.default)))?void 0:n.props.value)?t:g[0].props.value;if(null!==y&&!v.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:O}=(0,u.U)(),[N,D]=(0,a.useState)(y),A=[],{blockElementScrollPositionUntilNextRender:C}=(0,s.o5)();if(null!=h){const e=w[h];null!=e&&e!==N&&v.some((t=>t.value===e))&&D(e)}const T=e=>{const t=e.currentTarget,n=A.indexOf(t),r=v[n].value;r!==N&&(C(t),D(r),null!=h&&O(h,String(r)))},x=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var r;const t=A.indexOf(e.currentTarget)+1;n=null!=(r=A[t])?r:A[0];break}case"ArrowLeft":{var a;const t=A.indexOf(e.currentTarget)-1;n=null!=(a=A[t])?a:A[A.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},b)},v.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>A.push(e),onKeyDown:x,onFocus:T,onClick:T},i,{className:(0,l.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),i?(0,a.cloneElement)(g.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,i.Z)();return a.createElement(c,(0,r.Z)({key:String(t)},e))}}}]);