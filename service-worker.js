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
    "revision": "bbee01dd2f23189f3213ea8626452c52"
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
    "url": "assets/js/50.543b8aef.js",
    "revision": "ab333981802f414e6372064d33649ef8"
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
    "revision": "ca80d1eba6bb3a514247e51902b56195"
  },
  {
    "url": "base/api/1.index.html",
    "revision": "720b56e2e298449a1ab206249cca5474"
  },
  {
    "url": "base/api/2.echartsInstance.html",
    "revision": "45f6b2c18ab658f1d3e5ead800772b91"
  },
  {
    "url": "base/api/3.action.html",
    "revision": "423960923cb5eeebd2a9931c506efc06"
  },
  {
    "url": "base/api/4.events.html",
    "revision": "ddadb90e167ef4f99ba5dff0bbaca125"
  },
  {
    "url": "base/components/1.index.html",
    "revision": "e58a25811cab9255632f12c82bbe15b1"
  },
  {
    "url": "base/components/1.legend.html",
    "revision": "cd82e7cb1ea18cddead2b47a94c12a83"
  },
  {
    "url": "base/components/2.grid.html",
    "revision": "02dbe28391e0ceeee75bd908f9514bbe"
  },
  {
    "url": "base/components/2.polar.html",
    "revision": "238cafc0151e440a46ab003698f273a7"
  },
  {
    "url": "base/components/2.radiusAxis.html",
    "revision": "c25a8cf5c421b38ea0680b8681101f1a"
  },
  {
    "url": "base/components/2.xAxis.html",
    "revision": "f28964223d4732f3062c976068bf130c"
  },
  {
    "url": "base/components/2.yAxis.html",
    "revision": "1bdb05e36e8c6f91d97d6424de7e74b2"
  },
  {
    "url": "base/components/3.angleAxis.html",
    "revision": "5371851202280fce9ec55369ba7e75d2"
  },
  {
    "url": "base/components/4.radar.html",
    "revision": "555dafd3b6f13505dbb22d9e01e7035f"
  },
  {
    "url": "base/components/5.dataZoom.html",
    "revision": "8391ae40828a72009c6fcf941c20b712"
  },
  {
    "url": "base/components/6.visualMap.html",
    "revision": "6a046132532b2ff6cf77ca4008cfb451"
  },
  {
    "url": "base/components/7.tooltip.html",
    "revision": "0f7161dc127505a50c62b67e2ed63eeb"
  },
  {
    "url": "base/components/8.geo.html",
    "revision": "9bd0c17e040a7701df1fb2a47a3e20d9"
  },
  {
    "url": "base/gl/1.index.html",
    "revision": "e32bd9424c593890ce64e67d3c0fd12b"
  },
  {
    "url": "base/gl/1.scatter3D.html",
    "revision": "1f157a830652c82432fc03a5051e2169"
  },
  {
    "url": "base/gl/10.flowGL.html",
    "revision": "748627ed929629c32832fd8ba22183a4"
  },
  {
    "url": "base/gl/2.bar3D.html",
    "revision": "23a9034dcd16003c932c7f79d3c6e88f"
  },
  {
    "url": "base/gl/3.line3D.html",
    "revision": "550f886626a58e9ae545112a1c17b36b"
  },
  {
    "url": "base/gl/4.lines3D.html",
    "revision": "f329d9d92d021f399a80d321bdd05dbc"
  },
  {
    "url": "base/gl/5.map3D.html",
    "revision": "842af5b6598a13e46dc38058fd2e3cf6"
  },
  {
    "url": "base/gl/6.surface.html",
    "revision": "9da23cefe22c4dd5c407ae5cdd219e5f"
  },
  {
    "url": "base/gl/7.polygons3D.html",
    "revision": "33272dc614c0317d80fea3edc44fe0fb"
  },
  {
    "url": "base/gl/8.scatterGL.html",
    "revision": "c04861baa59f8cf3b3aa7f84af865c2e"
  },
  {
    "url": "base/gl/9.graphGL.html",
    "revision": "eb109338ada941ee178e072db47c72ab"
  },
  {
    "url": "base/series/1.index.html",
    "revision": "b64e100a1dc9a69e43c4d34a5113ea5d"
  },
  {
    "url": "base/series/1.line.html",
    "revision": "f3863d2a5cb143105be4f3233dbf5e5a"
  },
  {
    "url": "base/series/10.boxplot.html",
    "revision": "f593e7bd705d5b4ba7030a5e4d59abe4"
  },
  {
    "url": "base/series/11.candlestick.html",
    "revision": "c59a8fdb8b3d7d727f8ac8b2d995ce79"
  },
  {
    "url": "base/series/12.heatmap.html",
    "revision": "7978612dd53fbd03df2b7dad2c85045b"
  },
  {
    "url": "base/series/13.map.html",
    "revision": "fea15fa72ed6742581348827feade0b4"
  },
  {
    "url": "base/series/14.parallel.html",
    "revision": "a00deb420c9e0161274fd70e4cce0053"
  },
  {
    "url": "base/series/15.lines.html",
    "revision": "61a2437dbcf09882ef35790b0b734720"
  },
  {
    "url": "base/series/16.graph.html",
    "revision": "5d72e79d232b9157dd174cb0407c56c3"
  },
  {
    "url": "base/series/17.sankey.html",
    "revision": "e4bc7e268123fd9ea7f574927056662b"
  },
  {
    "url": "base/series/18.funnel.html",
    "revision": "6a80e32444c627a0c8df3440b1aa7d6d"
  },
  {
    "url": "base/series/19.gauge.html",
    "revision": "0aa826d5c883d11e1a8ce0c7a2ee2b54"
  },
  {
    "url": "base/series/2.bar.html",
    "revision": "b040837254662d7ed7a0c38bf3fc888a"
  },
  {
    "url": "base/series/20.pictorialBar.html",
    "revision": "37d66a12c4761e57713f83e9dac0d17b"
  },
  {
    "url": "base/series/21.themeRiver.html",
    "revision": "aac48cb89b174b82723c5f573fe879fe"
  },
  {
    "url": "base/series/22.custom.html",
    "revision": "222280fbc2c85629d9e70d5ddf137705"
  },
  {
    "url": "base/series/3.pie.html",
    "revision": "86938fa67b41dfd961cb504e4c4e3df6"
  },
  {
    "url": "base/series/4.scatter.html",
    "revision": "a4a33f06fc2718f727fd43ac4cd3cb6b"
  },
  {
    "url": "base/series/5.effectScatter.html",
    "revision": "7529d5d443fd36a8b3963f241771d08f"
  },
  {
    "url": "base/series/6.radar.html",
    "revision": "c6956d45033f0c1d9416e79e24aa21df"
  },
  {
    "url": "base/series/7.tree.html",
    "revision": "0f5353140c1be59782c5757b9f847972"
  },
  {
    "url": "base/series/8.treemap.html",
    "revision": "947831314a1d2abeed6469814f56f35e"
  },
  {
    "url": "base/series/9.sunburst.html",
    "revision": "ff1ec410a4b649b9faaf821df5568d5c"
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
    "revision": "a6b261872b57d7d94655ef8f0feac0c5"
  },
  {
    "url": "mock/http.js",
    "revision": "a219140640bec4dfbe8f4fe88d351ed8"
  },
  {
    "url": "senior/1.micro/1.index.html",
    "revision": "839cb7a6b9d9226a85a69aac2d960e18"
  },
  {
    "url": "senior/1.micro/1.singlespa.html",
    "revision": "35342d069dbc4a95db7f34db79214b69"
  },
  {
    "url": "senior/1.micro/1.singlespa2.html",
    "revision": "9e06cdb93cee9b94114e24bd4fb757db"
  },
  {
    "url": "senior/1.micro/2.qiankun.html",
    "revision": "18c1b05bb00efa0f894398ca794d5a04"
  },
  {
    "url": "senior/1.micro/2.qiankun2.html",
    "revision": "5f748f0afb813b35c916c4bd921644a1"
  },
  {
    "url": "senior/1.micro/3.share.html",
    "revision": "e28b4fdafc49c775b5cf249a53de5212"
  },
  {
    "url": "senior/1.micro/4.dev.html",
    "revision": "04ce2c41ffa647ed1b345476044ef3c0"
  },
  {
    "url": "senior/2.typescript/1.env.html",
    "revision": "050933233320016df0c022a15dd10147"
  },
  {
    "url": "senior/2.typescript/1.index.html",
    "revision": "d0e3fb872eca09baaa43e6f624371f7b"
  },
  {
    "url": "senior/2.typescript/10.infer.html",
    "revision": "4da9020673c4441fb3353928bf51f16b"
  },
  {
    "url": "senior/2.typescript/11.overlapping.html",
    "revision": "ce392a565c096f969fa788f02335acfd"
  },
  {
    "url": "senior/2.typescript/12.condition.html",
    "revision": "4b6d3ffea7a6206703d2966716f70854"
  },
  {
    "url": "senior/2.typescript/13.builtin.html",
    "revision": "7ec828bd4e4543e884ec5286498fcd4a"
  },
  {
    "url": "senior/2.typescript/14.package.html",
    "revision": "97c144a138770944a2fd658105665ab3"
  },
  {
    "url": "senior/2.typescript/15.custom.html",
    "revision": "05708ce9984fed98b68de8234bcaeb83"
  },
  {
    "url": "senior/2.typescript/16.unknown.html",
    "revision": "14279cf30d9201a83b47881745531aec"
  },
  {
    "url": "senior/2.typescript/17.module.html",
    "revision": "6de8194a164e561c315145778eec9469"
  },
  {
    "url": "senior/2.typescript/18.statement.html",
    "revision": "4daec0cba1eb888e1ba421048de0646d"
  },
  {
    "url": "senior/2.typescript/19.extend.html",
    "revision": "5c63e7d28fe58f70acd1ffd48d7d80b7"
  },
  {
    "url": "senior/2.typescript/2.base.html",
    "revision": "fb5c9304e5ce0a3e3a2bad0dbe6285a8"
  },
  {
    "url": "senior/2.typescript/3.deduction.html",
    "revision": "2bc44db0508a72139e18e8e7172fbf3d"
  },
  {
    "url": "senior/2.typescript/4.type.html",
    "revision": "cd09b601990bb1b52df2446dc81e6756"
  },
  {
    "url": "senior/2.typescript/5.class.html",
    "revision": "ba599a54b203c6ffa472bc37649f8dc2"
  },
  {
    "url": "senior/2.typescript/6.interface.html",
    "revision": "473710e269dca453a6c3cf45ecf4df72"
  },
  {
    "url": "senior/2.typescript/7.generic.html",
    "revision": "e6a18e348de5a3ab5daa558e36ce44c4"
  },
  {
    "url": "senior/2.typescript/8.compatible.html",
    "revision": "de4b24853a50d9aeec97e839feaa55c5"
  },
  {
    "url": "senior/2.typescript/9.protect.html",
    "revision": "da19320507e0c27d1e45c2df01cae83f"
  },
  {
    "url": "senior/3.deploy/1.index.html",
    "revision": "a81a2f106628c63698a28f0704d12662"
  },
  {
    "url": "senior/3.deploy/1.local.html",
    "revision": "fd3378c1d7f4409db00ef91a8cc28a71"
  },
  {
    "url": "senior/3.deploy/2.gitlab.html",
    "revision": "0aab6262f2879bfbe012aee1ca4a8b25"
  },
  {
    "url": "senior/3.deploy/3.genkins.html",
    "revision": "dfba8b9b70f83b50768dca31db21f340"
  },
  {
    "url": "senior/3.deploy/4.centos.html",
    "revision": "e5660f82d1fa541f04ecbe15c0b8529b"
  },
  {
    "url": "senior/3.deploy/5.nginx.html",
    "revision": "63910bdabbb8bee3a2ed2d805980113d"
  },
  {
    "url": "senior/4.component/1.button.html",
    "revision": "478f5a32fced8651ce7796eafea24c4c"
  },
  {
    "url": "senior/4.component/1.env.html",
    "revision": "af20bed046bba1ab7a33775aaab920b2"
  },
  {
    "url": "senior/4.component/1.index.html",
    "revision": "d197472f30f49ff1b7a30c81f6901bfe"
  },
  {
    "url": "senior/4.component/1.recursion.html",
    "revision": "b7a5b96265bcfea4ac0ecc207607a57d"
  },
  {
    "url": "senior/4.component/10.tree.html",
    "revision": "361824ed4f2174d6e04c6826ba08b23c"
  },
  {
    "url": "senior/4.component/12.table.html",
    "revision": "93324b00d0b97c1083ffbf12c230b6c3"
  },
  {
    "url": "senior/4.component/13.publish.html",
    "revision": "0be1a548ba9fc457adb90a73b14cb72b"
  },
  {
    "url": "senior/4.component/2.dropdown.html",
    "revision": "6c549037e3c455d6bbe40d3979826ccd"
  },
  {
    "url": "senior/4.component/3.dialog.html",
    "revision": "8457dc1f3e3af7339b59f9f2b78ac758"
  },
  {
    "url": "senior/4.component/3.form.html",
    "revision": "5dbe6c3f02769862d3b71a80ca12f6cc"
  },
  {
    "url": "senior/4.component/4.input.html",
    "revision": "a5cf3c65cfaa0c4880e780c47e78757f"
  },
  {
    "url": "senior/4.component/4.render.html",
    "revision": "3e47c536f3529417c8d2eb3bc569db82"
  },
  {
    "url": "senior/4.component/5.checkBox.html",
    "revision": "0eb54db486b5f4400e667c27e7ceebeb"
  },
  {
    "url": "senior/4.component/6.cascader.html",
    "revision": "fadf5f5dd8ef1d01beeff604d9c91a8a"
  },
  {
    "url": "senior/4.component/7.date.html",
    "revision": "4d119b632058b6c7a697d3cb8478c21c"
  },
  {
    "url": "senior/4.component/8.dispaly.html",
    "revision": "986263e9b2799bf54af64967ba8700ab"
  },
  {
    "url": "senior/4.component/9.alert.html",
    "revision": "8820cc5de5544179d33e61575139c159"
  },
  {
    "url": "senior/4.component/9.dynamics.html",
    "revision": "c8be1159c681b8be473de79da007de8c"
  },
  {
    "url": "source/vue-cli2.x/1.index.html",
    "revision": "d36ff7081d493cfbd7d41e1313c2dc4b"
  },
  {
    "url": "source/vue-cli3.x/1.index.html",
    "revision": "31eabf1a35977d91f1b71a99ab7243c2"
  },
  {
    "url": "source/vue-router3.x/1.index.html",
    "revision": "f3e4f68b9ccad5e6e6cfda834142e1b8"
  },
  {
    "url": "source/vue-router3.x/2.origin.html",
    "revision": "8c96f216a8ac5fb8600e4cb72032acbd"
  },
  {
    "url": "source/vue-router4.x/1.index.html",
    "revision": "2fdab1e600333466461d2a6276827319"
  },
  {
    "url": "source/vue2.x/1.index.html",
    "revision": "9c38842f9b4817876c513a059c9c1647"
  },
  {
    "url": "source/vue2.x/10.optimize.html",
    "revision": "ef6286c43a9881ccc6b46a7b48ebaafc"
  },
  {
    "url": "source/vue2.x/11.gencode.html",
    "revision": "0df87ebfe4d6d1d4b58b4b8491a07cc5"
  },
  {
    "url": "source/vue2.x/12.mount.html",
    "revision": "44346e138782336a91e1263d7abdbc51"
  },
  {
    "url": "source/vue2.x/13._render.html",
    "revision": "a3463d8e050e0f694b54d2d034ce2198"
  },
  {
    "url": "source/vue2.x/14._update.html",
    "revision": "a85b94765431638cfe24a4de79b4dfe6"
  },
  {
    "url": "source/vue2.x/2.initGlobalAPI.html",
    "revision": "4b0490eadb23fe6b5e36e6ca0b8c96d1"
  },
  {
    "url": "source/vue2.x/3.initMixin.html",
    "revision": "7fc269d5027f6ba62bf03428dd189ccc"
  },
  {
    "url": "source/vue2.x/4.stateMixin.html",
    "revision": "79ce35dfc283576787941b29abcb4ac9"
  },
  {
    "url": "source/vue2.x/5.eventsMixin.html",
    "revision": "6f55c7e6eb020ed0855c42aeecfded77"
  },
  {
    "url": "source/vue2.x/6.lifecycleMixin.html",
    "revision": "d37535b887e77c999e805ec28c2c1437"
  },
  {
    "url": "source/vue2.x/7.renderMixin.html",
    "revision": "929e7b73cb2b65012306d33011bc1de3"
  },
  {
    "url": "source/vue2.x/8.mount.html",
    "revision": "985704d944f92315b5b33414bb6545fe"
  },
  {
    "url": "source/vue2.x/9.ast.html",
    "revision": "e1e03b9240436e9754ccffe303689896"
  },
  {
    "url": "source/vue3.x/1.index.html",
    "revision": "b38b59f8085f1794ce0a283a293a455d"
  },
  {
    "url": "source/vue3.x/10.optimize.html",
    "revision": "fd0072353a113504ca4806e362e3a26a"
  },
  {
    "url": "source/vue3.x/11.gencode.html",
    "revision": "a87ec4c40ad8fb826d78baadcfc1d593"
  },
  {
    "url": "source/vue3.x/12.mount.html",
    "revision": "21e75e6cf1c715ee02dd716d5a1978fb"
  },
  {
    "url": "source/vue3.x/13._render.html",
    "revision": "4acadc3f1c46262596f9bb035a5ca60f"
  },
  {
    "url": "source/vue3.x/14._update.html",
    "revision": "7aa0d6bb69c60958b907c97b3b6cc7f6"
  },
  {
    "url": "source/vue3.x/2.initGlobalAPI.html",
    "revision": "dfa31956d99b230ed6627de1e457877f"
  },
  {
    "url": "source/vue3.x/3.initMixin.html",
    "revision": "bbc5fef7a7c57fd69932cd250af019b9"
  },
  {
    "url": "source/vue3.x/4.stateMixin.html",
    "revision": "ce6a6138fd39ac0530fb027dbb6738a0"
  },
  {
    "url": "source/vue3.x/5.eventsMixin.html",
    "revision": "a0c0718a936074debcaf0203e8e430c0"
  },
  {
    "url": "source/vue3.x/6.lifecycleMixin.html",
    "revision": "b49d26318be0c5fc3e478ae3ecd9fa80"
  },
  {
    "url": "source/vue3.x/7.renderMixin.html",
    "revision": "626cbb71c1c14945c4b2eee9436c1b56"
  },
  {
    "url": "source/vue3.x/8.mount.html",
    "revision": "7c26891bd45b34e2d39927f8dbc96658"
  },
  {
    "url": "source/vue3.x/9.ast.html",
    "revision": "c4c3175ba39f5bd02d8f2035e973d6b7"
  },
  {
    "url": "source/vuex3.x/1.index.html",
    "revision": "1cf91585cac55844f2ad941e59376553"
  },
  {
    "url": "source/vuex3.x/2.use.html",
    "revision": "764c0ce93a2522ab7f6e737819cd32d6"
  },
  {
    "url": "source/vuex3.x/3.origin.html",
    "revision": "292add799c7a3c61822ddaaaadc84df3"
  },
  {
    "url": "source/vuex4.x/1.index.html",
    "revision": "ad9a57535d1b4c6866c03fc564a8f254"
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
