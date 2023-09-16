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
    "revision": "7c12df1e43840c8c9ece055d7801d228"
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
    "url": "assets/js/49.44ffbf92.js",
    "revision": "0571b832f58fc01b544ded3f4d4869e5"
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
    "revision": "8de260c9d75ede2f96354558f8bdcb41"
  },
  {
    "url": "base/api/1.index.html",
    "revision": "3b2f2470e92e58022e179f68453229d1"
  },
  {
    "url": "base/api/2.echartsInstance.html",
    "revision": "477bd854a5a4374ec5c1d5d342a11495"
  },
  {
    "url": "base/api/3.action.html",
    "revision": "c0e56f8c438429be5eb9b7d210e4cf44"
  },
  {
    "url": "base/api/4.events.html",
    "revision": "968d9054adae89f212a73abb34840607"
  },
  {
    "url": "base/components/1.index.html",
    "revision": "1759fe5cfa3f434b2556308df7611f37"
  },
  {
    "url": "base/components/1.legend.html",
    "revision": "1355e2f617fa9995daae68b7c3ffc8e5"
  },
  {
    "url": "base/components/2.grid.html",
    "revision": "4f289384632e5b838b78928305d4d9bc"
  },
  {
    "url": "base/components/2.polar.html",
    "revision": "62d2f5076b43465e78562243966d755d"
  },
  {
    "url": "base/components/2.radiusAxis.html",
    "revision": "e1484be54a243108eafdd5385da14213"
  },
  {
    "url": "base/components/2.xAxis.html",
    "revision": "5870e2a33c1d5bccacc588b43859ee67"
  },
  {
    "url": "base/components/2.yAxis.html",
    "revision": "387297c7840d4949aa3aed5a5d0fca7e"
  },
  {
    "url": "base/components/3.angleAxis.html",
    "revision": "797a59c44dd6e2b5340cc9bff02ad494"
  },
  {
    "url": "base/components/4.radar.html",
    "revision": "bd4c12387793329dc59c15afb510706d"
  },
  {
    "url": "base/components/5.dataZoom.html",
    "revision": "077838e085b98f163e86971979a2ee6a"
  },
  {
    "url": "base/components/6.visualMap.html",
    "revision": "96cf3a7dfa3172602889b91aee65102d"
  },
  {
    "url": "base/components/7.tooltip.html",
    "revision": "3367c0436d728169a9f26cad0624f9cd"
  },
  {
    "url": "base/components/8.geo.html",
    "revision": "0bea841cb3fec337b6e97a280a949f35"
  },
  {
    "url": "base/gl/1.index.html",
    "revision": "9bb1f786b60ad1235bdcf397d13224c3"
  },
  {
    "url": "base/gl/1.scatter3D.html",
    "revision": "788b274de688d8b9734c99a191c103ed"
  },
  {
    "url": "base/gl/10.flowGL.html",
    "revision": "2cea553d1ce3ed77b43812bef026687f"
  },
  {
    "url": "base/gl/2.bar3D.html",
    "revision": "75ff09500db82e9fbfd4468e7eeea3a3"
  },
  {
    "url": "base/gl/3.line3D.html",
    "revision": "fd43dd50f44082287bda425619de9981"
  },
  {
    "url": "base/gl/4.lines3D.html",
    "revision": "55d6c264fb909aeab7658f2276c61640"
  },
  {
    "url": "base/gl/5.map3D.html",
    "revision": "0ecffade60d49c7485f49a43d4d15484"
  },
  {
    "url": "base/gl/6.surface.html",
    "revision": "a510b3152562f7d6c35f39a2fc5c0536"
  },
  {
    "url": "base/gl/7.polygons3D.html",
    "revision": "7369514ad628d696c7a7a9b22ab1d9fc"
  },
  {
    "url": "base/gl/8.scatterGL.html",
    "revision": "88d97d202dc5dc53ae792c9d249cc7e8"
  },
  {
    "url": "base/gl/9.graphGL.html",
    "revision": "d3c15c5938632a721170c0eb6000b103"
  },
  {
    "url": "base/series/1.index.html",
    "revision": "cb7ba2a47f8dd79bfebaaf0621849a04"
  },
  {
    "url": "base/series/1.line.html",
    "revision": "5c35819ac9a964c98be0d33aa8614b51"
  },
  {
    "url": "base/series/10.boxplot.html",
    "revision": "090c69f1216accb725057c398828e6db"
  },
  {
    "url": "base/series/11.candlestick.html",
    "revision": "3f6169f6e1f4b48592908b0f303aeae7"
  },
  {
    "url": "base/series/12.heatmap.html",
    "revision": "fd29af94cd2bb75fcc8715fc25cf7c08"
  },
  {
    "url": "base/series/13.map.html",
    "revision": "6485223786f3390ae2e3dab876eedd05"
  },
  {
    "url": "base/series/14.parallel.html",
    "revision": "8a35254c57bde95efeddbfeee41f3ac9"
  },
  {
    "url": "base/series/15.lines.html",
    "revision": "d01d85cba5ca9bc0b0821a4615c626d6"
  },
  {
    "url": "base/series/16.graph.html",
    "revision": "3727e10079a81c24b62d999bc44d494b"
  },
  {
    "url": "base/series/17.sankey.html",
    "revision": "b53ebe935ca07ffe94690d1af18f8b6c"
  },
  {
    "url": "base/series/18.funnel.html",
    "revision": "33199b0840a4cfd294e4a24fbe456348"
  },
  {
    "url": "base/series/19.gauge.html",
    "revision": "a790276d9b688fcb5d028dafd9a1774c"
  },
  {
    "url": "base/series/2.bar.html",
    "revision": "6e3d76ee297591d1cff7b404b73d03d2"
  },
  {
    "url": "base/series/20.pictorialBar.html",
    "revision": "8417823f3baab1b9c9126c91d9517585"
  },
  {
    "url": "base/series/21.themeRiver.html",
    "revision": "9220483303fd5183874eb5341b4a8297"
  },
  {
    "url": "base/series/22.custom.html",
    "revision": "bfee32373f29cf222016edd672a32ccb"
  },
  {
    "url": "base/series/3.pie.html",
    "revision": "871f6f49502842234a1e9722f61f5afe"
  },
  {
    "url": "base/series/4.scatter.html",
    "revision": "377f33878645899974b03bf8d7d55547"
  },
  {
    "url": "base/series/5.effectScatter.html",
    "revision": "3a8a76ee626ea348a039052fcccf69e1"
  },
  {
    "url": "base/series/6.radar.html",
    "revision": "709940156094016ed140c8cd529399e4"
  },
  {
    "url": "base/series/7.tree.html",
    "revision": "a9666fbff7a3ba0c9d4463f2bf77e17b"
  },
  {
    "url": "base/series/8.treemap.html",
    "revision": "8d4bd63bc2d9d5f0177d014dff4af9ae"
  },
  {
    "url": "base/series/9.sunburst.html",
    "revision": "42a0fef0b8cf30ba6eda6471a8dd3e9b"
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
    "revision": "cd49c01114a7442f65a9267dca29ba83"
  },
  {
    "url": "mock/http.js",
    "revision": "a219140640bec4dfbe8f4fe88d351ed8"
  },
  {
    "url": "senior/1.micro/1.index.html",
    "revision": "fc52a6acc567daea04aa1e064c75956c"
  },
  {
    "url": "senior/1.micro/1.singlespa.html",
    "revision": "ab14ea02c8f977b2f982983755b1c39d"
  },
  {
    "url": "senior/1.micro/1.singlespa2.html",
    "revision": "43d1366f78090bd244d954fe5c26f238"
  },
  {
    "url": "senior/1.micro/2.qiankun.html",
    "revision": "1387fa30dc6c9ef32d8893ebbec4f894"
  },
  {
    "url": "senior/1.micro/2.qiankun2.html",
    "revision": "811087ef43a39497b73bade9ade57cd9"
  },
  {
    "url": "senior/1.micro/3.share.html",
    "revision": "ed43e74ab7ed88a34b96f6aa98e6acd2"
  },
  {
    "url": "senior/1.micro/4.dev.html",
    "revision": "5b71274723728e8758c877c80a61a8d4"
  },
  {
    "url": "senior/2.typescript/1.env.html",
    "revision": "2ffc0e94e86c21acda7eb176dc19d421"
  },
  {
    "url": "senior/2.typescript/1.index.html",
    "revision": "fd46c97f941c19ab8f377f6b6d54d715"
  },
  {
    "url": "senior/2.typescript/10.infer.html",
    "revision": "0f7520dbd715234bec6f1c1baa955fe8"
  },
  {
    "url": "senior/2.typescript/11.overlapping.html",
    "revision": "de53fd223f17a2a64255b1de9cf5c3e4"
  },
  {
    "url": "senior/2.typescript/12.condition.html",
    "revision": "adf36ce7a700b415e791047bcb115546"
  },
  {
    "url": "senior/2.typescript/13.builtin.html",
    "revision": "e0de699af9478375c8b885215dbf9798"
  },
  {
    "url": "senior/2.typescript/14.package.html",
    "revision": "93c77da354ba5a9f22d34ee0dae54319"
  },
  {
    "url": "senior/2.typescript/15.custom.html",
    "revision": "7f63226ea9aa469bce80962e6df11bc5"
  },
  {
    "url": "senior/2.typescript/16.unknown.html",
    "revision": "6d53018dbc98b1cd1ab6625f7cbc5595"
  },
  {
    "url": "senior/2.typescript/17.module.html",
    "revision": "edec854d14b8dc6a8ab512fe81761c09"
  },
  {
    "url": "senior/2.typescript/18.statement.html",
    "revision": "2f09cac48cc966412fffebff5a2208e7"
  },
  {
    "url": "senior/2.typescript/19.extend.html",
    "revision": "b41e96a4e4d79edc1640f1c26f7d9c7d"
  },
  {
    "url": "senior/2.typescript/2.base.html",
    "revision": "aa062a1c01141d949509cabbb78163d8"
  },
  {
    "url": "senior/2.typescript/3.deduction.html",
    "revision": "afd984919f1f58945c368c3854c259da"
  },
  {
    "url": "senior/2.typescript/4.type.html",
    "revision": "54c0fc4ed807120c0b4d0f080a626122"
  },
  {
    "url": "senior/2.typescript/5.class.html",
    "revision": "02a2ad91ce2cec5a75d20243c1893a5f"
  },
  {
    "url": "senior/2.typescript/6.interface.html",
    "revision": "7412c98ae8f0310cafd29bd340e650a7"
  },
  {
    "url": "senior/2.typescript/7.generic.html",
    "revision": "ea396f9a75f29bd82b10d3ffab210b64"
  },
  {
    "url": "senior/2.typescript/8.compatible.html",
    "revision": "7cd556ce1acdf158e114b34127108fc7"
  },
  {
    "url": "senior/2.typescript/9.protect.html",
    "revision": "9e578621cfee71ea7fded4f6e356ff8d"
  },
  {
    "url": "senior/3.deploy/1.index.html",
    "revision": "98bf1c1e3733ffbf783ba7f7f6eb64ab"
  },
  {
    "url": "senior/3.deploy/1.local.html",
    "revision": "f8cd0a3c3af0d3fc9e5ff9c7fc33bb6f"
  },
  {
    "url": "senior/3.deploy/2.gitlab.html",
    "revision": "4cb6c6b9e741d96e45b6653b386aefbd"
  },
  {
    "url": "senior/3.deploy/3.genkins.html",
    "revision": "618bb276a26287ea63a8c807ec8d8d7e"
  },
  {
    "url": "senior/3.deploy/4.centos.html",
    "revision": "ad0cf382af8ca54a1fd53aab2634e084"
  },
  {
    "url": "senior/3.deploy/5.nginx.html",
    "revision": "cb681f576367b70265dca873669c7add"
  },
  {
    "url": "senior/4.component/1.button.html",
    "revision": "2b4e58c3bce017fe95130ede9fe52884"
  },
  {
    "url": "senior/4.component/1.env.html",
    "revision": "6732b00eaaf1f318cf530cbc0d969c8e"
  },
  {
    "url": "senior/4.component/1.index.html",
    "revision": "675718346d40e7d5ea0022735b2ef0e6"
  },
  {
    "url": "senior/4.component/1.recursion.html",
    "revision": "feb41584da514d85459f7be731153ec9"
  },
  {
    "url": "senior/4.component/10.tree.html",
    "revision": "225ac28a043863a615e5919cdb1a527d"
  },
  {
    "url": "senior/4.component/12.table.html",
    "revision": "7656bc625bd6d81bc0b60e5bf82c4e9f"
  },
  {
    "url": "senior/4.component/13.publish.html",
    "revision": "d64096cbb08c815082b0607ce1fcfbd8"
  },
  {
    "url": "senior/4.component/2.dropdown.html",
    "revision": "0c98a4a5f4cf3e1835a484fa105a8e80"
  },
  {
    "url": "senior/4.component/3.dialog.html",
    "revision": "2dbe5059491e61397504a0ba6467e2e3"
  },
  {
    "url": "senior/4.component/3.form.html",
    "revision": "27430f21c757a23fae9327d29d756efa"
  },
  {
    "url": "senior/4.component/4.input.html",
    "revision": "f4bf089bddf9a1e65e63998a2d60fae5"
  },
  {
    "url": "senior/4.component/4.render.html",
    "revision": "42656e020663de8c951e502d59fce56d"
  },
  {
    "url": "senior/4.component/5.checkBox.html",
    "revision": "eed70a1c06fed71aaaa0a7503f79ba41"
  },
  {
    "url": "senior/4.component/6.cascader.html",
    "revision": "77ac3e26c57f59bdf35da0ea0b5e3024"
  },
  {
    "url": "senior/4.component/7.date.html",
    "revision": "77b5cd70f6787dd33829406a55947d89"
  },
  {
    "url": "senior/4.component/8.dispaly.html",
    "revision": "c04a55a4d757db972d9f5c6cb0653f2d"
  },
  {
    "url": "senior/4.component/9.alert.html",
    "revision": "95e20e11f01fccda6a068f956de402d2"
  },
  {
    "url": "senior/4.component/9.dynamics.html",
    "revision": "9c90153d8452a2dd9ffd59b36840235f"
  },
  {
    "url": "source/vue-cli2.x/1.index.html",
    "revision": "765d618f249454a39134d0d2cbf15bf5"
  },
  {
    "url": "source/vue-cli3.x/1.index.html",
    "revision": "4acf6e5dd9d5ba5b45472957d06d24d3"
  },
  {
    "url": "source/vue-router3.x/1.index.html",
    "revision": "c6b889ef6c0a11e0d5b8fa6bd678bb4c"
  },
  {
    "url": "source/vue-router3.x/2.origin.html",
    "revision": "d7e00c7599e496c5e14c7ee1c3f5d634"
  },
  {
    "url": "source/vue-router4.x/1.index.html",
    "revision": "73fe5b81504376b451d8c7acf31bf38d"
  },
  {
    "url": "source/vue2.x/1.index.html",
    "revision": "d9614cedfa4de84e6c38f2c1cbc62ef4"
  },
  {
    "url": "source/vue2.x/10.optimize.html",
    "revision": "320b0ca1c31cdbdc3c1198aec8a94108"
  },
  {
    "url": "source/vue2.x/11.gencode.html",
    "revision": "dfaec3a639cf31b5e1e885cc431807d0"
  },
  {
    "url": "source/vue2.x/12.mount.html",
    "revision": "09bf71750ff48e337a8db3637a6e0508"
  },
  {
    "url": "source/vue2.x/13._render.html",
    "revision": "fc6206f64d9dec8bb22ad5353dbd9db8"
  },
  {
    "url": "source/vue2.x/14._update.html",
    "revision": "e624ee2292eae0a5cbdf4788a817daa0"
  },
  {
    "url": "source/vue2.x/2.initGlobalAPI.html",
    "revision": "d2199fd509e78a5fd46c2017376a475d"
  },
  {
    "url": "source/vue2.x/3.initMixin.html",
    "revision": "4cc0f08878b59ec2ad2dfcb8157d06a5"
  },
  {
    "url": "source/vue2.x/4.stateMixin.html",
    "revision": "5b9e58e72ccab1d17bd6f058dd2a6453"
  },
  {
    "url": "source/vue2.x/5.eventsMixin.html",
    "revision": "f42c85620a11315e509bad7ba89c306b"
  },
  {
    "url": "source/vue2.x/6.lifecycleMixin.html",
    "revision": "41d3d0e4e71de43e87566db7b357ef1a"
  },
  {
    "url": "source/vue2.x/7.renderMixin.html",
    "revision": "20bb91fe3e048c29eecb4c6200272d5c"
  },
  {
    "url": "source/vue2.x/8.mount.html",
    "revision": "2ab689bccca5a7ce541d176210d4468b"
  },
  {
    "url": "source/vue2.x/9.ast.html",
    "revision": "1f77c7061d3dde16aa56acd06d98d8ed"
  },
  {
    "url": "source/vue3.x/1.index.html",
    "revision": "af78211ee983356a8e0454c1fb625743"
  },
  {
    "url": "source/vue3.x/10.optimize.html",
    "revision": "2173fc73a605631774f2e3dab7ab5d80"
  },
  {
    "url": "source/vue3.x/11.gencode.html",
    "revision": "86b0faeaa11600bb4056171f635bd887"
  },
  {
    "url": "source/vue3.x/12.mount.html",
    "revision": "1a924ddbee1d45f80762a901391af391"
  },
  {
    "url": "source/vue3.x/13._render.html",
    "revision": "c5a23729dd882b1e3cbddd8e70608bf0"
  },
  {
    "url": "source/vue3.x/14._update.html",
    "revision": "a09b5ca7ed305a780e24556db8d589b2"
  },
  {
    "url": "source/vue3.x/2.initGlobalAPI.html",
    "revision": "4ed9b87aa39c3decbad004334875d91c"
  },
  {
    "url": "source/vue3.x/3.initMixin.html",
    "revision": "12f4892278ce7cf48c7dd531c9161ac7"
  },
  {
    "url": "source/vue3.x/4.stateMixin.html",
    "revision": "905e3533ac86f9550ecf8d15a2cb1e10"
  },
  {
    "url": "source/vue3.x/5.eventsMixin.html",
    "revision": "f21de84305115358b4c652e6c3310b03"
  },
  {
    "url": "source/vue3.x/6.lifecycleMixin.html",
    "revision": "2bf428236bd6929abae1ae769a6c796c"
  },
  {
    "url": "source/vue3.x/7.renderMixin.html",
    "revision": "94218176ea94caf255d1f7a4543d2f25"
  },
  {
    "url": "source/vue3.x/8.mount.html",
    "revision": "3de9f29abafe78c7ede4efb1d90288ae"
  },
  {
    "url": "source/vue3.x/9.ast.html",
    "revision": "69d161cf093650be2a943210d33e228c"
  },
  {
    "url": "source/vuex3.x/1.index.html",
    "revision": "569b9b35a23c76103a77476b69fa6861"
  },
  {
    "url": "source/vuex3.x/2.use.html",
    "revision": "51fd34821907f684e361b4335fa2c352"
  },
  {
    "url": "source/vuex3.x/3.origin.html",
    "revision": "a498ee6b2bbe01dde48461542ebc7905"
  },
  {
    "url": "source/vuex4.x/1.index.html",
    "revision": "01a02c4c1aa3b784f8ed9b59bfb2d158"
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
