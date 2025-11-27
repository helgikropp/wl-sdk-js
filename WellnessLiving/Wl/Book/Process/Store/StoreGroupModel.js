/**
 * Performs preliminary checks and distribution of selected purchase options among clients.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Book_Process_Store_StoreGroupModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * A list of existing login promotions which are selected by a group of clients.
   *
   * This login promotions will be checked to determine if it can be applied to the current class or event.
   *
   * * Key - UID of the client.
   * * Value - login promotion key.
   *
   * @post post
   * @type {{}}
   */
  this.a_login_promotion = [];

  /**
   * @typedef {{}} Wl_Book_Process_Store_StoreGroupModel_a_purchase_item_check
   * @property {number} i_session The number of sessions that this item can cover.
   *   This only applies to items of type {@link Wl_Purchase_Item_ItemSid.CLASS_PERIOD}.
   * @property {number} s_value The unique identifier of the item being checked.
   * This corresponds to one of the following values:
   * <ul>
   *   <li>{@link Wl_Book_Process_Purchase_Purchase56Model.a_purchase}`["s_value"]`</li>
   *   <li>{@link Wl_Book_Process_Purchase_Purchase56Model.a_reward_prize}`["s_value"]`</li>
   *   <li>{@link Wl_Book_Process_Purchase_Purchase56Model.a_login_prize}`["s_value"]`</li>
   * </ul>
   */

  /**
   * A list of new purchase items which are selected by a group of clients.
   *
   * This new purchase items will be checked to determine if it can be applied to the current class or event before
   * being purchased.
   *
   * * Key - UID of the client.
   * * Value - an array with the following structure:
   * <dl>
   *   <dt>int `i_session`</dt>
   *   <dd>
   *       The number of sessions that this item can cover.
   *       This only applies to items of type {@link Wl_Purchase_Item_ItemSid.CLASS_PERIOD}.
   *   </dd>
   *   <dt>int `s_value`</dt>
   *   <dd>
   *     The unique identifier of the item being checked.
   *     This corresponds to one of the following values:
   *     <ul>
   *       <li>{@link Wl_Book_Process_Purchase_Purchase56Model.a_purchase}`["s_value"]`</li>
   *       <li>{@link Wl_Book_Process_Purchase_Purchase56Model.a_reward_prize}`["s_value"]`</li>
   *       <li>{@link Wl_Book_Process_Purchase_Purchase56Model.a_login_prize}`["s_value"]`</li>
   *     </ul>
   *   </dd>
   * </dl>
   *
   * @post post
   * @type {Wl_Book_Process_Store_StoreGroupModel_a_purchase_item_check[]}
   */
  this.a_purchase_item_check = [];

  /**
   * @typedef {{}} Wl_Book_Process_Store_StoreGroupModel_a_purchase_item_distribute
   * @property {{}} a_owner List of UIDs of owners who will share this promotion with this client.
   *   Each UID is a primary key in the {@link \PassportLoginSql} table.
   *   If empty, this client is the owner of the promotion.
   * @property {number} i_session The number of sessions that this item can cover.
   *   The same as in {@link Wl_Book_Process_Store_StoreGroupModel.a_purchase_item_check}.
   *   `0` if not applicable.
   * @property {?string} k_login_promotion Login promotion key.
   *   The same as in {@link Wl_Book_Process_Store_StoreGroupModel.a_login_promotion}.
   *   `null` if not applicable.
   * @property {?string} k_session_pass Session pass key.
   *   The same as in {@link Wl_Book_Process_Store_StoreGroupModel.a_session_pass}.
   *   `null` if not applicable.
   * @property {?string} s_value The unique identifier of the purchase item.
   *   The same as in {@link Wl_Book_Process_Store_StoreGroupModel.a_purchase_item_check}.
   *   `null` if not applicable.
   * @property {string} text_error Error text if the purchase item cannot be applied to the current class or event for this client.
   */

  /**
   * A list of distributed new shared purchase items which are selected by a group of clients.
   *
   * * Key - UID of the client.
   * * Value - an array with the following structure:
   * <dl>
   *   <dt>array `a_owner`</dt>
   *   <dd>
   *       List of UIDs of owners who will share this promotion with this client.
   *       Each UID is a primary key in the {@link \PassportLoginSql} table.
   *       If empty, this client is the owner of the promotion.
   *   </dd>
   *   <dt>int `i_session`</dt>
   *   <dd>
   *       The number of sessions that this item can cover.
   *       The same as in {@link Wl_Book_Process_Store_StoreGroupModel.a_purchase_item_check}.
   *       `0` if not applicable.
   *   </dd>
   *   <dt>string|null `k_login_promotion`</dt>
   *   <dd>
   *       Login promotion key.
   *       The same as in {@link Wl_Book_Process_Store_StoreGroupModel.a_login_promotion}.
   *       `null` if not applicable.
   *   </dd>
   *   <dt>string|null `k_session_pass`</dt>
   *   <dd>
   *       Session pass key.
   *       The same as in {@link Wl_Book_Process_Store_StoreGroupModel.a_session_pass}.
   *       `null` if not applicable.
   *   </dd>
   *   <dt>string|null `s_value`</dt>
   *   <dd>
   *       The unique identifier of the purchase item.
   *       The same as in {@link Wl_Book_Process_Store_StoreGroupModel.a_purchase_item_check}.
   *       `null` if not applicable.
   *   </dd>
   *   <dt>string `text_error`</dt>
   *   <dd>
   *       Error text if the purchase item cannot be applied to the current class or event for this client.
   *   </dd>
   * </dl>
   *
   * @post result
   * @type {Wl_Book_Process_Store_StoreGroupModel_a_purchase_item_distribute}
   */
  this.a_purchase_item_distribute = [];

  /**
   * @typedef {{}} Wl_Book_Process_Store_StoreGroupModel_a_resource
   * @property {number} i_index The order number of the asset (from 1 to the asset quantity).
   * @property {string} k_resource The asset key.
   */

  /**
   * A list of assets which are selected by a group of clients.
   *
   * * Key - UID of the client.
   * * Value - an array with the following structure:
   * <dl>
   *   <dt>int `i_index`</dt>
   *   <dd>The order number of the asset (from 1 to the asset quantity).</dd>
   *   <dt>string `k_resource`</dt>
   *   <dd>The asset key.</dd>
   * </dl>
   *
   * @post post
   * @type {Wl_Book_Process_Store_StoreGroupModel_a_resource[]}
   */
  this.a_resource = [];

  /**
   * A list of existing session passes (drop-in, full-event) which are selected by a group of clients.
   *
   * This session passes will be checked to determine if it can be applied to the current class or event.
   *
   *  * Key - UID of the client.
   *  * Value - session pass key.
   *
   * @post post
   * @type {{}}
   */
  this.a_session_pass = [];

  /**
   * A list of sessions which are selected by a group of clients.
   *
   * * Key - UID of the client.
   * * Value - an array with the following structure:
   *   * Key - class period keys.
   *   * Value - index arrays of dates/times when the session occurred (MySQL format; UTC).
   *
   * @post post
   * @type {{}[]}
   */
  this.a_session_select = [];

  /**
   * A list of wait list (unpaid) sessions which are selected by a group of clients.
   *
   * * Key - UID of the client.
   * * Value - an array with the following structure:
   *   * Key - class period keys.
   *   * Value - index arrays of dates/times when the session occurred (MySQL format; UTC).
   *
   * @post post
   * @type {{}[]}
   */
  this.a_session_wait_list_unpaid = [];

  /**
   * Date/time to which session is booked.
   *
   * @post get
   * @type {string}
   */
  this.dt_date_gmt = "";

  /**
   * The mode type. One of the {@link Wl_Book_Process_Store_ModeSid} constants.
   *
   * @post get
   * @type {number}
   */
  this.id_mode = 0;

  /**
   * `true` to book unpaid.
   * `false` otherwise.
   *
   * Allows booking unpaid when client has a login promotion that can be used to pay for the service.
   * Allowed in {@link Wl_Book_Process_Store_ModeSid.WIDGET} mode only.
   *
   * @post post
   * @type {boolean}
   */
  this.is_book_unpaid = false;

  /**
   * `true` if user pressed 'Pay later'.
   * `false` if user pressed 'Pay now'.
   *
   * @post post
   * @type {boolean}
   */
  this.is_force_pay_later = false;

  /**
   * Key of session which is booked.
   *
   * @post get
   * @type {string}
   */
  this.k_class_period = "0";

  /**
   * The client key for which the booking is being made.
   *
   * @post get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Book_Process_Store_StoreGroupModel);

/**
 * @inheritDoc
 */
Wl_Book_Process_Store_StoreGroupModel.prototype.config=function()
{
  return {"a_field": {"a_login_promotion": {"post": {"post": true}},"a_purchase_item_check": {"post": {"post": true}},"a_purchase_item_distribute": {"post": {"result": true}},"a_resource": {"post": {"post": true}},"a_session_pass": {"post": {"post": true}},"a_session_select": {"post": {"post": true}},"a_session_wait_list_unpaid": {"post": {"post": true}},"dt_date_gmt": {"post": {"get": true}},"id_mode": {"post": {"get": true}},"is_book_unpaid": {"post": {"post": true}},"is_force_pay_later": {"post": {"post": true}},"k_class_period": {"post": {"get": true}},"uid": {"post": {"get": true}}}};
};