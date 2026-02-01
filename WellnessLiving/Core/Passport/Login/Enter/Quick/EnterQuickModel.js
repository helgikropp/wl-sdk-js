/**
 * Allows to generate protected link to allow to sign in user without authorization.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Passport_Login_Enter_Quick_EnterQuickModel()
{
    WlSdk_ModelAbstract.apply(this);

    /**
     * Additional data, which can be sent to the listeners of the event "user signed in".
     *
     * @get get
     * @type {{}}
     */
    this.a_data = undefined;

    /**
     * Key of the user to be signed in.
     *
     * `null` to logout current user.
     *
     * @get get
     * @type {?string}
     */
    this.uid = null;

    /**
     * Protected link to sign in.
     *
     * @get result
     * @type {string}
     */
    this.url_enter = undefined;

    /**
     * Link to redirect user after sign in.
     *
     * @get get
     * @type {string}
     */
    this.url_redirect = undefined;

    this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Passport_Login_Enter_Quick_EnterQuickModel);

/**
 * @inheritDoc
 */
Core_Passport_Login_Enter_Quick_EnterQuickModel.prototype.config=function()
{
    return {"a_field": {"a_data": {"get": {"get": true}},"uid": {"get": {"get": true}},"url_enter": {"get": {"result": true}},"url_redirect": {"get": {"get": true}}}};
};

/**
 * @typedef Core_Passport_Login_Enter_Quick_EnterQuickModel_GetResponse
 * @type {object}
 * @property {string} url_enter Protected link to sign in.
 */

/**
 * @function
 * @name Core_Passport_Login_Enter_Quick_EnterQuickModel.get
 * @returns {Promise<Core_Passport_Login_Enter_Quick_EnterQuickModel_GetResponse>} Response from this request
 */