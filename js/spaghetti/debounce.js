// execute last call if didn't call debounce `wait` time.
function debounce(func, wait) {
  let timerId = undefined;
  let canInvoke = false;

  return function () {
    // if timer is set by previous function
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }

    canInvoke = true;
    timerId = setTimeout(() => {
      if (canInvoke) {
        func(...arguments);
        canInvoke = false;
      }
    }, wait);
  };
}
