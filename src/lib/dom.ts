/**
 * Set the data attribute with the given value on the HTML tag
 * @param attribute DOM attribute
 * @param value Value of the DOM attribute
 */
export function setAttributeOnHtmlTag(attribute: string, value: string) {
  if (document && document.firstElementChild) {
    document.firstElementChild.setAttribute(attribute, value);
  }
}
