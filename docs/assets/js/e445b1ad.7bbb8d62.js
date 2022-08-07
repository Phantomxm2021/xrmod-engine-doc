"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[2745],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),p=o,g=m["".concat(s,".").concat(p)]||m[p]||d[p]||i;return n?a.createElement(g,r(r({ref:t},u),{},{components:n})):a.createElement(g,r({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91966:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));n(65488),n(85162);const i={sidebar_position:2,title:"Embed SDK Objective-C"},r=void 0,l={unversionedId:"embed-oc",id:"embed-oc",title:"Embed SDK Objective-C",description:"Download the XRMOD Framework",source:"@site/docs/ios-sdk/embed-oc.mdx",sourceDirName:".",slug:"/embed-oc",permalink:"/ios-sdk/embed-oc",draft:!1,editUrl:"https://github.com/Phantomxm2021/xrmod-engine-docs-source/tree/main/docs/docs/ios-sdk/embed-oc.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Embed SDK Objective-C"},sidebar:"tutorialSidebar",previous:{title:"Introduce",permalink:"/ios-sdk/"},next:{title:"Embed SDK SwfitUI",permalink:"/ios-sdk/embed-swiftui"}},s={},c=[{value:"Download the XRMOD Framework",id:"download-the-xrmod-framework",level:2},{value:"Import ARMOD Framework",id:"import-armod-framework",level:2},{value:"Embed Coding",id:"embed-coding",level:2},{value:"Setup Project",id:"setup-project",level:2},{value:"iOS13 Or Above(Option)",id:"ios13-or-aboveoption",level:2},{value:"Implement Callback",id:"implement-callback",level:2},{value:"Launch AR",id:"launch-ar",level:3},{value:"Summary",id:"summary",level:2},{value:"Frequently Asked Error",id:"frequently-asked-error",level:2}],u={toc:c};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("coverimg",{url:n(45214),height:"25rem",padding:"0"}),(0,o.kt)("h2",{id:"download-the-xrmod-framework"},"Download the XRMOD Framework"),(0,o.kt)("p",null,"The first step to enhancing your application is to get our SDK\uff01\nWe have uploaded XRMOD Framework (0.0.1) to github. You can ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Phantomxm2021/ARMOD-Framework"},"click here")," to go to the github page and download our XRMOD framework. If you think XRMOD is good please give us a star. Thank you!"),(0,o.kt)("h2",{id:"import-armod-framework"},"Import ARMOD Framework"),(0,o.kt)("p",null,"Drag and drop the ARMOD SDK and scripts to your project."),(0,o.kt)("coverimg",{url:n(28766),height:"100%",padding:"0"}),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This image is from SwfitUI project. So it has ARMODStore-Bridging-Header.h file")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"UnityFramework.framework"),(0,o.kt)("td",{parentName:"tr",align:null},"This is core library, all AR algorithm in it")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ARMODCommunicationLayer.h"),(0,o.kt)("td",{parentName:"tr",align:null},"ARMOD SDK iOS function Interfaces")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ARMODCommunicationLayer.mm"),(0,o.kt)("td",{parentName:"tr",align:null},"Realization of ARMOD SDK iOS Function Interface")))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"ARMODCommunicationLayer.h and ARMODCommunicationLayer.mm are the connection layers for Unity interaction, also known as glue code.")),(0,o.kt)("p",null,"Drag and drop the ",(0,o.kt)("inlineCode",{parentName:"p"},"ARMOD UnityFramework.framework")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"Framework,Libraries,and Embeded content")," section. And set Embed type to Embed & Sign. Like this:"),(0,o.kt)("coverimg",{url:n(87956),height:"100%",padding:"0"}),(0,o.kt)("h2",{id:"embed-coding"},"Embed Coding"),(0,o.kt)("p",null,"Before we start, we have to figure out the relationship between ARMOD and Native app."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The first thing to be clear is that ARMOD does not contain any UI"),(0,o.kt)("li",{parentName:"ul"},"ARMOD only allows you to insert view or stack"),(0,o.kt)("li",{parentName:"ul"},"UI events and data are only notified by iOS Native Calls Protocol API"),(0,o.kt)("li",{parentName:"ul"},"UI operation events are only notified by iOS ARMOD API to ARMOD Engine")),(0,o.kt)("coverimg",{url:n(5665),height:"25rem",padding:"0"}),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Since native applications cannot directly monitor the status of ARMOD, such as download asset status, progress, ErrorAlert, etc., we can only implement ARMOD callback methods to monitor the status of ARMOD.")),(0,o.kt)("h2",{id:"setup-project"},"Setup Project"),(0,o.kt)("p",null,"Now we need to embed it into our native app. Edit the main.mm file and add a new line to it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objectivec",metastring:'title="main.mm"',title:'"main.mm"'},'//\n//  main.m\n//  ARDemo\n//\n//  Created by Phantomsxr.com on 2020/10/26.\n//\n\n#import <UIKit/UIKit.h>\n#import "AppDelegate.h"\n#import "NSObject+ARMOD.h"\nint main(int argc, char * argv[]) {\n    NSString * appDelegateClassName;\n    @autoreleasepool {\n        // Setup code that might create autoreleased objects goes here.\n        appDelegateClassName = NSStringFromClass([AppDelegate class]);\n    }\n    \n    //Add new line\n    [[ARMOD sharedInstance] connectArgcArgv:argc setgArgv:argv];\n    return UIApplicationMain(argc, argv, nil, appDelegateClassName);\n}\n\n')),(0,o.kt)("p",null,"Edit the AppDelegate.m file. Find the (BOOL)application:(UIApplication )application\ndidFinishLaunchingWithOptions:(NSDictionary )launchOptions and add some codes into this funtion."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objectivec",metastring:'title="AppDelegate.m"',title:'"AppDelegate.m"'},'#import "ARMODCommunicationLayer.h"\n\n- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {\n    // Override point for customization after application launch.\n\n    //New Line added\n    [self.window makeKeyAndVisible];    \n    [[ARMOD sharedInstance] connectARMOD:self.window]; \n    [[ARMOD sharedInstance] connectLaunchOpts:launchOptions];\n\n    return YES;\n}\n')),(0,o.kt)("h2",{id:"ios13-or-aboveoption"},"iOS13 Or Above(Option)"),(0,o.kt)("p",null,"Go to SceneDelegate.m file and edit it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objectivec",metastring:'title="SceneDelegate.m"',title:'"SceneDelegate.m"'},'#import "ARMODCommunicationLayer.h"\n- (void)scene:(UIScene *)scene willConnectToSession:(UISceneSession *)session options:(UISceneConnectionOptions *)connectionOptions {\n    \n    // Use this method to optionally configure and attach the UIWindow `window` to the provided UIWindowScene `scene`.\n    // If using a storyboard, the `window` property will automatically be initialized and attached to the scene.\n    // This delegate does not imply the connecting scene or session are new (see `application:configurationForConnectingSceneSession` instead).\n    \n    //    self.window =[[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];\n    [[self window] makeKeyAndVisible];\n    \n    //New Line\n    [[ARMOD sharedInstance] connectARMOD:self.window];\n}\n')),(0,o.kt)("h2",{id:"implement-callback"},"Implement Callback"),(0,o.kt)("h3",{id:"launch-ar"},"Launch AR"),(0,o.kt)("p",null,"Because every time you start ARMOD, you need to pass in the information to initialize the SDK in order to verify your corresponding account.\nWe need to call the following line of code to initialize. Since the ARMOD initialization interface only supports data in JSON format, you can use your favorite data format to convert it to json and then pass it into this method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objectivec"},"//Configure AR SDK. We need to convert the dictionary to NSString and then pass it to our SDK.\n[self.armod initARMOD:[self convertToJsonData:appConfigDict]];\n")),(0,o.kt)("p",null,"This function can help us convert NSDictionary to Json format."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objectivec"},'/// Convert dict to json string\n/// @param dict dict\n/// @return Json string\n- (NSString *)convertToJsonData:(NSDictionary *)dict\n{\n    NSError *error;\n    NSData *jsonData = [NSJSONSerialization dataWithJSONObject:dict options:NSJSONWritingPrettyPrinted error:&error];\n    NSString *jsonString;\n    \n    if (!jsonData) {\n        NSLog(@"%@",error);\n    } else {\n        jsonString = [[NSString alloc]initWithData:jsonData encoding:NSUTF8StringEncoding];\n    }\n\n    NSMutableString *mutStr = [NSMutableString stringWithString:jsonString];\n    NSRange range = {0,jsonString.length};\n    [mutStr replaceOccurrencesOfString:@" " withString:@"" options:NSLiteralSearch range:range];\n    NSRange range2 = {0,mutStr.length};\n    [mutStr replaceOccurrencesOfString:@"\\n" withString:@"" options:NSLiteralSearch range:range2];\n    \n    return mutStr;\n}\n\n')),(0,o.kt)("p",null,"In here we create a file of plist to hold our initialization data. Call it AppConfig.plist"),(0,o.kt)("coverimg",{url:n(64355),height:"25rem",padding:"0"}),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"imageCloudRecognizerConfig is not supported yet, so you can ignore it")),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"This is our Json format. You must be consistent with this format\uff01"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "dashboardConfig": {\n        "token": "YOUR_APP_TOKEN",\n        "dashboardGateway": "ARMOD_GATEWAY_URL",\n    "timeout":30,\n    "maximumDownloadSize":30\n    }\n}\n'))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Key"),(0,o.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"dashboardConfig"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"Root name.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"token"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"For authentication.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"dashboardGateway"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"URL to http request.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"timeout"),(0,o.kt)("td",{parentName:"tr",align:null},"Int"),(0,o.kt)("td",{parentName:"tr",align:null},"Http request timeout.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"maximumDownloadSize"),(0,o.kt)("td",{parentName:"tr",align:null},"Float"),(0,o.kt)("td",{parentName:"tr",align:null},"Maximum download size of AR experience package. If this value is exceeded, the (void)packageSizeMoreThanPresetSize:(float)currentSize preset:(float)presetSize method will be responded.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"EngineType"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"Used to inform what environment the AR MOD SDK is currently running in. If it is based on Unity secondary development, you need to fill in Unity.")))),(0,o.kt)("p",null,"We can add a Button and UITextField to our Main.storyboard and add the event for the button. Like this:"),(0,o.kt)("coverimg",{url:n(35033),height:"25rem",fit:"contain"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"UITextField will be used to enter the UID of our AR Experience.\nButton will be used to lanuch AR.")),(0,o.kt)("p",null,"Assign the ButtonEvent method to our AR Launch button."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objectivec"},'/// Launch AR button event\n/// @param sender button\n- (IBAction)ButtonEvent:(UIButton *)sender {\n//    NSLog(@"Hi,You are tapping the AR-Luancher button!");\n    \n    //load the application config file (property list) for AR SDK\n    NSString *appConfigFilePath = [[NSBundle mainBundle] pathForResource:@"AppConfig" ofType:@"plist"];\n    NSDictionary *appConfigDict = [NSDictionary dictionaryWithContentsOfFile:appConfigFilePath];\n    \n    //ARSDK is a singleton\n    self.armod = ARMOD.sharedInstance;\n    \n    //SDK event register,e.g. download asset event,Not Support event and so on.\n    [self.armod registerAPIforNativeCalls:[ARViewExtension alloc]];\n    \n    //Configure AR SDK. We need to convert the dictionary to NSString and then pass it to our SDK.\n    [self.armod initARMOD:[self convertToJsonData:appConfigDict]];\n    \n    //Set the ar view to follow the orientation of the app itself\n    [self.armod setUIInterfaceOrientation:(int)self.orientationState];\n    \n    //Init show the AR view\n    [self.armod loadAndShowARMODView];\n    \n    //Fetch data\n    [self.armod fetchProject:self.projectId];\n\n    self.arViewUI = [[ARViewUI alloc] init];\n    [self.arViewUI createARViewButton:self.armod];\n}\n')),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"ARMOD UnityFramework is not support Bitcode")),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"More infomation of Native API you should read iOS Native Calls Protocol API. We uploaded the sample project of this Native OC project to github. At now you can download our source project from github."),(0,o.kt)("h2",{id:"frequently-asked-error"},"Frequently Asked Error"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"}," __mhexecute_header ")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"removed s.pod_target_xcconfig = { 'OTHER_LDFLAGS' => ","['-ObjC']"," }"),(0,o.kt)("li",{parentName:"ul"},"Add libc++.tbd")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"}," UILaunchStoryboardName ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-log"},'@"UILaunchStoryboardName key is missing from info.plist"), \nfunction ShowSplashScreen, file /Users/*/Documents/*/*/\nARMODs/Unity/ARMOD-iOS-Unity/ARMOD-iOS/Build/U201904/\nClasses/UI/SplashScreen.mm, line 186.\n')),(0,o.kt)("p",null,"Add UILaunchStoryboardName field to your project's plist."))}d.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),o=n(86010);const i="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(i,r),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(87462),o=n(67294),i=n(86010),r=n(72389),l=n(67392),s=n(7094),c=n(12466);const u="tabList__CuJ",d="tabItem_LNqP";function m(e){var t,n;const{lazy:r,block:m,defaultValue:p,values:g,groupId:h,className:f}=e,k=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=g?g:k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,l.l)(N,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const b=null===p?p:null!=(t=null!=p?p:null==(n=k.find((e=>e.props.default)))?void 0:n.props.value)?t:k[0].props.value;if(null!==b&&!N.some((e=>e.value===b)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+N.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:C,setTabGroupChoices:A}=(0,s.U)(),[O,v]=(0,o.useState)(b),R=[],{blockElementScrollPositionUntilNextRender:j}=(0,c.o5)();if(null!=h){const e=C[h];null!=e&&e!==O&&N.some((t=>t.value===e))&&v(e)}const S=e=>{const t=e.currentTarget,n=R.indexOf(t),a=N[n].value;a!==O&&(j(t),v(a),null!=h&&A(h,String(a)))},Y=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=R.indexOf(e.currentTarget)+1;n=null!=(a=R[t])?a:R[0];break}case"ArrowLeft":{var o;const t=R.indexOf(e.currentTarget)-1;n=null!=(o=R[t])?o:R[R.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,i.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":m},f)},N.map((e=>{let{value:t,label:n,attributes:r}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>R.push(e),onKeyDown:Y,onFocus:S,onClick:S},r,{className:(0,i.Z)("tabs__item",d,null==r?void 0:r.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),r?(0,o.cloneElement)(k.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function p(e){const t=(0,r.Z)();return o.createElement(m,(0,a.Z)({key:String(t)},e))}},64355:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/configure-a7826daa5dae5bc4f4cf45cb3a6f3d2b.png"},87956:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/dragtoembed-06876134ce19fdc8b45f26d6b2433ab9.png"},5665:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/layers-9ccb0bb40f629053f4cd1cca60caad7b.png"},28766:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/setup-4254babc42d2648adf4fd238bc61a302.png"},35033:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a="data:image/png;base64,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"},45214:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/xcode-preview-5e156dc68ca3a2830f30556686612214.png"}}]);