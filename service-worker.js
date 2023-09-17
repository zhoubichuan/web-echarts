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
    "revision": "1ca6ab4df3b2d27c917bb3af9de1f66b"
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
    "url": "assets/js/128.c03eb85f.js",
    "revision": "5405c4494968d91351465a6f717f18b8"
  },
  {
    "url": "assets/js/129.01fc2a77.js",
    "revision": "b7e4813ff85fc2d98ac9cc0f1af29fe6"
  },
  {
    "url": "assets/js/13.98ee890a.js",
    "revision": "46c9fa90b26ab6de49998d8cbd4035f7"
  },
  {
    "url": "assets/js/130.24101bd9.js",
    "revision": "1e3ac3defd05e4d963e529a18654147e"
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
    "url": "assets/js/23.dd15e3c3.js",
    "revision": "04b39c16acdaf17cd46cf98d231525cd"
  },
  {
    "url": "assets/js/24.73dace21.js",
    "revision": "a9b264c37625defec03509ac967b59eb"
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
    "url": "assets/js/37.e707548b.js",
    "revision": "6647cd625c536c6db3735b1707b82d8a"
  },
  {
    "url": "assets/js/38.11e8e01f.js",
    "revision": "3438c1a9e5ff9369ce5ef9718a65c0ec"
  },
  {
    "url": "assets/js/39.2ef88faf.js",
    "revision": "ca4292fd3b55cbf343fe34cb8a3cfe89"
  },
  {
    "url": "assets/js/4.1ae26aed.js",
    "revision": "ff21dbda869de0910f7df7d8f5972e4e"
  },
  {
    "url": "assets/js/40.9de1074b.js",
    "revision": "46496798673fd9d70db42757fda97102"
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
    "url": "assets/js/47.9dc0685d.js",
    "revision": "b3c33340f1651583dab00389c638f493"
  },
  {
    "url": "assets/js/48.86f50b4b.js",
    "revision": "b35b758f18708d687b76cf18cc7d16d5"
  },
  {
    "url": "assets/js/49.6e9dc895.js",
    "revision": "e7ebcbd74be0a0f5b0d1dcd021c7d5df"
  },
  {
    "url": "assets/js/5.d7a4f379.js",
    "revision": "2b1cd2540d5d2299e4115150629ac40a"
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
    "revision": "0483c2d7bb85f29e81c3c8c73abe9436"
  },
  {
    "url": "base/api/1.index.html",
    "revision": "6ec95210d54c247a32de1825103465b9"
  },
  {
    "url": "base/api/2.echartsInstance.html",
    "revision": "e809f7dae51b8806a88435e86cb6a4c8"
  },
  {
    "url": "base/api/3.action.html",
    "revision": "20c3067263bafd212f74acb3c1c3792b"
  },
  {
    "url": "base/api/4.events.html",
    "revision": "b8292ad071a6d03dd2272ca65f0131f8"
  },
  {
    "url": "base/components/1.index.html",
    "revision": "5cf447b55ab2d311ed02ecf8f2022612"
  },
  {
    "url": "base/components/1.legend.html",
    "revision": "71d4e055d65e405d8131e401aad5bf69"
  },
  {
    "url": "base/components/2.grid.html",
    "revision": "9ee6a454094dafecc05bd5d3fc767f79"
  },
  {
    "url": "base/components/2.polar.html",
    "revision": "8c3f269514424eeb99992ebfe9faf95e"
  },
  {
    "url": "base/components/2.radiusAxis.html",
    "revision": "6dea1149724d43e552ef45962cf7cb45"
  },
  {
    "url": "base/components/2.xAxis.html",
    "revision": "5e8d7b107c7143c8b02be24e8a784b91"
  },
  {
    "url": "base/components/2.yAxis.html",
    "revision": "26f34fb7c9aee05e1a1b895f4012e16d"
  },
  {
    "url": "base/components/3.angleAxis.html",
    "revision": "6776c1375b48c39474b78e3f34a5936f"
  },
  {
    "url": "base/components/4.radar.html",
    "revision": "74362d778ecccf09a3bbf87546a26577"
  },
  {
    "url": "base/components/5.dataZoom.html",
    "revision": "058ba9cb31b4c84f0dc1803cb7ca5845"
  },
  {
    "url": "base/components/6.visualMap.html",
    "revision": "32bf9710b5b0698a0305101568677e9a"
  },
  {
    "url": "base/components/7.tooltip.html",
    "revision": "8b9e70ce78daaec2cc275d9caabae860"
  },
  {
    "url": "base/components/8.geo.html",
    "revision": "660c30794f31fba54a1a3e1ec15b99e3"
  },
  {
    "url": "base/gl/1.index.html",
    "revision": "6b13baf88fc20702e211ae759875a5a2"
  },
  {
    "url": "base/gl/1.scatter3D.html",
    "revision": "f837d169bc990dcad068f04c06e0044a"
  },
  {
    "url": "base/gl/10.flowGL.html",
    "revision": "e20066059c2aa5c870060cd328179a12"
  },
  {
    "url": "base/gl/2.bar3D.html",
    "revision": "51ee45434d37776c9d7f63e6de94823d"
  },
  {
    "url": "base/gl/3.line3D.html",
    "revision": "1b4c2a6b7ccff69be180f61d63e19be1"
  },
  {
    "url": "base/gl/4.lines3D.html",
    "revision": "44495ca7e09db2fced1f2497793d0a14"
  },
  {
    "url": "base/gl/5.map3D.html",
    "revision": "9bb75add87c0c1fff69ffe401d338f0a"
  },
  {
    "url": "base/gl/6.surface.html",
    "revision": "1252bafa6f0964fb6518344e5dbfeb2a"
  },
  {
    "url": "base/gl/7.polygons3D.html",
    "revision": "38bf0e010be035485b3fe054eb079f2c"
  },
  {
    "url": "base/gl/8.scatterGL.html",
    "revision": "e9639b9b5fc02cb29195b5a638a90e41"
  },
  {
    "url": "base/gl/9.graphGL.html",
    "revision": "15a0b5b6da60e0c2a27b3d2dc69d9eea"
  },
  {
    "url": "base/series/1.index.html",
    "revision": "a7cbb19e61b0fd1f13d2befd23c46299"
  },
  {
    "url": "base/series/1.line.html",
    "revision": "0fcbd31cfdaf98caf038bd0c4f4480de"
  },
  {
    "url": "base/series/10.boxplot.html",
    "revision": "66483877a8780bfb9d629606e37404ff"
  },
  {
    "url": "base/series/11.candlestick.html",
    "revision": "5016654cd1cb285b41ad6e68f60e5303"
  },
  {
    "url": "base/series/12.heatmap.html",
    "revision": "345b0a4db8041aea53b2554410103ba1"
  },
  {
    "url": "base/series/13.map.html",
    "revision": "fda7d7cb69d19ea8bfd90695266e1ba5"
  },
  {
    "url": "base/series/14.parallel.html",
    "revision": "f10a9597a22540669a6c1281bcdb4814"
  },
  {
    "url": "base/series/15.lines.html",
    "revision": "2fc63a49d9cbf04e2fb4912f0e9c8940"
  },
  {
    "url": "base/series/16.graph.html",
    "revision": "f725cd2daeaca2b7d05ee161267bc06a"
  },
  {
    "url": "base/series/17.sankey.html",
    "revision": "8992615a7143772edf5d66ad6e241666"
  },
  {
    "url": "base/series/18.funnel.html",
    "revision": "1334abce2f27f5caaacc4c0e8c131012"
  },
  {
    "url": "base/series/19.gauge.html",
    "revision": "e8be5463596d9a288ba7fd86ba4cf250"
  },
  {
    "url": "base/series/2.bar.html",
    "revision": "25e50a6bd445ccd72fd0f14d4a02453f"
  },
  {
    "url": "base/series/20.pictorialBar.html",
    "revision": "777bbee0cfdab5f34015ebb1eca2c3ce"
  },
  {
    "url": "base/series/21.themeRiver.html",
    "revision": "e7cd05eb28f4b0ab8fcaf0fac8c4466e"
  },
  {
    "url": "base/series/22.custom.html",
    "revision": "9430f7746d09d6102a0604bc3d26f694"
  },
  {
    "url": "base/series/3.pie.html",
    "revision": "05777c6df9c8f4e228e36f2955fdbb0e"
  },
  {
    "url": "base/series/4.scatter.html",
    "revision": "aee8345d145725f7510de70d3eb66862"
  },
  {
    "url": "base/series/5.effectScatter.html",
    "revision": "4158c5bcafaf76dbc5f9a3e0cc14ab84"
  },
  {
    "url": "base/series/6.radar.html",
    "revision": "82b4bdc83cd7770d0f7feef1c3b66aeb"
  },
  {
    "url": "base/series/7.tree.html",
    "revision": "3b4e2b1674c2d72590eb4d588754ac09"
  },
  {
    "url": "base/series/8.treemap.html",
    "revision": "388ffb6c942775aabb325c5a43af7f0f"
  },
  {
    "url": "base/series/9.sunburst.html",
    "revision": "778b30c7a12b0866ea5dd6548fa973b7"
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
    "revision": "960041bb928f41e6fc1f86e40b187a96"
  },
  {
    "url": "mock/http.js",
    "revision": "a219140640bec4dfbe8f4fe88d351ed8"
  },
  {
    "url": "senior/1.micro/1.index.html",
    "revision": "db853915eb263266d021403ee0c07195"
  },
  {
    "url": "senior/1.micro/1.singlespa.html",
    "revision": "25f86be9545e1e77a1188fcfd2f10eb0"
  },
  {
    "url": "senior/1.micro/1.singlespa2.html",
    "revision": "b560864e60d15dd40ba9f5c149ddfacf"
  },
  {
    "url": "senior/1.micro/2.qiankun.html",
    "revision": "abb5c14e4b61fb8ea3830c88af26fb71"
  },
  {
    "url": "senior/1.micro/2.qiankun2.html",
    "revision": "eb299973f1b0d07ecb32ec79f46a0b4e"
  },
  {
    "url": "senior/1.micro/3.share.html",
    "revision": "c609d90c6028b0867a94d9d1834f733f"
  },
  {
    "url": "senior/1.micro/4.dev.html",
    "revision": "b572ac0cd25193d60ccc59c90effc353"
  },
  {
    "url": "senior/2.typescript/1.env.html",
    "revision": "239c39c0fd706596ada302f2d2071edf"
  },
  {
    "url": "senior/2.typescript/1.index.html",
    "revision": "cbf28ce17d273b2f77d49cff8ff22279"
  },
  {
    "url": "senior/2.typescript/10.infer.html",
    "revision": "bf1ed58abc97ef67edc1b9cc94c3ac8a"
  },
  {
    "url": "senior/2.typescript/11.overlapping.html",
    "revision": "8a8bda39eac18d4c56ee51692457b5fd"
  },
  {
    "url": "senior/2.typescript/12.condition.html",
    "revision": "615370cf220e4f171b85d3c507f30152"
  },
  {
    "url": "senior/2.typescript/13.builtin.html",
    "revision": "2a7138437ecb1ca8e37fe9af80010242"
  },
  {
    "url": "senior/2.typescript/14.package.html",
    "revision": "80c47daa87fc65f44201acb528404ffa"
  },
  {
    "url": "senior/2.typescript/15.custom.html",
    "revision": "760d4eab1f6bbc8d29b35bb2f8ccbb75"
  },
  {
    "url": "senior/2.typescript/16.unknown.html",
    "revision": "f0df0037b1341e3c63376992bae1d6ed"
  },
  {
    "url": "senior/2.typescript/17.module.html",
    "revision": "e333bf14fedbb488145809643ff02eed"
  },
  {
    "url": "senior/2.typescript/18.statement.html",
    "revision": "887ac1ed7cf7b3a206a6bd12e3757ba9"
  },
  {
    "url": "senior/2.typescript/19.extend.html",
    "revision": "086253626f6edccb650e142553e4f6bd"
  },
  {
    "url": "senior/2.typescript/2.base.html",
    "revision": "3b3670a91bc5ee39f515a2575b9d1c52"
  },
  {
    "url": "senior/2.typescript/3.deduction.html",
    "revision": "179cd57e098d99d62448e4c78c5f23ff"
  },
  {
    "url": "senior/2.typescript/4.type.html",
    "revision": "67ed1e301dc8faffb6741eea0c12f795"
  },
  {
    "url": "senior/2.typescript/5.class.html",
    "revision": "e42a4db4f48cd43b64cb3d8074c97a43"
  },
  {
    "url": "senior/2.typescript/6.interface.html",
    "revision": "39bc38d0708060acfbdb06cf32f71c47"
  },
  {
    "url": "senior/2.typescript/7.generic.html",
    "revision": "d208ca91d61d69f708460e4613fc258a"
  },
  {
    "url": "senior/2.typescript/8.compatible.html",
    "revision": "b18f1ba95021308c0fee7bb492f39a3a"
  },
  {
    "url": "senior/2.typescript/9.protect.html",
    "revision": "287ba62aaede9bdd942569d0c95f0127"
  },
  {
    "url": "senior/3.deploy/1.index.html",
    "revision": "5a9c9a4de8ad0bdd6151661a2d03ce4b"
  },
  {
    "url": "senior/3.deploy/1.local.html",
    "revision": "8ac30046c9f7776d206fcce54efe44e0"
  },
  {
    "url": "senior/3.deploy/2.gitlab.html",
    "revision": "f79c0f23ec5860f48be2e67aebc5d3e8"
  },
  {
    "url": "senior/3.deploy/3.genkins.html",
    "revision": "26dc7adbdfcc826d815bde16ed8b5393"
  },
  {
    "url": "senior/3.deploy/4.centos.html",
    "revision": "a06bbae2d1652261c9434b66bb3dba53"
  },
  {
    "url": "senior/3.deploy/5.nginx.html",
    "revision": "f02c48d42bb96d7afcaf450339596897"
  },
  {
    "url": "senior/4.component/1.button.html",
    "revision": "6af64ce5d46e8ebb7d17746bca03b014"
  },
  {
    "url": "senior/4.component/1.env.html",
    "revision": "3cad89a75df662882afb51861366f1a3"
  },
  {
    "url": "senior/4.component/1.index.html",
    "revision": "dd9d7f367fe0607f3f149423e5b358fc"
  },
  {
    "url": "senior/4.component/1.recursion.html",
    "revision": "fd974d30b29fdd63719242c03141f423"
  },
  {
    "url": "senior/4.component/10.tree.html",
    "revision": "42ada226bcaeb18f1c51df781f3a783f"
  },
  {
    "url": "senior/4.component/12.table.html",
    "revision": "f5574075220af67d74bfb6db678d864d"
  },
  {
    "url": "senior/4.component/13.publish.html",
    "revision": "9ecf53406ef8b39085f4f4a31c667281"
  },
  {
    "url": "senior/4.component/2.dropdown.html",
    "revision": "1f0b84d43c127a64c83a3b0dae47a501"
  },
  {
    "url": "senior/4.component/3.dialog.html",
    "revision": "0729ce70a5988f42e66175490ded4939"
  },
  {
    "url": "senior/4.component/3.form.html",
    "revision": "9d1a95c1ae5a6203dd5b285a96ee6c90"
  },
  {
    "url": "senior/4.component/4.input.html",
    "revision": "09674aa2de6f49e2b70de01da69b2a78"
  },
  {
    "url": "senior/4.component/4.render.html",
    "revision": "a919d2fe516fc5d0002d541aaf11338a"
  },
  {
    "url": "senior/4.component/5.checkBox.html",
    "revision": "53bdef511504fee93ba082182edd8971"
  },
  {
    "url": "senior/4.component/6.cascader.html",
    "revision": "b226281963328162db7b4e593b6e0033"
  },
  {
    "url": "senior/4.component/7.date.html",
    "revision": "9e694a9b20bd00f804bc7048d25bc675"
  },
  {
    "url": "senior/4.component/8.dispaly.html",
    "revision": "0266703b173b1fa6c2bc8a67984aeefa"
  },
  {
    "url": "senior/4.component/9.alert.html",
    "revision": "a9dbfc4f7a98b8fc90954f69ff147896"
  },
  {
    "url": "senior/4.component/9.dynamics.html",
    "revision": "294dc07474683b8871f4199d3d0f3404"
  },
  {
    "url": "source/vue-cli2.x/1.index.html",
    "revision": "bfe6b28757a2dad12f3faa320fd732fb"
  },
  {
    "url": "source/vue-cli3.x/1.index.html",
    "revision": "1cd286141c1336b5562db1c61aa80376"
  },
  {
    "url": "source/vue-router3.x/1.index.html",
    "revision": "ad3db03c063156c6086835b62a54e4d5"
  },
  {
    "url": "source/vue-router3.x/2.origin.html",
    "revision": "70adc9db3ca244a0dd01efc90938df43"
  },
  {
    "url": "source/vue-router4.x/1.index.html",
    "revision": "c8fdde1d84849bcb4e03edbda54db8ad"
  },
  {
    "url": "source/vue2.x/1.index.html",
    "revision": "b6eddddb5eb5b07b0f5397ce5c524fea"
  },
  {
    "url": "source/vue2.x/10.optimize.html",
    "revision": "5bee427ae4ae0f37cdb10b0fe0b566dd"
  },
  {
    "url": "source/vue2.x/11.gencode.html",
    "revision": "1f43b998d4e4710d321a4e4d89b86daa"
  },
  {
    "url": "source/vue2.x/12.mount.html",
    "revision": "5eacad91e15d088f3b582794beeb2fe9"
  },
  {
    "url": "source/vue2.x/13._render.html",
    "revision": "2bcc466298bb176186fc2de6b2c45872"
  },
  {
    "url": "source/vue2.x/14._update.html",
    "revision": "f8d87b8f2638bd1af1b7a1d809fbfad4"
  },
  {
    "url": "source/vue2.x/2.initGlobalAPI.html",
    "revision": "4dfaab077d2eb011c9bdbce6e374b431"
  },
  {
    "url": "source/vue2.x/3.initMixin.html",
    "revision": "506928f83816ff7dd077d95ac2930f6b"
  },
  {
    "url": "source/vue2.x/4.stateMixin.html",
    "revision": "18b4c7c1bdf202a74e6718c9b00a2fe6"
  },
  {
    "url": "source/vue2.x/5.eventsMixin.html",
    "revision": "26b8f4eed823d0d54ad0e0009d101985"
  },
  {
    "url": "source/vue2.x/6.lifecycleMixin.html",
    "revision": "f0a64984a730d14c71c3e9458ae5043b"
  },
  {
    "url": "source/vue2.x/7.renderMixin.html",
    "revision": "d68d00d84c10b4e5c5307221e5bd89e3"
  },
  {
    "url": "source/vue2.x/8.mount.html",
    "revision": "028c3cb4ca52ddbbbac1a61d4ed5cad5"
  },
  {
    "url": "source/vue2.x/9.ast.html",
    "revision": "9e6104bdb39303398e2a6e3a8e0fc1d9"
  },
  {
    "url": "source/vue3.x/1.index.html",
    "revision": "90b05b45b13b8f4731eccc071865964c"
  },
  {
    "url": "source/vue3.x/10.optimize.html",
    "revision": "6916140b3b53495c6361eeed19f0dfa0"
  },
  {
    "url": "source/vue3.x/11.gencode.html",
    "revision": "cefe2930e3fd6f550ed9c14d6e56634e"
  },
  {
    "url": "source/vue3.x/12.mount.html",
    "revision": "a18c4878024b95da51bc8ea24a7ceb1b"
  },
  {
    "url": "source/vue3.x/13._render.html",
    "revision": "ca90fff230b9dffa22bb733022936448"
  },
  {
    "url": "source/vue3.x/14._update.html",
    "revision": "2418357ecc3729e8fff0ae2799300255"
  },
  {
    "url": "source/vue3.x/2.initGlobalAPI.html",
    "revision": "9fb1b6027607dd3d58631a93ff9d1e77"
  },
  {
    "url": "source/vue3.x/3.initMixin.html",
    "revision": "5a9bdb4aaffaa17214fb4acdc7fce9ca"
  },
  {
    "url": "source/vue3.x/4.stateMixin.html",
    "revision": "5674fbc4955aed3f9472875bfe6b152d"
  },
  {
    "url": "source/vue3.x/5.eventsMixin.html",
    "revision": "e381550a6e1e1518172d230c69e7c9ae"
  },
  {
    "url": "source/vue3.x/6.lifecycleMixin.html",
    "revision": "e307ae4ccb97444ab9c110d2bbca2048"
  },
  {
    "url": "source/vue3.x/7.renderMixin.html",
    "revision": "5320bff964002049cb2e3863d3a9828f"
  },
  {
    "url": "source/vue3.x/8.mount.html",
    "revision": "63e0a69e19bfdcef0b3b91005aa6f476"
  },
  {
    "url": "source/vue3.x/9.ast.html",
    "revision": "126fb85fb13b5673d5b0dccf48e2a545"
  },
  {
    "url": "source/vuex3.x/1.index.html",
    "revision": "b6857ab8c4524c11e6dd6759625ec0bf"
  },
  {
    "url": "source/vuex3.x/2.use.html",
    "revision": "c225457a9422c98b19163fcb92a7c916"
  },
  {
    "url": "source/vuex3.x/3.origin.html",
    "revision": "28d039f4f439378af6f4853be6dbd9ca"
  },
  {
    "url": "source/vuex4.x/1.index.html",
    "revision": "61af143441992d3be5f0769250805546"
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
