/**
 * Age restriction information for an event.
 *
 * @typedef {Object} Wl_Event_EventListModel_AgeRestriction
 * @property {int|null} i_age_from The minimum age for participation in the event.
 *   `null` if there's no minimum age set or information isn't available.
 * @property {int|null} i_age_to The age limit for participation in the event.
 *   `null` if there's no age limit set or information isn't available.
 * @property {boolean} is_age_public `true` if age restrictions are public and available, `false` if they're hidden.
 *   When restrictions are hidden and the current user isn't a staff member, the age range will be empty.
 */

/**
 * Event logo information.
 *
 * @typedef {Object} Wl_Event_EventListModel_Logo
 * @property {int} i_height The image height.
 * @property {int} i_height_src The source image's height.
 * @property {int} i_rotate The angle which image was rotated compared to the original.
 * @property {int} i_width The image width.
 * @property {int} i_width_src The source image's width.
 * @property {int} id_type_src The image type ID.
 * @property {boolean} is_resize `true` if the image has been resized. `false` otherwise.
 * @property {boolean} is_old `true` if the image is old. `false` otherwise.
 * @property {string} s_url The URL to the image.
 * @property {string} url-view The URL to the image.
 * @property {string} url-thumbnail The URL to the image's thumbnail.
 */

/**
 * Staff member information.
 *
 * @typedef {Object} Wl_Event_EventListModel_StaffMember
 * @property {string} k_staff_member The staff member key.
 * @property {string} text_business_role The name of the staff member's business role.
 * @property {string} text_mail The staff member's email address.
 * @property {string} text_name_first The staff member's first name.
 * @property {string} text_name_full The staff member's full name.
 * @property {string} text_name_last The staff member's last name.
 * @property {string} uid The staff member's user key.
 */

/**
 * Event schedule instance information.
 *
 * @typedef {Object} Wl_Event_EventListModel_Schedule
 * @property {int[]} a_day The days when the event is scheduled (0 - Sunday, 6 - Saturday).
 * @property {Wl_Event_EventListModel_StaffMember[]} a_staff_member Information about the staff member(s) conducting the event.
 * @property {string} dl_end The ending date of the event series.
 * @property {string} dl_start The starting date of the event series.
 * @property {boolean} is_day `true` if the event starts and ends on the same day.
 * @property {string} k_class_period The class period key.
 * @property {string} k_location The location key.
 * @property {string} text_location The name of the location.
 * @property {string} text_time The human-readable version of the event time.
 */

