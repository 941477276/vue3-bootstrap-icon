import './bs-icon.css';
declare const _default: import("vue").DefineComponent<{
    width: {
        type: StringConstructor;
    };
    height: {
        type: StringConstructor;
    };
    fill: {
        type: StringConstructor;
    };
    viewBox: {
        type: StringConstructor;
    };
    ariaHidden: {
        type: BooleanConstructor;
        default: boolean;
    };
    focusable: {
        type: BooleanConstructor;
        default: boolean;
    };
    iconName: {
        type: StringConstructor;
        default: string;
    };
    isFilled: {
        type: BooleanConstructor;
        default: boolean;
    };
    svgChildrenVDom: {
        type: ArrayConstructor;
        default(): never[];
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "click" | "dblclick", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    width: {
        type: StringConstructor;
    };
    height: {
        type: StringConstructor;
    };
    fill: {
        type: StringConstructor;
    };
    viewBox: {
        type: StringConstructor;
    };
    ariaHidden: {
        type: BooleanConstructor;
        default: boolean;
    };
    focusable: {
        type: BooleanConstructor;
        default: boolean;
    };
    iconName: {
        type: StringConstructor;
        default: string;
    };
    isFilled: {
        type: BooleanConstructor;
        default: boolean;
    };
    svgChildrenVDom: {
        type: ArrayConstructor;
        default(): never[];
    };
}>>, {
    ariaHidden: boolean;
    focusable: boolean;
    iconName: string;
    svgChildrenVDom: unknown[];
    isFilled: boolean;
}>;
export default _default;
export interface BsIconProps {
    width: string;
    height: string;
    fill: string;
    viewBox: string;
    ariaHidden: boolean;
    focusable: boolean;
}
