(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    return i(g);
    function i(p, q) {
        switch (p['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var s = function () {
                switch (p['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (s) {
                return function () {
                    var x, y;
                    var z = (q && q['viewerName'] ? this['getComponentByName'](q['viewerName']) : undefined) || this['getMainViewer']();
                    if (p['toLowerCase']()['startsWith']('photo'))
                        x = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (B) {
                            var C = B['get']('player');
                            return C && C['get']('viewerArea') == z;
                        })['map'](function (D) {
                            return D['get']('media')['get']('playList');
                        });
                    else {
                        x = this['_getPlayListsWithViewer'](z);
                        y = o['bind'](this, z);
                    }
                    if (!h) {
                        for (var A = 0x0; A < x['length']; ++A) {
                            x[A]['bind']('changing', k, this);
                        }
                        h = !![];
                    }
                    return n['call'](this, x, s, y);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](p);
            };
        default:
            if (p['toLowerCase']()['startsWith']('viewer.')) {
                var t = p['split']('.');
                var u = t[0x1];
                if (u) {
                    var v = t['slice'](0x2)['join']('.');
                    return i(v, { 'viewerName': u });
                }
            } else if (p['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var w = undefined;
                var s = function () {
                    switch (p['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var E = /quiz\.([\w_]+)\.(.+)/['exec'](p);
                        if (E) {
                            w = E[0x1];
                            switch ('quiz.' + E[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (s) {
                    return function () {
                        var F = this['get']('data')['quiz'];
                        if (F) {
                            if (!h) {
                                if (w != undefined)
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, J[L]['id'], s), this);
                                        }
                                    } else {
                                        F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, w, s), this);
                                    }
                                else
                                    F['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], l['call'](this, s), this);
                                h = !![];
                            }
                            try {
                                var O = 0x0;
                                if (w != undefined) {
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            O += F['getObjective'](J[L]['id'], s);
                                        }
                                    } else {
                                        O = F['getObjective'](w, s);
                                    }
                                } else {
                                    O = F['get'](s);
                                    if (s == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        O += 0x1;
                                }
                                return O;
                            } catch (P) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function j() {
        var Q = this['get']('data');
        Q['updateText'](Q['translateObjs'][f]);
    }
    function k(R) {
        var S = R['data']['nextSelectedIndex'];
        if (S >= 0x0) {
            var T = R['source']['get']('items')[S];
            var U = function () {
                T['unbind']('begin', U, this);
                j['call'](this);
            };
            T['bind']('begin', U, this);
        }
    }
    function l(V) {
        return function (W) {
            if (V in W) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function m(X, Y) {
        return function (Z, a0) {
            if (X == Z && Y in a0) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function n(a1, a2, a3) {
        for (var a4 = 0x0; a4 < a1['length']; ++a4) {
            var a5 = a1[a4];
            var a6 = a5['get']('selectedIndex');
            if (a6 >= 0x0) {
                var a7 = a2['split']('.');
                var a8 = a5['get']('items')[a6];
                if (a3 !== undefined && !a3['call'](this, a8))
                    continue;
                for (var a9 = 0x0; a9 < a7['length']; ++a9) {
                    if (a8 == undefined)
                        return '';
                    a8 = 'get' in a8 ? a8['get'](a7[a9]) : a8[a7[a9]];
                }
                return a8;
            }
        }
        return '';
    }
    function o(aa, ab) {
        var ac = ab['get']('player');
        return ac !== undefined && ac['get']('viewerArea') == aa;
    }
}
var script = {"class":"Player","children":["this.MainViewer"],"scripts":{"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"clone":TDV.Tour.Script.clone,"openLink":TDV.Tour.Script.openLink,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"setValue":TDV.Tour.Script.setValue,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"resumePlayers":TDV.Tour.Script.resumePlayers,"getOverlays":TDV.Tour.Script.getOverlays,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getPixels":TDV.Tour.Script.getPixels,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getMainViewer":TDV.Tour.Script.getMainViewer,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"init":TDV.Tour.Script.init,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"disableVR":TDV.Tour.Script.disableVR,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"historyGoBack":TDV.Tour.Script.historyGoBack,"getComponentByName":TDV.Tour.Script.getComponentByName,"toggleVR":TDV.Tour.Script.toggleVR,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"historyGoForward":TDV.Tour.Script.historyGoForward,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"registerKey":TDV.Tour.Script.registerKey,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setMapLocation":TDV.Tour.Script.setMapLocation,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"unregisterKey":TDV.Tour.Script.unregisterKey,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"initAnalytics":TDV.Tour.Script.initAnalytics,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"enableVR":TDV.Tour.Script.enableVR,"cloneBindings":TDV.Tour.Script.cloneBindings,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"initQuiz":TDV.Tour.Script.initQuiz,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"downloadFile":TDV.Tour.Script.downloadFile,"isPanorama":TDV.Tour.Script.isPanorama,"existsKey":TDV.Tour.Script.existsKey,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getKey":TDV.Tour.Script.getKey,"createTween":TDV.Tour.Script.createTween,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"executeJS":TDV.Tour.Script.executeJS,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"mixObject":TDV.Tour.Script.mixObject,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"shareSocial":TDV.Tour.Script.shareSocial,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"showPopupImage":TDV.Tour.Script.showPopupImage,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"textToSpeech":TDV.Tour.Script.textToSpeech,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"playAudioList":TDV.Tour.Script.playAudioList,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"quizFinish":TDV.Tour.Script.quizFinish,"showWindow":TDV.Tour.Script.showWindow,"getMediaByName":TDV.Tour.Script.getMediaByName,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"startMeasurement":TDV.Tour.Script.startMeasurement,"setLocale":TDV.Tour.Script.setLocale,"translate":TDV.Tour.Script.translate,"quizStart":TDV.Tour.Script.quizStart,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"quizShowScore":TDV.Tour.Script.quizShowScore,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout},"id":"rootPlayer","start":"this.init()","scrollBarColor":"#000000","backgroundColor":["#FFFFFF"],"data":{"locales":{"fr":"locale/fr.txt"},"defaultLocale":"fr","history":{},"textToSpeechConfig":{"pitch":1,"speechOnInfoWindow":false,"rate":1,"speechOnTooltip":false,"volume":1,"speechOnQuizQuestion":false,"stopBackgroundAudio":false},"name":"Player5258","displayTooltipInTouchScreens":true},"gap":10,"scrollBarMargin":2,"backgroundColorRatios":[0],"hash": "c7a35fcae8a7df93cc62b01eebcf7c91cdf58fdb693af8c6f7dd7b2636b5f157", "definitions": [{"items":[{"class":"PanoramaPlayListItem","camera":"this.panorama_B1B6A0F6_A486_BD85_41E1_D9B1361D2428_camera","media":"this.panorama_B1B6A0F6_A486_BD85_41E1_D9B1361D2428","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer"}],"class":"PlayList","id":"mainPlayList"},{"arrowKeysAction":"translate","class":"PanoramaPlayer","mouseControlMode":"drag_rotation","touchControlMode":"drag_rotation","displayPlaybackBar":true,"aaEnabled":true,"viewerArea":"this.MainViewer","id":"MainViewerPanoramaPlayer"},{"class":"ViewerArea","toolTipTextShadowColor":"#000000","subtitlesTextShadowVerticalLength":1,"playbackBarRight":0,"toolTipPaddingRight":6,"playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderRadius":0,"subtitlesBottom":50,"playbackBarHeadWidth":6,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarBackgroundOpacity":1,"toolTipShadowColor":"#333138","subtitlesFontFamily":"Arial","subtitlesTextShadowHorizontalLength":1,"progressBarBorderRadius":2,"playbackBarHeadShadowOpacity":0.7,"toolTipBackgroundColor":"#F6F6F6","progressBackgroundColorRatios":[0],"firstTransitionDuration":0,"data":{"name":"Main Viewer"},"progressBarBorderSize":0,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarBorderColor":"#FFFFFF","playbackBarBorderRadius":0,"playbackBarProgressBorderColor":"#000000","subtitlesTop":0,"surfaceReticleColor":"#FFFFFF","vrPointerColor":"#FFFFFF","progressRight":"33%","progressOpacity":0.7,"playbackBarLeft":0,"playbackBarHeadBorderColor":"#000000","progressBarBackgroundColorDirection":"horizontal","playbackBarHeadBorderRadius":0,"playbackBarHeadShadowBlurRadius":3,"playbackBarHeadShadowColor":"#000000","playbackBarBorderSize":0,"subtitlesTextShadowColor":"#000000","progressBarBorderColor":"#000000","playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadBorderSize":0,"playbackBarHeadHeight":15,"subtitlesGap":0,"subtitlesBackgroundColor":"#000000","toolTipFontSize":"1.11vmin","toolTipPaddingBottom":4,"toolTipPaddingTop":4,"id":"MainViewer","progressBarBackgroundColorRatios":[0],"toolTipFontFamily":"Arial","toolTipPaddingLeft":6,"vrPointerSelectionColor":"#FF6600","subtitlesBackgroundOpacity":0.2,"playbackBarHeadShadow":true,"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipFontColor":"#606060","subtitlesBorderColor":"#FFFFFF","progressBarBackgroundColor":["#3399FF"],"subtitlesFontSize":"3vmin","progressBorderColor":"#000000","playbackBarBottom":5,"progressBorderRadius":2,"subtitlesTextShadowOpacity":1,"progressBackgroundColor":["#000000"],"subtitlesFontColor":"#FFFFFF","minHeight":50,"vrPointerSelectionTime":2000,"minWidth":100,"toolTipBorderColor":"#767676","playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeight":10,"progressLeft":"33%","progressBottom":10,"surfaceReticleSelectionColor":"#FFFFFF","width":"100%","progressHeight":2,"playbackBarProgressBorderSize":0,"height":"100%","progressBorderSize":0,"propagateClick":false},{"enterPointingToHorizon":true,"class":"PanoramaCamera","initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"id":"panorama_B1B6A0F6_A486_BD85_41E1_D9B1361D2428_camera"},{"class":"Panorama","data":{"label":"Flow"},"label":trans('panorama_B1B6A0F6_A486_BD85_41E1_D9B1361D2428.label'),"thumbnailUrl":"media/panorama_B1B6A0F6_A486_BD85_41E1_D9B1361D2428_t.jpg","frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_B1B6A0F6_A486_BD85_41E1_D9B1361D2428_t.jpg","cube":{"levels":[{"class":"TiledImageResourceLevel","width":30720,"url":"media/panorama_B1B6A0F6_A486_BD85_41E1_D9B1361D2428_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","height":5120,"rowCount":10,"colCount":60},{"class":"TiledImageResourceLevel","width":15360,"url":"media/panorama_B1B6A0F6_A486_BD85_41E1_D9B1361D2428_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","height":2560,"rowCount":5,"colCount":30},{"class":"TiledImageResourceLevel","width":9216,"url":"media/panorama_B1B6A0F6_A486_BD85_41E1_D9B1361D2428_0/{face}/2/{row}_{column}.jpg","tags":"ondemand","height":1536,"rowCount":3,"colCount":18},{"class":"TiledImageResourceLevel","width":6144,"url":"media/panorama_B1B6A0F6_A486_BD85_41E1_D9B1361D2428_0/{face}/3/{row}_{column}.jpg","tags":"ondemand","height":1024,"rowCount":2,"colCount":12},{"class":"TiledImageResourceLevel","width":3072,"url":"media/panorama_B1B6A0F6_A486_BD85_41E1_D9B1361D2428_0/{face}/4/{row}_{column}.jpg","tags":["ondemand","preload"],"height":512,"rowCount":1,"colCount":6}],"class":"ImageResource"}}],"hfovMax":130,"hfov":360,"id":"panorama_B1B6A0F6_A486_BD85_41E1_D9B1361D2428","vfov":180}],"defaultMenu":["fullscreen","mute","rotation"],"layout":"absolute","minHeight":0,"watermark":false,"minWidth":0,"width":"100%","height":"100%","propagateClick":false};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var ad = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return ad;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2024.0.19.js.map
})();
//Generated with v2024.0.19, Sat Dec 7 2024