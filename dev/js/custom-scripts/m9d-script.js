import cursorSetup from './ui-functions/cursorSetup';
import canHover from './ui-functions/canHover';
import runNav from './ui-functions/runNav';
import runScrollAnimations from './ui-functions/runScrollAnimations';
import scrollToSection from './ui-functions/scrollToSection';
import doPageScroll from './ui-functions/doPageScroll';
import activeSectionClasses from './ui-functions/activeSectionClasses';
import siteBtt from './ui-functions/siteBtt';
import formValidation from './ui-functions/formValidation';
import triggerVideos from './ui-functions/triggerVideos';
import manageSliderClasses from './ui-functions/manageSliderClasses';
import homeSquaresAnimation from './ui-functions/homeSquaresAnimation';
import projectGridActions from './ui-functions/projectGridActions';
import projectCaseStudyControl from './ui-functions/projectCaseStudyControl';
import csWrapperAnimation from './ui-functions/csWrapperAnimation';
import loadProjectPartial from './ui-functions/loadProjectPartial';
import projectDetailControl from './ui-functions/projectDetailControl';
import resizeActions from './ui-functions/resizeActions';
import setUpCarousel from './ui-functions/setupCarousel';
import setOfflineElements from './ui-functions/setOfflineElements';


// NOTE - vars need to be required for each module
const { m9Vars } = require('./appVars');


// object for script
const mNineDScript = {};


mNineDScript.start = {

    'config': {},
    cursorSetup,
    canHover,
    runNav,
    runScrollAnimations,
    scrollToSection,
    doPageScroll,
    activeSectionClasses,
    siteBtt,
    formValidation,
    triggerVideos,
    manageSliderClasses,
    homeSquaresAnimation,
    projectGridActions,
    projectCaseStudyControl,
    csWrapperAnimation,
    loadProjectPartial,
    projectDetailControl,
    resizeActions,
    setUpCarousel,
    setOfflineElements,
    init(settings) {
        // loop through any settings passed in, and overwrite the default config with those settings
        if (settings && typeof (settings) === 'object') {
            for (let prop in settings) {
                if (settings.hasOwnProperty(prop)) {
                    this.config[prop] = settings[prop];
                }
            }
        }

        this.canHover();

        let screenSizeTest = currScreenSize();

        // see if the current screen size is in the large screen array
        if (m9Vars.largeScreenCategories.includes(screenSizeTest)) {
            this.cursorSetup();
        }

        this.resizeActions();
        this.runNav();
        this.runScrollAnimations();
        this.scrollToSection();
        this.activeSectionClasses();
        this.siteBtt();
        this.formValidation();

        this.projectGridActions();
        this.projectCaseStudyControl();

        this.setOfflineElements();

    }

};


window.addEventListener('DOMContentLoaded', () => {

    gsap.registerPlugin(ScrollToPlugin);
    gsap.registerPlugin(CSSRulePlugin);

    // dom is loaded!
    mNineDScript.start.init();


});


window.addEventListener('load', () => {

    mNineDScript.start.triggerVideos();
    mNineDScript.start.homeSquaresAnimation();
    mNineDScript.start.setUpCarousel();

});