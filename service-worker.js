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
    "revision": "252a5c371a9f7cb4c8ac0ceb05e12c09"
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
    "url": "assets/js/123.c262341f.js",
    "revision": "84eed801627996c0423f954832798c20"
  },
  {
    "url": "assets/js/124.64c58fed.js",
    "revision": "2f30c6aedc85d1cdc3341f26e35555b0"
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
    "revision": "137c9fbb52e367e2dae7cb3ea1e7f14a"
  },
  {
    "url": "base/api/1.index.html",
    "revision": "75a9ff516e7a906d304db51416955d3a"
  },
  {
    "url": "base/api/2.echartsInstance.html",
    "revision": "ade7fabbe3646d05b7471bb98fbc38b7"
  },
  {
    "url": "base/api/3.action.html",
    "revision": "48a1616de5cc5a53eed3dbf1918b764c"
  },
  {
    "url": "base/api/4.events.html",
    "revision": "11dea3f0c9c9a01b6b6c80e09f1ca706"
  },
  {
    "url": "base/components/1.index.html",
    "revision": "e57d143bdcb9b87686b9b59e80e412c8"
  },
  {
    "url": "base/components/1.legend.html",
    "revision": "29f80d13fba337aa06f0c28bf0da3dd1"
  },
  {
    "url": "base/components/2.grid.html",
    "revision": "e100f8d8da2f56ea964d5a243d1cc8dc"
  },
  {
    "url": "base/components/2.polar.html",
    "revision": "70931e6ae69257a7e4d4d7b3344fdb10"
  },
  {
    "url": "base/components/2.radiusAxis.html",
    "revision": "d156e3fb9e031259b225b6afc57f8341"
  },
  {
    "url": "base/components/2.xAxis.html",
    "revision": "5081920bcdf0bce1e4d645624baf42cc"
  },
  {
    "url": "base/components/2.yAxis.html",
    "revision": "c2a53dcc0d9445ab44b9f93568f2f8a3"
  },
  {
    "url": "base/components/3.angleAxis.html",
    "revision": "487381af52bf1ac9cdf742010bf04268"
  },
  {
    "url": "base/components/4.radar.html",
    "revision": "e20c7ee2dc492b0447d6053d943fb27d"
  },
  {
    "url": "base/components/5.dataZoom.html",
    "revision": "7ceec414f68391b5f645c6d227ab964d"
  },
  {
    "url": "base/components/6.visualMap.html",
    "revision": "1ff5a52a54d97076889f0870c30f1d63"
  },
  {
    "url": "base/components/7.tooltip.html",
    "revision": "6cb940f260230b887eadc41643feac6b"
  },
  {
    "url": "base/components/8.geo.html",
    "revision": "f315b5983da634de7ab8dffeae6c45b7"
  },
  {
    "url": "base/gl/1.index.html",
    "revision": "d292bb927ca431f9870b33aeb4b36c6a"
  },
  {
    "url": "base/gl/1.scatter3D.html",
    "revision": "9d89e6adea3fc68f6cb052f57d14dbe3"
  },
  {
    "url": "base/gl/10.flowGL.html",
    "revision": "75fdd6d75676cf19f2fc95ee3b4ff672"
  },
  {
    "url": "base/gl/2.bar3D.html",
    "revision": "ab5a5af82c9f96b730bd1376d1dc1a32"
  },
  {
    "url": "base/gl/3.line3D.html",
    "revision": "5a0f26599d74fc53748c25b14e00b455"
  },
  {
    "url": "base/gl/4.lines3D.html",
    "revision": "da7325fcd5faef7a6f09c5838c8212b8"
  },
  {
    "url": "base/gl/5.map3D.html",
    "revision": "eca0eb5fc5bedffed3149eec5c0d7059"
  },
  {
    "url": "base/gl/6.surface.html",
    "revision": "f55d35aaf0046215d69e9cc7b57cd824"
  },
  {
    "url": "base/gl/7.polygons3D.html",
    "revision": "41d84834a845e10678fdcd531edfcfb4"
  },
  {
    "url": "base/gl/8.scatterGL.html",
    "revision": "702e3fded06e6e28b22512d2ffdcd35c"
  },
  {
    "url": "base/gl/9.graphGL.html",
    "revision": "b501c857ee67c5c85061a54bc60c4dd6"
  },
  {
    "url": "base/series/1.index.html",
    "revision": "7ff577ba413d2f85da7f51daad29ed35"
  },
  {
    "url": "base/series/1.line.html",
    "revision": "aabbd819712077ae787fbdc53f5eaced"
  },
  {
    "url": "base/series/10.boxplot.html",
    "revision": "51c289ec4dbbe49666e4a010638de743"
  },
  {
    "url": "base/series/11.candlestick.html",
    "revision": "690fca5461b57fe373972fd33af7e7cb"
  },
  {
    "url": "base/series/12.heatmap.html",
    "revision": "46fcd29ab0dca945e05843f03fa2e896"
  },
  {
    "url": "base/series/13.map.html",
    "revision": "b53117cb5fbc0b046321178845b4e38d"
  },
  {
    "url": "base/series/14.parallel.html",
    "revision": "a8d0372f5c56d893c0374133aad87419"
  },
  {
    "url": "base/series/15.lines.html",
    "revision": "16de8ad1848b8dbf15ff85fa9f4ef7cc"
  },
  {
    "url": "base/series/16.graph.html",
    "revision": "7639ab9003db120627a82884aed53f34"
  },
  {
    "url": "base/series/17.sankey.html",
    "revision": "880caa1c26258f4e3baff91c6cf23999"
  },
  {
    "url": "base/series/18.funnel.html",
    "revision": "35a0831be161a3682e4278a36d7a76c6"
  },
  {
    "url": "base/series/19.gauge.html",
    "revision": "af7072b99688fc72b823308d9d3e5ef6"
  },
  {
    "url": "base/series/2.bar.html",
    "revision": "66da00a782f8c6fe04093a9a4ffc9839"
  },
  {
    "url": "base/series/20.pictorialBar.html",
    "revision": "50c17b9d745a88cd282cd50554c95654"
  },
  {
    "url": "base/series/21.themeRiver.html",
    "revision": "fabeff43b2a8adff2af023e681d3130e"
  },
  {
    "url": "base/series/22.custom.html",
    "revision": "4060ac8471c7a8d481df8e7108afaddb"
  },
  {
    "url": "base/series/3.pie.html",
    "revision": "931be7e1204803d01a764f9c395283c7"
  },
  {
    "url": "base/series/4.scatter.html",
    "revision": "0dd6fb3dde98e088606d37672fdd4dde"
  },
  {
    "url": "base/series/5.effectScatter.html",
    "revision": "fbc2b46325aaa15715e63b92a3f20d3e"
  },
  {
    "url": "base/series/6.radar.html",
    "revision": "278328d5d39bc226cb00d83516471412"
  },
  {
    "url": "base/series/7.tree.html",
    "revision": "928064be09616e118b4f547e4c53beb7"
  },
  {
    "url": "base/series/8.treemap.html",
    "revision": "6129b2c7541eba8fdb9263b33abee04a"
  },
  {
    "url": "base/series/9.sunburst.html",
    "revision": "a08a1e8420f4adf0202ef3b353087b6b"
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
    "revision": "888fbc7afcd131b888130e3e0ff46157"
  },
  {
    "url": "mock/http.js",
    "revision": "a219140640bec4dfbe8f4fe88d351ed8"
  },
  {
    "url": "senior/1.micro/1.index.html",
    "revision": "e516224873376af39e74d3aad7c33d31"
  },
  {
    "url": "senior/1.micro/1.singlespa.html",
    "revision": "ec9b4da0b69da49d0f15aef2df991d77"
  },
  {
    "url": "senior/1.micro/1.singlespa2.html",
    "revision": "5ac2405a27a88b7df87eb16fec31a2b7"
  },
  {
    "url": "senior/1.micro/2.qiankun.html",
    "revision": "343c02d38d33c3674f0831885262a261"
  },
  {
    "url": "senior/1.micro/2.qiankun2.html",
    "revision": "eb47575f9952d624939badf4b8826274"
  },
  {
    "url": "senior/1.micro/3.share.html",
    "revision": "e1ab0ea17158c0ec8f84a7e35e4484f4"
  },
  {
    "url": "senior/1.micro/4.dev.html",
    "revision": "fec712a69f42cac137423f82d5df1a95"
  },
  {
    "url": "senior/2.typescript/1.env.html",
    "revision": "915b43a27c9fd631ef745dd7bf2793bd"
  },
  {
    "url": "senior/2.typescript/1.index.html",
    "revision": "f1bf0c237bc0e1d6ee1860e59187d6ee"
  },
  {
    "url": "senior/2.typescript/10.infer.html",
    "revision": "8d649d87e90642db6abf6e0ed75a07bf"
  },
  {
    "url": "senior/2.typescript/11.overlapping.html",
    "revision": "066ea42d15fe910047f72061087c92ca"
  },
  {
    "url": "senior/2.typescript/12.condition.html",
    "revision": "cc776920b238a51c836ccfd3dfffd25b"
  },
  {
    "url": "senior/2.typescript/13.builtin.html",
    "revision": "1356914c4aa77524968b0482acb07c1c"
  },
  {
    "url": "senior/2.typescript/14.package.html",
    "revision": "96bc963b50627fcd07faeee1d079fdb2"
  },
  {
    "url": "senior/2.typescript/15.custom.html",
    "revision": "d4f19cc5261af030a7e4b529fdc6e1b8"
  },
  {
    "url": "senior/2.typescript/16.unknown.html",
    "revision": "3b41fd92dd78e9eea795300fb9593d16"
  },
  {
    "url": "senior/2.typescript/17.module.html",
    "revision": "0810c07e4991a357131f02f35db31b6e"
  },
  {
    "url": "senior/2.typescript/18.statement.html",
    "revision": "490d9d24f3ba695402f02717a2d1a028"
  },
  {
    "url": "senior/2.typescript/19.extend.html",
    "revision": "e3457e865b6d744b31dc30de1f613777"
  },
  {
    "url": "senior/2.typescript/2.base.html",
    "revision": "ae4527608b3c0ceb2da430051d53fded"
  },
  {
    "url": "senior/2.typescript/3.deduction.html",
    "revision": "173790520ff8e55b24d92b0bcb321ee3"
  },
  {
    "url": "senior/2.typescript/4.type.html",
    "revision": "b1caf8c48602ce36648b50b33616744f"
  },
  {
    "url": "senior/2.typescript/5.class.html",
    "revision": "722799b15e1353fcdb06ece8bab6b4df"
  },
  {
    "url": "senior/2.typescript/6.interface.html",
    "revision": "bc15bd1f19516e395934d86bb2eeddd2"
  },
  {
    "url": "senior/2.typescript/7.generic.html",
    "revision": "c23430ad9b375968a98c4ab797f5ff39"
  },
  {
    "url": "senior/2.typescript/8.compatible.html",
    "revision": "d0e40f889c0d809ee98dfb19977cfe8a"
  },
  {
    "url": "senior/2.typescript/9.protect.html",
    "revision": "e0e399a9d00f2ae7b2e9473a2a5e6ef8"
  },
  {
    "url": "senior/3.deploy/1.index.html",
    "revision": "7a45fe2fbc12b813fb98640ba3a79816"
  },
  {
    "url": "senior/3.deploy/1.local.html",
    "revision": "b073614c598b621f802424c027606531"
  },
  {
    "url": "senior/3.deploy/2.gitlab.html",
    "revision": "4911e67a79d5e4ef399a487c8fa3fa64"
  },
  {
    "url": "senior/3.deploy/3.genkins.html",
    "revision": "c589478bcca7648a9527c3b606befcfa"
  },
  {
    "url": "senior/3.deploy/4.centos.html",
    "revision": "37e14d9986672f09dbefd706d1f5333e"
  },
  {
    "url": "senior/3.deploy/5.nginx.html",
    "revision": "0c152dfba35d008816b1b7fccfb64c1a"
  },
  {
    "url": "senior/4.component/1.button.html",
    "revision": "1a04c98dceaf17d326b72a88c34cea55"
  },
  {
    "url": "senior/4.component/1.env.html",
    "revision": "abdd838c96f57352c9d1de1fb5bad073"
  },
  {
    "url": "senior/4.component/1.index.html",
    "revision": "51ca2f1253af29c04d249ae93904dc91"
  },
  {
    "url": "senior/4.component/1.recursion.html",
    "revision": "732b7aa1f12cba7d03d30add3bcff375"
  },
  {
    "url": "senior/4.component/10.tree.html",
    "revision": "5e42d6258281f9e91c49337b8c630f97"
  },
  {
    "url": "senior/4.component/12.table.html",
    "revision": "dfa1bb542536a03c3cbebbaa2811c783"
  },
  {
    "url": "senior/4.component/13.publish.html",
    "revision": "72a82738bd979f9494a5c24aae6f4792"
  },
  {
    "url": "senior/4.component/2.dropdown.html",
    "revision": "9aefdc45dcdf544e165d2930cb5c22a3"
  },
  {
    "url": "senior/4.component/3.dialog.html",
    "revision": "79023f385199eb3886d2179b009c2a0a"
  },
  {
    "url": "senior/4.component/3.form.html",
    "revision": "d4a1a80aad5289378f6d5206a0d1c89c"
  },
  {
    "url": "senior/4.component/4.input.html",
    "revision": "9da8be82d2bd237959fef998a2d46d79"
  },
  {
    "url": "senior/4.component/4.render.html",
    "revision": "dd2beaaa5875e8084c308fb2f95b7140"
  },
  {
    "url": "senior/4.component/5.checkBox.html",
    "revision": "906bb99ce85fb645174d4190c763e62e"
  },
  {
    "url": "senior/4.component/6.cascader.html",
    "revision": "cc6e617176863ba802c8c56ca033aa58"
  },
  {
    "url": "senior/4.component/7.date.html",
    "revision": "a0dca68c348d2a72dc08c6bf49920585"
  },
  {
    "url": "senior/4.component/8.dispaly.html",
    "revision": "c0668f4bad8203fd2ae76f41efbb45c8"
  },
  {
    "url": "senior/4.component/9.alert.html",
    "revision": "406fa73e4b914c8139adab9a23845010"
  },
  {
    "url": "senior/4.component/9.dynamics.html",
    "revision": "9b252767a6edfde2c831ba9d12b67366"
  },
  {
    "url": "source/vue-cli2.x/1.index.html",
    "revision": "e9447801a039cbd88c47c45e51d5c26a"
  },
  {
    "url": "source/vue-cli3.x/1.index.html",
    "revision": "78bbfd18b184052d6a0fec8e8cbdafea"
  },
  {
    "url": "source/vue-router3.x/1.index.html",
    "revision": "f4d1609339367e081486f593863f2e23"
  },
  {
    "url": "source/vue-router3.x/2.origin.html",
    "revision": "27a86d4f873f9b343bee0805b9f0d054"
  },
  {
    "url": "source/vue-router4.x/1.index.html",
    "revision": "116b1051552e77431a6e786dcf3c0c62"
  },
  {
    "url": "source/vue2.x/1.index.html",
    "revision": "5be71bf5a4e0cf272fef1bccafcd2e49"
  },
  {
    "url": "source/vue2.x/10.optimize.html",
    "revision": "ca5d78590451e7ed6cde7d3174905de8"
  },
  {
    "url": "source/vue2.x/11.gencode.html",
    "revision": "783e1cf46bd0a5b33de43d4319a330ee"
  },
  {
    "url": "source/vue2.x/12.mount.html",
    "revision": "ebf19a9af46cb9fd9fb20dd4bf7de97b"
  },
  {
    "url": "source/vue2.x/13._render.html",
    "revision": "289de584755939a0ae189fa86c455274"
  },
  {
    "url": "source/vue2.x/14._update.html",
    "revision": "60a18126d258bb32a6bf510898b63688"
  },
  {
    "url": "source/vue2.x/2.initGlobalAPI.html",
    "revision": "044e08f49cd2e0b8a0d9d9443df3722a"
  },
  {
    "url": "source/vue2.x/3.initMixin.html",
    "revision": "2a9af1879d058d9e1e4b85060b62b33f"
  },
  {
    "url": "source/vue2.x/4.stateMixin.html",
    "revision": "aa50cfac3068a38f2c7c1561696dcac0"
  },
  {
    "url": "source/vue2.x/5.eventsMixin.html",
    "revision": "cb804b07f7b46fb150502485d5b2d7ae"
  },
  {
    "url": "source/vue2.x/6.lifecycleMixin.html",
    "revision": "36cf8dc630a186f094d9ddbbd12c0643"
  },
  {
    "url": "source/vue2.x/7.renderMixin.html",
    "revision": "7a00e7801d6433b14cc1bf221e16a3c9"
  },
  {
    "url": "source/vue2.x/8.mount.html",
    "revision": "1ea5f1741c1e9917cd84f1910e320711"
  },
  {
    "url": "source/vue2.x/9.ast.html",
    "revision": "ce7a476c5cee0229249347e0998f8aa5"
  },
  {
    "url": "source/vue3.x/1.index.html",
    "revision": "833a1aba82dc100256727cff18248e88"
  },
  {
    "url": "source/vue3.x/10.optimize.html",
    "revision": "ca1243705e1c4e7fcce34b4ee35f9abb"
  },
  {
    "url": "source/vue3.x/11.gencode.html",
    "revision": "2485332917488f2af5f2f07d73c4fad4"
  },
  {
    "url": "source/vue3.x/12.mount.html",
    "revision": "54c6502054cc1393b3f8759f6f356692"
  },
  {
    "url": "source/vue3.x/13._render.html",
    "revision": "e085b3119b4507e2ab65054c26b0579a"
  },
  {
    "url": "source/vue3.x/14._update.html",
    "revision": "a302c80e50ded47c7860829a64f15d43"
  },
  {
    "url": "source/vue3.x/2.initGlobalAPI.html",
    "revision": "426027ebc9bd947815f853561d7fb89b"
  },
  {
    "url": "source/vue3.x/3.initMixin.html",
    "revision": "f2692267b97a1b328af9d5551553035c"
  },
  {
    "url": "source/vue3.x/4.stateMixin.html",
    "revision": "3b4a54a038c86e81c0bd7a8d241f19a8"
  },
  {
    "url": "source/vue3.x/5.eventsMixin.html",
    "revision": "a3cf9a89c1a50d6c9e5e5cc355c1f2ab"
  },
  {
    "url": "source/vue3.x/6.lifecycleMixin.html",
    "revision": "00adccedacc66abcb585e27e360858e4"
  },
  {
    "url": "source/vue3.x/7.renderMixin.html",
    "revision": "aa251581c67fbb1eab901340695fee61"
  },
  {
    "url": "source/vue3.x/8.mount.html",
    "revision": "5e05d23b06d9e10c92b84abc652034e0"
  },
  {
    "url": "source/vue3.x/9.ast.html",
    "revision": "a08da553597f96e3bcef6412b59196cc"
  },
  {
    "url": "source/vuex3.x/1.index.html",
    "revision": "116fe0e738b86761a6852c1d96371672"
  },
  {
    "url": "source/vuex3.x/2.use.html",
    "revision": "314853ddfebcfa229f137009b16a0f48"
  },
  {
    "url": "source/vuex3.x/3.origin.html",
    "revision": "23b5b55c718061ab31fab3937ea68827"
  },
  {
    "url": "source/vuex4.x/1.index.html",
    "revision": "c189ea9a002e4cec35e043bb4e43c761"
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
