(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/[root of the server]__5d4610._.js", {

"[project]/libs/ui/src/components/MatchForm/MatchForm.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "MatchResult": (()=>MatchResult),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.4_react-dom@19.0.0_react@19.0.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.4_react-dom@19.0.0_react@19.0.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
var MatchResult = /*#__PURE__*/ function(MatchResult) {
    MatchResult["LEFT_WIN"] = "LEFT_WIN";
    MatchResult["RIGHT_WIN"] = "RIGHT_WIN";
    MatchResult["DRAW"] = "DRAW";
    return MatchResult;
}({});
const MatchForm = (props)=>{
    _s();
    const { callback } = props;
    const [adversaryA, setAdversaryA] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [adversaryB, setAdversaryB] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("LEFT_WIN");
    const resetForm = ()=>{
        setAdversaryA("");
        setAdversaryB("");
        setResult("LEFT_WIN");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        "data-testid": "MatchForm",
        className: "flex flex-col justify-center mb-4 gap-4 p-2 border border-gray-300 rounded-md",
        onSubmit: (evt)=>{
            evt.preventDefault();
            callback(adversaryA, adversaryB, result).then((res)=>{
                if (res.ok) {
                    resetForm();
                } else {
                    // TODO: toast error
                    console.error("Error while posting match result");
                }
            });
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col justify-between items-center mb-4 gap-4 p-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "checkbox",
                                className: "transform scale-150",
                                checked: result === "LEFT_WIN",
                                onChange: ()=>setResult("LEFT_WIN")
                            }, void 0, false, {
                                fileName: "[project]/libs/ui/src/components/MatchForm/MatchForm.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xl",
                                children: "Adversaire A"
                            }, void 0, false, {
                                fileName: "[project]/libs/ui/src/components/MatchForm/MatchForm.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                className: "border border-gray-300 rounded-md",
                                value: adversaryA,
                                onChange: (evt)=>setAdversaryA(evt.target.value)
                            }, void 0, false, {
                                fileName: "[project]/libs/ui/src/components/MatchForm/MatchForm.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/libs/ui/src/components/MatchForm/MatchForm.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col justify-start align-item mb-4 gap-4 p-2 w-[100px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "checkbox",
                            className: "transform scale-150",
                            checked: result === "DRAW",
                            onChange: ()=>setResult("DRAW")
                        }, void 0, false, {
                            fileName: "[project]/libs/ui/src/components/MatchForm/MatchForm.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/libs/ui/src/components/MatchForm/MatchForm.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col justify-between items-center mb-4 gap-4 p-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "checkbox",
                                className: "transform scale-150",
                                checked: result === "RIGHT_WIN",
                                onChange: ()=>setResult("RIGHT_WIN")
                            }, void 0, false, {
                                fileName: "[project]/libs/ui/src/components/MatchForm/MatchForm.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xl",
                                children: "Adversaire B"
                            }, void 0, false, {
                                fileName: "[project]/libs/ui/src/components/MatchForm/MatchForm.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                className: "border border-gray-300 rounded-md",
                                value: adversaryB,
                                onChange: (evt)=>setAdversaryB(evt.target.value)
                            }, void 0, false, {
                                fileName: "[project]/libs/ui/src/components/MatchForm/MatchForm.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/libs/ui/src/components/MatchForm/MatchForm.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/libs/ui/src/components/MatchForm/MatchForm.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                className: "bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-md",
                children: "Déclarer le match"
            }, void 0, false, {
                fileName: "[project]/libs/ui/src/components/MatchForm/MatchForm.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/libs/ui/src/components/MatchForm/MatchForm.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
};
_s(MatchForm, "cYqorMDVBs9+8hsK6dCELmHkpiM=");
_c = MatchForm;
const __TURBOPACK__default__export__ = MatchForm;
var _c;
__turbopack_refresh__.register(_c, "MatchForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/libs/ui/src/components/PlayerForm/PlayerForm.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.4_react-dom@19.0.0_react@19.0.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.4_react-dom@19.0.0_react@19.0.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
const PlayerForm = (props)=>{
    _s();
    const { callback } = props;
    const [playerName, setPlayerName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const resetForm = ()=>{
        setPlayerName("");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        "data-testid": "MatchForm",
        className: "flex flex-col justify-center mb-4 gap-4 p-2 border border-gray-300 rounded-md",
        onSubmit: (evt)=>{
            evt.preventDefault();
            callback(playerName).then((res)=>{
                if (res.ok) {
                    resetForm();
                } else {
                    console.log("Error while posting player");
                }
            });
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xl",
                children: "Nom du joueur"
            }, void 0, false, {
                fileName: "[project]/libs/ui/src/components/PlayerForm/PlayerForm.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                className: "border border-gray-300 rounded-md",
                value: playerName,
                onChange: (evt)=>setPlayerName(evt.target.value)
            }, void 0, false, {
                fileName: "[project]/libs/ui/src/components/PlayerForm/PlayerForm.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                className: "bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-md",
                children: "Déclarer le joueur"
            }, void 0, false, {
                fileName: "[project]/libs/ui/src/components/PlayerForm/PlayerForm.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/libs/ui/src/components/PlayerForm/PlayerForm.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
};
_s(PlayerForm, "3+cdahagJgmxe+IAHzDT7/VgSVw=");
_c = PlayerForm;
const __TURBOPACK__default__export__ = PlayerForm;
var _c;
__turbopack_refresh__.register(_c, "PlayerForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/libs/ui/src/components/RankingLadder/LadderItem/LadderItem.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.4_react-dom@19.0.0_react@19.0.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
/**
 * Composant fonctionnel pour afficher un joueur dans le classement
 *
 * @param {LadderItemProps} props Les propriétés du composant
 * @param {PlayerData} props.player Les données du joueur
 *
 * @returns {JSX.Element} Le composant pour afficher un joueur dans le classement
 */ const LadderItem = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-testid": "LadderItem",
        className: "flex justify-between mb-4 gap-4 p-2 border border-gray-300 rounded-md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "whitespace-nowrap overflow-hidden overflow-ellipsis",
                children: props.player.id
            }, void 0, false, {
                fileName: "[project]/libs/ui/src/components/RankingLadder/LadderItem/LadderItem.tsx",
                lineNumber: 25,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "bg-pink-700 text-gray-200 px-4 rounded-full w-16",
                children: props.player.rank
            }, void 0, false, {
                fileName: "[project]/libs/ui/src/components/RankingLadder/LadderItem/LadderItem.tsx",
                lineNumber: 26,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/libs/ui/src/components/RankingLadder/LadderItem/LadderItem.tsx",
        lineNumber: 24,
        columnNumber: 3
    }, this);
_c = LadderItem;
const __TURBOPACK__default__export__ = LadderItem;
var _c;
__turbopack_refresh__.register(_c, "LadderItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/libs/ui/src/components/RankingLadder/RankingLadder.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.4_react-dom@19.0.0_react@19.0.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$ui$2f$src$2f$components$2f$RankingLadder$2f$LadderItem$2f$LadderItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/libs/ui/src/components/RankingLadder/LadderItem/LadderItem.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$40$11$2e$17$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/motion@11.17.0_react-dom@19.0.0_react@19.0.0/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$40$11$2e$17$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/motion@11.17.0_react-dom@19.0.0_react@19.0.0/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
;
;
/**
 * Composant fonctionnel pour afficher le classement des joueurs
 *
 * @param {RankingLadderProps} props Les propriétés du composant
 * @param {PlayerData[]} props.data Les données des joueurs
 * @param {(data: PlayerData[]) => void} props.updateData La fonction pour mettre à jour les données des joueurs
 *
 * @returns {JSX.Element} Le composant pour afficher le classement des joueurs
 */ const RankingLadder = (props)=>{
    const { data } = props;
    // return(<></>)
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-testid": "RankingLadder",
        className: "h-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$40$11$2e$17$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pt-4 columns-8 gap-4 overflow-x-auto max-h-full themed-scrollbar",
                children: data.map((player)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$40$11$2e$17$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            scale: 0
                        },
                        animate: {
                            scale: 1,
                            transition: {
                                delay: 0.3,
                                type: "spring",
                                stiffness: 260,
                                damping: 40
                            }
                        },
                        layout: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$ui$2f$src$2f$components$2f$RankingLadder$2f$LadderItem$2f$LadderItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            player: player
                        }, void 0, false, {
                            fileName: "[project]/libs/ui/src/components/RankingLadder/RankingLadder.tsx",
                            lineNumber: 42,
                            columnNumber: 15
                        }, this)
                    }, player.id, false, {
                        fileName: "[project]/libs/ui/src/components/RankingLadder/RankingLadder.tsx",
                        lineNumber: 28,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/libs/ui/src/components/RankingLadder/RankingLadder.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/libs/ui/src/components/RankingLadder/RankingLadder.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/libs/ui/src/components/RankingLadder/RankingLadder.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
};
_c = RankingLadder;
const __TURBOPACK__default__export__ = RankingLadder;
var _c;
__turbopack_refresh__.register(_c, "RankingLadder");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/libs/ui/src/index.ts [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/libs/ui/src/index.ts [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$ui$2f$src$2f$components$2f$MatchForm$2f$MatchForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/libs/ui/src/components/MatchForm/MatchForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$ui$2f$src$2f$components$2f$PlayerForm$2f$PlayerForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/libs/ui/src/components/PlayerForm/PlayerForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$ui$2f$src$2f$components$2f$RankingLadder$2f$RankingLadder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/libs/ui/src/components/RankingLadder/RankingLadder.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$ui$2f$src$2f$components$2f$RankingLadder$2f$LadderItem$2f$LadderItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/libs/ui/src/components/RankingLadder/LadderItem/LadderItem.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$ui$2f$src$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/libs/ui/src/index.ts [app-client] (ecmascript) <locals>");
}}),
"[next]/internal/font/google/poppins_b99cce48.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "className": "poppins_b99cce48-module__SXN6da__className",
  "variable": "poppins_b99cce48-module__SXN6da__variable",
});
}}),
"[next]/internal/font/google/poppins_b99cce48.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$poppins_b99cce48$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[next]/internal/font/google/poppins_b99cce48.module.css [app-client] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$poppins_b99cce48$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Poppins', 'Poppins Fallback'",
        fontWeight: 600,
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$poppins_b99cce48$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$poppins_b99cce48$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}}),
"[next]/internal/font/google/poppins_fd5a21ec.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "className": "poppins_fd5a21ec-module__KkKRFG__className",
  "variable": "poppins_fd5a21ec-module__KkKRFG__variable",
});
}}),
"[next]/internal/font/google/poppins_fd5a21ec.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$poppins_fd5a21ec$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[next]/internal/font/google/poppins_fd5a21ec.module.css [app-client] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$poppins_fd5a21ec$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Poppins', 'Poppins Fallback'",
        fontWeight: 500,
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$poppins_fd5a21ec$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$poppins_fd5a21ec$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}}),
"[project]/apps/realtime-elo-ranker-client/src/services/ranking/fetch-ranking.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>fetchRanking)
});
const URL = "/api/ranking";
function fetchRanking(baseUrl) {
    return fetch(baseUrl + URL, {
        method: "GET"
    }).then((res)=>{
        if (res.ok) {
            return res.json();
        }
        throw new Error("Failed to fetch ranking");
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/realtime-elo-ranker-client/src/services/ranking/subscribe-ranking-events.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>subscribeRankingEvents)
});
const URL = "/api/ranking/events";
function subscribeRankingEvents(baseUrl) {
    // Subscribe to ranking events
    // ...
    return new EventSource(baseUrl + URL);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/realtime-elo-ranker-client/src/services/ranking/models/ranking-event.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "RankingEventType": (()=>RankingEventType)
});
var RankingEventType = /*#__PURE__*/ function(RankingEventType) {
    RankingEventType["RankingUpdate"] = "RankingUpdate";
    return RankingEventType;
}({});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/realtime-elo-ranker-client/src/services/match/post-match-result.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>postMatchResult)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$ui$2f$src$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/libs/ui/src/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$ui$2f$src$2f$components$2f$MatchForm$2f$MatchForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/libs/ui/src/components/MatchForm/MatchForm.tsx [app-client] (ecmascript)");
;
const URL = "/api/match";
function postMatchResult(baseUrl, adversaryA, adversaryB, result) {
    return fetch(baseUrl + URL, {
        method: "POST",
        body: JSON.stringify({
            winner: result === __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$ui$2f$src$2f$components$2f$MatchForm$2f$MatchForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MatchResult"].LEFT_WIN ? adversaryA : result === __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$ui$2f$src$2f$components$2f$MatchForm$2f$MatchForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MatchResult"].RIGHT_WIN ? adversaryB : null,
            loser: result === __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$ui$2f$src$2f$components$2f$MatchForm$2f$MatchForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MatchResult"].LEFT_WIN ? adversaryB : result === __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$ui$2f$src$2f$components$2f$MatchForm$2f$MatchForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MatchResult"].RIGHT_WIN ? adversaryA : null,
            draw: result === __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$ui$2f$src$2f$components$2f$MatchForm$2f$MatchForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MatchResult"].DRAW ? true : false
        }),
        headers: {
            "Content-Type": "application/json"
        }
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/realtime-elo-ranker-client/src/services/player/post-player.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>postPlayer)
});
const URL = "/api/player";
function postPlayer(baseUrl, id) {
    return fetch(baseUrl + URL, {
        method: "POST",
        body: JSON.stringify({
            id
        }),
        headers: {
            "Content-Type": "application/json"
        }
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/libs/ui/src/components/RankingLadder/RankingLadder.tsx [app-client] (ecmascript) <export default as RankingLadder>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "RankingLadder": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$ui$2f$src$2f$components$2f$RankingLadder$2f$RankingLadder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$ui$2f$src$2f$components$2f$RankingLadder$2f$RankingLadder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/libs/ui/src/components/RankingLadder/RankingLadder.tsx [app-client] (ecmascript)");
}}),
"[project]/libs/ui/src/components/MatchForm/MatchForm.tsx [app-client] (ecmascript) <export default as MatchForm>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "MatchForm": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$ui$2f$src$2f$components$2f$MatchForm$2f$MatchForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$ui$2f$src$2f$components$2f$MatchForm$2f$MatchForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/libs/ui/src/components/MatchForm/MatchForm.tsx [app-client] (ecmascript)");
}}),
"[project]/libs/ui/src/components/PlayerForm/PlayerForm.tsx [app-client] (ecmascript) <export default as PlayerForm>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "PlayerForm": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$ui$2f$src$2f$components$2f$PlayerForm$2f$PlayerForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$ui$2f$src$2f$components$2f$PlayerForm$2f$PlayerForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/libs/ui/src/components/PlayerForm/PlayerForm.tsx [app-client] (ecmascript)");
}}),
"[project]/apps/realtime-elo-ranker-client/src/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.4_react-dom@19.0.0_react@19.0.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$ui$2f$src$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/libs/ui/src/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$poppins_b99cce48$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[next]/internal/font/google/poppins_b99cce48.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$poppins_fd5a21ec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[next]/internal/font/google/poppins_fd5a21ec.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.4_react-dom@19.0.0_react@19.0.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$realtime$2d$elo$2d$ranker$2d$client$2f$src$2f$services$2f$ranking$2f$fetch$2d$ranking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/apps/realtime-elo-ranker-client/src/services/ranking/fetch-ranking.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$realtime$2d$elo$2d$ranker$2d$client$2f$src$2f$services$2f$ranking$2f$subscribe$2d$ranking$2d$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/apps/realtime-elo-ranker-client/src/services/ranking/subscribe-ranking-events.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$realtime$2d$elo$2d$ranker$2d$client$2f$src$2f$services$2f$ranking$2f$models$2f$ranking$2d$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/apps/realtime-elo-ranker-client/src/services/ranking/models/ranking-event.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$realtime$2d$elo$2d$ranker$2d$client$2f$src$2f$services$2f$match$2f$post$2d$match$2d$result$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/apps/realtime-elo-ranker-client/src/services/match/post-match-result.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$realtime$2d$elo$2d$ranker$2d$client$2f$src$2f$services$2f$player$2f$post$2d$player$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/apps/realtime-elo-ranker-client/src/services/player/post-player.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.4_react-dom@19.0.0_react@19.0.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$40$11$2e$17$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/motion@11.17.0_react-dom@19.0.0_react@19.0.0/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$ui$2f$src$2f$components$2f$RankingLadder$2f$RankingLadder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RankingLadder$3e$__ = __turbopack_import__("[project]/libs/ui/src/components/RankingLadder/RankingLadder.tsx [app-client] (ecmascript) <export default as RankingLadder>");
var __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$ui$2f$src$2f$components$2f$MatchForm$2f$MatchForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MatchForm$3e$__ = __turbopack_import__("[project]/libs/ui/src/components/MatchForm/MatchForm.tsx [app-client] (ecmascript) <export default as MatchForm>");
var __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$ui$2f$src$2f$components$2f$PlayerForm$2f$PlayerForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlayerForm$3e$__ = __turbopack_import__("[project]/libs/ui/src/components/PlayerForm/PlayerForm.tsx [app-client] (ecmascript) <export default as PlayerForm>");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
/**
 * Sorts the players by rank in descending order
 *
 * @param arr - The array of players to sort
 * @returns The sorted array of players
 */ function quickSortPlayers(arr) {
    if (arr.length <= 1) {
        // Already sorted
        return arr;
    }
    const p = arr.pop();
    const left = [];
    const right = [];
    for (const el of arr){
        if (el.rank >= p.rank) {
            left.push(el);
        } else {
            right.push(el);
        }
    }
    return [
        ...quickSortPlayers(left),
        p,
        ...quickSortPlayers(right)
    ];
}
function Home() {
    _s();
    const API_BASE_URL = ("TURBOPACK compile-time value", "http://localhost:3002");
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    const [ladderData, setLadderData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const updateLadderData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[updateLadderData]": (player)=>{
            setLadderData({
                "Home.useCallback[updateLadderData]": (prevData)=>{
                    return quickSortPlayers(prevData.filter({
                        "Home.useCallback[updateLadderData]": (p)=>p.id !== player.id
                    }["Home.useCallback[updateLadderData]"]).concat(player));
                }
            }["Home.useCallback[updateLadderData]"]);
        }
    }["Home.useCallback[updateLadderData]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            try {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$realtime$2d$elo$2d$ranker$2d$client$2f$src$2f$services$2f$ranking$2f$fetch$2d$ranking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(API_BASE_URL).then(setLadderData);
            } catch (error) {
                // TODO: toast error
                console.error(error);
            }
            const eventSource = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$realtime$2d$elo$2d$ranker$2d$client$2f$src$2f$services$2f$ranking$2f$subscribe$2d$ranking$2d$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(API_BASE_URL);
            eventSource.onmessage = ({
                "Home.useEffect": (msg)=>{
                    const event = JSON.parse(msg.data);
                    if (event.type === "Error") {
                        console.error(event.message);
                        return;
                    }
                    if (event.type === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$realtime$2d$elo$2d$ranker$2d$client$2f$src$2f$services$2f$ranking$2f$models$2f$ranking$2d$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RankingEventType"].RankingUpdate) {
                        updateLadderData(event.player);
                    }
                }
            })["Home.useEffect"];
            eventSource.onerror = ({
                "Home.useEffect": (err)=>{
                    // TODO: toast error
                    console.error(err);
                    eventSource.close();
                }
            })["Home.useEffect"];
            return ({
                "Home.useEffect": ()=>eventSource.close()
            })["Home.useEffect"];
        }
    }["Home.useEffect"], [
        API_BASE_URL,
        updateLadderData
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$40$11$2e$17$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].main, {
                className: "flex flex-col gap-8 items-center sm:items-start max-w-full px-12 pt-24",
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$poppins_b99cce48$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].className} text-4xl font-bold text-center sm:text-left h-12`,
                        children: "Realtime Elo Ranker"
                    }, void 0, false, {
                        fileName: "[project]/apps/realtime-elo-ranker-client/src/app/page.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-[610px] w-[95%]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$poppins_fd5a21ec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].className} text-2xl`,
                                children: "Classement des joueurs"
                            }, void 0, false, {
                                fileName: "[project]/apps/realtime-elo-ranker-client/src/app/page.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$ui$2f$src$2f$components$2f$RankingLadder$2f$RankingLadder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RankingLadder$3e$__["RankingLadder"], {
                                data: ladderData
                            }, void 0, false, {
                                fileName: "[project]/apps/realtime-elo-ranker-client/src/app/page.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/realtime-elo-ranker-client/src/app/page.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex mt-10 gap-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$poppins_fd5a21ec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].className} text-2xl`,
                                        children: "Déclarer un match"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/realtime-elo-ranker-client/src/app/page.tsx",
                                        lineNumber: 125,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$ui$2f$src$2f$components$2f$MatchForm$2f$MatchForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MatchForm$3e$__["MatchForm"], {
                                        callback: (adversaryA, adversaryB, result)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$realtime$2d$elo$2d$ranker$2d$client$2f$src$2f$services$2f$match$2f$post$2d$match$2d$result$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(API_BASE_URL, adversaryA, adversaryB, result)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/realtime-elo-ranker-client/src/app/page.tsx",
                                        lineNumber: 128,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/realtime-elo-ranker-client/src/app/page.tsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$poppins_fd5a21ec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].className} text-2xl`,
                                        children: "Déclarer un joueur"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/realtime-elo-ranker-client/src/app/page.tsx",
                                        lineNumber: 139,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$ui$2f$src$2f$components$2f$PlayerForm$2f$PlayerForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlayerForm$3e$__["PlayerForm"], {
                                        callback: (playerName)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$realtime$2d$elo$2d$ranker$2d$client$2f$src$2f$services$2f$player$2f$post$2d$player$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(API_BASE_URL, playerName)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/realtime-elo-ranker-client/src/app/page.tsx",
                                        lineNumber: 142,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/realtime-elo-ranker-client/src/app/page.tsx",
                                lineNumber: 138,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/realtime-elo-ranker-client/src/app/page.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/realtime-elo-ranker-client/src/app/page.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "row-start-3 flex gap-6 flex-wrap items-center justify-center"
            }, void 0, false, {
                fileName: "[project]/apps/realtime-elo-ranker-client/src/app/page.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/realtime-elo-ranker-client/src/app/page.tsx",
        lineNumber: 106,
        columnNumber: 5
    }, this);
}
_s(Home, "OGRWhJynwhIZrRnqW7Rviwm4CzI=");
_c = Home;
var _c;
__turbopack_refresh__.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/realtime-elo-ranker-client/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__5d4610._.js.map