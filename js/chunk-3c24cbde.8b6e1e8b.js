(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c24cbde"],{1350:function(t,e,n){"use strict";var i=n("7d25"),a=n.n(i);a.a},"2f4c":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("breadcrumb-route"),n("Row",{attrs:{gutter:32}},[n("i-col",{attrs:{span:"18"}},[t._t("default")],2),n("i-col",{attrs:{span:"6"}},[n("div",[t.def?[n("ranking-layout",{attrs:{rankingList:t.rankingList}})]:[t._t("right-top")]],2),n("div",[t.def?[n("recommend-layout",{attrs:{recommendList:t.recommendList}})]:[t._t("right-bottom")]],2)])],1)],1)},a=[],r=n("de45"),c=n("6a35"),s=n("fd4e"),o={name:"PageLayout",props:{def:{type:Boolean,default:!1}},components:{BreadcrumbRoute:r["a"],RankingLayout:c["a"],RecommendLayout:s["a"]},data:function(){return{recommendList:[{image:"http://www.e3ol.com/topics/upfiles/2017/201781910928236.jpg",title:"（转载）单骑定荆州：刘表年轻时比刘备还猛"},{image:"http://www.e3ol.com/topics/upfiles/2017/201781910928236.jpg",title:"（转载）单骑定荆州：刘表年轻时比刘备还猛"},{image:"http://www.e3ol.com/topics/upfiles/2017/201781910928236.jpg",title:"（转载）单骑定荆州：刘表年轻时比刘备还猛"}],rankingList:[{routerName:"",title:"从威震华夏到败走麦城只需6个月，关羽失荆州不只是因为大意"},{routerName:"",title:"三国真正的铁甲雄兵之一：西凉铁骑究竟有多少人？"},{routerName:"",title:"蜀汉刘备——中年肥肉男佛系创业的不甘与坚持"},{routerName:"",title:"蜀汉刘备的巅峰之战——汉中争夺战全面回顾"},{routerName:"",title:"刘备三国创业版图，成也关张，败也关张"},{routerName:"",title:"鲜为人知的孙吴名将-贺齐的精彩故事"}]}}},l=o,u=n("2877"),p=Object(u["a"])(l,i,a,!1,null,"7459a860",null);e["a"]=p.exports},"46bc":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("page-layout",{attrs:{def:t.def}},[n("region-bar",{staticStyle:{"margin-bottom":"12px"},attrs:{title:"笑谈三国"}}),n("div",{staticClass:"article-box"},[n("h2",{staticStyle:{"text-align":"center"}},[t._v(t._s(t.title))]),n("div",{staticStyle:{"text-align":"center","margin-top":"16px","font-size":"16px"}},[n("span",{staticStyle:{display:"inline-flex","justify-content":"center","align-items":"center"}},[n("Icon",{attrs:{type:"md-time"}}),n("span",{staticStyle:{"margin-left":"4px"}},[t._v(t._s(t.time))])],1),n("span",{staticStyle:{display:"inline-flex","justify-content":"center","align-items":"center","margin-left":"16px"}},[n("Icon",{attrs:{type:"md-eye"}}),n("span",{staticStyle:{"margin-left":"4px"}},[t._v(t._s(t.heat))])],1)]),n("div",{staticStyle:{"font-size":"16px"}},[t._t("default")],2)])],1)},a=[],r=n("2f4c"),c=n("a225"),s={name:"ArticleLayout",props:{def:{type:Boolean,default:!1},title:{type:String,default:"刘禅追谥尚欠赵云一个正点"},time:{type:String,default:"2020-04-01"},heat:{type:String,default:"1.2k"}},components:{PageLayout:r["a"],RegionBar:c["a"]}},o=s,l=(n("fd45"),n("2877")),u=Object(l["a"])(o,i,a,!1,null,"4b397b84",null);e["a"]=u.exports},"4f46":function(t,e,n){},"54c2":function(t,e,n){"use strict";var i=n("e60a"),a=n.n(i);a.a},"6a35":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("region-bar",{attrs:{title:"排行板"}}),t._l(t.rankingList,(function(e,i){return n("div",{key:i,staticClass:"region-title"},[n("a",{staticStyle:{color:"#515a6e"},attrs:{href:"#"},on:{click:function(n){return t.onRead(e.routerName)}}},[t._v(" "+t._s(i+1)+"."+t._s(e.title)+" ")])])}))],2)},a=[],r=n("a225"),c={name:"RankingLayout",props:{rankingList:{type:Array,required:!0}},components:{RegionBar:r["a"]},methods:{onRead:function(t){t&&this.$router.push({name:t})}}},s=c,o=(n("c67c"),n("2877")),l=Object(o["a"])(s,i,a,!1,null,"711ed31d",null);e["a"]=l.exports},"7d25":function(t,e,n){},"836a":function(t,e,n){"use strict";var i=n("d462"),a=n.n(i);a.a},"838d":function(t,e,n){t.exports=n.p+"img/regionBar.04b1bc26.svg"},a225:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[n("div",{staticClass:"box-left"}),n("div",{staticClass:"box-center"},[t._m(0),n("div",{staticStyle:{height:"100%",display:"inline-flex","justify-content":"center","align-items":"center"}},[t._v(" "+t._s(t.title)+" ")])]),n("div",{staticClass:"box-right"})])},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{height:"100%",display:"inline-flex","justify-content":"center","align-items":"center",margin:"0 7px 0 0"}},[i("img",{staticClass:"box-image",attrs:{src:n("838d"),alt:""}})])}],r={name:"RegionBar",props:{title:{type:String,default:"标题"}}},c=r,s=(n("1350"),n("2877")),o=Object(s["a"])(c,i,a,!1,null,"c577cdb8",null);e["a"]=o.exports},a677:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article-layout",{attrs:{def:"",title:t.title,time:t.time,heat:t.heat}},[n("div",[n("div",{staticStyle:{color:"#808695","font-size":"smaller",padding:"10px 0"}},[t._v(" 原文地址： "),n("a",{attrs:{href:t.linkSrc,target:"_blank"}},[t._v(t._s(t.linkSrc))])]),t._l(t.article,(function(e,i){return n("div",{key:i},["text"===e.type?[n("div",{staticClass:"p-div"},[t._v(t._s(e.content))])]:"image"===e.type?[n("div",{staticStyle:{margin:"10px","text-align":"center"}},[n("img",{staticStyle:{"max-width":"100%"},attrs:{src:e.content,alt:""}})])]:t._e()],2)}))],2)])},a=[],r=n("46bc"),c={name:"InterestingArticle3",components:{ArticleLayout:r["a"]},data:function(){return{title:"三国真正的铁甲雄兵之一：西凉铁骑究竟有多少人？",time:"2020-04-01",heat:"1.2k",linkSrc:"http://www.e3ol.com/culture/html/2018-12/26228/26228_20181229.shtml",article:[{type:"text",content:"三国混乱战局中，出现过两支精锐骑兵，前面我们介绍过曹氏将领率领的虎豹骑，今天来聊一聊西凉铁骑。"},{type:"text",content:"西凉铁骑又称西凉兵团有两支，一支是凉州军阀董卓的部队（凉州政府军出身岷县），董卓死后由部将李傕率领。另一支是马腾、韩遂的部队（凉州起义军），后马超继任西凉军首领。凉州地处汉、羌边界，民风剽悍，悍不畏死。自古陇右精骑便横行天下，史称“凉州大马，横行天下”。秦始皇得之，便扫平六国，唐太宗得之，便虎视天下。马超凭借西凉铁骑的威猛，与曹操六战渭水，杀的曹操割须弃袍，狼狈逃窜，可见西凉铁骑战斗力之强悍。刘备真正有实力入川自立地盘的决定因素就是得了西凉马超和西凉军团。"},{type:"image",content:"http://www.e3ol.com/culture/upfiles/2018/201812292371518916.jpeg"},{type:"text",content:"西凉铁骑的作战是古罗马军团和东汉初期的凉州铁骑的完美融合，兼具了两者的优秀特质，作战彪悍、凶狠、尤其适合沙漠戈壁的长距离持久奔袭作战，这也与凉州人的特质和大宛马的特质有关，古说“凉州大马，横行天下”，从凉州东汉雷台汉墓出土的凉州铁骑方阵看，确实如此。"},{type:"text",content:"西凉铁骑是蜀国最具有攻击力的骑兵部队，东汉蜀国的三大精锐之一。这支军队是蜀国五虎上将之马超率领下的重甲骑兵，乃是蜀国骁勇骑兵军团，令敌人闻风丧胆。周身精钢铁甲的西凉铁骑，攻击力不俗，防御力更是强悍之极。"},{type:"text",content:"三国朝局混乱，一切均混乱不堪。以称呼为例，那除了董卓马超的部队，还有哪些可以称为西凉铁骑，数量又有多少呢?"},{type:"text",content:"之前，董卓进京，带甲二十万，雄赳赳，气昂昂，纵横于洛阳的大街小巷，从而一举控制朝局。那时，大家称其为西凉兵。董卓一死，李郭张樊四将逃至陕西，用贾诩之谋，煽动西凉民众，一同造反，竟达十余万人。那时，大家也称其为西凉兵。不久，马腾和韩遂又率十几万人杀来。现在，大家还称其为西凉兵。如此，就把笔者给彻底搞懵了。这天底下的西凉兵究竟有几何?!从董到李，再到马，前后三者相加，西凉兵当在四五十万间。"},{type:"image",content:"http://www.e3ol.com/culture/upfiles/2018/201812292372650087.jpeg"},{type:"text",content:"笔者虽不知西凉州户籍为几许，但对各方之军事实力还略知一二。天下各镇，少的三两万，多则也就十来万而已。西凉地广人稀，短时间竟涌现出如此多精壮，着实让人诧异不已。"},{type:"text",content:"董卓的西凉兵总计三万八千人，其中铁骑八千。进京时，因前途未卜，为保存实力，给自己留条退路，他实际上只带了三千铁骑。进入洛阳后，为迷惑政敌，震慑群臣，每隔四五天，他便命所部兵马趁夜出城。翌日，再浩浩荡荡开进城来。进城时，还故意耀武扬威——战鼓震天，旌旗招展，声势浩大，好让人误以为那西凉兵源源不断，俨然有千军万马。"},{type:"text",content:"董卓死，李傕等四将带三千飞熊军逃走。这三千飞熊军就是当初董卓进京时的三千西凉铁骑。后来，李傕等虽号称有十余万西凉兵，但实际上真正的西凉兵还不足一万两千人。其人马大多是在进攻长安路上沿途招募的，以无家可归的流民居多。至于马腾和韩遂，他们尽管经略西凉已久，可其兵士中胡人和汉人亦不在少数，真正的西凉兵约在四万五千人左右。"},{type:"image",content:"http://www.e3ol.com/culture/upfiles/2018/201812292373641158.jpeg"},{type:"text",content:"如此三者相加，西凉兵人数为九万五。因三千飞熊军与三千铁骑为同一支队伍，故西凉兵实际数目应为九万三千人。"},{type:"text",content:"之前，西凉太守马腾曾对外发表声明，称只有他和韩遂的军队才是真正的西凉兵。如照此计算，那真正的西凉兵就只有四万五千人了，相当于外界盛传数目的十分之一。"},{type:"text",content:"由此可见，人言可畏。所谓，口口相传，众口铄金，三人成虎。一不留神，便等同于百万雄兵。"}]}}},s=c,o=(n("836a"),n("2877")),l=Object(o["a"])(s,i,a,!1,null,"55109d3e",null);e["default"]=l.exports},c67c:function(t,e,n){"use strict";var i=n("df8f"),a=n.n(i);a.a},d462:function(t,e,n){},de45:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticStyle:{display:"flex","justify-content":"flex-start",padding:"10px 0"}},[n("span",{staticStyle:{"flex-grow":"0","flex-shrink":"0",color:"#808695","margin-right":"8px"}},[t._v("当前位置")]),n("Breadcrumb",{staticStyle:{"flex-grow":"1","flex-shrink":"0"}},[t._l(this.$route.meta.breadcrumbItems,(function(e,i){return[n("BreadcrumbItem",{key:i,attrs:{to:e.active?"":e.to}},[t._v(t._s(e.text))])]}))],2)],1),t.bottomBorder?n("div",{staticStyle:{"border-bottom":"1px solid #dcdee2",width:"100%"}}):t._e()])},a=[],r={name:"BreadcrumbRoute",props:{bottomBorder:{type:Boolean,default:!1}}},c=r,s=n("2877"),o=Object(s["a"])(c,i,a,!1,null,"57126698",null);e["a"]=o.exports},df8f:function(t,e,n){},e60a:function(t,e,n){},fd45:function(t,e,n){"use strict";var i=n("4f46"),a=n.n(i);a.a},fd4e:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("region-bar",{staticStyle:{"margin-bottom":"16px"},attrs:{title:"推荐"}}),t._l(t.recommendList,(function(e,i){return n("div",{key:i},[n("div",{staticClass:"recommend-box"},[n("img",{staticClass:"recommend-box-image",attrs:{src:e.image,alt:""}})]),n("div",{staticClass:"recommend-box-text"},[t._v(t._s(e.title))])])}))],2)},a=[],r=n("a225"),c={name:"RecommendLayout",props:{recommendList:{type:Array,required:!0}},components:{RegionBar:r["a"]}},s=c,o=(n("54c2"),n("2877")),l=Object(o["a"])(s,i,a,!1,null,"18f0e9cc",null);e["a"]=l.exports}}]);
//# sourceMappingURL=chunk-3c24cbde.8b6e1e8b.js.map