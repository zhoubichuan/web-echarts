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
    "revision": "54ad1f261fd467104d735c93d9d3cd83"
  },
  {
    "url": "assets/css/0.styles.b062412b.css",
    "revision": "5d128be687f192f0d3640a0ea406b688"
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
    "url": "assets/js/10.48708377.js",
    "revision": "25db0800289f15802ae7d8bf17655771"
  },
  {
    "url": "assets/js/100.bdd631bc.js",
    "revision": "1365c5f4d4ca82f96fb324ef127769cc"
  },
  {
    "url": "assets/js/101.f0199a31.js",
    "revision": "2ceb7a44deb17e199d70f5eb1491ce64"
  },
  {
    "url": "assets/js/102.ec062b64.js",
    "revision": "1a65df01e937c991980e0176fdb67ade"
  },
  {
    "url": "assets/js/103.58db93b4.js",
    "revision": "12636207673cf2f890ae472cf6e87c1f"
  },
  {
    "url": "assets/js/104.db91f0dc.js",
    "revision": "96f36fb27412561972362a24a935eeba"
  },
  {
    "url": "assets/js/105.5707130f.js",
    "revision": "382ad20011d99ee2104fc3a20a445985"
  },
  {
    "url": "assets/js/106.1568d20c.js",
    "revision": "949486ae8b01511da821048624e399fc"
  },
  {
    "url": "assets/js/107.1cad4e28.js",
    "revision": "5f0f17618bae93042c7f3a7594d4e9c4"
  },
  {
    "url": "assets/js/108.3235da61.js",
    "revision": "e7cb71b0cc190f88986e64ccfdfd5e17"
  },
  {
    "url": "assets/js/109.98e3d18b.js",
    "revision": "fc5ba115cf84bf0619a2e4afc6194980"
  },
  {
    "url": "assets/js/11.d1f79162.js",
    "revision": "3a62013ce6a72237fea04dc4ab3ffaa5"
  },
  {
    "url": "assets/js/110.f14c5b49.js",
    "revision": "60dcbe8536d7afaf86c88f5197c49894"
  },
  {
    "url": "assets/js/111.0b8186d9.js",
    "revision": "aa93c39413a75d89cf284f4caec9d555"
  },
  {
    "url": "assets/js/112.e4f8777b.js",
    "revision": "074e62d30c71ad478a69a27ccb207a0b"
  },
  {
    "url": "assets/js/113.6bce9d5b.js",
    "revision": "a86c4231cd3fcf705290c30ea078c893"
  },
  {
    "url": "assets/js/114.8300e826.js",
    "revision": "446929358feba90dcca563d28b5245bc"
  },
  {
    "url": "assets/js/115.c4cc8038.js",
    "revision": "50461392858fbd8bda1559cbce69c841"
  },
  {
    "url": "assets/js/116.e220fbec.js",
    "revision": "d9f24178bc2917d043e7ebb51de5f4f8"
  },
  {
    "url": "assets/js/117.b39eb3db.js",
    "revision": "8753a28e633ec3a04de2a06d095bcb6d"
  },
  {
    "url": "assets/js/118.4fe13ffa.js",
    "revision": "2cbb3f2d6bd03d5d354b91555d8a0122"
  },
  {
    "url": "assets/js/119.94bad272.js",
    "revision": "beb0a4650aeac66ba89b4694d03673b7"
  },
  {
    "url": "assets/js/12.a70207ea.js",
    "revision": "e215ccafd5c138f5402cca54359972e2"
  },
  {
    "url": "assets/js/120.6eedc0f8.js",
    "revision": "b88809e65a8abdaf69f0a7edb0e67f5e"
  },
  {
    "url": "assets/js/121.beac8e5e.js",
    "revision": "b7f3082cc3026460c9a484e20448f0b4"
  },
  {
    "url": "assets/js/122.2b592095.js",
    "revision": "13dc1cb0a4787e52a93db9518d563bf0"
  },
  {
    "url": "assets/js/123.4845110e.js",
    "revision": "31f205f4d349df91fd2673c3c6a82f49"
  },
  {
    "url": "assets/js/124.e34ec01e.js",
    "revision": "75c2a5e1efae7eb64b048757c5ab548f"
  },
  {
    "url": "assets/js/125.c6bd1fdb.js",
    "revision": "5c5a524ca5cb03afe57e865f72ae772a"
  },
  {
    "url": "assets/js/126.a0ee88ab.js",
    "revision": "d895f8bf0633d46bf27b0e136c125aec"
  },
  {
    "url": "assets/js/127.817863bc.js",
    "revision": "d749212a6b48aa53d9221138b07e8d03"
  },
  {
    "url": "assets/js/128.82b8e8aa.js",
    "revision": "f27749227857b9c0e11eddcf3fae9199"
  },
  {
    "url": "assets/js/129.0051dd23.js",
    "revision": "3e0bd8f5e1ded30c25d20c44904a5d15"
  },
  {
    "url": "assets/js/13.8f370391.js",
    "revision": "3e94bbed356121915c97247c908f74dc"
  },
  {
    "url": "assets/js/130.10095244.js",
    "revision": "5e1c0bb8be6379fd659b934066b618dd"
  },
  {
    "url": "assets/js/131.3d1e84ea.js",
    "revision": "611d796d7acd501005ab86881bf15366"
  },
  {
    "url": "assets/js/132.e3f07ee8.js",
    "revision": "90d054d1bb68b57bb791af14c0c9f599"
  },
  {
    "url": "assets/js/133.db8bae83.js",
    "revision": "842dddb916686966a03fcd7b3c092995"
  },
  {
    "url": "assets/js/134.1758920d.js",
    "revision": "e881c820eb6f9221ca7a876c088e39cf"
  },
  {
    "url": "assets/js/135.8923c82b.js",
    "revision": "6b02c7c3e1a3070697ed99f379c815db"
  },
  {
    "url": "assets/js/136.fc107f2d.js",
    "revision": "48ec6cd69de73924a02dcbef2e607f07"
  },
  {
    "url": "assets/js/137.c11444f5.js",
    "revision": "7f5e629a804e4eab377ba33ab9b0a7d9"
  },
  {
    "url": "assets/js/138.3742b625.js",
    "revision": "79db157afee8916e74b7dc837cf37990"
  },
  {
    "url": "assets/js/139.e5b39242.js",
    "revision": "1faa4a2ba3c9255627764cfb03b46690"
  },
  {
    "url": "assets/js/14.30c207be.js",
    "revision": "894cd1113599efdf05311448e077a599"
  },
  {
    "url": "assets/js/140.40646063.js",
    "revision": "17187282539827c66a96920e122dd0be"
  },
  {
    "url": "assets/js/141.71e84abc.js",
    "revision": "c4434eeb933a340a1b4562b5fb934560"
  },
  {
    "url": "assets/js/142.0822674d.js",
    "revision": "60f24a63a98fe28ac9e74db8a9480cf5"
  },
  {
    "url": "assets/js/143.8a5a5721.js",
    "revision": "9c9a85329eeb9db187ddac572465b0a5"
  },
  {
    "url": "assets/js/144.5f0cf25d.js",
    "revision": "a6bd28d5ac1910ccd63dced0e366a763"
  },
  {
    "url": "assets/js/145.67495d5d.js",
    "revision": "0163fbc02474d741ec4293ecc34f3418"
  },
  {
    "url": "assets/js/146.74449f73.js",
    "revision": "dbf5c331ec59abc5f7ccc63b96d5384a"
  },
  {
    "url": "assets/js/147.93558d68.js",
    "revision": "33f8e32fb92012f6d927ce577935120c"
  },
  {
    "url": "assets/js/148.d2e94cdb.js",
    "revision": "9b4c271f4c786a6d925260c946e7cb73"
  },
  {
    "url": "assets/js/149.382d04cc.js",
    "revision": "2a73616df21a1882960fd2b9855128dd"
  },
  {
    "url": "assets/js/15.485b83e3.js",
    "revision": "9c1c150e83b00eda5f39aaac55a771bc"
  },
  {
    "url": "assets/js/150.d2d12311.js",
    "revision": "d603d09f88083a4e2501594cddfe599c"
  },
  {
    "url": "assets/js/151.d7752f5d.js",
    "revision": "004ab52810280fa294800970f5daa522"
  },
  {
    "url": "assets/js/152.91ca4cb6.js",
    "revision": "94973a5bc38d9bc2f068fbbe67100210"
  },
  {
    "url": "assets/js/153.0fbe9706.js",
    "revision": "e36794b598fd8d59912be2a983a1814e"
  },
  {
    "url": "assets/js/154.8c6c1f4f.js",
    "revision": "c1211b965ae918ec57106bdb6ea595b7"
  },
  {
    "url": "assets/js/155.71ab6413.js",
    "revision": "98009844285d1c6b8d059fa678645c97"
  },
  {
    "url": "assets/js/156.fd286a34.js",
    "revision": "47acdb770639ed4b4e7d40d471918bc8"
  },
  {
    "url": "assets/js/16.b009e036.js",
    "revision": "2f90bec6e86ad5661139abfcaba6fec5"
  },
  {
    "url": "assets/js/17.becd79f7.js",
    "revision": "56f3971987803673edcd2d04a35ad7da"
  },
  {
    "url": "assets/js/18.6d4ac479.js",
    "revision": "b95eef8d3a7fddddc454fcf9de339bb1"
  },
  {
    "url": "assets/js/19.d0fab292.js",
    "revision": "514d67ffad6acffc38111accc93c5262"
  },
  {
    "url": "assets/js/2.67d89d6a.js",
    "revision": "5df49ba0b3cd387535d2eed3563353ca"
  },
  {
    "url": "assets/js/20.486effd2.js",
    "revision": "3027f7af6471d5cdb5bc089467188a33"
  },
  {
    "url": "assets/js/21.093e8678.js",
    "revision": "8bb1bc5dc1faa2b429300294c1cea032"
  },
  {
    "url": "assets/js/22.30fd9196.js",
    "revision": "e2bc5a4b7966c285a7f0ef48bd752e25"
  },
  {
    "url": "assets/js/23.e79dc502.js",
    "revision": "1429b1d08ea22a4130fbdcdc2b57cc73"
  },
  {
    "url": "assets/js/24.e78816c4.js",
    "revision": "f0fba9cb1e006508c9090a117f19149e"
  },
  {
    "url": "assets/js/25.d8af2417.js",
    "revision": "1d9c2cd4bf8f4bf19cbcdec05020b14c"
  },
  {
    "url": "assets/js/26.5d940057.js",
    "revision": "228abb6b26f8bffda966886a9edc57e1"
  },
  {
    "url": "assets/js/27.0e4ae65c.js",
    "revision": "a742aafe0474ac60bd82f0000b00ab16"
  },
  {
    "url": "assets/js/28.f26cb8f1.js",
    "revision": "cfd6324ad1593d7e88e4e626e445bfee"
  },
  {
    "url": "assets/js/29.7439c392.js",
    "revision": "b8065fdcdbbf2512fe3a9eaf35c88e86"
  },
  {
    "url": "assets/js/3.f7239ea6.js",
    "revision": "0d30886abb7435f81d547d6843317ba5"
  },
  {
    "url": "assets/js/30.3e493ecd.js",
    "revision": "c4f05a5a13ab8ef3d797fa3268a07acc"
  },
  {
    "url": "assets/js/31.cfcd3e1b.js",
    "revision": "f70c22a606d36e634e02db91ace8e42b"
  },
  {
    "url": "assets/js/32.4e63460c.js",
    "revision": "021613fb48179bc1780d10c8025cdd23"
  },
  {
    "url": "assets/js/33.594f0966.js",
    "revision": "8ec8470eeb22dd5444cc9f43d941c027"
  },
  {
    "url": "assets/js/34.11b66d0e.js",
    "revision": "07bcf26c3bfbd7f436196049b8b3a802"
  },
  {
    "url": "assets/js/35.45c7d6c7.js",
    "revision": "bd9b62449b1742234e73f8588c299ef8"
  },
  {
    "url": "assets/js/36.a4d37b43.js",
    "revision": "76fc55330f4def6e6b0354fdfcb39311"
  },
  {
    "url": "assets/js/37.d2cec76f.js",
    "revision": "16bf365f16644e9d2cf07a15f72612ab"
  },
  {
    "url": "assets/js/38.c84c1762.js",
    "revision": "8b46914ed8a554acc45dfc4a8f115ffb"
  },
  {
    "url": "assets/js/39.9daecd76.js",
    "revision": "5420a67c5aaca984f8bca397e09de28e"
  },
  {
    "url": "assets/js/4.a059686f.js",
    "revision": "69717a030140f832d92f2c57540e1a98"
  },
  {
    "url": "assets/js/40.19567b31.js",
    "revision": "6373ec7911603f0a3adeb930fd10bbb4"
  },
  {
    "url": "assets/js/41.191b2fbd.js",
    "revision": "d7cfb8247757e671da1ec7c0fcad5106"
  },
  {
    "url": "assets/js/42.27aa7ae6.js",
    "revision": "3b90572535c652a0020ce8744a61ebf0"
  },
  {
    "url": "assets/js/43.1827012b.js",
    "revision": "bd3971ac330ac700badd99cd471ce604"
  },
  {
    "url": "assets/js/44.0b36ea2f.js",
    "revision": "a600097ae45eeb6d5e06e3e020d25805"
  },
  {
    "url": "assets/js/45.1be52bca.js",
    "revision": "f8b7ab14c66fee8f28820f792cac8135"
  },
  {
    "url": "assets/js/46.222ecd6f.js",
    "revision": "5e4ef6b332deccc7ca9cf0a407df4088"
  },
  {
    "url": "assets/js/47.a14f8abb.js",
    "revision": "5101cb804c5f3f6c5c4d3fba4c8e7de7"
  },
  {
    "url": "assets/js/48.175000ea.js",
    "revision": "eee1b88d213e95f5b74aa29e0fc4d19f"
  },
  {
    "url": "assets/js/49.64acfc5a.js",
    "revision": "4802f1e74c963b73c25bcd056a517f28"
  },
  {
    "url": "assets/js/5.b844aeb6.js",
    "revision": "9ad08d053d484381372f567334c4801b"
  },
  {
    "url": "assets/js/50.b92590ab.js",
    "revision": "daad3828fc50124a867d66e94a8e845d"
  },
  {
    "url": "assets/js/51.2e7fce0e.js",
    "revision": "4f5a8fc98f75484cb6f42605e7dae02a"
  },
  {
    "url": "assets/js/52.6f1acf74.js",
    "revision": "12b1236d966d14d32478698678920dea"
  },
  {
    "url": "assets/js/53.3825004a.js",
    "revision": "345272a37cac960314eb1d3a2fc57176"
  },
  {
    "url": "assets/js/54.62f43413.js",
    "revision": "b7ce05398745125eaeb972d2bc05730e"
  },
  {
    "url": "assets/js/55.e93364da.js",
    "revision": "6ca06a4240b761a1d60dcf8585b1c3e9"
  },
  {
    "url": "assets/js/56.203e1a5d.js",
    "revision": "937dfdf583b47fe1e3674e172e305b8f"
  },
  {
    "url": "assets/js/57.b70e8cf7.js",
    "revision": "7dacc8a9a898fcd240f53e877ad823f0"
  },
  {
    "url": "assets/js/58.099709d6.js",
    "revision": "8d617b683334bd5022b7fc816935131d"
  },
  {
    "url": "assets/js/59.cd52e938.js",
    "revision": "42a66aad312a9ed9dbb1eff1bf55c162"
  },
  {
    "url": "assets/js/6.4ff420e0.js",
    "revision": "a427d35c363651d9dae7cbfb8e879953"
  },
  {
    "url": "assets/js/60.6044ebb2.js",
    "revision": "f344874982a7a12f15a954e202c83385"
  },
  {
    "url": "assets/js/61.37cfd56c.js",
    "revision": "7d6243c5d657e7e42634ae306a5fac6c"
  },
  {
    "url": "assets/js/62.70ebec23.js",
    "revision": "f754ed592ba09c2651e79ade7d676109"
  },
  {
    "url": "assets/js/63.54d5eab6.js",
    "revision": "7c1eefb9c7e65edcac827d44de956266"
  },
  {
    "url": "assets/js/64.3a415449.js",
    "revision": "c14732990117e85a1495ce551f8ecb6f"
  },
  {
    "url": "assets/js/65.faa6b1c2.js",
    "revision": "fb915426754f3d25cc74ebeb0cf20f52"
  },
  {
    "url": "assets/js/66.ad5c9a5c.js",
    "revision": "9c20714219dbe39653784a6adda19220"
  },
  {
    "url": "assets/js/67.f4043a3b.js",
    "revision": "d8cb1a4f71e6867aa18c582331002feb"
  },
  {
    "url": "assets/js/68.ac374bf1.js",
    "revision": "1c25f9ab7aa9ca2f98dc0c00cf09c56b"
  },
  {
    "url": "assets/js/69.239947c0.js",
    "revision": "986db9389ffca69d50160f73cd55eb31"
  },
  {
    "url": "assets/js/7.efc5b27b.js",
    "revision": "677b7967629c5219548260b509479133"
  },
  {
    "url": "assets/js/70.ec7b61d5.js",
    "revision": "ca48397ae8717ab10bbf060a4c275448"
  },
  {
    "url": "assets/js/71.ef6a4057.js",
    "revision": "90595c29f4c38f0f238df83f84514bff"
  },
  {
    "url": "assets/js/72.9dfc1828.js",
    "revision": "6f0655d63bde40a30d03c4778874ffc2"
  },
  {
    "url": "assets/js/73.97b3c199.js",
    "revision": "e3aa006ab0dc97c66a9cd028860b2ba8"
  },
  {
    "url": "assets/js/74.5faee961.js",
    "revision": "2d35ba959eee699c5eea98f8c5a885a5"
  },
  {
    "url": "assets/js/75.72e0697c.js",
    "revision": "909cdeafe18bdd933fe3306ca6a0f9ec"
  },
  {
    "url": "assets/js/76.3c7aafe8.js",
    "revision": "14faaeb1b7e883dc8b1b854a007e6202"
  },
  {
    "url": "assets/js/77.c2a976ab.js",
    "revision": "77c9dd97c4b3c2330b5e5f1a65d40493"
  },
  {
    "url": "assets/js/78.5d17c920.js",
    "revision": "bcc8e7a1117691aebd3967fa864b2246"
  },
  {
    "url": "assets/js/79.91c23a23.js",
    "revision": "e1cea76f3a5b057fd59531423cfc950b"
  },
  {
    "url": "assets/js/8.04ffd8ab.js",
    "revision": "5a10bcb8a1067c4f5a0cb019d8670aba"
  },
  {
    "url": "assets/js/80.a3149661.js",
    "revision": "09c79fbd9b3b3168b12fa251482143b2"
  },
  {
    "url": "assets/js/81.4db60a60.js",
    "revision": "a59144173964d9fd4fc072c222f04bfd"
  },
  {
    "url": "assets/js/82.d8de36e8.js",
    "revision": "85eec9140a86f09cea520ed4621be67e"
  },
  {
    "url": "assets/js/83.5fab531b.js",
    "revision": "d640eae883ac233916afaf84b527ddba"
  },
  {
    "url": "assets/js/84.88b0be80.js",
    "revision": "abe4d246728ef10cd36a0c6773bbf05a"
  },
  {
    "url": "assets/js/85.11aaa305.js",
    "revision": "ad165243a8caba33b614c9fd1a1ed4a8"
  },
  {
    "url": "assets/js/86.6efe4e11.js",
    "revision": "c47d6935d32a22cc6fd117e7f5a6ef46"
  },
  {
    "url": "assets/js/87.1b1cfc05.js",
    "revision": "3d4644cee34cd6ad4f494c14c921a3c2"
  },
  {
    "url": "assets/js/88.904f1d3a.js",
    "revision": "9162a995677d0af0ef9f5277303be1e8"
  },
  {
    "url": "assets/js/89.32ab9048.js",
    "revision": "f8c0c208c1a025bdcfe6fd3e339eb116"
  },
  {
    "url": "assets/js/9.ec9fe3fb.js",
    "revision": "d1acb7feb8832b35a90d2831eb0cebf4"
  },
  {
    "url": "assets/js/90.159deae0.js",
    "revision": "5d30666e398a58337a10ac5cc529c110"
  },
  {
    "url": "assets/js/91.3491d01b.js",
    "revision": "0569e873b387f0012f1629871eaf2cf1"
  },
  {
    "url": "assets/js/92.1a5ae575.js",
    "revision": "40cda18557785124fc8db1e9cad213ea"
  },
  {
    "url": "assets/js/93.df52daf8.js",
    "revision": "8e53b38b2f6a82a91590e88dd36770c4"
  },
  {
    "url": "assets/js/94.e652b5a4.js",
    "revision": "9d64565470c85a6e1f6404fea3b63270"
  },
  {
    "url": "assets/js/95.453f37fb.js",
    "revision": "71aaae0456f1326b242ac8d8be2b5bc5"
  },
  {
    "url": "assets/js/96.7a27f113.js",
    "revision": "fefff7aeb9f8df01a74f022d0511c79e"
  },
  {
    "url": "assets/js/97.3f80c3d8.js",
    "revision": "812e96ad4c8c765856f46d4422a545d5"
  },
  {
    "url": "assets/js/98.2e02e7a3.js",
    "revision": "d2a29656f5059b8307dc579e9c52ffbd"
  },
  {
    "url": "assets/js/99.4b94b644.js",
    "revision": "3d878e3eb7f1d726e2ae3de33adbf727"
  },
  {
    "url": "base/api/1.echarts.html",
    "revision": "5edc03a773d7482c87afc7bc3ddb61f8"
  },
  {
    "url": "base/api/1.index.html",
    "revision": "b9bb1ea57909738be83ac4de9a740072"
  },
  {
    "url": "base/api/2.echartsInstance.html",
    "revision": "6da503f4b46cacee4b3f9a948f7c9685"
  },
  {
    "url": "base/api/3.action.html",
    "revision": "521501024b5566b61770460a7ef222ec"
  },
  {
    "url": "base/api/4.events.html",
    "revision": "aad8033fe8688a5618951cd9e9f0bfcf"
  },
  {
    "url": "base/components/1.index.html",
    "revision": "89525cf6902ba1f5e57c434cf332d492"
  },
  {
    "url": "base/components/1.legend.html",
    "revision": "05a7b655fffd22280a2b18a9109c1828"
  },
  {
    "url": "base/components/2.grid.html",
    "revision": "882da819164fce5063eb61cacda054e4"
  },
  {
    "url": "base/components/2.polar.html",
    "revision": "886d2524b4e682d3a251e63f71afae65"
  },
  {
    "url": "base/components/2.radiusAxis.html",
    "revision": "119c73e600af867a5b8d69a1dfd31dad"
  },
  {
    "url": "base/components/2.xAxis.html",
    "revision": "c2e8b0b55e1b91f6ba4f560508d21c35"
  },
  {
    "url": "base/components/2.yAxis.html",
    "revision": "538edc17f2f004de635234a15090e337"
  },
  {
    "url": "base/components/3.angleAxis.html",
    "revision": "bfb1a67b44d41d17ad782e3e1dea85b2"
  },
  {
    "url": "base/components/4.radar.html",
    "revision": "b5ad896564d0208ed6756ac9389ad6ee"
  },
  {
    "url": "base/components/5.dataZoom.html",
    "revision": "6a45362279142b24c47bc41d76406a81"
  },
  {
    "url": "base/components/6.visualMap.html",
    "revision": "851c166276e3b1b258e34dec93bbbfaf"
  },
  {
    "url": "base/components/7.tooltip.html",
    "revision": "7fe2f15bee73f815ffb709fa746b54b7"
  },
  {
    "url": "base/components/8.geo.html",
    "revision": "b76c8ebe1288e9e3bf2daa81e1586559"
  },
  {
    "url": "base/gl/1.index.html",
    "revision": "442f024d6d9cc760dba21e973a7dee17"
  },
  {
    "url": "base/gl/1.scatter3D.html",
    "revision": "3d72f9c40c616c1aeef580f070008539"
  },
  {
    "url": "base/gl/10.flowGL.html",
    "revision": "f7d1bf68da0cdd08e9ab8e9f863c53e4"
  },
  {
    "url": "base/gl/2.bar3D.html",
    "revision": "07a8d81caad6dcd6062b95bf5d3c8ac0"
  },
  {
    "url": "base/gl/3.line3D.html",
    "revision": "1d0dc57d047b2fb3c6ca18b2e0088f70"
  },
  {
    "url": "base/gl/4.lines3D.html",
    "revision": "a4cf7a9e9d4d49caa64a53974777ba86"
  },
  {
    "url": "base/gl/5.map3D.html",
    "revision": "9ed4b5fca8d3ef2c90c6943fe90e90d1"
  },
  {
    "url": "base/gl/6.surface.html",
    "revision": "a689c4f87d17ab826759e74b8b3e6649"
  },
  {
    "url": "base/gl/7.polygons3D.html",
    "revision": "a2894264d395f605f4ff857d99fe70b8"
  },
  {
    "url": "base/gl/8.scatterGL.html",
    "revision": "8d9da9b0ea4fdceb8301e1ff27a931f7"
  },
  {
    "url": "base/gl/9.graphGL.html",
    "revision": "f3a7a48d179f8adb441df9c9aa3f3294"
  },
  {
    "url": "base/series/1.index.html",
    "revision": "5d67dec660e9c0b92ff1d7f87ceff8e0"
  },
  {
    "url": "base/series/1.line.html",
    "revision": "41c8031b529177644d9df076880e4ecc"
  },
  {
    "url": "base/series/10.boxplot.html",
    "revision": "23bec7d7755c16107dafbf3ca99ab0d4"
  },
  {
    "url": "base/series/11.candlestick.html",
    "revision": "c227af81ec6634524c709c9cbdc69025"
  },
  {
    "url": "base/series/12.heatmap.html",
    "revision": "4375bd8b0f2841564d5f1c8796927f9a"
  },
  {
    "url": "base/series/13.map.html",
    "revision": "cea96d258bf8e958d1d4b775c9461c2b"
  },
  {
    "url": "base/series/14.parallel.html",
    "revision": "07689eb5339a84d3dfcc330e1ede76af"
  },
  {
    "url": "base/series/15.lines.html",
    "revision": "f844961d704c7d3e5b0d8000894c89b2"
  },
  {
    "url": "base/series/16.graph.html",
    "revision": "c188257459dbfbd901d2e2523d9b746f"
  },
  {
    "url": "base/series/17.sankey.html",
    "revision": "838c50d34fa15327ee6a08cfc498e556"
  },
  {
    "url": "base/series/18.funnel.html",
    "revision": "bca2f30476155e6c21725bcc72650c8b"
  },
  {
    "url": "base/series/19.gauge.html",
    "revision": "6f4c119d2b65a3b85ce9483a6e001ce7"
  },
  {
    "url": "base/series/2.bar.html",
    "revision": "15c311991f2a4a8f6240a5c5413e1b4c"
  },
  {
    "url": "base/series/20.pictorialBar.html",
    "revision": "7e5048ffa35a4cd94998f76b138970ae"
  },
  {
    "url": "base/series/21.themeRiver.html",
    "revision": "1a70955ecca04d19d1444fb0d28f8aeb"
  },
  {
    "url": "base/series/22.custom.html",
    "revision": "646864ab8249da6aba8a0802ac42e487"
  },
  {
    "url": "base/series/3.pie.html",
    "revision": "a4964a0b32452a185b9780260a277a12"
  },
  {
    "url": "base/series/4.scatter.html",
    "revision": "754458a67243674151f193f1292fc117"
  },
  {
    "url": "base/series/5.effectScatter.html",
    "revision": "d8d1dabfe3976bdf1627e4f720dd18cf"
  },
  {
    "url": "base/series/6.radar.html",
    "revision": "85c2a303217e7ae8af05c725ea05c499"
  },
  {
    "url": "base/series/7.tree.html",
    "revision": "7d73a81d9c2bc6f7789333d51f61e877"
  },
  {
    "url": "base/series/8.treemap.html",
    "revision": "783bcd144706d103ea665c3ccb14a930"
  },
  {
    "url": "base/series/9.sunburst.html",
    "revision": "1d72280e063c46471430603b035096e7"
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
    "revision": "cf632aa03f7136736a641504ec18e603"
  },
  {
    "url": "mock/http.js",
    "revision": "a219140640bec4dfbe8f4fe88d351ed8"
  },
  {
    "url": "senior/1.micro/1.index.html",
    "revision": "e7b6eb012f87e23cd75daca301771e05"
  },
  {
    "url": "senior/1.micro/1.singlespa.html",
    "revision": "226b9f34b7236fa0ecc42ba6dc81b666"
  },
  {
    "url": "senior/1.micro/1.singlespa2.html",
    "revision": "54c6c59d6a4b3c61c0b57e64e18c3c57"
  },
  {
    "url": "senior/1.micro/2.qiankun.html",
    "revision": "a4e15d61b616011c8673cf77bd3fc2a8"
  },
  {
    "url": "senior/1.micro/2.qiankun2.html",
    "revision": "8aac13f6c81fdd36eb8a50c9d499d112"
  },
  {
    "url": "senior/1.micro/3.share.html",
    "revision": "eb2cf23ac30177fe43154fa0bba663d2"
  },
  {
    "url": "senior/1.micro/4.dev.html",
    "revision": "214d86b876ca7b88504c7cedb01df795"
  },
  {
    "url": "senior/2.typescript/1.env.html",
    "revision": "26e89a5b88e9827b36f2be54111990d1"
  },
  {
    "url": "senior/2.typescript/1.index.html",
    "revision": "35d7672565ebbb1958ca635c14af5fbc"
  },
  {
    "url": "senior/2.typescript/10.infer.html",
    "revision": "b6984aa371d8f3bde493ba71cb7ebe0a"
  },
  {
    "url": "senior/2.typescript/11.overlapping.html",
    "revision": "31702eedc1090f6ba0bc750bffdae1d4"
  },
  {
    "url": "senior/2.typescript/12.condition.html",
    "revision": "623c53b66bd3d9364a56d8d38273f824"
  },
  {
    "url": "senior/2.typescript/13.builtin.html",
    "revision": "b353feb27d37ab95ec97bdec3ea58f5d"
  },
  {
    "url": "senior/2.typescript/14.package.html",
    "revision": "7c9f244c8c4a4d8a23783db23a08b507"
  },
  {
    "url": "senior/2.typescript/15.custom.html",
    "revision": "d60c5a1e4c2b310f49665447978ff7ef"
  },
  {
    "url": "senior/2.typescript/16.unknown.html",
    "revision": "3d0542398f0bd84b269cc129444aa590"
  },
  {
    "url": "senior/2.typescript/17.module.html",
    "revision": "a49818618ecf281166597b19a2895589"
  },
  {
    "url": "senior/2.typescript/18.statement.html",
    "revision": "27d47a9478031e90932adb244e7d8a3e"
  },
  {
    "url": "senior/2.typescript/19.extend.html",
    "revision": "f909435acc02d5796810234fe8c92dd0"
  },
  {
    "url": "senior/2.typescript/2.base.html",
    "revision": "bac86e14b01456c0137d9156e1173590"
  },
  {
    "url": "senior/2.typescript/3.deduction.html",
    "revision": "8517091dfbc6a4df9df3a0b6ce2bcab0"
  },
  {
    "url": "senior/2.typescript/4.type.html",
    "revision": "d9dfe491aec584065c864686b1c18d46"
  },
  {
    "url": "senior/2.typescript/5.class.html",
    "revision": "51f1c353979ad902604978861c84f5db"
  },
  {
    "url": "senior/2.typescript/6.interface.html",
    "revision": "f2715e1a8be64071ac723f5aedcdd892"
  },
  {
    "url": "senior/2.typescript/7.generic.html",
    "revision": "eb71263e8dc5287fc3a0358b87291202"
  },
  {
    "url": "senior/2.typescript/8.compatible.html",
    "revision": "60e70562a43ee5e8dfd711f45c8a26eb"
  },
  {
    "url": "senior/2.typescript/9.protect.html",
    "revision": "46a29ddef83ef5134a08ea4858db8724"
  },
  {
    "url": "senior/3.deploy/1.index.html",
    "revision": "314b238663f55086f64b13c1bf8c57cb"
  },
  {
    "url": "senior/3.deploy/1.local.html",
    "revision": "e16df45aef9e5c34d8415e3b98bb223a"
  },
  {
    "url": "senior/3.deploy/2.gitlab.html",
    "revision": "84cb73bd0ecb711629115febc09374aa"
  },
  {
    "url": "senior/3.deploy/3.genkins.html",
    "revision": "2018a569c5664db6cfec0c31543ecdf9"
  },
  {
    "url": "senior/3.deploy/4.centos.html",
    "revision": "053092446a9ca219719811d3c5ab0976"
  },
  {
    "url": "senior/3.deploy/5.nginx.html",
    "revision": "1c60f72a0318ffa0e1fdb9b36367da55"
  },
  {
    "url": "senior/4.component/1.button.html",
    "revision": "e1e3d3c591a9c7c3cd2bf1c272607081"
  },
  {
    "url": "senior/4.component/1.env.html",
    "revision": "6a06dd9c1c7abe36b5411c339b38528a"
  },
  {
    "url": "senior/4.component/1.index.html",
    "revision": "0b9d8a1081a711c65b6e1803170eb2c3"
  },
  {
    "url": "senior/4.component/1.recursion.html",
    "revision": "854cf7100096db0bc43e73e3111d522f"
  },
  {
    "url": "senior/4.component/10.tree.html",
    "revision": "5464bdd821eacfed66c2511913b47ecf"
  },
  {
    "url": "senior/4.component/12.table.html",
    "revision": "bdff07e7fc6c71290c798168c7b95550"
  },
  {
    "url": "senior/4.component/13.publish.html",
    "revision": "54f223ad2ed6cfbbf9579f4f227f782c"
  },
  {
    "url": "senior/4.component/2.dropdown.html",
    "revision": "0f2e52d6f49ad99f4a5148b01a5b695f"
  },
  {
    "url": "senior/4.component/3.dialog.html",
    "revision": "5c77197fa166ef652d876b6d43efecd3"
  },
  {
    "url": "senior/4.component/3.form.html",
    "revision": "e391502979cb4b1ae57adf0822bc94f2"
  },
  {
    "url": "senior/4.component/4.input.html",
    "revision": "23fefba472d885c72eb45499ebbd7a95"
  },
  {
    "url": "senior/4.component/4.render.html",
    "revision": "a24123cd3c0618c13179c42823946dae"
  },
  {
    "url": "senior/4.component/5.checkBox.html",
    "revision": "c637cbe796161985f17e067dff0591e0"
  },
  {
    "url": "senior/4.component/6.cascader.html",
    "revision": "8b5b10cae50862832aa7173dbaf244ba"
  },
  {
    "url": "senior/4.component/7.date.html",
    "revision": "7d852faa60f9f1e11c7cd2f29990c056"
  },
  {
    "url": "senior/4.component/8.dispaly.html",
    "revision": "18fa6cd5fe1dd3a39c5ff0f521c0d425"
  },
  {
    "url": "senior/4.component/9.alert.html",
    "revision": "23b58552aa9254836f9391bac065c200"
  },
  {
    "url": "senior/4.component/9.dynamics.html",
    "revision": "04f3dd9e3fb54f6dbb906b3559b7a7f7"
  },
  {
    "url": "source/vue-cli2.x/1.index.html",
    "revision": "69344d01b99c34af08b57f4a06901812"
  },
  {
    "url": "source/vue-cli3.x/1.index.html",
    "revision": "976aa8cebd4614422d54bfb23e5cec18"
  },
  {
    "url": "source/vue-router3.x/1.index.html",
    "revision": "369da77d3664294fada9772e18b63f2e"
  },
  {
    "url": "source/vue-router3.x/2.origin.html",
    "revision": "1712db6ff8e841d2ac06acfec0e1d9fb"
  },
  {
    "url": "source/vue-router4.x/1.index.html",
    "revision": "91ac41e2d821528e09f58f91d5130be3"
  },
  {
    "url": "source/vue2.x/1.index.html",
    "revision": "60e4b68a00e18d46341491a6c773bb1d"
  },
  {
    "url": "source/vue2.x/10.optimize.html",
    "revision": "d621ff130c3c82a66a316ba572efaa99"
  },
  {
    "url": "source/vue2.x/11.gencode.html",
    "revision": "6eee2d5be02b78fcd3d7050fc8bad881"
  },
  {
    "url": "source/vue2.x/12.mount.html",
    "revision": "d0f41db3241df86b81cdacbf727fedf1"
  },
  {
    "url": "source/vue2.x/13._render.html",
    "revision": "dabd0bc56898c52cf8488cf7480f9f2c"
  },
  {
    "url": "source/vue2.x/14._update.html",
    "revision": "e97ef9e4e2eb6bd2c08f3ef55510fe7b"
  },
  {
    "url": "source/vue2.x/2.initGlobalAPI.html",
    "revision": "6292126e6bdb248555fe8d349a5fd323"
  },
  {
    "url": "source/vue2.x/3.initMixin.html",
    "revision": "d693a5dedef897038248b21158bb15d3"
  },
  {
    "url": "source/vue2.x/4.stateMixin.html",
    "revision": "a89e1a58d1d101ecabb2ebf711d3c2be"
  },
  {
    "url": "source/vue2.x/5.eventsMixin.html",
    "revision": "32c3477526e1e815b5736559089be67e"
  },
  {
    "url": "source/vue2.x/6.lifecycleMixin.html",
    "revision": "a49a11dd3cee404a2da387c20f6aa316"
  },
  {
    "url": "source/vue2.x/7.renderMixin.html",
    "revision": "e18e974025aba8971eac77459ba8cc97"
  },
  {
    "url": "source/vue2.x/8.mount.html",
    "revision": "28356dc027d3fbe8cd00f125ba19f311"
  },
  {
    "url": "source/vue2.x/9.ast.html",
    "revision": "c1a3da9d79e41406f5f3d1983e4d1949"
  },
  {
    "url": "source/vue3.x/1.index.html",
    "revision": "b1267be60cc79bbc5e3b7d486a24588d"
  },
  {
    "url": "source/vue3.x/10.optimize.html",
    "revision": "e6d221557bbc47ca603006b72bf178ad"
  },
  {
    "url": "source/vue3.x/11.gencode.html",
    "revision": "c961ed20c4f7b6391c1d7b0311910a80"
  },
  {
    "url": "source/vue3.x/12.mount.html",
    "revision": "737c666f9f37cf5d8cb8bcf291a14c7e"
  },
  {
    "url": "source/vue3.x/13._render.html",
    "revision": "618be286968ffc91f213cb40e81e5613"
  },
  {
    "url": "source/vue3.x/14._update.html",
    "revision": "d7b275f1a1ae502baf56f896d4b6b5f9"
  },
  {
    "url": "source/vue3.x/2.initGlobalAPI.html",
    "revision": "3c2ec02d0a916fcf4facb182300cb671"
  },
  {
    "url": "source/vue3.x/3.initMixin.html",
    "revision": "d303f8b68641844ca1142c2d1ea783ff"
  },
  {
    "url": "source/vue3.x/4.stateMixin.html",
    "revision": "f63a35199d507103eda1efc83dbb3e82"
  },
  {
    "url": "source/vue3.x/5.eventsMixin.html",
    "revision": "aa3d9211f62fed5c3a3c638d7a0adc2f"
  },
  {
    "url": "source/vue3.x/6.lifecycleMixin.html",
    "revision": "b85d97a62d8ef6caa8430cdbc8d9b735"
  },
  {
    "url": "source/vue3.x/7.renderMixin.html",
    "revision": "0d4f5cae00eacbe53aceb7f4928cd5ed"
  },
  {
    "url": "source/vue3.x/8.mount.html",
    "revision": "2d578738bdf08db562a08feab93bafde"
  },
  {
    "url": "source/vue3.x/9.ast.html",
    "revision": "283e37216f2e3b41c8146f4170531b15"
  },
  {
    "url": "source/vuex3.x/1.index.html",
    "revision": "7a748db4dc05b15c25755c1e567ca76d"
  },
  {
    "url": "source/vuex3.x/2.use.html",
    "revision": "f8fef8066f53725cff37b2d96a3440e8"
  },
  {
    "url": "source/vuex3.x/3.origin.html",
    "revision": "5a0e27529d3eaa3a754c0b2cee838b88"
  },
  {
    "url": "source/vuex4.x/1.index.html",
    "revision": "8da5743126795a625216e6149517a1f5"
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
