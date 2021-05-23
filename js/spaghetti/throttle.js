// execute first call, and after `wait` execute last call
function throttle(func, wait) {
  let canInvoke = true;
  let internalClock = 0;
  let lastCall = null;

  return function () {
    if (canInvoke) {
      func(...arguments);
      canInvoke = false;

      setTimeout(() => {
        canInvoke = true;
        lastCall && lastCall();
        internalClock = 0;
      }, internalClock + wait);
    } else {
      lastCall = () => func(...arguments);
    }
  };
}

function throttleWithOptions(
  func,
  wait,
  option = { leading: true, trailing: true }
) {
  let canInvoke = true;
  let internalClock = 0;
  let lastCall = null;

  return function () {
    if (canInvoke) {
      option.leading && func(...arguments);
      canInvoke = false;

      setTimeout(() => {
        canInvoke = true;
        option.trailing && lastCall && lastCall();
      }, internalClock + wait);
    } else {
      lastCall = () => func(...arguments);
    }
  };
}
