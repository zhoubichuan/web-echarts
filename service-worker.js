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
    "revision": "f423790ab1e494af2858fe2baf32ad2e"
  },
  {
    "url": "assets/css/0.styles.9a32f337.css",
    "revision": "913b3d1e74e20e5ee2b5664f1c960cba"
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
    "url": "assets/js/10.c30aa609.js",
    "revision": "847486a8eab72306b102b859b96ae1a4"
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
    "url": "assets/js/11.b160162f.js",
    "revision": "e4e139e69385a7e5c7c18e36d757a0d3"
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
    "url": "assets/js/12.1610c5ed.js",
    "revision": "555319dac41dfdd8b9925897edc278ee"
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
    "url": "assets/js/13.a3ff6246.js",
    "revision": "296c76e7385e32ccae137263af11f48b"
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
    "url": "assets/js/14.c9d4209b.js",
    "revision": "b54520c8c7d690547c45fc9fb7758575"
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
    "url": "assets/js/15.79960ad0.js",
    "revision": "599f0d5b48b1b8a59244f98366f7325a"
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
    "url": "assets/js/16.2ed321cf.js",
    "revision": "39d3d5e3c9f4f167c16066bb927c63fe"
  },
  {
    "url": "assets/js/17.f68cf0f8.js",
    "revision": "12e4a7b4fe3d799bd72ef9fb0d5ea785"
  },
  {
    "url": "assets/js/18.8365011f.js",
    "revision": "aabf9e85ea93adb8adbd91909430d39a"
  },
  {
    "url": "assets/js/19.0b70ebd2.js",
    "revision": "863c7cc69bb10bc0d547e9ed85dd7ea6"
  },
  {
    "url": "assets/js/2.67d89d6a.js",
    "revision": "5df49ba0b3cd387535d2eed3563353ca"
  },
  {
    "url": "assets/js/20.f0e63650.js",
    "revision": "4a017c4f51ad86c490c859c7eb526236"
  },
  {
    "url": "assets/js/21.e3dfd82c.js",
    "revision": "07c7f5d38b6674d8c7d7ec49bb4f873c"
  },
  {
    "url": "assets/js/22.84aa8296.js",
    "revision": "76ec7668569cc63f08339b1c2def85b4"
  },
  {
    "url": "assets/js/23.92875819.js",
    "revision": "a09c11d3a36f5c39495446a55758f1f3"
  },
  {
    "url": "assets/js/24.92fc58fc.js",
    "revision": "23abefe6ad2192c4bda7afac2a77e2ce"
  },
  {
    "url": "assets/js/25.c434ac4c.js",
    "revision": "c9f061fd089c2a63ccbd2f394810ac1e"
  },
  {
    "url": "assets/js/26.6e1eea83.js",
    "revision": "ad4ee9a46c40eef0c6cb5f5ec16833ed"
  },
  {
    "url": "assets/js/27.186e283d.js",
    "revision": "ed27c4ea266f0192305b3a46b7da30ac"
  },
  {
    "url": "assets/js/28.4c071c8b.js",
    "revision": "e07162afb74b2c58c351aca52ceaff19"
  },
  {
    "url": "assets/js/29.fc760f42.js",
    "revision": "6e275df803f72c6265461b12dea0cb89"
  },
  {
    "url": "assets/js/3.f7239ea6.js",
    "revision": "0d30886abb7435f81d547d6843317ba5"
  },
  {
    "url": "assets/js/30.654c002c.js",
    "revision": "83f2cfeb0dbd72441d3e65888e578967"
  },
  {
    "url": "assets/js/31.d1052a96.js",
    "revision": "ecbd1aea84057d094e6959cd79e4be9e"
  },
  {
    "url": "assets/js/32.3d8853ff.js",
    "revision": "dfd572207e7f47e2ccb98128d4f135bc"
  },
  {
    "url": "assets/js/33.ae7fc839.js",
    "revision": "5de8a7f0ba0757c1d4db6cf115e85bd8"
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
    "url": "assets/js/5.97b22bd1.js",
    "revision": "e925bac165ea61fc0028aaf4ebb8bfa4"
  },
  {
    "url": "assets/js/50.60c8b630.js",
    "revision": "c59923d7815db131ab02127e70bfa5db"
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
    "url": "assets/js/57.efa6b531.js",
    "revision": "a9a9b10b424660fb8f14e4733f8d59bb"
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
    "url": "assets/js/6.0ad1d289.js",
    "revision": "8529a87df20c31526e5875c529baa73c"
  },
  {
    "url": "assets/js/60.5f324924.js",
    "revision": "1d8683a9591a806c40b41017c20e9aac"
  },
  {
    "url": "assets/js/61.c2149ef5.js",
    "revision": "fa83409ac80197da243c797698fe4781"
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
    "url": "assets/js/7.8f746876.js",
    "revision": "0ee49a266320cc49a16a8724f4e5896a"
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
    "url": "assets/js/76.74456f07.js",
    "revision": "f409958f91c5eeea0e448d2f8bca581f"
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
    "url": "assets/js/8.e90a6011.js",
    "revision": "7b2ab4b5d92bf4c6461c6f9eb0644df9"
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
    "revision": "be130caf06b1262033fb6cf727c96acc"
  },
  {
    "url": "base/api/1.index.html",
    "revision": "93ec2ecdd94de1ff72cd5b9ecc21e4e1"
  },
  {
    "url": "base/api/2.echartsInstance.html",
    "revision": "4b5b4761ee5926f069776fedf7e9201b"
  },
  {
    "url": "base/api/3.action.html",
    "revision": "5cd962f2cd1df84118e2d770bf3ba0c4"
  },
  {
    "url": "base/api/4.events.html",
    "revision": "552b66ef47d51f91784a2de06a7dfa6a"
  },
  {
    "url": "base/components/1.index.html",
    "revision": "e68f215c08e53295bb90de496daf814c"
  },
  {
    "url": "base/components/1.legend.html",
    "revision": "98b2a335351c1ee27fcf876aa53ebf66"
  },
  {
    "url": "base/components/2.grid.html",
    "revision": "0503f8297ad46fd4bce4ab0cc14a05c5"
  },
  {
    "url": "base/components/2.polar.html",
    "revision": "bf3014f9d1b0984ec01ad9e298a76940"
  },
  {
    "url": "base/components/2.radiusAxis.html",
    "revision": "f6d9ce461bb37d09b502488c1e6f2797"
  },
  {
    "url": "base/components/2.xAxis.html",
    "revision": "446b94154f0211514b07b02d14d6ecb7"
  },
  {
    "url": "base/components/2.yAxis.html",
    "revision": "7901358b95d3e95c384ed53ef0e41116"
  },
  {
    "url": "base/components/3.angleAxis.html",
    "revision": "e9aa9368927c2e7f85f8591cf1b0112b"
  },
  {
    "url": "base/components/4.radar.html",
    "revision": "3d9cdfddf275b97e3a5f2602f6a000f6"
  },
  {
    "url": "base/components/5.dataZoom.html",
    "revision": "96f57a68efb38eaf25c2d28e50e0f4ec"
  },
  {
    "url": "base/components/6.visualMap.html",
    "revision": "340af8dd494c4923a7aefbf93134b08c"
  },
  {
    "url": "base/components/7.tooltip.html",
    "revision": "8253212a47b0a268a777775e2172ca27"
  },
  {
    "url": "base/components/8.geo.html",
    "revision": "53fc2cb1e37e6572e01d52bb01d38bc6"
  },
  {
    "url": "base/gl/1.index.html",
    "revision": "b258b43974be7f8d3b0192f580f1cc48"
  },
  {
    "url": "base/gl/1.scatter3D.html",
    "revision": "35f03b90a0b065cd4e8c1ff7931a2353"
  },
  {
    "url": "base/gl/10.flowGL.html",
    "revision": "665f1159f303635b6c0dd6d3500d09ff"
  },
  {
    "url": "base/gl/2.bar3D.html",
    "revision": "0a0961bb7f01c1e730a008668c28ba1e"
  },
  {
    "url": "base/gl/3.line3D.html",
    "revision": "b294a234350597783ade9fdf33ebfe07"
  },
  {
    "url": "base/gl/4.lines3D.html",
    "revision": "1a6b01199f3d4abd64a06e7a5b0c1900"
  },
  {
    "url": "base/gl/5.map3D.html",
    "revision": "6ef2e8ce8ff5342c4a5154a451657269"
  },
  {
    "url": "base/gl/6.surface.html",
    "revision": "262a18b71d04a99a88e0f686becac59c"
  },
  {
    "url": "base/gl/7.polygons3D.html",
    "revision": "be8e894cd1b19237fb494be427b904ae"
  },
  {
    "url": "base/gl/8.scatterGL.html",
    "revision": "fd7871549aa2eecb5cd1d5c2b09add77"
  },
  {
    "url": "base/gl/9.graphGL.html",
    "revision": "8bdb3b09eddcc755ea33efdeabcfa945"
  },
  {
    "url": "base/series/1.index.html",
    "revision": "c88962ccac44dcf991a580bdba16acc0"
  },
  {
    "url": "base/series/1.line.html",
    "revision": "9020a94d7025329032a987ec60ba4941"
  },
  {
    "url": "base/series/10.boxplot.html",
    "revision": "71cf68f1364c2db6cb82c6b7fca6a1f2"
  },
  {
    "url": "base/series/11.candlestick.html",
    "revision": "8c66e8f6367092a936a0209134e79072"
  },
  {
    "url": "base/series/12.heatmap.html",
    "revision": "714840e4dda2f8ef9fdd3edb178402c4"
  },
  {
    "url": "base/series/13.map.html",
    "revision": "b8e6d5bbf15d8a45edc1fe8f8c29e64a"
  },
  {
    "url": "base/series/14.parallel.html",
    "revision": "eff6eab045d33296299e367a37f7d2ad"
  },
  {
    "url": "base/series/15.lines.html",
    "revision": "5f7e9738a49f328e9c23fd82db65be46"
  },
  {
    "url": "base/series/16.graph.html",
    "revision": "f2c29568a04bde0b95297e39ee26e38e"
  },
  {
    "url": "base/series/17.sankey.html",
    "revision": "fe74d3ae6dd6ac57b7c66cd35559bc7a"
  },
  {
    "url": "base/series/18.funnel.html",
    "revision": "67331fd7684b88932700ebbfb36eb85f"
  },
  {
    "url": "base/series/19.gauge.html",
    "revision": "b69144b6a7c012b9a00004eeaccff53f"
  },
  {
    "url": "base/series/2.bar.html",
    "revision": "d21c979ad45bb2ba30d0234221e69167"
  },
  {
    "url": "base/series/20.pictorialBar.html",
    "revision": "09c68a03df9bf24d99d18c7236c188e0"
  },
  {
    "url": "base/series/21.themeRiver.html",
    "revision": "731cabfea3325488ce65171cab0e5f45"
  },
  {
    "url": "base/series/22.custom.html",
    "revision": "3862cfa5c7179843a912be196a382852"
  },
  {
    "url": "base/series/3.pie.html",
    "revision": "2ca5f43360a185a1811bf9245f3fcc59"
  },
  {
    "url": "base/series/4.scatter.html",
    "revision": "b44e1ec6c96dc3ece5bc0e9ab498007c"
  },
  {
    "url": "base/series/5.effectScatter.html",
    "revision": "63f3e87633e882a0b00adf5728a78f68"
  },
  {
    "url": "base/series/6.radar.html",
    "revision": "15bef4dcc64c45f4274681a22f7c90d5"
  },
  {
    "url": "base/series/7.tree.html",
    "revision": "62a05813da0c183619edb1b5d34a5ba9"
  },
  {
    "url": "base/series/8.treemap.html",
    "revision": "0e213550a486cdffa2b38210e67dc266"
  },
  {
    "url": "base/series/9.sunburst.html",
    "revision": "17d8b9da04222ff20d7392e28a8d0d31"
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
    "revision": "5fb83bd1637e8f8ee096d52891814405"
  },
  {
    "url": "mock/http.js",
    "revision": "a219140640bec4dfbe8f4fe88d351ed8"
  },
  {
    "url": "senior/1.micro/1.index.html",
    "revision": "ec20d35779a99986d088ee6ec7298711"
  },
  {
    "url": "senior/1.micro/1.singlespa.html",
    "revision": "4cae25f0e5e7476e3c27628b8033fa5a"
  },
  {
    "url": "senior/1.micro/1.singlespa2.html",
    "revision": "0e9b7c84fd81abdf6fcf00dd51209b45"
  },
  {
    "url": "senior/1.micro/2.qiankun.html",
    "revision": "f12be8f9dc5d1c494f5a2ec624cbc06a"
  },
  {
    "url": "senior/1.micro/2.qiankun2.html",
    "revision": "8cddf4aa83cfb79142577b6638747f3a"
  },
  {
    "url": "senior/1.micro/3.share.html",
    "revision": "58d5149f6cbb02863b8e6256688c8708"
  },
  {
    "url": "senior/1.micro/4.dev.html",
    "revision": "9779f858afb9c9041487b5701d5c01ed"
  },
  {
    "url": "senior/2.typescript/1.env.html",
    "revision": "29e5bfe70237974fbfb698329cce9d31"
  },
  {
    "url": "senior/2.typescript/1.index.html",
    "revision": "5cb4d1936b4366d1b57ca292a4d60106"
  },
  {
    "url": "senior/2.typescript/10.infer.html",
    "revision": "588459bee0319d7928016038db4f7c30"
  },
  {
    "url": "senior/2.typescript/11.overlapping.html",
    "revision": "75909ffc7e82beb7fbe1d7392aa211f5"
  },
  {
    "url": "senior/2.typescript/12.condition.html",
    "revision": "d367c98fe687a997243353e29de1115e"
  },
  {
    "url": "senior/2.typescript/13.builtin.html",
    "revision": "8dc43f9b07c82563b0b4597b65d2f190"
  },
  {
    "url": "senior/2.typescript/14.package.html",
    "revision": "7d381616e8dc317a76053b7fb5a83d7f"
  },
  {
    "url": "senior/2.typescript/15.custom.html",
    "revision": "53a9a065bf810e8006deac3baed30c5a"
  },
  {
    "url": "senior/2.typescript/16.unknown.html",
    "revision": "b281ee999fac7d81f70aedae28254e8a"
  },
  {
    "url": "senior/2.typescript/17.module.html",
    "revision": "80d2911242c7b8f705db6a3698f40eaa"
  },
  {
    "url": "senior/2.typescript/18.statement.html",
    "revision": "c021ea4d0f5a95bdf87bc88601eb64af"
  },
  {
    "url": "senior/2.typescript/19.extend.html",
    "revision": "3f2def00edf68833e1338ec4faf9d387"
  },
  {
    "url": "senior/2.typescript/2.base.html",
    "revision": "416facfd61da5341d775cd9a8a1653fc"
  },
  {
    "url": "senior/2.typescript/3.deduction.html",
    "revision": "acc0caeb36da224672b053c14efd3b31"
  },
  {
    "url": "senior/2.typescript/4.type.html",
    "revision": "08575feee4577f616b1c962bff0b9aa7"
  },
  {
    "url": "senior/2.typescript/5.class.html",
    "revision": "58bdf33efd228de825eebc5f0f13690f"
  },
  {
    "url": "senior/2.typescript/6.interface.html",
    "revision": "de4a19b5174e465a0c1010162a5d98a4"
  },
  {
    "url": "senior/2.typescript/7.generic.html",
    "revision": "47d2468e09cb54b77a4137eeadfb5781"
  },
  {
    "url": "senior/2.typescript/8.compatible.html",
    "revision": "234d760576dc0e032d99af3dfe840eeb"
  },
  {
    "url": "senior/2.typescript/9.protect.html",
    "revision": "15e9294e1d3aafe32deb050281bbb502"
  },
  {
    "url": "senior/3.deploy/1.index.html",
    "revision": "f692c434d8b6873048648c2746b9e29c"
  },
  {
    "url": "senior/3.deploy/1.local.html",
    "revision": "5cbfcd28fe62fc40baefa155c33a9c8f"
  },
  {
    "url": "senior/3.deploy/2.gitlab.html",
    "revision": "6d66b5c0089c9d54d6a0e2cd291c3095"
  },
  {
    "url": "senior/3.deploy/3.genkins.html",
    "revision": "e65983876a6f66a336d0085b07916f0e"
  },
  {
    "url": "senior/3.deploy/4.centos.html",
    "revision": "8be824a7a7488acfad7102f67481484b"
  },
  {
    "url": "senior/3.deploy/5.nginx.html",
    "revision": "52c6efaeb6fa2cee6a3b4ebe7b044930"
  },
  {
    "url": "senior/4.component/1.button.html",
    "revision": "93e1972fc3dc7ebd28d7a8025a9fb58f"
  },
  {
    "url": "senior/4.component/1.env.html",
    "revision": "7affdb1600289dc0e0ae4a2a0f598220"
  },
  {
    "url": "senior/4.component/1.index.html",
    "revision": "51b53d6a3234b07e2acec0cff2b8a916"
  },
  {
    "url": "senior/4.component/1.recursion.html",
    "revision": "c7f4d8731afdfc1623fba18ac7d49a7b"
  },
  {
    "url": "senior/4.component/10.tree.html",
    "revision": "09a36205c7dc9040ea5763ed41d5c73c"
  },
  {
    "url": "senior/4.component/12.table.html",
    "revision": "a5a654df8a49f64509d8024553e18bfa"
  },
  {
    "url": "senior/4.component/13.publish.html",
    "revision": "e7e366853a175f902f67fa03c7317a71"
  },
  {
    "url": "senior/4.component/2.dropdown.html",
    "revision": "23d997d4423c9cf3a9382d08a289cdaf"
  },
  {
    "url": "senior/4.component/3.dialog.html",
    "revision": "44187027b2a0bb102a6859f5c979db7d"
  },
  {
    "url": "senior/4.component/3.form.html",
    "revision": "44f8111bedf64d47b98f5438a77ef7ed"
  },
  {
    "url": "senior/4.component/4.input.html",
    "revision": "afaf623c9bf012834719bcf409b64fba"
  },
  {
    "url": "senior/4.component/4.render.html",
    "revision": "9a76ac0ff1120908fc2a0d5c10814cdf"
  },
  {
    "url": "senior/4.component/5.checkBox.html",
    "revision": "5c8a041b4f1e02b794506db7f21b877d"
  },
  {
    "url": "senior/4.component/6.cascader.html",
    "revision": "48873499fc48ad18008fac720e24c664"
  },
  {
    "url": "senior/4.component/7.date.html",
    "revision": "723e52d3d7a1175078c85034edcad8a0"
  },
  {
    "url": "senior/4.component/8.dispaly.html",
    "revision": "a412f7664bac1f2d51c50d1d40a80d7e"
  },
  {
    "url": "senior/4.component/9.alert.html",
    "revision": "d1fa4de9bc34504050c61c4672f7b7e4"
  },
  {
    "url": "senior/4.component/9.dynamics.html",
    "revision": "bf87bc4eb19aa4089961f181b76c6561"
  },
  {
    "url": "source/vue-cli2.x/1.index.html",
    "revision": "45eced8bd509026672f2269e441dd26f"
  },
  {
    "url": "source/vue-cli3.x/1.index.html",
    "revision": "dc5375e2dc816c9d73d850b5d0398d2b"
  },
  {
    "url": "source/vue-router3.x/1.index.html",
    "revision": "0d74bf89e4e135a8ded128d43e3df32d"
  },
  {
    "url": "source/vue-router3.x/2.origin.html",
    "revision": "cbcb75fad55529edf6509299dc4df567"
  },
  {
    "url": "source/vue-router4.x/1.index.html",
    "revision": "8128b79f6b09af7c1d02b967330c3d94"
  },
  {
    "url": "source/vue2.x/1.index.html",
    "revision": "95c01448713b66b3dbebb86faba9b6ca"
  },
  {
    "url": "source/vue2.x/10.optimize.html",
    "revision": "e9606bef99bb278553da109559505481"
  },
  {
    "url": "source/vue2.x/11.gencode.html",
    "revision": "18fa56e7da6656b1356af1c6905445d0"
  },
  {
    "url": "source/vue2.x/12.mount.html",
    "revision": "2a9d019eae010ed70659fc15b3191e7d"
  },
  {
    "url": "source/vue2.x/13._render.html",
    "revision": "b2a366498b07e97fff44b67b9a5e64c7"
  },
  {
    "url": "source/vue2.x/14._update.html",
    "revision": "82406d26e5773b5e218c0f430c5930ff"
  },
  {
    "url": "source/vue2.x/2.initGlobalAPI.html",
    "revision": "71f46258eaea6812a5c72a9623adf405"
  },
  {
    "url": "source/vue2.x/3.initMixin.html",
    "revision": "b7096afb494a60fa014168c8c4aa36be"
  },
  {
    "url": "source/vue2.x/4.stateMixin.html",
    "revision": "1023ba5382d0f61e568ddd2b4be88647"
  },
  {
    "url": "source/vue2.x/5.eventsMixin.html",
    "revision": "65d6919b7afbf027048bcd14475aaa75"
  },
  {
    "url": "source/vue2.x/6.lifecycleMixin.html",
    "revision": "318fb326c2d5e94b20d5fd2cdd47364e"
  },
  {
    "url": "source/vue2.x/7.renderMixin.html",
    "revision": "43e55892611117721f4b046180e7ef14"
  },
  {
    "url": "source/vue2.x/8.mount.html",
    "revision": "3365e76e3e1c72fadc86790e6166722c"
  },
  {
    "url": "source/vue2.x/9.ast.html",
    "revision": "a9900539b1a72b14365f65dfec46d03c"
  },
  {
    "url": "source/vue3.x/1.index.html",
    "revision": "517190e2a1f8c84d4060939634c1dac8"
  },
  {
    "url": "source/vue3.x/10.optimize.html",
    "revision": "30044cf613d332ffc4fcdfa538f0642d"
  },
  {
    "url": "source/vue3.x/11.gencode.html",
    "revision": "8e7f377fcbf917d7262a32fd760cba56"
  },
  {
    "url": "source/vue3.x/12.mount.html",
    "revision": "3f87e6fbace317bc133744ba7a4f58d6"
  },
  {
    "url": "source/vue3.x/13._render.html",
    "revision": "7d4d11812d3baf1575a2ae14a6d2a75b"
  },
  {
    "url": "source/vue3.x/14._update.html",
    "revision": "5bf108b88669be4460821ee9942562b2"
  },
  {
    "url": "source/vue3.x/2.initGlobalAPI.html",
    "revision": "2e5266a9c1e2b7a0ac5de2dd34d66a72"
  },
  {
    "url": "source/vue3.x/3.initMixin.html",
    "revision": "3889b89b16d0c28f486cefec3cca8fbb"
  },
  {
    "url": "source/vue3.x/4.stateMixin.html",
    "revision": "6f96a60a8e42d6a2266a0d8d6cd8f37e"
  },
  {
    "url": "source/vue3.x/5.eventsMixin.html",
    "revision": "0a5ba3e96af0d7cd357e0a9134caf0f6"
  },
  {
    "url": "source/vue3.x/6.lifecycleMixin.html",
    "revision": "a89f0abc3964bac43985b054c38a24a9"
  },
  {
    "url": "source/vue3.x/7.renderMixin.html",
    "revision": "f3615b049f516a22efe28c88d7467eb9"
  },
  {
    "url": "source/vue3.x/8.mount.html",
    "revision": "a8a536320dfc9e594bfa6e47d6980974"
  },
  {
    "url": "source/vue3.x/9.ast.html",
    "revision": "073bf2cdeb45bafae548508fd24e43cc"
  },
  {
    "url": "source/vuex3.x/1.index.html",
    "revision": "9b1bbc653f3ab1277b6a5318a70f9600"
  },
  {
    "url": "source/vuex3.x/2.use.html",
    "revision": "c1cb337ec7c0366bd015a52829e065e5"
  },
  {
    "url": "source/vuex3.x/3.origin.html",
    "revision": "43060b8174a9891acac420af2df1c420"
  },
  {
    "url": "source/vuex4.x/1.index.html",
    "revision": "a311c00482168c0a152b661110d8aaf3"
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
