import { AppContext } from 'vue';

export type MessageType = 'success' | 'danger' | 'warning' | 'info';
export type MessageFn = (options: any, appContext?: AppContext) => string|undefined;
export interface Message extends MessageFn {
  success: MessageFn;
  warning: MessageFn;
  info: MessageFn;
  danger: MessageFn;
  closeAllMessage: () => void;
}
export const supportMessageBoxTypes = ['success', 'danger', 'warning', 'info', 'prompt'];
export const supportMessageTypes = ['success', 'danger', 'warning', 'info'];
