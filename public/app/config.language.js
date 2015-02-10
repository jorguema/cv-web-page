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

                //EXPERIENCE
                EXPERIENCE_SECTION:'Experience',
                GEMBIOSOFT: 'Gembiosoft SME',
                GEMBIOSOFT_DATE :'Sep 2012 - Mar 2013',
                GEMBIOSOFT_ROLE: 'Software developer',
                GEMBIOSOFT_DESCRIPTION:'Company specialized in the genomic area, my work was focused on the integration of genomic information from multiple repositories in a single information system and the development of a tool for genetic analysis.',
                FE: 'La Fe Hospital',
                FE_DATE :'Mar 2013 - Jun 2013',
                FE_ROLE: 'Analyst and software developer',
                FE_DESCRIPTION:'Design and creation of an information system for neuroblastoma, a childhood tumor, using an ETL strategy for data integration and implementation of a web application in order to exploit information.',
                PROS: 'Polytechnic University of Valencia',
                PROS_DATE :'Jul 2013 - Dec 2013',
                PROS_ROLE: 'Analyst and software developer',
                PROS_DESCRIPTION:'DSIC/PROS Department focused on the study of the following areas:',
                MONKEYS: 'A Million Monkeys',
                MONKEYS_DATE :'Dec 2013 - Present',
                MONKEYS_ROLE: 'Full stack developer',
                MONKEYS_DESCRIPTION:'DSIC/PROS Department focused on the study of the following areas:',
                BANDPOINTER: 'Content Pointers SL',
                BANDPOINTER_DATE :'Mar 2014 - Jan 2015',
                BANDPOINTER_ROLE: 'Co-founder',
                BANDPOINTER_DESCRIPTION:'DSIC/PROS Department focused on the study of the following areas:',

                //CONTACT
                CONTACT_INFO_SECTION:'Contact info',
                CONTACT_PHONE: '+34 605 033 179',
                CONTACT_ADDRESS:'Valencia, Alaquas, Spain',
                CONTACT_EMAIL: 'jorguema@gmail.com',
                CONTACT_SKYPE: 'jorguema',
                FOLLOW_SECTION:'Follow me',
                CONTACT_STACKOVERFLOW: 'Stackoverflow',
                CONTACT_GITHUB:'GitHub',
                CONTACT_LINKEDIN:'LinkedIn',

                //ABOUT
                ABOUT_SECTION: 'About me',
                ABOUT_ME_DESCRIPTION : "Software developer, enthusiast of new technologies, entrepreneur, techcrunch lover, team worker, constant, self taught, comprehensive and not a robot!",
                ABOUT_ME_DESCRIPTION_2: "Be constant and make things right. That's what i apply to my life.",
                ABOUT_ME_DESCRIPTION_3: "I really enjoy software development, specially when you have to do magic in deadlines. Joking apart, be a software developer is awesome, is like being the top of the food chain.",
                ABOUT_ME_DESCRIPTION_4: "Single page applications, user experience, rest api and cloud platforms, that's what really defines me.",

                INTERESTS_SECTIONS: 'Interests',
                MUSIC: 'Music',
                WEB_DEV: 'Web development',
                TRILOGIES: 'Trilogies',
                EXERCISE: 'Exercise',
                TEA: 'Tea',
                STARTUPS:'Startups',
                UX_UI:'UX/UI',
                PRODUCTIVITY:'Productivity',
                CATS: 'Cats',

                //SKILLS
                SKILLS:'Skills',
                FRONT_END: 'Front-end',
                BACK_END : 'Back-end',
                DB: 'Database',
                WS: 'Web services',
                OTHERS: 'Others',
                CLOUD: 'Cloud',
                MOBILE: 'Mobile',
                SPA:'Single page applications',
                BOWER: 'Bower',
                GRUNT : 'Grunt',
                    GULP : 'Gulp',
                    Karma : 'Karma JS',
                    ANGULAR : 'AngularJS',
                    Javascript : 'Javascript',
                    Jquery : 'Jquery',
                    Less: 'Less',
                    SASS: 'Sass',
                    ASP_MVC: 'ASP.NET MVC',
                    Phantom : 'PhantomJS',
                    JADE: 'Jade',

                    NODEJS : 'NodeJS',
                    EXPRESS_JS : 'ExpressJS',
                    WEB_API : 'ASP.NET Web API',
                    EF : 'Entity Framework',
                    Ninject : 'Ninject',
                    LINQ : 'Linq',
                    NUNIT : 'NUnit',
                    SPRING : 'Spring',
                    JPA : 'JPA',
                    Hibernate : 'Hibernate',
                    JUnit : 'JUnit',

                SOAP:'SOAP',
                REST:'REST',
                XML: 'XML',
                JSON: 'JSON',

                    MONGODB: 'MongoDB',
                    MYSQL: 'MySQL',
                    ORACLE: 'Oracle',
                    POSTGRES: 'PostgreSQL',
                    SQLITE: 'SQLite',

                    AZURE: 'Azure',
                    HEROKU: 'Heroku',
                    MONGOLAB: 'MongoLab',
                    GITHUB: 'GitHub',
                    BB:'Bitbucket',

                WP:'Windows Phone',
                ANDROID: 'Android',
                XAMARIN: 'Xamarin',

                GIT: 'Git',
                SCRUM: 'Scrum',
                XP:'Extreme programming',
                PATER_DESIGN: 'Pattern design',
                CD: 'Continuous deployment',
                CI: 'Continuous integration',


                EN: 'English',
                ES: 'Spanish'
        });
        $translateProvider.preferredLanguage('en');
    }]);

})();