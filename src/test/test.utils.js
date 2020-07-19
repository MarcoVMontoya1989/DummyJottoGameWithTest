/**
 *Return ShallowWrapper containing node(s) with the given data-test value
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within
 * @param {string} valTest - value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */
export const findByAttributeTest = (wrapper, valTest) => {
  return wrapper.find(`[data-test='${valTest}']`);
}
