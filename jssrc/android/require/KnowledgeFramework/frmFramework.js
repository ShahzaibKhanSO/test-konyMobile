define("KnowledgeFramework/frmFramework", function() {
    return function(controller) {
        function addWidgetsfrmFramework() {
            this.setDefaultUnit(kony.flex.DP);
            var KnowledgeFramework1 = new com.konycmpt.KnowledgeFramework1({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "KnowledgeFramework1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "CopyslFbox3",
                "top": "0%",
                "width": "100%",
                "zIndex": 50
            }, {}, {});
            this.add(KnowledgeFramework1);
        };
        return [{
            "addWidgets": addWidgetsfrmFramework,
            "enabledForIdleTimeout": false,
            "id": "frmFramework",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_ff1182f99d924272996832958105b8e0,
            "skin": "sknblueform"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "footerOverlap": false,
            "headerOverlap": false,
            "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
            "retainScrollPosition": false,
            "titleBar": true,
            "titleBarSkin": "slTitleBar",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});