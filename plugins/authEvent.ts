export enum State {
    SIGN_IN,
    SIGNED_IN,
    SIGNED_OUT,
    CONFIRM_SIGN_UP,
    CONFIRM_SIGN_IN,
    FORGOT_PASSWORD,
    REQUIRE_NEW_PASSWORD
}

const AmplifyAuthEvent = {
    install ( Vue: any ) {
        Vue.prototype.$AuthEvent = new Vue();
    }
};

export default AmplifyAuthEvent;
