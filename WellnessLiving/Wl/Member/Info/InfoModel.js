/**
 * Retrieves information about a member.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Member_Info_InfoModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,uid,is_full,dt_date";

  /**
   * Additional member data or `null` if any data can be shown. Will be filled if {@link Wl_Member_Info_InfoModel.is_full} flag is set.
   * See result of {@link Wl\Member\Info\MemberInfoView::dataPrepare()} method.
   *
   * @get result
   * @type {?{}}
   */
  this.a_info = null;

  /**
   * List of users data.
   * Keys - users primary keys. Values - users data {@link Wl_Member_Info_InfoModel._get()} for details.
   * Keys refer to clients' primary keys, and values refer to clients' data.
   * If `null`, data for a single client is being requested.
   *
   * @get result
   * @type {?{}}
   */
  this.a_result_list = null;

  /**
   * Primary keys of users whose information must be returned.
   *
   * `null` if data of a single user is requested.
   *
   * @get get
   * @type {?string[]}
   */
  this.a_uid = null;

  /**
   * List of dates for load additional information about users.
   *
   * Key is UID of user. Value is date.
   *
   * `null` if data of a single user is requested.
   *
   * @get get
   * @type {?string[]}
   */
  this.a_uid_date = null;

  /**
   * Information about last visit of the user. Structure is same as {@link Wl\Visit\Visit::getLastNextVisit()} return value.
   *
   * @get result
   * @type {{}}
   */
  this.a_visit_last = [];

  /**
   * Information about next visit of the user. Structure is same as {@link Wl\Visit\Visit::getLastNextVisit()} return value.
   *
   * @get result
   * @type {{}}
   */
  this.a_visit_next = [];

  /**
   * Date of the session, if we show it on the appointment info window or on the attendance list.
   *
   * @get get
   * @type {string}
   */
  this.dt_date = "";

  /**
   * Count attend visits for one client.
   *
   * @get result
   * @type {number}
   */
  this.i_lifetime_visit = 0;

  /**
   * `true` - if API is being used from backend, `false` - otherwise.
   *
   * @get get
   * @type {boolean}
   */
  this.is_backend = false;

  /**
   * If you need to return additional information set to `true` or `false` if not.
   *
   * @get get
   * @type {boolean}
   */
  this.is_full = false;

  /**
   * If `true`, the client is a traveler. Otherwise, this will be `false`.
   * This will be `null` in cases when the client is a walk-in. Or when {@link Wl_Member_Info_InfoModel.is_full} is `false`.
   *
   * @get result
   * @type {?boolean}
   */
  this.is_traveller = null;

  /**
   * The business ID required to access client information.
   *
   * Specify this as `0` to retrieve the system-wide version of the information.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * ID of the visit, if we show icons on the attendance list and information that depends on visit is required.
   *
   * @get get
   * @type {string}
   */
  this.k_visit = "";

  /**
   * The member's lifetime value.
   *
   * @get result
   * @type {string}
   */
  this.m_lifetime_value = "";

  /**
   * The member ID.
   *
   * If `null`, the specified client isn't a member of the specified business.
   *
   * @get result
   * @type {?string}
   */
  this.s_member = null;

  /**
   * A list of icons with additional information about the business member.
   * If empty, all available icons will be displayed.
   * Comma separated sids from {@link Wl_Member_Info_MemberInfoSid}.
   *
   * @get get
   * @type {string}
   */
  this.s_show = "";

  /**
   * First user's name.
   *
   * @get result
   * @type {string}
   */
  this.text_first_name = "";

  /**
   * Full user's name.
   *
   * @get result
   * @type {string}
   */
  this.text_fullname = "";

  /**
   * ID of a user to retrieve member information for.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  /**
   * URL to barcode image.
   *
   * @get result
   * @type {string}
   */
  this.url_barcode = undefined;

  /**
   * URL to email.
   *
   * @get result
   * @type {string}
   */
  this.url_email = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Member_Info_InfoModel);

/**
 * @inheritDoc
 */
Wl_Member_Info_InfoModel.prototype.config=function()
{
  return {"a_field": {"a_info": {"get": {"result": true}},"a_result_list": {"get": {"result": true}},"a_uid": {"get": {"get": true}},"a_uid_date": {"get": {"get": true}},"a_visit_last": {"get": {"result": true}},"a_visit_next": {"get": {"result": true}},"dt_date": {"get": {"get": true}},"i_lifetime_visit": {"get": {"result": true}},"is_backend": {"get": {"get": true}},"is_full": {"get": {"get": true}},"is_traveller": {"get": {"result": true}},"k_business": {"get": {"get": true}},"k_visit": {"get": {"get": true}},"m_lifetime_value": {"get": {"result": true}},"s_member": {"get": {"result": true}},"s_show": {"get": {"get": true}},"text_first_name": {"get": {"result": true}},"text_fullname": {"get": {"result": true}},"uid": {"get": {"get": true}},"url_barcode": {"get": {"result": true}},"url_email": {"get": {"result": true}}}};
};

/**
 * @function
 * @name Wl_Member_Info_InfoModel.instanceGet
 * @param {string} k_business The business ID required to access client information. Specify this as `0` to retrieve the system-wide version of the information.
 * @param {string} uid ID of a user to retrieve member information for.
 * @param {boolean} is_full If you need to return additional information set to `true` or `false` if not.
 * @param {string} dt_date Date of the session, if we show it on the appointment info window or on the attendance list.
 * @returns {Wl_Member_Info_InfoModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */