define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onclick defined for flxCover **/
    AS_FlexContainer_f0ca25720a6d458e9a24ee101b6adcbf: function AS_FlexContainer_f0ca25720a6d458e9a24ee101b6adcbf(eventobject) {
        var self = this;
        this.flxCoverOnClick();
    },
    /** onclick defined for flxShadow **/
    AS_FlexContainer_h0b3e2c21f3a4e64a473dfd008b68a42: function AS_FlexContainer_h0b3e2c21f3a4e64a473dfd008b68a42(eventobject) {
        var self = this;
        this.flxCoverOnClick();
    },
    /** onclick defined for category1 **/
    AS_FlexContainer_ec9de3ad89974b38a59026d5ade1a514: function AS_FlexContainer_ec9de3ad89974b38a59026d5ade1a514(eventobject) {
        var self = this;
        this.setSelection(eventobject.id);
    },
    /** onclick defined for category2 **/
    AS_FlexContainer_ebe9f732ce294e338246ad2f5039397b: function AS_FlexContainer_ebe9f732ce294e338246ad2f5039397b(eventobject) {
        var self = this;
        this.setSelection(eventobject.id);
    },
    /** onclick defined for category10 **/
    AS_FlexContainer_fe46d192b1e2466d92a6739a18e50bae: function AS_FlexContainer_fe46d192b1e2466d92a6739a18e50bae(eventobject) {
        var self = this;
        this.setSelection(eventobject.id);
    },
    /** onclick defined for category3 **/
    AS_FlexContainer_gcfb909feaea436e8c9c1600aff32f29: function AS_FlexContainer_gcfb909feaea436e8c9c1600aff32f29(eventobject) {
        var self = this;
        this.setSelection(eventobject.id);
    },
    /** onclick defined for category4 **/
    AS_FlexContainer_h83b8d3f0c864824823dfa64a11c2c2e: function AS_FlexContainer_h83b8d3f0c864824823dfa64a11c2c2e(eventobject) {
        var self = this;
        this.setSelection(eventobject.id);
    },
    /** onclick defined for category5 **/
    AS_FlexContainer_c46290719f4045a9a7f98fd69444ee55: function AS_FlexContainer_c46290719f4045a9a7f98fd69444ee55(eventobject) {
        var self = this;
        this.setSelection(eventobject.id);
    },
    /** onclick defined for category6 **/
    AS_FlexContainer_c052710479194f86b47c0aedd5802a4b: function AS_FlexContainer_c052710479194f86b47c0aedd5802a4b(eventobject) {
        var self = this;
        this.setSelection(eventobject.id);
    },
    /** onclick defined for category7 **/
    AS_FlexContainer_jf239d94eeaf4f568cdbf5a7b8392b7e: function AS_FlexContainer_jf239d94eeaf4f568cdbf5a7b8392b7e(eventobject) {
        var self = this;
        this.setSelection(eventobject.id);
    },
    /** onclick defined for category8 **/
    AS_FlexContainer_gcb796e2383f4dd1ad0abf4731224863: function AS_FlexContainer_gcb796e2383f4dd1ad0abf4731224863(eventobject) {
        var self = this;
        this.setSelection(eventobject.id);
    },
    /** onclick defined for category9 **/
    AS_FlexContainer_a0edf95b217f46328142f6392cb3291f: function AS_FlexContainer_a0edf95b217f46328142f6392cb3291f(eventobject) {
        var self = this;
        this.setSelection(eventobject.id);
    },
    /** onclick defined for flexHamClick **/
    AS_FlexContainer_j1c3bfb2e3e14e7bbec3366f1de8645d: function AS_FlexContainer_j1c3bfb2e3e14e7bbec3366f1de8645d(eventobject) {
        var self = this;
        this.listMenuClick();
    },
    /** onrowclick defined for segNews **/
    AS_Segment_i39678ebcd89453fa22d80985d2389da: function AS_Segment_i39678ebcd89453fa22d80985d2389da(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.showDetailedNews();
    },
    /** onclick defined for btnFloating **/
    AS_Button_d2f0985dd6384218bea42dc9dea2f3dc: function AS_Button_d2f0985dd6384218bea42dc9dea2f3dc(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("KnowledgeFramework/frmFramework");
        ntf.navigate();
    },
    /** onClickFooterHelp defined for hamburger **/
    AS_UWI_c142c3c0a29d46cca4705a4172b01361: function AS_UWI_c142c3c0a29d46cca4705a4172b01361(eventobject) {
        var self = this;
        this.flxCoverOnClick();
        kony.store.removeItem("isFirstTime");
        var ntf = new kony.mvc.Navigation("frmSplash");
        ntf.navigate();
    },
    /** onclick defined for Button0ea466a32c67241 **/
    AS_Button_g563592300b3498a91cbca80bf85ca21: function AS_Button_g563592300b3498a91cbca80bf85ca21(eventobject) {
        var self = this;
        this.view.flexKn.isVisible = false;
        kony.store.setItem("isFirstTime", "false");
    },
    /** preshow defined for frmNewsAndWeather **/
    AS_Form_i719b3ff2f5745d5a5f32a8fff0609b2: function AS_Form_i719b3ff2f5745d5a5f32a8fff0609b2(eventobject) {
        var self = this;
        if (kony.store.getItem("isFirstTime") !== "false") {
            this.view.flexKn.isVisible = true;
        } else {
            this.view.flexKn.isVisible = false;
        }
    },
    /** postshow defined for frmNewsAndWeather **/
    AS_Form_gfcfbfc2aaa143c792e79241bc0e0dd2: function AS_Form_gfcfbfc2aaa143c792e79241bc0e0dd2(eventobject) {
        var self = this;
    }
});