/**
 * Event information object.
 *
 * @typedef {Object} Wl_Event_EventListModel_Event
 * @property {Wl_Event_EventListModel_AgeRestriction} a_age_restriction Information about age restrictions for this event.
 * @property {string[]} a_class_tab The list of class tab keys that contain this event.
 * @property {Wl_Event_EventListModel_Logo} a_logo Information about the event's logo.
 * @property {Wl_Event_EventListModel_Schedule[]} a_schedule Information about the event's schedule.
 * @property {string[]} a_search_tag The list of search tags for this event.
 * @property {boolean} can_book Whether event can be booked or not.
 *   `true` - there are no restrictions to book this event in general.
 *   `false` - for some reason event cannot be booked.
 *   The reason can be found in the following fields: `html_reason`, `id_reason`, `sid_reason`.
 *   This field can be used instead of `is_bookable` and covers a significant number of checks under its value.
 * @property {boolean} can_cancel Whether the current user can cancel already booked event.
 * @property {string} dl_early The early cancel date.
 * @property {string} dl_end The ending date of the event.
 * @property {string} dl_start The starting date of the event.
 * @property {string} dl_session Local date of the closest session of the event.
 * @property {string} dtu_session Date of the closest session of the event.
 * @property {int} i_session_all Number of all sessions in the event.
 * @property {int} i_session_future Number of all sessions in the future.
 * @property {int} i_session_past Number of all sessions in the past.
 * @property {boolean} is_age_restrict `true` if the event is age restricted, `false` if the event is not.
 * @property {boolean} is_age_restrict_only `true` if this event booking is restricted and restricted because of client's age only. `false` otherwise.
 * @property {boolean} is_block `true` if the event is a block event, `false` if the event is not.
 * @property {boolean} is_bookable Whether event is bookable.
 *   `true` - there are no restrictions to book this event in general.
 *   `false` - for some reason event cannot be booked.
 *   Historically, the value of this field may not cover all expected checks, and may be confusing to someone.
 *   It is properly used in combination with a number of other flags.
 *   If you need a flag that covers most of the checks please use `can_book` field.
 * @property {boolean} is_booked `true` if the user has booked the event, `false` if the event is not.
 * @property {boolean} is_closed `true` if booking the event is closed, `false` if the event is not.
 * @property {boolean} is_full `true` if the event is full, `false` if the event is not.
 * @property {boolean} is_online `true` if the event is available online, `false` if the event is not.
 * @property {boolean} is_online_private `true` if the event is online and private, `false` if the event is not.
 * @property {boolean} is_open `true` if the event is open to be booked, `false` if the event is not.
 * @property {boolean} is_prorate `true` if the event is prorated, `false` if the event is not.
 * @property {boolean} is_virtual `true` if the event is only held virtually, `false` if the event is not.
 * @property {string} k_class The class key.
 * @property {string} k_class_period The class period key.
 * @property {string} k_enrollment_block The enrollment block key.
 * @property {string} k_location The location key.
 * @property {string} m_price_max Maximum price per session in the event.
 * @property {string} m_price_min Minimum price per session in the event.
 * @property {string} m_price_total The total price of booking a session.
 * @property {string} m_price_total_early The total price if booked early.
 * @property {string} text_age_restrict The age description.
 * @property {string} text_title The name of the event.
 * @property {string} url_book The direct booking url.
 * @property {string} xml_description The description of the event.
 */

