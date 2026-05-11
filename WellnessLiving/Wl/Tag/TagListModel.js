/**
 * An endpoint that gets tags for a business.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Tag_TagListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * @typedef {{}} Wl_Tag_TagListModel_a_list
   * @property {number} i_sort The sort order of the tag.
   * @property {string} k_tag The tag key.
   * @property {string} text_title The tag title.
   */

  /**
   * The tag list.
   *
   * Each element has the next structure:<dl>
   * <dt>int <var>i_sort</var> </dt>
   * <dd>The sort order of the tag.</dd>
   * <dt>string <var>k_tag</var> </dt>
   * <dd>The tag key.</dd>
   * <dt>string <var>text_title</var></dt>
   * <dd>The tag title.</dd>
   * </dl>
   *
   * @get result
   * @post post,result
   * @type {Wl_Tag_TagListModel_a_list[]}
   */
  this.a_list = undefined;

  /**
   * List of tags in json format.
   * See {@link Wl_Tag_TagListModel.a_list} for the structure of each tag.
   * `null` to use {@link Wl_Tag_TagListModel} for getting the tag list.
   *
   * @post post
   * @type {?string}
   */
  this.json_list = undefined;

  /**
   * The business key of the tags.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Tag_TagListModel);

/**
 * @inheritDoc
 */
Wl_Tag_TagListModel.prototype.config=function()
{
  return {"a_field": {"a_list": {"get": {"result": true}, "post": {"post": true, "result": true}},"json_list": {"post": {"post": true}},"k_business": {"get": {"get": true},"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Tag_TagListModel.instanceGet
 * @param {string} k_business The business key of the tags.
 * @returns {Wl_Tag_TagListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */