"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[853],{3905:(n,e,t)=>{t.d(e,{Zo:()=>d,kt:()=>m});var i=t(67294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,i,r=function(n,e){if(null==n)return{};var t,i,r={},o=Object.keys(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var c=i.createContext({}),s=function(n){var e=i.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},d=function(n){var e=s(n.components);return i.createElement(c.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return i.createElement(i.Fragment,{},e)}},p=i.forwardRef((function(n,e){var t=n.components,r=n.mdxType,o=n.originalType,c=n.parentName,d=l(n,["components","mdxType","originalType","parentName"]),p=s(t),m=r,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return t?i.createElement(f,a(a({ref:e},d),{},{components:t})):i.createElement(f,a({ref:e},d))}));function m(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var o=t.length,a=new Array(o);a[0]=p;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=n,l.mdxType="string"==typeof n?n:r,a[1]=l;for(var s=2;s<o;s++)a[s]=t[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},37211:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var i=t(87462),r=(t(67294),t(3905));const o={sidebar_position:3,title:"\u63a5\u5165XRMOD(Swift)"},a=void 0,l={unversionedId:"embed-swiftui",id:"embed-swiftui",title:"\u63a5\u5165XRMOD(Swift)",description:"",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs-ios-sdk/current/embed-swiftui.mdx",sourceDirName:".",slug:"/embed-swiftui",permalink:"/zh-Hans/ios-sdk/embed-swiftui",draft:!1,editUrl:"https://github.com/dyte-in/docs/tree/main/docs/ios-sdk/embed-swiftui.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"\u63a5\u5165XRMOD(Swift)"},sidebar:"tutorialSidebar",previous:{title:"\u63a5\u5165XRMOD(objectivec)",permalink:"/zh-Hans/ios-sdk/embed-oc"},next:{title:"Introduce",permalink:"/zh-Hans/ios-sdk/api-reference/introduce"}},c={},s=[],d={toc:s};function u(n){let{components:e,...t}=n;return(0,r.kt)("wrapper",(0,i.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("iframe",{height:"500px",width:"100%",className:"video-showcase",src:"//player.bilibili.com/player.html?aid=758355740&bvid=BV1q64y1o75i&cid=345215059&page=1",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true"}," "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift",metastring:'title="ARMODUtility.swift"',title:'"ARMODUtility.swift"'},'//\n//  ARMODUtility.swift\n//  ARMODStore\n//\n//  Created by Phantomsxr.com on 2021/5/2.\n//\n\nimport Foundation\n\n\nclass ARMODUtility {\n    public static var armod = ARMOD()\n    \n    static func getStatusBarHeight() -> CGFloat {\n        var heightToReturn: CGFloat = 0.0\n        for window in UIApplication.shared.windows {\n            if let height = window.windowScene?.statusBarManager?.statusBarFrame.height, height > heightToReturn {\n                heightToReturn = height\n            }\n        }\n        print(heightToReturn)\n        return heightToReturn\n    }\n    \n    static func initARMOD(){\n        \n        let configJson = convertPlistToJson(plistName: "AppConfig")\n        armod.registerAPIforNativeCalls(ARMODCallback())\n        armod.initARMOD(configJson)\n        armod.setUIInterfaceOrientation(.portrait)\n        armod.loadAndShowView()\n        \n    }\n    static func launchARById(id:String)  {\n        initARMOD()\n        armod.fetchProject(id)\n    }\n    \n    static func launchARScan()  {\n        initARMOD()\n        armod.fetchProjectByImage()\n    }\n    \n    static func convertPlistToJson(plistName:String) -> String {\n        if let url = Bundle.main.url(forResource:plistName, withExtension: "plist") {\n            do {\n                let data = try Data(contentsOf:url)\n                let dict = try PropertyListSerialization.propertyList(from: data, options: [], format: nil) as! [String:Any]\n                let jsonData = try JSONSerialization.data(withJSONObject: dict , options: .prettyPrinted)\n                return String(data: jsonData, encoding: String.Encoding.utf8) ?? ""\n            } catch {\n                print(error)\n            }\n        }\n        return ""\n    }\n}\n\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift",metastring:'title="ARMODCallback.swift"',title:'"ARMODCallback.swift"'},'//\n//  ARMODCallback.swift\n//  ARMOD Store\n//\n//  Created by phantomsxr.com on 2021/2/15.\n//\n\nimport Foundation\nimport UIKit\nimport SwiftUI\n\nclass ARMODCallback: UIResponder,NativeCallsProtocol {\n    func onARMODExit() {\n        \n    }\n\n    func packageSizeMoreThanPresetSize(_ currentSize: Float, preset presetSize: Float) {\n        showAlert(title: "Tips", buttonTitle: "Continue", msg: String(format: "Need to download %.2f", currentSize),completionHandler: {\n            ARMODUtility.armod.continueToDownloadARExperience()})\n    }\n    \n    fileprivate let loadingView = UIHostingController(rootView: LoadingView())\n    public static let arView = UIHostingController(rootView: ARView(statusBarHeight: ARMODUtility.getStatusBarHeight()))\n    \n    func throwException(_ message: String!, errorCode code: Int32) {\n        print(String(format: "[ERROR]:%@,code:%d", message,code))\n        showAlert(title: "ERROR", buttonTitle: "Ok", msg: String(format: "[ERROR]:%@,code:%d", message,code),completionHandler: {\n            ARMODUtility.armod.unloadAndHideView()})\n    }\n    \n \n    func addLoadingOverlay() {\n        let controller = ARMODUtility.armod.getController()\n        let view = controller?.view\n        \n        view!.addSubview(loadingView.view)\n        controller?.addChild(loadingView)\n        loadingView.didMove(toParent: controller)\n        loadingView.view.backgroundColor = UIColor.clear\n        loadingView.view.translatesAutoresizingMaskIntoConstraints = false\n        loadingView.view.topAnchor.constraint(equalTo: view!.topAnchor).isActive = true\n        loadingView.view.bottomAnchor.constraint(equalTo: view!.bottomAnchor).isActive = true\n        loadingView.view.leftAnchor.constraint(equalTo: view!.leftAnchor).isActive = true\n        loadingView.view.rightAnchor.constraint(equalTo: view!.rightAnchor).isActive = true\n        \n        view!.addSubview(ARMODCallback.arView.view)\n        controller?.addChild(ARMODCallback.arView)\n        ARMODCallback.arView.didMove(toParent: controller)\n        ARMODCallback.arView.view.backgroundColor = UIColor.clear\n        ARMODCallback.arView.view.translatesAutoresizingMaskIntoConstraints = false\n        ARMODCallback.arView.view.topAnchor.constraint(equalTo: view!.topAnchor).isActive = true\n        ARMODCallback.arView.view.bottomAnchor.constraint(equalTo: view!.bottomAnchor).isActive = true\n        ARMODCallback.arView.view.leftAnchor.constraint(equalTo: view!.leftAnchor).isActive = true\n        ARMODCallback.arView.view.rightAnchor.constraint(equalTo: view!.rightAnchor).isActive = true\n        \n    }\n\n    \n    func updateLoadingProgress(_ progress: Float) {\n    }\n    \n    func removeLoadingOverlay() {\n        loadingView.removeFromParent()\n        loadingView.dismiss(animated: true, completion: nil)\n        loadingView.view.removeFromSuperview()\n    }\n    \n    func deviceNotSupport() {\n        print("Device not support")\n    }\n    \n    func sdkInitialized() {\n        print("SDK Initialized")\n        \n    }\n    \n    func openBuilt(inBrowser url: String!) {\n        print("")\n    }\n    \n    func recognitionStart() {\n        \n    }\n    \n    func recognitionComplete() {\n        print("")\n    }\n    \n    func tryAcquireInformation(_ opTag: String!) -> String! {\n        return ""\n    }\n    \n    \n    //https://stackoverflow.com/a/60562200\n    @objc private func showAlert(title:String,buttonTitle:String,msg:String,completionHandler:@escaping()->Void){\n        let alert =  UIAlertController(title: title, message: msg, preferredStyle: .alert)\n        let cancelAction = UIAlertAction(title: buttonTitle, style: .cancel) { (action) in\n            completionHandler()\n        }\n        alert.addAction(cancelAction)\n        DispatchQueue.main.async {\n            ARMODUtility.armod.getController()?.present(alert, animated: true, completion: nil)\n        }\n    }    \n}\n\n')))}u.isMDXComponent=!0}}]);