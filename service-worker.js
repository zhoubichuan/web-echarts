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
    "revision": "f6cf1ea40fbaabebb50eafd846abc416"
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
    "url": "assets/js/10.79f105db.js",
    "revision": "5a9d5723557389327ed2e27781590fef"
  },
  {
    "url": "assets/js/100.a0de0018.js",
    "revision": "92aaceac8ea50d9f0a11044c3b2f74cf"
  },
  {
    "url": "assets/js/101.e8aeecf4.js",
    "revision": "26c7277a62a3075cedeb83426e59499b"
  },
  {
    "url": "assets/js/102.34332258.js",
    "revision": "b861d6de21faff5146c4d09d165d3a44"
  },
  {
    "url": "assets/js/103.826d67e4.js",
    "revision": "e0b87b0429c41a4c93746ee80ea7c37d"
  },
  {
    "url": "assets/js/104.4434640a.js",
    "revision": "9fea3288b157bcc59c56acb7261a4d61"
  },
  {
    "url": "assets/js/105.cadff269.js",
    "revision": "a82001e90671fd80a589e3a436e3ca83"
  },
  {
    "url": "assets/js/106.d82ed1a7.js",
    "revision": "ac675202216e653db1dd3a0eadcb7cde"
  },
  {
    "url": "assets/js/107.3a44023d.js",
    "revision": "fb460d9ff8c0d2faf0ea971bb08fcb65"
  },
  {
    "url": "assets/js/108.d63f4813.js",
    "revision": "80564717cd7f8749054d66066a85d9be"
  },
  {
    "url": "assets/js/109.63155f72.js",
    "revision": "554a8ee4597434e209ad13f07f72caf5"
  },
  {
    "url": "assets/js/11.709b7e6e.js",
    "revision": "9ab4993dfb4a5e5768351e68a289049b"
  },
  {
    "url": "assets/js/110.8d953307.js",
    "revision": "37be56e565b2770ac645968c9845aa6e"
  },
  {
    "url": "assets/js/111.5242d531.js",
    "revision": "f242a95908335ee572ab215ef08892a4"
  },
  {
    "url": "assets/js/112.110dd483.js",
    "revision": "ab997f074c75c7cff50f78b714b64995"
  },
  {
    "url": "assets/js/113.ce8ed9e7.js",
    "revision": "17ba380bf1ad48c63b9e2c310c119826"
  },
  {
    "url": "assets/js/114.d78010e0.js",
    "revision": "9c57dec514770f0938aca6a5d11a822b"
  },
  {
    "url": "assets/js/115.3acf6e11.js",
    "revision": "6d681373450497e4eb4666de2080c80a"
  },
  {
    "url": "assets/js/116.230d1e66.js",
    "revision": "13c8d5fc49a7011c3f9192656a2c0311"
  },
  {
    "url": "assets/js/117.4147cbbf.js",
    "revision": "f1b7a03e7135dc71318d428ff0e02bfd"
  },
  {
    "url": "assets/js/118.74f03e27.js",
    "revision": "9af03e8b5206ce175e524af0550f235a"
  },
  {
    "url": "assets/js/119.8cdca7fb.js",
    "revision": "8870411eaf2d7a90e6831e334d27711c"
  },
  {
    "url": "assets/js/12.b6a7e9df.js",
    "revision": "1371d18797cab4b2b624689072b2a1ae"
  },
  {
    "url": "assets/js/120.9eefa4f5.js",
    "revision": "cf536f9cb54c72218881f742815c3da7"
  },
  {
    "url": "assets/js/121.fdd31d79.js",
    "revision": "407b5078ed55d206d0b0fa813b8bfe26"
  },
  {
    "url": "assets/js/122.1408d976.js",
    "revision": "7a5f41a3d770d760eb79d7c8625322a7"
  },
  {
    "url": "assets/js/123.e3e12760.js",
    "revision": "182ff5679b66873c23b3b6a1db7f9912"
  },
  {
    "url": "assets/js/124.31c6f43b.js",
    "revision": "6d435fc3fd28bd83303ca09497960b10"
  },
  {
    "url": "assets/js/125.9158b2b9.js",
    "revision": "d2d2fe475f03e56d292f7c9575bb7189"
  },
  {
    "url": "assets/js/126.f9c2d295.js",
    "revision": "609ef63b90d0bc1605a5ee88c44272b1"
  },
  {
    "url": "assets/js/127.871b479a.js",
    "revision": "a4a1eec51d333b1c82f81469d8d1d310"
  },
  {
    "url": "assets/js/128.2a470ece.js",
    "revision": "e8817b595c5566399a94ae81cb00c1d7"
  },
  {
    "url": "assets/js/129.89ff2ef5.js",
    "revision": "dca817baa70e98e3b51347a0e996b0b8"
  },
  {
    "url": "assets/js/13.cd10538f.js",
    "revision": "0bc70f6ded69aa60523d47234ab439cc"
  },
  {
    "url": "assets/js/130.78ec8f35.js",
    "revision": "c275716a4b8124ac28a94a61f1937764"
  },
  {
    "url": "assets/js/131.a3b26d4e.js",
    "revision": "5c807868e41d38d6999a986e389290f8"
  },
  {
    "url": "assets/js/132.f8b6f63b.js",
    "revision": "15b055b09785796f955255e87fcc8a13"
  },
  {
    "url": "assets/js/133.d14e51f8.js",
    "revision": "529428f444bad11ad97117765fc2585e"
  },
  {
    "url": "assets/js/134.6848f675.js",
    "revision": "ef886de115caa00b3de205c27f370588"
  },
  {
    "url": "assets/js/135.b945a424.js",
    "revision": "d61264a796a9dd91a1a56f290c45bc09"
  },
  {
    "url": "assets/js/136.c2e9aa46.js",
    "revision": "e6780f06d5246812bfaffd5af5120b80"
  },
  {
    "url": "assets/js/137.d0660f44.js",
    "revision": "0bba16c09f61afc23562ef4622080187"
  },
  {
    "url": "assets/js/138.c78ea143.js",
    "revision": "ec2ee530c94fcbd4a43e476a165879d9"
  },
  {
    "url": "assets/js/139.3f3a83db.js",
    "revision": "1fac6ddc983d09d6c6c215d8c2f956e6"
  },
  {
    "url": "assets/js/14.20605773.js",
    "revision": "7955f3c0334e75679fb36a8c018539f7"
  },
  {
    "url": "assets/js/140.eec5f565.js",
    "revision": "fac881449363365cb5aad8b2e99bed37"
  },
  {
    "url": "assets/js/141.1cd4504a.js",
    "revision": "03c94cbc4ad97133ec33a5fbd7187a41"
  },
  {
    "url": "assets/js/142.068fddd1.js",
    "revision": "17cb932014e36854a107e35fd802370a"
  },
  {
    "url": "assets/js/143.d1a5d198.js",
    "revision": "94d83846b6d0fa3066ed76f65c0e4889"
  },
  {
    "url": "assets/js/144.c458380b.js",
    "revision": "d8860657716567fd7b3e0a86755e7498"
  },
  {
    "url": "assets/js/145.276d815a.js",
    "revision": "9b1aaf53113998c73c07a57965591278"
  },
  {
    "url": "assets/js/146.5d282407.js",
    "revision": "3f6f5fd6fe20b1948112bbde218723a3"
  },
  {
    "url": "assets/js/147.f2df2ba7.js",
    "revision": "a980b2c592ac7b9f77f716e73fe3a0f7"
  },
  {
    "url": "assets/js/148.9cdc4fdd.js",
    "revision": "9cc188514b581cd15de3bcd02c142bea"
  },
  {
    "url": "assets/js/149.d3af6d8f.js",
    "revision": "d8ba596fb047bef23d4e1b0e63627f84"
  },
  {
    "url": "assets/js/15.8d0ab293.js",
    "revision": "e6b9e85090c9b1d966bcfa0822588781"
  },
  {
    "url": "assets/js/150.d37c0b80.js",
    "revision": "f572e3a83a0aa0763414a63c74ac6e8d"
  },
  {
    "url": "assets/js/151.3453956e.js",
    "revision": "2b4b688facd35818127f512b2f0bcc5d"
  },
  {
    "url": "assets/js/152.13c0fa19.js",
    "revision": "08e59636ac4ac2ad0d4699cc16ee6adf"
  },
  {
    "url": "assets/js/153.6e853d0f.js",
    "revision": "e242084f2e17fdfeb8a45d85de8688b0"
  },
  {
    "url": "assets/js/154.23d0170c.js",
    "revision": "89b989563db81a1e0d138db132790102"
  },
  {
    "url": "assets/js/155.f355a35f.js",
    "revision": "84ed640eb45f015cb02b86f8418482e1"
  },
  {
    "url": "assets/js/16.414cd940.js",
    "revision": "068b5a01bfa3ef40816966355cd15cbd"
  },
  {
    "url": "assets/js/17.9a964432.js",
    "revision": "ee786ed6248bc81a9a44fd55c1ee6689"
  },
  {
    "url": "assets/js/18.3beb1391.js",
    "revision": "199b8a6303358621c6d064713a3d908e"
  },
  {
    "url": "assets/js/19.ba3db214.js",
    "revision": "ecbb535b2fe8fc89d4211bf6f55e7214"
  },
  {
    "url": "assets/js/2.af098064.js",
    "revision": "29900d8f7f18be8162d1f3072e228ba8"
  },
  {
    "url": "assets/js/20.c8f658b1.js",
    "revision": "dcbaee71594afc117fd8cd5ba8bd08e7"
  },
  {
    "url": "assets/js/21.fa70b74a.js",
    "revision": "4a3dc09e2a8d59bca7e8f6134385745f"
  },
  {
    "url": "assets/js/22.912fc0b9.js",
    "revision": "217b3c4c5a872d9e809f1134312971e9"
  },
  {
    "url": "assets/js/23.c7859cf4.js",
    "revision": "781cfaad18d501d6df0db3a09941d1ad"
  },
  {
    "url": "assets/js/24.313141c2.js",
    "revision": "b115d0c8f1b01b71d89df74a0ff29c67"
  },
  {
    "url": "assets/js/25.327fbe18.js",
    "revision": "35ed5f1d403f9c398e1f839eee87b18c"
  },
  {
    "url": "assets/js/26.5c1dbc0f.js",
    "revision": "32bd26804502602dcface38a45a67275"
  },
  {
    "url": "assets/js/27.94b3191a.js",
    "revision": "b2e421340a4acde36dd5770d89792121"
  },
  {
    "url": "assets/js/28.5d22d2b0.js",
    "revision": "7636b099711b3e9d55d2c6c08212d69c"
  },
  {
    "url": "assets/js/29.8d6925be.js",
    "revision": "c72a22c31624bab610cbbf773a7d7136"
  },
  {
    "url": "assets/js/3.117c301c.js",
    "revision": "38a030dece650d43f8abf6ac7cda202c"
  },
  {
    "url": "assets/js/30.e76ed5a9.js",
    "revision": "176e033151f81583b9972ad50dac04e7"
  },
  {
    "url": "assets/js/31.d590f8ba.js",
    "revision": "7abf02eca5f847b43099b2db6375221c"
  },
  {
    "url": "assets/js/32.96f3b94a.js",
    "revision": "c5d811730953721ac5deefea18e82624"
  },
  {
    "url": "assets/js/33.823f7159.js",
    "revision": "56ae495a3a9df5f2ecc0cc04252b0c02"
  },
  {
    "url": "assets/js/34.fb579a39.js",
    "revision": "e00b68598128fb6e80b4acf5a1fc13a1"
  },
  {
    "url": "assets/js/35.ae4270bf.js",
    "revision": "39897e11cc91accb9aa6c101de547739"
  },
  {
    "url": "assets/js/36.a2f51c7e.js",
    "revision": "6ef3b9e8ce927d2ee6e9295e59ce51f0"
  },
  {
    "url": "assets/js/37.27aa32af.js",
    "revision": "fd475292662a924205fbe61a373a8e15"
  },
  {
    "url": "assets/js/38.e316e859.js",
    "revision": "6edd6b048bdcea961e7f7d84a9c5a3a8"
  },
  {
    "url": "assets/js/39.27554c30.js",
    "revision": "db324dba8951a726ad8c0b109ee25de3"
  },
  {
    "url": "assets/js/4.c6f630bc.js",
    "revision": "d3c8fb417db954846479162df601944e"
  },
  {
    "url": "assets/js/40.9f22788f.js",
    "revision": "7c474f855d9e90cff90c9b6becf2af70"
  },
  {
    "url": "assets/js/41.393fe13a.js",
    "revision": "dab94fc7ca9a27dfb3571bbd98cefe5b"
  },
  {
    "url": "assets/js/42.ed5a64c5.js",
    "revision": "c9e2acaf29fcf94431bc69a96b93d7aa"
  },
  {
    "url": "assets/js/43.eab92105.js",
    "revision": "c02bedbe52e6fb69381da95d71c4404e"
  },
  {
    "url": "assets/js/44.a57c475e.js",
    "revision": "c26fe9d5c0ccb0ad90ef3db8c765e725"
  },
  {
    "url": "assets/js/45.7cee3f72.js",
    "revision": "88a34a229fee0d4f48fd8d2c115fbfba"
  },
  {
    "url": "assets/js/46.1334654f.js",
    "revision": "5af495f142e12788dbf722ff74c65fa0"
  },
  {
    "url": "assets/js/47.8641969a.js",
    "revision": "64329dbdc31d79070e4255f0756f6228"
  },
  {
    "url": "assets/js/48.85d2809f.js",
    "revision": "bf4cf1c325e725e264cd2e1335f958fd"
  },
  {
    "url": "assets/js/49.33695d50.js",
    "revision": "bc31106a4d39ecbfdb87273d1649681a"
  },
  {
    "url": "assets/js/5.00e3e307.js",
    "revision": "699c5704c5ccdc29ff02623fa9eb2eb3"
  },
  {
    "url": "assets/js/50.eda70cd5.js",
    "revision": "8e600a2d90843c6322b31c72b823da9b"
  },
  {
    "url": "assets/js/51.b7be0352.js",
    "revision": "9974e893751a544c1e26f27cf40e92e2"
  },
  {
    "url": "assets/js/52.ee3a8cae.js",
    "revision": "7c2a37018df3c2d3f014a5b2902f892b"
  },
  {
    "url": "assets/js/53.d2290ae3.js",
    "revision": "aaffa7815c074ca38f5a7ed87404e9bc"
  },
  {
    "url": "assets/js/54.7ff1b5a1.js",
    "revision": "5230801fafb8314326a4d80de7650cb8"
  },
  {
    "url": "assets/js/55.25882114.js",
    "revision": "1b535e6f5a892bf3d4d1f6d6c4097cf4"
  },
  {
    "url": "assets/js/56.505acc06.js",
    "revision": "0cca1aec86327b3e2f57985a2b22f902"
  },
  {
    "url": "assets/js/57.6784ca2d.js",
    "revision": "44824835df6fee48683f81d4c602af85"
  },
  {
    "url": "assets/js/58.fbfe4b33.js",
    "revision": "6413aa9746c81e0804fddec86fcd3f49"
  },
  {
    "url": "assets/js/59.bbd60e77.js",
    "revision": "9f44756afccabdc57229eadf92ec7d00"
  },
  {
    "url": "assets/js/6.973a3225.js",
    "revision": "a49e36dc8246d4f46ad0069ac6f3a96a"
  },
  {
    "url": "assets/js/60.0b772ba3.js",
    "revision": "c212af13e0dbe0c5902af7e242de2118"
  },
  {
    "url": "assets/js/61.a5e358d5.js",
    "revision": "5d4d570a40d543a915f1fc8f5d97e594"
  },
  {
    "url": "assets/js/62.7e1329ae.js",
    "revision": "d494c9c38f9936452b649f7e82cf7ec8"
  },
  {
    "url": "assets/js/63.b3bc5aa4.js",
    "revision": "3fad5b6a3de87d9fc742161690f6a897"
  },
  {
    "url": "assets/js/64.a8013825.js",
    "revision": "9d168a80394079333f88e5094467eaae"
  },
  {
    "url": "assets/js/65.4d05a877.js",
    "revision": "572f0d873de53c92cc09cd2a110e974c"
  },
  {
    "url": "assets/js/66.35c69e09.js",
    "revision": "7423cd093188368ccf1b20265b130d74"
  },
  {
    "url": "assets/js/67.fb2a1721.js",
    "revision": "82cd71c535ec386c59ae1b6b624113fd"
  },
  {
    "url": "assets/js/68.7a1835ac.js",
    "revision": "3772df4deeb10761d301647a40e91de8"
  },
  {
    "url": "assets/js/69.372fa0af.js",
    "revision": "7148863093c338fbe7f4445608b9db3a"
  },
  {
    "url": "assets/js/7.4dd118ce.js",
    "revision": "75522873107dc18063e18e6f31ffc163"
  },
  {
    "url": "assets/js/70.379b86bf.js",
    "revision": "2be8427b617fd5ba27c89535ced8c542"
  },
  {
    "url": "assets/js/71.658714de.js",
    "revision": "5d59a02601ba807ad6828721e871a001"
  },
  {
    "url": "assets/js/72.0f0a0de1.js",
    "revision": "55a6ef1b18c5947d529e0d00be3c38e3"
  },
  {
    "url": "assets/js/73.2f09022f.js",
    "revision": "67c7cd2ccbec2467091f9fb432dfc745"
  },
  {
    "url": "assets/js/74.2f4fc251.js",
    "revision": "4d355485aceb43cf37cb4bb94c2d85eb"
  },
  {
    "url": "assets/js/75.19297f4b.js",
    "revision": "513f21406c525d1b866efe47e4c38639"
  },
  {
    "url": "assets/js/76.5a9bc140.js",
    "revision": "29fbce4cfbb7b4b75a61426426c8de9a"
  },
  {
    "url": "assets/js/77.720f3f1e.js",
    "revision": "c16e44ff211dc11ca1c19bdc91d1361a"
  },
  {
    "url": "assets/js/78.64a8adf1.js",
    "revision": "b3d2a342cc66cdb9f8e608f91af953ac"
  },
  {
    "url": "assets/js/79.8a52055d.js",
    "revision": "0997a9d5e5697c67c343e1cbc22cd5f2"
  },
  {
    "url": "assets/js/8.f82583cf.js",
    "revision": "e0e0f2619cad455b700a83aae917517d"
  },
  {
    "url": "assets/js/80.1206ddfa.js",
    "revision": "9e72f6031b395c941727fb12d2196482"
  },
  {
    "url": "assets/js/81.2b61d668.js",
    "revision": "a915971c36aef3d336eda02677248525"
  },
  {
    "url": "assets/js/82.ccfa47b8.js",
    "revision": "9317a8ee84dac78f8827ff0280998c6a"
  },
  {
    "url": "assets/js/83.45996d7c.js",
    "revision": "a542ee2540577b8eb69b9b68ec064770"
  },
  {
    "url": "assets/js/84.8da0c76c.js",
    "revision": "85b03912c808496887574261c6567e12"
  },
  {
    "url": "assets/js/85.eec02ffd.js",
    "revision": "2818e3eff90e70cab5f9bce045e6bad8"
  },
  {
    "url": "assets/js/86.6b292cb8.js",
    "revision": "fee42dbf5d24211abaad410770a6d20b"
  },
  {
    "url": "assets/js/87.4bcddebe.js",
    "revision": "77520fdbb62c33f3ac3d09fd2787d6ea"
  },
  {
    "url": "assets/js/88.158013b8.js",
    "revision": "03404ba5ada2590255a830d68ed49a94"
  },
  {
    "url": "assets/js/89.9c3c6d0c.js",
    "revision": "48da1ec3e2b474c6288e016af282d725"
  },
  {
    "url": "assets/js/9.1cb49a58.js",
    "revision": "0df81316810e4d84b19ff050d370602f"
  },
  {
    "url": "assets/js/90.f7be1880.js",
    "revision": "8e17e95175a5be5dfa448b90d4cdb04a"
  },
  {
    "url": "assets/js/91.03dbbd34.js",
    "revision": "d9c9170ce72e4547dd7e1e0b53ed9bde"
  },
  {
    "url": "assets/js/92.0cac692f.js",
    "revision": "0d1ca1db97741d45c2cf49d42429185d"
  },
  {
    "url": "assets/js/93.2379c08d.js",
    "revision": "ec754d4032d6ac84433e04487144232a"
  },
  {
    "url": "assets/js/94.b182182e.js",
    "revision": "65ff9c175bbf8ad15d0ffc24eb5211cf"
  },
  {
    "url": "assets/js/95.92bfcaef.js",
    "revision": "7b1b72f1d01c2bd54c7a16f4eb3bb7a6"
  },
  {
    "url": "assets/js/96.5d19fe8d.js",
    "revision": "85536177c69209ba214f3843ea5c015f"
  },
  {
    "url": "assets/js/97.48021b7f.js",
    "revision": "316fbd2f707180c39274bfc122dc1cea"
  },
  {
    "url": "assets/js/98.691a9e42.js",
    "revision": "23fedd6ba1dc3023c3a5a2bfc2c815c9"
  },
  {
    "url": "assets/js/99.668ccc48.js",
    "revision": "d286518670357ae7a8ab70d8a2b73533"
  },
  {
    "url": "base/api/1.echarts.html",
    "revision": "ae8a35fb9f047364cae9adbc1c2b981f"
  },
  {
    "url": "base/api/1.index.html",
    "revision": "8f5b46934de84bfc4e4710c5ed5f06e2"
  },
  {
    "url": "base/api/2.echartsInstance.html",
    "revision": "766eb04eb1154d8e59ee5b50d2ba9f22"
  },
  {
    "url": "base/api/3.action.html",
    "revision": "d1aaacd75bb60e17f577aa04f23c0998"
  },
  {
    "url": "base/api/4.events.html",
    "revision": "0fa35ddf1a03917d3cb71844a5fd43a0"
  },
  {
    "url": "base/components/1.index.html",
    "revision": "c75970d38ccef0d17949624abf0f0162"
  },
  {
    "url": "base/components/1.legend.html",
    "revision": "0cbe222c8ae6bd6f7d2808cd6494f75c"
  },
  {
    "url": "base/components/2.grid.html",
    "revision": "8ad272964299d1161850a59493d7051a"
  },
  {
    "url": "base/components/2.polar.html",
    "revision": "56eeb2904485f32e1905f53be3f53815"
  },
  {
    "url": "base/components/2.radiusAxis.html",
    "revision": "1c074e389a6a4db769ab4c23e18d5569"
  },
  {
    "url": "base/components/2.xAxis.html",
    "revision": "27ae9b66aba88f6def5a4a379723641a"
  },
  {
    "url": "base/components/2.yAxis.html",
    "revision": "cd04bb1025b3ed0b85edbf299110ef11"
  },
  {
    "url": "base/components/3.angleAxis.html",
    "revision": "f618cf0d8f4c132c8e1984dc2ee5c30f"
  },
  {
    "url": "base/components/4.radar.html",
    "revision": "5981db87ada6be2e18fa62881d0489b1"
  },
  {
    "url": "base/components/5.dataZoom.html",
    "revision": "0cd9116153e0661ead62922b01c7d1a1"
  },
  {
    "url": "base/components/6.visualMap.html",
    "revision": "fca1ef471c0f645c7eb0e7ae28e1c723"
  },
  {
    "url": "base/components/7.tooltip.html",
    "revision": "56a1290513ba547a353457f09e606666"
  },
  {
    "url": "base/components/8.geo.html",
    "revision": "5266717c90a0d0683756c4749ef62d06"
  },
  {
    "url": "base/gl/1.index.html",
    "revision": "183b2fda93efc295452cc21bb1996795"
  },
  {
    "url": "base/gl/1.scatter3D.html",
    "revision": "dac518bcba9cd060a4b5b6d9f1661450"
  },
  {
    "url": "base/gl/10.flowGL.html",
    "revision": "fa23ea61f28a76084021550ecaa87f10"
  },
  {
    "url": "base/gl/2.bar3D.html",
    "revision": "99a4fe809de1d387e53f5fdbe0504450"
  },
  {
    "url": "base/gl/3.line3D.html",
    "revision": "0846dfdea9251f3ca932720daa31bf0e"
  },
  {
    "url": "base/gl/4.lines3D.html",
    "revision": "7a391fcf0a74f27163b69c15eb2d8fe3"
  },
  {
    "url": "base/gl/5.map3D.html",
    "revision": "cfafda0065b77effc39459eb048845df"
  },
  {
    "url": "base/gl/6.surface.html",
    "revision": "255dd5c0e22714b517afbee714598121"
  },
  {
    "url": "base/gl/7.polygons3D.html",
    "revision": "ec8f74bfb952b4ed32b7a8109059a917"
  },
  {
    "url": "base/gl/8.scatterGL.html",
    "revision": "99bd7ae98f5a4adb1cabf72dda2fd88f"
  },
  {
    "url": "base/gl/9.graphGL.html",
    "revision": "cedef0477e8e9a76c0b084f6709021d5"
  },
  {
    "url": "base/series/1.index.html",
    "revision": "9da3af369ec64abd001cc093344167fc"
  },
  {
    "url": "base/series/1.line.html",
    "revision": "42de27119fb59b20a649553f220a4289"
  },
  {
    "url": "base/series/10.boxplot.html",
    "revision": "99a657a4550cb1a46c87a48048bb7f30"
  },
  {
    "url": "base/series/11.candlestick.html",
    "revision": "43129cf82bf25d251f36ff08dee1ed17"
  },
  {
    "url": "base/series/12.heatmap.html",
    "revision": "8bdd3deb6804ba72116dcfdf995bf31f"
  },
  {
    "url": "base/series/13.map.html",
    "revision": "9daf00b0d22d635dbf06c7cded59b8c2"
  },
  {
    "url": "base/series/14.parallel.html",
    "revision": "c7c35831e49ce42fd67bae116f97e037"
  },
  {
    "url": "base/series/15.lines.html",
    "revision": "30f2be3f2b96f45e414cd485c8db62d9"
  },
  {
    "url": "base/series/16.graph.html",
    "revision": "30b41b1a498bcbaceec3fb38646547ca"
  },
  {
    "url": "base/series/17.sankey.html",
    "revision": "0cc7e97dae21543669939961b411af4c"
  },
  {
    "url": "base/series/18.funnel.html",
    "revision": "964c204f7bc6e90d366245e827a1a7bb"
  },
  {
    "url": "base/series/19.gauge.html",
    "revision": "ed37e8cdf49e2f4ff9c1a8bf01f26b64"
  },
  {
    "url": "base/series/2.bar.html",
    "revision": "937e716d7484702630fe798902b588ac"
  },
  {
    "url": "base/series/20.pictorialBar.html",
    "revision": "aa461c753af57cafb1a9efc2865178a6"
  },
  {
    "url": "base/series/21.themeRiver.html",
    "revision": "a3e2db44c0d650346b7dd5037b40df48"
  },
  {
    "url": "base/series/22.custom.html",
    "revision": "602db835c4bfebfe42d07b29b8cef17a"
  },
  {
    "url": "base/series/3.pie.html",
    "revision": "6107ac6980fcc170cb501d6de87e9c89"
  },
  {
    "url": "base/series/4.scatter.html",
    "revision": "c0771d77c89a5e62b2bb2219d73b495c"
  },
  {
    "url": "base/series/5.effectScatter.html",
    "revision": "98137f0188aff566347819bfe20772ec"
  },
  {
    "url": "base/series/6.radar.html",
    "revision": "9b064a3b95f27dfa804ab015bb1e66fa"
  },
  {
    "url": "base/series/7.tree.html",
    "revision": "030f9608fab1865147f62d6c832ad80b"
  },
  {
    "url": "base/series/8.treemap.html",
    "revision": "27a37696f2aff5e3cdb450cd1ecafd64"
  },
  {
    "url": "base/series/9.sunburst.html",
    "revision": "5d91299bbe463341e25fb12f7102bd93"
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
    "revision": "1628dd3c2b6cbd2c81b91144b9f1ae18"
  },
  {
    "url": "mock/http.js",
    "revision": "a219140640bec4dfbe8f4fe88d351ed8"
  },
  {
    "url": "senior/1.micro/1.index.html",
    "revision": "4c6b61f108e47f364d96079d1952bedc"
  },
  {
    "url": "senior/1.micro/1.singlespa.html",
    "revision": "5072f902928b3c77b36fe7f988cc3753"
  },
  {
    "url": "senior/1.micro/1.singlespa2.html",
    "revision": "9cba4451270af9c073478bacc715700b"
  },
  {
    "url": "senior/1.micro/2.qiankun.html",
    "revision": "6727b10e8369ee01e30caa515eb6dfc0"
  },
  {
    "url": "senior/1.micro/2.qiankun2.html",
    "revision": "7f8e09a87b3d2829cb90540140c94630"
  },
  {
    "url": "senior/1.micro/3.share.html",
    "revision": "97df511f168b478c8db2174d24f3491c"
  },
  {
    "url": "senior/1.micro/4.dev.html",
    "revision": "39daa2740427d3c86ec028bc082d67e7"
  },
  {
    "url": "senior/2.typescript/1.env.html",
    "revision": "bdf20be5f70b40f5be3fd2b4532c022b"
  },
  {
    "url": "senior/2.typescript/1.index.html",
    "revision": "5171b4ad9bf19aac32a228f76dc2c6cf"
  },
  {
    "url": "senior/2.typescript/10.infer.html",
    "revision": "1c03295b8adfc0aed36e13bd367e4c6f"
  },
  {
    "url": "senior/2.typescript/11.overlapping.html",
    "revision": "2563bc853e4f4232841d22154d5c095c"
  },
  {
    "url": "senior/2.typescript/12.condition.html",
    "revision": "37cd353a2ed44ac2b5bde502aa87f2a2"
  },
  {
    "url": "senior/2.typescript/13.builtin.html",
    "revision": "61466e326e95e5fdd438db62344fcefc"
  },
  {
    "url": "senior/2.typescript/14.package.html",
    "revision": "cfd5c603d84c31088470f7a487b526c1"
  },
  {
    "url": "senior/2.typescript/15.custom.html",
    "revision": "473cdc1f3d3f593b60e8c3c3207d1470"
  },
  {
    "url": "senior/2.typescript/16.unknown.html",
    "revision": "4d56a50baacdbfc92bbd69a1ce32ac31"
  },
  {
    "url": "senior/2.typescript/17.module.html",
    "revision": "37e8527c9678ca5740ffe01e70b4871b"
  },
  {
    "url": "senior/2.typescript/18.statement.html",
    "revision": "1ad3beb07316481985351e322bfbe7cf"
  },
  {
    "url": "senior/2.typescript/19.extend.html",
    "revision": "6e808f0e3688e564998ac66f1c7bd881"
  },
  {
    "url": "senior/2.typescript/2.base.html",
    "revision": "d99897864a86d0ccc78dfbd2217491cd"
  },
  {
    "url": "senior/2.typescript/3.deduction.html",
    "revision": "0bab1acccf38d55da55e5b6df876afaf"
  },
  {
    "url": "senior/2.typescript/4.type.html",
    "revision": "1281f2630cb1dc2655b96db4db563b5e"
  },
  {
    "url": "senior/2.typescript/5.class.html",
    "revision": "a6af4b25b5c346bc50b8fe41870c7b1c"
  },
  {
    "url": "senior/2.typescript/6.interface.html",
    "revision": "119d87dfd6caa7dd89c1ffd5e25928f9"
  },
  {
    "url": "senior/2.typescript/7.generic.html",
    "revision": "50f40bb4ad145c4655ba65ca6f7307c4"
  },
  {
    "url": "senior/2.typescript/8.compatible.html",
    "revision": "1c46e6c3e850d971cb26e676569b524a"
  },
  {
    "url": "senior/2.typescript/9.protect.html",
    "revision": "49ea02487fbf7f83950e175c6087199c"
  },
  {
    "url": "senior/3.deploy/1.index.html",
    "revision": "ad65ee05443bee9b18db88798a186d7e"
  },
  {
    "url": "senior/3.deploy/1.local.html",
    "revision": "f84c22fe7ca4a621a2e2263ed5c27fc7"
  },
  {
    "url": "senior/3.deploy/2.gitlab.html",
    "revision": "08c5bf30dbe961efe566dc2ac9760c2e"
  },
  {
    "url": "senior/3.deploy/3.genkins.html",
    "revision": "210b6cdcc26d6a2a1dfe87e8b3ab14fc"
  },
  {
    "url": "senior/3.deploy/4.centos.html",
    "revision": "fe6ba866f812ff96c0d6eb5e251b95d1"
  },
  {
    "url": "senior/3.deploy/5.nginx.html",
    "revision": "5fe00dfb1275fd15ee0dc08620641415"
  },
  {
    "url": "senior/4.component/1.button.html",
    "revision": "612a1918a79c0899317963b51d422a02"
  },
  {
    "url": "senior/4.component/1.env.html",
    "revision": "e79106df852536dd918b861b0b3a64be"
  },
  {
    "url": "senior/4.component/1.index.html",
    "revision": "974991f11a2a8def817bb1fc4d1d03fb"
  },
  {
    "url": "senior/4.component/1.recursion.html",
    "revision": "785968693d20e95be69b5cd691f0ef9f"
  },
  {
    "url": "senior/4.component/10.tree.html",
    "revision": "bbbe3bb6ba6bc2a47e393f7941a4eca5"
  },
  {
    "url": "senior/4.component/12.table.html",
    "revision": "32214647e17ff83833ef9d6251332fe8"
  },
  {
    "url": "senior/4.component/13.publish.html",
    "revision": "f4eeef48d3c23d7e5a4bd2077ae36845"
  },
  {
    "url": "senior/4.component/2.dropdown.html",
    "revision": "ac89009866a83869438ce22dc10afa6f"
  },
  {
    "url": "senior/4.component/3.dialog.html",
    "revision": "173baadb3d65ca10497f068bfc98d827"
  },
  {
    "url": "senior/4.component/3.form.html",
    "revision": "b2d33be0c5da1d1959031e7720428c80"
  },
  {
    "url": "senior/4.component/4.input.html",
    "revision": "b05e8319de41c3904334f127a71f3f81"
  },
  {
    "url": "senior/4.component/4.render.html",
    "revision": "0a060a92662021c37a8190ffac83b5f5"
  },
  {
    "url": "senior/4.component/5.checkBox.html",
    "revision": "44c85da716e17ff60b98e65d267a9b42"
  },
  {
    "url": "senior/4.component/6.cascader.html",
    "revision": "bfd27b6fdec2eb497ce31b7676f817d8"
  },
  {
    "url": "senior/4.component/7.date.html",
    "revision": "b0d3709db10c57cb2b7657335e718c9f"
  },
  {
    "url": "senior/4.component/8.dispaly.html",
    "revision": "8a5f48051783c61bfaf3aae826102f42"
  },
  {
    "url": "senior/4.component/9.alert.html",
    "revision": "7c1627f50a4c645e0dc8a0544ddb67a4"
  },
  {
    "url": "senior/4.component/9.dynamics.html",
    "revision": "38a634111d10d9f697ce4d63087c75b9"
  },
  {
    "url": "source/vue-cli2.x/1.index.html",
    "revision": "b588713f93d99fab613667353b5bb1f8"
  },
  {
    "url": "source/vue-cli3.x/1.index.html",
    "revision": "b583fd6785435a1e31393617b54813d6"
  },
  {
    "url": "source/vue-router3.x/1.index.html",
    "revision": "157a1c28054ea153b7fb8088e25b8674"
  },
  {
    "url": "source/vue-router3.x/2.origin.html",
    "revision": "ed68d1dbb99237227b2b6cc8e02c38db"
  },
  {
    "url": "source/vue-router4.x/1.index.html",
    "revision": "bf5c6caecbe3b8174e6627f7fe9de4cb"
  },
  {
    "url": "source/vue2.x/1.index.html",
    "revision": "8e28fb850397dcdc5acbc2ae7a06d36e"
  },
  {
    "url": "source/vue2.x/10.optimize.html",
    "revision": "6abeed2c7b36985585763fb6e3fda5fa"
  },
  {
    "url": "source/vue2.x/11.gencode.html",
    "revision": "ca56334e112847363cf0b83db43bcf1a"
  },
  {
    "url": "source/vue2.x/12.mount.html",
    "revision": "1c028121766fe01d30247d94a7fbd271"
  },
  {
    "url": "source/vue2.x/13._render.html",
    "revision": "7ba94e53ebc5f6b4586a4c7e850c8816"
  },
  {
    "url": "source/vue2.x/14._update.html",
    "revision": "77f0b95421dad562d787a86f1ef13272"
  },
  {
    "url": "source/vue2.x/2.initGlobalAPI.html",
    "revision": "2c1f9da6f7866612d7be0bccc13ce720"
  },
  {
    "url": "source/vue2.x/3.initMixin.html",
    "revision": "f4c99c7870a9298d8e751aeb986145f5"
  },
  {
    "url": "source/vue2.x/4.stateMixin.html",
    "revision": "de948e40952d1ab9f709ebefafb6486d"
  },
  {
    "url": "source/vue2.x/5.eventsMixin.html",
    "revision": "d8699372bb67feab9707c0e1a0b0102d"
  },
  {
    "url": "source/vue2.x/6.lifecycleMixin.html",
    "revision": "db2e6910b9e7aff1710cae97cada4fc4"
  },
  {
    "url": "source/vue2.x/7.renderMixin.html",
    "revision": "93dacb536cc18fd8985b53b1bfadbd6f"
  },
  {
    "url": "source/vue2.x/8.mount.html",
    "revision": "d93f14e322512ffb47c847631cfefff8"
  },
  {
    "url": "source/vue2.x/9.ast.html",
    "revision": "edd4cdc37f93c36f5e887acfa5058938"
  },
  {
    "url": "source/vue3.x/1.index.html",
    "revision": "bcf5beaabdba3cbf7645e0b9c44b9fb0"
  },
  {
    "url": "source/vue3.x/10.optimize.html",
    "revision": "f692af4e639dffbe6d52babe5ee9f759"
  },
  {
    "url": "source/vue3.x/11.gencode.html",
    "revision": "1f7434a46d8a4491df0cc89adbadf201"
  },
  {
    "url": "source/vue3.x/12.mount.html",
    "revision": "846f77da83309cf99e948fef2233c266"
  },
  {
    "url": "source/vue3.x/13._render.html",
    "revision": "a22f47bd5267020b26651ada3319fee0"
  },
  {
    "url": "source/vue3.x/14._update.html",
    "revision": "87980fc462e177a6bd4b1517b2f0d2af"
  },
  {
    "url": "source/vue3.x/2.initGlobalAPI.html",
    "revision": "1b3fc3a20c4e2878441cf7cc3424b32b"
  },
  {
    "url": "source/vue3.x/3.initMixin.html",
    "revision": "8da4aadac9075bcb781f4afbe9960735"
  },
  {
    "url": "source/vue3.x/4.stateMixin.html",
    "revision": "42ec5d73be31a888b32df0884b2ee524"
  },
  {
    "url": "source/vue3.x/5.eventsMixin.html",
    "revision": "a86e086f4a2cfa1a8daee5162a7dc417"
  },
  {
    "url": "source/vue3.x/6.lifecycleMixin.html",
    "revision": "9bff64ba5fc177125cf58819f2d8e9f4"
  },
  {
    "url": "source/vue3.x/7.renderMixin.html",
    "revision": "1b445970ccc937455b59a4062f04c9a5"
  },
  {
    "url": "source/vue3.x/8.mount.html",
    "revision": "89b365319a4814aa035362b88a3e8684"
  },
  {
    "url": "source/vue3.x/9.ast.html",
    "revision": "c59b3670a8763efbc6d45118b3b94ff2"
  },
  {
    "url": "source/vuex3.x/1.index.html",
    "revision": "aa890f3113bef802ed635f6b3eac620c"
  },
  {
    "url": "source/vuex3.x/2.use.html",
    "revision": "8be87bf79ca36a33ec97d5b308a1fc10"
  },
  {
    "url": "source/vuex3.x/3.origin.html",
    "revision": "9f02169ca889994c47fd1b45c9cb1fc2"
  },
  {
    "url": "source/vuex4.x/1.index.html",
    "revision": "d454a375ac08f084029654a7acdc71cc"
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
