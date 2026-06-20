export const debounce = (callback: Function, wait: number) => {
  let timeoutId: any = null;
  return (...args: any[]) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback.apply(null, args);
    }, wait);
  };
}

export const throttle = (fn: Function, delay: number) => {
  let lastTime = 0;
  return function (...args: any[]) {
      let now = Date.now();
      if (now - lastTime >= delay) {
          fn.apply(this, args);
          lastTime = now;
      }
  };
}