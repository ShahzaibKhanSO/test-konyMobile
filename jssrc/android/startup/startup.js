//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "NewsAndWeather",
    appName: "NewsAndWeather",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "192.168.56.1",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "NewsAndWeather",
    isturlbase: "https://mfreddy.konycloud.com/services",
    isMFApp: true,
    appKey: "266ef0f9397553c39ffce135a3493878",
    appSecret: "febcb0ec11ccf547317501c67c4113ba",
    serviceUrl: "https://100006023.auth.konycloud.com/appconfig",
    svcDoc: {
        "selflink": "https://100006023.auth.konycloud.com/appconfig",
        "identity_meta": {},
        "integsvc": {
            "KonyLocalAll": "https://mfreddy.konycloud.com/services/KonyLocalAll",
            "CityWeather": "https://mfreddy.konycloud.com/services/CityWeather",
            "KonyLocationLookup": "https://mfreddy.konycloud.com/services/KonyLocationLookup",
            "KonyNews": "https://mfreddy.konycloud.com/services/KonyNews",
            "Weather": "https://mfreddy.konycloud.com/services/Weather",
            "LocalNewsNWeather": "https://mfreddy.konycloud.com/services/LocalNewsNWeather",
            "WeatherForecast": "https://mfreddy.konycloud.com/services/WeatherForecast",
            "KonyWeather": "https://mfreddy.konycloud.com/services/KonyWeather",
            "News": "https://mfreddy.konycloud.com/services/News",
            "WeatherNewsLocal": "https://mfreddy.konycloud.com/services/WeatherNewsLocal",
            "KonyWeatherForecast": "https://mfreddy.konycloud.com/services/KonyWeatherForecast",
            "KonyNewsAndWeather": "https://mfreddy.konycloud.com/services/KonyNewsAndWeather",
            "WeatherNForecast": "https://mfreddy.konycloud.com/services/WeatherNForecast"
        },
        "appId": "aecfcf1c-77e6-4f72-ab9b-5a708377749c",
        "name": "NewsNWeatherDemo",
        "reportingsvc": {
            "session": "https://mfreddy.konycloud.com/services/IST",
            "custom": "https://mfreddy.konycloud.com/services/CMS"
        },
        "baseId": "546a9ba1-be9d-4258-a148-d4878c247e1b",
        "login": [{
            "alias": "userstore",
            "type": "basic",
            "prov": "userstore",
            "url": "https://100006023.auth.konycloud.com"
        }],
        "services_meta": {
            "KonyLocalAll": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://mfreddy.konycloud.com/services/KonyLocalAll"
            },
            "CityWeather": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://mfreddy.konycloud.com/services/CityWeather"
            },
            "KonyLocationLookup": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://mfreddy.konycloud.com/services/KonyLocationLookup"
            },
            "KonyNews": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://mfreddy.konycloud.com/services/KonyNews"
            },
            "Weather": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://mfreddy.konycloud.com/services/Weather"
            },
            "LocalNewsNWeather": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://mfreddy.konycloud.com/services/LocalNewsNWeather"
            },
            "WeatherForecast": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://mfreddy.konycloud.com/services/WeatherForecast"
            },
            "KonyWeather": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://mfreddy.konycloud.com/services/KonyWeather"
            },
            "News": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://mfreddy.konycloud.com/services/News"
            },
            "WeatherNewsLocal": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://mfreddy.konycloud.com/services/WeatherNewsLocal"
            },
            "KonyWeatherForecast": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://mfreddy.konycloud.com/services/KonyWeatherForecast"
            },
            "KonyNewsAndWeather": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://mfreddy.konycloud.com/services/KonyNewsAndWeather"
            },
            "WeatherNForecast": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://mfreddy.konycloud.com/services/WeatherNForecast"
            }
        }
    },
    svcDocRefresh: false,
    svcDocRefreshTimeSecs: -1,
    eventTypes: ["FormEntry", "Error", "Crash"],
    url: "https://mfreddy.konycloud.com/NewsAndWeather/MWServlet",
    secureurl: "https://mfreddy.konycloud.com/NewsAndWeather/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        isMVC: true,
        marginsIncludedInWidgetContainerWeight: true,
        APILevel: 8000
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    applicationController = require("applicationController");
    callAppMenu();
    kony.application.setApplicationInitializationEvents({
        init: applicationController.appInit,
        appservice: applicationController.AS_AppEvents_be321f0d17f149e29b3df2a8d032e4f5,
        showstartupform: function() {
            var startForm = new kony.mvc.Navigation("frmSplash");
            startForm.navigate();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.N_KonyLogger"
    });
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.N_binarydata"
    });
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.ND_binary_util"
    });
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "appKey": appConfig.appKey,
        "appSecret": appConfig.appSecret,
        "eventTypes": appConfig.eventTypes,
        "serviceUrl": appConfig.serviceUrl
    }
    kony.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}

function onSuccess(oldlocalname, newlocalename, info) {
    loadResources();
};

function onFailure(errorcode, errormsg, info) {
    loadResources();
};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
kony.i18n.setDefaultLocaleAsync("en_US", onSuccess, onFailure, null);
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;