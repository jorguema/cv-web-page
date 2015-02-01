(function() {
    'use strict';

    var app = angular.module('app');

    app.config(['$translateProvider', function($translateProvider) {
        $translateProvider.translations('es', {
            COLON: ':',

            //TEST
            hello : 'Hola (ES)'
        })
        .translations('en', {
                COLON: ':',

                //MENU-LEFT
                ABOUT_ME: 'About me',
                RESUME: 'Resume',
                EXPERIENCE: 'Experience',
                CONTACT : 'Contact',

                //RESUME
                EDUCATION_SECTION: 'Education',
                MASTER: "Master's degree in Software Engineering, Formal Methods and Information Systems",
                UNIVERSITY: 'Polytechnic University of Valencia',
                MASTER_PROJECT:'Project: Genomic Information System: Loading module and integration of genomic information',
                CAREER: 'Software engineering',
                CAREER_SPECIALIZATION:'Software Engineering specialization',
                CAREER_PROJECT:'Project: Web, mobile and desktop application for a restaurant',
                CERTIFICATES: 'Certificates',
                WP_CERTIFICATION_1 : 'Microsoft Virtual Academy Career in Windows Phone 7',
                WP_CERTIFICATION_1_INSTITUTION : 'Microsoft Virtual Academy',
                WP_CERTIFICATION_2 : 'Windows Phone Certification',
                WP_CERTIFICATION_2_INSTITUTION : 'Microsoft Mexico',
                HTML_CERTIFICATION : 'HTML5 Certification',
                HTML_CERTIFICATION_INSTITUTION : 'Crystal eLearning Content Factory S.L.',
                MONGO_CERTIFICATION: 'MongoDB for Node.js Developers',
                MONGO_CERTIFICATION_INSTITUTION: 'MongoDB University',
                COMPLEMENTARY_EDUCATION: 'Complementary education',
                COMPLEMENTARY_EDUCATION_1: 'CEEI: European Centers of Innovative companies',
                COMPLEMENTARY_EDUCATION_1_DESCRIPTION_1: '- Business plan',
                COMPLEMENTARY_EDUCATION_1_DESCRIPTION_2: '- Marketing and social media',
                COMPLEMENTARY_EDUCATION_1_DESCRIPTION_3: '- Innovation, success and business failure',
                COMPLEMENTARY_EDUCATION_2:'Yuzz: Entrepreneurs with technology-based ideas',
                COMPLEMENTARY_EDUCATION_2_DESCRIPTION_1:'- Elevator pitch',
                COMPLEMENTARY_EDUCATION_2_DESCRIPTION_2:'- Canvas model y Lean Canvas',
                COMPLEMENTARY_EDUCATION_2_DESCRIPTION_3:'- Leadership',
                COMPLEMENTARY_EDUCATION_2_DESCRIPTION_4:'- Business opportunities',


                //TEST
                hello : 'Hi (EN)'
        });
        $translateProvider.preferredLanguage('en');
    }]);

})();