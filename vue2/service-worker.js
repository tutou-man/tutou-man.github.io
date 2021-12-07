/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/vue2/2019/02/18/hello/index.html","26d531111ebfa0ffc756bfcc5916410e"],["/vue2/about/index.html","a842d04c512c69306fd4de8ceceb3387"],["/vue2/api/index.html","5fabfa55314394af7d769c214bef7f0f"],["/vue2/archives/2019/02/index.html","04c8e6c2f2f06cc118d1b61bb4189726"],["/vue2/archives/2019/index.html","68cc58a1576df754d5b81a20283be057"],["/vue2/archives/index.html","2a0aebfe425934ce6df525e4a6b7aead"],["/vue2/atom.xml","8ae361ed5f727e5fe889d555af1258ba"],["/vue2/browserconfig.xml","a1327babc882f9875f57f5b367c9ffc9"],["/vue2/coc/index.html","38b6ccee1b91b30b5d10dec61bcc9f6f"],["/vue2/css/benchmark.css","b083e0006589a5ba88a250eb8ee12cc5"],["/vue2/css/index.css","07f63a5eb76f64595f6eb4cbe8fb8ea4"],["/vue2/css/page.css","564b8ac97d0c18ac1613fb92e24ff9b4"],["/vue2/css/search.css","98bc5fed33d9deaea04ed36de435afd7"],["/vue2/examples/commits.html","7324f2d65204b36c73f6251b7926b8e0"],["/vue2/examples/elastic-header.html","bfc9c50abbd68a8b23a7e90994c2a529"],["/vue2/examples/firebase.html","428efcb38b2ce402e96fc7c33f00a8c0"],["/vue2/examples/grid-component.html","75d6d4c3a357e2a1640bed1fefb93ac9"],["/vue2/examples/hackernews.html","b477a66897b415e044c8747e456c2bce"],["/vue2/examples/index.html","2ffc0fc2741a90d1317bae846d8947d9"],["/vue2/examples/modal.html","8e937c3bfb7ef0ecbb0fd0c757e2872f"],["/vue2/examples/select2.html","3dd7a7d3385b941dd659e749444a720a"],["/vue2/examples/svg.html","36ba339799cc8294c60fd4dd75c76228"],["/vue2/examples/todomvc.html","0cc3c7de087cb3bde887d8669d129d81"],["/vue2/examples/tree-view.html","09ab18ecf23ea1acf029fb88995ee84f"],["/vue2/fonts/Dosis/Dosis-Medium.ttf","1a7809b30cc0cb7fc96feb3cad2eefb7"],["/vue2/fonts/Roboto_Mono/RobotoMono-Regular.ttf","a48ac41620cd818c5020d0f4302489ff"],["/vue2/fonts/Source_Sans_Pro/SourceSansPro-Light.ttf","b2e90cc01cdd1e2e6f214d5cb2ae5c26"],["/vue2/fonts/Source_Sans_Pro/SourceSansPro-Regular.ttf","ba6cad25afe01d394e830f548a7f94df"],["/vue2/fonts/Source_Sans_Pro/SourceSansPro-Semibold.ttf","52984b3a4e09652a6feee711d5c169fd"],["/vue2/guide/class-and-style.html","b26e05d0a8d0a0502092b6629c363388"],["/vue2/guide/comparison.html","ca44e4bb9023cd832a837d8151e994f8"],["/vue2/guide/components.html","23a9d1ddf990223ec8583fc501e4f063"],["/vue2/guide/computed.html","bf20dc675da33156e687cbf80b62802c"],["/vue2/guide/conditional.html","9423b1b65a546e429df67f901f0558c6"],["/vue2/guide/custom-directive.html","d863e71dbc0c90c0b82547d7081dc8d6"],["/vue2/guide/deployment.html","431d19a528dfad5185e0e3e8e7f2684d"],["/vue2/guide/events.html","8feb28f0fd32ca7b7d28efe91a76b64b"],["/vue2/guide/forms.html","d962ac9be70179399f61cf69140314a9"],["/vue2/guide/index.html","62a25807aa12993ebba33a5723defca4"],["/vue2/guide/installation.html","d9902ce2bec1b5e6b4057d4ad6b64d76"],["/vue2/guide/instance.html","b6242e80f4aa54dbc869c9ad12f40d20"],["/vue2/guide/join.html","71fcce4d08790f4d5e23adb237525238"],["/vue2/guide/list.html","ebf28f655710bf668203fed7d6833837"],["/vue2/guide/migration-vue-router.html","f97363c906999f66d6e7e4cfa069af26"],["/vue2/guide/migration-vuex.html","845221174b8db69c1df6281120a3881b"],["/vue2/guide/migration.html","dc94cd9e01c695e462f9da184e76d38f"],["/vue2/guide/mixins.html","d694f29aa79560d34eb50bc03b54e256"],["/vue2/guide/plugins.html","1687910aced886cda98c29f3df54d7ff"],["/vue2/guide/reactivity.html","8c23bddf0dbafb0172e746aa2f1ac61b"],["/vue2/guide/render-function.html","4ae207e785ca9321e4600a03cb1ced2c"],["/vue2/guide/routing.html","b5f964fd53488a8e54f01653f3aa1d60"],["/vue2/guide/single-file-components.html","d8b304a6159ca1240a64fbaa860d0ec1"],["/vue2/guide/ssr.html","64a76e4fae83f8aa0c0de4f3bd004d0c"],["/vue2/guide/state-management.html","7705fe6497e1022ef9f46adfd7d722c7"],["/vue2/guide/syntax.html","de411cb6a8bdf18e40709647fab679ac"],["/vue2/guide/transitioning-state.html","86bc073c8560a357bce02f71cbc21e2e"],["/vue2/guide/transitions.html","e9271f77ee7b93542bf400a06d9df5f0"],["/vue2/guide/unit-testing.html","38cfd2d735ad3c8a8b20d060f4a7bcda"],["/vue2/images/Monterail.png","bf1ec94a0ca48f0e6be0c97fa60a42c0"],["/vue2/images/aaha.png","77bfeb59f772f37444c9cefe00785cf2"],["/vue2/images/accelebrate.png","e030e08131cebe8b43c89df18d710ded"],["/vue2/images/alligator_io.svg","1ffe0191e22a65337f9cb224790f5222"],["/vue2/images/aussiecasinohex.svg","1442ac7722d1185a138dc29bb8e0491a"],["/vue2/images/authing.svg","fe3cf35736bbed30e479425bbd3623e5"],["/vue2/images/autocode.svg","4319bc58220eb3ffaa993488c171c0dc"],["/vue2/images/bacancy_technology.png","9a0590eb4ce29289b454240415611162"],["/vue2/images/bestvpn_co.png","afbe252b6b59bc3cdac2e7dec69eac39"],["/vue2/images/betting_bet.png","0611ea789636d8aff211ece0d146640d"],["/vue2/images/bit.png","9638a3f44bf471876effb80ea0659f73"],["/vue2/images/blokt_cryptocurrency_news.png","0ecada49bad35aabc864a8df221fd816"],["/vue2/images/breakpoint_hit.png","114924925a4ec0f23236012bc3dc8422"],["/vue2/images/breakpoint_set.png","6439856732303cfeb3806d52dd681191"],["/vue2/images/chaitin.png","549e43997790dc624c477424acbfe228"],["/vue2/images/check.png","c634675b753a1a03b587c43d8b535600"],["/vue2/images/cloudstudio.png","fc480cf4c2b06591f58e7e91666226af"],["/vue2/images/coding.png","10c55345da3c2374563b096f5c86d781"],["/vue2/images/coin-bch.png","ddfab54149483e02f3cd540a47e2782b"],["/vue2/images/coin-btc.png","d90559bb202766dd6ddabf71dd1680be"],["/vue2/images/coin-eth.png","70ae70292937880fe9e77c2c7dc38f86"],["/vue2/images/coin-ltc.png","9e756bd611ac7355515153cecbc20d36"],["/vue2/images/components.png","b5c08269dfc26ae6d7db3801e9efd296"],["/vue2/images/config_add.png","353cd8b2a1bdf9fc4c74a80c5f38090a"],["/vue2/images/daily.png","c9a8b2a897dba41c7d5aa6f9cd876d82"],["/vue2/images/das_keyboard.png","8ef8378582a6713c038ea8b2e065f5cd"],["/vue2/images/daskeyboard.png","8ef8378582a6713c038ea8b2e065f5cd"],["/vue2/images/data.png","5de7af21d4c2de951720c006f84b98fc"],["/vue2/images/dcloud.gif","78338ea80dbe45402fd0b3bfa354754b"],["/vue2/images/dcloud1.png","fd6cc1ee1e73e3f641c9c19f1c2e346b"],["/vue2/images/dcloud2.png","ad6bf984b1c91c89b0adcf07e60320dc"],["/vue2/images/derek_pollard.png","b1c4d535b619865d80d6cf1b2e370300"],["/vue2/images/devexpress.png","a6d9c786a373088c8d238ca643293c17"],["/vue2/images/devsquad.png","e639ea4fd0d7053fc0928d4ff9fefb2a"],["/vue2/images/devtools-storage-chrome.png","ac1f3b275b87e2fec9c4df951347be81"],["/vue2/images/devtools-storage-edge.png","3e92a3bea017b8398e71db0a2419a191"],["/vue2/images/devtools-storage.png","e742c3b1d526bee7be77c050f4bffc92"],["/vue2/images/devtools-timetravel.gif","fca84f3fb8a8d10274eb2fc7ed9b65f9"],["/vue2/images/dom-tree.png","f70b86bfbbfe1962dc5d6125105f1122"],["/vue2/images/dopamine.png","17222090b66cfca59f1ccf8b9843f595"],["/vue2/images/down.png","2f948222df409af3121254d5fe0ed377"],["/vue2/images/doximity.png","22a5a6e8252a1511591be4faf68cb5a5"],["/vue2/images/dronahq.png","38cd88387e365f02eb62ba6fc9e7aaef"],["/vue2/images/earthlink.png","88f1bd15252b11484834176965844e22"],["/vue2/images/empiricus.png","61c6588dde677493351be6bc0eccc854"],["/vue2/images/emq.png","5d7526f3b64b3eff5811a35b462d1acd"],["/vue2/images/energy_comparison.png","1f3f2809057b867842c99679e2723b3e"],["/vue2/images/exmax.png","32e07b09290df956dba4b2420a7a81db"],["/vue2/images/fastcoding_inc.png","08a0a7652db79fa3395c0ef28d49f0cd"],["/vue2/images/fastcoding_inc.svg","ff35e14cb519fe5d76e6e8d9444e4fa6"],["/vue2/images/feed.png","a9bbd11a96e1cbcc49bf8fa857a0d70f"],["/vue2/images/fen_tre_online_solutions.png","77828afcb333a41ce58a4f58d85894e6"],["/vue2/images/finclip.png","37f296ec720474270079b353f4fe2b1c"],["/vue2/images/firestick_tricks.png","1ee05223a5b12fe910cb8428d57223d8"],["/vue2/images/flatlogic_templates.svg","925f0c4421cc6d86ebc9d6788b519220"],["/vue2/images/flowdash.png","185243e4a2929e426a5287850c9acdaa"],["/vue2/images/foo.png","1c9cde53bb9c98a316edc93d57684e4d"],["/vue2/images/free_bets_us.png","8181ea6e9415589808fc2ee66d9dc6fe"],["/vue2/images/frontendlove.png","1ded4719274d362c27031ad4ba3f86a5"],["/vue2/images/geekbang-ad.jpg","7ab75cf133fd8bc36861403f743cea82"],["/vue2/images/geekbang-vue-ad.gif","e7fae85ac459b6e43a71948c0561ef12"],["/vue2/images/gitee.png","429b3c31a180461c4fb66e5ac20e1385"],["/vue2/images/gridsome.png","e82a2f872ec319bbb5d0a804288cd9b7"],["/vue2/images/happy_programmer_llc.png","3f3303d42a57ff9edf36373f59d376af"],["/vue2/images/hbuilder.png","f269004b31954b02be293f6d59f14af3"],["/vue2/images/hn-architecture.png","b42f49a4e265649f870685b171e4b170"],["/vue2/images/hn.png","99176cdebac521e823be519aef514bb3"],["/vue2/images/html_burger.png","c7ce1344d001e7a236a89694ed59d988"],["/vue2/images/icons.png","ad6ee8c400066e15712cdef4342023da"],["/vue2/images/icons/android-icon-144x144.png","e67b8d54852c2fbf40be2a8eb0590f5b"],["/vue2/images/icons/android-icon-192x192.png","5d10eaab941eb596ee59ffc53652d035"],["/vue2/images/icons/android-icon-36x36.png","bb757d234def1a6b53d793dbf4879578"],["/vue2/images/icons/android-icon-48x48.png","0d33c4fc51e2bb020bf8dd7cd05db875"],["/vue2/images/icons/android-icon-72x72.png","702c4fafca31d670f9bd8b2d185ced39"],["/vue2/images/icons/android-icon-96x96.png","0ebff702851985ea6ba891cf6e6e7ddd"],["/vue2/images/icons/apple-icon-114x114.png","f4fd30f3a26b932843b8c5cef9f2186e"],["/vue2/images/icons/apple-icon-120x120.png","b6a574d63d52ef9c89189b67bcac5cbd"],["/vue2/images/icons/apple-icon-144x144.png","e67b8d54852c2fbf40be2a8eb0590f5b"],["/vue2/images/icons/apple-icon-152x152.png","f53787bf41febf2b044931a305ccaf2a"],["/vue2/images/icons/apple-icon-180x180.png","9f6b1e3b92b2c5bd5b7d79501bb6e612"],["/vue2/images/icons/apple-icon-57x57.png","83f622ba0994866abc56ace068b6551c"],["/vue2/images/icons/apple-icon-60x60.png","643f761bc39f86c70f17cd1fed3b8e08"],["/vue2/images/icons/apple-icon-72x72.png","702c4fafca31d670f9bd8b2d185ced39"],["/vue2/images/icons/apple-icon-76x76.png","94d9af047b86d99657b5efb88a0d1c7b"],["/vue2/images/icons/apple-icon-precomposed.png","707758f591323153a4f1cb3a8d9641fa"],["/vue2/images/icons/apple-icon.png","707758f591323153a4f1cb3a8d9641fa"],["/vue2/images/icons/bacancy_technology.png","5810bb8253b1e35ba437373ff83f82d3"],["/vue2/images/icons/favicon-16x16.png","a5a9da66870189b0539223c38c8a7749"],["/vue2/images/icons/favicon-32x32.png","3d60db0d77303b2414ddd50cf2472bf7"],["/vue2/images/icons/favicon-96x96.png","0ebff702851985ea6ba891cf6e6e7ddd"],["/vue2/images/icons/ms-icon-144x144.png","e67b8d54852c2fbf40be2a8eb0590f5b"],["/vue2/images/icons/ms-icon-150x150.png","e8cdf492981122a2548bc247c7b4067d"],["/vue2/images/icons/ms-icon-310x310.png","1721f8303ec2349002b5980a01f27cef"],["/vue2/images/icons/ms-icon-70x70.png","a110cf0132b00b23a8605ca72a8874ba"],["/vue2/images/icons_8.png","e386832a598b7dbd8405108dac787ca5"],["/vue2/images/imooc-ad.png","9686f3f6da6b8804a483ba8e1f8a77a9"],["/vue2/images/imooc-ad2.png","1980fd121849fea1cc67ae58c73a55a3"],["/vue2/images/imooc-ad3.png","a8b8084e0bb616cef5637f589d0c3a49"],["/vue2/images/imooc-sponsor.png","7ddc7f938fbbc08f816a888225786a4c"],["/vue2/images/imooc-sponsor2.png","ce9575f62520e0ac8b7d93ada2c6b274"],["/vue2/images/inkoop.png","1cff77d2c927657d3aceeba2c12db892"],["/vue2/images/intygrate.png","fdd390b44a4aeed763f53f4e8f6529e4"],["/vue2/images/ionic.png","05da967b8d61bbce5aa3ddc47c819bd5"],["/vue2/images/isle_of_code.png","42f662ab71b943889f8f8b56515350f2"],["/vue2/images/isolutions_uk_limited.png","0f76512940c38b72fcf48337b4d64692"],["/vue2/images/jqwidgets_.png","b6a0a55c85816adb196e1f7450a7f3d7"],["/vue2/images/jqwidgets_ltd.png","6d209e39ca89483f3677ae859edca4d7"],["/vue2/images/laravel.png","1a01f23acfb4fb042dc4e5a3e5e663c8"],["/vue2/images/layer0.png","fe10ae786f2d7234921ee02369aa8513"],["/vue2/images/lendio.png","83de7028daf74d515c462c41e945154a"],["/vue2/images/lifecycle.png","6f2c97f045ba988851b02056c01c8d62"],["/vue2/images/line_corporation.png","51fcc307909b7505d1cc4e337d7c6fa1"],["/vue2/images/litslink.png","41178830976ade9f1f163dc400b77018"],["/vue2/images/logged-proxied-data.png","716e3c41aacf453cfaedd61c2795f0ec"],["/vue2/images/logo.png","cf23526f451784ff137f161b8fe18d5a"],["/vue2/images/logo.svg","346e12ee28bb0e5f5600d47beb4c7a47"],["/vue2/images/lowdefy.png","4af7e47e701c3a1d3101acdd95e8bbee"],["/vue2/images/marcus_hiles.png","8b55f40abd154200ce72b8cdb6a8d90f"],["/vue2/images/memberful.png","8f11061a5ee1d58a91855b3671b79505"],["/vue2/images/memory-leak-example.png","c2fae8bd6d8fa50632f9cde80be8b3f6"],["/vue2/images/menu-blm.png","b0c054903425b560ae6828e6c732995e"],["/vue2/images/menu.png","0b414c367f5e7c0eb1b40f1076216b08"],["/vue2/images/modus.png","6498c04fee5b8542449b350e77180379"],["/vue2/images/mvvm.png","4fbd3c1bc80d47038f3e66cf1478a1a3"],["/vue2/images/nativescript.png","05c94493b428db55bb441faaca4b02d8"],["/vue2/images/neds.png","1f1a2a46c2575019ae07a90205f60b65"],["/vue2/images/netflix_vpn.png","ac75acaa7e0c6c12511cb2d3aed3c0c6"],["/vue2/images/newicon.png","befb5ccdbfcc16fdb7f57195d13b506c"],["/vue2/images/nuxt.png","8aa12e03c917d7985455e4b16a609845"],["/vue2/images/okay.png","3fdb892c86df8ef6a2088d38be7be941"],["/vue2/images/onsen_ui.png","e41569bcb10fbca3f361d818b29ed7fd"],["/vue2/images/onyx_gaming_limited.svg","716ff655e040e17dfe1489d9993241ef"],["/vue2/images/opteo.png","e80eaa359d4722af5fd8fed79fb9eec5"],["/vue2/images/oxford-comma.jpg","8a220093d78172e4eb9d98529f9fba05"],["/vue2/images/passionate_people.png","fefdc6671ef83bc03a4003c91524f49e"],["/vue2/images/patreon.png","99eb0cdcab5f46697e07bec273607903"],["/vue2/images/paypal.png","067bd556ce9e4c76538a8057adb6d596"],["/vue2/images/philip_john_basile.gif","35fc21939087e126d93d173491900c70"],["/vue2/images/piratebay_proxy.png","c3049e3d886a22dfd0d5c8eaba67b8ff"],["/vue2/images/piratebayproxy.png","c3049e3d886a22dfd0d5c8eaba67b8ff"],["/vue2/images/plaid__inc_.svg","c056bb2528390925fa3100d0dd0aeddb"],["/vue2/images/plaid_inc_.svg","c056bb2528390925fa3100d0dd0aeddb"],["/vue2/images/primevue.png","60f2e8fb0dce3e9045fc3a2a8039fa82"],["/vue2/images/programmers_io.png","02cb415eb9a8e9ce6579c7aff03759dd"],["/vue2/images/props-events.png","8996ef20503fbf264a0bfdeafccca74a"],["/vue2/images/pullrequest.svg","50847513b306736d33234d50b11c5e1d"],["/vue2/images/qingfuwu.svg","1da6cf95b68d8987369fdfa1c54fdf76"],["/vue2/images/quickbooks_tool_hub.png","b74acbde8b8dbdc65326ec0ae3b49171"],["/vue2/images/retool.png","aaad6a749deb625da5771750dcb51920"],["/vue2/images/roadster.png","080fb711e736d686f182358a582d7c6b"],["/vue2/images/search-by-algolia.png","3f22d84b817bb896bd5bef0705ff8fc7"],["/vue2/images/search.png","3a38056b0f3ec4fcac63c4d1c3841cab"],["/vue2/images/shopware_ag.png","e2ded483c0660bd629938e37f388d9fb"],["/vue2/images/shopware_ag.svg","5d2a8176b6e1b0a348339746de3edf28"],["/vue2/images/special-sponsor-spot.png","860ea231e9bd1b3ff35e627eb83bb936"],["/vue2/images/staff_augmentation.png","999025bb7194afd0fb71a94dbe77146f"],["/vue2/images/state.png","6a05b01942c7d2cff4ea0033ded59ebb"],["/vue2/images/stdlib.png","8693858c969505b29339bf84c0a5cbdf"],["/vue2/images/storekit.png","cacf47116e5efe9fc2dcd60ebc197707"],["/vue2/images/storyblok.png","64ec1772109b769e91138b58526484ad"],["/vue2/images/syncfusion.png","fd1617455479c2e3265656c167faeb91"],["/vue2/images/takt.png","87e12cbcad945fb803a137c0bab9aea0"],["/vue2/images/tatvasoft.png","190054ad2ba75d05ee3fb2f747a70548"],["/vue2/images/team_extension_north_america_inc.png","8d43aeceffc8388b244d46a7d3adae15"],["/vue2/images/tee__.png","ea5fd763d459d3942e50c323fa32988a"],["/vue2/images/tencent-ad.png","adf85e09ed9c9a5c91d83b9ecf7bd3dd"],["/vue2/images/tendermint.png","a529fd7a1a0d62f2cb7953e87f8687ce"],["/vue2/images/tidelift.png","831935bd53d7d2d4eea9427c5f874816"],["/vue2/images/tighten_co.png","003364e7044150e2979cbfe03d640cec"],["/vue2/images/tooltwist.png","b81bfd5ae608e965d03aaa5a4164373e"],["/vue2/images/transition.png","5990c1dff7dc7a8fb3b34b4462bd0105"],["/vue2/images/troypoint.png","234405cb7bb8ff472d19bc1b76a59027"],["/vue2/images/typescript-type-error.png","1665e7350370c091d397383a7355d3a6"],["/vue2/images/unicorn_io.png","e0c072bd78f366471a393b9c366c9b74"],["/vue2/images/usave.png","5cffd5053b1d75ae49c9b6eb176e0ccf"],["/vue2/images/valuecoders.png","818ca42a745e018ace0c55c36a7ae3dd"],["/vue2/images/vant.png","802bad3fb5ca2a791682fc27c5af22f8"],["/vue2/images/vehikl.png","3bd1b88aa9d242d308e838f2342d7660"],["/vue2/images/vpn_review.png","7d40e6362db451204e14ffdc8a42a80f"],["/vue2/images/vpnranks.png","35d7392e773d487e13358d8b5f7fb646"],["/vue2/images/vpsserver_com.png","7ed2ee5d1cc7ca87137751880d84b566"],["/vue2/images/vue-component-with-preprocessors.png","a5cb959052c9cda793e23a6e3a6a122c"],["/vue2/images/vue-component.png","6a7040cfd4330a536d980c69e2e8dd18"],["/vue2/images/vuejobs.png","77ed618e17571d1a2d77ad7bc53e8fc4"],["/vue2/images/vuemastery.png","6f09ce143467fba22039bde3f2070c19"],["/vue2/images/vueschool.png","3d92b4f1a8fcbe3be0d0e89950a1a705"],["/vue2/images/vuetify.png","c7cfff77abb10162cb0b7c2ed3b6ac51"],["/vue2/images/vuetraining_net__note__since_i_m_not_sure_where_else_to_put_it____this_is_replacing_vuescreencasts___they_re_both_run_by_me__i_m_just_switching_where_i_want_my_sponsorship_to_point_.png","4f23eba857989b1203ed74c10abca9e7"],["/vue2/images/watchcartoononline.png","f7cf1082b14003908496f02f9eb2ae00"],["/vue2/images/webdock.png","6b8d3d271ba4d05daf83ad75d21221d1"],["/vue2/images/webreinvent_technologies_pvt_ltd.svg","ce034a8b2acd87648d82d6958e0e6c5f"],["/vue2/images/webucator.png","3c87885f4c36bc1b07f8c2b547e84b6f"],["/vue2/images/wilderminds.png","cd98b69653b51369da2e765097f13d6f"],["/vue2/images/writers_per_hour.jpg","2033e6d7e88969e97e78e38d8d030eb9"],["/vue2/images/x_team.png","a6cfaebb0c0dc17d348bc9c6fd5758ef"],["/vue2/images/xinguan.png","9eedb6a8a2ee1b0deded1cbadb2680a5"],["/vue2/images/y8.png","3cdd8826d3419751f40a8aa7f90cd539"],["/vue2/images/yakaz.png","f1918919114e35d6091e67370450e8bd"],["/vue2/images/youku.png","1cce2782971aed63d38b17e28614d512"],["/vue2/index.html","f5d320447a6b996b0ebf4161d7dbc021"],["/vue2/js/common.js","d85548e4fd8ed5baa8fbfd1665377e09"],["/vue2/js/css.escape.js","fe4db48c9e3f272a6d12cf1312de889e"],["/vue2/js/smooth-scroll.min.js","ecaa94f311c27bd2ac704a9658ff9cef"],["/vue2/js/theme-data.js","e2765530550268ec01bdb30808560f48"],["/vue2/js/vue.js","ea86876dd3a53ad9d7095ff5ec012dea"],["/vue2/js/vue.min.js","5283b86cbf48a538ee3cbebac633ccd4"],["/vue2/manifest.json","bd8de9895abf2cc1faa760a8bd1004d8"],["/vue2/menu/index.html","6b99a9b8fe21a4cb199d10495cc6d68c"],["/vue2/perf/index.html","74cefbc8ab6d4fc5889fb0d7ceb11bb4"],["/vue2/resources/partners.html","29af074acf4b5090c8030b7a6ae81d0e"],["/vue2/resources/themes.html","1cfae60881da1665ae9316ce10488e98"],["/vue2/support-vuejs/index.html","fd676e5362846927699388160176582f"],["/vue2/v2/api/index.html","5e29157dff1ab4dcf208137885d4da27"],["/vue2/v2/cookbook/adding-instance-properties.html","60e83b343d14062ce9bfb259640deb96"],["/vue2/v2/cookbook/avoiding-memory-leaks.html","2a5a81ae7e3d73f4f080843e579bfaaf"],["/vue2/v2/cookbook/client-side-storage.html","4c98191de0964385986d85c3f1ab6f00"],["/vue2/v2/cookbook/creating-custom-scroll-directives.html","2666d3931f9bfe7ae8704a26a3426d91"],["/vue2/v2/cookbook/debugging-in-vscode.html","f6410e8ebad80cd7cd388f3d1d33c379"],["/vue2/v2/cookbook/dockerize-vuejs-app.html","7646aa7604717b7d10fc5f3d4465024b"],["/vue2/v2/cookbook/editable-svg-icons.html","e5481cffaae89087aa2cb5e56616a2e6"],["/vue2/v2/cookbook/form-validation.html","eeaf1408ab190ba128544833fbd39f88"],["/vue2/v2/cookbook/index.html","cf5beff75d11bd7c3a1c6236c6b36fe0"],["/vue2/v2/cookbook/packaging-sfc-for-npm.html","9a6c07131938d8d32e619e4bff7bafc1"],["/vue2/v2/cookbook/practical-use-of-scoped-slots.html","c95e0e4dedd72fd43789437112d09806"],["/vue2/v2/cookbook/serverless-blog.html","465b7c9bdd521f1ae3e2c7c292a4d62f"],["/vue2/v2/cookbook/unit-testing-vue-components.html","8289b798eb26283043466a143030e50a"],["/vue2/v2/cookbook/using-axios-to-consume-apis.html","944d530cf1330a546dee1cd20dd92e2a"],["/vue2/v2/examples/commits.html","b4d152f05ec08dc760bcb7233a1cc390"],["/vue2/v2/examples/deepstream.html","4843e0f64a6705df7cd8c2dd513e1a74"],["/vue2/v2/examples/elastic-header.html","0f5f7c276cc24899086f68d37aad0926"],["/vue2/v2/examples/firebase.html","bd51f39af46353f507f07dc5fa23a58b"],["/vue2/v2/examples/grid-component.html","8c2b46557fa79ad9df78c4a5f32911d8"],["/vue2/v2/examples/hackernews.html","d9fc943bf10b28066063d9615acf4427"],["/vue2/v2/examples/index.html","3e55820880aeceb5d1b9c22fd0296367"],["/vue2/v2/examples/modal.html","ff9b848a03c9afd0c2e28a1e494fdb46"],["/vue2/v2/examples/select2.html","2e02256972248912ba0f07e97488854d"],["/vue2/v2/examples/svg.html","85eac936a39ebe8ff9d8489bfa8ca42e"],["/vue2/v2/examples/todomvc.html","967cbdf7ec007a40ca7cd2a9edd56a97"],["/vue2/v2/examples/tree-view.html","c8c7b9ab599ae5da5bca6876b318528e"],["/vue2/v2/examples/vue-10-two-way-currency-filter-v2/index.html","1a8250da74ef85104bc0c01394dc3f6d"],["/vue2/v2/examples/vue-10-two-way-currency-filter-v2/package.json","f44b414ea6c8007e83f66181cbd3dfe9"],["/vue2/v2/examples/vue-10-two-way-currency-filter-v2/sandbox.config.json","621f7d2e11e751c81508c494a4212e91"],["/vue2/v2/examples/vue-10-two-way-currency-filter-v3/currency-validator.js","38c3c6804f52f9dc0e1e1d3f0df71576"],["/vue2/v2/examples/vue-10-two-way-currency-filter-v3/index.html","ffef20312759d223f013d783b5958b67"],["/vue2/v2/examples/vue-10-two-way-currency-filter-v3/package.json","8328b2bdef3541bae867c8ccd98cf385"],["/vue2/v2/examples/vue-10-two-way-currency-filter-v3/sandbox.config.json","621f7d2e11e751c81508c494a4212e91"],["/vue2/v2/examples/vue-10-two-way-currency-filter/index.html","663e8b06c85139f328965b511ec29ae7"],["/vue2/v2/examples/vue-10-two-way-currency-filter/package.json","03b1cfe851ef28a294827443bf247d03"],["/vue2/v2/examples/vue-10-two-way-currency-filter/sandbox.config.json","621f7d2e11e751c81508c494a4212e91"],["/vue2/v2/guide/class-and-style.html","f07e3c716b636fe7e58a815aa24613f2"],["/vue2/v2/guide/comparison.html","4e4ed0209a9a4cc172e59f076e741e39"],["/vue2/v2/guide/components-custom-events.html","433c7b90e355f349acd2b32e791ade9f"],["/vue2/v2/guide/components-dynamic-async.html","00a54f2d65dca871c27a160741481452"],["/vue2/v2/guide/components-edge-cases.html","901842ec0a75d80972daa048a621a13c"],["/vue2/v2/guide/components-props.html","a47c8eb4e32f3876b3cfe2ba7f37d246"],["/vue2/v2/guide/components-registration.html","3c15ce36c0f3c1cf6a370340e2660008"],["/vue2/v2/guide/components-slots.html","2ec0dc2b6fb497017870f8f1a310ce60"],["/vue2/v2/guide/components.html","70010b7553ef6b191cf2e459f6128d85"],["/vue2/v2/guide/computed.html","c2c313c748050eaf7edbea72a1504e09"],["/vue2/v2/guide/conditional.html","3e934aaff0dd7d3ffc608c0892c55492"],["/vue2/v2/guide/custom-directive.html","abd611ef56ee44a1d2827a569e5470a8"],["/vue2/v2/guide/deployment.html","c838ace205cfc431d572c1e156cddfea"],["/vue2/v2/guide/events.html","6770a0634e3a14ffb499abf5116cee62"],["/vue2/v2/guide/filters.html","2bc8144df62c6a2076fe7a32354964ff"],["/vue2/v2/guide/forms.html","d4934533159d6435467fc18a0fb4f041"],["/vue2/v2/guide/index.html","51991f0d4439bcc39763fda1866c54de"],["/vue2/v2/guide/installation.html","378134e4ac7621042479c5638ace704e"],["/vue2/v2/guide/instance.html","cfd14cbf54513215f3ee1ab817e36d1d"],["/vue2/v2/guide/join.html","290ad8ba1755b61f1bf5fdbfc0969074"],["/vue2/v2/guide/list.html","bf1edf2e2dc33d04a1665cbc7a53637b"],["/vue2/v2/guide/migration-vue-router.html","4e57992201d37a940c12a1675d90a50c"],["/vue2/v2/guide/migration-vuex.html","a438152991078a2bf4ccb5d1b19bbb19"],["/vue2/v2/guide/migration.html","5ca750e7c76752d2c3cf1b1929b1dece"],["/vue2/v2/guide/mixins.html","c71c2d74dabedd6e6a67b7e051116d56"],["/vue2/v2/guide/plugins.html","fee8ae1259fe05635f9a717c472a3c60"],["/vue2/v2/guide/reactivity.html","370c8fbb443517964bd5c2f9467c6403"],["/vue2/v2/guide/render-function.html","02216700f2660f0146be285c70bf4b38"],["/vue2/v2/guide/routing.html","3306d069d14d74150c35f3f03384a403"],["/vue2/v2/guide/security.html","494eb66f8b07a94e27d20384c29354f3"],["/vue2/v2/guide/single-file-components.html","5cd5fc11d9ad78af07a6e496406da456"],["/vue2/v2/guide/ssr.html","ad8d0396ea9caa209e112d1a6296642d"],["/vue2/v2/guide/state-management.html","a029d713e8f1073d6bf6a4839ce79236"],["/vue2/v2/guide/syntax.html","24b81748479e3ab56e6cf504441b8c28"],["/vue2/v2/guide/team.html","4681b13983e6154c600fd8bbab75ba0a"],["/vue2/v2/guide/testing.html","5a791850f9918e8c645053c59104b2bb"],["/vue2/v2/guide/transitioning-state.html","ff95351fe83a78b5b99bbb0296afdc80"],["/vue2/v2/guide/transitions.html","0ad28199089f7bb046d1e11c932d66a3"],["/vue2/v2/guide/typescript.html","f03d2e848ac8829b7fcf5bc7d5dd0b75"],["/vue2/v2/search/index.html","494264f209bef40368059e392076d63a"],["/vue2/v2/style-guide/index.html","b466d056dc806db43f19935f8ba4f915"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.networkFirst, {"origin":"sendgrid.sp1.convertro.com"});
toolbox.router.get("/*", toolbox.networkFirst, {"origin":"ad.doubleclick.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"fonts.googleapis.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"fonts.gstatic.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdnjs.cloudflare.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"maxcdn.bootstrapcdn.com"});




