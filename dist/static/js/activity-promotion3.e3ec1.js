webpackJsonp([0],{"+BRU":function(n,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=t("Ps5V"),o=(t.n(s),t("bL/t")),c=(t.n(o),t("ZoQJ")),a=Object(c.a)("userIp");({listEle:null,init:function(){var n=this;this.contain=$(".container").show(),this.listEle=$("#produc-list"),this.bindEvent(),$.ajax({url:"/product/newDynamicList",type:"POST",data:{userIp:a},success:function(i){var t=i.code,s=i.msg,o=i.data.rows;1e6===t?n.generateList(o):alert(s)},error:function(){alert("请求失败,请联系管理员")}})},bindEvent:function(){this.listEle.on("click",".produc-item",function(){window.location.href="http://www.baidu.com?id="+$(this).data("id")})},generateList:function(n){var i="";$.each(n,function(n,t){i+='<div class="produc-item" data-id="'+t.id+'">\n                        <div class="produc-top">\n                            <div class="produc-img-box">\n                                <img src="'+(t.logoUrl?t.logoUrl:"")+'" />\n                            </div>\n                            <div class="produc-desc">\n                                <div class="produc-name">'+t.productName+'</div>\n                                <div class="produc-person">已借'+t.successCount+'人</div>\n                            </div>\n                        </div>\n                        <div class="produc-bottom">\n                            <span class="produc-info">最高额度 10万</span>\n                            <span class="produc-info">参考月息 0.01%</span>\n                            <span class="produc-info">期限范围 7-30日</span>\n                        </div>          \n                    </div>'}),this.listEle.html(i)}}).init()},Ps5V:function(n,i){},ZoQJ:function(n,i,t){"use strict";t.d(i,"a",function(){return s});var s=function(){var n=new RegExp("(^|&)"+name+"=([^&]*)(&|$)","i"),i=window.location.search.substr(1).match(n);return i?decodeURIComponent(i[2]):null}},"bL/t":function(n,i){}},["+BRU"]);