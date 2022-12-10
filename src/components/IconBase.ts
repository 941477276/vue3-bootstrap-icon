import {
  h,
  VNode
} from 'vue';

let buildNode = function (childrens: any[]): VNode[] {
  if (childrens.length == 0) {
    return [];
  }
  return childrens.filter((vdomChild: any) => {
    return (vdomChild.nodeType == 1 && vdomChild.nodeName != 'svg') || (vdomChild.nodeType == 3 && vdomChild.text != ' ');
  }).map((vdomChild: any) => {
    let children = vdomChild.children || [];
    return vdomChild.noteType == 3 ? vdomChild.text : h(
      vdomChild.nodeName,
      {
        ...vdomChild.attrs
      },
      children.length > 0 ? buildNode(children) : []
    );
  });
};

function IconBase (props: any) {
  let svgChildren = buildNode(props.svgChildrenVDom);
  return h('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: props.width || '1em',
    height: props.height || '1em',
    fill: props.fill || 'currentColor',
    viewBox: props.viewBox || '0 0 1024 1024',
    ariaHidden: props.ariaHidden === true ? 'true' : 'false',
    focusable: props.focusable === true ? 'true' : 'false',
    'data-icon': 'bs-icon-' + props.iconName
  }, svgChildren);
};

IconBase.props = ['width', 'height', 'fill', 'viewBox', 'ariaHidden', 'focusable', 'iconName', 'svgChildrenVDom'];
IconBase.inheritAttrs = false;

export default IconBase;
