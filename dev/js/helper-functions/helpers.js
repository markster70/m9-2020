// helper functions for m9 digital

// selecting elements

// select a list of matching elements, context is optional
function $(selector, context) {
    return (context || document).querySelectorAll(selector);
}

// select the first match only, context is optional
function $1(selector, context) {
    return (context || document).querySelector(selector);
}

// has, add, remove Class
function hasClass(el, className) {
    return el.classList ? el.classList.contains(className) : new RegExp('\\b'+ className+'\\b').test(el.className);
}

function addClass(el, className) {
    if (el.classList) el.classList.add(className);
    else if (!hasClass(el, className)) el.className += ' ' + className;
}

function removeClass(el, className) {
    if (el.classList) el.classList.remove(className);
    else el.className = el.className.replace(new RegExp('\\b'+ className+'\\b', 'g'), '');
}

function toggleClass(el, className, callback) {
    el.classList.toggle(className);
    if(callback && callback.typeOf === 'function') {
        callback();
    }
}

// debounced resize

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

function getElementPosition(el){
    var tp = el.offsetTop;
    return tp;
}

// get current screenSize

function currScreenSize() {
    var head = document.getElementsByTagName( 'head' )[ 0 ];
    var computed;

    if ( window.getComputedStyle ) {
        computed = window.getComputedStyle( head, null );
    } else if ( document.documentElement.currentStyle ) {
        computed = head.currentStyle;
    }
    var size = computed.fontSize;
    size = parseInt( size, 10 );
    var screenDef;

    if ( size === 10 ) {
        // small screen
        screenDef = 'ss';
    } else if ( size === 20 ) {
        // midi screen
        screenDef = 'ms';
    } else if ( size === 30 ) {
        // large screen
        screenDef = 'ls';
    } else if ( size === 40 ) {
        screenDef = 'xls';
    }
    else if ( size === 50 ) {
        screenDef = 'xxl';
    }
    else if ( size === 60 ) {
        screenDef = 'massive';
    }

    return screenDef;
}

function partialLoader(container, partial) {
    return new Promise(function(resolve, reject) {
        let x;

        if(XMLHttpRequest) {
            x = new XMLHttpRequest();
        } else {
            x = new ActiveXObject("Microsoft.XMLHTTP");
        }

        x.open("GET", partial, true);
        x.send();

        x.onreadystatechange = function () {
            if(x.readyState === 4){

                if(x.status === 200) {
                    container.innerHTML = x.responseText;
                    resolve('Success');
                } else {
                    container.innerHTML = "Error loading document";
                    reject('Error');
                }
            }
        }
    });
}

// detect the dreaded crappo versions of IE

function detectOldIE() {
    let ua = window.navigator.userAgent;


    let msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    let trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        let rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }


    // other browser
    return false;
}


function Timer(fn, t) {
    let timerObj = setInterval(fn, t);

    this.stop = function() {
        if (timerObj) {
            clearInterval(timerObj);
            timerObj = null;
        }
        return this;
    }

    // start timer using current settings (if it's not already running)
    this.start = function() {
        if (!timerObj) {
            this.stop();
            timerObj = setInterval(fn, t);
        }
        return this;
    }

    // start with new interval, stop current interval
    this.reset = function(newT) {
        t = newT;
        return this.stop().start();
    }
}

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}