/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d45e530ea709a0d503c2b5f0ea7b8726"
  },
  {
    "url": "assets/css/0.styles.7692da92.css",
    "revision": "a9ddd57d80e97af77f70be1f90f15362"
  },
  {
    "url": "assets/fonts/element-icons.6f0a7632.ttf",
    "revision": "6f0a76321d30f3c8120915e57f7bd77e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.162879a3.js",
    "revision": "8d8d7c061a94b1d8df046531516c4422"
  },
  {
    "url": "assets/js/100.f257cc1b.js",
    "revision": "704b72605d85e96d4b27310b902f70b1"
  },
  {
    "url": "assets/js/101.9127f1ad.js",
    "revision": "505ec7ff54a3aa17793c35e945a991db"
  },
  {
    "url": "assets/js/102.85c4143a.js",
    "revision": "5eab71d5911a19b068e0a100732ed321"
  },
  {
    "url": "assets/js/103.2c8978b0.js",
    "revision": "4612b0f459fbb6685c34163e9eefe479"
  },
  {
    "url": "assets/js/104.9473f3f5.js",
    "revision": "f09262277d1558cbb0d480b1d7aba6e7"
  },
  {
    "url": "assets/js/105.d2257632.js",
    "revision": "367e2b2d8908aab64ad5e7ac8fd421c3"
  },
  {
    "url": "assets/js/106.0bf664b7.js",
    "revision": "20d43929bdd0eb5f18a63a020e18fd54"
  },
  {
    "url": "assets/js/107.bd7a03cf.js",
    "revision": "1a22f282c65ae96d42432875c3d9f29c"
  },
  {
    "url": "assets/js/108.70a186ec.js",
    "revision": "e74ffd5803f403a4d7c29a488bdeaf44"
  },
  {
    "url": "assets/js/109.c28abb75.js",
    "revision": "77d7117aa7da425a25e14b827971ad8e"
  },
  {
    "url": "assets/js/11.a1d9edc2.js",
    "revision": "1ffe92dac902044eea3374be3a43b9f4"
  },
  {
    "url": "assets/js/110.998f8248.js",
    "revision": "9a57c9e7e92a571ccfba70384747831c"
  },
  {
    "url": "assets/js/111.e8fc8de4.js",
    "revision": "e84ac35aff72010dffcf251e48e74333"
  },
  {
    "url": "assets/js/112.72ebc19a.js",
    "revision": "b9f2a1a00cbe611283e8f00f63e3ed4c"
  },
  {
    "url": "assets/js/113.b7e36464.js",
    "revision": "0d1c8c3e3ae1a860b34fa6037d6e7eff"
  },
  {
    "url": "assets/js/114.c142d2be.js",
    "revision": "424628e89d805de6f7dd76866839fbac"
  },
  {
    "url": "assets/js/115.2db720b0.js",
    "revision": "e329769aa4ffbadb9763fe30dce14338"
  },
  {
    "url": "assets/js/116.4a5859e8.js",
    "revision": "487be9a543578c67654b3fd082a37ac1"
  },
  {
    "url": "assets/js/117.bb9f05cc.js",
    "revision": "57a78285eb4f96386c9581bc497b5fe0"
  },
  {
    "url": "assets/js/118.5c84933a.js",
    "revision": "2f7043a50bfe977f8cdbc46aeca1aaf5"
  },
  {
    "url": "assets/js/119.f2ec4890.js",
    "revision": "b632396891f242dcd747f4063a396b7f"
  },
  {
    "url": "assets/js/12.9ab43851.js",
    "revision": "2424712b607e9c1a53b418498cdbefbd"
  },
  {
    "url": "assets/js/120.54f9e68e.js",
    "revision": "d68f9b4cc684f315b3db94804cfb4357"
  },
  {
    "url": "assets/js/121.b19db703.js",
    "revision": "faf4acb4ba08cfddc5179e85f7c060d6"
  },
  {
    "url": "assets/js/122.3ed8bfe7.js",
    "revision": "ca1efce25664e68fe0f4dcc9652d196d"
  },
  {
    "url": "assets/js/123.5729fd31.js",
    "revision": "c971c20eff25b2f4789f0e0ddfb639a3"
  },
  {
    "url": "assets/js/124.600ae36f.js",
    "revision": "cdbaaeca5ff29f52f34befa50671b403"
  },
  {
    "url": "assets/js/125.7fc91697.js",
    "revision": "079ef3ace39f6de47fbbbe443a3ad698"
  },
  {
    "url": "assets/js/126.d9c85971.js",
    "revision": "5fb744ad036da2eeb654ca5f4de101e9"
  },
  {
    "url": "assets/js/127.372453e0.js",
    "revision": "d4fa475f55746f23932fd2af33cea9c4"
  },
  {
    "url": "assets/js/128.de975684.js",
    "revision": "7b6c8a386e5d5e87bbf755e64df37f20"
  },
  {
    "url": "assets/js/129.667ba692.js",
    "revision": "79915f6ccdc5156b20c6cf2d177b898f"
  },
  {
    "url": "assets/js/13.17dd6b3f.js",
    "revision": "0012c66d15671b39660a41cfed1bd92f"
  },
  {
    "url": "assets/js/130.caeb6966.js",
    "revision": "11b553f636c990d9e6d44bef652355a5"
  },
  {
    "url": "assets/js/131.cfefe4d7.js",
    "revision": "10a70079279181336ae6c4a469242364"
  },
  {
    "url": "assets/js/132.1668a9b4.js",
    "revision": "234bb769bce5cfdc133642eb276c1332"
  },
  {
    "url": "assets/js/133.6d870172.js",
    "revision": "cb041a6c1ac1af5f078ee5b4cadf4a00"
  },
  {
    "url": "assets/js/134.721afa40.js",
    "revision": "2d9ee24ba80a83ebd86107ce5d215a99"
  },
  {
    "url": "assets/js/135.339b5b45.js",
    "revision": "54ef1df90b93da71563a5722c43b252b"
  },
  {
    "url": "assets/js/136.638f0c13.js",
    "revision": "faede40a616b1a6290490c592f5376f6"
  },
  {
    "url": "assets/js/137.6f9f220a.js",
    "revision": "a818bb6aeb287ebe04562fbb4149a5a7"
  },
  {
    "url": "assets/js/138.68d21640.js",
    "revision": "925e11cb80b1ffd45808ce6383b37951"
  },
  {
    "url": "assets/js/139.1efd4e1a.js",
    "revision": "3499b35bea94c956537e2a9e95457557"
  },
  {
    "url": "assets/js/14.6ba0e26e.js",
    "revision": "bbbc188c57c053dca99389969fad2a57"
  },
  {
    "url": "assets/js/140.fc0d04a2.js",
    "revision": "6c41df5202d903555e8955bea0278be5"
  },
  {
    "url": "assets/js/141.37150d88.js",
    "revision": "ffec3057eb6cbdf36b9a6135f3bfaf97"
  },
  {
    "url": "assets/js/142.0ffc3a71.js",
    "revision": "86c581c8dd4cf49b41c29dc93b91119e"
  },
  {
    "url": "assets/js/143.27ebf9a8.js",
    "revision": "71a00ea17ea1a803578f28ecc85cd180"
  },
  {
    "url": "assets/js/144.3d1c9fea.js",
    "revision": "3e784be22ace4b6ad459f0902f6d1ffd"
  },
  {
    "url": "assets/js/145.aade94fa.js",
    "revision": "8c7b1ab6f3aa1e4e7c0368a0095ac4fc"
  },
  {
    "url": "assets/js/146.aa35839d.js",
    "revision": "c9e4f0d74f05244533a46b7a4834db48"
  },
  {
    "url": "assets/js/147.e9f0b512.js",
    "revision": "c5a1aaf15355310c48fca61cddd99db0"
  },
  {
    "url": "assets/js/148.83106473.js",
    "revision": "b7e9834b6861061227ae2d35b7711946"
  },
  {
    "url": "assets/js/149.69e29875.js",
    "revision": "a70e5660b3c2f9853d64e013ea90be6d"
  },
  {
    "url": "assets/js/15.c96bd01b.js",
    "revision": "1ff43d33c31753a60bb38c9de5fdce16"
  },
  {
    "url": "assets/js/150.f5a163c7.js",
    "revision": "14ad4edd3f795a63583026e50a4c7629"
  },
  {
    "url": "assets/js/151.8194d211.js",
    "revision": "383640ba1db3ac97e99a4f3ca2cd5ec3"
  },
  {
    "url": "assets/js/152.22e06bd9.js",
    "revision": "7d1794460848571ea7934bddebb90d43"
  },
  {
    "url": "assets/js/153.3dc5d4ff.js",
    "revision": "b7fa43f5088b35d3e58e3906cad001af"
  },
  {
    "url": "assets/js/154.700d1584.js",
    "revision": "512dfb1024efc506dedb0b26aaf79f80"
  },
  {
    "url": "assets/js/155.5efcc2bd.js",
    "revision": "d4ac098c19d9b2bdf95ed5c684f1b4ae"
  },
  {
    "url": "assets/js/16.7b8d3d48.js",
    "revision": "81621839974de697b977f7211f81182d"
  },
  {
    "url": "assets/js/17.65e7f313.js",
    "revision": "51861b57898476d1d5c00cdc4613672e"
  },
  {
    "url": "assets/js/18.6d733e9d.js",
    "revision": "c85a59aaad7e7a956527ad3342eeac80"
  },
  {
    "url": "assets/js/19.6ff6b506.js",
    "revision": "06438c56449d95cc8aea1eadf6f775d0"
  },
  {
    "url": "assets/js/2.5d2a1b75.js",
    "revision": "29788da6b960ca861968f87b6157b827"
  },
  {
    "url": "assets/js/20.592f8352.js",
    "revision": "f431b257199e5bf76353dba823c8f5f5"
  },
  {
    "url": "assets/js/21.85fdb3c6.js",
    "revision": "53f8629dfc8c6171e76a2bc6dcbc5f45"
  },
  {
    "url": "assets/js/22.2858d220.js",
    "revision": "c7cfbe5179a569cc7d173292806f06ab"
  },
  {
    "url": "assets/js/23.bc7f0f5f.js",
    "revision": "e9cb080343b173c0d91d0b7efd0fef1e"
  },
  {
    "url": "assets/js/24.5fd807f9.js",
    "revision": "d61d93f9a0f5611fa72819e3293e1de5"
  },
  {
    "url": "assets/js/25.1166aa4f.js",
    "revision": "161a388a932224b830096dc3ee1e785f"
  },
  {
    "url": "assets/js/26.190b65d5.js",
    "revision": "818939eed232235ec2fa15211f76b4f4"
  },
  {
    "url": "assets/js/27.1125d94a.js",
    "revision": "d6f4518014253086301d4156549e8e21"
  },
  {
    "url": "assets/js/28.5ab68fa0.js",
    "revision": "788640a6f7585963549d61d18a86fb74"
  },
  {
    "url": "assets/js/29.0a632eeb.js",
    "revision": "5394e51af1e9fe2b2c1c0ea7f0a53e85"
  },
  {
    "url": "assets/js/3.94535e0f.js",
    "revision": "7338861a583f1c2650b3467e459569e0"
  },
  {
    "url": "assets/js/30.59f5ed62.js",
    "revision": "28b476696db4392fe5ba464c1482200a"
  },
  {
    "url": "assets/js/31.90069a46.js",
    "revision": "534abf7f4680c3dd42a58c35e46e5b77"
  },
  {
    "url": "assets/js/32.f77b71de.js",
    "revision": "3ac4be34b350f041b30be20698f9e642"
  },
  {
    "url": "assets/js/33.20937462.js",
    "revision": "8a51726eb7fbeeceab14367316c6ae26"
  },
  {
    "url": "assets/js/34.1c58e49e.js",
    "revision": "d7d136aac7040d9a3723765a2bb4e638"
  },
  {
    "url": "assets/js/35.703e0c78.js",
    "revision": "4dfdbf377be9aa73cbb5ae0c04a20b06"
  },
  {
    "url": "assets/js/36.0c043aa7.js",
    "revision": "8f69c228f820cbe2bc167d05777650b9"
  },
  {
    "url": "assets/js/37.5b001971.js",
    "revision": "3a794594b0dbd33f09e136a7af503142"
  },
  {
    "url": "assets/js/38.d61326d9.js",
    "revision": "d196c966919b22a1b2e3ca4f9bc7bdf4"
  },
  {
    "url": "assets/js/39.c070d3e8.js",
    "revision": "38b0d6ebcc38c6dc4bcca37774b51d9d"
  },
  {
    "url": "assets/js/4.5dce4720.js",
    "revision": "258068eb8aa87e05d72065e32d72f076"
  },
  {
    "url": "assets/js/40.16badcc6.js",
    "revision": "80fbd80648cc189fc3c507ab8c3f4812"
  },
  {
    "url": "assets/js/41.8ad64ef1.js",
    "revision": "f2fc3ca3e13b2b3af0e9b3cbe33d45d6"
  },
  {
    "url": "assets/js/42.d129ccd1.js",
    "revision": "55497cbaff1f4b27007d2b090c1c5501"
  },
  {
    "url": "assets/js/43.142178b0.js",
    "revision": "33e4332282e01644054ad0d39c1a04ba"
  },
  {
    "url": "assets/js/44.6b58179c.js",
    "revision": "c72fc8d746e18a842332f444a88bbd8c"
  },
  {
    "url": "assets/js/45.45eff671.js",
    "revision": "02619556143df3727d87d4fba90358c0"
  },
  {
    "url": "assets/js/46.60c31bd8.js",
    "revision": "4109dc15df8e89d37b218688a254c834"
  },
  {
    "url": "assets/js/47.8b025134.js",
    "revision": "35271c93608b03105ca8c1212668a151"
  },
  {
    "url": "assets/js/48.3486c5d8.js",
    "revision": "c9d9f44d61b7e0a5b0d57b4a592a22d1"
  },
  {
    "url": "assets/js/49.5e58f364.js",
    "revision": "418faafc5b3a9a3d5336b6f2ea4b29ef"
  },
  {
    "url": "assets/js/5.a2a37c32.js",
    "revision": "26448230849e6d330603412e5bb3af1f"
  },
  {
    "url": "assets/js/50.322115a0.js",
    "revision": "3759f4517f6664537be33d1aeb668aec"
  },
  {
    "url": "assets/js/51.a357c460.js",
    "revision": "9cba339b8dbc9a1b6b122dd30cc6c51c"
  },
  {
    "url": "assets/js/52.74ab5048.js",
    "revision": "57caab9a231e2f28ae0e37700d18d2ac"
  },
  {
    "url": "assets/js/53.068b462e.js",
    "revision": "417c9009a2d9052d9aeee39f03977b4b"
  },
  {
    "url": "assets/js/54.72c799b3.js",
    "revision": "aa420c991db78f0bf3cae94fddc630e3"
  },
  {
    "url": "assets/js/55.0dbaaed5.js",
    "revision": "0dd5d35bc45fed3ed5cca542daeb6329"
  },
  {
    "url": "assets/js/56.18327b1c.js",
    "revision": "5151e18c709dda2460ca5f013f91237f"
  },
  {
    "url": "assets/js/57.7e488c50.js",
    "revision": "c6405a47182f9e02e5588dfb23fb07ca"
  },
  {
    "url": "assets/js/58.01ee7777.js",
    "revision": "12a501702384c03589eae7da4f18d9da"
  },
  {
    "url": "assets/js/59.13ff90a7.js",
    "revision": "753a398bcffd07a43cac7e983ffa9656"
  },
  {
    "url": "assets/js/6.dcf2a870.js",
    "revision": "dee83b2ad2a07078ba917591eef74c64"
  },
  {
    "url": "assets/js/60.ed913e68.js",
    "revision": "88eee90477b21cf363501875c2bac1a0"
  },
  {
    "url": "assets/js/61.116648cf.js",
    "revision": "78a2255cbb980f32b3a4f0e6a7aa10f1"
  },
  {
    "url": "assets/js/62.8b733ebb.js",
    "revision": "dc3194a7149282ad75e81741dbfd668c"
  },
  {
    "url": "assets/js/63.f4113cf4.js",
    "revision": "41dc5e92fd8c59fbcd3beda457646c84"
  },
  {
    "url": "assets/js/64.8f6b25fe.js",
    "revision": "0a8a9c75232d9d6b19cf0e6164991da5"
  },
  {
    "url": "assets/js/65.d7f29dac.js",
    "revision": "70d7284a455e85edda612d96d1fa4a29"
  },
  {
    "url": "assets/js/66.149a6101.js",
    "revision": "db2d46a5e5837eac65f727fadd438c90"
  },
  {
    "url": "assets/js/67.ea414936.js",
    "revision": "3db64139f2b080b6431be44a6ccb0343"
  },
  {
    "url": "assets/js/68.b60d9268.js",
    "revision": "5a8925cc0d1918440389c5e70a1a0823"
  },
  {
    "url": "assets/js/69.f28813da.js",
    "revision": "8a031c18a1fbf3e4028a206183e107fc"
  },
  {
    "url": "assets/js/7.579cb149.js",
    "revision": "688fb8ec1c0a61a0a3716ca49fb4d4a1"
  },
  {
    "url": "assets/js/70.658f13be.js",
    "revision": "c978751a4ecf0a7ae84c8205b5859d4c"
  },
  {
    "url": "assets/js/71.2c2b5272.js",
    "revision": "e6a46cda37709db6a7985a3b3234d63f"
  },
  {
    "url": "assets/js/72.1abc45f4.js",
    "revision": "3dbe65c27dfceb839f71b36e2221d77c"
  },
  {
    "url": "assets/js/73.7b4fee63.js",
    "revision": "427c3981c2fe02c537a1e8732ae336be"
  },
  {
    "url": "assets/js/74.2bb7ec48.js",
    "revision": "e4a9a722f11a7740b078655aa9a6acb9"
  },
  {
    "url": "assets/js/75.ccb47ca0.js",
    "revision": "721ff0ea3e109e3068768008b906d275"
  },
  {
    "url": "assets/js/76.b5e24ddb.js",
    "revision": "64ecf121c67de2fae63f5ad9fd7a248a"
  },
  {
    "url": "assets/js/77.dc9ad93a.js",
    "revision": "eb3cfd43d008823717604024ed56462f"
  },
  {
    "url": "assets/js/78.dc1347f1.js",
    "revision": "12d72716d0bd1f22a29e381958c9a715"
  },
  {
    "url": "assets/js/79.a021687f.js",
    "revision": "eabe213be1a95b125c820e6bb371d37e"
  },
  {
    "url": "assets/js/8.a5cb8769.js",
    "revision": "a4dadadeabe52e4d730a5eb34262905c"
  },
  {
    "url": "assets/js/80.aab21bd9.js",
    "revision": "34ae2ec25dea0785b598e8985d565d89"
  },
  {
    "url": "assets/js/81.63035ece.js",
    "revision": "61376374dadb00883fb34f558bf089f3"
  },
  {
    "url": "assets/js/82.f249eb52.js",
    "revision": "cfd04b57dd470297b226386d8dd7740c"
  },
  {
    "url": "assets/js/83.84af6100.js",
    "revision": "e2c68b18e9ab81b5d182d03bbe4c5e97"
  },
  {
    "url": "assets/js/84.2e5fb6f2.js",
    "revision": "2217ee955fb94dc0ee12cf8d683598ac"
  },
  {
    "url": "assets/js/85.6c418f30.js",
    "revision": "ad148bd05b8956c4039e108d402a859a"
  },
  {
    "url": "assets/js/86.8bfb06ed.js",
    "revision": "52ea90c532d6917eb6c8ec5c4e1966ee"
  },
  {
    "url": "assets/js/87.bc978f1d.js",
    "revision": "2e40f7e55ea051f1d642f8b36d442f52"
  },
  {
    "url": "assets/js/88.30f86d17.js",
    "revision": "52abfb138afc227810e9c27e1f5527f1"
  },
  {
    "url": "assets/js/89.dd27ed6b.js",
    "revision": "fa1b83993f7001113d2c1383ab09b9a2"
  },
  {
    "url": "assets/js/9.9d9f6da3.js",
    "revision": "a2900fbff8ab42e0d412d5c56fc0c617"
  },
  {
    "url": "assets/js/90.f05c951b.js",
    "revision": "bc7fbb902e38e061ebc54fa47785dd24"
  },
  {
    "url": "assets/js/91.f25d4398.js",
    "revision": "bc8700f4ece0df0d4f955abdf9e9d427"
  },
  {
    "url": "assets/js/92.6cb9c020.js",
    "revision": "d6a26defa7f8ceac82ae57069906d162"
  },
  {
    "url": "assets/js/93.fa4d0de7.js",
    "revision": "569d24ecedf1edec40f534161e3a1e00"
  },
  {
    "url": "assets/js/94.4d3fd868.js",
    "revision": "788ef6663c36841b2fe6f6e35f413961"
  },
  {
    "url": "assets/js/95.65c20d27.js",
    "revision": "d37bcb8f62b88255d8a323c2d86961ca"
  },
  {
    "url": "assets/js/96.373bae8d.js",
    "revision": "23ce653e6c179a4743b2f61b779de0db"
  },
  {
    "url": "assets/js/97.a74b9fdd.js",
    "revision": "70f06616339dad77d472be709b49b1da"
  },
  {
    "url": "assets/js/98.bd3c1bc3.js",
    "revision": "8b9e8f0a337df2236e90b2534ce6aade"
  },
  {
    "url": "assets/js/99.ed46a969.js",
    "revision": "d8ae56c9807c56066dcfd8d7af143914"
  },
  {
    "url": "base/api/1.echarts.html",
    "revision": "c352404725556d12c25b6f25cabe782e"
  },
  {
    "url": "base/api/1.index.html",
    "revision": "c54c1efa9a07c792220d3ccb3218b0da"
  },
  {
    "url": "base/api/2.echartsInstance.html",
    "revision": "b9fbcd4c09d5d90632a8d7e0bdc7b921"
  },
  {
    "url": "base/api/3.action.html",
    "revision": "96aceea1b57ca6dbeff03b6df1ba94b1"
  },
  {
    "url": "base/api/4.events.html",
    "revision": "1ebc3d75be78eb34fcaadcabb0681b9d"
  },
  {
    "url": "base/components/1.index.html",
    "revision": "6f23e8a1d53b40b2be5a0dc454862440"
  },
  {
    "url": "base/components/1.legend.html",
    "revision": "234b930e6c90b1f0901752db969f71a9"
  },
  {
    "url": "base/components/2.grid.html",
    "revision": "40bcc93acd57096246ccb590a39f6704"
  },
  {
    "url": "base/components/2.polar.html",
    "revision": "67a4a3b85ac81642265b4784b8f50bdc"
  },
  {
    "url": "base/components/2.radiusAxis.html",
    "revision": "0260dccc7b4894cb3354c17a28c7a93e"
  },
  {
    "url": "base/components/2.xAxis.html",
    "revision": "ec2c7eee61c7af1b1444e3e89d76aa56"
  },
  {
    "url": "base/components/2.yAxis.html",
    "revision": "50034ecd27d5481f5c5abf8dbfa2ddb1"
  },
  {
    "url": "base/components/3.angleAxis.html",
    "revision": "e346a968b09c1c5edef68b7af32e8a2d"
  },
  {
    "url": "base/components/4.radar.html",
    "revision": "1671ff71feaf8a21700b8965024f90d2"
  },
  {
    "url": "base/components/5.dataZoom.html",
    "revision": "cd1ee6858507847a2121f872e9e4a630"
  },
  {
    "url": "base/components/6.visualMap.html",
    "revision": "4b1345738aebffff67dff22b0b82e696"
  },
  {
    "url": "base/components/7.tooltip.html",
    "revision": "eff7d74ade0a8ef59d6e2edda5f41346"
  },
  {
    "url": "base/components/8.geo.html",
    "revision": "91d501b27842f4cdcfde99d85bc40f27"
  },
  {
    "url": "base/gl/1.index.html",
    "revision": "793e0df496ffc29c6cf3182bbfaf3e3d"
  },
  {
    "url": "base/gl/1.scatter3D.html",
    "revision": "d6746a03b6f24eb682e14bc2748155bb"
  },
  {
    "url": "base/gl/10.flowGL.html",
    "revision": "8edcef86a8ea95859665384b5c2cd43f"
  },
  {
    "url": "base/gl/2.bar3D.html",
    "revision": "52f3f203200fa9e08f40716521904f46"
  },
  {
    "url": "base/gl/3.line3D.html",
    "revision": "ffa44b13ae8c26752a61f9c700bda041"
  },
  {
    "url": "base/gl/4.lines3D.html",
    "revision": "20b4424a5c63f3212a45ab64afe89667"
  },
  {
    "url": "base/gl/5.map3D.html",
    "revision": "bbf0477b9da275b1ce2b3c75f58b3934"
  },
  {
    "url": "base/gl/6.surface.html",
    "revision": "bcdd7b0000ea442ee850dd4b2f21007f"
  },
  {
    "url": "base/gl/7.polygons3D.html",
    "revision": "e6c71d332bb7f238c278dadd212245c4"
  },
  {
    "url": "base/gl/8.scatterGL.html",
    "revision": "2c4f76982c021917edcab80642cc5013"
  },
  {
    "url": "base/gl/9.graphGL.html",
    "revision": "f39bb0b1e951b1cf535ab5edd9ef0e46"
  },
  {
    "url": "base/series/1.index.html",
    "revision": "680f24475f369a8e71dffd1634d07b4b"
  },
  {
    "url": "base/series/1.line.html",
    "revision": "2b030549070139f8ee8fd75b02ab0a7f"
  },
  {
    "url": "base/series/10.boxplot.html",
    "revision": "2ade965f953cbd634b74ccf9c45ce747"
  },
  {
    "url": "base/series/11.candlestick.html",
    "revision": "7cbc919a25870443ae9d8f6dc0f7d62e"
  },
  {
    "url": "base/series/12.heatmap.html",
    "revision": "8757038e321d5ec9e3191e88d0720fb3"
  },
  {
    "url": "base/series/13.map.html",
    "revision": "61009ce630763e00e4e3873ea0e34eb5"
  },
  {
    "url": "base/series/14.parallel.html",
    "revision": "a6bc26d393611951e346dddedb11504b"
  },
  {
    "url": "base/series/15.lines.html",
    "revision": "deeb9c7c44149ed7d153b9c01daaba57"
  },
  {
    "url": "base/series/16.graph.html",
    "revision": "9a8fbe0f55e58df45534fff949b2c1ba"
  },
  {
    "url": "base/series/17.sankey.html",
    "revision": "71503aeb41caf054af0b007f89ee9e94"
  },
  {
    "url": "base/series/18.funnel.html",
    "revision": "9b4e1cf8e57b35efafabb466219628b1"
  },
  {
    "url": "base/series/19.gauge.html",
    "revision": "fb7bf3687c860fa23a57ab1eb2656878"
  },
  {
    "url": "base/series/2.bar.html",
    "revision": "23da609599f7bcb44ffe65df751978dc"
  },
  {
    "url": "base/series/20.pictorialBar.html",
    "revision": "e2e4397f2555472dd1c020c5d52f6a3b"
  },
  {
    "url": "base/series/21.themeRiver.html",
    "revision": "94b960129d84392cdc305102aa472f8e"
  },
  {
    "url": "base/series/22.custom.html",
    "revision": "dde6b12b891ef12e2c9017a8f0235c41"
  },
  {
    "url": "base/series/3.pie.html",
    "revision": "b4d683a2193fd79e9ca75b2886adc910"
  },
  {
    "url": "base/series/4.scatter.html",
    "revision": "cae993b2b950fc43719f613aa929db0b"
  },
  {
    "url": "base/series/5.effectScatter.html",
    "revision": "77142c4f2c39559d706b0a18c691db38"
  },
  {
    "url": "base/series/6.radar.html",
    "revision": "c120c0eb9de95b5f125862677bfb7d60"
  },
  {
    "url": "base/series/7.tree.html",
    "revision": "05e9cad3bb05ba1bf21936818ee88036"
  },
  {
    "url": "base/series/8.treemap.html",
    "revision": "cd4622bb33a79cc7f3eeed3e79869d1b"
  },
  {
    "url": "base/series/9.sunburst.html",
    "revision": "1155e85d9e39f95f46f9bceca3895e16"
  },
  {
    "url": "dll/vendor.dll.js",
    "revision": "77ea1c5a8d507974145255fa737e305a"
  },
  {
    "url": "home.png",
    "revision": "942fc478c6acbd2a3cc543c584cf258a"
  },
  {
    "url": "index.html",
    "revision": "d71f69bf0f54774d5ca058d41b6ff862"
  },
  {
    "url": "mock/http.js",
    "revision": "a219140640bec4dfbe8f4fe88d351ed8"
  },
  {
    "url": "senior/1.micro/1.index.html",
    "revision": "cbaf32022ab67099496da89da5cfa67a"
  },
  {
    "url": "senior/1.micro/1.singlespa.html",
    "revision": "9a1da5b4e700e060b9fcd5002237399e"
  },
  {
    "url": "senior/1.micro/1.singlespa2.html",
    "revision": "6567eb6024ee1bb29d0fb8d25fde9b2a"
  },
  {
    "url": "senior/1.micro/2.qiankun.html",
    "revision": "0f98f7b61dedb6e7d08ada47106581a6"
  },
  {
    "url": "senior/1.micro/2.qiankun2.html",
    "revision": "6bc1a0da96c73b6874335104b323e4f1"
  },
  {
    "url": "senior/1.micro/3.share.html",
    "revision": "5dd65973c6a17c9db3989c6be38c0336"
  },
  {
    "url": "senior/1.micro/4.dev.html",
    "revision": "5c2bb5fc0fb017546bbd65cabbf6d1a3"
  },
  {
    "url": "senior/2.typescript/1.env.html",
    "revision": "38544f5f21674825bbc83367b33b8268"
  },
  {
    "url": "senior/2.typescript/1.index.html",
    "revision": "a67a73ddb4ca14fd7b7d72562736398a"
  },
  {
    "url": "senior/2.typescript/10.infer.html",
    "revision": "3240345340b2b530972e8d1660776c0a"
  },
  {
    "url": "senior/2.typescript/11.overlapping.html",
    "revision": "23833ae508a9bd22e981c22fa816de36"
  },
  {
    "url": "senior/2.typescript/12.condition.html",
    "revision": "9f2820731eea4445b0636beff1a1b6fd"
  },
  {
    "url": "senior/2.typescript/13.builtin.html",
    "revision": "a0ee06820ea07e5a2dfadbc4e26905d5"
  },
  {
    "url": "senior/2.typescript/14.package.html",
    "revision": "30ba247d0508621c65b0ee85716eedee"
  },
  {
    "url": "senior/2.typescript/15.custom.html",
    "revision": "ddc2fd945d9f9818c00b0dd77b45d50e"
  },
  {
    "url": "senior/2.typescript/16.unknown.html",
    "revision": "c84035e725d1e4a78d6481bb55643ae8"
  },
  {
    "url": "senior/2.typescript/17.module.html",
    "revision": "6ec078ad6f4788340a87c0f3b6cbe38f"
  },
  {
    "url": "senior/2.typescript/18.statement.html",
    "revision": "7104b699f459c8f0ef76c0369b860e77"
  },
  {
    "url": "senior/2.typescript/19.extend.html",
    "revision": "0e0f495e2c07a3fb488ebef8aadda291"
  },
  {
    "url": "senior/2.typescript/2.base.html",
    "revision": "ae6e54fccebcfc67a4dc3e820cd13286"
  },
  {
    "url": "senior/2.typescript/3.deduction.html",
    "revision": "88ded1297030decbc726cfc269fd32ca"
  },
  {
    "url": "senior/2.typescript/4.type.html",
    "revision": "235f5e324c3c1809062842407d96caf9"
  },
  {
    "url": "senior/2.typescript/5.class.html",
    "revision": "40ed273c59bcdcdbc69238a04966f6da"
  },
  {
    "url": "senior/2.typescript/6.interface.html",
    "revision": "a60a613607f6921adc79c6e232cc1f44"
  },
  {
    "url": "senior/2.typescript/7.generic.html",
    "revision": "fee05efccd4fa359cabda045e9c3bbc3"
  },
  {
    "url": "senior/2.typescript/8.compatible.html",
    "revision": "a7bc1d5850c9de49512970ea2ae72ea3"
  },
  {
    "url": "senior/2.typescript/9.protect.html",
    "revision": "c587a92460a0d88f0cb01ea5eb62b2bc"
  },
  {
    "url": "senior/3.deploy/1.index.html",
    "revision": "a9b285089e3f122f38320b8a05d1c936"
  },
  {
    "url": "senior/3.deploy/1.local.html",
    "revision": "12e98d06c00e7352158300e62fcb4c3d"
  },
  {
    "url": "senior/3.deploy/2.gitlab.html",
    "revision": "9681cfc0acae16ac8da137a28758cf34"
  },
  {
    "url": "senior/3.deploy/3.genkins.html",
    "revision": "4dde56d5f4e278e2fb721e39da3bf0fe"
  },
  {
    "url": "senior/3.deploy/4.centos.html",
    "revision": "925bb8603328e057dbd99c2c8e1f3255"
  },
  {
    "url": "senior/3.deploy/5.nginx.html",
    "revision": "d2aec3aff0e687d1ac8ebe3bfd66b468"
  },
  {
    "url": "senior/4.component/1.button.html",
    "revision": "175cebea1e27cf9892af345d23853e01"
  },
  {
    "url": "senior/4.component/1.env.html",
    "revision": "cfa30430491a87164e1be588ad13e0c6"
  },
  {
    "url": "senior/4.component/1.index.html",
    "revision": "3388011c84179f3c57efcf91186e9c45"
  },
  {
    "url": "senior/4.component/1.recursion.html",
    "revision": "a80ae9cb8c2c2daae98ef4e02982b7e0"
  },
  {
    "url": "senior/4.component/10.tree.html",
    "revision": "57c9ac7e042b8b5d488c3967a29afe64"
  },
  {
    "url": "senior/4.component/12.table.html",
    "revision": "cda4295b6638ffc7f2130549a5b4e306"
  },
  {
    "url": "senior/4.component/13.publish.html",
    "revision": "36d392a5a9489baae135883859d3ebfd"
  },
  {
    "url": "senior/4.component/2.dropdown.html",
    "revision": "29ad0cffcb76a6c0d5cd48dba82394e7"
  },
  {
    "url": "senior/4.component/3.dialog.html",
    "revision": "f36a7f8213fe6c927e436641c573b468"
  },
  {
    "url": "senior/4.component/3.form.html",
    "revision": "0c3607b34474bc726fe21ff1ff194064"
  },
  {
    "url": "senior/4.component/4.input.html",
    "revision": "3587d56951d8b6fe35cbe69669fd2355"
  },
  {
    "url": "senior/4.component/4.render.html",
    "revision": "51d36379915c82095d18d0cd90abe34b"
  },
  {
    "url": "senior/4.component/5.checkBox.html",
    "revision": "0c3450816144dae9dcbbe1fb70c3cae8"
  },
  {
    "url": "senior/4.component/6.cascader.html",
    "revision": "462ff55cb027ae1321979d7eecbd00ad"
  },
  {
    "url": "senior/4.component/7.date.html",
    "revision": "723da70abc0c9e5dd3485c3ab242c928"
  },
  {
    "url": "senior/4.component/8.dispaly.html",
    "revision": "963310738b42df8390ba24a3c4aa01c4"
  },
  {
    "url": "senior/4.component/9.alert.html",
    "revision": "22a0f2c9972f0fe7266b2b36cd429ac6"
  },
  {
    "url": "senior/4.component/9.dynamics.html",
    "revision": "6229e00bacfd99be5f82a776ffc76171"
  },
  {
    "url": "source/vue-cli2.x/1.index.html",
    "revision": "d7563a2eb633f22e7e9734f79f733769"
  },
  {
    "url": "source/vue-cli3.x/1.index.html",
    "revision": "85466763d5b52705293dfb78ab679073"
  },
  {
    "url": "source/vue-router3.x/1.index.html",
    "revision": "c333f513c08cb088f959e322defbd0ae"
  },
  {
    "url": "source/vue-router3.x/2.origin.html",
    "revision": "696cb4857d9ba2e9206ff620d473e98b"
  },
  {
    "url": "source/vue-router4.x/1.index.html",
    "revision": "015d4e3706d5f35b6b79dec00b0f90e1"
  },
  {
    "url": "source/vue2.x/1.index.html",
    "revision": "7175eba48b2cf5f5cb2efde1c4913a04"
  },
  {
    "url": "source/vue2.x/10.optimize.html",
    "revision": "8ec86d76300a5e977766016cae2b373d"
  },
  {
    "url": "source/vue2.x/11.gencode.html",
    "revision": "798d11657af5dd0b94cac37acd452edf"
  },
  {
    "url": "source/vue2.x/12.mount.html",
    "revision": "79705abfbaade364569152d5f879f49a"
  },
  {
    "url": "source/vue2.x/13._render.html",
    "revision": "b3812ab811b074bf755f72574064410c"
  },
  {
    "url": "source/vue2.x/14._update.html",
    "revision": "c74468d61c660924d24268e453577ef6"
  },
  {
    "url": "source/vue2.x/2.initGlobalAPI.html",
    "revision": "0a34f19e68d11c79e1abd32d69977639"
  },
  {
    "url": "source/vue2.x/3.initMixin.html",
    "revision": "426bb81ff6132ecfd2fcc96eacd6d963"
  },
  {
    "url": "source/vue2.x/4.stateMixin.html",
    "revision": "30d8a4afd72d7095a80a53add8189229"
  },
  {
    "url": "source/vue2.x/5.eventsMixin.html",
    "revision": "a3097e3852cf1a96448d2fc83f0a99c1"
  },
  {
    "url": "source/vue2.x/6.lifecycleMixin.html",
    "revision": "6ff2a83e5e371d4b9e8767ff35d968b3"
  },
  {
    "url": "source/vue2.x/7.renderMixin.html",
    "revision": "2441db129a12f75c37a547b7f76ea0ea"
  },
  {
    "url": "source/vue2.x/8.mount.html",
    "revision": "ed60b378ea8769e28ea992031c259c2f"
  },
  {
    "url": "source/vue2.x/9.ast.html",
    "revision": "94b89a2d7b72a7f8e3dd0be4c2f6f46e"
  },
  {
    "url": "source/vue3.x/1.index.html",
    "revision": "13d47100d82265ce5c11feaaccd8bf6a"
  },
  {
    "url": "source/vue3.x/10.optimize.html",
    "revision": "9c284263cc26998aed440b254a6df8b1"
  },
  {
    "url": "source/vue3.x/11.gencode.html",
    "revision": "9b6505f6d3cae7072a62076bde714cd0"
  },
  {
    "url": "source/vue3.x/12.mount.html",
    "revision": "c01b0e1aad0df7a9d748bc192e82d64e"
  },
  {
    "url": "source/vue3.x/13._render.html",
    "revision": "f98c8163bbaf056012081cee1888baa6"
  },
  {
    "url": "source/vue3.x/14._update.html",
    "revision": "98bfc57898867844945341a3405d08bd"
  },
  {
    "url": "source/vue3.x/2.initGlobalAPI.html",
    "revision": "940715fa2bff2e10b8e150f4317d2cd6"
  },
  {
    "url": "source/vue3.x/3.initMixin.html",
    "revision": "a640c148025dce84669d4eca73c424e2"
  },
  {
    "url": "source/vue3.x/4.stateMixin.html",
    "revision": "0a0037cce5c0358fa92efe140ddbd2b6"
  },
  {
    "url": "source/vue3.x/5.eventsMixin.html",
    "revision": "6e9e255c68ce60158f88372295c44d52"
  },
  {
    "url": "source/vue3.x/6.lifecycleMixin.html",
    "revision": "4a63596dd9a48eb5d4e8e2f8166147f0"
  },
  {
    "url": "source/vue3.x/7.renderMixin.html",
    "revision": "322f3dc6ab9776c3bbea23a611b7b00c"
  },
  {
    "url": "source/vue3.x/8.mount.html",
    "revision": "2cef899fa94a83e023fb136c174fcf7c"
  },
  {
    "url": "source/vue3.x/9.ast.html",
    "revision": "3d8117639846ebd835ab3158ad485d58"
  },
  {
    "url": "source/vuex3.x/1.index.html",
    "revision": "16754725806df4676f29cfc02ccc3cbc"
  },
  {
    "url": "source/vuex3.x/2.use.html",
    "revision": "76b8efbe49904f39938b2fd26927b206"
  },
  {
    "url": "source/vuex3.x/3.origin.html",
    "revision": "ecc2c9a47f339d72b97d3643774e1c97"
  },
  {
    "url": "source/vuex4.x/1.index.html",
    "revision": "a85e5d69493f2862ecc424c7deae593a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
