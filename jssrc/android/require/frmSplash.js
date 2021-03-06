define("frmSplash", function() {
    return function(controller) {
        function addWidgetsfrmSplash() {
            this.setDefaultUnit(kony.flex.DP);
            var SplashScreen = new com.konycmpt.SplashScreen({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "SplashScreen",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "CopyslFbox0de457026748347",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            SplashScreen.frmNameToNavigate = "frmNewsAndWeather";
            this.add(SplashScreen);
        };
        return [{
            "addWidgets": addWidgetsfrmSplash,
            "enabledForIdleTimeout": false,
            "id": "frmSplash",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": controller.AS_Form_b7026e7131ee48358cd564ace8b34c03,
            "skin": "CopyslForm0d72fc643fc8248"
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