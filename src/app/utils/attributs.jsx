////////////////////////////////////
//// UTILS ATTRIBUTES FUNCTIONS ////
////////////////////////////////////

/** __setContainerClassName__
 *
 * Use to add ths className from the parent tag.
 * Example:
 * ```jsx
 *  // app.jsx
 *  <Title className={'my-title-class'}>
 *    My title
 *   </Title>
 *
 *  // title.jsx
 *  return (
 *    <h1 { ...setContainerClassName(props, 'other-class') }>
 *      { props.children }
 *    </h1>
 *  )
 *
 *  // DOM
 *  <h1 class="my-title-class other-class">
 *    My title
 *  </h1>
 * ```
 *
 * @param props
 * @param classNames Class names to add at the className attribute
 * @returns {{className: (string|*)}}
 */
export const setContainerClassName = (props, classNames) => ({ className: props?.className ? `${ props.className } ${ classNames }` : classNames });
