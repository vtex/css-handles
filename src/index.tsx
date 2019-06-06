
/** TODO: Arrow functions are not being converted to regular functions by Pika,
 * and thus do not work on IE11. Check if any update on pika/plugin-build-web
 * changes this behaviour, or change the packager alltogether.
 * (Keep an eye on https://github.com/pikapkg/builders/pull/52) */

export function safelyGetBlockClass(blockClass: string) {
  blockClass ? blockClass.split(' ')[0] : ''
}

export function generateBlockClass(baseClass: string, blockClass?: string) {
  blockClass
    ? `${baseClass} ${baseClass}--${safelyGetBlockClass(blockClass)}`
    : baseClass
}

export interface BlockClass {
  blockClass?: string
}