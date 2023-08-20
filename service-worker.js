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
    "revision": "5887471d70ea9a4eeb483375007e1390"
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
    "url": "assets/js/54.b4e3bd55.js",
    "revision": "a89a8c9d76065a825a0c61f6b44c5af8"
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
    "revision": "9ee798b0763bbe02bffd5fd4cbe9e0aa"
  },
  {
    "url": "base/api/1.index.html",
    "revision": "9fd1a644da34c3c6ec8f47b3bd90fb13"
  },
  {
    "url": "base/api/2.echartsInstance.html",
    "revision": "ce5e14c6effa9d4376f921acbf4d2eab"
  },
  {
    "url": "base/api/3.action.html",
    "revision": "53301aca83b6f11681f61257da9b7f7d"
  },
  {
    "url": "base/api/4.events.html",
    "revision": "c27a1ad0510e3e7436a4e7d8f3d473fb"
  },
  {
    "url": "base/components/1.index.html",
    "revision": "1d6d8842eba0f385cf4ecbe402bfe685"
  },
  {
    "url": "base/components/1.legend.html",
    "revision": "6c53c5b4ac1ef391e6ec2a0bb40d2a9f"
  },
  {
    "url": "base/components/2.grid.html",
    "revision": "d63cf62e884248ad0531409499c92a4d"
  },
  {
    "url": "base/components/2.polar.html",
    "revision": "514c26f0fb2d25f42150ecda5812e48f"
  },
  {
    "url": "base/components/2.radiusAxis.html",
    "revision": "8daac44a086cf550d0251a5645678e4c"
  },
  {
    "url": "base/components/2.xAxis.html",
    "revision": "5925a21ca7a825368989cf2f2fb9f05e"
  },
  {
    "url": "base/components/2.yAxis.html",
    "revision": "c36c0844f825c308586260dd4cb926da"
  },
  {
    "url": "base/components/3.angleAxis.html",
    "revision": "dd753417852b2d54033c1f538b5adc2c"
  },
  {
    "url": "base/components/4.radar.html",
    "revision": "2cefa738f097472b07d5cec3016cba02"
  },
  {
    "url": "base/components/5.dataZoom.html",
    "revision": "387f6a2bd6855224fcb038ea5c925fee"
  },
  {
    "url": "base/components/6.visualMap.html",
    "revision": "e58efb52139252c71de6b20218c795f7"
  },
  {
    "url": "base/components/7.tooltip.html",
    "revision": "b1b78567ea1e32a058696b9dd9c4ff6d"
  },
  {
    "url": "base/components/8.geo.html",
    "revision": "60f546770ab8f288a3de8ff8f3679296"
  },
  {
    "url": "base/gl/1.index.html",
    "revision": "27adac9795fe4fcd9400be9a865a431e"
  },
  {
    "url": "base/gl/1.scatter3D.html",
    "revision": "ecbf894148e6afa162e7b4ca7b8dc11f"
  },
  {
    "url": "base/gl/10.flowGL.html",
    "revision": "3d97e7dcc10a5e4b2bbd0b3534040a35"
  },
  {
    "url": "base/gl/2.bar3D.html",
    "revision": "a5c7a01f45255b58e9ede9db1fc26569"
  },
  {
    "url": "base/gl/3.line3D.html",
    "revision": "fb5a3537dc505791c6972da327a8bdfc"
  },
  {
    "url": "base/gl/4.lines3D.html",
    "revision": "c92792ae5ef8710755a8cceddd52da17"
  },
  {
    "url": "base/gl/5.map3D.html",
    "revision": "6a0db44f93f5b3165024d03c4886e0d1"
  },
  {
    "url": "base/gl/6.surface.html",
    "revision": "650664dcc9451337a6ad62e3b655717a"
  },
  {
    "url": "base/gl/7.polygons3D.html",
    "revision": "ed0216e7afc81dbd61cbdcd8f4e1b8c4"
  },
  {
    "url": "base/gl/8.scatterGL.html",
    "revision": "9e1d3c1d3ea2de7a1408cc4d420b2ae8"
  },
  {
    "url": "base/gl/9.graphGL.html",
    "revision": "a48299676c266314d465c1919a83b798"
  },
  {
    "url": "base/series/1.index.html",
    "revision": "364fa4ce1150e8c0ca94611377d1ea35"
  },
  {
    "url": "base/series/1.line.html",
    "revision": "d62492ba78a64a8b59f026cf654bd52c"
  },
  {
    "url": "base/series/10.boxplot.html",
    "revision": "d4786b2387b7c4dd204d467fb0d75de4"
  },
  {
    "url": "base/series/11.candlestick.html",
    "revision": "f109c99f843503c789875fabfd48d8ca"
  },
  {
    "url": "base/series/12.heatmap.html",
    "revision": "2b08602769a4eea4e5758ad62dd7beb6"
  },
  {
    "url": "base/series/13.map.html",
    "revision": "2134a32008a0c922bad6bc62555d9376"
  },
  {
    "url": "base/series/14.parallel.html",
    "revision": "7c070652354cd22fcb692428b8581b91"
  },
  {
    "url": "base/series/15.lines.html",
    "revision": "9561ca0eb5163196cf9bdfafed006044"
  },
  {
    "url": "base/series/16.graph.html",
    "revision": "c398676817a5e64aea777e1af1cdb88f"
  },
  {
    "url": "base/series/17.sankey.html",
    "revision": "58aca2915909c021215457cb3ef62f40"
  },
  {
    "url": "base/series/18.funnel.html",
    "revision": "e0a5254200eab10a02dbeb87b8d4b8b6"
  },
  {
    "url": "base/series/19.gauge.html",
    "revision": "33ceeb8116d2a8b36f07738683153255"
  },
  {
    "url": "base/series/2.bar.html",
    "revision": "0f69c1c862f0e68917b45ada2771e788"
  },
  {
    "url": "base/series/20.pictorialBar.html",
    "revision": "6454e845708ea665363aeac67927f015"
  },
  {
    "url": "base/series/21.themeRiver.html",
    "revision": "c5a124cb978f5a29c172002609187ffc"
  },
  {
    "url": "base/series/22.custom.html",
    "revision": "bae8410a1a97b369cdd92151ec55ba61"
  },
  {
    "url": "base/series/3.pie.html",
    "revision": "7ade8f92ef72978fa314f4f1f1f804b5"
  },
  {
    "url": "base/series/4.scatter.html",
    "revision": "30377716a2fa1f46e31a2617298181fb"
  },
  {
    "url": "base/series/5.effectScatter.html",
    "revision": "24405400a450212fa3ba2d809d4546f1"
  },
  {
    "url": "base/series/6.radar.html",
    "revision": "2c0bef3dc2f29aa1163fd433526f1ee8"
  },
  {
    "url": "base/series/7.tree.html",
    "revision": "625318da1cfdc0ef2820dfab425b44a7"
  },
  {
    "url": "base/series/8.treemap.html",
    "revision": "3de24b07355eb48c2665ccaa2186aeee"
  },
  {
    "url": "base/series/9.sunburst.html",
    "revision": "c5bb09740ba259492c7ff990cdc2f803"
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
    "revision": "e43e7f42ca4d0bbb6514be0ee385f41f"
  },
  {
    "url": "mock/http.js",
    "revision": "a219140640bec4dfbe8f4fe88d351ed8"
  },
  {
    "url": "senior/1.micro/1.index.html",
    "revision": "c0150c6d561d2dc100eb4b41a551dabb"
  },
  {
    "url": "senior/1.micro/1.singlespa.html",
    "revision": "406a0d4ff20011dcaa31f30599166d2c"
  },
  {
    "url": "senior/1.micro/1.singlespa2.html",
    "revision": "6ea955c7de7d0037674ab8d7b97d0a68"
  },
  {
    "url": "senior/1.micro/2.qiankun.html",
    "revision": "d06ccb73d3cebb494e3db01aa9bc75a7"
  },
  {
    "url": "senior/1.micro/2.qiankun2.html",
    "revision": "027efb36a643c007540ff2ab5a1a8215"
  },
  {
    "url": "senior/1.micro/3.share.html",
    "revision": "d558d34713d57decc8ea68632d02bddc"
  },
  {
    "url": "senior/1.micro/4.dev.html",
    "revision": "7e95db89ef33b4e8313fb781b1fdbacc"
  },
  {
    "url": "senior/2.typescript/1.env.html",
    "revision": "0bb516b44356c11ac2d7b767d04ba0ca"
  },
  {
    "url": "senior/2.typescript/1.index.html",
    "revision": "9f30253c6ac19b43321f8f28fa307f02"
  },
  {
    "url": "senior/2.typescript/10.infer.html",
    "revision": "69703c1fe58c875dd3abf401cb33b2ee"
  },
  {
    "url": "senior/2.typescript/11.overlapping.html",
    "revision": "13700899133df5f02539ab5b327d2a60"
  },
  {
    "url": "senior/2.typescript/12.condition.html",
    "revision": "75025141e5d9ef22684ab683cf1e99bc"
  },
  {
    "url": "senior/2.typescript/13.builtin.html",
    "revision": "d1afdff55c4296777eba37a4884e5b67"
  },
  {
    "url": "senior/2.typescript/14.package.html",
    "revision": "53746f662563d4337cece92872bad014"
  },
  {
    "url": "senior/2.typescript/15.custom.html",
    "revision": "046c04e9982406eb609628283d77828b"
  },
  {
    "url": "senior/2.typescript/16.unknown.html",
    "revision": "72b7c1e7e19e086d2dccf96aa9da4724"
  },
  {
    "url": "senior/2.typescript/17.module.html",
    "revision": "5569e177be8af452db61ba71f9ed0f57"
  },
  {
    "url": "senior/2.typescript/18.statement.html",
    "revision": "41fb3f9d4ef9d14efaef9e532114832e"
  },
  {
    "url": "senior/2.typescript/19.extend.html",
    "revision": "53a4b58b48a60b5aa25b7245eefb1308"
  },
  {
    "url": "senior/2.typescript/2.base.html",
    "revision": "117be6174de0e9191a8422d3af4e1869"
  },
  {
    "url": "senior/2.typescript/3.deduction.html",
    "revision": "0b3b6353837cbac456b38f88392b717d"
  },
  {
    "url": "senior/2.typescript/4.type.html",
    "revision": "2f1d51138d48e411ad58b19cae0a034d"
  },
  {
    "url": "senior/2.typescript/5.class.html",
    "revision": "ade762ced4505c8b575a364aa296ceb0"
  },
  {
    "url": "senior/2.typescript/6.interface.html",
    "revision": "b073ddc9a639f277c059bd6b258b4c5e"
  },
  {
    "url": "senior/2.typescript/7.generic.html",
    "revision": "079c863141747627c38fbfe60dc27c3f"
  },
  {
    "url": "senior/2.typescript/8.compatible.html",
    "revision": "59eb1ba2231e57d560fcea50d277bca2"
  },
  {
    "url": "senior/2.typescript/9.protect.html",
    "revision": "cb36ffaca96c437b7f8b61fdc3c52a0a"
  },
  {
    "url": "senior/3.deploy/1.index.html",
    "revision": "3ff7fc98e4324fc1750d43019ae2d127"
  },
  {
    "url": "senior/3.deploy/1.local.html",
    "revision": "b00aeeaa481d00f6496d367ba4f887a2"
  },
  {
    "url": "senior/3.deploy/2.gitlab.html",
    "revision": "20a7370123ce1951473953f30810776e"
  },
  {
    "url": "senior/3.deploy/3.genkins.html",
    "revision": "cfe4934c62b23c3b864c9f32ae8a20ef"
  },
  {
    "url": "senior/3.deploy/4.centos.html",
    "revision": "bea8c279dcf7895b4ff161b428c5f060"
  },
  {
    "url": "senior/3.deploy/5.nginx.html",
    "revision": "82b28d2c578a4f8864d5714a3dc98bd3"
  },
  {
    "url": "senior/4.component/1.button.html",
    "revision": "1370399cb33e6ec3cc4eb5e91ca98961"
  },
  {
    "url": "senior/4.component/1.env.html",
    "revision": "44fbedd9f2804825c34ed3c506a9ff40"
  },
  {
    "url": "senior/4.component/1.index.html",
    "revision": "1a8612bc518580f006ef3abfd6f411f4"
  },
  {
    "url": "senior/4.component/1.recursion.html",
    "revision": "9006b011873bf197f16e5b4fd72345d2"
  },
  {
    "url": "senior/4.component/10.tree.html",
    "revision": "99b03429076ebc1727092a5f733dca5b"
  },
  {
    "url": "senior/4.component/12.table.html",
    "revision": "9b733ac260878234605adf8b8e413e99"
  },
  {
    "url": "senior/4.component/13.publish.html",
    "revision": "c71fdf03689fdd68027c4750cda5c53a"
  },
  {
    "url": "senior/4.component/2.dropdown.html",
    "revision": "6f76072f0c518e9eb96715dcd8a5ef94"
  },
  {
    "url": "senior/4.component/3.dialog.html",
    "revision": "e6c407510cbcdce02d1951feb24aa9b5"
  },
  {
    "url": "senior/4.component/3.form.html",
    "revision": "3aea22505a286cc11db5e7e9ea2cd194"
  },
  {
    "url": "senior/4.component/4.input.html",
    "revision": "922b56435c6c62ce20890ba560a7834b"
  },
  {
    "url": "senior/4.component/4.render.html",
    "revision": "f6525b92fe54a83c8d19b6da3341dab7"
  },
  {
    "url": "senior/4.component/5.checkBox.html",
    "revision": "b3a019cf22cc8a494f1b49854be85b09"
  },
  {
    "url": "senior/4.component/6.cascader.html",
    "revision": "27c09d4457ca65a368f5574e1231efa4"
  },
  {
    "url": "senior/4.component/7.date.html",
    "revision": "cfcc7ac22eb583b6d77fa83f74d8fafe"
  },
  {
    "url": "senior/4.component/8.dispaly.html",
    "revision": "38dcf3a78ecbdb821a1a581334576aa2"
  },
  {
    "url": "senior/4.component/9.alert.html",
    "revision": "7bf23b398b520d8baa80838fd5d5add2"
  },
  {
    "url": "senior/4.component/9.dynamics.html",
    "revision": "d8a3d10451265a02c7c8c292b8ea9e4e"
  },
  {
    "url": "source/vue-cli2.x/1.index.html",
    "revision": "d9d363d5a6ad0ebf0b5eb09f7bd8eab0"
  },
  {
    "url": "source/vue-cli3.x/1.index.html",
    "revision": "0097886d28c9b2ed47d6ee479c2f05b5"
  },
  {
    "url": "source/vue-router3.x/1.index.html",
    "revision": "df9f18c77519d0ac7250dd9e663733b5"
  },
  {
    "url": "source/vue-router3.x/2.origin.html",
    "revision": "db68c7d10f2bdd4014be47bcfff72d9b"
  },
  {
    "url": "source/vue-router4.x/1.index.html",
    "revision": "084298b719ecc55665f1a91b1d93301d"
  },
  {
    "url": "source/vue2.x/1.index.html",
    "revision": "2cac8c5de69b2ed4b6b8398326ae3dcf"
  },
  {
    "url": "source/vue2.x/10.optimize.html",
    "revision": "0c5068e27b43bd2df10bec337452917d"
  },
  {
    "url": "source/vue2.x/11.gencode.html",
    "revision": "4a49e79ccf4b44485461645ac3b2f404"
  },
  {
    "url": "source/vue2.x/12.mount.html",
    "revision": "c2e048b37ce16979aa160d39fd5314c7"
  },
  {
    "url": "source/vue2.x/13._render.html",
    "revision": "e1d0aa8782082caf6946391d009519ff"
  },
  {
    "url": "source/vue2.x/14._update.html",
    "revision": "92a3197f1d9cc6706cf372731fc35245"
  },
  {
    "url": "source/vue2.x/2.initGlobalAPI.html",
    "revision": "217c92201a5962ac291a3865f35ea31a"
  },
  {
    "url": "source/vue2.x/3.initMixin.html",
    "revision": "89ebff5831f483c5a8f7ec19b24b5182"
  },
  {
    "url": "source/vue2.x/4.stateMixin.html",
    "revision": "a2b20d85224516c347f7e056121326c0"
  },
  {
    "url": "source/vue2.x/5.eventsMixin.html",
    "revision": "1c421fc5ee4beddb44b5e650ff312f07"
  },
  {
    "url": "source/vue2.x/6.lifecycleMixin.html",
    "revision": "0ef29d3a9425a23bf35bf3066491943a"
  },
  {
    "url": "source/vue2.x/7.renderMixin.html",
    "revision": "25309eca7cf9254af749aa4947d42c2e"
  },
  {
    "url": "source/vue2.x/8.mount.html",
    "revision": "d703e4d8cd3adc36eb2448a84746afb7"
  },
  {
    "url": "source/vue2.x/9.ast.html",
    "revision": "5d9d222bbb8702df11c9f083926daef7"
  },
  {
    "url": "source/vue3.x/1.index.html",
    "revision": "711a162df3f0bfebe2d7733eb77da584"
  },
  {
    "url": "source/vue3.x/10.optimize.html",
    "revision": "ef89a04b22505e42e12e53619af22cf3"
  },
  {
    "url": "source/vue3.x/11.gencode.html",
    "revision": "cd61e55f487c4b06512b470f84c06c0b"
  },
  {
    "url": "source/vue3.x/12.mount.html",
    "revision": "95bac3fb6840badc7a4e7835caebc8e8"
  },
  {
    "url": "source/vue3.x/13._render.html",
    "revision": "fbdc7aeea36968dfbda2d5c933523147"
  },
  {
    "url": "source/vue3.x/14._update.html",
    "revision": "015bca6cb826873e52cfc344f2aea59d"
  },
  {
    "url": "source/vue3.x/2.initGlobalAPI.html",
    "revision": "70cd7b0eeca137f4bed13c2926cdc288"
  },
  {
    "url": "source/vue3.x/3.initMixin.html",
    "revision": "238ef581226886c327a426786a6012ea"
  },
  {
    "url": "source/vue3.x/4.stateMixin.html",
    "revision": "3c68c99d6619d1a04013af5ae93fdecb"
  },
  {
    "url": "source/vue3.x/5.eventsMixin.html",
    "revision": "4fd165330ba207dd1acf88f24f9af616"
  },
  {
    "url": "source/vue3.x/6.lifecycleMixin.html",
    "revision": "7688bb1687e595379bbd9c14fde92d2f"
  },
  {
    "url": "source/vue3.x/7.renderMixin.html",
    "revision": "f64765189ffce6cd338f2e3639c868cc"
  },
  {
    "url": "source/vue3.x/8.mount.html",
    "revision": "6bffd026f4c1769e9fef8f521ae4ca3b"
  },
  {
    "url": "source/vue3.x/9.ast.html",
    "revision": "ccc8d9661f80879b8d8b0cba45f8f80e"
  },
  {
    "url": "source/vuex3.x/1.index.html",
    "revision": "0a3fedb662dabc0c15fc4a97cde36256"
  },
  {
    "url": "source/vuex3.x/2.use.html",
    "revision": "0fc54dffa4758ddf4ee96e9e0e2a49ee"
  },
  {
    "url": "source/vuex3.x/3.origin.html",
    "revision": "d6ce00cc92567c386dd08ac5e2f0f9c9"
  },
  {
    "url": "source/vuex4.x/1.index.html",
    "revision": "c38662ad79976b3c25ba505578c55c3e"
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
