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
    "revision": "db916bc8bbec4eefa41abdd798214e9b"
  },
  {
    "url": "assets/css/0.styles.4364465c.css",
    "revision": "7ce70421f70db207fca5994776f135d1"
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
    "url": "assets/js/10.51d1ce73.js",
    "revision": "4b671b63deaee12e9074824e9d53c8c6"
  },
  {
    "url": "assets/js/100.18d3303a.js",
    "revision": "7152cd06e0cffdcc169f8907c70ce968"
  },
  {
    "url": "assets/js/101.bd745d31.js",
    "revision": "a184d67bce2e212e43e19f0f09b036bb"
  },
  {
    "url": "assets/js/102.b7c10f41.js",
    "revision": "add44822726f970e15468e5c52320fd1"
  },
  {
    "url": "assets/js/103.3415e532.js",
    "revision": "264edd4e457391253e310414b5f8ee44"
  },
  {
    "url": "assets/js/104.5a2642b8.js",
    "revision": "543998a890feb479714ab4836cef42f5"
  },
  {
    "url": "assets/js/105.480f0eae.js",
    "revision": "ecc6828f95a7e1f95a029b2c30caf52f"
  },
  {
    "url": "assets/js/106.4a0aebd3.js",
    "revision": "72d31007b9fa8647bf0e0be5fc07fca3"
  },
  {
    "url": "assets/js/107.76b3cf32.js",
    "revision": "3b0392e0113af23532456a5c3b686e56"
  },
  {
    "url": "assets/js/108.996666a8.js",
    "revision": "4bdd1d13baceda1bf8af450db10762a2"
  },
  {
    "url": "assets/js/109.a655e95f.js",
    "revision": "994b1f89077432ab1d1700c06534b0b6"
  },
  {
    "url": "assets/js/11.7d21d080.js",
    "revision": "1bc4666f8cf51808a4fe85aac614fe7c"
  },
  {
    "url": "assets/js/110.251bb26f.js",
    "revision": "d08afbf04daa4ee52513d8518e591bfb"
  },
  {
    "url": "assets/js/111.0f038221.js",
    "revision": "d97283321671e3748dcd76bc66c57e88"
  },
  {
    "url": "assets/js/112.40ada337.js",
    "revision": "d5a83244e236f903066868852ade04b3"
  },
  {
    "url": "assets/js/113.b26cc3f1.js",
    "revision": "9ec9e00413820498b88dce662337a27e"
  },
  {
    "url": "assets/js/114.6fa9bc49.js",
    "revision": "2ff9f7940bb3e9abd8f4cab8a6885f41"
  },
  {
    "url": "assets/js/115.45ac87fe.js",
    "revision": "055dfdc5c2ffdfc015b837b953052df7"
  },
  {
    "url": "assets/js/116.f98decbd.js",
    "revision": "628110697d8bf67eacc39256bd2dea2b"
  },
  {
    "url": "assets/js/117.d18d9f56.js",
    "revision": "0e8115e1f3498cd44878f366d500c961"
  },
  {
    "url": "assets/js/118.f7543a52.js",
    "revision": "c720f97c78d66e7fc39e2d670a0ce28c"
  },
  {
    "url": "assets/js/119.572c135c.js",
    "revision": "80d4e5293eab1251847ebc299ef269f4"
  },
  {
    "url": "assets/js/12.5965c25c.js",
    "revision": "5c243d86073fafc9be64ac492d489053"
  },
  {
    "url": "assets/js/120.958cb3da.js",
    "revision": "006e5be32a32b38cdfc8bfc822a33df9"
  },
  {
    "url": "assets/js/121.42361b69.js",
    "revision": "f696047aa217ae37da1544980c6a212e"
  },
  {
    "url": "assets/js/122.cbd89978.js",
    "revision": "25bdcc854907d4326d892a261efc933f"
  },
  {
    "url": "assets/js/123.bcf24611.js",
    "revision": "c882b91e0f5dc75a7260a64f44b425e8"
  },
  {
    "url": "assets/js/124.c030c1e9.js",
    "revision": "41720f9e8bdcf6006ee8bf5abe0d8a97"
  },
  {
    "url": "assets/js/125.32cbf8cc.js",
    "revision": "7b4f50f311cc6e0c5f7e66268e34c272"
  },
  {
    "url": "assets/js/126.e167d8c7.js",
    "revision": "86954b55522c4ebceb0e891335e8f626"
  },
  {
    "url": "assets/js/127.f8f08fbb.js",
    "revision": "ddc5481f9a1ac1f710eab38a8435ff98"
  },
  {
    "url": "assets/js/128.77ef2d28.js",
    "revision": "35f9a3979846d672cb434f6e9dbe0135"
  },
  {
    "url": "assets/js/129.fa1f1376.js",
    "revision": "153b06306a7f87ab41ad33ca3f1e9001"
  },
  {
    "url": "assets/js/13.3b73d7ba.js",
    "revision": "865c682e51ce2345810daea89c75322c"
  },
  {
    "url": "assets/js/130.d3c5458d.js",
    "revision": "144c705356d825b76b6236cae099370f"
  },
  {
    "url": "assets/js/131.c9814c68.js",
    "revision": "5ec868bb38bf42cea49ed66f64489cfa"
  },
  {
    "url": "assets/js/132.8f783915.js",
    "revision": "8dcf274482032e6eef9b232bf5edd551"
  },
  {
    "url": "assets/js/133.5a3834a3.js",
    "revision": "f667d25eaea12d2dd0ac5a4340e6212d"
  },
  {
    "url": "assets/js/134.16c630f0.js",
    "revision": "a97c192f0b9b51a513dba01a51762664"
  },
  {
    "url": "assets/js/135.aa217842.js",
    "revision": "83f7648a2fb483e14afc54c2a198dd97"
  },
  {
    "url": "assets/js/136.4ab50c85.js",
    "revision": "5b7e4e2e9be00c1738f61f43fe406ad4"
  },
  {
    "url": "assets/js/137.ec194a25.js",
    "revision": "6ab2a303b00dab2c80ac4493c969c7ef"
  },
  {
    "url": "assets/js/138.27496124.js",
    "revision": "9d5754a2b4babc65f52107b481a67f4e"
  },
  {
    "url": "assets/js/139.fca44932.js",
    "revision": "026cd0345f6f99579108afe248da087e"
  },
  {
    "url": "assets/js/14.3ae6bb67.js",
    "revision": "2483ae6918395df0e4f243ca58d58143"
  },
  {
    "url": "assets/js/140.e71160e6.js",
    "revision": "8f833b82b76223434aeec7ff3fea0f49"
  },
  {
    "url": "assets/js/141.f9000d5e.js",
    "revision": "085af6e30dbbdfd26c8a360db53a3cd7"
  },
  {
    "url": "assets/js/142.7eb002c0.js",
    "revision": "ddcdd4867867e00f09d033aef6c15462"
  },
  {
    "url": "assets/js/143.879794ab.js",
    "revision": "d53cccdc0e8a423d477e2ecc8c43356e"
  },
  {
    "url": "assets/js/144.18d9caac.js",
    "revision": "c6da53c1867eb25d01328d534277dc26"
  },
  {
    "url": "assets/js/145.09c6b221.js",
    "revision": "b72236c679b44e9e691b4f3c6f29da1b"
  },
  {
    "url": "assets/js/146.5c4ceb8e.js",
    "revision": "a3a6b9f48bfc89db8825057f740e3f5e"
  },
  {
    "url": "assets/js/147.26096ae2.js",
    "revision": "a003e4c2a5ed7b056013953799b4f16c"
  },
  {
    "url": "assets/js/148.fb6ba221.js",
    "revision": "3fb34c92db8d5522c8d0b03fbce7b805"
  },
  {
    "url": "assets/js/149.7cfdd680.js",
    "revision": "7b41ff8f54c04a0845c601ab8d899626"
  },
  {
    "url": "assets/js/15.8eef7f88.js",
    "revision": "953bf596fd6f182d844706fb6b00667b"
  },
  {
    "url": "assets/js/150.3d73603d.js",
    "revision": "5131907c16f9b7636024aec75ce9c9ed"
  },
  {
    "url": "assets/js/151.701b1c86.js",
    "revision": "56220033fad505005a56d720ab02b040"
  },
  {
    "url": "assets/js/152.a9c19996.js",
    "revision": "fd07f4be7ea7007e9bffe8acae083001"
  },
  {
    "url": "assets/js/153.e6b9952b.js",
    "revision": "3c61183bacd1e28f1f46cbbb7dddf992"
  },
  {
    "url": "assets/js/154.c92ff1d8.js",
    "revision": "d2eaad9ade604928da8d94ac311f0cd3"
  },
  {
    "url": "assets/js/155.6f0ab53d.js",
    "revision": "66e989e78daf658853e45dd7b44520fc"
  },
  {
    "url": "assets/js/16.9909e847.js",
    "revision": "98f3e9fa93d2e199f3843e56a05a4806"
  },
  {
    "url": "assets/js/17.01f1d9c1.js",
    "revision": "9302f035d482bba3837e360c7d595c50"
  },
  {
    "url": "assets/js/18.c1f5f2f4.js",
    "revision": "3be16f84485430e445af77a69429053a"
  },
  {
    "url": "assets/js/19.76356e5d.js",
    "revision": "cc75f32ae199f94a2e65f3709d0d17f6"
  },
  {
    "url": "assets/js/2.3ac29568.js",
    "revision": "ce7643d1b5d51d14f360477caf177555"
  },
  {
    "url": "assets/js/20.e1c9e711.js",
    "revision": "5b52739e1abcd90f83f9ae52bdbbb8ff"
  },
  {
    "url": "assets/js/21.74b2bd43.js",
    "revision": "685f8f9c3408b624ba6f02ff2d8d28bc"
  },
  {
    "url": "assets/js/22.4368c3bc.js",
    "revision": "98f76dcc1137912994e59035e2818f2b"
  },
  {
    "url": "assets/js/23.63ef8527.js",
    "revision": "a57d8657e08bc6d0180d6963a3f7e021"
  },
  {
    "url": "assets/js/24.5b23b903.js",
    "revision": "260ddc2a3e80bf30f0113784dd6eea41"
  },
  {
    "url": "assets/js/25.0c2d5878.js",
    "revision": "55d18d877363553581c0057abecb4730"
  },
  {
    "url": "assets/js/26.70fb26e6.js",
    "revision": "b5ea98b628140ae2f0a19a69db0bf1e9"
  },
  {
    "url": "assets/js/27.37f03655.js",
    "revision": "698e5ebb04f196532f75378afd23a600"
  },
  {
    "url": "assets/js/28.c748d5b4.js",
    "revision": "a758e79f939580b7c2187759bd70986f"
  },
  {
    "url": "assets/js/29.241a9aa4.js",
    "revision": "cbff1d98305ba816bd87fa99f230e85b"
  },
  {
    "url": "assets/js/3.08089b3b.js",
    "revision": "72c7ef89b6446b16c9479aa05b356eb2"
  },
  {
    "url": "assets/js/30.9cd8405f.js",
    "revision": "2a17edbb6e00b4d3f70aef60af97a2eb"
  },
  {
    "url": "assets/js/31.2d32ab0c.js",
    "revision": "3c9697906d104158b7b724b0330da762"
  },
  {
    "url": "assets/js/32.97b88675.js",
    "revision": "6006edb1a0d6e2998f6b3e9ac679d983"
  },
  {
    "url": "assets/js/33.fc3eab24.js",
    "revision": "0935068bbd3def3b809158e48048ab2d"
  },
  {
    "url": "assets/js/34.ac877841.js",
    "revision": "7f2927529179f4e15830f6667801e9e8"
  },
  {
    "url": "assets/js/35.edeb0a4a.js",
    "revision": "803fe93a077fab397ada4c9190b57faf"
  },
  {
    "url": "assets/js/36.bda94d23.js",
    "revision": "9ba1c7cd7e25cd7e31e9dcce2b71ef15"
  },
  {
    "url": "assets/js/37.d94014a0.js",
    "revision": "de71ec0cc12a92bacb3c382115500199"
  },
  {
    "url": "assets/js/38.3905ea7d.js",
    "revision": "77867fc74ce9b87c1c35845842861a18"
  },
  {
    "url": "assets/js/39.523f4d0e.js",
    "revision": "067f02be0887d8f3159e114665288eb0"
  },
  {
    "url": "assets/js/4.e590f1ca.js",
    "revision": "c21ffa3271aba009b456ed7043c5af9d"
  },
  {
    "url": "assets/js/40.2e21de3a.js",
    "revision": "23f0f14a3d9f2d7ac18d12965ed2ffa8"
  },
  {
    "url": "assets/js/41.d5afab86.js",
    "revision": "bbea0754ca93911113689b80263e3141"
  },
  {
    "url": "assets/js/42.a88b105b.js",
    "revision": "38c632b70414035c3fc3172b850b8360"
  },
  {
    "url": "assets/js/43.ae9e2b36.js",
    "revision": "0087cba867609a82680d1eb50559404f"
  },
  {
    "url": "assets/js/44.9a78e304.js",
    "revision": "58f2b328a197b69395ec949f0bd23cc9"
  },
  {
    "url": "assets/js/45.3f9d1af7.js",
    "revision": "7c5e97768e6e8e8e5a9dfc59e0f0d82b"
  },
  {
    "url": "assets/js/46.028ffdcf.js",
    "revision": "bfdb88b6dba61c5aa966faab3ec68712"
  },
  {
    "url": "assets/js/47.6be0208f.js",
    "revision": "a9d6ab15e23fed9c05defa3e5a0c4412"
  },
  {
    "url": "assets/js/48.06181d92.js",
    "revision": "ee543c6402351e4cac65f75ac1ac36e2"
  },
  {
    "url": "assets/js/49.faa4ea89.js",
    "revision": "bcae0438d768d58235ebbd8e47306550"
  },
  {
    "url": "assets/js/5.a93757e2.js",
    "revision": "d99edb02a7c9880b19244027e2f074b9"
  },
  {
    "url": "assets/js/50.e4360c5a.js",
    "revision": "5d9254b0902b625c70d50690d14aa06a"
  },
  {
    "url": "assets/js/51.1d390ec4.js",
    "revision": "97648a20f40a6cea82dcb1977ff9a201"
  },
  {
    "url": "assets/js/52.77cad301.js",
    "revision": "2847018c857ed4e13c60b3af2c77aef0"
  },
  {
    "url": "assets/js/53.cafc89e1.js",
    "revision": "7a66f90b89fd06aa1c0912f72d67c6d4"
  },
  {
    "url": "assets/js/54.290182da.js",
    "revision": "47c8856929aa13fbe8fb368c6853450e"
  },
  {
    "url": "assets/js/55.c009ff78.js",
    "revision": "7c96865e27217a3c9dbd3e489e6b0e78"
  },
  {
    "url": "assets/js/56.90f7ba12.js",
    "revision": "e5285fd95ddbafff2aa551baa0a9d67b"
  },
  {
    "url": "assets/js/57.266ef1ed.js",
    "revision": "46835d125d29e36921762821a527bc3e"
  },
  {
    "url": "assets/js/58.fbea7189.js",
    "revision": "7cb683a291b58df651175f52cd826698"
  },
  {
    "url": "assets/js/59.e25e151e.js",
    "revision": "ea90ee61c6dd7397999a8d967145ae12"
  },
  {
    "url": "assets/js/6.b307b18f.js",
    "revision": "2f2603a2e4a487a0a36a5b54fd9741ad"
  },
  {
    "url": "assets/js/60.8e0c0022.js",
    "revision": "9fb5df2d0c6bb2a4a605edf5b019da6e"
  },
  {
    "url": "assets/js/61.992d8a17.js",
    "revision": "65fb705a7f3918e7225f7f82db5fe69e"
  },
  {
    "url": "assets/js/62.a9a45c01.js",
    "revision": "ed9323f7ec9653c3c145383ec1b05bc6"
  },
  {
    "url": "assets/js/63.ecccb69d.js",
    "revision": "a07913cc2d092f3b437d7dfff7b0759b"
  },
  {
    "url": "assets/js/64.a94591ce.js",
    "revision": "3c816a14ab7c3480a91e12df2411e27d"
  },
  {
    "url": "assets/js/65.ba99f31f.js",
    "revision": "7ef4bc49993e25995c745e02ff47b61f"
  },
  {
    "url": "assets/js/66.0fb90651.js",
    "revision": "d3a7d5d6b0edf26b586051f242733c73"
  },
  {
    "url": "assets/js/67.74666df8.js",
    "revision": "fbfffc3c98742e603f39683c5b7039eb"
  },
  {
    "url": "assets/js/68.a224ee6e.js",
    "revision": "959fafc5b2400096171a3530178a3337"
  },
  {
    "url": "assets/js/69.2fe283b2.js",
    "revision": "771d1cc6c3f685fd65d56d7d0b353b23"
  },
  {
    "url": "assets/js/7.6bcbc467.js",
    "revision": "1abb939b95c958e1cf6cef5f83fa832b"
  },
  {
    "url": "assets/js/70.2e1d26cd.js",
    "revision": "2d3a2f7fe57a317abfd2b3a8753f9a02"
  },
  {
    "url": "assets/js/71.2e4b5416.js",
    "revision": "a99804668ea07f2e857708187188169c"
  },
  {
    "url": "assets/js/72.91a3c8e9.js",
    "revision": "a3884dd96fe20fdf9d52c10870eed7b4"
  },
  {
    "url": "assets/js/73.76fa7748.js",
    "revision": "50507ba86e7c25a84b361b7b7cb318fb"
  },
  {
    "url": "assets/js/74.af26a55b.js",
    "revision": "553244860dc9bbd72f4b6881a9ad5435"
  },
  {
    "url": "assets/js/75.05c680fd.js",
    "revision": "4401a62a86e3bc389b01bf2121ee0d72"
  },
  {
    "url": "assets/js/76.79a49f21.js",
    "revision": "733399b8e4c98565072d7e316ed947dc"
  },
  {
    "url": "assets/js/77.9b76f843.js",
    "revision": "11764c7341ececd7816e3c66adeb8a39"
  },
  {
    "url": "assets/js/78.89c3ff70.js",
    "revision": "1abe6e32ce90b9350613513616c3ae07"
  },
  {
    "url": "assets/js/79.4d5b0d24.js",
    "revision": "b3dbdf2b84e03a882a769ea2e37c75d7"
  },
  {
    "url": "assets/js/8.a3b0bcf2.js",
    "revision": "66b2e314f2fe57a5ebc4e4fcf169acc2"
  },
  {
    "url": "assets/js/80.009185cd.js",
    "revision": "c1c3c05e60c7aa0e1451d7eee52d42c6"
  },
  {
    "url": "assets/js/81.6c743449.js",
    "revision": "321118f1295fc70c0f39714e17476836"
  },
  {
    "url": "assets/js/82.dff058f3.js",
    "revision": "e7295ae883eaba7d9b8b0cc495a77171"
  },
  {
    "url": "assets/js/83.98a95c17.js",
    "revision": "3fbacb7484415bcec905bc1d6cf526b1"
  },
  {
    "url": "assets/js/84.1d7a03ca.js",
    "revision": "aa5a4e63b63d24db2d834b1954ea641c"
  },
  {
    "url": "assets/js/85.f6015bf7.js",
    "revision": "6add6aa4ff3461bc5d26687c93ea6dad"
  },
  {
    "url": "assets/js/86.9e249a28.js",
    "revision": "9f6f77099adffda4a169d038c9f0256d"
  },
  {
    "url": "assets/js/87.795e5e1d.js",
    "revision": "94567b5b1c96871577006d6cc1618665"
  },
  {
    "url": "assets/js/88.e991586d.js",
    "revision": "90c287f2b6d8a789f81a0659b4fc0689"
  },
  {
    "url": "assets/js/89.b09ccff4.js",
    "revision": "79839f109aa10a8e5639073d9d0e0618"
  },
  {
    "url": "assets/js/9.5c24c593.js",
    "revision": "ecc6fc3c952d09bf8a10b31e84e05bdb"
  },
  {
    "url": "assets/js/90.e7e63ca7.js",
    "revision": "14c41e5aa73e9e85e8dae99f95274e86"
  },
  {
    "url": "assets/js/91.71c72777.js",
    "revision": "a29b9a2ab1c4ef8a931302fdd9502be3"
  },
  {
    "url": "assets/js/92.7db0d7b2.js",
    "revision": "4ea3777c81884d5e8faa5bc0e618066e"
  },
  {
    "url": "assets/js/93.baefc126.js",
    "revision": "c5118ef5d8b69125951f9e0888a343bb"
  },
  {
    "url": "assets/js/94.196f00dd.js",
    "revision": "6b39bec1dcfd27146e2e5ffeef587444"
  },
  {
    "url": "assets/js/95.c9e086a1.js",
    "revision": "b677fd928bbb0598ea93918c65ca2176"
  },
  {
    "url": "assets/js/96.0bbd5d72.js",
    "revision": "52044d449ec4ceb04279daa91fce7ec7"
  },
  {
    "url": "assets/js/97.231402fb.js",
    "revision": "6f3f4684f2698758e0a78889d6fb3f7f"
  },
  {
    "url": "assets/js/98.43c35f88.js",
    "revision": "c9ab87ba3607ef8a19bea93f706af2c5"
  },
  {
    "url": "assets/js/99.4b44d939.js",
    "revision": "a22424b454a74db5ceb78333b7b1c7fc"
  },
  {
    "url": "base/api/1.echarts.html",
    "revision": "06e27c89676699f6ed2c2470a560fee2"
  },
  {
    "url": "base/api/1.index.html",
    "revision": "090a621d06c0d033d59a449caf313c72"
  },
  {
    "url": "base/api/2.echartsInstance.html",
    "revision": "e2131b90efea57a34c606c111cfd8e6c"
  },
  {
    "url": "base/api/3.action.html",
    "revision": "1ef4b897cdce9aa9cd6905f490c26766"
  },
  {
    "url": "base/api/4.events.html",
    "revision": "919e122477bc87f273c63717ae40e04b"
  },
  {
    "url": "base/components/1.index.html",
    "revision": "8828d041bb1c74ec8af606a05079a89e"
  },
  {
    "url": "base/components/1.legend.html",
    "revision": "739f6bdd1d9029ed30d7b40a1918e189"
  },
  {
    "url": "base/components/2.grid.html",
    "revision": "9c8044288ebbb1a348e702cd03e0b5fb"
  },
  {
    "url": "base/components/2.polar.html",
    "revision": "0c6dbb0995f484c17231b43994e89fb1"
  },
  {
    "url": "base/components/2.radiusAxis.html",
    "revision": "db3b72adb0d2983cdd38402698cda78c"
  },
  {
    "url": "base/components/2.xAxis.html",
    "revision": "e4cd75d4f8eeb6fcfbf80b5cfd159532"
  },
  {
    "url": "base/components/2.yAxis.html",
    "revision": "5fada108116b86a1c3e7a8b4d945dbfd"
  },
  {
    "url": "base/components/3.angleAxis.html",
    "revision": "975c045372fc73b5277e6041d7dec528"
  },
  {
    "url": "base/components/4.radar.html",
    "revision": "267a84921e90bc04f884413814c5927d"
  },
  {
    "url": "base/components/5.dataZoom.html",
    "revision": "7a03dccb7ff75928504a6b41a789f0ea"
  },
  {
    "url": "base/components/6.visualMap.html",
    "revision": "32b404e8602beb51f1eb43514edba2d4"
  },
  {
    "url": "base/components/7.tooltip.html",
    "revision": "8ebb1b878cf0e72d26d69222fbf81745"
  },
  {
    "url": "base/components/8.geo.html",
    "revision": "b9f1481800efabad1b4ef50577159a1d"
  },
  {
    "url": "base/gl/1.index.html",
    "revision": "78092cfb8910a446a7c618c85f6c2a66"
  },
  {
    "url": "base/gl/1.scatter3D.html",
    "revision": "ae778cc9eaa79347fc5cb9b745f79e5d"
  },
  {
    "url": "base/gl/10.flowGL.html",
    "revision": "b42f36569ae43687e3e5197d91057708"
  },
  {
    "url": "base/gl/2.bar3D.html",
    "revision": "25ee1c3aa34fc5a8474f010b0b45d2c2"
  },
  {
    "url": "base/gl/3.line3D.html",
    "revision": "cba6b13c48186a5c21f76924a64048ea"
  },
  {
    "url": "base/gl/4.lines3D.html",
    "revision": "c125b72f38104923f347a16bc55ef578"
  },
  {
    "url": "base/gl/5.map3D.html",
    "revision": "8760a43aa7ddbd6a8ea5f0d987a242f4"
  },
  {
    "url": "base/gl/6.surface.html",
    "revision": "4419bf24b8736c5677453ad8eee6cf33"
  },
  {
    "url": "base/gl/7.polygons3D.html",
    "revision": "d77117d2177789e4194d52d098db2301"
  },
  {
    "url": "base/gl/8.scatterGL.html",
    "revision": "871cdade9849de834645b9520db474ee"
  },
  {
    "url": "base/gl/9.graphGL.html",
    "revision": "10b473465685c15a7f64a026b7d4e3da"
  },
  {
    "url": "base/series/1.index.html",
    "revision": "7ac737beb56497680cf22d5596545328"
  },
  {
    "url": "base/series/1.line.html",
    "revision": "577b11330aa43634d8061710c4a27ec5"
  },
  {
    "url": "base/series/10.boxplot.html",
    "revision": "e34252fcdf8bb7e73365f0c36dfebab0"
  },
  {
    "url": "base/series/11.candlestick.html",
    "revision": "92733745fe4895b4ae5c0bd9a87da1d8"
  },
  {
    "url": "base/series/12.heatmap.html",
    "revision": "abbea149a0f59f0a6076bf5fe4ac92da"
  },
  {
    "url": "base/series/13.map.html",
    "revision": "2dfe9fb2b30c994e09746fd5d33ccdab"
  },
  {
    "url": "base/series/14.parallel.html",
    "revision": "1794593e72b77f9d34c33ff2e5692b2f"
  },
  {
    "url": "base/series/15.lines.html",
    "revision": "e14c2abd968c045333b4238dd72d5a58"
  },
  {
    "url": "base/series/16.graph.html",
    "revision": "f3c014c50195fa8d8087341c7b7472fd"
  },
  {
    "url": "base/series/17.sankey.html",
    "revision": "87b0bc07a2aa7b8f3fa8ff5e638f5da8"
  },
  {
    "url": "base/series/18.funnel.html",
    "revision": "fe22ee93c61de0b8e21b9612a90da7ff"
  },
  {
    "url": "base/series/19.gauge.html",
    "revision": "76b9dd9f7e19c974e8756a8ddf2e1804"
  },
  {
    "url": "base/series/2.bar.html",
    "revision": "72c48016211ed044c4dd3d8da4e29c08"
  },
  {
    "url": "base/series/20.pictorialBar.html",
    "revision": "b90aa9d0a08624b6e33d1f21cc3184a7"
  },
  {
    "url": "base/series/21.themeRiver.html",
    "revision": "1d494112a82a4995d5b86b4b7953ea6c"
  },
  {
    "url": "base/series/22.custom.html",
    "revision": "013f65070336223da715b6df08143f5d"
  },
  {
    "url": "base/series/3.pie.html",
    "revision": "2df5485e88dc19c56b6b8e71295ca64c"
  },
  {
    "url": "base/series/4.scatter.html",
    "revision": "2caa1ce5cb077b65590fbf59e1b951bf"
  },
  {
    "url": "base/series/5.effectScatter.html",
    "revision": "7a9c3c6b089cb6800358a0bdee2a1b8d"
  },
  {
    "url": "base/series/6.radar.html",
    "revision": "e81008055392d36e7558df9f1923995b"
  },
  {
    "url": "base/series/7.tree.html",
    "revision": "a881fb6ee8cb266808c84723a8becd75"
  },
  {
    "url": "base/series/8.treemap.html",
    "revision": "1dd8d7828caf4b63a7977568bcf14c9b"
  },
  {
    "url": "base/series/9.sunburst.html",
    "revision": "891f47c9534247bf5805baf83e1e8de5"
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
    "revision": "921c70c05435dc7ee98d7fb14aa899b0"
  },
  {
    "url": "mock/http.js",
    "revision": "a219140640bec4dfbe8f4fe88d351ed8"
  },
  {
    "url": "senior/1.micro/1.index.html",
    "revision": "43d5282a0d2de76f1f125aca7a873238"
  },
  {
    "url": "senior/1.micro/1.singlespa.html",
    "revision": "358f629332c33ad534c4a9e5e81d2760"
  },
  {
    "url": "senior/1.micro/1.singlespa2.html",
    "revision": "c494bf81a9a81169090897f47dd09c9f"
  },
  {
    "url": "senior/1.micro/2.qiankun.html",
    "revision": "996a0e6515be368bb69c8d2313443ebe"
  },
  {
    "url": "senior/1.micro/2.qiankun2.html",
    "revision": "02769e359f35290c8125b4dcc325e1c7"
  },
  {
    "url": "senior/1.micro/3.share.html",
    "revision": "3f8ff87ed187c77d9f9f2bb730c8f420"
  },
  {
    "url": "senior/1.micro/4.dev.html",
    "revision": "2b1f1f6f8aefc555ff98e29d7e6d551d"
  },
  {
    "url": "senior/2.typescript/1.env.html",
    "revision": "fb1c54a4731f2725dd92080f9cfa3a3f"
  },
  {
    "url": "senior/2.typescript/1.index.html",
    "revision": "e4f9e9ba906aa36325e2d72b362eb0e7"
  },
  {
    "url": "senior/2.typescript/10.infer.html",
    "revision": "972d8238419f20b9e217dc3565bb49e1"
  },
  {
    "url": "senior/2.typescript/11.overlapping.html",
    "revision": "7c3af056b13d84d80fc6a21bc8ef2c28"
  },
  {
    "url": "senior/2.typescript/12.condition.html",
    "revision": "e82b5846c040ea2638c56f9328bb4661"
  },
  {
    "url": "senior/2.typescript/13.builtin.html",
    "revision": "4aa36d9998e9d186641b6a29f8c79535"
  },
  {
    "url": "senior/2.typescript/14.package.html",
    "revision": "460fcf3816380761b31aca27af59a8a1"
  },
  {
    "url": "senior/2.typescript/15.custom.html",
    "revision": "91fa29249d5f076f31d25f70ce9294ba"
  },
  {
    "url": "senior/2.typescript/16.unknown.html",
    "revision": "eb8ed663f3c3c852dda7c476b99d6269"
  },
  {
    "url": "senior/2.typescript/17.module.html",
    "revision": "1ad0663725fa5020350bd1f0b21b96f3"
  },
  {
    "url": "senior/2.typescript/18.statement.html",
    "revision": "3eb8158a69c9852609e4efcfda93acf2"
  },
  {
    "url": "senior/2.typescript/19.extend.html",
    "revision": "a0c6e386fb3da0b7f0498222feef5906"
  },
  {
    "url": "senior/2.typescript/2.base.html",
    "revision": "b2e6864b3bc3f9775c87e1405a7d07e1"
  },
  {
    "url": "senior/2.typescript/3.deduction.html",
    "revision": "bfe8c2579f6ca81ecbc6b7b3a90162ee"
  },
  {
    "url": "senior/2.typescript/4.type.html",
    "revision": "e95ce738e99a34ddac6fbd51275473aa"
  },
  {
    "url": "senior/2.typescript/5.class.html",
    "revision": "bc8bbd3c4d3db5c5615ecb9c15ee800b"
  },
  {
    "url": "senior/2.typescript/6.interface.html",
    "revision": "b3f5ee68ea833bc2d8ea2f88a34555fd"
  },
  {
    "url": "senior/2.typescript/7.generic.html",
    "revision": "399a2677bb21775616d3883b3bc23137"
  },
  {
    "url": "senior/2.typescript/8.compatible.html",
    "revision": "ea7cf4b776aeb636f25e988785162891"
  },
  {
    "url": "senior/2.typescript/9.protect.html",
    "revision": "4f11e9987b62852f33c3462792c9888d"
  },
  {
    "url": "senior/3.deploy/1.index.html",
    "revision": "ce2c1e1bfa65bfc83c3b22373a4cb939"
  },
  {
    "url": "senior/3.deploy/1.local.html",
    "revision": "31ba0b61482928f1aacef7a86bd021b2"
  },
  {
    "url": "senior/3.deploy/2.gitlab.html",
    "revision": "e9fee92a46e81f85408169572f79f61a"
  },
  {
    "url": "senior/3.deploy/3.genkins.html",
    "revision": "5eb24e59328528eb4a7ebfb724b4daa3"
  },
  {
    "url": "senior/3.deploy/4.centos.html",
    "revision": "1a579cb825822260d99cc861402ff31d"
  },
  {
    "url": "senior/3.deploy/5.nginx.html",
    "revision": "e873e5c0326047e63ec5e56c18f5c080"
  },
  {
    "url": "senior/4.component/1.button.html",
    "revision": "80de3eede7f6a58f853a6da7ce3f44a2"
  },
  {
    "url": "senior/4.component/1.env.html",
    "revision": "62a74749f7d1452865d0b4aa34d3b310"
  },
  {
    "url": "senior/4.component/1.index.html",
    "revision": "6f6bdd6b9275c1ff34a506564f751308"
  },
  {
    "url": "senior/4.component/1.recursion.html",
    "revision": "d5acd3dc170fb52c720405b1f67597ba"
  },
  {
    "url": "senior/4.component/10.tree.html",
    "revision": "7b5adbb40f77e76cd938df415235c1ec"
  },
  {
    "url": "senior/4.component/12.table.html",
    "revision": "09a0806e7375dcb3ab75cbc65c17d59f"
  },
  {
    "url": "senior/4.component/13.publish.html",
    "revision": "20388c23a27b9ab3879b2157ef41d09e"
  },
  {
    "url": "senior/4.component/2.dropdown.html",
    "revision": "10fff53731004786fa3c350dbe67c103"
  },
  {
    "url": "senior/4.component/3.dialog.html",
    "revision": "5d51d98cf629d4aeddc4b7ecb252370e"
  },
  {
    "url": "senior/4.component/3.form.html",
    "revision": "1f352a1770da3e0f1e16c630e0d2855f"
  },
  {
    "url": "senior/4.component/4.input.html",
    "revision": "4203bb3668f4acacc5db1448e3136c51"
  },
  {
    "url": "senior/4.component/4.render.html",
    "revision": "1363f70fdd608962bd2cb12976d48d2a"
  },
  {
    "url": "senior/4.component/5.checkBox.html",
    "revision": "f71f97b8799fa16c12e117c3d615cb06"
  },
  {
    "url": "senior/4.component/6.cascader.html",
    "revision": "b93af4407596bc3052c1214fde1ef468"
  },
  {
    "url": "senior/4.component/7.date.html",
    "revision": "a31546824078d14db4d46aa3602c045f"
  },
  {
    "url": "senior/4.component/8.dispaly.html",
    "revision": "b1ac3d6231d854673f02902584bb7d0c"
  },
  {
    "url": "senior/4.component/9.alert.html",
    "revision": "a3a091a69587b320703e69b3db85afe8"
  },
  {
    "url": "senior/4.component/9.dynamics.html",
    "revision": "34851556778099817c5ae3475a9603d8"
  },
  {
    "url": "source/vue-cli2.x/1.index.html",
    "revision": "e3ecc1f50884b8830ec76d7fa28f2710"
  },
  {
    "url": "source/vue-cli3.x/1.index.html",
    "revision": "1a6bcc21e79fe78db2c8fea91d998f41"
  },
  {
    "url": "source/vue-router3.x/1.index.html",
    "revision": "443d2e1368dce26ce02150b7a0e6c30c"
  },
  {
    "url": "source/vue-router3.x/2.origin.html",
    "revision": "a46bccaccaabf8a5fa5934aa8ce91f34"
  },
  {
    "url": "source/vue-router4.x/1.index.html",
    "revision": "6104e1217eeed4d650d99522c7df27c9"
  },
  {
    "url": "source/vue2.x/1.index.html",
    "revision": "f8190872ef57b35dc80b54193cb9e0f7"
  },
  {
    "url": "source/vue2.x/10.optimize.html",
    "revision": "757f21abb8b30608b7617d963b067e9c"
  },
  {
    "url": "source/vue2.x/11.gencode.html",
    "revision": "a895071b33215ad63038545354dd9e55"
  },
  {
    "url": "source/vue2.x/12.mount.html",
    "revision": "07165c3093dbecb7d83ffc68e257ec60"
  },
  {
    "url": "source/vue2.x/13._render.html",
    "revision": "07dce4fc0bd9d59f4de52e97742b6394"
  },
  {
    "url": "source/vue2.x/14._update.html",
    "revision": "6c0c376be8997ed327522c8397f8eb74"
  },
  {
    "url": "source/vue2.x/2.initGlobalAPI.html",
    "revision": "e20d1f40f8bff0b8b1145357088f44fc"
  },
  {
    "url": "source/vue2.x/3.initMixin.html",
    "revision": "87fab71d5017b89a5884e3c9199f25f3"
  },
  {
    "url": "source/vue2.x/4.stateMixin.html",
    "revision": "808590b20e73a3ce87417276ba2d6236"
  },
  {
    "url": "source/vue2.x/5.eventsMixin.html",
    "revision": "89fe3b27c6e9724ef5d490856e8a53e0"
  },
  {
    "url": "source/vue2.x/6.lifecycleMixin.html",
    "revision": "430ba3539aa177fbfb85f6337ab3f87a"
  },
  {
    "url": "source/vue2.x/7.renderMixin.html",
    "revision": "03e72313f634b0ce5c664643fd75c855"
  },
  {
    "url": "source/vue2.x/8.mount.html",
    "revision": "f7c0cd55d8a67b2be98deeaf577596ca"
  },
  {
    "url": "source/vue2.x/9.ast.html",
    "revision": "7d05a7324099a489e698472b4f6e054b"
  },
  {
    "url": "source/vue3.x/1.index.html",
    "revision": "95bbef107515f5e4e786302c8021a7ae"
  },
  {
    "url": "source/vue3.x/10.optimize.html",
    "revision": "22a12eb5374a93da6193a047a9e7d7d4"
  },
  {
    "url": "source/vue3.x/11.gencode.html",
    "revision": "2919cfc422e477a387b3c856eb398d66"
  },
  {
    "url": "source/vue3.x/12.mount.html",
    "revision": "91d8fafa635159b0d67cf1a6f7ced1f0"
  },
  {
    "url": "source/vue3.x/13._render.html",
    "revision": "4846abf8980a2b4928961fc2840a8657"
  },
  {
    "url": "source/vue3.x/14._update.html",
    "revision": "67e305e4180ce001e17c46a3ada80226"
  },
  {
    "url": "source/vue3.x/2.initGlobalAPI.html",
    "revision": "b1da15fcb08b8c3858752fd35b1ca0b7"
  },
  {
    "url": "source/vue3.x/3.initMixin.html",
    "revision": "52883d642b83e36e85fd4f52c40ade74"
  },
  {
    "url": "source/vue3.x/4.stateMixin.html",
    "revision": "babb50c7206df20676f20be8fe4b2281"
  },
  {
    "url": "source/vue3.x/5.eventsMixin.html",
    "revision": "219fdf3bbe72562e0c9bebc0114c9f49"
  },
  {
    "url": "source/vue3.x/6.lifecycleMixin.html",
    "revision": "fe5b48ea032fa020eba841b7e320fb4f"
  },
  {
    "url": "source/vue3.x/7.renderMixin.html",
    "revision": "04e6e77c9efe653ff615fe77daffd06d"
  },
  {
    "url": "source/vue3.x/8.mount.html",
    "revision": "6350f3b3c0b0b1192b042fe12ecc69c4"
  },
  {
    "url": "source/vue3.x/9.ast.html",
    "revision": "f3156e6b08a810d829334f22d4da6510"
  },
  {
    "url": "source/vuex3.x/1.index.html",
    "revision": "36d1aab66b78ddcf2d2a3e1647dde720"
  },
  {
    "url": "source/vuex3.x/2.use.html",
    "revision": "dc1cfefc5f2b399001825ff4965b6d34"
  },
  {
    "url": "source/vuex3.x/3.origin.html",
    "revision": "dbf41eaba96e5cf5efbad071eb919d98"
  },
  {
    "url": "source/vuex4.x/1.index.html",
    "revision": "cb1cf9f2298cacd77268309f18baed1e"
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