/**
 * Retrieves a list of events that fit the given filter parameters.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Event_EventListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * List of class keys applied by filter.
   *
   * @get get
   * @type {?string[]}
   */
  this.a_class_filter = null;

  /**
   * List of day the week applied by filter {@link ADateWeekSid}.
   *
   * @get get
   * @type {?string[]}
   */
  this.a_day = null;

  /**
   * List of enrollment blocks keys applied by filter.
   *
   * @get get
   * @type {?string[]}
   */
  this.a_enrollment_block_filter = null;

  /**
   * List of available enrollment blocks correspond to requested parameters.
   *
   * @get result
   * @type {{}}
   */
  this.a_enrollment_block_list = [];

  /**
   * A list of events corresponding to requested parameters.
   *
   * @get result
   * @type {Wl_Event_EventListModel_Event[]}
   */
  this.a_event_list = [];

  /**
   * List of location keys applied by filter.
   *
   * @get get
   * @type {?string[]}
   */
  this.a_location = null;

  /**
   * List of staff keys applied by filter.
   *
   * @get get
   * @type {?string[]}
   */
  this.a_staff = null;

  /**
   * List of time day applied by filter {@link RsScheduleTimeSid}.
   *
   * @get get
   * @type {?string[]}
   */
  this.a_time = null;

  /**
   * List of IDs to include/exclude virtual events.
   * If the only ID is {@link Core_Sid_YesNoSid.YES}, only virtual events are included.
   * If the only ID is {@link Core_Sid_YesNoSid.NO}, only in-person events are included.
   * Otherwise, no filtering is done.
   *
   * @get get
   * @type {?string[]}
   */
  this.a_virtual = null;

  /**
   * The end date of the range from which a list of events should be retrieved.
   *
   * <tt>null</tt> if the range has no end date.
   *
   * @get get
   * @type {string}
   */
  this.dl_end = undefined;

  /**
   * The start date of the range from which a list of events should be retrieved.
   *
   * <tt>null</tt> if the range has no start date.
   *
   * @get get
   * @type {string}
   */
  this.dl_start = undefined;

  /**
   * Defines how the event availability flag filter should be applied.
   *
   * One of {@link AFlagSid} constants.
   *
   * * {@link AFlagSid.ON} to show only available events.
   * * {@link AFlagSid.OFF} to show only unavailable events.
   * * {@link AFlagSid.ALL} to show all events (available and unavailable).
   *
   * @get get
   * @type {number}
   */
  this.id_flag = 3;

  /**
   * Determines whether the endpoint is used for backend mode.
   *
   * @get get
   * @type {boolean}
   */
  this.is_backend = undefined;

  /**
   * Model cache reset flag.
   *
   * @put post
   * @type {boolean}
   */
  this.is_cache_reset = false;

  /**
   * `true` to show even event restricted by booking policies; `false` to show available events only.
   *
   * @get get
   * @type {boolean}
   */
  this.is_ignore_requirement = false;

  /**
   * Determines whether you need to retrieve a list of event sessions regardless of the tab specified in {@link Wl_Event_EventListModel.k_class_tab}.
   *
   * * <tt>true</tt> - retrieves a list regardless of the specified tab.
   * * <tt>false</tt> - retrieves a list only for the specific tab.
   *
   * @get get
   * @type {boolean}
   */
  this.is_tab_all = false;

  /**
   * The event business key to retrieve a list of all event sessions in business.
   *
   * Required if {@link Wl_Event_EventListModel.k_location} isn't specified.
   *
   * @get get
   * @put get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * The event class key to retrieve a list of all event sessions of a specific class.
   *
   * @get get
   * @type {string}
   */
  this.k_class = undefined;

  /**
   * The class tab key to retrieve a list of event sessions from a specific tab only.
   * An empty value to retrieve a list of event sessions that don't belong to any tab.
   *
   * Will be ignored in next cases:
   * * {@link Wl_Event_EventListModel.k_skin} specified.
   * * {@link Wl_Event_EventListModel.is_tab_all} is <tt>true</tt>.
   *
   * @get get
   * @type {string}
   */
  this.k_class_tab = undefined;

  /**
   * The event location key to retrieve a list of all event sessions in a specific location.
   *
   * Required if {@link Wl_Event_EventListModel.k_business} isn't specified.
   *
   * @get get
   * @type {string}
   */
  this.k_location = undefined;

  /**
   * The skin key if an event list is used for widget mode.
   *
   * {@link Wl_Event_EventListModel.k_class_tab} will be ignored for widget mode.
   *
   * @get get
   * @type {string}
   */
  this.k_skin = undefined;

  /**
   * Search string to filter events by name.
   *
   * @get get
   * @type {string}
   */
  this.text_search = "";

  /**
   * The user key.
   * Required to apply specific user rules such as age restrictions.
   *
   * @get get
   * @put get
   * @type {string}
   */
  this.uid = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Event_EventListModel);

/**
 * @inheritDoc
 */
Wl_Event_EventListModel.prototype.config=function()
{
  return {"a_field": {"a_class_filter": {"get": {"get": true}},"a_day": {"get": {"get": true}},"a_enrollment_block_filter": {"get": {"get": true}},"a_enrollment_block_list": {"get": {"result": true}},"a_event_list": {"get": {"result": true}},"a_location": {"get": {"get": true}},"a_staff": {"get": {"get": true}},"a_time": {"get": {"get": true}},"a_virtual": {"get": {"get": true}},"dl_end": {"get": {"get": true}},"dl_start": {"get": {"get": true}},"id_flag": {"get": {"get": true}},"is_backend": {"get": {"get": true}},"is_cache_reset": {"put": {"post": true}},"is_ignore_requirement": {"get": {"get": true}},"is_tab_all": {"get": {"get": true}},"k_business": {"get": {"get": true},"put": {"get": true}},"k_class": {"get": {"get": true}},"k_class_tab": {"get": {"get": true}},"k_location": {"get": {"get": true}},"k_skin": {"get": {"get": true}},"text_search": {"get": {"get": true}},"uid": {"get": {"get": true},"put": {"get": true}}}};
};