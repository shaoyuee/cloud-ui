import Pagination from 'u-pagination.vue';

/**
 * @class Pagination
 * @extends Base
 * @param {number=1}            props.current                   Current page number
 * @param {number=11}           props.total                     Total count of pages
 * @param {number=2}            props.side                      Count of pages at side position
 * @param {number=5}            props.around                    Count of pages around the current position
 * @param {boolean=false}       props.readonly                  Readonly
 * @param {boolean=false}       props.disabled                  Disabled
 */
/**
 * @method select(page) - Select a page
 * @public
 * @param  {number} page - The page number to select
 * @return {void}
 */
/**
 * @event select - Emit when selecting a page
 * @property {number} current - The current page
 */

export default Pagination;
