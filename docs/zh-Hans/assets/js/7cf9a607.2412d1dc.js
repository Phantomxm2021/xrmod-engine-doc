"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[6897],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,f=c["".concat(u,".").concat(m)]||c[m]||d[m]||l;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},73312:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=n(87462),a=(n(67294),n(3905)),l=n(65488),i=n(85162);const o={sidebar_position:2,title:"\u5d4c\u5165SDK\u5230Flutter"},u=void 0,s={unversionedId:"embed-flutter",id:"embed-flutter",title:"\u5d4c\u5165SDK\u5230Flutter",description:"\u4ec0\u4e48\u662f Flutter\uff1f",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs-flutter-sdk/current/embed-flutter.mdx",sourceDirName:".",slug:"/embed-flutter",permalink:"/zh-Hans/flutter-sdk/embed-flutter",draft:!1,editUrl:"https://github.com/Phantomxm2021/xrmod-engine-doc/tree/main/docs/flutter-sdk/embed-flutter.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u5d4c\u5165SDK\u5230Flutter"},sidebar:"tutorialSidebar",previous:{title:"\u4ecb\u7ecd",permalink:"/zh-Hans/flutter-sdk/"},next:{title:"Introduce",permalink:"/zh-Hans/flutter-sdk/api-reference/introduce"}},p={},d=[{value:"\u4ec0\u4e48\u662f Flutter\uff1f",id:"\u4ec0\u4e48\u662f-flutter",level:2},{value:"XR-MOD \u4e0e Flutter",id:"xr-mod-\u4e0e-flutter",level:2},{value:"\u8bbe\u7f6e Flutter \u9879\u76ee",id:"\u8bbe\u7f6e-flutter-\u9879\u76ee",level:2},{value:"\u7b2c 1 \u6b65",id:"\u7b2c-1-\u6b65",level:3},{value:"\u7b2c\u4e8c\u6b65",id:"\u7b2c\u4e8c\u6b65",level:3},{value:"\u7b2c\u4e09\u6b65",id:"\u7b2c\u4e09\u6b65",level:3},{value:"\u7b2c\u56db\u6b65",id:"\u7b2c\u56db\u6b65",level:3},{value:"Build and Test",id:"build-and-test",level:2}],c={toc:d};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4ec0\u4e48\u662f-flutter"},"\u4ec0\u4e48\u662f Flutter\uff1f"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://flutter.dev/"},"Flutter"),"\u662f\u8c37\u6b4c\u7684 UI \u5de5\u5177\u5305\uff0c\u7528\u4e8e\u4ece\u5355\u4e00\u4ee3\u7801\u5e93\u4e3a\u79fb\u52a8\u3001\u7f51\u7edc\u3001\u684c\u9762\u548c\u5d4c\u5165\u5f0f\u8bbe\u5907\u6784\u5efa\u6f02\u4eae\u7684\u3001\u539f\u751f\u7f16\u8bd1\u7684\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,a.kt)("h2",{id:"xr-mod-\u4e0e-flutter"},"XR-MOD \u4e0e Flutter"),(0,a.kt)("p",null,"\u8fc7\u53bb\uff0c\u8981\u5728 Flutter \u4e2d\u4f7f\u7528 AR-MOD sdk\uff0c\u5f00\u53d1\u8005\u9700\u8981\u4e3a Flutter \u9879\u76ee\u521b\u5efa AR-MOD \u63d2\u4ef6\uff0c\u8fd9\u6837 Flutter \u624d\u80fd\u4f7f\u7528 AR-MOD!\n\u6211\u4eec\u4e5f\u53d1\u73b0\u4e86\u8fd9\u4e2a\u95ee\u9898\uff0c\u6240\u4ee5\u6211\u4eec\u5728 0.0.4 \u7248\u672c\u4e2d\u63a8\u51fa\u4e86\u4e00\u4e2a\u5b8c\u5168\u652f\u6301 Flutter \u7684\u63d2\u4ef6\u3002\u6211\u4eec\u628a\u5b83\u63a8\u9001\u5230 pub.dev\uff0c\u540d\u5b57\u662f",(0,a.kt)("a",{parentName:"p",href:"https://pub.dev/packages/flutter_armod_widget"},"flutter_armod_widget"),"\u3002\n\u4ece\u73b0\u5728\u5f00\u59cb\uff0c\u6211\u5c06\u5e26\u9886\u5927\u5bb6\u770b\u770b\u5982\u4f55\u5728 Flutter \u4e2d\u4f7f\u7528 AR-MOD SDK\u3002"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u6211\u4eec\u5c06\u8df3\u8fc7\u5982\u4f55\u5b89\u88c5 flutter \u4ee5\u53ca\u5982\u4f55\u7528 flutter \u521b\u5efa\u4e00\u4e2a\u9879\u76ee  ")),(0,a.kt)("h2",{id:"\u8bbe\u7f6e-flutter-\u9879\u76ee"},"\u8bbe\u7f6e Flutter \u9879\u76ee"),(0,a.kt)("h3",{id:"\u7b2c-1-\u6b65"},"\u7b2c 1 \u6b65"),(0,a.kt)("p",null,"\u6253\u5f00",(0,a.kt)("inlineCode",{parentName:"p"},"pubspec.yaml"),"\u6587\u4ef6\uff0c\u5c06",(0,a.kt)("inlineCode",{parentName:"p"},"flutter_armod_widget: ^2.0.0-pre.1"),"\u5230\u4f9d\u8d56\u9879\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"dependencies:\n  flutter:\n    sdk: flutter\n  // highlight-next-line\n  flutter_armod_widget: ^2.0.0-pre.1\n")),(0,a.kt)("h3",{id:"\u7b2c\u4e8c\u6b65"},"\u7b2c\u4e8c\u6b65"),(0,a.kt)("p",null,"\u5728\u4f60\u7684\u9879\u76ee\u672f\u8bed\u4e2d\u8fd0\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"flutter pub get"),"\u547d\u4ee4\uff0c\u4ee5\u5b89\u88c5\u4f9d\u8d56\u6027\u3002"),(0,a.kt)("h3",{id:"\u7b2c\u4e09\u6b65"},"\u7b2c\u4e09\u6b65"),(0,a.kt)("p",null,"\u4ece",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Phantomxm2021/ARMOD-Framework"},"github"),"\u4e0b\u8f7d\u5e76\u89e3\u538b AR-MOD SDK \u6846\u67b6\u3002"),(0,a.kt)(l.Z,{groupId:"platform-setup",defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"android",mdxType:"TabItem"},(0,a.kt)("p",null,"\u8fdb\u5165",(0,a.kt)("inlineCode",{parentName:"p"},"FLUTTER-SDK-PATH/.pub-cache/hosted/pub.dartlang.org/flutter_armod_widget-VERSION/"),"\u6587\u4ef6\u5939\u7684\u4f4d\u7f6e\u3002\n\u7136\u540e\u5c06",(0,a.kt)("inlineCode",{parentName:"p"},"libs"),"\u7c98\u8d34\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"android"),"\u5e73\u53f0\u6587\u4ef6\u5939\u3002")),(0,a.kt)(i.Z,{value:"ios",mdxType:"TabItem"},(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728\u4f60\u7684 XCode \u9879\u76ee\u4e2d\u521b\u5efa ThirdParties \u6587\u4ef6\u5939\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5c06 UnityFramework.framework \u5bfc\u5165\u8be5\u6587\u4ef6\u5939\uff08ThridParties\uff09\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5c06\u6846\u67b6\u6dfb\u52a0\u5230",(0,a.kt)("inlineCode",{parentName:"li"},"Xcode"),"->",(0,a.kt)("inlineCode",{parentName:"li"},"Targets"),"->",(0,a.kt)("inlineCode",{parentName:"li"},"Your APP"),"->",(0,a.kt)("inlineCode",{parentName:"li"},"General"),"->",(0,a.kt)("inlineCode",{parentName:"li"},"Franework,Libraries,and Embedded Content"),"\u533a\u57df\uff0c\u5e76\u5c06\u5d4c\u5165\u6a21\u5f0f\u8bbe\u7f6e\u4e3a\u5d4c\u5165\u548c\u7b7e\u7f72\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6267\u884c cd iOS \u547d\u4ee4\u5e76\u5728\u4f60\u7684\u7ec8\u7aef\u4e0a\u8fd0\u884c Pod \u5b89\u88c5\u547d\u4ee4\u3002")))),(0,a.kt)("h3",{id:"\u7b2c\u56db\u6b65"},"\u7b2c\u56db\u6b65"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u518d\u6b21\u5728\u4f60\u7684\u7ec8\u7aef\u4e2d\u8fd0\u884c",(0,a.kt)("inlineCode",{parentName:"li"},"Flutter pub get"),"\u547d\u4ee4\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u521b\u5efa\u5e76\u5199\u5165\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u4ee4\u724c\u5230",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Phantomxm2021/ARMOD-FlutterAppDemo/blob/main/lib/src/config/phantomsxrConfig.dart"},"PhantomsXRConfig.dart"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5e76\u4e3a AR-MOD \u5199\u4e00\u4e2a\u65b0\u7684\u5c4f\u5e55\u3002")),(0,a.kt)("h2",{id:"build-and-test"},"Build and Test"),(0,a.kt)(l.Z,{groupId:"platform-setup",defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS-Swift",value:"ios-swift"},{label:"iOS-Objc",value:"ios-objc"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"android",mdxType:"TabItem"},(0,a.kt)("admonition",{type:"success"},(0,a.kt)("p",{parentName:"admonition"},"\u4e0d\u9700\u8981\u989d\u5916\u7684\u914d\u7f6e"))),(0,a.kt)(i.Z,{value:"ios-swift",mdxType:"TabItem"},(0,a.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f Swift\uff0c\u6253\u5f00",(0,a.kt)("inlineCode",{parentName:"p"},"ios/Runner/AppDelegate.swift"),"\u6587\u4ef6\uff0c\u4fee\u6539\u5982\u4e0b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift",metastring:'diff title="AppDelegate.swift"',diff:!0,title:'"AppDelegate.swift"'},'import UIKit\nimport Flutter\nimport flutter_armod_widget\n\n@UIApplicationMain\n@objc class AppDelegate: FlutterAppDelegate {\n  override func application(\n    _ application: UIApplication,\n    didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?\n  ) -> Bool {\n\n    InitARMODIntegrationWithOptions(argc: CommandLine.argc, argv: CommandLine.unsafeArgv, launchOptions)\n    let nativeCalls: AnyClass? = NSClassFromString("FrameworkLibAPI")\n    nativeCalls?.registerAPIforNativeCalls(ARMODCallbackAPI())\n\n    GeneratedPluginRegistrant.register(with: self)\n    return super.application(application, didFinishLaunchingWithOptions: launchOptions)\n  }\n}\n\n')),(0,a.kt)("p",null,'\u7f16\u8f91 "info.plist"\u3002'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},"<dict>\n    <key>io.flutter.embedded_views_preview</key>\n    <string>YES</string>\n</dict>\n\n<dict>\n    <key>Privacy - Camera Usage Description</key>\n    <string>$(PRODUCT_NAME) uses Cameras</string>\n</dict>\n\n<dict>\n    <key>NSBonjourServices</key>\n    <string>_dartobservatory._tcp</string>\n</dict>\n"))),(0,a.kt)(i.Z,{value:"ios-objc",mdxType:"TabItem"},(0,a.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528 Objective-C\uff0c\u6253\u5f00",(0,a.kt)("inlineCode",{parentName:"p"},"ios/Runner/main.m"),"\u6587\u4ef6\uff0c\u4fee\u6539\u5982\u4e0b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objectivec",metastring:'title="main.m"',title:'"main.m"'},'#import "flutter_armod_widget.swift.h"\nint main(int argc, char * argv[]) {\n    @autoreleasepool {\n        InitARMODIntegration(argc, argv);\n        return UIApplicationMain(argc, argv, nil, NSStringFromClass([AppDelegate class]));\n    }\n}\n')),(0,a.kt)("p",null,'\u7f16\u8f91 "info.plist"\u3002'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},"<dict>\n    <key>io.flutter.embedded_views_preview</key>\n    <string>YES</string>\n</dict>\n\n<dict>\n    <key>Privacy - Camera Usage Description</key>\n    <string>$(PRODUCT_NAME) uses Cameras</string>\n</dict>\n\n<dict>\n    <key>NSBonjourServices</key>\n    <string>_dartobservatory._tcp</string>\n</dict>\n")))),(0,a.kt)("p",null,"OK\uff0c\u4f60\u53ea\u9700\u8981\u5728\u7ec8\u7aef\u8fd0\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"flutter run --release"),"\u547d\u4ee4\u3002\u4e00\u4e2a AR \u5e94\u7528\u5c31\u4f1a\u5728\u4f60\u7684\u624b\u673a\u4e2d\u8fd0\u884c!\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Phantomxm2021/ARMOD-FlutterAppDemo"},"\u70b9\u51fb\u8fd9\u91cc"),"\u4e0b\u8f7d\u8fd9\u4e2a\u6e90\u4ee3\u7801!"))}m.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(86010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(87462),a=n(67294),l=n(86010),i=n(72389),o=n(67392),u=n(7094),s=n(12466);const p="tabList__CuJ",d="tabItem_LNqP";function c(e){var t,n;const{lazy:i,block:c,defaultValue:m,values:f,groupId:b,className:k}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=f?f:v.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),h=(0,o.l)(g,((e,t)=>e.value===t.value));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===m?m:null!=(t=null!=m?m:null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)?t:v[0].props.value;if(null!==y&&!g.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:O}=(0,u.U)(),[w,C]=(0,a.useState)(y),D=[],{blockElementScrollPositionUntilNextRender:T}=(0,s.o5)();if(null!=b){const e=N[b];null!=e&&e!==w&&g.some((t=>t.value===e))&&C(e)}const A=e=>{const t=e.currentTarget,n=D.indexOf(t),r=g[n].value;r!==w&&(T(t),C(r),null!=b&&O(b,String(r)))},_=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var r;const t=D.indexOf(e.currentTarget)+1;n=null!=(r=D[t])?r:D[0];break}case"ArrowLeft":{var a;const t=D.indexOf(e.currentTarget)-1;n=null!=(a=D[t])?a:D[D.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},k)},g.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>D.push(e),onKeyDown:_,onFocus:A,onClick:A},i,{className:(0,l.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),i?(0,a.cloneElement)(v.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,i.Z)();return a.createElement(c,(0,r.Z)({key:String(t)},e))}}}]);