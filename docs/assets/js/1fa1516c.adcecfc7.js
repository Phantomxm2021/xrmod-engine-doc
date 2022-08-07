"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[477],{42310:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>u});var a=n(87462),l=(n(67294),n(3905));n(44681);const i={sidebar_position:2,title:"Embed SDK Java"},d=void 0,r={unversionedId:"embed",id:"embed",title:"Embed SDK Java",description:"Download the XRMOD AAR",source:"@site/docs/android-sdk/embed.mdx",sourceDirName:".",slug:"/embed",permalink:"/android-sdk/embed",draft:!1,editUrl:"https://github.com/dyte-in/docs/tree/main/docs/android-sdk/embed.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Embed SDK Java"},sidebar:"tutorialSidebar",previous:{title:"Introduce",permalink:"/android-sdk/"},next:{title:"Introduce",permalink:"/android-sdk/api-reference/introduce"}},o={},u=[{value:"Download the XRMOD AAR",id:"download-the-xrmod-aar",level:2},{value:"Import XRMOD AAR",id:"import-xrmod-aar",level:2},{value:"Embed Coding",id:"embed-coding",level:2},{value:"NDK Build Configure",id:"ndk-build-configure",level:3},{value:"Dependencies setup",id:"dependencies-setup",level:3},{value:"Implement Callback",id:"implement-callback",level:3},{value:"Launch AR",id:"launch-ar",level:3},{value:"Summary",id:"summary",level:2}],p={toc:u};function m(e){let{components:t,...i}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("coverimg",{url:n(57218),height:"25rem"}),(0,l.kt)("h2",{id:"download-the-xrmod-aar"},"Download the XRMOD AAR"),(0,l.kt)("p",null,"The first step to enhancing your application is to get our SDK\uff01\nWe have uploaded XRMOD Framework to github. You can ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Phantomxm2021/ARMOD-Framework"},"click here")," to go to the github page and download our XRMOD AAR. If you think XRMOD is good please give us a star. Thank you!"),(0,l.kt)("h2",{id:"import-xrmod-aar"},"Import XRMOD AAR"),(0,l.kt)("p",null,"Select your project's ",(0,l.kt)("inlineCode",{parentName:"p"},"app")," folder, via the context menu ",(0,l.kt)("inlineCode",{parentName:"p"},"Reveal in Finder (Mac)")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"Show in Explorer (Windows)"),". Place all downloaded AAR files in ",(0,l.kt)("inlineCode",{parentName:"p"},"app/libs/"),"."),(0,l.kt)("coverimg",{url:n(64842),height:"100%"}),(0,l.kt)("table",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"Image"),(0,l.kt)("td",null,"Name"),(0,l.kt)("td",null,"Format"),(0,l.kt)("td",null,"Brief")),(0,l.kt)("tr",null,(0,l.kt)("td",{rowspan:"7"},(0,l.kt)("coverimg",{url:n(83885),height:"25rem"}))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"unityLibrary-release"),(0,l.kt)("td",null,"AAR"),(0,l.kt)("td",null,"Main library")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"XRMODAPI-release"),(0,l.kt)("td",null,"AAR"),(0,l.kt)("td",null,"All API")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"UnityARCore"),(0,l.kt)("td",null,"AAR"),(0,l.kt)("td",null,"ARCore")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"arcore_client"),(0,l.kt)("td",null,"AAR"),(0,l.kt)("td",null,"ARCore")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"ARPresto"),(0,l.kt)("td",null,"AAR"),(0,l.kt)("td",null,"ARCore")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"unityandroidpermissions"),(0,l.kt)("td",null,"AAR"),(0,l.kt)("td",null,"ARCore"))),(0,l.kt)("h2",{id:"embed-coding"},"Embed Coding"),(0,l.kt)("h3",{id:"ndk-build-configure"},"NDK Build Configure"),(0,l.kt)("p",null,"Back to Android Studio Editor. And Edit ",(0,l.kt)("inlineCode",{parentName:"p"},"build.gradle(Module:YOUR_PROJECT_NAME.app)"),". Append some configre's code.\nAdding NDK to ",(0,l.kt)("inlineCode",{parentName:"p"},"android")," -> ",(0,l.kt)("inlineCode",{parentName:"p"},"defaultConfig")," block."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-gradle",metastring:'title="build.gradle(Module:ProjectName.app)"',title:'"build.gradle(Module:ProjectName.app)"'},"ndk {\n    abiFilters 'armeabi-v7a', 'x86', 'arm64-v8a'\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-gradle",metastring:'title="build.gradle(Module:ProjectName.app)"',title:'"build.gradle(Module:ProjectName.app)"'},"android {\n      ...\n    defaultConfig {\n                ...\n                //New config\n        ndk {\n            abiFilters 'armeabi-v7a', 'x86', 'arm64-v8a'\n        }\n        testInstrumentationRunner \"androidx.test.runner.AndroidJUnitRunner\"\n    }\n        ...\n}\n")),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Please set up according to the architecture you need")),(0,l.kt)("h3",{id:"dependencies-setup"},"Dependencies setup"),(0,l.kt)("p",null,"Adding dependencies. You can also use ",(0,l.kt)("inlineCode",{parentName:"p"},"implementation(name:'AAR_FILE_NAME',ext:'aar')")," to import new dependencies."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-gradle",metastring:'title="build.gradle(Module:ProjectName.app)"',title:'"build.gradle(Module:ProjectName.app)"'},"implementation fileTree(dir: 'libs', include: ['*.jar','*.aar'])\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-gradle",metastring:'title="build.gradle(Module:ProjectName.app)"',title:'"build.gradle(Module:ProjectName.app)"'},"dependencies {\n        //New dependencies\n    implementation fileTree(dir: 'libs', include: ['*.jar','*.aar'])\n\n    implementation 'androidx.appcompat:appcompat:1.2.0'\n    implementation 'com.google.android.material:material:1.2.1'\n    implementation 'androidx.constraintlayout:constraintlayout:2.0.4'\n    implementation 'androidx.navigation:navigation-fragment:2.3.1'\n    implementation 'androidx.navigation:navigation-ui:2.3.1'\n    testImplementation 'junit:junit:4.+'\n    androidTestImplementation 'androidx.test.ext:junit:1.1.2'\n    androidTestImplementation 'androidx.test.espresso:espresso-core:3.3.0'\n}\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Sync your gradle!")),(0,l.kt)("coverimg",{url:n(85861),height:"100%"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-gradle",metastring:'title="catlog"',title:'"catlog"'},"> Task :prepareKotlinBuildScriptModel UP-TO-DATE\n\nBUILD SUCCESSFUL in 762ms\n")),(0,l.kt)("h3",{id:"implement-callback"},"Implement Callback"),(0,l.kt)("p",null,"You must implement all abstract methods. These are callbacks of the XRMOD SDK."),(0,l.kt)("h3",{id:"launch-ar"},"Launch AR"),(0,l.kt)("p",null,"Create a new ",(0,l.kt)("inlineCode",{parentName:"p"},"Activity")," call it ",(0,l.kt)("inlineCode",{parentName:"p"},"ARView"),". Then extends ",(0,l.kt)("inlineCode",{parentName:"p"},"AbstractXRMODActivity")," and implementing abstract method ",(0,l.kt)("inlineCode",{parentName:"p"},"onCreateUI"),"\nGo to , adding the ",(0,l.kt)("inlineCode",{parentName:"p"},"ARView")," activity in ",(0,l.kt)("inlineCode",{parentName:"p"},"application")," block."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="androidmanifest.xml"',title:'"androidmanifest.xml"'},'<activity android:name=".ARView" android:screenOrientation="fullSensor" android:configChanges="mcc|mnc|locale|touchscreen|keyboard|keyboardHidden|navigation|orientation|screenLayout|uiMode|screenSize|smallestScreenSize|fontScale|layoutDirection|density" android:hardwareAccelerated="false" android:process=":Unity"\n            android:label="@string/app_name">\n</activity>\n')),(0,l.kt)("p",null,"Add some code to onCreateUI function."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'//Init sdk\ninitXRMOD("JSON Config",MainActivity.class);\n\n//Add UI from layout file\nLayoutInflater tmp_Inflater = getLayoutInflater();\nView tmp_ARView = tmp_Inflater.inflate(R.layout.arview_main,null);\ngetXRMODFrameLayout().addView(tmp_ARView);\n')),(0,l.kt)("p",null,"Add new function to stop the ARView."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public void CloseARView(View _v){\n        unloadAndHideXRMOD();\n    }\n")),(0,l.kt)("p",null,"Back to MainActivity.java, adding a new function to call the sdk."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public void ARLauncher(View _v){}\n")),(0,l.kt)("p",null,"Using the Intent to start a new activity."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"Intent intent = new Intent(this, ARView.class);\nintent.setFlags(Intent.FLAG_ACTIVITY_REORDER_TO_FRONT);\nstartActivityForResult(intent, 1);\n")),(0,l.kt)("h2",{id:"summary"},"Summary"),(0,l.kt)("p",null,"More infomation of Native API you should read Android Native Calls Protocol API. We uploaded the sample project of this Native Android (Java) project to github. At now you can download our source project from github."))}m.isMDXComponent=!0},44681:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294);const l="column_RQPg",i="container_GoNi";var d=n(71455);function r(e){let{children:t,imagePath:n}=e;return a.createElement("div",{className:i},a.createElement("div",{className:l},a.createElement(d.TV,null,a.createElement(d.HI,{src:n.default},a.createElement("img",{src:n.default,alt:"",style:{borderRadius:"1rem",objectFit:"fill"}})))),a.createElement("div",null,t))}},57218:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/anddroid-studio-view-80502ac8291d57f930f0a2fc8f65ce5b.png"},64842:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/appfolder-00a3968f5c890787851f876e1cbd3f49.png"},83885:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/dragtoset-59af1f793a6451c70ad4f3ae65b18d11.png"},85861:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a="data:image/png;base64,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"}}]);