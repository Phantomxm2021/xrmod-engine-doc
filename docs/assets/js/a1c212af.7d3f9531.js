"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[7067],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(t),m=i,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return t?r.createElement(f,a(a({ref:n},d),{},{components:t})):r.createElement(f,a({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},36137:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(87462),i=(t(67294),t(3905));const o={sidebar_position:3,title:"Embed SDK SwfitUI"},a=void 0,l={unversionedId:"embed-swiftui",id:"embed-swiftui",title:"Embed SDK SwfitUI",description:"",source:"@site/docs/ios-sdk/embed-swiftui.mdx",sourceDirName:".",slug:"/embed-swiftui",permalink:"/ios-sdk/embed-swiftui",draft:!1,editUrl:"https://github.com/dyte-in/docs/tree/main/docs/ios-sdk/embed-swiftui.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Embed SDK SwfitUI"},sidebar:"tutorialSidebar",previous:{title:"Embed SDK Objective-C",permalink:"/ios-sdk/embed-oc"},next:{title:"Introduce",permalink:"/ios-sdk/api-reference/introduce"}},c={},s=[],d={toc:s};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("iframe",{className:"video-showcase",src:"//player.bilibili.com/player.html?aid=758355740&bvid=BV1q64y1o75i&cid=345215059&page=1",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true"}," "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'//\n//  ARMODUtility.swift\n//  ARMODStore\n//\n//  Created by Phantomsxr.com on 2021/5/2.\n//\n\nimport Foundation\n\n\nclass ARMODUtility {\n    public static var armod = ARMOD()\n    \n    static func getStatusBarHeight() -> CGFloat {\n        var heightToReturn: CGFloat = 0.0\n        for window in UIApplication.shared.windows {\n            if let height = window.windowScene?.statusBarManager?.statusBarFrame.height, height > heightToReturn {\n                heightToReturn = height\n            }\n        }\n        print(heightToReturn)\n        return heightToReturn\n    }\n    \n    static func initARMOD(){\n        \n        let configJson = convertPlistToJson(plistName: "AppConfig")\n        armod.registerAPIforNativeCalls(ARMODCallback())\n        armod.initARMOD(configJson)\n        armod.setUIInterfaceOrientation(.portrait)\n        armod.loadAndShowView()\n        \n    }\n    static func launchARById(id:String)  {\n        initARMOD()\n        armod.fetchProject(id)\n    }\n    \n    static func launchARScan()  {\n        initARMOD()\n        armod.fetchProjectByImage()\n    }\n    \n    static func convertPlistToJson(plistName:String) -> String {\n        if let url = Bundle.main.url(forResource:plistName, withExtension: "plist") {\n            do {\n                let data = try Data(contentsOf:url)\n                let dict = try PropertyListSerialization.propertyList(from: data, options: [], format: nil) as! [String:Any]\n                let jsonData = try JSONSerialization.data(withJSONObject: dict , options: .prettyPrinted)\n                return String(data: jsonData, encoding: String.Encoding.utf8) ?? ""\n            } catch {\n                print(error)\n            }\n        }\n        return ""\n    }\n}\n\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'//\n//  ARMODCallback.swift\n//  ARMOD Store\n//\n//  Created by phantomsxr.com on 2021/2/15.\n//\n\nimport Foundation\nimport UIKit\nimport SwiftUI\n\nclass ARMODCallback: UIResponder,NativeCallsProtocol {\n    func onARMODExit() {\n        \n    }\n\n    func packageSizeMoreThanPresetSize(_ currentSize: Float, preset presetSize: Float) {\n        showAlert(title: "Tips", buttonTitle: "Continue", msg: String(format: "Need to download %.2f", currentSize),completionHandler: {\n            ARMODUtility.armod.continueToDownloadARExperience()})\n    }\n    \n    fileprivate let loadingView = UIHostingController(rootView: LoadingView())\n    public static let arView = UIHostingController(rootView: ARView(statusBarHeight: ARMODUtility.getStatusBarHeight()))\n    \n    func throwException(_ message: String!, errorCode code: Int32) {\n        print(String(format: "[ERROR]:%@,code:%d", message,code))\n        showAlert(title: "ERROR", buttonTitle: "Ok", msg: String(format: "[ERROR]:%@,code:%d", message,code),completionHandler: {\n            ARMODUtility.armod.unloadAndHideView()})\n    }\n    \n \n    func addLoadingOverlay() {\n        let controller = ARMODUtility.armod.getController()\n        let view = controller?.view\n        \n        view!.addSubview(loadingView.view)\n        controller?.addChild(loadingView)\n        loadingView.didMove(toParent: controller)\n        loadingView.view.backgroundColor = UIColor.clear\n        loadingView.view.translatesAutoresizingMaskIntoConstraints = false\n        loadingView.view.topAnchor.constraint(equalTo: view!.topAnchor).isActive = true\n        loadingView.view.bottomAnchor.constraint(equalTo: view!.bottomAnchor).isActive = true\n        loadingView.view.leftAnchor.constraint(equalTo: view!.leftAnchor).isActive = true\n        loadingView.view.rightAnchor.constraint(equalTo: view!.rightAnchor).isActive = true\n        \n        view!.addSubview(ARMODCallback.arView.view)\n        controller?.addChild(ARMODCallback.arView)\n        ARMODCallback.arView.didMove(toParent: controller)\n        ARMODCallback.arView.view.backgroundColor = UIColor.clear\n        ARMODCallback.arView.view.translatesAutoresizingMaskIntoConstraints = false\n        ARMODCallback.arView.view.topAnchor.constraint(equalTo: view!.topAnchor).isActive = true\n        ARMODCallback.arView.view.bottomAnchor.constraint(equalTo: view!.bottomAnchor).isActive = true\n        ARMODCallback.arView.view.leftAnchor.constraint(equalTo: view!.leftAnchor).isActive = true\n        ARMODCallback.arView.view.rightAnchor.constraint(equalTo: view!.rightAnchor).isActive = true\n        \n    }\n\n    \n    func updateLoadingProgress(_ progress: Float) {\n    }\n    \n    func removeLoadingOverlay() {\n        loadingView.removeFromParent()\n        loadingView.dismiss(animated: true, completion: nil)\n        loadingView.view.removeFromSuperview()\n    }\n    \n    func deviceNotSupport() {\n        print("Device not support")\n    }\n    \n    func sdkInitialized() {\n        print("SDK Initialized")\n        \n    }\n    \n    func openBuilt(inBrowser url: String!) {\n        print("")\n    }\n    \n    func recognitionStart() {\n        \n    }\n    \n    func recognitionComplete() {\n        print("")\n    }\n    \n    func tryAcquireInformation(_ opTag: String!) -> String! {\n        return ""\n    }\n    \n    \n    //https://stackoverflow.com/a/60562200\n    @objc private func showAlert(title:String,buttonTitle:String,msg:String,completionHandler:@escaping()->Void){\n        let alert =  UIAlertController(title: title, message: msg, preferredStyle: .alert)\n        let cancelAction = UIAlertAction(title: buttonTitle, style: .cancel) { (action) in\n            completionHandler()\n        }\n        alert.addAction(cancelAction)\n        DispatchQueue.main.async {\n            ARMODUtility.armod.getController()?.present(alert, animated: true, completion: nil)\n        }\n    }    \n}\n\n')))}u.isMDXComponent=!0}}]);