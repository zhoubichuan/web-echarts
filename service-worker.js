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
    "revision": "275f93906a3430841d85be4b1991e3cc"
  },
  {
    "url": "assets/css/0.styles.c80d39f6.css",
    "revision": "9ab13416bc502acdf736956ea8aacc26"
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
    "url": "assets/js/10.32f3cb5f.js",
    "revision": "de625049dd517952109e019718487e9b"
  },
  {
    "url": "assets/js/100.47315472.js",
    "revision": "4a80dd1301f3108314317d37a3acadf0"
  },
  {
    "url": "assets/js/101.bb6e3575.js",
    "revision": "162bcee5efdd0d5499b7903ec6c8e7a9"
  },
  {
    "url": "assets/js/102.a7b0818a.js",
    "revision": "808b188b5f63af42b4144e75da1db7be"
  },
  {
    "url": "assets/js/103.cbd9abbe.js",
    "revision": "f60a30f6d147177f5213e5e1ffe76b3f"
  },
  {
    "url": "assets/js/104.a93dcda0.js",
    "revision": "18ee4eebf75bcde91423632818b52310"
  },
  {
    "url": "assets/js/105.e3eafbc3.js",
    "revision": "793eac61e06217b1ca99b4251fd7dbfe"
  },
  {
    "url": "assets/js/106.c82b2c60.js",
    "revision": "f19d69ca4080fab5761669ea70e497fc"
  },
  {
    "url": "assets/js/107.228feb21.js",
    "revision": "f9aa9175ca34cd758a83fd0d3c996edc"
  },
  {
    "url": "assets/js/108.e15d2c46.js",
    "revision": "0e34ed478190c6ffe88ec9da5022ee9a"
  },
  {
    "url": "assets/js/109.d29eba9d.js",
    "revision": "dca43b1268ce5221efa8db54e578932a"
  },
  {
    "url": "assets/js/11.1ce069c6.js",
    "revision": "c160518b08b8841508c4b81535dc07a0"
  },
  {
    "url": "assets/js/110.9207695b.js",
    "revision": "bdb1d66761da44261ac2a39212870ea3"
  },
  {
    "url": "assets/js/111.cca34d58.js",
    "revision": "d64af7c58357ad68911c55a790f8f4dc"
  },
  {
    "url": "assets/js/112.3012c390.js",
    "revision": "a9ae0b15fb8193201589e98b50391c1d"
  },
  {
    "url": "assets/js/113.293e2686.js",
    "revision": "54e2b5065e38233a1bb58ef1997b5091"
  },
  {
    "url": "assets/js/114.7f37a48e.js",
    "revision": "f8c40e7843b208df8a3a090383ab4c52"
  },
  {
    "url": "assets/js/115.b0d6af24.js",
    "revision": "febde8334f30dcd86b0bc3f2bc05afbd"
  },
  {
    "url": "assets/js/116.d87908f3.js",
    "revision": "c5ef47603e9b6b0df20e27ce93193763"
  },
  {
    "url": "assets/js/117.5285e52d.js",
    "revision": "d694ef78ac7dcc4332d0ae24d777203f"
  },
  {
    "url": "assets/js/118.a8c0f9cd.js",
    "revision": "c3a8cb8ba836038b3840e052d5b4bfcd"
  },
  {
    "url": "assets/js/119.a3d30f84.js",
    "revision": "fe67c4e8f3bc2ea02fb0026b4d9fefb4"
  },
  {
    "url": "assets/js/12.d362313a.js",
    "revision": "89362d5f7de0d741220cfbc56e5b9571"
  },
  {
    "url": "assets/js/120.03278467.js",
    "revision": "3a2fa4b02e4077714f879a19b7c91a0c"
  },
  {
    "url": "assets/js/121.0370cd9f.js",
    "revision": "74157291357bda65b22f55debcab1afd"
  },
  {
    "url": "assets/js/122.14a29568.js",
    "revision": "33d2bdbc9ffc56acc6bd6ea3e70eab4d"
  },
  {
    "url": "assets/js/123.f7af57ca.js",
    "revision": "8aad7b14fc2c976097d2d3215ca0d220"
  },
  {
    "url": "assets/js/124.7076a525.js",
    "revision": "611953e285f7d127ea2d3af1a4f5beb9"
  },
  {
    "url": "assets/js/125.fad1be34.js",
    "revision": "3c51f8774f7920d4a1e7eb0ca92690c0"
  },
  {
    "url": "assets/js/126.ebe241de.js",
    "revision": "1e76ed696a35a07964e4ef0a36c2a47e"
  },
  {
    "url": "assets/js/127.e7d6bbaa.js",
    "revision": "274c14684c600393895cf5871b691af9"
  },
  {
    "url": "assets/js/128.4773e525.js",
    "revision": "cb304aa74e3495548402c971db9bbadc"
  },
  {
    "url": "assets/js/129.5c03a1b1.js",
    "revision": "3dd541ba41e7d17309bfc66a9c39525a"
  },
  {
    "url": "assets/js/13.98ee890a.js",
    "revision": "46c9fa90b26ab6de49998d8cbd4035f7"
  },
  {
    "url": "assets/js/130.5df02cc2.js",
    "revision": "13eb52972782907ce1563037a3a478ab"
  },
  {
    "url": "assets/js/131.3d47d675.js",
    "revision": "5f88674de3387e22387a1a82c3089e68"
  },
  {
    "url": "assets/js/132.fd53d6e2.js",
    "revision": "f152ffc8152f971f4bdfbf7c1f654ac3"
  },
  {
    "url": "assets/js/133.1f493a31.js",
    "revision": "705eac9bf046aa473127a1b2ee39ee6c"
  },
  {
    "url": "assets/js/134.3c7cd4c2.js",
    "revision": "06680fdfcdd109c63097c7b25f075465"
  },
  {
    "url": "assets/js/135.b39eb6c7.js",
    "revision": "382262c2b6b4fca5bef36929769efcef"
  },
  {
    "url": "assets/js/136.4ced9153.js",
    "revision": "c444b0f7891d6b4b19996dff1fe8e747"
  },
  {
    "url": "assets/js/137.c272ce3c.js",
    "revision": "936ea9b1f4da8af313e7f68e51bfd176"
  },
  {
    "url": "assets/js/138.738e9f6e.js",
    "revision": "394953408e0c214d3b2bdfa84a1600b1"
  },
  {
    "url": "assets/js/139.891ab7c1.js",
    "revision": "6abb2edf8515458ccba428a4178fff7c"
  },
  {
    "url": "assets/js/14.7b41387a.js",
    "revision": "2eea1c89a5192b6cfd528b9a57614a7f"
  },
  {
    "url": "assets/js/140.e75ad028.js",
    "revision": "e9f1fc9c31297e8e3817a3b3e23bbc70"
  },
  {
    "url": "assets/js/141.8fd6e8ba.js",
    "revision": "604fc808f231f19d26c7217caa4d7c85"
  },
  {
    "url": "assets/js/142.06e678c4.js",
    "revision": "e39ba4b637f3dae0873cfbbdbaede4b4"
  },
  {
    "url": "assets/js/143.b33ad96c.js",
    "revision": "78dc9b0a3175f58d02a58d996f7d97f2"
  },
  {
    "url": "assets/js/144.0bc3737a.js",
    "revision": "3fd33e6f6f92b2b4ea7d91fbe8b2aba4"
  },
  {
    "url": "assets/js/145.c2e01b60.js",
    "revision": "a930db5e63f5be8521fcb1f3ed79b057"
  },
  {
    "url": "assets/js/146.780f1e0e.js",
    "revision": "62a345035073b9c2c1050fdb0cd49351"
  },
  {
    "url": "assets/js/147.a886e857.js",
    "revision": "d755a4b8b82c008b0e3d75c66298e835"
  },
  {
    "url": "assets/js/148.f33659f1.js",
    "revision": "443c7c60f46e7227a4e8e892c6dba765"
  },
  {
    "url": "assets/js/149.15dd5bbf.js",
    "revision": "2479700f0b7e518b31960956f7198e54"
  },
  {
    "url": "assets/js/15.9a883141.js",
    "revision": "b9050eee497d53bd0131183e12dd9fce"
  },
  {
    "url": "assets/js/150.8f7888c8.js",
    "revision": "7ffdbe6248f47c209100e95ae5170197"
  },
  {
    "url": "assets/js/151.80a40ba8.js",
    "revision": "f6788884931d1b59cee8127cc9222a57"
  },
  {
    "url": "assets/js/152.363c32e3.js",
    "revision": "80d084e5450c363a60d38254712d3cba"
  },
  {
    "url": "assets/js/153.74e7c97b.js",
    "revision": "18718510715725e15231c7c3286ddd1c"
  },
  {
    "url": "assets/js/154.6ee31e53.js",
    "revision": "73e0ec6d9e9d241ff65c884e96322e8f"
  },
  {
    "url": "assets/js/155.019c4f54.js",
    "revision": "bb51db747df9d9d77356ba3dec58bfd4"
  },
  {
    "url": "assets/js/16.18f5cd90.js",
    "revision": "4d77e319c2ace5f26abbdb19cf92b9ed"
  },
  {
    "url": "assets/js/17.70d145cc.js",
    "revision": "5df9d0894c0bb0d045053e69e104bf37"
  },
  {
    "url": "assets/js/18.108a55f2.js",
    "revision": "9bfc6b1a6711c29dd0edc5c45ef6fdbd"
  },
  {
    "url": "assets/js/19.98c8ce5f.js",
    "revision": "85b9a116b6b51cb154cc7d8a4307d94e"
  },
  {
    "url": "assets/js/2.3d3c7f91.js",
    "revision": "b51182096d03c1e08f1e9a147a1d8c88"
  },
  {
    "url": "assets/js/20.e3c81fe2.js",
    "revision": "b5462ad14214085959832ad87aacce77"
  },
  {
    "url": "assets/js/21.e1ef2c19.js",
    "revision": "adb174a370a8ab7fa4b3d55a055cab69"
  },
  {
    "url": "assets/js/22.82a3117b.js",
    "revision": "7c437b923cb6cb09e00fe5e149e7258a"
  },
  {
    "url": "assets/js/23.1db2cef6.js",
    "revision": "1cb46c66cf9b83d522797bcabf123f5a"
  },
  {
    "url": "assets/js/24.f3b10dac.js",
    "revision": "4ece218cf94b92715da5897f0c3a60e5"
  },
  {
    "url": "assets/js/25.60a20430.js",
    "revision": "c93783fbe55accd60cce46c9303673f2"
  },
  {
    "url": "assets/js/26.a3e3223c.js",
    "revision": "e600ab5e6e352f99400bc74d4e99fb03"
  },
  {
    "url": "assets/js/27.7f785ea9.js",
    "revision": "93a8f033b01eb0b3303eabbbf449ff43"
  },
  {
    "url": "assets/js/28.13d820b8.js",
    "revision": "45503a302da0341da6810b34c116916a"
  },
  {
    "url": "assets/js/29.d0c768b4.js",
    "revision": "fac9be21b97bf64dac38129f4b89e8be"
  },
  {
    "url": "assets/js/3.39296715.js",
    "revision": "581fc2358af26dc3404599aa02997fd9"
  },
  {
    "url": "assets/js/30.3a7f2a65.js",
    "revision": "a99b2a695f55ea3422f79bba28bab7be"
  },
  {
    "url": "assets/js/31.6ecea4ea.js",
    "revision": "bfe33a24705e7c8d50d52858a83d7982"
  },
  {
    "url": "assets/js/32.55e33bae.js",
    "revision": "2603339481fdf6dedec0e7647115a4b3"
  },
  {
    "url": "assets/js/33.1e5f88c2.js",
    "revision": "d891460b07b6bb75c2ee522b16e254dc"
  },
  {
    "url": "assets/js/34.52f2515a.js",
    "revision": "df597a6029224ae1900c412a297869a9"
  },
  {
    "url": "assets/js/35.df2da8f2.js",
    "revision": "790d5a0ec918996092ad5a1526f2c968"
  },
  {
    "url": "assets/js/36.da203579.js",
    "revision": "b248a3364b3094f5d8414bdec6475661"
  },
  {
    "url": "assets/js/37.d9996bfa.js",
    "revision": "fccb0186172a89d4d01e7559d7cd5574"
  },
  {
    "url": "assets/js/38.11e8e01f.js",
    "revision": "3438c1a9e5ff9369ce5ef9718a65c0ec"
  },
  {
    "url": "assets/js/39.545746b7.js",
    "revision": "8924cdfeed4d27c320b7ce70c14b79bd"
  },
  {
    "url": "assets/js/4.1ae26aed.js",
    "revision": "ff21dbda869de0910f7df7d8f5972e4e"
  },
  {
    "url": "assets/js/40.25d25369.js",
    "revision": "7bcba3d795b7aad200dac4cf65236785"
  },
  {
    "url": "assets/js/41.9d1ddad0.js",
    "revision": "8a9074f65928f4fad350794a1cbad7bd"
  },
  {
    "url": "assets/js/42.0d356ac0.js",
    "revision": "20ca03f74783d6fcd0e5b753e6158fea"
  },
  {
    "url": "assets/js/43.31d34d33.js",
    "revision": "e59b3544939dc9a9dac14126341aef4f"
  },
  {
    "url": "assets/js/44.d02a1dd1.js",
    "revision": "a49d1e47ba6bc68c9246bffc4d6ed543"
  },
  {
    "url": "assets/js/45.ad875889.js",
    "revision": "44a5567c08a990be4765d3a5c8a002b8"
  },
  {
    "url": "assets/js/46.e6831be6.js",
    "revision": "488f70811fd1c057e4bf2e97c72a87e7"
  },
  {
    "url": "assets/js/47.43bb6612.js",
    "revision": "47496003471b7870a306e42ea8b03b4c"
  },
  {
    "url": "assets/js/48.5ff5daf6.js",
    "revision": "d4ac60e9f565730f8a4035f5a0dbf346"
  },
  {
    "url": "assets/js/49.08158e62.js",
    "revision": "fb531592fd9aa5cf85ee846ec79ffd71"
  },
  {
    "url": "assets/js/5.6b5c109f.js",
    "revision": "37fd284cfff1bd6d59535a8f9cd884ac"
  },
  {
    "url": "assets/js/50.68ea868a.js",
    "revision": "20d1d9c12c428a188478e97c896f02bf"
  },
  {
    "url": "assets/js/51.eea65d76.js",
    "revision": "bd0acf0da46b0a0e6bf1ce0ea1e7eed8"
  },
  {
    "url": "assets/js/52.6930a4e5.js",
    "revision": "573059b153c0f5772937352610dccc9a"
  },
  {
    "url": "assets/js/53.a27f42e0.js",
    "revision": "852db6b4c81dfbc0dea2e6884798338d"
  },
  {
    "url": "assets/js/54.40979e1f.js",
    "revision": "8eee3a3a82da2eb2b6ef62ddfe4c2015"
  },
  {
    "url": "assets/js/55.2a5600fb.js",
    "revision": "961c30d415542113a5a9484ce9c2eba6"
  },
  {
    "url": "assets/js/56.9edda34a.js",
    "revision": "b25264d2c9514506a30e6897364f390a"
  },
  {
    "url": "assets/js/57.87302b0e.js",
    "revision": "4f671065e53b458e294f8aeeab3b9a26"
  },
  {
    "url": "assets/js/58.4775485b.js",
    "revision": "af54a3274d58a66b4f25258b26390fc6"
  },
  {
    "url": "assets/js/59.5acecbdf.js",
    "revision": "f994649ead6d024e89b089ddd0db3e79"
  },
  {
    "url": "assets/js/6.4c0be37d.js",
    "revision": "84471b1e7560d41ef012587ffe8282a1"
  },
  {
    "url": "assets/js/60.bcba7d58.js",
    "revision": "8e0eb6d43f7a09ed4f883261add5f6df"
  },
  {
    "url": "assets/js/61.24e4eedd.js",
    "revision": "13febb0f419fbc87000f1641324fd852"
  },
  {
    "url": "assets/js/62.add82f9c.js",
    "revision": "a2aa4f17c8934be215259bcdbb88526f"
  },
  {
    "url": "assets/js/63.d0f7c687.js",
    "revision": "03cbd0bd27a7910865691e7aa4df4654"
  },
  {
    "url": "assets/js/64.3ac8ac15.js",
    "revision": "e728643bc55ed836c31725888abf37cb"
  },
  {
    "url": "assets/js/65.603135ea.js",
    "revision": "a8db9d24aea7b1b135e72246aa62b03a"
  },
  {
    "url": "assets/js/66.349b8cc1.js",
    "revision": "3ba134e2fbb3efb00fb9e16db5f56cef"
  },
  {
    "url": "assets/js/67.d9b09a13.js",
    "revision": "f2a4a82e9ec7ff333006e6a3949fcfee"
  },
  {
    "url": "assets/js/68.da6a513d.js",
    "revision": "5510ba1e03a1bc4e56a79c87d747fbe1"
  },
  {
    "url": "assets/js/69.014b3881.js",
    "revision": "9189ad0a74ea115d6d7dcfa0287751ad"
  },
  {
    "url": "assets/js/7.1bafd912.js",
    "revision": "4133208ad387b423556cd644f93dec98"
  },
  {
    "url": "assets/js/70.96485d0d.js",
    "revision": "3bb7f2867e2e8395766c8f66ef8bc063"
  },
  {
    "url": "assets/js/71.a3c1c242.js",
    "revision": "995f1fd5d95ed11b54693584506ff331"
  },
  {
    "url": "assets/js/72.3d366b71.js",
    "revision": "e11e11c15f27decf0d3da862e0db66ea"
  },
  {
    "url": "assets/js/73.4a3e1f22.js",
    "revision": "fa6cad507bf76e08bdcfa467c92ee666"
  },
  {
    "url": "assets/js/74.d2a0fba0.js",
    "revision": "a0d5765a6e83f6e9123e1bd6b9a7367c"
  },
  {
    "url": "assets/js/75.8dd4572d.js",
    "revision": "796061b1d90dd20cad2add4358794b6b"
  },
  {
    "url": "assets/js/76.a1750c26.js",
    "revision": "3fa5d37a0df6abca4349e5be42819d9a"
  },
  {
    "url": "assets/js/77.3c09b2a0.js",
    "revision": "491e8258649000c77b3d6a931286c164"
  },
  {
    "url": "assets/js/78.1fc26170.js",
    "revision": "66729612064896b23b1f41eb43f0f752"
  },
  {
    "url": "assets/js/79.10500166.js",
    "revision": "daff7716acd109775cdcb8f0195e6454"
  },
  {
    "url": "assets/js/8.b13304b5.js",
    "revision": "65def5170fab06049ba43d75c9386c65"
  },
  {
    "url": "assets/js/80.b6d18026.js",
    "revision": "b22e0f64dd50f16cadff46afb5281569"
  },
  {
    "url": "assets/js/81.93680a77.js",
    "revision": "e3cc2aff9f9adccd0d244b2aa27c44dd"
  },
  {
    "url": "assets/js/82.5a4f7d80.js",
    "revision": "3ed576ebdbd10d881b18ad7228ebc5af"
  },
  {
    "url": "assets/js/83.eb5a7f19.js",
    "revision": "5aeffeafd4c96b57dd3bf152396d4aad"
  },
  {
    "url": "assets/js/84.1bcacf7f.js",
    "revision": "0a306d13be6946cab208460503906831"
  },
  {
    "url": "assets/js/85.eaa97bb6.js",
    "revision": "189263ac7b6e0bc6e294c8fa1f0ec2d9"
  },
  {
    "url": "assets/js/86.f05dc2f8.js",
    "revision": "670142b4631ee66ff53ca87c55904744"
  },
  {
    "url": "assets/js/87.05906ed0.js",
    "revision": "af1e32a85da552c5f4317d27644091ba"
  },
  {
    "url": "assets/js/88.6ab6d617.js",
    "revision": "3353c4c1a16372b31aad0ec29133298a"
  },
  {
    "url": "assets/js/89.01f0694d.js",
    "revision": "599d50350c7dd840b36637a85e7e27f4"
  },
  {
    "url": "assets/js/9.81259956.js",
    "revision": "0ad203f49c525318b908f770acebcfa1"
  },
  {
    "url": "assets/js/90.acfaa473.js",
    "revision": "79174ee43cf18f749c6eca6775a7574e"
  },
  {
    "url": "assets/js/91.89ae7391.js",
    "revision": "2a0f94f67f7e5d41aa455e49224778bf"
  },
  {
    "url": "assets/js/92.e1d16ff7.js",
    "revision": "4f0061b5e6c4c9d99b5bd8086633370b"
  },
  {
    "url": "assets/js/93.4bb5d071.js",
    "revision": "e33565fff2b91fa0e80b3ee465cb54d8"
  },
  {
    "url": "assets/js/94.effd8b4f.js",
    "revision": "847252bd37370d59d1dfea4154bd6add"
  },
  {
    "url": "assets/js/95.300cf29f.js",
    "revision": "df0fb791a47ebed6676408b09baffc22"
  },
  {
    "url": "assets/js/96.a188ed7e.js",
    "revision": "5f9c5446e0a6460128a1bd9e4c37a153"
  },
  {
    "url": "assets/js/97.163adb9b.js",
    "revision": "9b2b2fc4a579e321e8666fbebb78c816"
  },
  {
    "url": "assets/js/98.d7620dc9.js",
    "revision": "0aca4781a9d5b2ce08f3fccbf242a4c1"
  },
  {
    "url": "assets/js/99.de5d6fd7.js",
    "revision": "4b9f91e812e99f7edbc0d6fe93a284b2"
  },
  {
    "url": "base/api/1.echarts.html",
    "revision": "916f24e544138a82f1bac46ee393f4f4"
  },
  {
    "url": "base/api/1.index.html",
    "revision": "b2ab65229fff28fe155c00bf81fbe86d"
  },
  {
    "url": "base/api/2.echartsInstance.html",
    "revision": "e7f0370fc8c471402ac455bfff4a25d4"
  },
  {
    "url": "base/api/3.action.html",
    "revision": "e63e66c970c36dfc3d416ace66165753"
  },
  {
    "url": "base/api/4.events.html",
    "revision": "cc64c756cc57b64372f9e5a767dc7f60"
  },
  {
    "url": "base/components/1.index.html",
    "revision": "1f21f045e274a7d408b6499e4a920730"
  },
  {
    "url": "base/components/1.legend.html",
    "revision": "4bcae9cdedde4d78a75448bbcb0b9cc7"
  },
  {
    "url": "base/components/2.grid.html",
    "revision": "ff3705be193cf306e2d1c428faa86ae7"
  },
  {
    "url": "base/components/2.polar.html",
    "revision": "a122596dbe74b297ca279b1fd5243818"
  },
  {
    "url": "base/components/2.radiusAxis.html",
    "revision": "725038060cc90022cd3dfca53d570876"
  },
  {
    "url": "base/components/2.xAxis.html",
    "revision": "da60cd1db0916a41a253af2aa251a0c9"
  },
  {
    "url": "base/components/2.yAxis.html",
    "revision": "e958d157b09d07026b6ef4031deeebfe"
  },
  {
    "url": "base/components/3.angleAxis.html",
    "revision": "68cbfe72c9d30ae646861aa3019ab032"
  },
  {
    "url": "base/components/4.radar.html",
    "revision": "d6f4ba93cd0b0373051569ea77409f61"
  },
  {
    "url": "base/components/5.dataZoom.html",
    "revision": "5972b4a47e47c91d8dbcda14c1e31461"
  },
  {
    "url": "base/components/6.visualMap.html",
    "revision": "a4add8679fc4808729e6a1d19a02acd0"
  },
  {
    "url": "base/components/7.tooltip.html",
    "revision": "c5c761d9ad1f0c07b72a87d2688fabde"
  },
  {
    "url": "base/components/8.geo.html",
    "revision": "c00328c428f764a48ea773839f0d0238"
  },
  {
    "url": "base/gl/1.index.html",
    "revision": "3578709969e9d6365de088a92d3b821b"
  },
  {
    "url": "base/gl/1.scatter3D.html",
    "revision": "0dacd11338560c471b4539a06dd18220"
  },
  {
    "url": "base/gl/10.flowGL.html",
    "revision": "ddffa710f512a100c15cb2955382a25f"
  },
  {
    "url": "base/gl/2.bar3D.html",
    "revision": "b6c68350321edfd6a8151edc19b711e3"
  },
  {
    "url": "base/gl/3.line3D.html",
    "revision": "faf739147bfad5c421a3069d5f8c35b9"
  },
  {
    "url": "base/gl/4.lines3D.html",
    "revision": "94305e3bf2fab08728283cb53a456cbe"
  },
  {
    "url": "base/gl/5.map3D.html",
    "revision": "8d20deb67f5ced284f1b93aadf3d82f0"
  },
  {
    "url": "base/gl/6.surface.html",
    "revision": "523031ee4818a4eaf22ef988437904d1"
  },
  {
    "url": "base/gl/7.polygons3D.html",
    "revision": "d08805a5050f47c39f7bbaad69657a42"
  },
  {
    "url": "base/gl/8.scatterGL.html",
    "revision": "4ff9af05f1d09ebaa544ac15acd0057f"
  },
  {
    "url": "base/gl/9.graphGL.html",
    "revision": "4542164c364756a3d693757ac706cad0"
  },
  {
    "url": "base/series/1.index.html",
    "revision": "9a31a9dde762491c861cec9b5caafdf4"
  },
  {
    "url": "base/series/1.line.html",
    "revision": "4cc452136dc56ad94b0939e1c07c0076"
  },
  {
    "url": "base/series/10.boxplot.html",
    "revision": "a8a7693dfae5618f4d58f9783714499a"
  },
  {
    "url": "base/series/11.candlestick.html",
    "revision": "adc1b12fa2518135eacf16888d3c60a5"
  },
  {
    "url": "base/series/12.heatmap.html",
    "revision": "8d4b2c85fad0a57a9b3451c0886118ee"
  },
  {
    "url": "base/series/13.map.html",
    "revision": "a7b6959cf6a34be8309a3f69a6df66d1"
  },
  {
    "url": "base/series/14.parallel.html",
    "revision": "da0498f95cccd4f376f0ca189f7a8081"
  },
  {
    "url": "base/series/15.lines.html",
    "revision": "2d8edb48922c7455470602eaec85a990"
  },
  {
    "url": "base/series/16.graph.html",
    "revision": "f0dc4c751f7b0abb246509d82d5572ac"
  },
  {
    "url": "base/series/17.sankey.html",
    "revision": "a9d4f4906efe3f05af6b781e1f05d7d7"
  },
  {
    "url": "base/series/18.funnel.html",
    "revision": "88f81e83b8c83321659ec90a236549e1"
  },
  {
    "url": "base/series/19.gauge.html",
    "revision": "3a8192e6a90f3bcf01ddb99fc222f404"
  },
  {
    "url": "base/series/2.bar.html",
    "revision": "b258c100f19ab58e36797ad54ac984ff"
  },
  {
    "url": "base/series/20.pictorialBar.html",
    "revision": "442dc5ce67071e79e8f464ccec4bc6a8"
  },
  {
    "url": "base/series/21.themeRiver.html",
    "revision": "187c6ddc8d3113b196de475b13bb8188"
  },
  {
    "url": "base/series/22.custom.html",
    "revision": "f5dd3a22464f1b6ae22cfabc356a9406"
  },
  {
    "url": "base/series/3.pie.html",
    "revision": "296069ed747c20577772c22bbece5c17"
  },
  {
    "url": "base/series/4.scatter.html",
    "revision": "add883aed5822636334946d612103e26"
  },
  {
    "url": "base/series/5.effectScatter.html",
    "revision": "f8f210e1f29bdb13cc158b72877e899d"
  },
  {
    "url": "base/series/6.radar.html",
    "revision": "a75065f93e3e9e4fe38a4965c8f919e3"
  },
  {
    "url": "base/series/7.tree.html",
    "revision": "280e66ed0af4b1c9d0533d879727534d"
  },
  {
    "url": "base/series/8.treemap.html",
    "revision": "f441abfff2d212d2b75c0c0a53ecd6f9"
  },
  {
    "url": "base/series/9.sunburst.html",
    "revision": "3a5c676cb65568462461313cd28642fe"
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
    "revision": "2247bc0b1ae1e62b967df692c516819e"
  },
  {
    "url": "mock/http.js",
    "revision": "a219140640bec4dfbe8f4fe88d351ed8"
  },
  {
    "url": "senior/1.micro/1.index.html",
    "revision": "932cb2b06f1eee61bdc67096c00285dc"
  },
  {
    "url": "senior/1.micro/1.singlespa.html",
    "revision": "f075e4e16c68c9ff0badf08fff2d3ee4"
  },
  {
    "url": "senior/1.micro/1.singlespa2.html",
    "revision": "0ee9eb3bd5b4f204efa98ce6ef0b8303"
  },
  {
    "url": "senior/1.micro/2.qiankun.html",
    "revision": "4f4b2b232cd9299a812519a7df13e6f9"
  },
  {
    "url": "senior/1.micro/2.qiankun2.html",
    "revision": "4c9f31470c3f094ce94b20d4f792f9c4"
  },
  {
    "url": "senior/1.micro/3.share.html",
    "revision": "6e82768cfb1fe7bf0fdd17c63437ff3b"
  },
  {
    "url": "senior/1.micro/4.dev.html",
    "revision": "3e61488fc8494e7f0db420d55da05fc7"
  },
  {
    "url": "senior/2.typescript/1.env.html",
    "revision": "5be70644e3d03b66de94292540e7219c"
  },
  {
    "url": "senior/2.typescript/1.index.html",
    "revision": "e9d588274064de7d89bd624b500a47ee"
  },
  {
    "url": "senior/2.typescript/10.infer.html",
    "revision": "6e8aaf9b623df148cda4cca6b314e49d"
  },
  {
    "url": "senior/2.typescript/11.overlapping.html",
    "revision": "9f30b3a83f6ede5d6c275ae6df7b99e7"
  },
  {
    "url": "senior/2.typescript/12.condition.html",
    "revision": "723a729c60b5bbff47432f7b06ff8ccc"
  },
  {
    "url": "senior/2.typescript/13.builtin.html",
    "revision": "5714aba6916674333b1a957bb65686dd"
  },
  {
    "url": "senior/2.typescript/14.package.html",
    "revision": "27b79e958babd4ef1d24c60287259718"
  },
  {
    "url": "senior/2.typescript/15.custom.html",
    "revision": "be3ee3b5deeb6b1568fb38a456a5e2c3"
  },
  {
    "url": "senior/2.typescript/16.unknown.html",
    "revision": "9c3991cee725d5f2bd011264a7eda839"
  },
  {
    "url": "senior/2.typescript/17.module.html",
    "revision": "b502f87ac7089f5244c716d903f06a62"
  },
  {
    "url": "senior/2.typescript/18.statement.html",
    "revision": "c0dccfa5182f3047efe2cbf34cfc83f7"
  },
  {
    "url": "senior/2.typescript/19.extend.html",
    "revision": "e2f7d82d8c035d3b5115c63154b45066"
  },
  {
    "url": "senior/2.typescript/2.base.html",
    "revision": "5907036495b28f6c61d9e3521a59fc4e"
  },
  {
    "url": "senior/2.typescript/3.deduction.html",
    "revision": "6243a5b93b2260805adea65f1f0b8209"
  },
  {
    "url": "senior/2.typescript/4.type.html",
    "revision": "52510e51ed86e1d721c2f971b3dba72d"
  },
  {
    "url": "senior/2.typescript/5.class.html",
    "revision": "fa0778350c52301f51c3162ec7a7fdd2"
  },
  {
    "url": "senior/2.typescript/6.interface.html",
    "revision": "27cd7acb3dfda796b668115e852bb3a9"
  },
  {
    "url": "senior/2.typescript/7.generic.html",
    "revision": "3778679b6a633674c6b337fc9f43debb"
  },
  {
    "url": "senior/2.typescript/8.compatible.html",
    "revision": "ff418c91a288753762a7b1e57b8b59dc"
  },
  {
    "url": "senior/2.typescript/9.protect.html",
    "revision": "8c526adf17e657b6727a7b656ba02193"
  },
  {
    "url": "senior/3.deploy/1.index.html",
    "revision": "e0f50d0bf3e5c648860d712292956f67"
  },
  {
    "url": "senior/3.deploy/1.local.html",
    "revision": "caba92f67183b7f3c3ec279b7603603f"
  },
  {
    "url": "senior/3.deploy/2.gitlab.html",
    "revision": "ae440d2bc7be9385ccc68b551509d2b6"
  },
  {
    "url": "senior/3.deploy/3.genkins.html",
    "revision": "cfbd21ce1cc8856c5bc4e392ed420e68"
  },
  {
    "url": "senior/3.deploy/4.centos.html",
    "revision": "0b566a1427da0676b1bf16feb9b954d8"
  },
  {
    "url": "senior/3.deploy/5.nginx.html",
    "revision": "e5ac3f0348cf73bba6c1cb3c1d1cc39b"
  },
  {
    "url": "senior/4.component/1.button.html",
    "revision": "786a68f5e76eaaad90b0b8db741ccfd3"
  },
  {
    "url": "senior/4.component/1.env.html",
    "revision": "8118e7ee6e63362b858b742650b09b4b"
  },
  {
    "url": "senior/4.component/1.index.html",
    "revision": "d820f3033b19de41d3c2bd4dc6df68bb"
  },
  {
    "url": "senior/4.component/1.recursion.html",
    "revision": "6c24dbc2c6910cc04f215d45d16e395d"
  },
  {
    "url": "senior/4.component/10.tree.html",
    "revision": "92a7e897740bdab9bb5dd766ec0a6070"
  },
  {
    "url": "senior/4.component/12.table.html",
    "revision": "a8e227f2d7440f4104edb984a666b1b7"
  },
  {
    "url": "senior/4.component/13.publish.html",
    "revision": "24ec370584da246586f8bd5a2251901b"
  },
  {
    "url": "senior/4.component/2.dropdown.html",
    "revision": "d1fdc5f289dfefc6bc303b4c3059b4bf"
  },
  {
    "url": "senior/4.component/3.dialog.html",
    "revision": "26468fcacf78696b583d4e9b85e4f2e9"
  },
  {
    "url": "senior/4.component/3.form.html",
    "revision": "4eae6d4a030d20e534fe8b6538187c82"
  },
  {
    "url": "senior/4.component/4.input.html",
    "revision": "e8b68f6569f3247841c5541e1b478eb8"
  },
  {
    "url": "senior/4.component/4.render.html",
    "revision": "312f3a6717ab20e62881143eb2441260"
  },
  {
    "url": "senior/4.component/5.checkBox.html",
    "revision": "315e9f12c2871a494f91378afbfff182"
  },
  {
    "url": "senior/4.component/6.cascader.html",
    "revision": "50b64c82cef51c2c4ff4b877ccc3f451"
  },
  {
    "url": "senior/4.component/7.date.html",
    "revision": "72c0fb60eea054a2c3849a0c244c094a"
  },
  {
    "url": "senior/4.component/8.dispaly.html",
    "revision": "101c8a5372dd536246a3d1d420781970"
  },
  {
    "url": "senior/4.component/9.alert.html",
    "revision": "cceb3d34f1a9e421b0dc2b6a1a9f01ee"
  },
  {
    "url": "senior/4.component/9.dynamics.html",
    "revision": "6411a78c4e27dd3e3390743c57772a95"
  },
  {
    "url": "source/vue-cli2.x/1.index.html",
    "revision": "5564de186cf91f59048145129c9a8f4c"
  },
  {
    "url": "source/vue-cli3.x/1.index.html",
    "revision": "cc8888b9c7e61dde0ee53b8512dae17f"
  },
  {
    "url": "source/vue-router3.x/1.index.html",
    "revision": "7c491de8b17fc163f66872ddfb2650a7"
  },
  {
    "url": "source/vue-router3.x/2.origin.html",
    "revision": "a31effe1870a26f8cab942460b855dfa"
  },
  {
    "url": "source/vue-router4.x/1.index.html",
    "revision": "f6889395845b2fa47df6dae73b3154ab"
  },
  {
    "url": "source/vue2.x/1.index.html",
    "revision": "cfe1a6d56cfe8650712625012dbcee53"
  },
  {
    "url": "source/vue2.x/10.optimize.html",
    "revision": "75529e1468bdb8b12d04cbd671948d8d"
  },
  {
    "url": "source/vue2.x/11.gencode.html",
    "revision": "c64e14fbca2a40eac112f50db95f080f"
  },
  {
    "url": "source/vue2.x/12.mount.html",
    "revision": "b8d7ceb50c602653ccf38e1428d27912"
  },
  {
    "url": "source/vue2.x/13._render.html",
    "revision": "1489d5c436bf6541730a923cc773c79e"
  },
  {
    "url": "source/vue2.x/14._update.html",
    "revision": "ea5451ea6e159b52ae65a3616a026536"
  },
  {
    "url": "source/vue2.x/2.initGlobalAPI.html",
    "revision": "40eaa584718eb7b4f9712a62cdf0ea83"
  },
  {
    "url": "source/vue2.x/3.initMixin.html",
    "revision": "22d936f75eeeabd5fc204e1287cbb0b5"
  },
  {
    "url": "source/vue2.x/4.stateMixin.html",
    "revision": "e4fe48b446b6672b609acd109fefaf7d"
  },
  {
    "url": "source/vue2.x/5.eventsMixin.html",
    "revision": "f5e2bc22369e2752db91503cc8f0b353"
  },
  {
    "url": "source/vue2.x/6.lifecycleMixin.html",
    "revision": "c71956103347c4a9b6182cf78cd98b62"
  },
  {
    "url": "source/vue2.x/7.renderMixin.html",
    "revision": "05e3ff995be47490ee8b1cfd02afcdc1"
  },
  {
    "url": "source/vue2.x/8.mount.html",
    "revision": "a9582a75f1cad80769601b3c1a9c5856"
  },
  {
    "url": "source/vue2.x/9.ast.html",
    "revision": "045fef7a5d423a9fc9d8ccdff6d333b4"
  },
  {
    "url": "source/vue3.x/1.index.html",
    "revision": "02f692ea75aa6ecd09232e14d6681e2f"
  },
  {
    "url": "source/vue3.x/10.optimize.html",
    "revision": "4e117ed8161855681ee2efce733e08c3"
  },
  {
    "url": "source/vue3.x/11.gencode.html",
    "revision": "55486a40febdf7e06c15d027969c7faf"
  },
  {
    "url": "source/vue3.x/12.mount.html",
    "revision": "05c9c168c129e191855684a52bcd3ff2"
  },
  {
    "url": "source/vue3.x/13._render.html",
    "revision": "ea41ab7ff2bc46173c45226c37069149"
  },
  {
    "url": "source/vue3.x/14._update.html",
    "revision": "4ae8d0ef4d9379650abaed497deb18b4"
  },
  {
    "url": "source/vue3.x/2.initGlobalAPI.html",
    "revision": "a958f0e8f2b36b9b10508045f6aa92d0"
  },
  {
    "url": "source/vue3.x/3.initMixin.html",
    "revision": "561905ad56e57a57a75d00fbf79b64a1"
  },
  {
    "url": "source/vue3.x/4.stateMixin.html",
    "revision": "302f2d1fa1be11bdb6643b7bb8bbf456"
  },
  {
    "url": "source/vue3.x/5.eventsMixin.html",
    "revision": "dfe77046f7d306235843912126bd3414"
  },
  {
    "url": "source/vue3.x/6.lifecycleMixin.html",
    "revision": "b572f4055b56d982cef4bbecc8167b7d"
  },
  {
    "url": "source/vue3.x/7.renderMixin.html",
    "revision": "38e76f62fa897d20bdd9255d8c17f734"
  },
  {
    "url": "source/vue3.x/8.mount.html",
    "revision": "0462332ca97df4a7aae46ac5332bbb1d"
  },
  {
    "url": "source/vue3.x/9.ast.html",
    "revision": "38b7222226de0592765967c6aad83c21"
  },
  {
    "url": "source/vuex3.x/1.index.html",
    "revision": "10f240e9a904989fe59a154c7b75a361"
  },
  {
    "url": "source/vuex3.x/2.use.html",
    "revision": "4b0521b679f9e2cb56b15f4a1721fb8b"
  },
  {
    "url": "source/vuex3.x/3.origin.html",
    "revision": "57c47f692886e8903dfd8093801a2da7"
  },
  {
    "url": "source/vuex4.x/1.index.html",
    "revision": "f563c538a14b19aa9c312d297564f968"
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
