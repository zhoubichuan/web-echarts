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
    "revision": "33870c70cf743cbb91a5fc484e988acc"
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
    "url": "assets/js/44.b736579c.js",
    "revision": "18a680ee57266b3ce74d88493ebc6b9b"
  },
  {
    "url": "assets/js/45.9acbc2ae.js",
    "revision": "d63c2011df8e776f6af1afbe9c9553c6"
  },
  {
    "url": "assets/js/46.f59625b7.js",
    "revision": "0c0697163c45df779ad7a72af4b9af30"
  },
  {
    "url": "assets/js/47.34a8637e.js",
    "revision": "a717c17b63e19ff9859d3e39212f82af"
  },
  {
    "url": "assets/js/48.d90fc8f5.js",
    "revision": "228dc8503f780ba2705afbf29eda31c3"
  },
  {
    "url": "assets/js/49.4f5564ef.js",
    "revision": "2a08886fc580f3fa3a74d5c8f16ceda1"
  },
  {
    "url": "assets/js/5.6b5c109f.js",
    "revision": "37fd284cfff1bd6d59535a8f9cd884ac"
  },
  {
    "url": "assets/js/50.4f509541.js",
    "revision": "baced2a31aa3e7cb01e39bb0d2557294"
  },
  {
    "url": "assets/js/51.a70493c7.js",
    "revision": "c2cd464b77ddda5ee2301dc06b3c79ee"
  },
  {
    "url": "assets/js/52.61ef7420.js",
    "revision": "74164356e36b77b971931b4d7b408616"
  },
  {
    "url": "assets/js/53.c15ab8ab.js",
    "revision": "9bdd7e12ce71d9711a5868b57c6624fa"
  },
  {
    "url": "assets/js/54.b0342b1b.js",
    "revision": "38e6cf0eab6af7b328529bc865e867ec"
  },
  {
    "url": "assets/js/55.23f4d93c.js",
    "revision": "85e1bb464801077f0d29bb6b40e560a0"
  },
  {
    "url": "assets/js/56.cf2402b6.js",
    "revision": "f79317b7c25d81a94a303a1b87679aae"
  },
  {
    "url": "assets/js/57.ae16c9c9.js",
    "revision": "a4b43913278085c77759ced777f21d6b"
  },
  {
    "url": "assets/js/58.a1e9c33d.js",
    "revision": "09d9b0394705ce3d4b730225bd375bfe"
  },
  {
    "url": "assets/js/59.de6e0181.js",
    "revision": "853cadb36949d907ef528d452723e851"
  },
  {
    "url": "assets/js/6.4c0be37d.js",
    "revision": "84471b1e7560d41ef012587ffe8282a1"
  },
  {
    "url": "assets/js/60.66ff53a4.js",
    "revision": "c7c3fc50de8ecae67dfee36fe8c52b6d"
  },
  {
    "url": "assets/js/61.7422c65d.js",
    "revision": "f44b24d381ecc253aa10351df6c7515f"
  },
  {
    "url": "assets/js/62.0d41e47e.js",
    "revision": "3e193ddbd79115b79be81db94efb2ad9"
  },
  {
    "url": "assets/js/63.d6d33d61.js",
    "revision": "d0c6119170c48c1cfb10e6ed202b3d34"
  },
  {
    "url": "assets/js/64.cb0793e3.js",
    "revision": "7dcc07c63e4ce20de2edf0c6e9b8eefe"
  },
  {
    "url": "assets/js/65.a4c98b30.js",
    "revision": "bb56bd405c86e4c95d82178493722a5f"
  },
  {
    "url": "assets/js/66.d6bbd96b.js",
    "revision": "adf9bbfcaec1c35b427f1e552b3f90c3"
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
    "revision": "c9b87df2f803b74034fcf3739368671e"
  },
  {
    "url": "base/api/1.index.html",
    "revision": "90fd3cd8f8ebbb9a64338fc1fcb80680"
  },
  {
    "url": "base/api/2.echartsInstance.html",
    "revision": "9be240f75b108f1babbf552a1c72796b"
  },
  {
    "url": "base/api/3.action.html",
    "revision": "59601268e6f9d6061397ab798cbfaae3"
  },
  {
    "url": "base/api/4.events.html",
    "revision": "35cb87552ab5e14a735015981cb80429"
  },
  {
    "url": "base/components/1.index.html",
    "revision": "2195bf6ed06956d1a43c19ee3c8cedd8"
  },
  {
    "url": "base/components/1.legend.html",
    "revision": "3d4d48af24adec8ecc1fe78db610eb21"
  },
  {
    "url": "base/components/2.grid.html",
    "revision": "88539d2b19c329d092048f1ca1aa3d88"
  },
  {
    "url": "base/components/2.polar.html",
    "revision": "6a6640882f57193ee3adfd3e987d599a"
  },
  {
    "url": "base/components/2.radiusAxis.html",
    "revision": "9d904366120c7bfe7086c16997ddebe2"
  },
  {
    "url": "base/components/2.xAxis.html",
    "revision": "84be1e67227d689b39b0f1c1a78a1b98"
  },
  {
    "url": "base/components/2.yAxis.html",
    "revision": "f692c1f3c9e8a8ebe58008982aaeed10"
  },
  {
    "url": "base/components/3.angleAxis.html",
    "revision": "1af84251ceb9d3ee42b3d8a03f480a8d"
  },
  {
    "url": "base/components/4.radar.html",
    "revision": "1a60d3ecad867279c753955d486c32ff"
  },
  {
    "url": "base/components/5.dataZoom.html",
    "revision": "c20d911d97cee6898d4466b759fd0508"
  },
  {
    "url": "base/components/6.visualMap.html",
    "revision": "48c229f62ccef927d67aae1ba7f8190e"
  },
  {
    "url": "base/components/7.tooltip.html",
    "revision": "d9027efcb40d9082fd0dbe71f58dafb1"
  },
  {
    "url": "base/components/8.geo.html",
    "revision": "bb4b4314996ae9e26db9effa7333b3e8"
  },
  {
    "url": "base/gl/1.index.html",
    "revision": "a0ab44ef2253193b55c138de32a2f3ad"
  },
  {
    "url": "base/gl/1.scatter3D.html",
    "revision": "4f51bbdd3c668acabf3d28a0c6256811"
  },
  {
    "url": "base/gl/10.flowGL.html",
    "revision": "7f959c95edbb5a2e85061fe4ac15f860"
  },
  {
    "url": "base/gl/2.bar3D.html",
    "revision": "98a3519f37c8cf85d7dff83ed69cb4b1"
  },
  {
    "url": "base/gl/3.line3D.html",
    "revision": "80e033e335004f7c1b15445ddfaa13e9"
  },
  {
    "url": "base/gl/4.lines3D.html",
    "revision": "6b4ee7329653755259256b8c0b9025a1"
  },
  {
    "url": "base/gl/5.map3D.html",
    "revision": "3a74cb8712db8a1cbe0fd72a2b8f8ab7"
  },
  {
    "url": "base/gl/6.surface.html",
    "revision": "e2e368b6c4fb9f6b9ba705eb109169d9"
  },
  {
    "url": "base/gl/7.polygons3D.html",
    "revision": "d1c1df654f46d2d192966f5b752933b4"
  },
  {
    "url": "base/gl/8.scatterGL.html",
    "revision": "0fb0d459b29ed2d0c8e8b7b50c277ad0"
  },
  {
    "url": "base/gl/9.graphGL.html",
    "revision": "78826a599e15eb5207250f00dd9498db"
  },
  {
    "url": "base/series/1.index.html",
    "revision": "b6a96caf11899c8c031f0b9054496025"
  },
  {
    "url": "base/series/1.line.html",
    "revision": "914e88b3e011c2ef078a4b0950ba25ca"
  },
  {
    "url": "base/series/10.boxplot.html",
    "revision": "33d89eef21e3ff14e19d6e8dc81bae16"
  },
  {
    "url": "base/series/11.candlestick.html",
    "revision": "a742a7be744a9db58e2f6618a10b65a1"
  },
  {
    "url": "base/series/12.heatmap.html",
    "revision": "254232be68c717ad7b70414f96481c25"
  },
  {
    "url": "base/series/13.map.html",
    "revision": "ab68cec7162982e4f9dfd1c60e2f5e29"
  },
  {
    "url": "base/series/14.parallel.html",
    "revision": "d3e4545f238398e3908cdc9a0fecceb5"
  },
  {
    "url": "base/series/15.lines.html",
    "revision": "0ddcbe0e63564a1accce2503f07e77e1"
  },
  {
    "url": "base/series/16.graph.html",
    "revision": "772a8d1174c27da2cffe887f1f062c5f"
  },
  {
    "url": "base/series/17.sankey.html",
    "revision": "6a103d0d2a076b2f7ce96bcd52204177"
  },
  {
    "url": "base/series/18.funnel.html",
    "revision": "af32ed0b99119c73437604c973a8135d"
  },
  {
    "url": "base/series/19.gauge.html",
    "revision": "4c100d47b94be9f6cc1cdfefea387ed3"
  },
  {
    "url": "base/series/2.bar.html",
    "revision": "dd32a78b99dda4ef51e91a508fb1045a"
  },
  {
    "url": "base/series/20.pictorialBar.html",
    "revision": "39f6b90152752d42def22a9a099ea0b4"
  },
  {
    "url": "base/series/21.themeRiver.html",
    "revision": "6c6ee3713456e990ab187563ef0f726f"
  },
  {
    "url": "base/series/22.custom.html",
    "revision": "326b3ca5ceb82c5202eea9a42cb29cf5"
  },
  {
    "url": "base/series/3.pie.html",
    "revision": "5a4cccc941a556de6e546f30b6d9efa4"
  },
  {
    "url": "base/series/4.scatter.html",
    "revision": "407a0cd60a3253422636582f2cb0c600"
  },
  {
    "url": "base/series/5.effectScatter.html",
    "revision": "21f71f7507bbc8e8499cdf60ffa4b97a"
  },
  {
    "url": "base/series/6.radar.html",
    "revision": "624ce9b47626c1349510d0714f244e9d"
  },
  {
    "url": "base/series/7.tree.html",
    "revision": "9015a6c192608a0c2e3b3e23c0ae2d5f"
  },
  {
    "url": "base/series/8.treemap.html",
    "revision": "8e17afc7b64c3a45bffe688a9e864f5f"
  },
  {
    "url": "base/series/9.sunburst.html",
    "revision": "2156adf601068e19c5c2099369b95cbe"
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
    "revision": "474d512ec218a76a64febed5aebdef5e"
  },
  {
    "url": "mock/http.js",
    "revision": "a219140640bec4dfbe8f4fe88d351ed8"
  },
  {
    "url": "senior/1.micro/1.index.html",
    "revision": "3b848ad74207434acc884c51a4b8859a"
  },
  {
    "url": "senior/1.micro/1.singlespa.html",
    "revision": "f08e1bf7e1fac6e7e06b7bf1d814f2e7"
  },
  {
    "url": "senior/1.micro/1.singlespa2.html",
    "revision": "9e53cc4d1aa414cef907d7cf432edd0c"
  },
  {
    "url": "senior/1.micro/2.qiankun.html",
    "revision": "1a96cc26a49b84e89f70a1381cc8fdac"
  },
  {
    "url": "senior/1.micro/2.qiankun2.html",
    "revision": "de0c2d2be2bc9becc297541b5d31bff4"
  },
  {
    "url": "senior/1.micro/3.share.html",
    "revision": "f7b2bfb35103ca690b5e4324d248ec8c"
  },
  {
    "url": "senior/1.micro/4.dev.html",
    "revision": "7808ad4f89a53bc4de526360618054d5"
  },
  {
    "url": "senior/2.typescript/1.env.html",
    "revision": "d1138b2e152a9a4666429c4521e074e9"
  },
  {
    "url": "senior/2.typescript/1.index.html",
    "revision": "97b16f72c25fa1791ed99acff1ffaae8"
  },
  {
    "url": "senior/2.typescript/10.infer.html",
    "revision": "76942d74663b00700300145b4f7b702d"
  },
  {
    "url": "senior/2.typescript/11.overlapping.html",
    "revision": "a6be2f022b11995aa5b3749f7fbbf135"
  },
  {
    "url": "senior/2.typescript/12.condition.html",
    "revision": "45837e3348974547eca94b2318f0bf5b"
  },
  {
    "url": "senior/2.typescript/13.builtin.html",
    "revision": "1774da79a53193adb270eba1d452d1ce"
  },
  {
    "url": "senior/2.typescript/14.package.html",
    "revision": "a3da1bf213867cfcf6d3691a02c4469b"
  },
  {
    "url": "senior/2.typescript/15.custom.html",
    "revision": "1acc64e426c530311ec436cb0f235fe0"
  },
  {
    "url": "senior/2.typescript/16.unknown.html",
    "revision": "c982729c30ce11d2f2c02f0f388f30af"
  },
  {
    "url": "senior/2.typescript/17.module.html",
    "revision": "b0d469263eb53d4606cb6492a6b593dd"
  },
  {
    "url": "senior/2.typescript/18.statement.html",
    "revision": "cb7baf61303aa014a22f54d03c33adf4"
  },
  {
    "url": "senior/2.typescript/19.extend.html",
    "revision": "88497c0746ec2f7bd186d0a86f4eb7b1"
  },
  {
    "url": "senior/2.typescript/2.base.html",
    "revision": "2efca4e1c6892a3782bcacd0705135fb"
  },
  {
    "url": "senior/2.typescript/3.deduction.html",
    "revision": "72a31c064e968ba5b6e21b9a381862fe"
  },
  {
    "url": "senior/2.typescript/4.type.html",
    "revision": "34f06bbbf367dfb2ef4668f8818e6c11"
  },
  {
    "url": "senior/2.typescript/5.class.html",
    "revision": "11b4465e7618ed31d8de09c379ec23bc"
  },
  {
    "url": "senior/2.typescript/6.interface.html",
    "revision": "7d42c2a3dfa5a1dc65e155d166011da0"
  },
  {
    "url": "senior/2.typescript/7.generic.html",
    "revision": "05b24edb3199d124eb827d65f47ecc85"
  },
  {
    "url": "senior/2.typescript/8.compatible.html",
    "revision": "102c3b83724d88a10d3dd51481a3a2c5"
  },
  {
    "url": "senior/2.typescript/9.protect.html",
    "revision": "3bff5518eb96344e910ce52df4a09330"
  },
  {
    "url": "senior/3.deploy/1.index.html",
    "revision": "b30a84d284bddbfdb112bbecb5e7b255"
  },
  {
    "url": "senior/3.deploy/1.local.html",
    "revision": "c6609a9c7386cc365c51db130662e805"
  },
  {
    "url": "senior/3.deploy/2.gitlab.html",
    "revision": "e23554f3c07117a97960ca066713d4af"
  },
  {
    "url": "senior/3.deploy/3.genkins.html",
    "revision": "b068e44accfc7ee655e71bc86d078ba1"
  },
  {
    "url": "senior/3.deploy/4.centos.html",
    "revision": "7e8bef3375f1d13f8747500b598e5e2b"
  },
  {
    "url": "senior/3.deploy/5.nginx.html",
    "revision": "df64cfffe2c20982d0da07fe5e9c1ee3"
  },
  {
    "url": "senior/4.component/1.button.html",
    "revision": "2af2b0c5d4f83f510964a549b299eef0"
  },
  {
    "url": "senior/4.component/1.env.html",
    "revision": "4f20c6cb3d7627a6f4f035916e536a4f"
  },
  {
    "url": "senior/4.component/1.index.html",
    "revision": "5a9592b878e3e799abd562affc94f8f2"
  },
  {
    "url": "senior/4.component/1.recursion.html",
    "revision": "58d6240c087137e12b00d15112eac990"
  },
  {
    "url": "senior/4.component/10.tree.html",
    "revision": "1d7fe6f82fcb137da55fcbe96ddfb644"
  },
  {
    "url": "senior/4.component/12.table.html",
    "revision": "98a9203624a3004c293b39272d2c15a6"
  },
  {
    "url": "senior/4.component/13.publish.html",
    "revision": "5a2f1e64549c61a5783b92f29f40ed2b"
  },
  {
    "url": "senior/4.component/2.dropdown.html",
    "revision": "d333a6d962e925859cd1f015e8bfdb93"
  },
  {
    "url": "senior/4.component/3.dialog.html",
    "revision": "e052470b6be481bd94f6ea58acab1acd"
  },
  {
    "url": "senior/4.component/3.form.html",
    "revision": "d9d22966a772533643cd247e6280b5eb"
  },
  {
    "url": "senior/4.component/4.input.html",
    "revision": "86eda6765f00916f6c2a26f0577f9926"
  },
  {
    "url": "senior/4.component/4.render.html",
    "revision": "0b5ad0d9d2ca644e760f12ba89db719b"
  },
  {
    "url": "senior/4.component/5.checkBox.html",
    "revision": "3cb4e4bf914ade845f1ada5cf5d3bda4"
  },
  {
    "url": "senior/4.component/6.cascader.html",
    "revision": "1a8df1bb60fac08946f0182edb3f1bb3"
  },
  {
    "url": "senior/4.component/7.date.html",
    "revision": "3e764653d6bac7e33b0c2383071ea7ee"
  },
  {
    "url": "senior/4.component/8.dispaly.html",
    "revision": "a2f5aac3708d262b1f4da32eb99276bc"
  },
  {
    "url": "senior/4.component/9.alert.html",
    "revision": "849c67ddbad5c9b8f12f8e42cf86c525"
  },
  {
    "url": "senior/4.component/9.dynamics.html",
    "revision": "31d2ebe22a64f657dd8c18d05018f9af"
  },
  {
    "url": "source/vue-cli2.x/1.index.html",
    "revision": "1987805c47db84bd750c4efef708a772"
  },
  {
    "url": "source/vue-cli3.x/1.index.html",
    "revision": "9aec0735fd74b1899d19c21f15c71914"
  },
  {
    "url": "source/vue-router3.x/1.index.html",
    "revision": "6a8a0c4225ac4f0a7650a0aca5f8b613"
  },
  {
    "url": "source/vue-router3.x/2.origin.html",
    "revision": "fc56c74e9d516c478bf5d0502be91992"
  },
  {
    "url": "source/vue-router4.x/1.index.html",
    "revision": "f276becb181057f2b15b5a16c91af8bd"
  },
  {
    "url": "source/vue2.x/1.index.html",
    "revision": "9c7a769b23e3da92c81ff9cdb9c57ba7"
  },
  {
    "url": "source/vue2.x/10.optimize.html",
    "revision": "273f5844b6a9ee830d39123f7ac3fee0"
  },
  {
    "url": "source/vue2.x/11.gencode.html",
    "revision": "582cdf8dcf037c1a719740a9aa3e260e"
  },
  {
    "url": "source/vue2.x/12.mount.html",
    "revision": "235ca2649378f7cf92931a036095b464"
  },
  {
    "url": "source/vue2.x/13._render.html",
    "revision": "f825de9823f0cce01e72ebd80f279fba"
  },
  {
    "url": "source/vue2.x/14._update.html",
    "revision": "b1ec1daa4d37a23fea8574836122d01e"
  },
  {
    "url": "source/vue2.x/2.initGlobalAPI.html",
    "revision": "d94c8772a62ae8ef51786126f5f1230c"
  },
  {
    "url": "source/vue2.x/3.initMixin.html",
    "revision": "23129e1f182d269c7449bdb1613c2fa3"
  },
  {
    "url": "source/vue2.x/4.stateMixin.html",
    "revision": "67fdf40f9754a05155e26f84a916f43e"
  },
  {
    "url": "source/vue2.x/5.eventsMixin.html",
    "revision": "4072602c820ce8d3362fab06a597804d"
  },
  {
    "url": "source/vue2.x/6.lifecycleMixin.html",
    "revision": "1eeaad433a7a06bb9dcc7358a3037025"
  },
  {
    "url": "source/vue2.x/7.renderMixin.html",
    "revision": "a3351ed17867bbb2cf22b7916088cd65"
  },
  {
    "url": "source/vue2.x/8.mount.html",
    "revision": "477fa1a5f722e0e85eee81cf1d3519a7"
  },
  {
    "url": "source/vue2.x/9.ast.html",
    "revision": "7035fb676e3304d39dcd2361ecf7e77c"
  },
  {
    "url": "source/vue3.x/1.index.html",
    "revision": "15c29692d8a82bfe2445784e9fd04d4f"
  },
  {
    "url": "source/vue3.x/10.optimize.html",
    "revision": "fd1bbc38aeb94333d6d07cb099fe4c74"
  },
  {
    "url": "source/vue3.x/11.gencode.html",
    "revision": "63ca30687e301786c68ff4209050f626"
  },
  {
    "url": "source/vue3.x/12.mount.html",
    "revision": "61b255757db0772bc1da88614c3c84e9"
  },
  {
    "url": "source/vue3.x/13._render.html",
    "revision": "bc27309fb2c08899dda23155eb59c1d0"
  },
  {
    "url": "source/vue3.x/14._update.html",
    "revision": "d327fc07bb920cf43b9c7fb932f92503"
  },
  {
    "url": "source/vue3.x/2.initGlobalAPI.html",
    "revision": "fb4f13573b8a533cfcca61ab425a002c"
  },
  {
    "url": "source/vue3.x/3.initMixin.html",
    "revision": "45f31e9381219279d7d574e4ffdffc82"
  },
  {
    "url": "source/vue3.x/4.stateMixin.html",
    "revision": "b1904d8878df94aaec932970dde85300"
  },
  {
    "url": "source/vue3.x/5.eventsMixin.html",
    "revision": "ef59f132b6e027593f75f971889cefcf"
  },
  {
    "url": "source/vue3.x/6.lifecycleMixin.html",
    "revision": "a61301e7b4116e83ce6619180152db5c"
  },
  {
    "url": "source/vue3.x/7.renderMixin.html",
    "revision": "67dcbe644028866e167455d62a11ef8a"
  },
  {
    "url": "source/vue3.x/8.mount.html",
    "revision": "15505a6282fc1e861546ca614e749d8f"
  },
  {
    "url": "source/vue3.x/9.ast.html",
    "revision": "cf67db5853c378267b0f3fd9b8b909f1"
  },
  {
    "url": "source/vuex3.x/1.index.html",
    "revision": "487fb6e83b6b54736935f88341309dae"
  },
  {
    "url": "source/vuex3.x/2.use.html",
    "revision": "74f5351299d6e7ce73cea5cce1a521c9"
  },
  {
    "url": "source/vuex3.x/3.origin.html",
    "revision": "f977877e88b3db99510b270ae4afd3f7"
  },
  {
    "url": "source/vuex4.x/1.index.html",
    "revision": "b3e7b92c2e458a95f6a31c5868d4d2a0"
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
