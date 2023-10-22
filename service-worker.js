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
    "revision": "6ebc73dd866d1d7a3a6eab993f202496"
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
    "revision": "ef8f188ed017b13979565f7170075e7c"
  },
  {
    "url": "base/api/1.index.html",
    "revision": "09047e48d1393e6b7d1a50551f7a4afd"
  },
  {
    "url": "base/api/2.echartsInstance.html",
    "revision": "90821ca128e7d0e4f4d0691b3c931722"
  },
  {
    "url": "base/api/3.action.html",
    "revision": "f02566c93e95207dd21c6c2affc45b4e"
  },
  {
    "url": "base/api/4.events.html",
    "revision": "69be450085dcdfacf65b08cdbc1dc46a"
  },
  {
    "url": "base/components/1.index.html",
    "revision": "1d365fd2e36409335158c8d71a522e44"
  },
  {
    "url": "base/components/1.legend.html",
    "revision": "2a45cfabb8af55325d774cbb63fd7d48"
  },
  {
    "url": "base/components/2.grid.html",
    "revision": "b1a7022b586cb2178a7f6811d2036bff"
  },
  {
    "url": "base/components/2.polar.html",
    "revision": "42f21bec781478288c274b83f48d8e8f"
  },
  {
    "url": "base/components/2.radiusAxis.html",
    "revision": "6407ec82ac564676385c1ec8fc1527b0"
  },
  {
    "url": "base/components/2.xAxis.html",
    "revision": "3e3abdcfacdce700e6ae9dcd19b5016f"
  },
  {
    "url": "base/components/2.yAxis.html",
    "revision": "7e2cecd807d1ad0bdd88d7d0fb04e2f1"
  },
  {
    "url": "base/components/3.angleAxis.html",
    "revision": "2f526c0651ad6a8f497bd14beada9a35"
  },
  {
    "url": "base/components/4.radar.html",
    "revision": "fa0b1d86475af41de469ce77da74e6e3"
  },
  {
    "url": "base/components/5.dataZoom.html",
    "revision": "86f49249eb86790c578a12f37f86d9e5"
  },
  {
    "url": "base/components/6.visualMap.html",
    "revision": "45aebaf180cc0b1642f356c6c802fc46"
  },
  {
    "url": "base/components/7.tooltip.html",
    "revision": "a498ab18c4153d456d4d683a0cb89995"
  },
  {
    "url": "base/components/8.geo.html",
    "revision": "1ce215dc6dbc765d61b95d219eaf82b3"
  },
  {
    "url": "base/gl/1.index.html",
    "revision": "f76c5d7272db4024c753734fc3fe08b9"
  },
  {
    "url": "base/gl/1.scatter3D.html",
    "revision": "cf252170f8285d163f581b6000dd92c6"
  },
  {
    "url": "base/gl/10.flowGL.html",
    "revision": "5655e3ae40a4e6f304f6596daaeaa0a2"
  },
  {
    "url": "base/gl/2.bar3D.html",
    "revision": "0b9646d7eb0ffafdf6e0707ed9591f4b"
  },
  {
    "url": "base/gl/3.line3D.html",
    "revision": "f3372bcf7ff25fbc52c1152697e99a7c"
  },
  {
    "url": "base/gl/4.lines3D.html",
    "revision": "3e88091f2fc0cf168d48e2b9b45cddc9"
  },
  {
    "url": "base/gl/5.map3D.html",
    "revision": "c8d49fe3016ec465bb64e640a95a38b7"
  },
  {
    "url": "base/gl/6.surface.html",
    "revision": "e8f0a9a2b1df95c149d195c402ed6f04"
  },
  {
    "url": "base/gl/7.polygons3D.html",
    "revision": "513bf41be1fa10dd247ab6ac87bcf521"
  },
  {
    "url": "base/gl/8.scatterGL.html",
    "revision": "d4f00cdc5c47503a33a3829162dc270f"
  },
  {
    "url": "base/gl/9.graphGL.html",
    "revision": "d9775f4cc82960c8d889427ecd1061ac"
  },
  {
    "url": "base/series/1.index.html",
    "revision": "055a87a09ff379f4cb4a4589397c32df"
  },
  {
    "url": "base/series/1.line.html",
    "revision": "c075e03442534b31f49f360a7fa81483"
  },
  {
    "url": "base/series/10.boxplot.html",
    "revision": "bebb710f0f7e1bbd685f5b1ea6be3c61"
  },
  {
    "url": "base/series/11.candlestick.html",
    "revision": "0df1dee4ab0018f9edc585c552512b33"
  },
  {
    "url": "base/series/12.heatmap.html",
    "revision": "a8c08522fb0f933ebd752ff30749c93a"
  },
  {
    "url": "base/series/13.map.html",
    "revision": "7fe465024cf8f91230e3ecd2d05e1ef6"
  },
  {
    "url": "base/series/14.parallel.html",
    "revision": "32a872c45d5519485cf615581a7ff43e"
  },
  {
    "url": "base/series/15.lines.html",
    "revision": "a5e02d0e0d6cd9d5f7c7de67d8c2aaee"
  },
  {
    "url": "base/series/16.graph.html",
    "revision": "a7556d9e5ffde953b450815dbe749f7a"
  },
  {
    "url": "base/series/17.sankey.html",
    "revision": "0fae11a5759ad4994539b5d073b33956"
  },
  {
    "url": "base/series/18.funnel.html",
    "revision": "8d12638de0034b102e8f30a85f9da2d6"
  },
  {
    "url": "base/series/19.gauge.html",
    "revision": "80255c98f2badc5134f7309483cc7fee"
  },
  {
    "url": "base/series/2.bar.html",
    "revision": "95bbdf6946e0d75f6212403d143d121c"
  },
  {
    "url": "base/series/20.pictorialBar.html",
    "revision": "2c37e442b118b278d73af1e29b87d2ad"
  },
  {
    "url": "base/series/21.themeRiver.html",
    "revision": "4f7d6521798d3ff1f2514aabbf614752"
  },
  {
    "url": "base/series/22.custom.html",
    "revision": "797f5af6a30ddfe5ac5b64d48576ff62"
  },
  {
    "url": "base/series/3.pie.html",
    "revision": "f78219b3c32354713cbfd706b45f1114"
  },
  {
    "url": "base/series/4.scatter.html",
    "revision": "6e09674e6622706571a47ebef433c967"
  },
  {
    "url": "base/series/5.effectScatter.html",
    "revision": "d5b0137ebe5c6de218f6c23fbe850d9b"
  },
  {
    "url": "base/series/6.radar.html",
    "revision": "8d4e438bebaf86aa923121be31bbd5d8"
  },
  {
    "url": "base/series/7.tree.html",
    "revision": "4a3c47a4148830dafc4f977ecb996c3f"
  },
  {
    "url": "base/series/8.treemap.html",
    "revision": "2b38a357c2fb9848e36e1313205141fc"
  },
  {
    "url": "base/series/9.sunburst.html",
    "revision": "981b74afdb4636b1540891fb22a0ad33"
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
    "revision": "7bcc9b3024ef5f3b1e57c73943353a45"
  },
  {
    "url": "mock/http.js",
    "revision": "a219140640bec4dfbe8f4fe88d351ed8"
  },
  {
    "url": "senior/1.micro/1.index.html",
    "revision": "85adb079c27d9c54b9e3d262d6f6836b"
  },
  {
    "url": "senior/1.micro/1.singlespa.html",
    "revision": "88d381ccf7b85812adf24b77c45e7cbc"
  },
  {
    "url": "senior/1.micro/1.singlespa2.html",
    "revision": "6bf68e2fa8c179d34bea4c9c30c7833b"
  },
  {
    "url": "senior/1.micro/2.qiankun.html",
    "revision": "a1b7565094fd8540343ce413f69943b4"
  },
  {
    "url": "senior/1.micro/2.qiankun2.html",
    "revision": "9bf84ac22c940e58f6e81072d1b8fd5b"
  },
  {
    "url": "senior/1.micro/3.share.html",
    "revision": "cfe7150b720e9d84f20bf62dfae15510"
  },
  {
    "url": "senior/1.micro/4.dev.html",
    "revision": "191621acd91dfe3d78a681c045e83680"
  },
  {
    "url": "senior/2.typescript/1.env.html",
    "revision": "0fa29141774e99b320968e1f5fd7e6fb"
  },
  {
    "url": "senior/2.typescript/1.index.html",
    "revision": "c16fcbc53630d2ebf08c9cce3309d2c4"
  },
  {
    "url": "senior/2.typescript/10.infer.html",
    "revision": "a9cdd6ab3804c53f012c9a763e1a9e7e"
  },
  {
    "url": "senior/2.typescript/11.overlapping.html",
    "revision": "f4fe6607f6d5f5e44bb36765d114d6c1"
  },
  {
    "url": "senior/2.typescript/12.condition.html",
    "revision": "5356b4fcf82dc51897d4e7047274f9a5"
  },
  {
    "url": "senior/2.typescript/13.builtin.html",
    "revision": "48e00f7883e0ccce36cd73fa9aae1642"
  },
  {
    "url": "senior/2.typescript/14.package.html",
    "revision": "8b20069fdae74bf1bac205a86bc48efa"
  },
  {
    "url": "senior/2.typescript/15.custom.html",
    "revision": "99cd996eb400917e06cabcfe698f292d"
  },
  {
    "url": "senior/2.typescript/16.unknown.html",
    "revision": "72abc85010d3ab9559e9f0d0e7f13682"
  },
  {
    "url": "senior/2.typescript/17.module.html",
    "revision": "beac9b358e5de5764fa6fc6a09fd2429"
  },
  {
    "url": "senior/2.typescript/18.statement.html",
    "revision": "4b04111733dfe98687df2cd370268660"
  },
  {
    "url": "senior/2.typescript/19.extend.html",
    "revision": "3669157ab8d33656b8ab7dd9d1365b72"
  },
  {
    "url": "senior/2.typescript/2.base.html",
    "revision": "458fc8962791c97d9a885a43a4df1e39"
  },
  {
    "url": "senior/2.typescript/3.deduction.html",
    "revision": "dd42d14a633ad70695fdd15b31837d3a"
  },
  {
    "url": "senior/2.typescript/4.type.html",
    "revision": "9456e0dc38ddcf0dc78e9295cdeaa91b"
  },
  {
    "url": "senior/2.typescript/5.class.html",
    "revision": "b9efe612b201ba3e922d7520efb4d5ea"
  },
  {
    "url": "senior/2.typescript/6.interface.html",
    "revision": "98dbbdc1038533c9dbee8e79effc0675"
  },
  {
    "url": "senior/2.typescript/7.generic.html",
    "revision": "ca5e4988efb083952d606647be506aa9"
  },
  {
    "url": "senior/2.typescript/8.compatible.html",
    "revision": "26f86735393e4074f9df712fcff8d4a5"
  },
  {
    "url": "senior/2.typescript/9.protect.html",
    "revision": "f39194a06f56a947d3e0cf1eb725bc41"
  },
  {
    "url": "senior/3.deploy/1.index.html",
    "revision": "d2d368f92374c97d342779baa31a145e"
  },
  {
    "url": "senior/3.deploy/1.local.html",
    "revision": "6c0811fed636f3c2cb9aab582f681d60"
  },
  {
    "url": "senior/3.deploy/2.gitlab.html",
    "revision": "07a70fa0cd2c5fffaf1eb26f11f3f117"
  },
  {
    "url": "senior/3.deploy/3.genkins.html",
    "revision": "96f491e5f45082f7c68dda8a726cae42"
  },
  {
    "url": "senior/3.deploy/4.centos.html",
    "revision": "9be2bae47011831713b46ac714f2a7eb"
  },
  {
    "url": "senior/3.deploy/5.nginx.html",
    "revision": "5dfc151dfe4da5ff07c4155c835fcfac"
  },
  {
    "url": "senior/4.component/1.button.html",
    "revision": "d3355783508ef2bb54f183cf34f9f8cc"
  },
  {
    "url": "senior/4.component/1.env.html",
    "revision": "c4721719a6cf9b9b5922526ce32ca5e5"
  },
  {
    "url": "senior/4.component/1.index.html",
    "revision": "05aca2eec43ffd7f4fdf87cfa0c2adc7"
  },
  {
    "url": "senior/4.component/1.recursion.html",
    "revision": "a2f826f11f12b916121912a5639cb426"
  },
  {
    "url": "senior/4.component/10.tree.html",
    "revision": "1ecc03487d09f0034520479a6dc252f4"
  },
  {
    "url": "senior/4.component/12.table.html",
    "revision": "f86ec96b6a31b21e047542be07660ca5"
  },
  {
    "url": "senior/4.component/13.publish.html",
    "revision": "c6b16c0af7269ac5a61aab9e18e0df16"
  },
  {
    "url": "senior/4.component/2.dropdown.html",
    "revision": "8612ffdde0470c7af9fcdcae2936bb91"
  },
  {
    "url": "senior/4.component/3.dialog.html",
    "revision": "710595e5949ba6758470f9929ddd03ac"
  },
  {
    "url": "senior/4.component/3.form.html",
    "revision": "f11976d99b69d3541ff17c9c4dc0acc7"
  },
  {
    "url": "senior/4.component/4.input.html",
    "revision": "3707028df1b36979e14d605ac2e652bc"
  },
  {
    "url": "senior/4.component/4.render.html",
    "revision": "7dc055594840314da845d73247a1ac2f"
  },
  {
    "url": "senior/4.component/5.checkBox.html",
    "revision": "7b289a9c4d345ff2e71f8622a31489df"
  },
  {
    "url": "senior/4.component/6.cascader.html",
    "revision": "17acfa813adcb09bf077b71421bee28e"
  },
  {
    "url": "senior/4.component/7.date.html",
    "revision": "9af6d31cc7af9f6373108e312ec187ca"
  },
  {
    "url": "senior/4.component/8.dispaly.html",
    "revision": "7f535657acc5fa61e5e5685a1e983220"
  },
  {
    "url": "senior/4.component/9.alert.html",
    "revision": "5d1b4fed5e34cafd4fc7613dea82d406"
  },
  {
    "url": "senior/4.component/9.dynamics.html",
    "revision": "d8d0ef844c000b009c075d66b63ec0e1"
  },
  {
    "url": "source/vue-cli2.x/1.index.html",
    "revision": "10a011fe07060226a1c3a207a5496667"
  },
  {
    "url": "source/vue-cli3.x/1.index.html",
    "revision": "580bb4080ae602f3d65ae1efab7c16ef"
  },
  {
    "url": "source/vue-router3.x/1.index.html",
    "revision": "0395c7a9752e160bac9468f85825f568"
  },
  {
    "url": "source/vue-router3.x/2.origin.html",
    "revision": "5385eaf7adddb1307491b145688a7a68"
  },
  {
    "url": "source/vue-router4.x/1.index.html",
    "revision": "8a62428bf1bb079a19588a10f58abb49"
  },
  {
    "url": "source/vue2.x/1.index.html",
    "revision": "4309391e3b1432ba9702b40baa1c6e2f"
  },
  {
    "url": "source/vue2.x/10.optimize.html",
    "revision": "4f4b0d918be1c8f91370beed94ceba48"
  },
  {
    "url": "source/vue2.x/11.gencode.html",
    "revision": "9a5c68d58eb4f076138462899fe1931d"
  },
  {
    "url": "source/vue2.x/12.mount.html",
    "revision": "7445084a46edfd9f40eac9757c6d4fd2"
  },
  {
    "url": "source/vue2.x/13._render.html",
    "revision": "6eee2248ba1e782d14b8405d76f103e8"
  },
  {
    "url": "source/vue2.x/14._update.html",
    "revision": "69c4afb8fe8fe5f826ae0bf9047ea145"
  },
  {
    "url": "source/vue2.x/2.initGlobalAPI.html",
    "revision": "4b32b2ab6f908a65a4dbfae558c72241"
  },
  {
    "url": "source/vue2.x/3.initMixin.html",
    "revision": "c56c9581bc8caa05935c7e8d6e22e3de"
  },
  {
    "url": "source/vue2.x/4.stateMixin.html",
    "revision": "8ca40e5a6a7d784f9d3869df94603790"
  },
  {
    "url": "source/vue2.x/5.eventsMixin.html",
    "revision": "1ed2810068ebaa8611c92c333ea2a1f1"
  },
  {
    "url": "source/vue2.x/6.lifecycleMixin.html",
    "revision": "a616e0d01cdcc22eb3d3c460b4ec3167"
  },
  {
    "url": "source/vue2.x/7.renderMixin.html",
    "revision": "a4b58e32a46baf4bb63315a84a170195"
  },
  {
    "url": "source/vue2.x/8.mount.html",
    "revision": "0883c017abd66df4ce1f094896a8df76"
  },
  {
    "url": "source/vue2.x/9.ast.html",
    "revision": "4089fabb8bc9568e626b7bfcbe82a6bb"
  },
  {
    "url": "source/vue3.x/1.index.html",
    "revision": "b35a01b6fc13edf6e442f9ac6350cb1f"
  },
  {
    "url": "source/vue3.x/10.optimize.html",
    "revision": "58cd11e6ad1b91451aa1c7720f112ea5"
  },
  {
    "url": "source/vue3.x/11.gencode.html",
    "revision": "932dca21cc6a20ce3f49657f51908079"
  },
  {
    "url": "source/vue3.x/12.mount.html",
    "revision": "b25756b2384f72aade85f8ca438a913d"
  },
  {
    "url": "source/vue3.x/13._render.html",
    "revision": "f8cbef92715cc2c84a28fc3ccd29b04c"
  },
  {
    "url": "source/vue3.x/14._update.html",
    "revision": "23ee9c2dff31e9ceab5374d127914b8b"
  },
  {
    "url": "source/vue3.x/2.initGlobalAPI.html",
    "revision": "4078fb29bb45187aef5e5e3ebfe63216"
  },
  {
    "url": "source/vue3.x/3.initMixin.html",
    "revision": "96b5e969cf564c145f0c17b174a3588b"
  },
  {
    "url": "source/vue3.x/4.stateMixin.html",
    "revision": "7f232978793a5600c77bb164a4d52110"
  },
  {
    "url": "source/vue3.x/5.eventsMixin.html",
    "revision": "fde851bf324e432a8b7e72cf41e793e6"
  },
  {
    "url": "source/vue3.x/6.lifecycleMixin.html",
    "revision": "23bfbaca7958cdd0abcb757310401c3b"
  },
  {
    "url": "source/vue3.x/7.renderMixin.html",
    "revision": "6ea3c0f6845ca5f439c6fe872195958a"
  },
  {
    "url": "source/vue3.x/8.mount.html",
    "revision": "5b18e18cc5f780968e795d1603522ff6"
  },
  {
    "url": "source/vue3.x/9.ast.html",
    "revision": "b9fa9b93ff3bcbff2df3352acf845dae"
  },
  {
    "url": "source/vuex3.x/1.index.html",
    "revision": "61ad4e34a7edfcb61266291f31bc343f"
  },
  {
    "url": "source/vuex3.x/2.use.html",
    "revision": "6feb876a315a02f2a6e8e252ccf833f7"
  },
  {
    "url": "source/vuex3.x/3.origin.html",
    "revision": "205e841687a71e351761f89a274130da"
  },
  {
    "url": "source/vuex4.x/1.index.html",
    "revision": "6fdfc43925f82b8effdbfad6d2471e6b"
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
