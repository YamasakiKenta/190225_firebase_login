var app = new Vue({
    el : '#app',
    data: {
        user: {},
        ui: new firebaseui.auth.AuthUI(firebase.auth()),
        db: firebase.firestore(),
        msg: '',
        props: [
            'displayName',
            'email',
            'emailVerified',
            'isAnonymous',
            'metadata',
            'phoneNumber',
            'photoURL',
            'providerData',
            'providerId',
            // 'refreshToken',
            'uid',
        ],
    },
    methods: {
        ui_start() {
            this.ui.start('#firebaseui-auth-container', {
                signInSuccessUrl: '/',
                credentialHelper: firebaseui.auth.CredentialHelper.NONE,
                signInOptions: [
                    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                    // firebase.auth.EmailAuthProvider.PROVIDER_ID,
                ],
            });
        },
    },
    mounted() {
        firebase.auth().onAuthStateChanged((user)=> {
            console.log(user)
            this.user = user || {}
            if(!user) {
                this.ui_start()
            }
        })
    },
});

