export const isIframeContext = () => {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
};
