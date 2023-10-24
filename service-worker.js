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
    "revision": "185e97ecd34c50f2f88c882ffac1f60c"
  },
  {
    "url": "assets/css/0.styles.0bd2c2a0.css",
    "revision": "40ecdcd8c4fc5fd50103e3469fea6037"
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
    "url": "assets/js/60.6044ebb2.js",
    "revision": "f344874982a7a12f15a954e202c83385"
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
    "url": "assets/js/8.d0fd576f.js",
    "revision": "b91f1fd98cf18928f8564a5ceb09f413"
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
    "revision": "6651c3180b91dab20dd06a2079277a3b"
  },
  {
    "url": "base/api/1.index.html",
    "revision": "e88dab6cf0e615f6a19259c245fe06e4"
  },
  {
    "url": "base/api/2.echartsInstance.html",
    "revision": "7e68f3e14c25384da0a724d66cbae163"
  },
  {
    "url": "base/api/3.action.html",
    "revision": "a3b523dab7634311b8f27955cd0fac10"
  },
  {
    "url": "base/api/4.events.html",
    "revision": "42671ff8749ff01b21280e219ce87c38"
  },
  {
    "url": "base/components/1.index.html",
    "revision": "766687e20cd2234cbd3a4d9fb7c33d74"
  },
  {
    "url": "base/components/1.legend.html",
    "revision": "1f2376dab6771141cc26448826cfa13c"
  },
  {
    "url": "base/components/2.grid.html",
    "revision": "2bc536b39a72c9cde0b9a5d411175d2c"
  },
  {
    "url": "base/components/2.polar.html",
    "revision": "ae433398a7c853e11a81a3944e2ac0aa"
  },
  {
    "url": "base/components/2.radiusAxis.html",
    "revision": "b5bbe65bbb9acf2bb881267f01e4d640"
  },
  {
    "url": "base/components/2.xAxis.html",
    "revision": "bcc2c80466be235627ae5b3d880fc68e"
  },
  {
    "url": "base/components/2.yAxis.html",
    "revision": "c2725bddf65e06c5544a77f3b8a6ca2a"
  },
  {
    "url": "base/components/3.angleAxis.html",
    "revision": "6f92abe60fa977d05a04b1ae71db85d2"
  },
  {
    "url": "base/components/4.radar.html",
    "revision": "1e7cdd49ddac90aa516d6dcb5c7b8e20"
  },
  {
    "url": "base/components/5.dataZoom.html",
    "revision": "bd8c6d0659ed00d35ca0e33836639494"
  },
  {
    "url": "base/components/6.visualMap.html",
    "revision": "57a372cb5a8ab1aad9e7ae6581f882db"
  },
  {
    "url": "base/components/7.tooltip.html",
    "revision": "f9d55751e343d17e48acf51fe26fd240"
  },
  {
    "url": "base/components/8.geo.html",
    "revision": "ec2cd60273c4c6d097b11ca714cea001"
  },
  {
    "url": "base/gl/1.index.html",
    "revision": "ddb5a445241b7330561b9a0defcdbe65"
  },
  {
    "url": "base/gl/1.scatter3D.html",
    "revision": "61937523ec8ab1c1cdc52e8af2f8bd4c"
  },
  {
    "url": "base/gl/10.flowGL.html",
    "revision": "97ae4a07ccf27749dee73644e1637a0d"
  },
  {
    "url": "base/gl/2.bar3D.html",
    "revision": "e937e66f8967f7f7d539285696f1d37d"
  },
  {
    "url": "base/gl/3.line3D.html",
    "revision": "11b2a48f9a302c8569e0390182f6610a"
  },
  {
    "url": "base/gl/4.lines3D.html",
    "revision": "59f6617bbd73f92d6fbf989e225a4530"
  },
  {
    "url": "base/gl/5.map3D.html",
    "revision": "451cecfe99b80928ef5a825b76e083d7"
  },
  {
    "url": "base/gl/6.surface.html",
    "revision": "fe9149f76f8b75de9b54c189fb3fd063"
  },
  {
    "url": "base/gl/7.polygons3D.html",
    "revision": "e6232a5649e85786d5a526450c8fe1e8"
  },
  {
    "url": "base/gl/8.scatterGL.html",
    "revision": "95e3d59badb39591cf6ec287a7614308"
  },
  {
    "url": "base/gl/9.graphGL.html",
    "revision": "5de54fd798a47a6134a0ed844551106e"
  },
  {
    "url": "base/series/1.index.html",
    "revision": "5ff6be86c58f9f4411c7a86c1899e88a"
  },
  {
    "url": "base/series/1.line.html",
    "revision": "a6c4d71553428199825a98f3359b9c50"
  },
  {
    "url": "base/series/10.boxplot.html",
    "revision": "8864a85a5bfdc265a1541d66e8095a4d"
  },
  {
    "url": "base/series/11.candlestick.html",
    "revision": "050815ec3ecb15b7b5b4c670b398fc5c"
  },
  {
    "url": "base/series/12.heatmap.html",
    "revision": "4f1b631c81e827b0bb6e07944872f300"
  },
  {
    "url": "base/series/13.map.html",
    "revision": "ff4d04be5264960b92019643f67d42d1"
  },
  {
    "url": "base/series/14.parallel.html",
    "revision": "9c2ad4d57d3f7fa05d7d46f2e894b39d"
  },
  {
    "url": "base/series/15.lines.html",
    "revision": "0e94f24587fec25521cca38126baca06"
  },
  {
    "url": "base/series/16.graph.html",
    "revision": "05a68512e68006f813bd50588d8b7906"
  },
  {
    "url": "base/series/17.sankey.html",
    "revision": "ff10ffb175c957c39c2f6472998d49a5"
  },
  {
    "url": "base/series/18.funnel.html",
    "revision": "22a7a5396f66145e887f46e3b7f77833"
  },
  {
    "url": "base/series/19.gauge.html",
    "revision": "b52f1e8fbf1c1cdf023a2affa978d922"
  },
  {
    "url": "base/series/2.bar.html",
    "revision": "132a40c914239e9c973afd571037e1f6"
  },
  {
    "url": "base/series/20.pictorialBar.html",
    "revision": "ae40834fbf6e836f39a685178520862d"
  },
  {
    "url": "base/series/21.themeRiver.html",
    "revision": "b50b1a5399d994823b146c2f2e8c0cea"
  },
  {
    "url": "base/series/22.custom.html",
    "revision": "7d12ea5caec4cb40d98d33c91751ec86"
  },
  {
    "url": "base/series/3.pie.html",
    "revision": "fc41a265fb4fe8ff85ab8bdcbfec4dea"
  },
  {
    "url": "base/series/4.scatter.html",
    "revision": "296347ccedfee7e1e1456abb3620c0ea"
  },
  {
    "url": "base/series/5.effectScatter.html",
    "revision": "3d8537ef5e052fee9ebf9c9130ad9483"
  },
  {
    "url": "base/series/6.radar.html",
    "revision": "6b07d0546bd3ff1ba26c0c263ec52977"
  },
  {
    "url": "base/series/7.tree.html",
    "revision": "2e5075883f4a763245b37919660dea49"
  },
  {
    "url": "base/series/8.treemap.html",
    "revision": "2580f61b095dac4058e0a053c8f004d0"
  },
  {
    "url": "base/series/9.sunburst.html",
    "revision": "5458c34cfae066e9b862c3b0a30077d7"
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
    "revision": "c76acf77a465e446b8a9c2567fb371d1"
  },
  {
    "url": "mock/http.js",
    "revision": "a219140640bec4dfbe8f4fe88d351ed8"
  },
  {
    "url": "senior/1.micro/1.index.html",
    "revision": "4a08969760943f9c5c6a17b266104ed3"
  },
  {
    "url": "senior/1.micro/1.singlespa.html",
    "revision": "863d861f402299d3c26bcb1f80912edb"
  },
  {
    "url": "senior/1.micro/1.singlespa2.html",
    "revision": "bbd0c6ad46d079f9b8c42f62a16d2669"
  },
  {
    "url": "senior/1.micro/2.qiankun.html",
    "revision": "7fd41d6e4408f2e96cde28a2b6d19f26"
  },
  {
    "url": "senior/1.micro/2.qiankun2.html",
    "revision": "3dd6b3ec33c34fc3fc2b3d97c6d13090"
  },
  {
    "url": "senior/1.micro/3.share.html",
    "revision": "6a84e5dd765f684e5200edf292549836"
  },
  {
    "url": "senior/1.micro/4.dev.html",
    "revision": "f9778b61ff4f3a0bcafacd3a020ebcf2"
  },
  {
    "url": "senior/2.typescript/1.env.html",
    "revision": "1674fc3d41a7d9d9e249762067eb4e51"
  },
  {
    "url": "senior/2.typescript/1.index.html",
    "revision": "8f1963bfcce5a1bb8b2aaf025e83c75c"
  },
  {
    "url": "senior/2.typescript/10.infer.html",
    "revision": "de075e2266c97772410d68c36c468600"
  },
  {
    "url": "senior/2.typescript/11.overlapping.html",
    "revision": "0c4b59f80caad33447f21c99a7ccb812"
  },
  {
    "url": "senior/2.typescript/12.condition.html",
    "revision": "8d60a889a505eda3eb53049561323ad4"
  },
  {
    "url": "senior/2.typescript/13.builtin.html",
    "revision": "9761d3020dd3d7f91e20cc0b53826782"
  },
  {
    "url": "senior/2.typescript/14.package.html",
    "revision": "d4c551b0b37dc459a11f6390a695b2a3"
  },
  {
    "url": "senior/2.typescript/15.custom.html",
    "revision": "f009b16d57e1eb7d5470c8061c164fee"
  },
  {
    "url": "senior/2.typescript/16.unknown.html",
    "revision": "66ae939c283ca7ccfd13ce54db8bec09"
  },
  {
    "url": "senior/2.typescript/17.module.html",
    "revision": "1fdd376b7dd082302199a8963a032dac"
  },
  {
    "url": "senior/2.typescript/18.statement.html",
    "revision": "cee22c9a684d76ea51964af3f8519bb9"
  },
  {
    "url": "senior/2.typescript/19.extend.html",
    "revision": "7fae5cc8890c30a262be225ba74b6802"
  },
  {
    "url": "senior/2.typescript/2.base.html",
    "revision": "186cca765fee0daa1d5cc22b9e2d4991"
  },
  {
    "url": "senior/2.typescript/3.deduction.html",
    "revision": "0663ce99ae75cc2b773b400e2034422d"
  },
  {
    "url": "senior/2.typescript/4.type.html",
    "revision": "ac5e543da589ea0be82e7dfa387b8026"
  },
  {
    "url": "senior/2.typescript/5.class.html",
    "revision": "fb1af043c84407a12e8967e21b6959f7"
  },
  {
    "url": "senior/2.typescript/6.interface.html",
    "revision": "33d95bcc83d2f076d48f29fd70362ff8"
  },
  {
    "url": "senior/2.typescript/7.generic.html",
    "revision": "aafe57bc12fcfd13e1e5d4fba58ab969"
  },
  {
    "url": "senior/2.typescript/8.compatible.html",
    "revision": "86a230cb227bdf322e3c504624ec955c"
  },
  {
    "url": "senior/2.typescript/9.protect.html",
    "revision": "d27bded4ae75f80aee57ad2fa2f5be0a"
  },
  {
    "url": "senior/3.deploy/1.index.html",
    "revision": "7bdbaff4efc8a824c4d653242ba4edfa"
  },
  {
    "url": "senior/3.deploy/1.local.html",
    "revision": "ddb2b60763b77299fb94a4cb6edf0b8a"
  },
  {
    "url": "senior/3.deploy/2.gitlab.html",
    "revision": "c30a3d03405d3d5ff3bc07d5338b6909"
  },
  {
    "url": "senior/3.deploy/3.genkins.html",
    "revision": "5507713918df41b78dda72b84d90cf0d"
  },
  {
    "url": "senior/3.deploy/4.centos.html",
    "revision": "8fb703cc1108d6ffbaed0d367b94d95f"
  },
  {
    "url": "senior/3.deploy/5.nginx.html",
    "revision": "5b240a48059e795906c5e6263dc15936"
  },
  {
    "url": "senior/4.component/1.button.html",
    "revision": "875ded03c29947394626fe630a0913f7"
  },
  {
    "url": "senior/4.component/1.env.html",
    "revision": "73b6a2077e465b6d45bdee564d90332b"
  },
  {
    "url": "senior/4.component/1.index.html",
    "revision": "a4c68f08716e665a0d8d8da58b51acc6"
  },
  {
    "url": "senior/4.component/1.recursion.html",
    "revision": "ca5372ae35856b96d580a71b964e233b"
  },
  {
    "url": "senior/4.component/10.tree.html",
    "revision": "d3d2b7fdac1803643c6de1a2437b3d84"
  },
  {
    "url": "senior/4.component/12.table.html",
    "revision": "d61e0c0d22d1eb4793a2548f69555bb2"
  },
  {
    "url": "senior/4.component/13.publish.html",
    "revision": "c9582287c574de176d423f7e254c5723"
  },
  {
    "url": "senior/4.component/2.dropdown.html",
    "revision": "9c652251ce6a64a68157ad3f7a7c569c"
  },
  {
    "url": "senior/4.component/3.dialog.html",
    "revision": "fcf6520aec82a7d7d2e6083c8da0e081"
  },
  {
    "url": "senior/4.component/3.form.html",
    "revision": "96c47bbfa31288833f34360e16731bbf"
  },
  {
    "url": "senior/4.component/4.input.html",
    "revision": "22aa6f37bb0ea24d0ea4dec83ac66659"
  },
  {
    "url": "senior/4.component/4.render.html",
    "revision": "3875e47407b9a25ce8ad2aaf919b40ad"
  },
  {
    "url": "senior/4.component/5.checkBox.html",
    "revision": "22a6a9dafc9dec33979bae68ab29358e"
  },
  {
    "url": "senior/4.component/6.cascader.html",
    "revision": "10fbf91b22cbaadd0c9431636c4bba52"
  },
  {
    "url": "senior/4.component/7.date.html",
    "revision": "82468cb8ff22dd62e7783a9084bb4df0"
  },
  {
    "url": "senior/4.component/8.dispaly.html",
    "revision": "01428b02a314272b56d30212e9df7c32"
  },
  {
    "url": "senior/4.component/9.alert.html",
    "revision": "343c8001dad2cc852f90541dd6b933b1"
  },
  {
    "url": "senior/4.component/9.dynamics.html",
    "revision": "0b5b635ff0baffa1c02de112fb0c71b2"
  },
  {
    "url": "source/vue-cli2.x/1.index.html",
    "revision": "5a74b632785c242e91474b7339e33ec7"
  },
  {
    "url": "source/vue-cli3.x/1.index.html",
    "revision": "b4a077e75d9f3b5c489cb2a4f48b99e5"
  },
  {
    "url": "source/vue-router3.x/1.index.html",
    "revision": "6895b0f514ea3d0f429ebffb2da51e8e"
  },
  {
    "url": "source/vue-router3.x/2.origin.html",
    "revision": "dfc5366ddb97274138cf1f25a1e2f928"
  },
  {
    "url": "source/vue-router4.x/1.index.html",
    "revision": "80d7c249a065c92b5d1de415687f97f7"
  },
  {
    "url": "source/vue2.x/1.index.html",
    "revision": "705441bc5519312708b92f4d88bbcdd2"
  },
  {
    "url": "source/vue2.x/10.optimize.html",
    "revision": "d1082472610414a856b976d1daab364d"
  },
  {
    "url": "source/vue2.x/11.gencode.html",
    "revision": "b4dcc197d4004c0a921be4fe0d9022c7"
  },
  {
    "url": "source/vue2.x/12.mount.html",
    "revision": "0d2d5c430b2a42c838525c49d86ec8e8"
  },
  {
    "url": "source/vue2.x/13._render.html",
    "revision": "53832b64280fbae3c3390ad3a885f536"
  },
  {
    "url": "source/vue2.x/14._update.html",
    "revision": "3d32389695bba6d85fa670d10c3fdf1f"
  },
  {
    "url": "source/vue2.x/2.initGlobalAPI.html",
    "revision": "b81f5070678750e8614ae9a09ef32079"
  },
  {
    "url": "source/vue2.x/3.initMixin.html",
    "revision": "0fa863c12e8d2f88296226a7a4bc2035"
  },
  {
    "url": "source/vue2.x/4.stateMixin.html",
    "revision": "59f4f7cf219ea877fca674306c2d5a3e"
  },
  {
    "url": "source/vue2.x/5.eventsMixin.html",
    "revision": "de7d3ba2cca0e2b90c0da946073761e4"
  },
  {
    "url": "source/vue2.x/6.lifecycleMixin.html",
    "revision": "a429d910ba04d1af2bd4a6682b2d67aa"
  },
  {
    "url": "source/vue2.x/7.renderMixin.html",
    "revision": "057a298c845cd479fc5098196e65644a"
  },
  {
    "url": "source/vue2.x/8.mount.html",
    "revision": "3928e8624e0ccc4cbdf2840ebc49c9d3"
  },
  {
    "url": "source/vue2.x/9.ast.html",
    "revision": "b0e9babbc8bfec9d401aa30cf4f67a3d"
  },
  {
    "url": "source/vue3.x/1.index.html",
    "revision": "3b778b2d03a3345b5a3f0c0efe55dd79"
  },
  {
    "url": "source/vue3.x/10.optimize.html",
    "revision": "d3d36044ecd0330421c62000fcdcadf9"
  },
  {
    "url": "source/vue3.x/11.gencode.html",
    "revision": "e5dd0d6e4e286025da4efe9ecf54e92b"
  },
  {
    "url": "source/vue3.x/12.mount.html",
    "revision": "5906a1b45e2a9590668aa4c4997f55b3"
  },
  {
    "url": "source/vue3.x/13._render.html",
    "revision": "60dc59cb831deb1f55c7c4e21d85393a"
  },
  {
    "url": "source/vue3.x/14._update.html",
    "revision": "04d2c9653589a58ca8b66c422d858c98"
  },
  {
    "url": "source/vue3.x/2.initGlobalAPI.html",
    "revision": "1b8be2485070d9b88d98b450378daed7"
  },
  {
    "url": "source/vue3.x/3.initMixin.html",
    "revision": "7745c50051b79773381e26f63d44c00f"
  },
  {
    "url": "source/vue3.x/4.stateMixin.html",
    "revision": "49f1566e7dce744aace117cfd5af19f2"
  },
  {
    "url": "source/vue3.x/5.eventsMixin.html",
    "revision": "165979f50e363256f0b347f55768966f"
  },
  {
    "url": "source/vue3.x/6.lifecycleMixin.html",
    "revision": "203b1d23ab8ee8cdfaa86cec2d455b76"
  },
  {
    "url": "source/vue3.x/7.renderMixin.html",
    "revision": "159d079178137a5d5772fb182c219b60"
  },
  {
    "url": "source/vue3.x/8.mount.html",
    "revision": "ef044042d45cbd99be9d61e1497c5ef5"
  },
  {
    "url": "source/vue3.x/9.ast.html",
    "revision": "8d742ec365de44dea0d9c6f575824168"
  },
  {
    "url": "source/vuex3.x/1.index.html",
    "revision": "cc1a2e60ce9655da1384bd65377a33a2"
  },
  {
    "url": "source/vuex3.x/2.use.html",
    "revision": "028ecb5e3fc8f5761ddd6010e2fee8ba"
  },
  {
    "url": "source/vuex3.x/3.origin.html",
    "revision": "33e09b932f789dee97da90d72e338f78"
  },
  {
    "url": "source/vuex4.x/1.index.html",
    "revision": "d2c3f4e435d5d608e4185ecff5be389b"
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
