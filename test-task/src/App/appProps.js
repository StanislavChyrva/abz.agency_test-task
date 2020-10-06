const clientWidth = window.innerWidth;

const appProps = {
    mobileMenuProps: [
        [
            'About me',
            'Relationships',
            'Users',
            'Sign Up',
            'Terms and Conditions',
        ],
        [
            'How it works',
            'Partnerships',
            'Help',
            'Leave testimonial',
            'Contact us',
        ],
        [
            'Articles',
            'Our news',
            'Testimonial',
            'Licences',
            'Privacy Policy'
        ],
    ],


    desktopMenuProps: [
        {
            text: 'About me',
            link: '/sign-up'
        }, {
            text: 'Relationships',
            link: '/sign-up'
        }, {
            text: 'Requirement',
            link: '/sign-up'
        }, {
            text: 'Users',
            link: '/sign-up'
        }, {
            text: 'Sign up',
            link: '/sign-up'
        },
    ],


    introProps: {
        title: 'Test assignment for Frontend Developer position',
        text: clientWidth < 768
            ? 'We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository. '
            : 'We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository. Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck! The photo has to scale in the banner area on the different screens',
        className: 'intro'
    },
    usersProps: {
        title: 'Our cheerful users',
        text: 'Attention! Sorting users by registration date',
        className: 'users'
    },

    letsGetAcquaintedProps: {
        title: `Let's get acquainted`,
        subTitle: `I am cool frontend developer`,
        text: [
            'We will evaluate how clean your approach to writing CSS and Javascript code is. You can use any CSS and Javascript 3rd party libraries without any restriction',
            'If 3rd party css/javascript libraries are added to the project via bower/npm/yarn you will get bonus points. If you use any task runner (gulp/webpack) you will get bonus points as well. Slice service directory page P​SD mockup​ into HTML5/CSS3.'
        ],
        className: 'lets-get-acquainted'
    },

    registerProps: {
        title: 'Register to get a work',
        text: 'Attention! After successful registration and alert, update the list of users in the block from the top',
        className: 'register'
    }
};

export default appProps;
