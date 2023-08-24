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
    "revision": "baa12c6644bfe64c95b3cf9301e203cd"
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
    "url": "assets/js/19.c6013d0a.js",
    "revision": "ed73844d7e8758af4adae5675a170359"
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
    "revision": "4f1232ccc8763fcdebbb1bb4242118bc"
  },
  {
    "url": "base/api/1.index.html",
    "revision": "2133e5877750a90e189933c38abe9c35"
  },
  {
    "url": "base/api/2.echartsInstance.html",
    "revision": "3783b6af1cba77835585fadacafde8e0"
  },
  {
    "url": "base/api/3.action.html",
    "revision": "af2a5881ea0fe6d79ef4a050bc1be880"
  },
  {
    "url": "base/api/4.events.html",
    "revision": "bf100145a39f3880ffe68528961aa48b"
  },
  {
    "url": "base/components/1.index.html",
    "revision": "d6322b25db2afd99c9ba7b28d7487d8d"
  },
  {
    "url": "base/components/1.legend.html",
    "revision": "741000211902c74f17517ed306e8f006"
  },
  {
    "url": "base/components/2.grid.html",
    "revision": "23bded2035a184395c17fa4e1d609d31"
  },
  {
    "url": "base/components/2.polar.html",
    "revision": "a686bb2344c0b67c992ec73255228c3b"
  },
  {
    "url": "base/components/2.radiusAxis.html",
    "revision": "a1068d6b020107e7a51ffa380cab2b2b"
  },
  {
    "url": "base/components/2.xAxis.html",
    "revision": "b10551f0b5c9ae5868e5520919840eed"
  },
  {
    "url": "base/components/2.yAxis.html",
    "revision": "862a9971531c6e7a689dc1198c583a91"
  },
  {
    "url": "base/components/3.angleAxis.html",
    "revision": "dc6b6af414e6fa07198ef5fef9668fc1"
  },
  {
    "url": "base/components/4.radar.html",
    "revision": "b003ecb91e6a8047221ab2f4542e8f1f"
  },
  {
    "url": "base/components/5.dataZoom.html",
    "revision": "43978d247267f78b26f69eb69bc0a032"
  },
  {
    "url": "base/components/6.visualMap.html",
    "revision": "910c9db30bbdab61fabad48471ff726b"
  },
  {
    "url": "base/components/7.tooltip.html",
    "revision": "273c499b3ea1129cda6a7961d19e83e1"
  },
  {
    "url": "base/components/8.geo.html",
    "revision": "6e575bf0b9932a027e0948d00354e477"
  },
  {
    "url": "base/gl/1.index.html",
    "revision": "a552d9e7342ab8f274247ea61517582d"
  },
  {
    "url": "base/gl/1.scatter3D.html",
    "revision": "aa01de65a16032eec454a1f73d9edfc1"
  },
  {
    "url": "base/gl/10.flowGL.html",
    "revision": "7d9ca7de123c82a049cc310df50ebbec"
  },
  {
    "url": "base/gl/2.bar3D.html",
    "revision": "077641c25e99770f7645f2f0d0f4c59c"
  },
  {
    "url": "base/gl/3.line3D.html",
    "revision": "b4c7d7c5deadc481b6f76c67542ff580"
  },
  {
    "url": "base/gl/4.lines3D.html",
    "revision": "2fa596504616810035fb5abef2790fe3"
  },
  {
    "url": "base/gl/5.map3D.html",
    "revision": "876d39e306fe56a7489c8acc4b1f9792"
  },
  {
    "url": "base/gl/6.surface.html",
    "revision": "fabe0234bba24e0c61cb89177fd08aca"
  },
  {
    "url": "base/gl/7.polygons3D.html",
    "revision": "60a2bf4a8d824f3ab407389e68f497e4"
  },
  {
    "url": "base/gl/8.scatterGL.html",
    "revision": "d8cff2107abeb04ffa25eefef7b8a1ee"
  },
  {
    "url": "base/gl/9.graphGL.html",
    "revision": "c75b58edcfca422a262e05a036688c1a"
  },
  {
    "url": "base/series/1.index.html",
    "revision": "feabd078b4ab866c2cb681341ee53fda"
  },
  {
    "url": "base/series/1.line.html",
    "revision": "670d5f08fc751dea327960e5f693011f"
  },
  {
    "url": "base/series/10.boxplot.html",
    "revision": "e67646dc9b2dfd082dc228c88f74fb2b"
  },
  {
    "url": "base/series/11.candlestick.html",
    "revision": "909afcc4ed9649819958017233dba069"
  },
  {
    "url": "base/series/12.heatmap.html",
    "revision": "6e7dd7cf31050ee9aa7e1c8062dddc8a"
  },
  {
    "url": "base/series/13.map.html",
    "revision": "e5e411a9be91e04d0a764606e915c253"
  },
  {
    "url": "base/series/14.parallel.html",
    "revision": "1b8b6cecad8fa1f3bab22c7e9162f8f5"
  },
  {
    "url": "base/series/15.lines.html",
    "revision": "9ac22aa42aab4feafcead49989015b92"
  },
  {
    "url": "base/series/16.graph.html",
    "revision": "f2c13ba6781035dcc468188a239b17e0"
  },
  {
    "url": "base/series/17.sankey.html",
    "revision": "51ace1a0eb0b26f51233df07487e9797"
  },
  {
    "url": "base/series/18.funnel.html",
    "revision": "ed450db2f13de3b31cfa0432e4a02370"
  },
  {
    "url": "base/series/19.gauge.html",
    "revision": "589a9b755ba943fe88297772020b2841"
  },
  {
    "url": "base/series/2.bar.html",
    "revision": "3f3d19ca097e09f0a96e6881f7e6b53b"
  },
  {
    "url": "base/series/20.pictorialBar.html",
    "revision": "d2ebbf9fed147c6cf5b8de473765d4c0"
  },
  {
    "url": "base/series/21.themeRiver.html",
    "revision": "37a2a8909c97f47c1ea913f2aa36e98e"
  },
  {
    "url": "base/series/22.custom.html",
    "revision": "6176858e8e53d7556663de74b801cb78"
  },
  {
    "url": "base/series/3.pie.html",
    "revision": "e9d46e7c5674d7accccf06fae0697f8e"
  },
  {
    "url": "base/series/4.scatter.html",
    "revision": "e9966611409000a223359c6343f03f13"
  },
  {
    "url": "base/series/5.effectScatter.html",
    "revision": "7b98f247ac8a8a988b6dce0ec0d155bb"
  },
  {
    "url": "base/series/6.radar.html",
    "revision": "d5b3e4f4dc838c0741cd46c859ec9d0c"
  },
  {
    "url": "base/series/7.tree.html",
    "revision": "76015f769505b8e150d70b55fb8300e9"
  },
  {
    "url": "base/series/8.treemap.html",
    "revision": "9a48d378a0f6cd6a55cec4e27c60965a"
  },
  {
    "url": "base/series/9.sunburst.html",
    "revision": "18f360e5a8c52f52db0da56ad7129ce2"
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
    "revision": "ee3c36f1d29e102c712b9d11a78facfa"
  },
  {
    "url": "mock/http.js",
    "revision": "a219140640bec4dfbe8f4fe88d351ed8"
  },
  {
    "url": "senior/1.micro/1.index.html",
    "revision": "45249f48391bee541e8b66f9f08da198"
  },
  {
    "url": "senior/1.micro/1.singlespa.html",
    "revision": "c20bd59ba64563c27c944e409f2f45d7"
  },
  {
    "url": "senior/1.micro/1.singlespa2.html",
    "revision": "55e724b3af54ee92458218596a418afd"
  },
  {
    "url": "senior/1.micro/2.qiankun.html",
    "revision": "8a801bbc06e332580a2cdabbecc54415"
  },
  {
    "url": "senior/1.micro/2.qiankun2.html",
    "revision": "5353ef3dd21099bb704e2bf6b7e0df14"
  },
  {
    "url": "senior/1.micro/3.share.html",
    "revision": "c744f383e63689ac2af617686cf77e95"
  },
  {
    "url": "senior/1.micro/4.dev.html",
    "revision": "723cbcc0654b7c310b472ef08a9cf35f"
  },
  {
    "url": "senior/2.typescript/1.env.html",
    "revision": "5033040caec0df55f0d89f7f16a70ab1"
  },
  {
    "url": "senior/2.typescript/1.index.html",
    "revision": "f3a243d87e92ea995baa3394c8a27d6a"
  },
  {
    "url": "senior/2.typescript/10.infer.html",
    "revision": "af082c8ffd045d08c3b8a050f54316cb"
  },
  {
    "url": "senior/2.typescript/11.overlapping.html",
    "revision": "1667ced7c4af571d0d38c4b6794a30b1"
  },
  {
    "url": "senior/2.typescript/12.condition.html",
    "revision": "cc789842553e14d26c8cc387c9206e5a"
  },
  {
    "url": "senior/2.typescript/13.builtin.html",
    "revision": "78e573000147441aca4f193226b3965e"
  },
  {
    "url": "senior/2.typescript/14.package.html",
    "revision": "53622fdedcc7201a97d145548d86b0de"
  },
  {
    "url": "senior/2.typescript/15.custom.html",
    "revision": "64118f74b6ef3e697b3c58d3f3f3e777"
  },
  {
    "url": "senior/2.typescript/16.unknown.html",
    "revision": "9c635e6b9a1946b5e7d149462dd0bd58"
  },
  {
    "url": "senior/2.typescript/17.module.html",
    "revision": "ebee3c00e6f4f4b8afcff710fb52e567"
  },
  {
    "url": "senior/2.typescript/18.statement.html",
    "revision": "b42cedefedaddfaa99b4623c58985b06"
  },
  {
    "url": "senior/2.typescript/19.extend.html",
    "revision": "abb01ac15f4c9041c5b4dfa3a1849762"
  },
  {
    "url": "senior/2.typescript/2.base.html",
    "revision": "ed24e4126f25fbcdfbf81ec03b40f08d"
  },
  {
    "url": "senior/2.typescript/3.deduction.html",
    "revision": "497d28e21f9f1ab7fafa2a7458c9ca98"
  },
  {
    "url": "senior/2.typescript/4.type.html",
    "revision": "286ef61067cb1004a378bea2ad2f3a6a"
  },
  {
    "url": "senior/2.typescript/5.class.html",
    "revision": "22c6ef1b931d3225f233caef3b0372a6"
  },
  {
    "url": "senior/2.typescript/6.interface.html",
    "revision": "6d6fded744a8d25dacac220e6feae238"
  },
  {
    "url": "senior/2.typescript/7.generic.html",
    "revision": "f73c24f8fe149a9521cf701d3fc128c3"
  },
  {
    "url": "senior/2.typescript/8.compatible.html",
    "revision": "47d42c9fd7c9ca52ad649aa9f991875d"
  },
  {
    "url": "senior/2.typescript/9.protect.html",
    "revision": "ef2bb655f6ccf06616f8c79e6f9f1fed"
  },
  {
    "url": "senior/3.deploy/1.index.html",
    "revision": "3855d7a1231494594ced7cebd4e2d4e5"
  },
  {
    "url": "senior/3.deploy/1.local.html",
    "revision": "1c75fd486fd3a1ed6d9def9d3595b9f7"
  },
  {
    "url": "senior/3.deploy/2.gitlab.html",
    "revision": "8612923cd4200c027489efd457e7ef6f"
  },
  {
    "url": "senior/3.deploy/3.genkins.html",
    "revision": "8ba7ea482488fe2eb9918567a5055b28"
  },
  {
    "url": "senior/3.deploy/4.centos.html",
    "revision": "e039e67975f6c11e945c5277a66c1928"
  },
  {
    "url": "senior/3.deploy/5.nginx.html",
    "revision": "cddd29b78bc67313c40967941c5e3639"
  },
  {
    "url": "senior/4.component/1.button.html",
    "revision": "1d77a157b786e9fc9146c86905dae48b"
  },
  {
    "url": "senior/4.component/1.env.html",
    "revision": "ad316dcfb25c729e95f33a57c17f5dd2"
  },
  {
    "url": "senior/4.component/1.index.html",
    "revision": "19d04d01bbaab075005415b1c93774a6"
  },
  {
    "url": "senior/4.component/1.recursion.html",
    "revision": "bfa75e856cda459b5e043370404d08a7"
  },
  {
    "url": "senior/4.component/10.tree.html",
    "revision": "bdf45aca38a2aa4531c62d0cae73ffc2"
  },
  {
    "url": "senior/4.component/12.table.html",
    "revision": "abe730576ef76bd3cab8795ee84df6c9"
  },
  {
    "url": "senior/4.component/13.publish.html",
    "revision": "c4b9384c866945b55be20878e68a9970"
  },
  {
    "url": "senior/4.component/2.dropdown.html",
    "revision": "df1e6ce2b4d61d4566a70854329e1a44"
  },
  {
    "url": "senior/4.component/3.dialog.html",
    "revision": "1e090bf53b17bcdbafd4c99b5b9c9435"
  },
  {
    "url": "senior/4.component/3.form.html",
    "revision": "bc6522dcead8b2b36c199009b1d3c236"
  },
  {
    "url": "senior/4.component/4.input.html",
    "revision": "152308691af264c5ba05382004352b05"
  },
  {
    "url": "senior/4.component/4.render.html",
    "revision": "b64b215fc33e7c5f528e69b34eb0d7eb"
  },
  {
    "url": "senior/4.component/5.checkBox.html",
    "revision": "958b9deaae7374a24b30defbb4d36913"
  },
  {
    "url": "senior/4.component/6.cascader.html",
    "revision": "f4824e48dbe580a3e36f55af8f763a20"
  },
  {
    "url": "senior/4.component/7.date.html",
    "revision": "ac662a0cd5106ec0c709ef7e4098143e"
  },
  {
    "url": "senior/4.component/8.dispaly.html",
    "revision": "ca7c2d131f3b81cca23fb8f103cfc7e3"
  },
  {
    "url": "senior/4.component/9.alert.html",
    "revision": "091d16fd2c371adaf21f653247d75602"
  },
  {
    "url": "senior/4.component/9.dynamics.html",
    "revision": "4b8bb366f03ca9404a79a6bfdf82d3c9"
  },
  {
    "url": "source/vue-cli2.x/1.index.html",
    "revision": "75771d80a7d4b6057b3073eedd36c094"
  },
  {
    "url": "source/vue-cli3.x/1.index.html",
    "revision": "347460121bd0c9e781b692ea9b3d8886"
  },
  {
    "url": "source/vue-router3.x/1.index.html",
    "revision": "164765b2bcfd7b45572bd33e50074d01"
  },
  {
    "url": "source/vue-router3.x/2.origin.html",
    "revision": "6e5940fb42a6fe7a86627cb9fc29b71a"
  },
  {
    "url": "source/vue-router4.x/1.index.html",
    "revision": "1bb27fd519168300041a8a4ca2876a05"
  },
  {
    "url": "source/vue2.x/1.index.html",
    "revision": "50c64121ebc21f5405d63813ca4df37e"
  },
  {
    "url": "source/vue2.x/10.optimize.html",
    "revision": "18a7173286293d1029d0ad4ffd156550"
  },
  {
    "url": "source/vue2.x/11.gencode.html",
    "revision": "70783bdedce4fa9578c3ebfef52a2455"
  },
  {
    "url": "source/vue2.x/12.mount.html",
    "revision": "a0f4e26b4d4316f3c8c281235d580b29"
  },
  {
    "url": "source/vue2.x/13._render.html",
    "revision": "72ccc9e2ac9381f7719c2c0888b2e183"
  },
  {
    "url": "source/vue2.x/14._update.html",
    "revision": "49ee1db2bd4816acd42e25fa8f71a7c2"
  },
  {
    "url": "source/vue2.x/2.initGlobalAPI.html",
    "revision": "1948509f57548c6099ea54cf3e3a3bc4"
  },
  {
    "url": "source/vue2.x/3.initMixin.html",
    "revision": "47fd82d4475d665b2424b3ecf1f77106"
  },
  {
    "url": "source/vue2.x/4.stateMixin.html",
    "revision": "79d914d4c1302e60884e633146bebf88"
  },
  {
    "url": "source/vue2.x/5.eventsMixin.html",
    "revision": "fa91b92f1ec15c6cc486a6ad0223e147"
  },
  {
    "url": "source/vue2.x/6.lifecycleMixin.html",
    "revision": "241a24c9278f7077c2c1539479148c8c"
  },
  {
    "url": "source/vue2.x/7.renderMixin.html",
    "revision": "6deb0768f51bfe81a4553f5c4c489c0f"
  },
  {
    "url": "source/vue2.x/8.mount.html",
    "revision": "763722fdb8d7b5d6b930ef455c0d77e9"
  },
  {
    "url": "source/vue2.x/9.ast.html",
    "revision": "e714fa705d91561117c4cb027dec622f"
  },
  {
    "url": "source/vue3.x/1.index.html",
    "revision": "3e619bc689b7e742b3f1397891b2eceb"
  },
  {
    "url": "source/vue3.x/10.optimize.html",
    "revision": "9452f3225caffc4c1d57944bdc36c362"
  },
  {
    "url": "source/vue3.x/11.gencode.html",
    "revision": "ce2ef5b8305415af46efd486df799243"
  },
  {
    "url": "source/vue3.x/12.mount.html",
    "revision": "a54c073beb3df5340e022462d2104660"
  },
  {
    "url": "source/vue3.x/13._render.html",
    "revision": "7fda86900ea5e900fab251a4442f7548"
  },
  {
    "url": "source/vue3.x/14._update.html",
    "revision": "451ab7e788f7a9fcf7a958d87242a01e"
  },
  {
    "url": "source/vue3.x/2.initGlobalAPI.html",
    "revision": "702bef2ba9fc0dc9b1075c5a353b465f"
  },
  {
    "url": "source/vue3.x/3.initMixin.html",
    "revision": "a0ea0ef6eeedcbf194920cc1409154d0"
  },
  {
    "url": "source/vue3.x/4.stateMixin.html",
    "revision": "75550e0b61fea0602fce76e2c840a867"
  },
  {
    "url": "source/vue3.x/5.eventsMixin.html",
    "revision": "eb3de5dfab49af87ba2c96df557f97c2"
  },
  {
    "url": "source/vue3.x/6.lifecycleMixin.html",
    "revision": "36660983e9540f087e4d4d6a59e37baa"
  },
  {
    "url": "source/vue3.x/7.renderMixin.html",
    "revision": "57a6b340d5d887c71622201b4feb86cb"
  },
  {
    "url": "source/vue3.x/8.mount.html",
    "revision": "240934771967e25b66076a1f02034c48"
  },
  {
    "url": "source/vue3.x/9.ast.html",
    "revision": "a22fd6ea17759ea3b4a579f9538ef787"
  },
  {
    "url": "source/vuex3.x/1.index.html",
    "revision": "37cd4b0a80e962b3beb51dd091bc6533"
  },
  {
    "url": "source/vuex3.x/2.use.html",
    "revision": "48d0e770fab8ee97fdb077bd98c6d459"
  },
  {
    "url": "source/vuex3.x/3.origin.html",
    "revision": "eca95f17f9216061c44ff96a1ce766d2"
  },
  {
    "url": "source/vuex4.x/1.index.html",
    "revision": "5aafc0c7ae7cc0b739557d53fe61e8e2"
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
