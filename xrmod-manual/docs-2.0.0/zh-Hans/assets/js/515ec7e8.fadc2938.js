"use strict";(self.webpackChunkxrmod_manual=self.webpackChunkxrmod_manual||[]).push([[441],{90095:e=>{e.exports=JSON.parse('{"pluginId":"android-sdk","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"\u4ecb\u7ecd","href":"/zh-Hans/android-sdk/","docId":"intro"},{"type":"link","label":"\u5d4c\u5165SDK\u5230\u5e94\u7528","href":"/zh-Hans/android-sdk/embed","docId":"embed"},{"type":"category","label":"API \u6587\u6863","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Introduce","href":"/zh-Hans/android-sdk/api-reference/introduce","docId":"api-reference/introduce"},{"type":"category","label":"Protocol APIs","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"DeviceNotSupoort","href":"/zh-Hans/android-sdk/api-reference/protocol-api/DeviceNotSupoort","docId":"api-reference/protocol-api/DeviceNotSupoort"},{"type":"link","label":"NeedInstallARCoreService","href":"/zh-Hans/android-sdk/api-reference/protocol-api/NeedInstallARCoreService","docId":"api-reference/protocol-api/NeedInstallARCoreService"},{"type":"link","label":"OnARMODExit","href":"/zh-Hans/android-sdk/api-reference/protocol-api/OnARMODExit","docId":"api-reference/protocol-api/OnARMODExit"},{"type":"link","label":"OnARMODLaunch","href":"/zh-Hans/android-sdk/api-reference/protocol-api/OnARMODLaunch","docId":"api-reference/protocol-api/OnARMODLaunch"},{"type":"link","label":"OnAddLoadingOverlay","href":"/zh-Hans/android-sdk/api-reference/protocol-api/OnAddLoadingOverlay","docId":"api-reference/protocol-api/OnAddLoadingOverlay"},{"type":"link","label":"OpenBuiltInBrowser","href":"/zh-Hans/android-sdk/api-reference/protocol-api/OpenBuiltInBrowser","docId":"api-reference/protocol-api/OpenBuiltInBrowser"},{"type":"link","label":"PackageSizeMoreThanPresetSize","href":"/zh-Hans/android-sdk/api-reference/protocol-api/PackageSizeMoreThanPresetSize","docId":"api-reference/protocol-api/PackageSizeMoreThanPresetSize"},{"type":"link","label":"RecognitionComplete(unavailable)","href":"/zh-Hans/android-sdk/api-reference/protocol-api/RecognitionComplete","docId":"api-reference/protocol-api/RecognitionComplete"},{"type":"link","label":"RecognitionStart(unavailable)","href":"/zh-Hans/android-sdk/api-reference/protocol-api/RecognitionStart","docId":"api-reference/protocol-api/RecognitionStart"},{"type":"link","label":"SDKInitialized","href":"/zh-Hans/android-sdk/api-reference/protocol-api/SDKInitialized","docId":"api-reference/protocol-api/SDKInitialized"},{"type":"link","label":"ThrowException","href":"/zh-Hans/android-sdk/api-reference/protocol-api/ThrowException","docId":"api-reference/protocol-api/ThrowException"},{"type":"link","label":"TryAcquireInformation","href":"/zh-Hans/android-sdk/api-reference/protocol-api/TryAcquireInformation","docId":"api-reference/protocol-api/TryAcquireInformation"},{"type":"link","label":"UpdateLoadingProgress","href":"/zh-Hans/android-sdk/api-reference/protocol-api/UpdateLoadingProgress","docId":"api-reference/protocol-api/UpdateLoadingProgress"},{"type":"link","label":"onRemoveLoadingOverlay","href":"/zh-Hans/android-sdk/api-reference/protocol-api/onRemoveLoadingOverlay","docId":"api-reference/protocol-api/onRemoveLoadingOverlay"}]},{"type":"category","label":"XRMOD APIs","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"CleanCache","href":"/zh-Hans/android-sdk/api-reference/xrmod-api/CleanCache","docId":"api-reference/xrmod-api/CleanCache"},{"type":"link","label":"FetchProject","href":"/zh-Hans/android-sdk/api-reference/xrmod-api/FetchProject","docId":"api-reference/xrmod-api/FetchProject"},{"type":"link","label":"FetchProjectByImage(unavailable)","href":"/zh-Hans/android-sdk/api-reference/xrmod-api/FetchProjectByImage","docId":"api-reference/xrmod-api/FetchProjectByImage"},{"type":"link","label":"GetARMODFrameLayout","href":"/zh-Hans/android-sdk/api-reference/xrmod-api/GetARMODFrameLayout","docId":"api-reference/xrmod-api/GetARMODFrameLayout"},{"type":"link","label":"GetLayoutInflater","href":"/zh-Hans/android-sdk/api-reference/xrmod-api/GetLayoutInflater","docId":"api-reference/xrmod-api/GetLayoutInflater"},{"type":"link","label":"InitARMOD","href":"/zh-Hans/android-sdk/api-reference/xrmod-api/InitARMOD","docId":"api-reference/xrmod-api/InitARMOD"},{"type":"link","label":"SetUIInterfaceOrientation","href":"/zh-Hans/android-sdk/api-reference/xrmod-api/SetUIInterfaceOrientation","docId":"api-reference/xrmod-api/SetUIInterfaceOrientation"},{"type":"link","label":"UnloadAndHideARMOD","href":"/zh-Hans/android-sdk/api-reference/xrmod-api/UnloadAndHideARMOD","docId":"api-reference/xrmod-api/UnloadAndHideARMOD"}]}]}]},"docs":{"api-reference/introduce":{"id":"api-reference/introduce","title":"Introduce","description":"\u8fd9\u4e2aAPI\u662fXMROD\u5f15\u64ce\u4e3aAndroid\u5e73\u53f0\u63d0\u4f9b\u7684\u6240\u6709\u5f00\u653e\u63a5\u53e3\uff0c\u8ba9\u5f00\u53d1\u8005\u53ef\u4ee5\u66f4\u597d\u5730\u5c06XRMOD\u5d4c\u5165\u5230\u4ed6\u4eec\u7684\u5e94\u7528\u7a0b\u5e8f\u4e2d\u3002","sidebar":"tutorialSidebar"},"api-reference/protocol-api/DeviceNotSupoort":{"id":"api-reference/protocol-api/DeviceNotSupoort","title":"DeviceNotSupoort","description":"Description","sidebar":"tutorialSidebar"},"api-reference/protocol-api/NeedInstallARCoreService":{"id":"api-reference/protocol-api/NeedInstallARCoreService","title":"NeedInstallARCoreService","description":"Description","sidebar":"tutorialSidebar"},"api-reference/protocol-api/OnAddLoadingOverlay":{"id":"api-reference/protocol-api/OnAddLoadingOverlay","title":"OnAddLoadingOverlay","description":"Description","sidebar":"tutorialSidebar"},"api-reference/protocol-api/OnARMODExit":{"id":"api-reference/protocol-api/OnARMODExit","title":"OnARMODExit","description":"Description","sidebar":"tutorialSidebar"},"api-reference/protocol-api/OnARMODLaunch":{"id":"api-reference/protocol-api/OnARMODLaunch","title":"OnARMODLaunch","description":"Description","sidebar":"tutorialSidebar"},"api-reference/protocol-api/onRemoveLoadingOverlay":{"id":"api-reference/protocol-api/onRemoveLoadingOverlay","title":"onRemoveLoadingOverlay","description":"Description","sidebar":"tutorialSidebar"},"api-reference/protocol-api/OpenBuiltInBrowser":{"id":"api-reference/protocol-api/OpenBuiltInBrowser","title":"OpenBuiltInBrowser","description":"Description","sidebar":"tutorialSidebar"},"api-reference/protocol-api/PackageSizeMoreThanPresetSize":{"id":"api-reference/protocol-api/PackageSizeMoreThanPresetSize","title":"PackageSizeMoreThanPresetSize","description":"Description","sidebar":"tutorialSidebar"},"api-reference/protocol-api/RecognitionComplete":{"id":"api-reference/protocol-api/RecognitionComplete","title":"RecognitionComplete(unavailable)","description":"Description","sidebar":"tutorialSidebar"},"api-reference/protocol-api/RecognitionStart":{"id":"api-reference/protocol-api/RecognitionStart","title":"RecognitionStart(unavailable)","description":"Description","sidebar":"tutorialSidebar"},"api-reference/protocol-api/SDKInitialized":{"id":"api-reference/protocol-api/SDKInitialized","title":"SDKInitialized","description":"Description","sidebar":"tutorialSidebar"},"api-reference/protocol-api/ThrowException":{"id":"api-reference/protocol-api/ThrowException","title":"ThrowException","description":"Desciption","sidebar":"tutorialSidebar"},"api-reference/protocol-api/TryAcquireInformation":{"id":"api-reference/protocol-api/TryAcquireInformation","title":"TryAcquireInformation","description":"Description","sidebar":"tutorialSidebar"},"api-reference/protocol-api/UpdateLoadingProgress":{"id":"api-reference/protocol-api/UpdateLoadingProgress","title":"UpdateLoadingProgress","description":"Description","sidebar":"tutorialSidebar"},"api-reference/xrmod-api/CleanCache":{"id":"api-reference/xrmod-api/CleanCache","title":"CleanCache","description":"Description","sidebar":"tutorialSidebar"},"api-reference/xrmod-api/FetchProject":{"id":"api-reference/xrmod-api/FetchProject","title":"FetchProject","description":"Description","sidebar":"tutorialSidebar"},"api-reference/xrmod-api/FetchProjectByImage":{"id":"api-reference/xrmod-api/FetchProjectByImage","title":"FetchProjectByImage(unavailable)","description":"Description","sidebar":"tutorialSidebar"},"api-reference/xrmod-api/GetARMODFrameLayout":{"id":"api-reference/xrmod-api/GetARMODFrameLayout","title":"GetARMODFrameLayout","description":"Description","sidebar":"tutorialSidebar"},"api-reference/xrmod-api/GetLayoutInflater":{"id":"api-reference/xrmod-api/GetLayoutInflater","title":"GetLayoutInflater","description":"Description","sidebar":"tutorialSidebar"},"api-reference/xrmod-api/InitARMOD":{"id":"api-reference/xrmod-api/InitARMOD","title":"InitARMOD","description":"Description","sidebar":"tutorialSidebar"},"api-reference/xrmod-api/SetUIInterfaceOrientation":{"id":"api-reference/xrmod-api/SetUIInterfaceOrientation","title":"SetUIInterfaceOrientation","description":"Description","sidebar":"tutorialSidebar"},"api-reference/xrmod-api/UnloadAndHideARMOD":{"id":"api-reference/xrmod-api/UnloadAndHideARMOD","title":"UnloadAndHideARMOD","description":"Description","sidebar":"tutorialSidebar"},"embed":{"id":"embed","title":"\u5d4c\u5165SDK\u5230\u5e94\u7528","description":"\u4e0b\u8f7d XRMOD AAR","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"\u4ecb\u7ecd","description":"The XRMOD engine provides a solution for implementing augmented reality functions on the android platform. And you don\'t need to know how to build 3D content with native code, and you don\'t need to resubmit your app to the app store when it needs to add a new AR experience. The XRMOD engine has many AR capabilities, such as finding planes to place virtual objects, tracking images, tracking faces or multiplayer ar games.","sidebar":"tutorialSidebar"}}}')}}]);