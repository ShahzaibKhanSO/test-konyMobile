define("flexAPIs", function() {
    return function(controller) {
        var flexAPIs = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flexAPIs",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "skin": "slFbox"
        }, {}, {});
        flexAPIs.setDefaultUnit(kony.flex.DP);
        var flexFreeAPI = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flexFreeAPI",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flexFreeAPI.setDefaultUnit(kony.flex.DP);
        var lblNameOfAPI = new kony.ui.Label({
            "id": "lblNameOfAPI",
            "isVisible": true,
            "left": "4%",
            "skin": "CopyslLabel0e602890c73ed49",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "12dp",
            "width": "80%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var imgLeftAPI = new kony.ui.Image2({
            "height": "20dp",
            "id": "imgLeftAPI",
            "isVisible": true,
            "right": "4%",
            "skin": "slImage",
            "src": "chevron.png",
            "top": "12dp",
            "width": "20dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flexFreeAPI.add(lblNameOfAPI, imgLeftAPI);
        var lblDummy = new kony.ui.Label({
            "height": "1dp",
            "id": "lblDummy",
            "isVisible": true,
            "left": "0%",
            "skin": "CopyslLabel0cb7a56c300c143",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "12dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flexAPIs.add(flexFreeAPI, lblDummy);
        return flexAPIs;
    }
})