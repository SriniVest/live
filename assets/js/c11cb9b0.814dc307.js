(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3772],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),f=r,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5891:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=["components"],c={id:"canvasview",title:"Module: CanvasView",sidebar_label:"CanvasView",sidebar_position:0,custom_edit_url:null},l={unversionedId:"api/core/modules/canvasview",id:"api/core/modules/canvasview",isDocsHomePage:!1,title:"Module: CanvasView",description:"Interfaces",source:"@site/docs/api/core/modules/canvasview.md",sourceDirName:"api/core/modules",slug:"/api/core/modules/canvasview",permalink:"/live/docs/api/core/modules/canvasview",editUrl:null,version:"current",sidebar_label:"CanvasView",sidebarPosition:0,frontMatter:{id:"canvasview",title:"Module: CanvasView",sidebar_label:"CanvasView",sidebar_position:0,custom_edit_url:null},sidebar:"api",previous:{title:"Module: CameraView",permalink:"/live/docs/api/core/modules/cameraview"},next:{title:"Module: expo-plugin/withPyTorchCore",permalink:"/live/docs/api/core/modules/expo_plugin_withpytorchcore"}},s=[{value:"Interfaces",id:"interfaces",children:[]},{value:"Functions",id:"functions",children:[{value:"Canvas",id:"canvas",children:[]}]}],p={toc:s};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"interfaces"},"Interfaces"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/live/docs/api/core/interfaces/canvasview.canvasprops"},"CanvasProps")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/live/docs/api/core/interfaces/canvasview.canvasrenderingcontext2d"},"CanvasRenderingContext2D")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/live/docs/api/core/interfaces/canvasview.imagedata"},"ImageData"))),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"canvas"},"Canvas"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"Canvas"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"props"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Element")),(0,i.kt)("p",null,"A canvas component providing drawing functions similar to ",(0,i.kt)("inlineCode",{parentName:"p"},"2dcontext"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export default function App() {\n  const [drawingContext, setDrawingContext] = useState<\n    CanvasRenderingContext2D\n  >();\n\n  const handleContext2D = useCallback(\n    async (ctx: CanvasRenderingContext2D) => {\n      setDrawingContext(ctx);\n    },\n    [setDrawingContext],\n  );\n\n  useLayoutEffect(() => {\n    const ctx = drawingContext;\n    if (ctx != null) {\n      ctx.clear();\n\n      ctx.fillStyle = '#fb0fff';\n      ctx.fillRect(40, 160, 64, 72);\n      ctx.strokeStyle = '#00ffff';\n      ctx.lineWidth = 6;\n      ctx.strokeRect(40, 160, 64, 72);\n\n      ctx.invalidate();\n    }\n  }, [drawingContext]);\n\n  return (\n    <Canvas style={StyleSheet.absoluteFill} onContext2D={handleContext2D} />\n  );\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"component"))),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"props")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/live/docs/api/core/interfaces/canvasview.canvasprops"},"CanvasProps"))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Element")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/pytorch/live/blob/3c9a183/react-native-pytorch-core/src/CanvasView.tsx#L986"},"CanvasView.tsx:986")))}u.isMDXComponent=!0}}]);