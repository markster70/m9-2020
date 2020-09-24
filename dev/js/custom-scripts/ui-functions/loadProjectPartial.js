function loadProjectPartial(el) {


    let contentToLoad = el.dataset.content;
    //let elParent = el.parentNode.parentNode;
    let projectContainer = $1('.mn-project-grid-item-cs-wrap-inner');

    const _self = this;

    partialLoader(projectContainer, contentToLoad)
        .then(function () {
            _self.csWrapperAnimation('go');
            _self.setOfflineElements();
        })
        .catch(function () {
            // need to do something here with the error handler
        });
}

module.exports = loadProjectPartial;