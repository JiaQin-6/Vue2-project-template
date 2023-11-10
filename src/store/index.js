
import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from "vuex-persistedstate" //引入vuex状态持久化（页面刷新状态依然保存）
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
       index:null,
    },
    mutations: {
        setIndex(state, payload) {
            state.index = payload
        },
        /**
         *  重置方法
         * @param { Any } state 
         * @param { Array } payload  表示要重置的字段必须为数组字符串类型 eg: ['plan', 'userId']
         */
        reset(state, payload) { 
            if (Array.isArray(payload) && payload.length > 0) {
                payload.forEach(item => {
                    state[item] = null
                })
            }
        }
    },
    getters: {},
    actions: {},
    // plugins: [createPersistedState({ //注册持久化插件
    //     key: 'vuex',
    //     storage: window.sessionStorage, //使用会话缓存机制
    //     reducer(val) {
    //         return { //需要持久化的某些全局状态
    //             CompanyInfo: val.CompanyInfo,
    //             DefaultActive: val.DefaultActive,
    //             ProductDefaultData: val.ProductDefaultData,
    //             CreateProductInfo: val.CreateProductInfo,
    //             UserID: val.UserID,
    //             ApplicationID: val.ApplicationID,
    //             AddressList: val.AddressList,
    //             EvoucherData: val.EvoucherData,
    //             CouponCode: val.CouponCode,
    //             ChannelCode: val.ChannelCode,
    //             IsPreonline: val.IsPreonline,
    //             //bocg
    //             Template: val.Template,
    //             OrderconfirmPage: val.OrderconfirmPage,
    //             Addinsured: val.Addinsured,
    //             InsuredList: val.InsuredList,
    //             InsuredFlag: val.InsuredFlag,
    //             TotalPrice: val.TotalPrice,
    //             ContactStatus: val.ContactStatus,
    //             MemberInfo: val.MemberInfo,
    //             IsExchangeDefaultCouponFail: val.IsExchangeDefaultCouponFail,
    //             //simas
    //             Plan: val.Plan,
    //             Duty: val.Duty,
    //             AdditionList: val.AdditionList,
    //             IsExchangeCoupon: val.IsExchangeCoupon,
    //             //
    //             ProductOriginalData: val.ProductOriginalData,
    //             ProductSkeleton: val.ProductSkeleton,
    //             PcOrMobile: val.PcOrMobile,
    //             QuestionListData: val.QuestionListData,
    //             QuestionFromTo: val.QuestionFromTo,
    //             FormLogicListData: val.FormLogicListData,
    //             FormLogicFromTo: val.FormLogicFromTo,
    //             DataSource: val.DataSource,
    //             EditCurrentPage: val.EditCurrentPage,
    //             JsBlockCode: val.JsBlockCode,
    //             ProductCollectionData: val.ProductCollectionData,
    //             IsShow: val.IsShow,
    //             //customer portal
    //             customerPortalSignUp:val.customerPortalSignUp,
    //         }
    //     }
    // })]
});
