// @flow
import { IS_IE } from '~/services/ua';

let prevScroll = 0;
let cb: Function | null = null;
let animating = false;
let hnd = null;
let eventName = 'animation';
let supportsAnimationEvents = IS_IE ? 0 : -1;

declare var document;

const getScrollTop = () => {
  const doc = document.documentElement;
  return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
};

const init = () => {
  prevScroll = getScrollTop();
};

const reset = e => {
  const scroller = document.body;

  if (e) {
    if (e.target !== scroller) {
      return;
    }
    scroller.removeEventListener(eventName + 'end', reset);
  }

  scroller.classList.remove('flip-translate');
  scroller.style.transform = '';

  end();
  animating = false;
};

const animationEventsSupported = () => {
  document.body.removeEventListener(eventName + 'start', animationEventsSupported);
  supportsAnimationEvents = 1;
  if (hnd !== null) {
    clearTimeout(hnd);
    hnd = null;
  }
};

const animationEventsNotSupported = () => {
  // Animation events are slow, not enabled, or not supported
  supportsAnimationEvents = -1;
  reset();
  hnd = null;
};

const end = () => {
  if (cb !== null) {
    cb();
    cb = null;
  }
};

const play = (fn?: Function) => {
  if (fn) {
    cb = fn;
  }
  requestAnimationFrame(flip);
};

const flip = () => {
  let scrollOffset = getScrollTop() - prevScroll;

  if (animating) {
    animating = false;
    reset();
  }

  if (scrollOffset === 0 || !supportsAnimationEvents) {
    // We didn't move at all
    end();
    return;
  }

  const scroller = document.body;
  scroller.style.transform = `translate3d(0, ${scrollOffset}px, 0)`;
  scroller.classList.add('flip-translate');

  if (supportsAnimationEvents < 1) {
    // Detect animation events support early
    hnd = setTimeout(animationEventsNotSupported, 200);

    if ('webkitAnimation' in scroller.style && !('animation' in scroller.style)) {
      eventName = 'webkitanimation';
    }
    scroller.addEventListener(eventName + 'start', animationEventsSupported);
  }

  if (supportsAnimationEvents !== 0) {
    scroller.addEventListener(eventName + 'end', reset);
  }

  animating = true;
};

export default { init, play };
