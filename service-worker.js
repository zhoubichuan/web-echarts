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
    "revision": "db74c359490bebc92c5277a427cded93"
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
    "revision": "30bc5b00a783b987c8c36ff800eea34d"
  },
  {
    "url": "base/api/1.index.html",
    "revision": "ff57062900b7b2880823b3ee8c599543"
  },
  {
    "url": "base/api/2.echartsInstance.html",
    "revision": "10df7e93f0542029a19429d37a26075b"
  },
  {
    "url": "base/api/3.action.html",
    "revision": "dffbe653c7a98cf2270f7da26f44ccc1"
  },
  {
    "url": "base/api/4.events.html",
    "revision": "6c28c9cb560ce5615edce7c4c94b29c0"
  },
  {
    "url": "base/components/1.index.html",
    "revision": "9adb36c6bf69e4ba32fbc8dbfe2dd6b2"
  },
  {
    "url": "base/components/1.legend.html",
    "revision": "501f0c6c36d8664918f3a78a37cfd885"
  },
  {
    "url": "base/components/2.grid.html",
    "revision": "a123c8a3f405b66be99535cc9cce084f"
  },
  {
    "url": "base/components/2.polar.html",
    "revision": "b3f0c9cf742b2efe829c3d7fb316fd69"
  },
  {
    "url": "base/components/2.radiusAxis.html",
    "revision": "b9dba6d59b8b8ca7dabcc77d29dcb8a1"
  },
  {
    "url": "base/components/2.xAxis.html",
    "revision": "5ba5e4103521b54224df66957d43aa64"
  },
  {
    "url": "base/components/2.yAxis.html",
    "revision": "eb0c13a4f2dd9661be46e5244a3edb5f"
  },
  {
    "url": "base/components/3.angleAxis.html",
    "revision": "f89be0c630ab5c2a56f68bc09d4f404c"
  },
  {
    "url": "base/components/4.radar.html",
    "revision": "4e4f8ebd657dfd3e5de82e2d285cbb85"
  },
  {
    "url": "base/components/5.dataZoom.html",
    "revision": "13df3efbf14cb68c626eff438409fd00"
  },
  {
    "url": "base/components/6.visualMap.html",
    "revision": "0f98c3bde778cbb3b72d651a4e103d7e"
  },
  {
    "url": "base/components/7.tooltip.html",
    "revision": "12821f42c6d1f2c2c1a6b3f04a583c86"
  },
  {
    "url": "base/components/8.geo.html",
    "revision": "16bfa0efa99bcf38b2c776c5508ef2ed"
  },
  {
    "url": "base/gl/1.index.html",
    "revision": "404497d1102afcb4e4acd292219718c7"
  },
  {
    "url": "base/gl/1.scatter3D.html",
    "revision": "39e072deafe84315113c42606e9646b0"
  },
  {
    "url": "base/gl/10.flowGL.html",
    "revision": "1a0f9d54951bb41de26252ea8723e08d"
  },
  {
    "url": "base/gl/2.bar3D.html",
    "revision": "055a1a6341543f228c6c68b86588bad3"
  },
  {
    "url": "base/gl/3.line3D.html",
    "revision": "b756c0ea068a8f8b35e54bae9c76c3d0"
  },
  {
    "url": "base/gl/4.lines3D.html",
    "revision": "e8187dfd4174a7f000acc555946ec786"
  },
  {
    "url": "base/gl/5.map3D.html",
    "revision": "f9e81b522890927385933be6f3605409"
  },
  {
    "url": "base/gl/6.surface.html",
    "revision": "098b695b3fd6a6617f52427631bdf49c"
  },
  {
    "url": "base/gl/7.polygons3D.html",
    "revision": "ab9644a4d607155f14a0df917c32104f"
  },
  {
    "url": "base/gl/8.scatterGL.html",
    "revision": "1834322ccc304c034ee91751d9d34d5f"
  },
  {
    "url": "base/gl/9.graphGL.html",
    "revision": "947cda3274ee952580fe046b3f3c1af0"
  },
  {
    "url": "base/series/1.index.html",
    "revision": "447de5c74439d5f2715dde5bf96ba5ed"
  },
  {
    "url": "base/series/1.line.html",
    "revision": "f889ba7fb79733fc36c33654e143c425"
  },
  {
    "url": "base/series/10.boxplot.html",
    "revision": "15fdb55acb640bac61ff8d1cdb0497ae"
  },
  {
    "url": "base/series/11.candlestick.html",
    "revision": "54282f705efddf6874ece08e08db9196"
  },
  {
    "url": "base/series/12.heatmap.html",
    "revision": "f3d0e112487a5633e320dee20e4b110a"
  },
  {
    "url": "base/series/13.map.html",
    "revision": "6ac97498e7b271a10513662bcabda78c"
  },
  {
    "url": "base/series/14.parallel.html",
    "revision": "00a2685f562e0071c222917c28ff7492"
  },
  {
    "url": "base/series/15.lines.html",
    "revision": "ee1c913d696a4d5cc5ac6287acfc40e5"
  },
  {
    "url": "base/series/16.graph.html",
    "revision": "0ec88852311b769ec87bc10d54e5583b"
  },
  {
    "url": "base/series/17.sankey.html",
    "revision": "d6b7452679538c7352092499e0600d24"
  },
  {
    "url": "base/series/18.funnel.html",
    "revision": "324264ff861468f252ef9e923733a01b"
  },
  {
    "url": "base/series/19.gauge.html",
    "revision": "f00a23b4ba3278140d8d6308ac72a093"
  },
  {
    "url": "base/series/2.bar.html",
    "revision": "1901d08be738f761fa804fcdba2f4512"
  },
  {
    "url": "base/series/20.pictorialBar.html",
    "revision": "8f36cfebde2218b4f00b9304630510f9"
  },
  {
    "url": "base/series/21.themeRiver.html",
    "revision": "54fbb0c719e7d8129539ef3dd71b87d9"
  },
  {
    "url": "base/series/22.custom.html",
    "revision": "a6a26a67437087887b0fa2866af9f080"
  },
  {
    "url": "base/series/3.pie.html",
    "revision": "7385f72e0c85b2033d6d5b9b763653fd"
  },
  {
    "url": "base/series/4.scatter.html",
    "revision": "f09949355130086b300e8a17f4b4e4b2"
  },
  {
    "url": "base/series/5.effectScatter.html",
    "revision": "7dc737a0c883b7764547e8eff1093625"
  },
  {
    "url": "base/series/6.radar.html",
    "revision": "be3d2ef8edabc9fa9d5d47cc135b94f8"
  },
  {
    "url": "base/series/7.tree.html",
    "revision": "8df016a8eda4ba8513e0d32490f8fec3"
  },
  {
    "url": "base/series/8.treemap.html",
    "revision": "feeaad36f87cb0793ac94a404c83ed97"
  },
  {
    "url": "base/series/9.sunburst.html",
    "revision": "d077d864205e5b0cb5a1ed17ddbefefd"
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
    "revision": "4c07705cf61039d696626ee3c6771b21"
  },
  {
    "url": "mock/http.js",
    "revision": "a219140640bec4dfbe8f4fe88d351ed8"
  },
  {
    "url": "senior/1.micro/1.index.html",
    "revision": "5041ef167e8966cde22604850af6e652"
  },
  {
    "url": "senior/1.micro/1.singlespa.html",
    "revision": "fce2d34313697bb26443220d765802dd"
  },
  {
    "url": "senior/1.micro/1.singlespa2.html",
    "revision": "c8805d076e78db2aeba83eae31f8eb55"
  },
  {
    "url": "senior/1.micro/2.qiankun.html",
    "revision": "b9e6712bde5ec96b528e58ed712a40bb"
  },
  {
    "url": "senior/1.micro/2.qiankun2.html",
    "revision": "91d32a5a1b127a04abddf70e0c01708b"
  },
  {
    "url": "senior/1.micro/3.share.html",
    "revision": "4551c5d6e6c238d9fd1f970aa85a6169"
  },
  {
    "url": "senior/1.micro/4.dev.html",
    "revision": "8acee2b6ea291e288fdb353924076775"
  },
  {
    "url": "senior/2.typescript/1.env.html",
    "revision": "0555ef238ba57d17d988c0541eeeaad5"
  },
  {
    "url": "senior/2.typescript/1.index.html",
    "revision": "d175e678ceaae9d6944ead43f2de94bc"
  },
  {
    "url": "senior/2.typescript/10.infer.html",
    "revision": "bb300561b7a31bdabf5038a870fdb095"
  },
  {
    "url": "senior/2.typescript/11.overlapping.html",
    "revision": "7c4a51d8bec8f99efea50d1a998324cc"
  },
  {
    "url": "senior/2.typescript/12.condition.html",
    "revision": "169d20d33dab951f38ea1937571f65eb"
  },
  {
    "url": "senior/2.typescript/13.builtin.html",
    "revision": "624e668c531851cee58f8c7d0adeda24"
  },
  {
    "url": "senior/2.typescript/14.package.html",
    "revision": "d4c3abff8ef32db600f2314992e2e06c"
  },
  {
    "url": "senior/2.typescript/15.custom.html",
    "revision": "47bed268389eecfd4ac46b3ea02938ad"
  },
  {
    "url": "senior/2.typescript/16.unknown.html",
    "revision": "ab2f5026f602fe79fb4a0bdfde443844"
  },
  {
    "url": "senior/2.typescript/17.module.html",
    "revision": "3d32633b69fddf80313380013f780bbb"
  },
  {
    "url": "senior/2.typescript/18.statement.html",
    "revision": "a09ff7bcb8a84f94093b9f6edd2f7bb0"
  },
  {
    "url": "senior/2.typescript/19.extend.html",
    "revision": "965c78fb9f9660f7772bba5ea5d956fb"
  },
  {
    "url": "senior/2.typescript/2.base.html",
    "revision": "9b715f94dcedfea48df008852a1f0fc9"
  },
  {
    "url": "senior/2.typescript/3.deduction.html",
    "revision": "1ac5ce042c7b8867340dceb3351c3b22"
  },
  {
    "url": "senior/2.typescript/4.type.html",
    "revision": "373425fd1b678bd0111c90db0de5693d"
  },
  {
    "url": "senior/2.typescript/5.class.html",
    "revision": "ea426b4a8589126de3d23385ed28141e"
  },
  {
    "url": "senior/2.typescript/6.interface.html",
    "revision": "ff721f04a370223fc7b3a0b8017f968b"
  },
  {
    "url": "senior/2.typescript/7.generic.html",
    "revision": "627fb4dcc01873656633ef6906f5415f"
  },
  {
    "url": "senior/2.typescript/8.compatible.html",
    "revision": "6d29c21c421fe2bdd29a74a379802d41"
  },
  {
    "url": "senior/2.typescript/9.protect.html",
    "revision": "8ad7fb571dc1d9c3356d4386ee8c9b3e"
  },
  {
    "url": "senior/3.deploy/1.index.html",
    "revision": "456f584595cdd626526c4ad73aa564e4"
  },
  {
    "url": "senior/3.deploy/1.local.html",
    "revision": "059b853490c9a2f9521ffa1e90eb5dc9"
  },
  {
    "url": "senior/3.deploy/2.gitlab.html",
    "revision": "3aa822c5e06aab9211c99ab8b943b509"
  },
  {
    "url": "senior/3.deploy/3.genkins.html",
    "revision": "d29e7b6771b00bec3b8118babbe5e7b6"
  },
  {
    "url": "senior/3.deploy/4.centos.html",
    "revision": "aaefd12069bb1f5a03adbc39e8e5ca6c"
  },
  {
    "url": "senior/3.deploy/5.nginx.html",
    "revision": "ddad70c7bae2b0e212e26950cda6c080"
  },
  {
    "url": "senior/4.component/1.button.html",
    "revision": "d71edcc81b31e6ce22cb4877959481b6"
  },
  {
    "url": "senior/4.component/1.env.html",
    "revision": "632ab1b52227a796b8b0504a22069bf1"
  },
  {
    "url": "senior/4.component/1.index.html",
    "revision": "6fb0b42e7852f421905a960bf8008595"
  },
  {
    "url": "senior/4.component/1.recursion.html",
    "revision": "9bac1d9c1ebdd83edcadb3caa0a5ed16"
  },
  {
    "url": "senior/4.component/10.tree.html",
    "revision": "d5a6d5f64a827d3f7980abd27452e7c0"
  },
  {
    "url": "senior/4.component/12.table.html",
    "revision": "87923fd14351f288ecbe117e1fa63508"
  },
  {
    "url": "senior/4.component/13.publish.html",
    "revision": "13a37fdceab3c4b3e9aa07af9fc85ed9"
  },
  {
    "url": "senior/4.component/2.dropdown.html",
    "revision": "76d47bf112d44393a88ca51b10bdd369"
  },
  {
    "url": "senior/4.component/3.dialog.html",
    "revision": "493cbdf5be7246ab2ce13da1b44fe535"
  },
  {
    "url": "senior/4.component/3.form.html",
    "revision": "97b5306b6d8262050220f1093795a1d8"
  },
  {
    "url": "senior/4.component/4.input.html",
    "revision": "b9ff9e7fbb9813e2835806153ae08da4"
  },
  {
    "url": "senior/4.component/4.render.html",
    "revision": "1d5c51208bd249873070c3715e855365"
  },
  {
    "url": "senior/4.component/5.checkBox.html",
    "revision": "a56e6dcad634ecff8616db9792590d81"
  },
  {
    "url": "senior/4.component/6.cascader.html",
    "revision": "cc3b7505e208db01ddc984a04b01291d"
  },
  {
    "url": "senior/4.component/7.date.html",
    "revision": "effdb52ef7abace6507cc6717bcf09e0"
  },
  {
    "url": "senior/4.component/8.dispaly.html",
    "revision": "283f0fa968a7846268be3724fc221363"
  },
  {
    "url": "senior/4.component/9.alert.html",
    "revision": "3e3c9e2678cab915f77b6a9839e90aed"
  },
  {
    "url": "senior/4.component/9.dynamics.html",
    "revision": "4f60e455d7d521700f2a4ee62909c493"
  },
  {
    "url": "source/vue-cli2.x/1.index.html",
    "revision": "bcadebbb95bd5876ccfd25c4055da7ba"
  },
  {
    "url": "source/vue-cli3.x/1.index.html",
    "revision": "2d950a7b7cfce2cc3f23385de91792e3"
  },
  {
    "url": "source/vue-router3.x/1.index.html",
    "revision": "f8b97f80c547d629e0cc701a4ef66498"
  },
  {
    "url": "source/vue-router3.x/2.origin.html",
    "revision": "acac9c05f73a56e12ab40b9959f6e9e4"
  },
  {
    "url": "source/vue-router4.x/1.index.html",
    "revision": "4fd76179f13dceb5422a1387f9a0e516"
  },
  {
    "url": "source/vue2.x/1.index.html",
    "revision": "698e3e0d9d0486e9abec7578b3c7661b"
  },
  {
    "url": "source/vue2.x/10.optimize.html",
    "revision": "cf32072948b6b665133196d26b29f532"
  },
  {
    "url": "source/vue2.x/11.gencode.html",
    "revision": "9c8e354a2a01c2f14084d5a93b418af0"
  },
  {
    "url": "source/vue2.x/12.mount.html",
    "revision": "da74ae464d21773024e1a2070d417859"
  },
  {
    "url": "source/vue2.x/13._render.html",
    "revision": "24312548afd750f5ef545effb01a0636"
  },
  {
    "url": "source/vue2.x/14._update.html",
    "revision": "007dcab560ec0f189dd11e9cf9e0b88a"
  },
  {
    "url": "source/vue2.x/2.initGlobalAPI.html",
    "revision": "3c8c18f94c71e6d0d38337b6573cdfd7"
  },
  {
    "url": "source/vue2.x/3.initMixin.html",
    "revision": "40ac866ae7a88b7154edb8b6c9b5c3fa"
  },
  {
    "url": "source/vue2.x/4.stateMixin.html",
    "revision": "120f4a56a8a4a296d0e80c7e891694da"
  },
  {
    "url": "source/vue2.x/5.eventsMixin.html",
    "revision": "f5476bdcf0a474bd26707947e50ac33d"
  },
  {
    "url": "source/vue2.x/6.lifecycleMixin.html",
    "revision": "e5ac240ffa9749efaec13bdf1cc959ec"
  },
  {
    "url": "source/vue2.x/7.renderMixin.html",
    "revision": "48474d4cf7ac9d2772c11a4c10598897"
  },
  {
    "url": "source/vue2.x/8.mount.html",
    "revision": "ad942599e29e2298eaf19d36a2740a7d"
  },
  {
    "url": "source/vue2.x/9.ast.html",
    "revision": "7d37c9beae7cc38df5112384ad38fec0"
  },
  {
    "url": "source/vue3.x/1.index.html",
    "revision": "ce4ada3baec5cae6a76d132fb7629184"
  },
  {
    "url": "source/vue3.x/10.optimize.html",
    "revision": "8f05cb6a923a850ae640977766b8c736"
  },
  {
    "url": "source/vue3.x/11.gencode.html",
    "revision": "9c4a783497044ca04cb411ba623a5f6e"
  },
  {
    "url": "source/vue3.x/12.mount.html",
    "revision": "cdbe408817fdde57c0a024bf6f7b65f1"
  },
  {
    "url": "source/vue3.x/13._render.html",
    "revision": "36a2801afed6adc8bce6a7bc8cf90954"
  },
  {
    "url": "source/vue3.x/14._update.html",
    "revision": "bd3283df9761dfde345550cf43ed7128"
  },
  {
    "url": "source/vue3.x/2.initGlobalAPI.html",
    "revision": "c1ec17e3be0cf3803ca4efd6dfdfb096"
  },
  {
    "url": "source/vue3.x/3.initMixin.html",
    "revision": "cc50253f59f8787139da6367ab1b37ac"
  },
  {
    "url": "source/vue3.x/4.stateMixin.html",
    "revision": "f12abc3c80e0f196ba6903fff50988d8"
  },
  {
    "url": "source/vue3.x/5.eventsMixin.html",
    "revision": "54e3198d3ac5466238ebcfc772b0211d"
  },
  {
    "url": "source/vue3.x/6.lifecycleMixin.html",
    "revision": "fffcdd9b016bddd19e3b146ab356cbf2"
  },
  {
    "url": "source/vue3.x/7.renderMixin.html",
    "revision": "6f5bd74e3d2b7b55eaa879d587179500"
  },
  {
    "url": "source/vue3.x/8.mount.html",
    "revision": "15014cc0cbb86375683f846f797530d3"
  },
  {
    "url": "source/vue3.x/9.ast.html",
    "revision": "3927261a8e7504a3a4f415f2bd3d308b"
  },
  {
    "url": "source/vuex3.x/1.index.html",
    "revision": "b9379ad3558a542a9d89c4857e50672d"
  },
  {
    "url": "source/vuex3.x/2.use.html",
    "revision": "f25f10472470781d1ad4cc951e291747"
  },
  {
    "url": "source/vuex3.x/3.origin.html",
    "revision": "87978500cb7fb1420c596e8a82dd93ea"
  },
  {
    "url": "source/vuex4.x/1.index.html",
    "revision": "99ac1137e5b56f98df8eeb76b72538b4"
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
