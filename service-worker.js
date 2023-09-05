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
    "revision": "b38adb908bca9bcfff5c9e70d406650d"
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
    "url": "assets/js/36.151c187a.js",
    "revision": "278a5e9a8e33318de3ab6536908feb88"
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
    "url": "assets/js/49.b3860ba8.js",
    "revision": "5315be3bb46ec26b9e4379faf11bdddb"
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
    "revision": "67d04798ceba505cb9b5a804c4ec7852"
  },
  {
    "url": "base/api/1.index.html",
    "revision": "e2741cd29094d0214ae5225cc2194859"
  },
  {
    "url": "base/api/2.echartsInstance.html",
    "revision": "a66862fa84cb9b1d47b35570a4837852"
  },
  {
    "url": "base/api/3.action.html",
    "revision": "66539a941d8041fcc9c23854f4b909e0"
  },
  {
    "url": "base/api/4.events.html",
    "revision": "ac87b38a88edbddb5ddec3596bf56d54"
  },
  {
    "url": "base/components/1.index.html",
    "revision": "edc11988990be42a11cb27ea1c639b9f"
  },
  {
    "url": "base/components/1.legend.html",
    "revision": "b18c04c1eadf8476e58f19d14177b97e"
  },
  {
    "url": "base/components/2.grid.html",
    "revision": "051991585cc79839fb99e739d80a6488"
  },
  {
    "url": "base/components/2.polar.html",
    "revision": "3c17edc45752b2e4d6ffd9dfac7a7cc0"
  },
  {
    "url": "base/components/2.radiusAxis.html",
    "revision": "37620841bad92482bef8cc5c09ddeed5"
  },
  {
    "url": "base/components/2.xAxis.html",
    "revision": "7e8b03677a0361df0eae0f0323532718"
  },
  {
    "url": "base/components/2.yAxis.html",
    "revision": "6479c94b3d07e2306d0944ec18a9a240"
  },
  {
    "url": "base/components/3.angleAxis.html",
    "revision": "e7f4307fac94c2871fb76600e3f6d00a"
  },
  {
    "url": "base/components/4.radar.html",
    "revision": "02aec4a253968ea9c3994aad704d21a9"
  },
  {
    "url": "base/components/5.dataZoom.html",
    "revision": "093f42426b34e37b5a3857705e6e5f96"
  },
  {
    "url": "base/components/6.visualMap.html",
    "revision": "bdf1f6c18b2cbd7b906ef25373cadc3b"
  },
  {
    "url": "base/components/7.tooltip.html",
    "revision": "c93325c599434b35df3ca23fbc27423b"
  },
  {
    "url": "base/components/8.geo.html",
    "revision": "30ea4eef8137dbb09363a1d72c75ae21"
  },
  {
    "url": "base/gl/1.index.html",
    "revision": "e623f714e48f0edcf992a91444e2c0e4"
  },
  {
    "url": "base/gl/1.scatter3D.html",
    "revision": "315873fce5101271cf15082a2cd8c5fe"
  },
  {
    "url": "base/gl/10.flowGL.html",
    "revision": "96c0d2030f5b3ec5be49ab09705346e4"
  },
  {
    "url": "base/gl/2.bar3D.html",
    "revision": "74d69ce65b022ff137bc21c78c722f0b"
  },
  {
    "url": "base/gl/3.line3D.html",
    "revision": "4859c5b549edb317d3ffa2ec00ea63d2"
  },
  {
    "url": "base/gl/4.lines3D.html",
    "revision": "53207eb2b0d45895e17e4f78313248ff"
  },
  {
    "url": "base/gl/5.map3D.html",
    "revision": "debe0651f2c98740c9bf0e18d274ac3b"
  },
  {
    "url": "base/gl/6.surface.html",
    "revision": "71e7055eebc260c9b3ecfa9c3918584b"
  },
  {
    "url": "base/gl/7.polygons3D.html",
    "revision": "b056666f8246a4c313c2d55c5588f5b2"
  },
  {
    "url": "base/gl/8.scatterGL.html",
    "revision": "8f6d2d2aab77263ae9c1504236a1df4e"
  },
  {
    "url": "base/gl/9.graphGL.html",
    "revision": "a696aff56a62390a7f34890edc1b6e4a"
  },
  {
    "url": "base/series/1.index.html",
    "revision": "e568fcf899f0bfb37e91465f4be3abb4"
  },
  {
    "url": "base/series/1.line.html",
    "revision": "685453b236f35b4248c0ae4e392e5b77"
  },
  {
    "url": "base/series/10.boxplot.html",
    "revision": "355c85dc4583a1eaa6a714c2584a612e"
  },
  {
    "url": "base/series/11.candlestick.html",
    "revision": "91d26808d7f2fac890714e4ab3f338e5"
  },
  {
    "url": "base/series/12.heatmap.html",
    "revision": "3bbbb97ab82a8943915a0d81be6a43a9"
  },
  {
    "url": "base/series/13.map.html",
    "revision": "590ba043b2dcf358661a9ede3bfdd07f"
  },
  {
    "url": "base/series/14.parallel.html",
    "revision": "7fd6fdedec9541c41f0ce5bba7f1493e"
  },
  {
    "url": "base/series/15.lines.html",
    "revision": "d631591bec5d087a936ca1b600c22179"
  },
  {
    "url": "base/series/16.graph.html",
    "revision": "5de9bdd0de39029573785bf1e39d7651"
  },
  {
    "url": "base/series/17.sankey.html",
    "revision": "bc351968d5168c6a7201f320d8af6355"
  },
  {
    "url": "base/series/18.funnel.html",
    "revision": "39c783f9c768b972683aa07b0412c52a"
  },
  {
    "url": "base/series/19.gauge.html",
    "revision": "20f0671732a88f7c960220bbbcb1fd88"
  },
  {
    "url": "base/series/2.bar.html",
    "revision": "520db961caf3d2511ca6d3ecaddf23d1"
  },
  {
    "url": "base/series/20.pictorialBar.html",
    "revision": "2ecd6830a21e6e5f5d9e6235f18ef647"
  },
  {
    "url": "base/series/21.themeRiver.html",
    "revision": "e56729ab75783f07f7bffa92e573b078"
  },
  {
    "url": "base/series/22.custom.html",
    "revision": "320c510f9a0a0745d01f3746248e48e5"
  },
  {
    "url": "base/series/3.pie.html",
    "revision": "e70039f62c38c404176cdbde907d55f7"
  },
  {
    "url": "base/series/4.scatter.html",
    "revision": "b670dc84864f89dbdbdf57a6d39f8ac4"
  },
  {
    "url": "base/series/5.effectScatter.html",
    "revision": "fe99b11c3a5958dd42818dc98effb5ac"
  },
  {
    "url": "base/series/6.radar.html",
    "revision": "873469535f92199dd36bb76855b12eae"
  },
  {
    "url": "base/series/7.tree.html",
    "revision": "73b63e6e9a8fe7c933c6dd706159da44"
  },
  {
    "url": "base/series/8.treemap.html",
    "revision": "ccd9b7e35c0d42b7c9a38dc30c994a31"
  },
  {
    "url": "base/series/9.sunburst.html",
    "revision": "66e197336769227b3d39f089a15e0cdf"
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
    "revision": "39f3bdd7ad92e1c0be69499ecd9b3087"
  },
  {
    "url": "mock/http.js",
    "revision": "a219140640bec4dfbe8f4fe88d351ed8"
  },
  {
    "url": "senior/1.micro/1.index.html",
    "revision": "3ef1f60eba590426d325db587fe4ef1f"
  },
  {
    "url": "senior/1.micro/1.singlespa.html",
    "revision": "a78ac589c606c9f4e907be59dd1d3df4"
  },
  {
    "url": "senior/1.micro/1.singlespa2.html",
    "revision": "56fee40572fda09b1b2b534887b11dc2"
  },
  {
    "url": "senior/1.micro/2.qiankun.html",
    "revision": "0f2e36bc53329b42512353c2d2877bf1"
  },
  {
    "url": "senior/1.micro/2.qiankun2.html",
    "revision": "fcec9aa32ba7c061c630d95db73edc59"
  },
  {
    "url": "senior/1.micro/3.share.html",
    "revision": "df8a1db1d4428ddc564d4a1ebe6b894f"
  },
  {
    "url": "senior/1.micro/4.dev.html",
    "revision": "3b2207daf88ae4765ec0ce5e4d394c18"
  },
  {
    "url": "senior/2.typescript/1.env.html",
    "revision": "fe440ee96575175c5924df597c2bbb0b"
  },
  {
    "url": "senior/2.typescript/1.index.html",
    "revision": "a712a528e491507927f04c35fa58a928"
  },
  {
    "url": "senior/2.typescript/10.infer.html",
    "revision": "b2c58376cf7ec1bcc48cbb9bef3ead2f"
  },
  {
    "url": "senior/2.typescript/11.overlapping.html",
    "revision": "7b2ffa62232ab228b1685ec709770012"
  },
  {
    "url": "senior/2.typescript/12.condition.html",
    "revision": "8c25a5571f8284cbbade487319d875ad"
  },
  {
    "url": "senior/2.typescript/13.builtin.html",
    "revision": "4c195087f80cedb035017850f513305c"
  },
  {
    "url": "senior/2.typescript/14.package.html",
    "revision": "d6a48ecaee84d6c735b174a995ac0356"
  },
  {
    "url": "senior/2.typescript/15.custom.html",
    "revision": "5c189307f4e24454fff8b71b3c35a79a"
  },
  {
    "url": "senior/2.typescript/16.unknown.html",
    "revision": "54c950deef605c60892f2840ba108123"
  },
  {
    "url": "senior/2.typescript/17.module.html",
    "revision": "8b9e0dcefde02aa11d9604b64f145461"
  },
  {
    "url": "senior/2.typescript/18.statement.html",
    "revision": "72a873abaad0ad94fc88fb6befabc51f"
  },
  {
    "url": "senior/2.typescript/19.extend.html",
    "revision": "c9b1414356ad5dbb83dd0376d9f7fb30"
  },
  {
    "url": "senior/2.typescript/2.base.html",
    "revision": "405d247664769f43cb99cacad4411def"
  },
  {
    "url": "senior/2.typescript/3.deduction.html",
    "revision": "6bf5058ae64140278e4b2e6b5b306b56"
  },
  {
    "url": "senior/2.typescript/4.type.html",
    "revision": "508fb4b3d22aa4170e82408a4d81e426"
  },
  {
    "url": "senior/2.typescript/5.class.html",
    "revision": "9ab38eae64e0b4e3163c422aa424c7ff"
  },
  {
    "url": "senior/2.typescript/6.interface.html",
    "revision": "1067701b402cc26bf92176280daae25c"
  },
  {
    "url": "senior/2.typescript/7.generic.html",
    "revision": "62e87dd80d7138b5dd450612a44fca7d"
  },
  {
    "url": "senior/2.typescript/8.compatible.html",
    "revision": "86dfa934eddae50ed2f6d9a2da3634da"
  },
  {
    "url": "senior/2.typescript/9.protect.html",
    "revision": "2dc8354e2aab03ee769e6a94d50bdffc"
  },
  {
    "url": "senior/3.deploy/1.index.html",
    "revision": "35e44283de9f37700b12fff3f5bebe2c"
  },
  {
    "url": "senior/3.deploy/1.local.html",
    "revision": "842986b9a3f4c674ff6a7776543c5f15"
  },
  {
    "url": "senior/3.deploy/2.gitlab.html",
    "revision": "a452d21d46e1faa1b67dc299011904fd"
  },
  {
    "url": "senior/3.deploy/3.genkins.html",
    "revision": "58b54ed48eb9f02dd29a33b5e2b7b516"
  },
  {
    "url": "senior/3.deploy/4.centos.html",
    "revision": "cf81b50ef6ed2f779f0ab745fb29f431"
  },
  {
    "url": "senior/3.deploy/5.nginx.html",
    "revision": "6abfbb68a23cc717267bedc03517cfa3"
  },
  {
    "url": "senior/4.component/1.button.html",
    "revision": "85c595223ccad3f0e34ba56b31dabf75"
  },
  {
    "url": "senior/4.component/1.env.html",
    "revision": "fd32ef5194664bdadfec156fca2a5829"
  },
  {
    "url": "senior/4.component/1.index.html",
    "revision": "644528b974f774bd09bfdeeb78d72224"
  },
  {
    "url": "senior/4.component/1.recursion.html",
    "revision": "d23f16953aa1e680beb2d09e0a2f6606"
  },
  {
    "url": "senior/4.component/10.tree.html",
    "revision": "50c5e443f1ac179e3a1e20a27f93c913"
  },
  {
    "url": "senior/4.component/12.table.html",
    "revision": "7bed1ecdd672b9c7796397573fcba4e1"
  },
  {
    "url": "senior/4.component/13.publish.html",
    "revision": "fd477363a36908011b10f9e03b3076a7"
  },
  {
    "url": "senior/4.component/2.dropdown.html",
    "revision": "96c2a00e0ffea0b116d37414858be60e"
  },
  {
    "url": "senior/4.component/3.dialog.html",
    "revision": "e9c8c2d1f8b16f3f018c0c2544a3233b"
  },
  {
    "url": "senior/4.component/3.form.html",
    "revision": "1d147a4ee884720730ee8ed278f75854"
  },
  {
    "url": "senior/4.component/4.input.html",
    "revision": "78db4f48657d337f2bfef0de7d11b397"
  },
  {
    "url": "senior/4.component/4.render.html",
    "revision": "6562be94a6f723a6c4dac830011aaa15"
  },
  {
    "url": "senior/4.component/5.checkBox.html",
    "revision": "e1d45db0ce9d159b03c37acda1b6bb7b"
  },
  {
    "url": "senior/4.component/6.cascader.html",
    "revision": "20b4f9a34bc8aa6b6b50409d088b71e3"
  },
  {
    "url": "senior/4.component/7.date.html",
    "revision": "30abf7e80123d0d3dfcec4426469dd9c"
  },
  {
    "url": "senior/4.component/8.dispaly.html",
    "revision": "827177b3188bd767ecb99609884e74b9"
  },
  {
    "url": "senior/4.component/9.alert.html",
    "revision": "2e3055876caed8a7511721aefb0f9e4e"
  },
  {
    "url": "senior/4.component/9.dynamics.html",
    "revision": "2af3f2e0da2b5546e3397fc5d64a92c5"
  },
  {
    "url": "source/vue-cli2.x/1.index.html",
    "revision": "d1879248cbb06b3f2c5aa22e368e4972"
  },
  {
    "url": "source/vue-cli3.x/1.index.html",
    "revision": "d08b44ec07b7f9542231006d520c4c9a"
  },
  {
    "url": "source/vue-router3.x/1.index.html",
    "revision": "2b4dafabd38aaebc876ee885a4c58508"
  },
  {
    "url": "source/vue-router3.x/2.origin.html",
    "revision": "c718c1ec173233d63317b5745c9cd297"
  },
  {
    "url": "source/vue-router4.x/1.index.html",
    "revision": "c9b88cfc6ccfd9a4df30492bc1681b46"
  },
  {
    "url": "source/vue2.x/1.index.html",
    "revision": "b42bd811c825efce548b291af1937e33"
  },
  {
    "url": "source/vue2.x/10.optimize.html",
    "revision": "4c2e9bb9490ec6367e7ab7039b617039"
  },
  {
    "url": "source/vue2.x/11.gencode.html",
    "revision": "bed35245e4f810884c4867cd6e249934"
  },
  {
    "url": "source/vue2.x/12.mount.html",
    "revision": "6a8e8c54eaa2058f2856d07d1f6d2540"
  },
  {
    "url": "source/vue2.x/13._render.html",
    "revision": "c5dcffb833aba0eeada41cf588548d93"
  },
  {
    "url": "source/vue2.x/14._update.html",
    "revision": "f7437c99e7ea7b6cf0b248eae0e7727f"
  },
  {
    "url": "source/vue2.x/2.initGlobalAPI.html",
    "revision": "2cd4224eb9075ea3c1636770137991d5"
  },
  {
    "url": "source/vue2.x/3.initMixin.html",
    "revision": "2f879357f2a17035b9936aaf2ba6fba7"
  },
  {
    "url": "source/vue2.x/4.stateMixin.html",
    "revision": "b4e1af1bb461d1add3201bff94cd0baf"
  },
  {
    "url": "source/vue2.x/5.eventsMixin.html",
    "revision": "231851ddfae0e21d0a10bed86efda2d9"
  },
  {
    "url": "source/vue2.x/6.lifecycleMixin.html",
    "revision": "67f97502403916e19832e322c19e49c2"
  },
  {
    "url": "source/vue2.x/7.renderMixin.html",
    "revision": "979c1f95c78f70d2c66154e50d87eb63"
  },
  {
    "url": "source/vue2.x/8.mount.html",
    "revision": "8e9aeaee7eedf9ba7c788b9765c032cf"
  },
  {
    "url": "source/vue2.x/9.ast.html",
    "revision": "4ada6de4f452e39ed73fdfa49c12f11d"
  },
  {
    "url": "source/vue3.x/1.index.html",
    "revision": "077027f1440681f7f4ca1e06e27cc80c"
  },
  {
    "url": "source/vue3.x/10.optimize.html",
    "revision": "cfb64df989ff6c6eab91ea32ba1aff19"
  },
  {
    "url": "source/vue3.x/11.gencode.html",
    "revision": "e568f004915f3c27e4902ad3e1d2b394"
  },
  {
    "url": "source/vue3.x/12.mount.html",
    "revision": "5d83c7ee758749ca4f5ae6060c670f8e"
  },
  {
    "url": "source/vue3.x/13._render.html",
    "revision": "865621f5d3c7840d4a0e8dee9645ccec"
  },
  {
    "url": "source/vue3.x/14._update.html",
    "revision": "a2c6e876a75a1a5bac6bbf64e5a9508b"
  },
  {
    "url": "source/vue3.x/2.initGlobalAPI.html",
    "revision": "4d55e1e779af8f85a2def73c35e9cee8"
  },
  {
    "url": "source/vue3.x/3.initMixin.html",
    "revision": "b733d8344de8859379f0772fc9b28f27"
  },
  {
    "url": "source/vue3.x/4.stateMixin.html",
    "revision": "1858d5e191d1c62d4a2a81ec1f51fdc0"
  },
  {
    "url": "source/vue3.x/5.eventsMixin.html",
    "revision": "49fb94528930f0cfd9802ef33ec87782"
  },
  {
    "url": "source/vue3.x/6.lifecycleMixin.html",
    "revision": "f556ece547ce2702e727c6a2f47390a0"
  },
  {
    "url": "source/vue3.x/7.renderMixin.html",
    "revision": "29851669255f0a5f2624593ce6077ca1"
  },
  {
    "url": "source/vue3.x/8.mount.html",
    "revision": "256a01fbc5717914eec2174207ff7758"
  },
  {
    "url": "source/vue3.x/9.ast.html",
    "revision": "3e290765b583fdeb7e878e427bc2037a"
  },
  {
    "url": "source/vuex3.x/1.index.html",
    "revision": "a1cd79b2ade9c2c08faf54580f4e33c2"
  },
  {
    "url": "source/vuex3.x/2.use.html",
    "revision": "12c952c74c13451a430a5d1e69af3ec8"
  },
  {
    "url": "source/vuex3.x/3.origin.html",
    "revision": "b29c7183860ec66f058f553e0041c4c3"
  },
  {
    "url": "source/vuex4.x/1.index.html",
    "revision": "d056866e887dd4df4d0d619d9f4430e5"
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
