/**
 * Retrieves a list of visits that overlap with the specified service/class/resource/time data.
 *
 * This model is generated automatically based on API.
 *
 * Mirrors backend endpoint <tt>Wl\Profile\Attendance\AttendanceOverlapApi</tt>.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Profile_Attendance_AttendanceOverlapModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "dtl_date,i_duration,k_business,k_class_period,k_location,k_resource,k_service,uid";

  /**
   * List of visits that overlap with the specified data.
   *
   * This data is returned by server-side {@link Wl\Profile\Attendance\Attendance::getVisitOverlap()}.
   *
   * @get result
   * @type {Array.<{}>}
   */
  this.a_visit_list = [];

  /**
   * Date of a selected service in location timezone.
   *
   * @get get
   * @type {?string}
   */
  this.dtl_date = null;

  /**
   * Duration of a service (asset).
   *
   * @get get
   * @type {number}
   */
  this.i_duration = 0;

  /**
   * Primary key of the business.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * Class period key.
   *
   * @get get
   * @type {?string}
   */
  this.k_class_period = "0";

  /**
   * Location key.
   *
   * @get get
   * @type {?string}
   */
  this.k_location = "0";

  /**
   * Asset key.
   *
   * @get get
   * @type {?string}
   */
  this.k_resource = "0";

  /**
   * Service key.
   *
   * @get get
   * @type {?string}
   */
  this.k_service = "0";

  /**
   * UID of a user.
   *
   * @get get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Profile_Attendance_AttendanceOverlapModel);

/**
 * @inheritDoc
 */
Wl_Profile_Attendance_AttendanceOverlapModel.prototype.config = function()
{
  return {"a_field": {"a_visit_list": {"get": {"result": true}},"dtl_date": {"get": {"get": true}},"i_duration": {"get": {"get": true}},"k_business": {"get": {"get": true}},"k_class_period": {"get": {"get": true}},"k_location": {"get": {"get": true}},"k_resource": {"get": {"get": true}},"k_service": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Profile_Attendance_AttendanceOverlapModel.instanceGet
 * @param {?string} dtl_date Date of a selected service in location timezone.
 * @param {number} i_duration Duration of a service (asset).
 * @param {string} k_business Primary key of the business.
 * @param {?string} k_class_period Class period key.
 * @param {?string} k_location Location key.
 * @param {?string} k_resource Asset key.
 * @param {?string} k_service Service key.
 * @param {string} uid UID of a user.
 * @returns {Wl_Profile_Attendance_AttendanceOverlapModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

