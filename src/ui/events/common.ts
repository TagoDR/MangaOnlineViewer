/**
 * An event handler that transforms vertical mouse wheel scrolling into horizontal scrolling.
 * This is used for Left-to-Right (LTR) fluid reading modes.
 * @param {WheelEvent} event - The wheel event.
 */
export function transformScrollToHorizontal(event: WheelEvent) {
  if (!event.deltaY) {
    return;
  }

  (event.currentTarget as Element).scrollLeft += event.deltaY + event.deltaX;
  event.preventDefault();
}

/**
 * An event handler that transforms vertical mouse wheel scrolling into horizontal scrolling in the reverse direction.
 * This is used for Right-to-Left (RTL) fluid reading modes.
 * @param {WheelEvent} event - The wheel event.
 */
export function transformScrollToHorizontalReverse(event: WheelEvent) {
  if (!event.deltaY) {
    return;
  }

  (event.currentTarget as Element).scrollLeft -= event.deltaY - event.deltaX;
  event.preventDefault();
}
