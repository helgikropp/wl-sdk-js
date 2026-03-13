/**
 * API for group booking process.
 *
 * This API allows to book a class/event for multiple clients at once.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Book_Process_ProcessGroupModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * List of errors that occurred during booking.
   *
   * @post result
   * @type {{}[]}
   */
  this.a_book_error = [];

  /**
   * @typedef {{}} Wl_Book_Process_ProcessGroupModel_a_client_a_event_session_a_purchase_item_a_repeat_a_resource
   * @property {number} i_index Order number of the asset.
   * @property {number} k_resource Asset primary key.
   */
  /**
   * @typedef {{}} Wl_Book_Process_ProcessGroupModel_a_client_a_event_session_a_purchase_item_a_repeat
   * @property {number[]} a_day The days of week when the session repeats. One of the {@link ADateWeekSid} constants.
   *     Should be passed for any type of repetition.
   * @property {string} [dt_from] Date to start recurring booking.
   *     Expected for `id_repeat_end` = {@link RsRepeatEndSid.DATE}.
   * @property {string} [dt_to] Date to complete recurring booking.
   *     Expected for `id_repeat_end` = {@link RsRepeatEndSid.DATE}.
   * @property {number} [i_count] The number of occurrences after which the appointment's repeat cycle stops.
   *      Should be empty if the repeat cycle doesn't stop after a certain number of occurrences.
   *      Expected for `id_repeat_end` = {@link RsRepeatEndSid.COUNT}.
   * @property {number} i_duration Count of days\weeks\months between recurring bookings.
   * @property {number} id_duration The measurement unit of `i_duration`. One of the {@link ADurationSid} constants.
   *     Available duration units are: {@link ADurationSid.DAY}, {@link ADurationSid.WEEK}, {@link ADurationSid.MONTH}.
   * @property {number} id_repeat_end Possible ways to stop repeatable events. One of the {@link RsRepeatEndSid} constants.
   */
  /**
   * @typedef {{}} Wl_Book_Process_ProcessGroupModel_a_client_a_event_session_a_purchase_item
   * @property {number} [i_count] Number of options to purchase. Specify only if you want to pay a class booking by Drop-In.
   * @property {number} [id_purchase_item] Kind of option to purchase. One of {@link Wl_Purchase_Item_ItemSid} constants.
   *          Specify only if you want to purchase a new option.
   * @property {boolean} [is_renew] `true` if you want to enable auto-renewal for new purchase option. `false` otherwise.
   *          Specify only if you want to purchase a new option.
   * @property {boolean} [is_owner] `true` if client is owner of this purchase option.
   *          This means that this purchase option will be purchased for this client, even if another client
   *          can share a similar purchase option.
   * @property {string} [k_id] Primary key of option to purchase.
   *          Specify only if you want to purchase a new option.
   * @property {string} [k_login_prize] Primary key of user's prize.
   *          Specify if you want to pay by user's prize.
   * @property {string} [k_reward_prize] Primary key of a prize to redeem.
   *          Specify if you want to redeem a prize for payment.
   * @property {string} [s_signature] Signature of the client in base64 format.
   *          Specify only if you want to buy a purchase option that requires signature.
   */
  /**
   * @typedef {{}} Wl_Book_Process_ProcessGroupModel_a_client_a_event_session
   * @property {string} dtu_date Session date/time.
   * @property {string} k_class_period Session primary key.
   */
  /**
   * @typedef {{}} Wl_Book_Process_ProcessGroupModel_a_client
   * @property {Wl_Book_Process_ProcessGroupModel_a_client_a_event_session[]} [a_event_session] List of event sessions to book. Required for only for event that allows to select sessions to book.
   *     Each element has next keys:
   *     <dl>
   *         <dt>string `dtu_date`</dt>
   *         <dd>Session date/time.</dd>
   *         <dt>string `k_class_period`</dt>
   *         <dd>Session primary key.</dd>
   *     </dl>
   * @property {Wl_Book_Process_ProcessGroupModel_a_client_a_event_session_a_purchase_item[]} [a_purchase_item] Purchase option information. Required if the service requires online payment. Elements have next keys:
   *     <dl>
   *         <dt>
   *              int [`i_count`]
   *          </dt>
   *          <dd>
   *              Number of options to purchase. Specify only if you want to pay a class booking by Drop-In.
   *          </dd>
   *          <dt>
   *              int [`id_purchase_item`]
   *          </dt>
   *          <dd>
   *              Kind of option to purchase. One of {@link Wl_Purchase_Item_ItemSid} constants.
   *              Specify only if you want to purchase a new option.
   *          </dd>
   *          <dt>
   *              bool [`is_renew`]
   *          </dt>
   *          <dd>
   *              `true` if you want to enable auto-renewal for new purchase option. `false` otherwise.
   *              Specify only if you want to purchase a new option.
   *          </dd>
   *          <dt>
   *              bool [`is_owner`]
   *          </dt>
   *          <dd>
   *              `true` if client is owner of this purchase option.
   *              This means that this purchase option will be purchased for this client, even if another client
   *              can share a similar purchase option.
   *          </dd>
   *          <dt>
   *              string [`k_id`]
   *          </dt>
   *          <dd>
   *              Primary key of option to purchase.
   *              Specify only if you want to purchase a new option.
   *          </dd>
   *          <dt>
   *              string [`k_login_prize`]
   *          </dt>
   *          <dd>
   *              Primary key of user's prize.
   *              Specify if you want to pay by user's prize.
   *          </dd>
   *          <dt>
   *              string [`k_reward_prize`]
   *          </dt>
   *          <dd>
   *              Specify if you want to redeem a prize for payment.
   *          </dd>
   *          <dt>
   *              string [`s_signature`]
   *          </dt>
   *          <dd>
   *              Signature of the client in base64 format.
   *              Specify only if you want to buy a purchase option that requires signature.
   *          </dd>
   *     </dl>
   * @property {{}} [a_quiz_response] Answers for questions. Required if the service requires answers for questions.
   *     Keys are quiz keys.
   *     Values are response keys.
   * @property {Wl_Book_Process_ProcessGroupModel_a_client_a_event_session_a_purchase_item_a_repeat} [a_repeat] Recurring booking configuration:
   *     <dl>
   *       <dt>int[] `a_day`</dt>
   *       <dd>
   *         The days of week when the session repeats. One of the {@link ADateWeekSid} constants.
   *         Should be passed for any type of repetition.
   *       </dd>
   *       <dt>
   *         string [`dt_from`]
   *       </dt>
   *       <dd>
   *         Date to start recurring booking.
   *         Expected for `id_repeat_end` = {@link RsRepeatEndSid.DATE}.
   *       </dd>
   *       <dt>
   *         string [`dt_to`]
   *       </dt>
   *       <dd>
   *         Date to complete recurring booking.
   *         Expected for `id_repeat_end` = {@link RsRepeatEndSid.DATE}.
   *       </dd>
   *       <dt>
   *          int [`i_count`]
   *        </dt>
   *        <dd>
   *          The number of occurrences after which the appointment's repeat cycle stops.
   *          Should be empty if the repeat cycle doesn't stop after a certain number of occurrences.
   *          Expected for `id_repeat_end` = {@link RsRepeatEndSid.COUNT}.
   *        </dd>
   *       <dt>int `i_duration`</dt>
   *       <dd>Count of days\weeks\months between recurring bookings.</dd>
   *       <dt>
   *         int `id_duration`
   *       </dt>
   *       <dd>
   *         The measurement unit of `i_duration`. One of the {@link ADurationSid} constants.
   *         Available duration units are: {@link ADurationSid.DAY}, {@link ADurationSid.WEEK}, {@link ADurationSid.MONTH}.
   *       </dd>
   *       <dt>int `id_repeat_end`</dt>
   *       <dd>Possible ways to stop repeatable events. One of the {@link RsRepeatEndSid} constants.</dd>
   *     </dl>
   *     You can test this key only in a case of `1` client.
   * @property {Wl_Book_Process_ProcessGroupModel_a_client_a_event_session_a_purchase_item_a_repeat_a_resource[]} [a_resource] Asset information. Required if the service requires asset booking. Each element has next keys:
   *     <dl>
   *         <dt>int <tt>i_index</tt></dt>
   *         <dd>Order number of the asset.</dd>
   *         <dt>int <tt>k_resource</tt></dt>
     *         <dd>Asset primary key.</dd>
   *     </dl>
   * @property {string} [k_login_promotion] Primary key of user's purchase option.
   *     Specify only if you want to pay by already purchased option.
   * @property {string} [k_session_pass] Session pass to be used to book a session.
   * @property {string} uid User's primary key.
   */

  /**
   * List of clients to book.
   * Each value is an array with next keys:
   * <dl>
   *     <dt>
   *         array[] [`a_event_session`]
   *     </dt>
   *     <dd>
   *         List of event sessions to book. Required for only for event that allows to select sessions to book.
   *         Each element has next keys:
   *         <dl>
   *             <dt>string `dtu_date`</dt>
   *             <dd>Session date/time.</dd>
   *             <dt>string `k_class_period`</dt>
   *             <dd>Session primary key.</dd>
   *         </dl>
   *     </dd>
   *     <dt>
   *         array[] [`a_purchase_item`]
   *     </dt>
   *     <dd>
   *         Purchase option information. Required if the service requires online payment. Elements have next keys:
   *         <dl>
   *             <dt>
   *                  int [`i_count`]
   *              </dt>
   *              <dd>
   *                  Number of options to purchase. Specify only if you want to pay a class booking by Drop-In.
   *              </dd>
   *              <dt>
   *                  int [`id_purchase_item`]
   *              </dt>
   *              <dd>
   *                  Kind of option to purchase. One of {@link Wl_Purchase_Item_ItemSid} constants.
   *                  Specify only if you want to purchase a new option.
   *              </dd>
   *              <dt>
   *                  bool [`is_renew`]
   *              </dt>
   *              <dd>
   *                  `true` if you want to enable auto-renewal for new purchase option. `false` otherwise.
   *                  Specify only if you want to purchase a new option.
   *              </dd>
   *              <dt>
   *                  bool [`is_owner`]
   *              </dt>
   *              <dd>
   *                  `true` if client is owner of this purchase option.
   *                  This means that this purchase option will be purchased for this client, even if another client
   *                  can share a similar purchase option.
   *              </dd>
   *              <dt>
   *                  string [`k_id`]
   *              </dt>
   *              <dd>
   *                  Primary key of option to purchase.
   *                  Specify only if you want to purchase a new option.
   *              </dd>
   *              <dt>
   *                  string [`k_login_prize`]
   *              </dt>
   *              <dd>
   *                  Primary key of user's prize.
   *                  Specify if you want to pay by user's prize.
   *              </dd>
   *              <dt>
   *                  string [`k_reward_prize`]
   *              </dt>
   *              <dd>
   *                  Specify if you want to redeem a prize for payment.
   *              </dd>
   *              <dt>
   *                  string [`s_signature`]
   *              </dt>
   *              <dd>
   *                  Signature of the client in base64 format.
   *                  Specify only if you want to buy a purchase option that requires signature.
   *              </dd>
   *         </dl>
   *     </dd>
   *     <dt>
   *         array [`a_quiz_response`]
   *     </dt>
   *     <dd>
   *         Answers for questions. Required if the service requires answers for questions.
   *         Keys are quiz keys.
   *         Values are response keys.
   *     </dd>
   *     <dt>
   *         array [`a_repeat`]
   *     </dt>
   *     <dd>
   *         Recurring booking configuration:
   *         <dl>
   *           <dt>int[] `a_day`</dt>
   *           <dd>
   *             The days of week when the session repeats. One of the {@link ADateWeekSid} constants.
   *             Should be passed for any type of repetition.
   *           </dd>
   *           <dt>
   *             string [`dt_from`]
   *           </dt>
   *           <dd>
   *             Date to start recurring booking.
   *             Expected for `id_repeat_end` = {@link RsRepeatEndSid.DATE}.
   *           </dd>
   *           <dt>
   *             string [`dt_to`]
   *           </dt>
   *           <dd>
   *             Date to complete recurring booking.
   *             Expected for `id_repeat_end` = {@link RsRepeatEndSid.DATE}.
   *           </dd>
   *           <dt>
   *              int [`i_count`]
   *            </dt>
   *            <dd>
   *              The number of occurrences after which the appointment's repeat cycle stops.
   *              Should be empty if the repeat cycle doesn't stop after a certain number of occurrences.
   *              Expected for `id_repeat_end` = {@link RsRepeatEndSid.COUNT}.
   *            </dd>
   *           <dt>int `i_duration`</dt>
   *           <dd>Count of days\weeks\months between recurring bookings.</dd>
   *           <dt>
   *             int `id_duration`
   *           </dt>
   *           <dd>
   *             The measurement unit of `i_duration`. One of the {@link ADurationSid} constants.
   *             Available duration units are: {@link ADurationSid.DAY}, {@link ADurationSid.WEEK}, {@link ADurationSid.MONTH}.
   *           </dd>
   *           <dt>int `id_repeat_end`</dt>
   *           <dd>Possible ways to stop repeatable events. One of the {@link RsRepeatEndSid} constants.</dd>
   *         </dl>
   *         You can test this key only in a case of `1` client.
   *     </dd>
   *     <dt>
   *         array[] [`a_resource`]
   *     </dt>
   *     <dd>
   *         Asset information. Required if the service requires asset booking. Each element has next keys:
   *         <dl>
   *             <dt>int <var>i_index</var></dt>
   *             <dd>Order number of the asset.</dd>
   *             <dt>int <var>k_resource</var></dt>
   *             <dd>Asset primary key.</dd>
   *         </dl>
   *     </dd>
   *     <dt>
   *         string [`k_login_promotion`]
   *     </dt>
   *     <dd>
   *         Primary key of user's purchase option.
   *         Specify only if you want to pay by already purchased option.
   *     </dd>
   *     <dt>
   *         string [`k_session_pass`]
   *     </dt>
   *     <dd>
   *         Session pass to be used to book a session.
   *     </dd>
   *     <dt>string `uid`</dt>
   *     <dd>User's primary key.</dd>
   * </dl>
   *
   * @post post
   * @type {Wl_Book_Process_ProcessGroupModel_a_client[]}
   */
  this.a_client = [];

  /**
   * Primary keys of users' activity that correspond to bookings made.
   *
   * @post result
   * @type {string[]}
   */
  this.a_login_activity_book = undefined;

  /**
   * @typedef {{}} Wl_Book_Process_ProcessGroupModel_a_pay_form_a_pay_card_a_pay_address
   * @property {*} is_new Set this value to <tt>1</tt> to add a new payment address or to <tt>0</tt> to use a saved payment address.
   * @property {string} [k_geo_country] The key of the country used for the payment address. Specify this to add a new address.
   * @property {string} [k_geo_region] The key of the region for the payment address. Specify this to add a new address.
   * @property {string} [k_pay_address] The key of the saved payment address. Specify this to use a saved address.
   * @property {string} [s_city] The city used for the payment address. Specify this to add a new address.
   * @property {string} [s_name] The card name. Specify this to add a new address.
   * @property {string} [s_phone] The payment phone. Specify this to add a new address.
   * @property {string} [s_postal] The postal code for the payment address. Specify this to add a new address.
   * @property {string} [s_street1] The payment address. Specify this to add a new address.
   * @property {string} [s_street2] The optional payment address. Specify this to add a new address.
   */
  /**
   * @typedef {{}} Wl_Book_Process_ProcessGroupModel_a_pay_form_a_pay_card
   * @property {Wl_Book_Process_ProcessGroupModel_a_pay_form_a_pay_card_a_pay_address} a_pay_address The payment address:
   * <dl>
   *   <dt>boolean <tt>is_new</tt></dt>
   *   <dd>Set this value to <tt>1</tt> to add a new payment address or to <tt>0</tt> to use a saved payment address.</dd>
   *   <dt>string [<tt>k_geo_country</tt>]</dt>
   *   <dd>The key of the country used for the payment address. Specify this to add a new address.</dd>
   *   <dt>string [<tt>k_geo_region</tt>]</dt>
   *   <dd>The key of the region for the payment address. Specify this to add a new address.</dd>
   *   <dt>string [<tt>k_pay_address</tt>]</dt>
   *   <dd>The key of the saved payment address. Specify this to use a saved address.</dd>
   *   <dt>string [<tt>s_city</tt>]</dt>
   *   <dd>The city used for the payment address. Specify this to add a new address.</dd>
   *   <dt>string [<tt>s_name</tt>]</dt>
   *   <dd>The card name. Specify this to add a new address.</dd>
   *   <dt>string [<tt>s_phone</tt>]</dt>
   *   <dd>The payment phone. Specify this to add a new address.</dd>
   *   <dt>string [<tt>s_postal</tt>]</dt>
   *   <dd>The postal code for the payment address. Specify this to add a new address.</dd>
   *   <dt>string [<tt>s_street1</tt>]</dt>
   *   <dd>The payment address. Specify this to add a new address.</dd>
   *   <dt>string [<tt>s_street2</tt>]</dt>
   *   <dd>The optional payment address. Specify this to add a new address.</dd>
   * </dl>
   * @property {number} [i_csc] The credit card CSC. Specify this to add a new card.
   * @property {number} [i_month] The credit card expiration month. Specify this to add a new card.
   * @property {number} [i_year] The credit card expiration year. Specify this to add a new card.
   * @property {*} is_new Specify <tt>1</tt> to add a new card, or <tt>0</tt> to use a saved card.
   * @property {string} [k_pay_bank] The key of the credit card. Specify this to use saved card.
   * @property {string} [s_comment] Optional comment(s). Specify this to add a new card.
   * @property {string} [s_number] The card number. Specify this to add a new card.
   */
  /**
   * @typedef {{}} Wl_Book_Process_ProcessGroupModel_a_pay_form
   * @property {Wl_Book_Process_ProcessGroupModel_a_pay_form_a_pay_card} [a_pay_card] The payment card information:
   * <dl>
   *   <dt>
   *     array <tt>a_pay_address</tt>
   *   </dt>
   *   <dd>
   *     The payment address:
   *     <dl>
   *       <dt>boolean <tt>is_new</tt></dt>
   *       <dd>Set this value to <tt>1</tt> to add a new payment address or to <tt>0</tt> to use a saved payment address.</dd>
   *       <dt>string [<tt>k_geo_country</tt>]</dt>
   *       <dd>The key of the country used for the payment address. Specify this to add a new address.</dd>
   *       <dt>string [<tt>k_geo_region</tt>]</dt>
   *       <dd>The key of the region for the payment address. Specify this to add a new address.</dd>
   *       <dt>string [<tt>k_pay_address</tt>]</dt>
   *       <dd>The key of the saved payment address. Specify this to use a saved address.</dd>
   *       <dt>string [<tt>s_city</tt>]</dt>
   *       <dd>The city used for the payment address. Specify this to add a new address.</dd>
   *       <dt>string [<tt>s_name</tt>]</dt>
   *       <dd>The card name. Specify this to add a new address.</dd>
   *       <dt>string [<tt>s_phone</tt>]</dt>
   *       <dd>The payment phone. Specify this to add a new address.</dd>
   *       <dt>string [<tt>s_postal</tt>]</dt>
   *       <dd>The postal code for the payment address. Specify this to add a new address.</dd>
   *       <dt>string [<tt>s_street1</tt>]</dt>
   *       <dd>The payment address. Specify this to add a new address.</dd>
   *       <dt>string [<tt>s_street2</tt>]</dt>
   *       <dd>The optional payment address. Specify this to add a new address.</dd>
   *     </dl>
   *   </dd>
   *   <dt>
   *     int [<tt>i_csc</tt>]
   *   </dt>
   *   <dd>
   *     The credit card CSC. Specify this to add a new card.
   *   </dd>
   *   <dt>
   *     int [<tt>i_month</tt>]
   *   </dt>
   *   <dd>
   *     The credit card expiration month. Specify this to add a new card.
   *   </dd>
   *   <dt>
   *     int [<tt>i_year</tt>]
   *   </dt>
   *   <dd>
   *     The credit card expiration year. Specify this to add a new card.
   *   </dd>
   *   <dt>
   *     boolean <tt>is_new</tt>
   *   </dt>
   *   <dd>
   *     Specify <tt>1</tt> to add a new card, or <tt>0</tt> to use a saved card.
   *   </dd>
   *   <dt>
   *     string [<tt>k_pay_bank</tt>]
   *   </dt>
   *   <dd>
   *     The key of the credit card. Specify this to use saved card.
   *   </dd>
   *   <dt>
   *     string [<tt>s_comment</tt>]
   *   </dt>
   *   <dd>
   *     Optional comment(s). Specify this to add a new card.
   *   </dd>
   *   <dt>
   *     string [<tt>s_number</tt>]
   *   </dt>
   *   <dd>
   *     The card number. Specify this to add a new card.
   *   </dd>
   * </dl>
   * @property {string} f_amount The amount of money to withdraw with this payment source.
   * @property {*} [is_hide] Whether payment method should be saved to user's account.
   * @property {*} is_save Determines whether this payment method is hidden.
   * @property {*} is_success Identifies whether this source was successfully charged.
   * @property {string} [m_surcharge] The client-side calculated surcharge.
   * @property {string} [s_index] The index of this form (optional).
   * @property {string} sid_pay_method The payment method ID.
   */

  /**
   * A list of payment sources to pay with.
   *
   * Each element has next keys:
   * <dl>
   *   <dt>
   *     array [<var>a_pay_card</var>]
   *   </dt>
   *   <dd>
   *     The payment card information:
   *     <dl>
   *       <dt>
   *         array <var>a_pay_address</var>
   *       </dt>
   *       <dd>
   *         The payment address:
   *         <dl>
   *           <dt>boolean <var>is_new</var></dt>
   *           <dd>Set this value to <tt>1</tt> to add a new payment address or to <tt>0</tt> to use a saved payment address.</dd>
   *           <dt>string [<var>k_geo_country</var>]</dt>
   *           <dd>The key of the country used for the payment address. Specify this to add a new address.</dd>
   *           <dt>string [<var>k_geo_region</var>]</dt>
   *           <dd>The key of the region for the payment address. Specify this to add a new address.</dd>
   *           <dt>string [<var>k_pay_address</var>]</dt>
   *           <dd>The key of the saved payment address. Specify this to use a saved address.</dd>
   *           <dt>string [<var>s_city</var>]</dt>
   *           <dd>The city used for the payment address. Specify this to add a new address.</dd>
   *           <dt>string [<var>s_name</var>]</dt>
   *           <dd>The card name. Specify this to add a new address.</dd>
   *           <dt>string [<var>s_phone</var>]</dt>
   *           <dd>The payment phone. Specify this to add a new address.</dd>
   *           <dt>string [<var>s_postal</var>]</dt>
   *           <dd>The postal code for the payment address. Specify this to add a new address.</dd>
   *           <dt>string [<var>s_street1</var>]</dt>
   *           <dd>The payment address. Specify this to add a new address.</dd>
   *           <dt>string [<var>s_street2</var>]</dt>
   *           <dd>The optional payment address. Specify this to add a new address.</dd>
   *         </dl>
   *       </dd>
   *       <dt>
   *         int [<var>i_csc</var>]
   *       </dt>
   *       <dd>
   *         The credit card CSC. Specify this to add a new card.
   *       </dd>
   *       <dt>
   *         int [<var>i_month</var>]
   *       </dt>
   *       <dd>
   *         The credit card expiration month. Specify this to add a new card.
   *       </dd>
   *       <dt>
   *         int [<var>i_year</var>]
   *       </dt>
   *       <dd>
   *         The credit card expiration year. Specify this to add a new card.
   *       </dd>
   *       <dt>
   *         boolean <var>is_new</var>
   *       </dt>
   *       <dd>
   *         Specify <tt>1</tt> to add a new card, or <tt>0</tt> to use a saved card.
   *       </dd>
   *       <dt>
   *         string [<var>k_pay_bank</var>]
   *       </dt>
   *       <dd>
   *         The key of the credit card. Specify this to use saved card.
   *       </dd>
   *       <dt>
   *         string [<var>s_comment</var>]
   *       </dt>
   *       <dd>
   *         Optional comment(s). Specify this to add a new card.
   *       </dd>
   *       <dt>
   *         string [<var>s_number</var>]
   *       </dt>
   *       <dd>
   *         The card number. Specify this to add a new card.
   *       </dd>
   *     </dl>
   *   </dd>
   *   <dt>
   *     string <var>f_amount</var>
   *   </dt>
   *   <dd>
   *     The amount of money to withdraw with this payment source.
   *   </dd>
   *   <dt>
   *     boolean [<var>is_hide</var>]
   *   </dt>
   *   <dt>
   *     bool [<var>is_save</var>=true]
   *   </dt>
   *   <dd>
   *     Whether payment method should be saved to user's account.
   *   </dd>
   *   <dd>
   *     Determines whether this payment method is hidden.
   *   </dd>
   *   <dt>
   *     boolean [<var>is_success</var>=<tt>false</tt>]
   *   </dt>
   *   <dd>
   *     Identifies whether this source was successfully charged.
   *   </dd>
   *   <dt>
   *     string [<var>m_surcharge</var>]
   *   </dt>
   *   <dd>
   *     The client-side calculated surcharge.
   *   </dd>
   *   <dt>
   *     string [<var>s_index</var>]
   *   </dt>
   *   <dd>
   *     The index of this form (optional).
   *   </dd>
   *   <dt>
   *     string <var>sid_pay_method</var>
   *   </dt>
   *   <dd>
   *     The payment method ID.
   *   </dd>
   * </dl>
   *
   * @post post
   * @type {Wl_Book_Process_ProcessGroupModel_a_pay_form[]}
   */
  this.a_pay_form = [];

  /**
   * Primary keys of bookings made.
   *
   * @post result
   * @type {string[]}
   */
  this.a_visit = undefined;

  /**
   * Date/time to which session is booked.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.dt_date_gmt = "";

  /**
   * The mode type. One of the {@link Wl_Mode_ModeSid} constants.
   *
   * @get get
   * @post get
   * @type {number}
   */
  this.id_mode = 0;

  /**
   * `true` if action is performed as a staff member; `false` otherwise.
   *
   * If `true` is sent, access to the business and to the client will be checked.
   * If `false` is sent, user can book only for himself or for relatives if this is allowed in business settings.
   *
   * @get get
   * @post get
   * @type {boolean}
   */
  this.is_backend = false;

  /**
   * Checking whether the client has a credit card (if configured in the business) will be skipped if this flag is set to `false`.
   *
   * Use this field with caution.
   * The final booking will not use this flag, and the check will still be performed.
   *
   * @get get
   * @post get
   * @type {boolean}
   */
  this.is_credit_card_check = true;

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
   * @get get
   * @post get
   * @type {string}
   */
  this.k_class_period = "0";

  /**
   * The key of the user's activity corresponding to the purchase made.
   * `null` if no purchase was made.
   *
   * @post result
   * @type {?string}
   */
  this.k_login_activity_purchase = null;

  /**
   * The installment template primary key.
   * `null` to not use installment template.
   *
   * @post post
   * @type {?string}
   */
  this.k_pay_installment_template = null;

  /**
   * The discount code to be applied to the purchase.
   *
   * @post post
   * @type {string}
   */
  this.text_discount_code = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extends(Wl_Book_Process_ProcessGroupModel);

/**
 * @inheritDoc
 */
Wl_Book_Process_ProcessGroupModel.prototype.config=function()
{
  return {"a_field": {"a_book_error": {"post": {"result": true}},"a_client": {"post": {"post": true}},"a_login_activity_book": {"post": {"result": true}},"a_pay_form": {"post": {"post": true}},"a_visit": {"post": {"result": true}},"dt_date_gmt": {"get": {"get": true},"post": {"get": true}},"id_mode": {"get": {"get": true},"post": {"get": true}},"is_backend": {"get": {"get": true},"post": {"get": true}},"is_credit_card_check": {"get": {"get": true},"post": {"get": true}},"is_force_pay_later": {"post": {"post": true}},"k_class_period": {"get": {"get": true},"post": {"get": true}},"k_login_activity_purchase": {"post": {"result": true}},"k_pay_installment_template": {"post": {"post": true}},"text_discount_code": {"post": {"post": true}}}};
};