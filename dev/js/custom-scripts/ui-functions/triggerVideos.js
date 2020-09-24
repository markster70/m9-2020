function triggerVideos() {

    let ss = currScreenSize();

    // am only triggering the videos for screen sizes in the 'massive' category here -
    // those most likely to have the bandwith to smoothly play the video
    // it's for visual decoration only, so no functional need to be play when the nav opens

    // also dont wa

    if (ss === 'ss' || ss === 'ms' || ss === 'ls' || ss ==='xls' || !navigator.onLine) {
        return;
    }

    let mediaWrappers = $('.mn-site-nav-video-bg');
    let videoFormats = [{type: 'mp4'}, {type: 'webm'}]; //, {type : 'webm'}

    for (let i = 0; i < mediaWrappers.length; i++) {
        let wrapperEl = mediaWrappers[i];
        let videoEl = wrapperEl.querySelector('video');
        let videoUrl = wrapperEl.dataset.videoId;

        for (let j = 0; j < videoFormats.length; j++) {

            let videoSourceType = videoUrl + '.' + videoFormats[j].type;
            let videoTag = '<source src="' + videoSourceType + '" type="video/' + videoFormats[j].type + '">';
            videoEl.innerHTML += videoTag;
            addClass(videoEl, 'has-video');
        }

        videoEl.addEventListener('loadeddata', function() {

            if ( videoEl.readyState >=3)  {


                addClass(videoEl, 'video-ready');

            }


        });

    }
}

module.exports = triggerVideos;