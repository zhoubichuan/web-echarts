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
    "revision": "2223543d5a0ef96c406336d05fe76db7"
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
    "url": "assets/js/10.d5070dc3.js",
    "revision": "b8987fb371c1334ff172d9ffe50a05c2"
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
    "url": "assets/js/11.26a872a6.js",
    "revision": "f2c9deeda2f6a365fcf928d9bc0a8c40"
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
    "url": "assets/js/12.0fab2bfe.js",
    "revision": "dbc8aecc0bac9dceaada0d89fbe22fc6"
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
    "url": "assets/js/14.244a8770.js",
    "revision": "2674a7dedc507b9788e95fcf3e68b8d2"
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
    "url": "assets/js/15.a71bb1da.js",
    "revision": "08fedb5bf19062db73809fda0cfe0813"
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
    "url": "assets/js/16.7bb3d0af.js",
    "revision": "8bace52c1708dadca460297e6bcd7a48"
  },
  {
    "url": "assets/js/17.70aae60a.js",
    "revision": "286c28fffa9d247db7db2eb57123b0d9"
  },
  {
    "url": "assets/js/18.b55a025d.js",
    "revision": "d8543a3b0f411a331b882f353566b5fb"
  },
  {
    "url": "assets/js/19.af6cd594.js",
    "revision": "cf37ccae9096930bb2f1968839dd6318"
  },
  {
    "url": "assets/js/2.3d3c7f91.js",
    "revision": "b51182096d03c1e08f1e9a147a1d8c88"
  },
  {
    "url": "assets/js/20.1246b558.js",
    "revision": "46bf095e849474dd5b203ed87117ed26"
  },
  {
    "url": "assets/js/21.f8dd542d.js",
    "revision": "31c6a062851ca91cfa353308ad776ab1"
  },
  {
    "url": "assets/js/22.f1854297.js",
    "revision": "5bff6f2e5cb5e8b91c518eee4c04b694"
  },
  {
    "url": "assets/js/23.a3b47ff2.js",
    "revision": "d31f9578c78a9ccd5f4711c53c69615b"
  },
  {
    "url": "assets/js/24.73dace21.js",
    "revision": "a9b264c37625defec03509ac967b59eb"
  },
  {
    "url": "assets/js/25.7c0e8533.js",
    "revision": "1c0a2d85661f8153d2fa82bb14c406b6"
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
    "url": "assets/js/3.2453b1d9.js",
    "revision": "906751efd5a59705cd33ceb68bea0a3f"
  },
  {
    "url": "assets/js/30.759ce509.js",
    "revision": "477c6f27b56dac4a1eb069f8d86caac3"
  },
  {
    "url": "assets/js/31.d803fa54.js",
    "revision": "7ea32d4cf57123e7ffa0d94d6b607ac4"
  },
  {
    "url": "assets/js/32.02f50b30.js",
    "revision": "4149781c23dacf34611d836febf087d8"
  },
  {
    "url": "assets/js/33.b657b553.js",
    "revision": "893bf357536bf6542a321bc124a86c5a"
  },
  {
    "url": "assets/js/34.e816eb4e.js",
    "revision": "484b08008676ea0f93631c47ac92ca24"
  },
  {
    "url": "assets/js/35.e140853e.js",
    "revision": "ca9c91f9eea9b6fc0c21333ce1ff8556"
  },
  {
    "url": "assets/js/36.be592c6b.js",
    "revision": "80259a71a549b2b1c1963718037f9182"
  },
  {
    "url": "assets/js/37.d9996bfa.js",
    "revision": "fccb0186172a89d4d01e7559d7cd5574"
  },
  {
    "url": "assets/js/38.c01a48f2.js",
    "revision": "4aaad300f504277df0b384b282174a42"
  },
  {
    "url": "assets/js/39.545746b7.js",
    "revision": "8924cdfeed4d27c320b7ce70c14b79bd"
  },
  {
    "url": "assets/js/4.8214aab9.js",
    "revision": "463e533dca9e52cb435b9037cf665ede"
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
    "url": "assets/js/44.b210323d.js",
    "revision": "353f9fb23ffdd64694028ee5c3bde9d7"
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
    "url": "assets/js/49.951e2420.js",
    "revision": "5d29ee434cbfa6fbf88333371b58d23b"
  },
  {
    "url": "assets/js/5.2f22a924.js",
    "revision": "2a15b03c5ecf75e0907ba414a2c2f5c3"
  },
  {
    "url": "assets/js/50.6bbcb0d8.js",
    "revision": "b0bd7eb9b48fa31d6d7e9be5b4b4c158"
  },
  {
    "url": "assets/js/51.fd13f425.js",
    "revision": "33deb45ba753c1ff03887b173a5f5390"
  },
  {
    "url": "assets/js/52.1a4cc4cd.js",
    "revision": "fe70bc75622c1ceca2258026ed09aabf"
  },
  {
    "url": "assets/js/53.5692603f.js",
    "revision": "3e396730961ece0cf2ae939d9be5d835"
  },
  {
    "url": "assets/js/54.63adbcb5.js",
    "revision": "184ba1d93a7e5bd1182818ae89a96827"
  },
  {
    "url": "assets/js/55.dfc34a74.js",
    "revision": "0a658b8a397a2792466e1a832c352d54"
  },
  {
    "url": "assets/js/56.acdfdf53.js",
    "revision": "9cd3a1c19fe85a1ac74229fde59a1f93"
  },
  {
    "url": "assets/js/57.b5382f2d.js",
    "revision": "2f464fdd722eab9f51205d886b1d80ac"
  },
  {
    "url": "assets/js/58.19c17cfb.js",
    "revision": "870c508df3560df45acf485879cfeca9"
  },
  {
    "url": "assets/js/59.64b0a175.js",
    "revision": "0ca6425fa74bd0b3c4befc93e49ced8f"
  },
  {
    "url": "assets/js/6.994710d3.js",
    "revision": "f1e278df2e208dc9b0d2d85b75f4d819"
  },
  {
    "url": "assets/js/60.a08443c5.js",
    "revision": "233568718be70bc2635ca697afe2b26a"
  },
  {
    "url": "assets/js/61.4638ff7c.js",
    "revision": "06d0833c7958262adca0e5dc5b696091"
  },
  {
    "url": "assets/js/62.d0c0ec01.js",
    "revision": "bbc5f239d150116c23d4e6049be4853d"
  },
  {
    "url": "assets/js/63.993a0c6e.js",
    "revision": "e8395d9f5a28a807d9e2a5bb420b10fa"
  },
  {
    "url": "assets/js/64.bff16ac2.js",
    "revision": "7ca4ee1dd506fb7ae52052c0a0bc6611"
  },
  {
    "url": "assets/js/65.f1b7b5b7.js",
    "revision": "cc1b4ce3fb77371bb08c5fd9e782eb91"
  },
  {
    "url": "assets/js/66.db0cd789.js",
    "revision": "6bc6040091f3e841d9994851063dc90c"
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
    "url": "assets/js/7.144200cd.js",
    "revision": "e53c922d12a940a6d35a89c14a9b99d9"
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
    "url": "assets/js/75.d6572065.js",
    "revision": "aa05a6fe8e32b34a71360e20f654aff2"
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
    "revision": "79ee911af05abbeea1fab26c29722dc3"
  },
  {
    "url": "base/api/1.index.html",
    "revision": "cffc808df53b6997135e507ecf26a57e"
  },
  {
    "url": "base/api/2.echartsInstance.html",
    "revision": "f1e2eaad888fcd8fa17e8897040c13c9"
  },
  {
    "url": "base/api/3.action.html",
    "revision": "5b86ffea2c3853feb6b39a7e62de07ae"
  },
  {
    "url": "base/api/4.events.html",
    "revision": "67d3304cbc1c68a14df8adcc955e607a"
  },
  {
    "url": "base/components/1.index.html",
    "revision": "1228c3b4213e506117bcb6017dcd5b3b"
  },
  {
    "url": "base/components/1.legend.html",
    "revision": "2f0ef3e303d3e3d13b953c4acab87fae"
  },
  {
    "url": "base/components/2.grid.html",
    "revision": "ed20543bc7d319d12b1ab8ea2f36c72e"
  },
  {
    "url": "base/components/2.polar.html",
    "revision": "a4d092b30d701738f9401445e67fc507"
  },
  {
    "url": "base/components/2.radiusAxis.html",
    "revision": "627b6777cb6bd2e1426e2ffbefdc890d"
  },
  {
    "url": "base/components/2.xAxis.html",
    "revision": "c02bfb192a4a3217736123100097d279"
  },
  {
    "url": "base/components/2.yAxis.html",
    "revision": "e97714253c552b49abd8df73a1285af2"
  },
  {
    "url": "base/components/3.angleAxis.html",
    "revision": "bdf3fca9ad11eac9f1b1053017a83f92"
  },
  {
    "url": "base/components/4.radar.html",
    "revision": "1388b36df16205bd43993ba4a6ab9534"
  },
  {
    "url": "base/components/5.dataZoom.html",
    "revision": "f24ec168805614c98bab1c404962c2f7"
  },
  {
    "url": "base/components/6.visualMap.html",
    "revision": "ae4938ce40a469ed44ca7dbcf7089d78"
  },
  {
    "url": "base/components/7.tooltip.html",
    "revision": "b55a7b64d550354520f5c760fdbe6964"
  },
  {
    "url": "base/components/8.geo.html",
    "revision": "9f8dbff728a34f469e2294ced8efb9c8"
  },
  {
    "url": "base/gl/1.index.html",
    "revision": "1997df7ede6c37398f6d34478fa333d2"
  },
  {
    "url": "base/gl/1.scatter3D.html",
    "revision": "a1e6687bbf81fdb2e2abfb3d137cb0e8"
  },
  {
    "url": "base/gl/10.flowGL.html",
    "revision": "55e0fb7b9df8c7cbaab05120b5a1d2b3"
  },
  {
    "url": "base/gl/2.bar3D.html",
    "revision": "eb0a63add73c97291b075e338fd4aae9"
  },
  {
    "url": "base/gl/3.line3D.html",
    "revision": "d76837c6417e367a385f7f6878739abd"
  },
  {
    "url": "base/gl/4.lines3D.html",
    "revision": "db588ff1346f25d1b8138d20a6890642"
  },
  {
    "url": "base/gl/5.map3D.html",
    "revision": "2beabcef270227c1fa2cf93e6a4bc07c"
  },
  {
    "url": "base/gl/6.surface.html",
    "revision": "ae47491323cf0d8ec08909e6d2db86f1"
  },
  {
    "url": "base/gl/7.polygons3D.html",
    "revision": "86d3cd5d65ebe022e277c6bf49a849c0"
  },
  {
    "url": "base/gl/8.scatterGL.html",
    "revision": "6656eea99dd3b5b3aebc61035b837f77"
  },
  {
    "url": "base/gl/9.graphGL.html",
    "revision": "715051903c59ebecb965d89b512d4b56"
  },
  {
    "url": "base/series/1.index.html",
    "revision": "3c1f0ea09d26c48f1fb42a8c5703d290"
  },
  {
    "url": "base/series/1.line.html",
    "revision": "5f922fd8869ffff3c007742ba3070092"
  },
  {
    "url": "base/series/10.boxplot.html",
    "revision": "3db72b633ad0e84082229a5e770225b0"
  },
  {
    "url": "base/series/11.candlestick.html",
    "revision": "7bfe271264cebadf1f9aec773c34ebd3"
  },
  {
    "url": "base/series/12.heatmap.html",
    "revision": "551e8cfd91a09fc3a6be8fe1e76cf1df"
  },
  {
    "url": "base/series/13.map.html",
    "revision": "a4b2faac7fa92a4053e1d19e57a3a5de"
  },
  {
    "url": "base/series/14.parallel.html",
    "revision": "f596b1ba55e7288bd90716dd5613e2cd"
  },
  {
    "url": "base/series/15.lines.html",
    "revision": "6dd712943dfd8db54300f881c483a799"
  },
  {
    "url": "base/series/16.graph.html",
    "revision": "8834387dbd228c944d00a2b542249dad"
  },
  {
    "url": "base/series/17.sankey.html",
    "revision": "2d263b7344932b6a15bdef43bcd2791e"
  },
  {
    "url": "base/series/18.funnel.html",
    "revision": "022863f50cc07ffd8a7adc8746e8c5b5"
  },
  {
    "url": "base/series/19.gauge.html",
    "revision": "29534d52e6456b5516beff88821f9e59"
  },
  {
    "url": "base/series/2.bar.html",
    "revision": "a6886a4948cfca3c2e1b5eb416da6b3d"
  },
  {
    "url": "base/series/20.pictorialBar.html",
    "revision": "8eb3afe3c946c3f283db95fc7ff64767"
  },
  {
    "url": "base/series/21.themeRiver.html",
    "revision": "a96b72a58473b286af10ca874f8f76fb"
  },
  {
    "url": "base/series/22.custom.html",
    "revision": "95e574178aa897e5f91d0647f1c39928"
  },
  {
    "url": "base/series/3.pie.html",
    "revision": "c838684252df37dbc244052f3796406c"
  },
  {
    "url": "base/series/4.scatter.html",
    "revision": "9652096e96de1b79a3aa8a87b304b03c"
  },
  {
    "url": "base/series/5.effectScatter.html",
    "revision": "a4abc0d18c22116f202b57d9b76fa5f7"
  },
  {
    "url": "base/series/6.radar.html",
    "revision": "577b3c8e8a9d9e3ead571a842596f588"
  },
  {
    "url": "base/series/7.tree.html",
    "revision": "4fe894e6f39b9613bc04f26af01a6b9f"
  },
  {
    "url": "base/series/8.treemap.html",
    "revision": "b581faca7c41922e96951f713a711742"
  },
  {
    "url": "base/series/9.sunburst.html",
    "revision": "f1b6acf55b77570dc2df1e07c4f256ae"
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
    "revision": "0408eb4fbe93246d3d3388439bf356e9"
  },
  {
    "url": "mock/http.js",
    "revision": "a219140640bec4dfbe8f4fe88d351ed8"
  },
  {
    "url": "senior/1.micro/1.index.html",
    "revision": "e38fda8a3e14105b17a86c52c5f1400a"
  },
  {
    "url": "senior/1.micro/1.singlespa.html",
    "revision": "d90dd36d83c3c2419ca8953d64e3c864"
  },
  {
    "url": "senior/1.micro/1.singlespa2.html",
    "revision": "2d26faef81b3a428965cdf56ea038d41"
  },
  {
    "url": "senior/1.micro/2.qiankun.html",
    "revision": "d64188dc6d9d56f92c61f67b76416d5c"
  },
  {
    "url": "senior/1.micro/2.qiankun2.html",
    "revision": "3be4b6ceb6993891de3c5d2884807229"
  },
  {
    "url": "senior/1.micro/3.share.html",
    "revision": "2e8724d0a07600d2224bce7b569420a9"
  },
  {
    "url": "senior/1.micro/4.dev.html",
    "revision": "d4980179e1bca217f69633cc29f5351d"
  },
  {
    "url": "senior/2.typescript/1.env.html",
    "revision": "40b3b9ee62d3abac1a150770547cb13b"
  },
  {
    "url": "senior/2.typescript/1.index.html",
    "revision": "0c7c8722dedc80dabd6389027d8b65fa"
  },
  {
    "url": "senior/2.typescript/10.infer.html",
    "revision": "e790a33e8dcddbd430633f4dc4cad9ef"
  },
  {
    "url": "senior/2.typescript/11.overlapping.html",
    "revision": "3f4002bb8511803446a9e76512a9c12a"
  },
  {
    "url": "senior/2.typescript/12.condition.html",
    "revision": "7b99d2bc5925b576c3a7d7bedef59531"
  },
  {
    "url": "senior/2.typescript/13.builtin.html",
    "revision": "5cbb366f6fdbf22b51c17c4e496f2a74"
  },
  {
    "url": "senior/2.typescript/14.package.html",
    "revision": "cc7947bcd91375973f6cdce130e5d3a2"
  },
  {
    "url": "senior/2.typescript/15.custom.html",
    "revision": "0c50efdcff7499dba8b8db4304e2285c"
  },
  {
    "url": "senior/2.typescript/16.unknown.html",
    "revision": "a81e5cf1ae6e1dfd879c4d4419ba2528"
  },
  {
    "url": "senior/2.typescript/17.module.html",
    "revision": "c39fd4e89d6405af7d63e6d41da2ee5a"
  },
  {
    "url": "senior/2.typescript/18.statement.html",
    "revision": "50584b61c40c393c4af45b58fe2a68a7"
  },
  {
    "url": "senior/2.typescript/19.extend.html",
    "revision": "b7623574de26eee8b3574f3eccad6f6e"
  },
  {
    "url": "senior/2.typescript/2.base.html",
    "revision": "52added4ba6f9a65ac3c395ee2c3ae22"
  },
  {
    "url": "senior/2.typescript/3.deduction.html",
    "revision": "25770e893c583891595242bb9e4f40ce"
  },
  {
    "url": "senior/2.typescript/4.type.html",
    "revision": "eef7a6cf77df3cf2e6815c14eb312fc4"
  },
  {
    "url": "senior/2.typescript/5.class.html",
    "revision": "e60a6e46d05b29b9372c775bff29c952"
  },
  {
    "url": "senior/2.typescript/6.interface.html",
    "revision": "83dbc6d9e01e287f5b17310724fcd1d5"
  },
  {
    "url": "senior/2.typescript/7.generic.html",
    "revision": "ff57e4a5f4bb7728a334b9a8116f8a0a"
  },
  {
    "url": "senior/2.typescript/8.compatible.html",
    "revision": "7065098572bfefb5ef435d3f10695081"
  },
  {
    "url": "senior/2.typescript/9.protect.html",
    "revision": "e4baaab52c15729b5c314359bd52a722"
  },
  {
    "url": "senior/3.deploy/1.index.html",
    "revision": "f1871e4b42bd8277845ed10a375f893b"
  },
  {
    "url": "senior/3.deploy/1.local.html",
    "revision": "188acaf9f38822316cf9b02465d262aa"
  },
  {
    "url": "senior/3.deploy/2.gitlab.html",
    "revision": "608adc4bd8ed0277e4e17dc1a80fcbad"
  },
  {
    "url": "senior/3.deploy/3.genkins.html",
    "revision": "9b349a9f3c42270b15fe1e8287e22eb4"
  },
  {
    "url": "senior/3.deploy/4.centos.html",
    "revision": "6efd3d341a682dafdf07a784d5bbb504"
  },
  {
    "url": "senior/3.deploy/5.nginx.html",
    "revision": "42cd63a58141cf5a2e62cd19175b0558"
  },
  {
    "url": "senior/4.component/1.button.html",
    "revision": "7b0617e632db29cfd61373fd055d541b"
  },
  {
    "url": "senior/4.component/1.env.html",
    "revision": "9235d9d3f249aed54c3c52d48298aa1e"
  },
  {
    "url": "senior/4.component/1.index.html",
    "revision": "c78420ddb563995d1a4475e6df83e91c"
  },
  {
    "url": "senior/4.component/1.recursion.html",
    "revision": "9b8fab813edf0a4942f61e5a45bae67e"
  },
  {
    "url": "senior/4.component/10.tree.html",
    "revision": "46b2ab29aadd66d73ee4d0ebb8d2bdae"
  },
  {
    "url": "senior/4.component/12.table.html",
    "revision": "952ef4f9b7729ee6f5e67e71dfaeb478"
  },
  {
    "url": "senior/4.component/13.publish.html",
    "revision": "d549323873f4ec2204d03c335523a119"
  },
  {
    "url": "senior/4.component/2.dropdown.html",
    "revision": "f3c5445b889992099342426c59addf88"
  },
  {
    "url": "senior/4.component/3.dialog.html",
    "revision": "4b88862377b17ad85ba19c97e85b3f64"
  },
  {
    "url": "senior/4.component/3.form.html",
    "revision": "7447b3f5b26cfef512cb086ac61461ec"
  },
  {
    "url": "senior/4.component/4.input.html",
    "revision": "57545154a969347fedaa9c1ec8872198"
  },
  {
    "url": "senior/4.component/4.render.html",
    "revision": "91442078d518ac67c2524fe0970d9ece"
  },
  {
    "url": "senior/4.component/5.checkBox.html",
    "revision": "5095dfc07e33333c02cf8e6ae6c686b3"
  },
  {
    "url": "senior/4.component/6.cascader.html",
    "revision": "4ff90cb6d33c41c675dacbf7a9a0a6e5"
  },
  {
    "url": "senior/4.component/7.date.html",
    "revision": "ba2d87932fc516ddb3f2878c7d0dc6ba"
  },
  {
    "url": "senior/4.component/8.dispaly.html",
    "revision": "5f97ce3df26adf1d21b0740877ea34aa"
  },
  {
    "url": "senior/4.component/9.alert.html",
    "revision": "36528a726e55c81a8ff1d93afe868b3f"
  },
  {
    "url": "senior/4.component/9.dynamics.html",
    "revision": "1125cc79df73fd07137e3f9650ee9765"
  },
  {
    "url": "source/vue-cli2.x/1.index.html",
    "revision": "a1b59ea0a1fe69ed6f55671531b3795a"
  },
  {
    "url": "source/vue-cli3.x/1.index.html",
    "revision": "989b841f6d6c4c21ec62a303db845c8e"
  },
  {
    "url": "source/vue-router3.x/1.index.html",
    "revision": "2e8d5dea3d15d135d832562adbeae397"
  },
  {
    "url": "source/vue-router3.x/2.origin.html",
    "revision": "5a934d087d2105109ca66a4502da7f4c"
  },
  {
    "url": "source/vue-router4.x/1.index.html",
    "revision": "b7e99b625d16a1a68ff5a14bdebe2c3f"
  },
  {
    "url": "source/vue2.x/1.index.html",
    "revision": "516164931788df0b734f8eeaa91c460c"
  },
  {
    "url": "source/vue2.x/10.optimize.html",
    "revision": "28d1afa132320793ed4ed46c2deaed00"
  },
  {
    "url": "source/vue2.x/11.gencode.html",
    "revision": "c7d1d942c94f0ebe4a8174af9cbebd2f"
  },
  {
    "url": "source/vue2.x/12.mount.html",
    "revision": "2cbf7cc2abff3986ec5b54ec46fa944c"
  },
  {
    "url": "source/vue2.x/13._render.html",
    "revision": "5374221218fb3fe6e3e63375ba967afe"
  },
  {
    "url": "source/vue2.x/14._update.html",
    "revision": "1500024c1e086f062e510c29abe60d81"
  },
  {
    "url": "source/vue2.x/2.initGlobalAPI.html",
    "revision": "fd3745de3456ca944449565055faefd5"
  },
  {
    "url": "source/vue2.x/3.initMixin.html",
    "revision": "63a2b4bd2621ffe21e6e16c22c12d9a0"
  },
  {
    "url": "source/vue2.x/4.stateMixin.html",
    "revision": "2776b440f2d9e23462325918ba81b217"
  },
  {
    "url": "source/vue2.x/5.eventsMixin.html",
    "revision": "cc106a741ddd1ba0b16029f6c1d46741"
  },
  {
    "url": "source/vue2.x/6.lifecycleMixin.html",
    "revision": "7e1d48f1a76868baa67bec7283c4f76e"
  },
  {
    "url": "source/vue2.x/7.renderMixin.html",
    "revision": "9e155fc12f6021e507c704b81ba01ac9"
  },
  {
    "url": "source/vue2.x/8.mount.html",
    "revision": "ae06233476803721ffc695b95c186b32"
  },
  {
    "url": "source/vue2.x/9.ast.html",
    "revision": "468abdb492207578080442b9d68bcb4d"
  },
  {
    "url": "source/vue3.x/1.index.html",
    "revision": "91441d2761b261d97649f147b6c150b9"
  },
  {
    "url": "source/vue3.x/10.optimize.html",
    "revision": "c09d7272ec65c759872a473109c0b056"
  },
  {
    "url": "source/vue3.x/11.gencode.html",
    "revision": "77d586632b2199935e8e4ca6d529b96a"
  },
  {
    "url": "source/vue3.x/12.mount.html",
    "revision": "445a444a653ec727e05ea4562917328c"
  },
  {
    "url": "source/vue3.x/13._render.html",
    "revision": "19408782b462566c10477f634a3364c6"
  },
  {
    "url": "source/vue3.x/14._update.html",
    "revision": "aed5ac2e6ddf67deb7b8594b6c25b238"
  },
  {
    "url": "source/vue3.x/2.initGlobalAPI.html",
    "revision": "42dda50392e2732214788cc42b808059"
  },
  {
    "url": "source/vue3.x/3.initMixin.html",
    "revision": "7a3d14e2bbeabb62ffdd91f1170e2a6c"
  },
  {
    "url": "source/vue3.x/4.stateMixin.html",
    "revision": "6e58383f970031d933be27af8469cb6f"
  },
  {
    "url": "source/vue3.x/5.eventsMixin.html",
    "revision": "c55fd3a04fb5d0e876e52442a296a1a0"
  },
  {
    "url": "source/vue3.x/6.lifecycleMixin.html",
    "revision": "b449e4da2e31aa32b17e2016e87eac47"
  },
  {
    "url": "source/vue3.x/7.renderMixin.html",
    "revision": "4ebe950dcffb4a7f4afa647ff9b12f26"
  },
  {
    "url": "source/vue3.x/8.mount.html",
    "revision": "89f637665d409f88aa7cb26666ba2dfe"
  },
  {
    "url": "source/vue3.x/9.ast.html",
    "revision": "f66201f410244f6b6adb47f1ea984cd4"
  },
  {
    "url": "source/vuex3.x/1.index.html",
    "revision": "a7d5dcb261e27ccb226bc767b541e91f"
  },
  {
    "url": "source/vuex3.x/2.use.html",
    "revision": "f16be74675ccef5c329f9628e496b088"
  },
  {
    "url": "source/vuex3.x/3.origin.html",
    "revision": "49f239f8e98e051edae6ef67f1e4772a"
  },
  {
    "url": "source/vuex4.x/1.index.html",
    "revision": "558c41c604e557815fd8e57616740b70"
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
