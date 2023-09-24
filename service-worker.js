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
    "revision": "35ea9433523a10c717880784a470c4e2"
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
    "url": "assets/js/49.9faa456c.js",
    "revision": "719c187847f2d235a49ad2f800ce8e76"
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
    "revision": "586a4d810d0dab27518ab87b7e5e1709"
  },
  {
    "url": "base/api/1.index.html",
    "revision": "7b3981cec7fab43315cf67bba33f9cf0"
  },
  {
    "url": "base/api/2.echartsInstance.html",
    "revision": "20ce3260354c335fdc4d6dee7808631f"
  },
  {
    "url": "base/api/3.action.html",
    "revision": "8805b902c3c1fb04888acb1185251790"
  },
  {
    "url": "base/api/4.events.html",
    "revision": "e8275b63c3034b85a416323cf39f395c"
  },
  {
    "url": "base/components/1.index.html",
    "revision": "bce751ac6442f9aea79eeb08ebf390c5"
  },
  {
    "url": "base/components/1.legend.html",
    "revision": "aec436400fbb4664a779519821eba66d"
  },
  {
    "url": "base/components/2.grid.html",
    "revision": "3521326aba0992eb66e2cb55354bfa9d"
  },
  {
    "url": "base/components/2.polar.html",
    "revision": "68ac6601d4c1d1a0b6572f9ccd621386"
  },
  {
    "url": "base/components/2.radiusAxis.html",
    "revision": "00e3c48f255ba8728293798cfac140ee"
  },
  {
    "url": "base/components/2.xAxis.html",
    "revision": "14869cda8ed7b5795ed85ac4d85257b6"
  },
  {
    "url": "base/components/2.yAxis.html",
    "revision": "3b622b496a9323089e91d0daca8fec28"
  },
  {
    "url": "base/components/3.angleAxis.html",
    "revision": "6ea26c4bc777a1ad2a73af8289b075c7"
  },
  {
    "url": "base/components/4.radar.html",
    "revision": "a816635a87149734052be48d425e2529"
  },
  {
    "url": "base/components/5.dataZoom.html",
    "revision": "2304121ea1f6176e71e3696e2ca779ed"
  },
  {
    "url": "base/components/6.visualMap.html",
    "revision": "26192d67e3b10d1f0482e254a92ebeff"
  },
  {
    "url": "base/components/7.tooltip.html",
    "revision": "ea5ba556d052d5e5c92314735148ed72"
  },
  {
    "url": "base/components/8.geo.html",
    "revision": "413b51b57b907f2d8336b6e7ce08928f"
  },
  {
    "url": "base/gl/1.index.html",
    "revision": "d6d6a7b155dee7a8ad281490a510d426"
  },
  {
    "url": "base/gl/1.scatter3D.html",
    "revision": "385187848cfb32487b254257770e13d4"
  },
  {
    "url": "base/gl/10.flowGL.html",
    "revision": "2b46bfe3210437775dba1e1f9d5541df"
  },
  {
    "url": "base/gl/2.bar3D.html",
    "revision": "13a4d67971e435612591fa92b98f8eaf"
  },
  {
    "url": "base/gl/3.line3D.html",
    "revision": "ec559ba47b86dd00933e7a5bc43a48ad"
  },
  {
    "url": "base/gl/4.lines3D.html",
    "revision": "f039dad532d5c65ca1f4e5b2a8300280"
  },
  {
    "url": "base/gl/5.map3D.html",
    "revision": "3ddcb223bf88841c014b222d64d4fd9b"
  },
  {
    "url": "base/gl/6.surface.html",
    "revision": "61b2b9b47eb59adf2bd06aacd46d713b"
  },
  {
    "url": "base/gl/7.polygons3D.html",
    "revision": "ab71c20632edec14f7b59a3c1c0a9142"
  },
  {
    "url": "base/gl/8.scatterGL.html",
    "revision": "28320d5a0df30c34cfd151349fe028fc"
  },
  {
    "url": "base/gl/9.graphGL.html",
    "revision": "2c125e07993eb5963881c9df5dd3ac8a"
  },
  {
    "url": "base/series/1.index.html",
    "revision": "2677535f701816c75e3ae542ab2dc2fe"
  },
  {
    "url": "base/series/1.line.html",
    "revision": "90af4d589150a76cdae1a190ee53e44d"
  },
  {
    "url": "base/series/10.boxplot.html",
    "revision": "8aab1ab44b082c1cb364938e0f129162"
  },
  {
    "url": "base/series/11.candlestick.html",
    "revision": "656f233f11ba623dce0680daf14da1dd"
  },
  {
    "url": "base/series/12.heatmap.html",
    "revision": "ed30296365185912539dd0b977a22d80"
  },
  {
    "url": "base/series/13.map.html",
    "revision": "087640618d2457c780b7bc539b571277"
  },
  {
    "url": "base/series/14.parallel.html",
    "revision": "108da3e34081c77d3c9dab440e410087"
  },
  {
    "url": "base/series/15.lines.html",
    "revision": "84ae8ccb0feabdc59e037d48c004326a"
  },
  {
    "url": "base/series/16.graph.html",
    "revision": "62982f630e9578997d5dc2bc766fc0e1"
  },
  {
    "url": "base/series/17.sankey.html",
    "revision": "a23724f7cdf562bb53e35517aafa8e60"
  },
  {
    "url": "base/series/18.funnel.html",
    "revision": "cae8df6e4ce89db07934104271296cdf"
  },
  {
    "url": "base/series/19.gauge.html",
    "revision": "63e7dd99698a4bad972d166a5dde6723"
  },
  {
    "url": "base/series/2.bar.html",
    "revision": "23f7f100ab4e191eda03be5dba483137"
  },
  {
    "url": "base/series/20.pictorialBar.html",
    "revision": "55298f8adcdbdb63aed001a1bcca5910"
  },
  {
    "url": "base/series/21.themeRiver.html",
    "revision": "710633906c21f0fcd27ce346142696b7"
  },
  {
    "url": "base/series/22.custom.html",
    "revision": "7da26b23868a7f205cb17266aae4a5e5"
  },
  {
    "url": "base/series/3.pie.html",
    "revision": "c0e9f2a873084559cb93c14be671de60"
  },
  {
    "url": "base/series/4.scatter.html",
    "revision": "cd8eda1d0047a0d9be2e38ec931a1134"
  },
  {
    "url": "base/series/5.effectScatter.html",
    "revision": "e404c1c6b783f50e9d39bf39599126b3"
  },
  {
    "url": "base/series/6.radar.html",
    "revision": "c671dfee9b382cc0436f73d064540b02"
  },
  {
    "url": "base/series/7.tree.html",
    "revision": "170a38eadf1cfd94cdb838f8f6dde0f0"
  },
  {
    "url": "base/series/8.treemap.html",
    "revision": "e47e2422eba8c8dbd8194985688635f1"
  },
  {
    "url": "base/series/9.sunburst.html",
    "revision": "e482d87ce02cf5d211fa6d5d59f9c58a"
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
    "revision": "12a5cd37bb8bd8e5b0e6438831c7851e"
  },
  {
    "url": "mock/http.js",
    "revision": "a219140640bec4dfbe8f4fe88d351ed8"
  },
  {
    "url": "senior/1.micro/1.index.html",
    "revision": "a047394582841ca8a7797828cc6bcbaa"
  },
  {
    "url": "senior/1.micro/1.singlespa.html",
    "revision": "c131386fb3dfce9e3ee40f2f751b80fc"
  },
  {
    "url": "senior/1.micro/1.singlespa2.html",
    "revision": "9e42f21956700ccd1d90f730cfc56a3f"
  },
  {
    "url": "senior/1.micro/2.qiankun.html",
    "revision": "35ae3c3e255cb3e6575e264f933a620a"
  },
  {
    "url": "senior/1.micro/2.qiankun2.html",
    "revision": "6807c2fa81f9c1d2e995998682f232dc"
  },
  {
    "url": "senior/1.micro/3.share.html",
    "revision": "dc602eea27155024d3df934144f680c6"
  },
  {
    "url": "senior/1.micro/4.dev.html",
    "revision": "3203f9ccbe4d9157debae966c0a084eb"
  },
  {
    "url": "senior/2.typescript/1.env.html",
    "revision": "d861d8c34989631fad9bdc3c1fb241bf"
  },
  {
    "url": "senior/2.typescript/1.index.html",
    "revision": "c55ee6d108ec97c0a6c2a67b1f0e28b1"
  },
  {
    "url": "senior/2.typescript/10.infer.html",
    "revision": "455d82f0b1fdfcab4440a28e84d9791c"
  },
  {
    "url": "senior/2.typescript/11.overlapping.html",
    "revision": "5a43895553b6b5c34850dd8f33995661"
  },
  {
    "url": "senior/2.typescript/12.condition.html",
    "revision": "f64c7a03c4332891e5462ebfc1890f57"
  },
  {
    "url": "senior/2.typescript/13.builtin.html",
    "revision": "156a4fcf42dec8bc3d8dd11b8cec1baa"
  },
  {
    "url": "senior/2.typescript/14.package.html",
    "revision": "5fe10d5ab36a9b06746015c80ff666b0"
  },
  {
    "url": "senior/2.typescript/15.custom.html",
    "revision": "7ec9b3178787eba939b45974e04db4c2"
  },
  {
    "url": "senior/2.typescript/16.unknown.html",
    "revision": "a1a762c707c0f5e8644df41b3204043a"
  },
  {
    "url": "senior/2.typescript/17.module.html",
    "revision": "673c0e9b9ae7fbe385963caf58b65d04"
  },
  {
    "url": "senior/2.typescript/18.statement.html",
    "revision": "9ccf4708524f572dabfe9cd9a6828b1a"
  },
  {
    "url": "senior/2.typescript/19.extend.html",
    "revision": "03b020a81f1a7cc8f73329a4205b7bcc"
  },
  {
    "url": "senior/2.typescript/2.base.html",
    "revision": "3c64e46f74cf14122d27e8f274a3b9b2"
  },
  {
    "url": "senior/2.typescript/3.deduction.html",
    "revision": "50fcc9284983c011a9c8c093d3356cce"
  },
  {
    "url": "senior/2.typescript/4.type.html",
    "revision": "43c1a91a8a9764a63af52894c2303067"
  },
  {
    "url": "senior/2.typescript/5.class.html",
    "revision": "3b1f58dffb6074ed1148ad9049f30e06"
  },
  {
    "url": "senior/2.typescript/6.interface.html",
    "revision": "165b0e4a5c99ae8eed38e94a0c72072b"
  },
  {
    "url": "senior/2.typescript/7.generic.html",
    "revision": "5e150987e9e55dff90708165abe74cf9"
  },
  {
    "url": "senior/2.typescript/8.compatible.html",
    "revision": "6e7a1f6e16269467d7051950e3a38e95"
  },
  {
    "url": "senior/2.typescript/9.protect.html",
    "revision": "408ba46d3fe0d82136f51fbdea674066"
  },
  {
    "url": "senior/3.deploy/1.index.html",
    "revision": "af7f958754294f05dacfaef40045fb63"
  },
  {
    "url": "senior/3.deploy/1.local.html",
    "revision": "ea93ad4270834122744a997891a6b314"
  },
  {
    "url": "senior/3.deploy/2.gitlab.html",
    "revision": "426f383c2fdff96e880e6ffbd4de6078"
  },
  {
    "url": "senior/3.deploy/3.genkins.html",
    "revision": "e23a4601f0df3504f9b6634985c903a6"
  },
  {
    "url": "senior/3.deploy/4.centos.html",
    "revision": "42fd2e32bdddbc61a41fa9fbf173e7c1"
  },
  {
    "url": "senior/3.deploy/5.nginx.html",
    "revision": "06106110e9519c6d13dfdaa2e394996a"
  },
  {
    "url": "senior/4.component/1.button.html",
    "revision": "7e67105a96847d3eb78ae8445de5bd50"
  },
  {
    "url": "senior/4.component/1.env.html",
    "revision": "1f65238ff582af530b455a812055fa79"
  },
  {
    "url": "senior/4.component/1.index.html",
    "revision": "a77e47952be841fee291c77768fab410"
  },
  {
    "url": "senior/4.component/1.recursion.html",
    "revision": "99ad14b78bffdf9666d5bd0fded8843e"
  },
  {
    "url": "senior/4.component/10.tree.html",
    "revision": "c503e257555b8877ad393726ca20f156"
  },
  {
    "url": "senior/4.component/12.table.html",
    "revision": "f7c5f673b25ea974d02d3c7eb6417f1b"
  },
  {
    "url": "senior/4.component/13.publish.html",
    "revision": "6aed10c90cad7dcd9cf7dea9dead0705"
  },
  {
    "url": "senior/4.component/2.dropdown.html",
    "revision": "88c25a0c9dcba1735437c1bad6c3dee6"
  },
  {
    "url": "senior/4.component/3.dialog.html",
    "revision": "a19df064652cc077f7995c89f7b0b8b0"
  },
  {
    "url": "senior/4.component/3.form.html",
    "revision": "c825431cbf68dfe5425f544c13f4944d"
  },
  {
    "url": "senior/4.component/4.input.html",
    "revision": "00b363a86718f7a29f91b1b21460bd24"
  },
  {
    "url": "senior/4.component/4.render.html",
    "revision": "cf4d49dd79f8456ea80d9675399f684b"
  },
  {
    "url": "senior/4.component/5.checkBox.html",
    "revision": "61ac87e6980dd2529e669a603f6a0bc6"
  },
  {
    "url": "senior/4.component/6.cascader.html",
    "revision": "872cc53d52e6bf03d375075c29541ebe"
  },
  {
    "url": "senior/4.component/7.date.html",
    "revision": "02eb8b95d349e9e9cdd71c4ba250165f"
  },
  {
    "url": "senior/4.component/8.dispaly.html",
    "revision": "6d193dc9c40e7495b044cc9afa3cbf4b"
  },
  {
    "url": "senior/4.component/9.alert.html",
    "revision": "e055d3df423d3af841ca5204e0f277e4"
  },
  {
    "url": "senior/4.component/9.dynamics.html",
    "revision": "5d089b148632f4bf3d7b8cd3a583b151"
  },
  {
    "url": "source/vue-cli2.x/1.index.html",
    "revision": "ae194d5d18226b0af02342db428db83a"
  },
  {
    "url": "source/vue-cli3.x/1.index.html",
    "revision": "7b57a8d1e184a1453a22a0344849b8f2"
  },
  {
    "url": "source/vue-router3.x/1.index.html",
    "revision": "4fee62da61ae9532dec84b71d2a6605c"
  },
  {
    "url": "source/vue-router3.x/2.origin.html",
    "revision": "fc9cb9abdf585fb361ad206f948e6856"
  },
  {
    "url": "source/vue-router4.x/1.index.html",
    "revision": "ff76035844f2ca1273f91264c67dada4"
  },
  {
    "url": "source/vue2.x/1.index.html",
    "revision": "48a42c29a11dc9a64e7b8081dc733269"
  },
  {
    "url": "source/vue2.x/10.optimize.html",
    "revision": "c0ba25d53f9af2c3b87246e3eb2c91d8"
  },
  {
    "url": "source/vue2.x/11.gencode.html",
    "revision": "4262e885fbaf22d23da6d3dfc60ac147"
  },
  {
    "url": "source/vue2.x/12.mount.html",
    "revision": "3305cbdc5be28dd13c450213b6068d00"
  },
  {
    "url": "source/vue2.x/13._render.html",
    "revision": "f500b5a19b4db7d7bbeb82a2a6bc3be4"
  },
  {
    "url": "source/vue2.x/14._update.html",
    "revision": "9ee4b54de469014e901fbf45f2d0882d"
  },
  {
    "url": "source/vue2.x/2.initGlobalAPI.html",
    "revision": "10c9efc318a2bbda43aa96930bdf0775"
  },
  {
    "url": "source/vue2.x/3.initMixin.html",
    "revision": "7d40e3b62204cd7fd361e4aa6f174c49"
  },
  {
    "url": "source/vue2.x/4.stateMixin.html",
    "revision": "9b8df1a2b637c5fd518555c7991497a1"
  },
  {
    "url": "source/vue2.x/5.eventsMixin.html",
    "revision": "6ee12e3264043c13482ed7c5b8b529a6"
  },
  {
    "url": "source/vue2.x/6.lifecycleMixin.html",
    "revision": "46d693d289183945c47207364ad8a380"
  },
  {
    "url": "source/vue2.x/7.renderMixin.html",
    "revision": "2ae6723d9d4c95811cf9bb08feda30d8"
  },
  {
    "url": "source/vue2.x/8.mount.html",
    "revision": "2a3bd3ebe94a8c17330e1ef77b5e09a8"
  },
  {
    "url": "source/vue2.x/9.ast.html",
    "revision": "04b26cdea5d9c189828f58c7cb262b2f"
  },
  {
    "url": "source/vue3.x/1.index.html",
    "revision": "59d7ea7c650697d3acfa9078cdab373d"
  },
  {
    "url": "source/vue3.x/10.optimize.html",
    "revision": "d10a41642e498f6dcf4c845f26f0637e"
  },
  {
    "url": "source/vue3.x/11.gencode.html",
    "revision": "96357c4c0cb69b3999ed9b4491d33a85"
  },
  {
    "url": "source/vue3.x/12.mount.html",
    "revision": "ff016d838022be29d6ace11dc46f35b0"
  },
  {
    "url": "source/vue3.x/13._render.html",
    "revision": "cc8a9971aee06d8397abd8334ec1c48d"
  },
  {
    "url": "source/vue3.x/14._update.html",
    "revision": "5c1887ff51f79fe5c61a790be2305227"
  },
  {
    "url": "source/vue3.x/2.initGlobalAPI.html",
    "revision": "b06d2b21332f27350fad7fe9d8197fae"
  },
  {
    "url": "source/vue3.x/3.initMixin.html",
    "revision": "a8032d63626da8046d17402fd39fefff"
  },
  {
    "url": "source/vue3.x/4.stateMixin.html",
    "revision": "7766e8122d68cdbe5f4a7a0014182498"
  },
  {
    "url": "source/vue3.x/5.eventsMixin.html",
    "revision": "27165fa4d1da6915887b7eb5435246c1"
  },
  {
    "url": "source/vue3.x/6.lifecycleMixin.html",
    "revision": "37ddc0093160698bf12baf55bd34e970"
  },
  {
    "url": "source/vue3.x/7.renderMixin.html",
    "revision": "c9f00f1ba8267cc12fcde619049046ff"
  },
  {
    "url": "source/vue3.x/8.mount.html",
    "revision": "6a73d8a556e06236e94743065606ab5e"
  },
  {
    "url": "source/vue3.x/9.ast.html",
    "revision": "5f1728d6e2c76e7ca63aa5f27215f598"
  },
  {
    "url": "source/vuex3.x/1.index.html",
    "revision": "c4e034ff723736b7d24948f2cecb9067"
  },
  {
    "url": "source/vuex3.x/2.use.html",
    "revision": "df9d876d2c7c142a316a0dd61cdac9b4"
  },
  {
    "url": "source/vuex3.x/3.origin.html",
    "revision": "bbe73e2b3fe646f0a342a2a51edb5b7e"
  },
  {
    "url": "source/vuex4.x/1.index.html",
    "revision": "11b2bb11bcb6237fce0effc321327854"
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
