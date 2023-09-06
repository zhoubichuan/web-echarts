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
    "revision": "973113775e92d817e8e9fc97bf6d1d28"
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
    "url": "assets/js/37.6e0bd74b.js",
    "revision": "cc5bc3ab7779bf146c5f382acbd53f61"
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
    "revision": "be9df09ad39afb62acf143ec23a3a6fc"
  },
  {
    "url": "base/api/1.index.html",
    "revision": "7dcc19dce3d33cccf33e4b4fd99040d0"
  },
  {
    "url": "base/api/2.echartsInstance.html",
    "revision": "47863263d491380f39de49f60ec1ab54"
  },
  {
    "url": "base/api/3.action.html",
    "revision": "d4745c4bb76bf8fb946c5ce439cd1665"
  },
  {
    "url": "base/api/4.events.html",
    "revision": "8b9b13417df8071afeef4fe5e408bef6"
  },
  {
    "url": "base/components/1.index.html",
    "revision": "b60e85d7c4bf4a8d5c6a32235e70155c"
  },
  {
    "url": "base/components/1.legend.html",
    "revision": "24f8eb73d85a45018f8e7fe054c38fa8"
  },
  {
    "url": "base/components/2.grid.html",
    "revision": "dc08a12cf2f09c75e55041935c85bb03"
  },
  {
    "url": "base/components/2.polar.html",
    "revision": "d1f807bb3c089ee57639e5a7f351c62f"
  },
  {
    "url": "base/components/2.radiusAxis.html",
    "revision": "28e4eaf2a358ac37e77f05c68926873a"
  },
  {
    "url": "base/components/2.xAxis.html",
    "revision": "d058424cb23aa5ab8490f3e6a90794bc"
  },
  {
    "url": "base/components/2.yAxis.html",
    "revision": "f1f8f81bc60ab6520274c7933e411d9c"
  },
  {
    "url": "base/components/3.angleAxis.html",
    "revision": "b12a6b276ce8c8bea38401c057716541"
  },
  {
    "url": "base/components/4.radar.html",
    "revision": "acbeb4e1560086177833643df9a8d26d"
  },
  {
    "url": "base/components/5.dataZoom.html",
    "revision": "88cd9fd76868f4c8fac922d42be3baff"
  },
  {
    "url": "base/components/6.visualMap.html",
    "revision": "46bf63d7fae9ca3856630f3f513471e9"
  },
  {
    "url": "base/components/7.tooltip.html",
    "revision": "bb457a2cddf7d1ca8271a0d7324f3317"
  },
  {
    "url": "base/components/8.geo.html",
    "revision": "7bb67b594f1196ec273d11952c91ed44"
  },
  {
    "url": "base/gl/1.index.html",
    "revision": "3f3c884f92af2d0df868323c81b3e8b7"
  },
  {
    "url": "base/gl/1.scatter3D.html",
    "revision": "7e22d96555bc416a6a0cf45d2ef2ec4f"
  },
  {
    "url": "base/gl/10.flowGL.html",
    "revision": "39f5f92e6279051b4d1e067ceeea4161"
  },
  {
    "url": "base/gl/2.bar3D.html",
    "revision": "81d2278a2ce192a5e7e39c9b56741a05"
  },
  {
    "url": "base/gl/3.line3D.html",
    "revision": "5d5626bfb81506f980f5c4b1b378f557"
  },
  {
    "url": "base/gl/4.lines3D.html",
    "revision": "4276f0d479522700b29e994b1a0fd637"
  },
  {
    "url": "base/gl/5.map3D.html",
    "revision": "1e27eaae91d9bc14805002d3d2901f10"
  },
  {
    "url": "base/gl/6.surface.html",
    "revision": "c24c3607c1daf84d8e0680a3112d94f0"
  },
  {
    "url": "base/gl/7.polygons3D.html",
    "revision": "ac891c2c9126545e50ed5229c7ea7ed2"
  },
  {
    "url": "base/gl/8.scatterGL.html",
    "revision": "8f3dc1f688e3efc072be772b29383aa5"
  },
  {
    "url": "base/gl/9.graphGL.html",
    "revision": "338d17a99fe09382493c6bcbe0c38d8e"
  },
  {
    "url": "base/series/1.index.html",
    "revision": "f030bb08d32edb4227d2c0699b4451d7"
  },
  {
    "url": "base/series/1.line.html",
    "revision": "7169fe0cab91ae0a5a87cbbb9db87879"
  },
  {
    "url": "base/series/10.boxplot.html",
    "revision": "21de33b011a2d168ad3454abc5231d0d"
  },
  {
    "url": "base/series/11.candlestick.html",
    "revision": "f730281fedcc22b3b684d8bc052e5d91"
  },
  {
    "url": "base/series/12.heatmap.html",
    "revision": "4f8c0750727c2ad2cb6af0079c598a9f"
  },
  {
    "url": "base/series/13.map.html",
    "revision": "f1b319765b62a8d6f4f6ae4fcc703670"
  },
  {
    "url": "base/series/14.parallel.html",
    "revision": "93d43ccb7415f28b9801eb7400963bd2"
  },
  {
    "url": "base/series/15.lines.html",
    "revision": "a6abd6c4f7c54e3bac0ed7f8946ed659"
  },
  {
    "url": "base/series/16.graph.html",
    "revision": "2454349b38d5805db857371862752884"
  },
  {
    "url": "base/series/17.sankey.html",
    "revision": "a417288ef322d45232f44a42cc514115"
  },
  {
    "url": "base/series/18.funnel.html",
    "revision": "7838b5b0ba910bc2764ac906f79c78ed"
  },
  {
    "url": "base/series/19.gauge.html",
    "revision": "fa7baf02b8ec2431bf1db7910c97952a"
  },
  {
    "url": "base/series/2.bar.html",
    "revision": "a26e5854221be87ba88d2f31661574ff"
  },
  {
    "url": "base/series/20.pictorialBar.html",
    "revision": "64fbfcb0b2d26c1b87ecaf667e1f3c94"
  },
  {
    "url": "base/series/21.themeRiver.html",
    "revision": "6a4e99ee5f76c969b470309eb9dc20a4"
  },
  {
    "url": "base/series/22.custom.html",
    "revision": "70e8d030d39151b8172614a52d90f1db"
  },
  {
    "url": "base/series/3.pie.html",
    "revision": "c876dc67e2cde7007d25ac01ebd32343"
  },
  {
    "url": "base/series/4.scatter.html",
    "revision": "14a860c585d99e27f9bb83974056c6e3"
  },
  {
    "url": "base/series/5.effectScatter.html",
    "revision": "a4952f4a3a034bae3e450946a8662b44"
  },
  {
    "url": "base/series/6.radar.html",
    "revision": "9c1811978a8b4aa0c885db0e7ca9cf54"
  },
  {
    "url": "base/series/7.tree.html",
    "revision": "53ccbd79d068565afb88c8cbcb75273d"
  },
  {
    "url": "base/series/8.treemap.html",
    "revision": "b73a29dc4aafe79d5b3de577c9c172c8"
  },
  {
    "url": "base/series/9.sunburst.html",
    "revision": "ccf7534a640c882ddaf84c332b2306f0"
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
    "revision": "aba43fb80a4ab4fd72d7748cb1e5aaa7"
  },
  {
    "url": "mock/http.js",
    "revision": "a219140640bec4dfbe8f4fe88d351ed8"
  },
  {
    "url": "senior/1.micro/1.index.html",
    "revision": "eb648738d75c4e96d638482f5afa0698"
  },
  {
    "url": "senior/1.micro/1.singlespa.html",
    "revision": "5022d27af28ae20d356d79f869338b6f"
  },
  {
    "url": "senior/1.micro/1.singlespa2.html",
    "revision": "edb5495b7d2c31a5b3c0618371cb23dc"
  },
  {
    "url": "senior/1.micro/2.qiankun.html",
    "revision": "8b699254fd34d9b53f15511ab4e79770"
  },
  {
    "url": "senior/1.micro/2.qiankun2.html",
    "revision": "d23ec2b27644e93b45e88763b7843826"
  },
  {
    "url": "senior/1.micro/3.share.html",
    "revision": "92f80dc7417c19ecb3f8b2bda739543e"
  },
  {
    "url": "senior/1.micro/4.dev.html",
    "revision": "3b11c4ca156ed626824c6fa39c1286c1"
  },
  {
    "url": "senior/2.typescript/1.env.html",
    "revision": "8d2ae043a90e4f8f2e01e71f8b63630f"
  },
  {
    "url": "senior/2.typescript/1.index.html",
    "revision": "962db16e1f3659f9c6537eb50293ac65"
  },
  {
    "url": "senior/2.typescript/10.infer.html",
    "revision": "a932dbae5138443892cf0552a4228279"
  },
  {
    "url": "senior/2.typescript/11.overlapping.html",
    "revision": "db1e9c9a51d3f111b84d8cfd6d68fca7"
  },
  {
    "url": "senior/2.typescript/12.condition.html",
    "revision": "fdaabe6b5a079f64f684ae67079898bc"
  },
  {
    "url": "senior/2.typescript/13.builtin.html",
    "revision": "dd709cdd117a2192998b1c99197588cf"
  },
  {
    "url": "senior/2.typescript/14.package.html",
    "revision": "59032f696a94ee9f96b5f37e2e14dde1"
  },
  {
    "url": "senior/2.typescript/15.custom.html",
    "revision": "2532e55211052a05695a9749e5d9469c"
  },
  {
    "url": "senior/2.typescript/16.unknown.html",
    "revision": "9573fc9ea207927834a533582bc3f1d9"
  },
  {
    "url": "senior/2.typescript/17.module.html",
    "revision": "4035394b5222402d8351f75479c40670"
  },
  {
    "url": "senior/2.typescript/18.statement.html",
    "revision": "c2b998d899eddd1d83e85afe3008dfa4"
  },
  {
    "url": "senior/2.typescript/19.extend.html",
    "revision": "69f396eda667fb75462d7f93ef81062c"
  },
  {
    "url": "senior/2.typescript/2.base.html",
    "revision": "ee960ca3cdcc04f948e943ac6331db76"
  },
  {
    "url": "senior/2.typescript/3.deduction.html",
    "revision": "52280d58a5a1d571642ef26551e6f943"
  },
  {
    "url": "senior/2.typescript/4.type.html",
    "revision": "03d8eb12ba6ac1bca6bbc08104f741c2"
  },
  {
    "url": "senior/2.typescript/5.class.html",
    "revision": "5407e01fbfedef472e0807f2343e16af"
  },
  {
    "url": "senior/2.typescript/6.interface.html",
    "revision": "8098bab914bbdb79b73aff0e644d8cd3"
  },
  {
    "url": "senior/2.typescript/7.generic.html",
    "revision": "80067f23f22f388391fc222644aee87d"
  },
  {
    "url": "senior/2.typescript/8.compatible.html",
    "revision": "e769b02c9579745a9d4fe4cdd9108bb5"
  },
  {
    "url": "senior/2.typescript/9.protect.html",
    "revision": "f5b0bf95598e11241a5aaf9728b1b0f7"
  },
  {
    "url": "senior/3.deploy/1.index.html",
    "revision": "7b6239657f01dd33905430a05e6808d3"
  },
  {
    "url": "senior/3.deploy/1.local.html",
    "revision": "1e9deceba7d9e42e5b211c41faf3c9eb"
  },
  {
    "url": "senior/3.deploy/2.gitlab.html",
    "revision": "b88ecd5db82b4e232a042a754a44011e"
  },
  {
    "url": "senior/3.deploy/3.genkins.html",
    "revision": "fe7ee0f4b58456dcf0c77ebe7d931ed4"
  },
  {
    "url": "senior/3.deploy/4.centos.html",
    "revision": "fe3918d71c12856259aa32182de33d85"
  },
  {
    "url": "senior/3.deploy/5.nginx.html",
    "revision": "a0ea3954bba9e024b286968c1301592c"
  },
  {
    "url": "senior/4.component/1.button.html",
    "revision": "241a2808010aee43431f7d5ed41aba8c"
  },
  {
    "url": "senior/4.component/1.env.html",
    "revision": "38fb97e7c65596b030b0247ed56edaca"
  },
  {
    "url": "senior/4.component/1.index.html",
    "revision": "def9e79fe0bfff393ce0e604a0a39fdd"
  },
  {
    "url": "senior/4.component/1.recursion.html",
    "revision": "ea4891cc72566c1dbeb0c7ddb674434c"
  },
  {
    "url": "senior/4.component/10.tree.html",
    "revision": "ed88839ac811417b37c56e02c7f51dab"
  },
  {
    "url": "senior/4.component/12.table.html",
    "revision": "01afca2d404ac9b066ced504ce39b2c0"
  },
  {
    "url": "senior/4.component/13.publish.html",
    "revision": "1a7cf405344ee99d1aa88cb3b33b2a17"
  },
  {
    "url": "senior/4.component/2.dropdown.html",
    "revision": "7bfe5fb1b56aded83b6a0dc3eef5b26d"
  },
  {
    "url": "senior/4.component/3.dialog.html",
    "revision": "4a605c447318c759bf651589425ad7b8"
  },
  {
    "url": "senior/4.component/3.form.html",
    "revision": "2245857fd9589b55ad721f40e3d0d00b"
  },
  {
    "url": "senior/4.component/4.input.html",
    "revision": "037b7f66df37b485e798df3b9026fdc0"
  },
  {
    "url": "senior/4.component/4.render.html",
    "revision": "8bde2aed6a758943b2250f7dfdcf09c7"
  },
  {
    "url": "senior/4.component/5.checkBox.html",
    "revision": "0c206ecd663e47b1e1d1dfd6666bc073"
  },
  {
    "url": "senior/4.component/6.cascader.html",
    "revision": "078c052e1ec693b6a0c9b64d1395f8ee"
  },
  {
    "url": "senior/4.component/7.date.html",
    "revision": "93d39404e47154721d289b3acda09103"
  },
  {
    "url": "senior/4.component/8.dispaly.html",
    "revision": "d312edf3267bd834f4829650b9ceafbd"
  },
  {
    "url": "senior/4.component/9.alert.html",
    "revision": "7347d4a9a78cc9f808a082daea694cea"
  },
  {
    "url": "senior/4.component/9.dynamics.html",
    "revision": "36f4e85ce871f1bd4fa24fdfe299d820"
  },
  {
    "url": "source/vue-cli2.x/1.index.html",
    "revision": "ad67dbb0ead0f3f2e558cfabd260661b"
  },
  {
    "url": "source/vue-cli3.x/1.index.html",
    "revision": "62492d9380d7965bf262b8bf7d295561"
  },
  {
    "url": "source/vue-router3.x/1.index.html",
    "revision": "44000fecc70fa9a3e731576c3c2d8d3d"
  },
  {
    "url": "source/vue-router3.x/2.origin.html",
    "revision": "c523e81fb6c932b92d97048bc036c0b7"
  },
  {
    "url": "source/vue-router4.x/1.index.html",
    "revision": "74e8652e0bf06f09436bb5759495e758"
  },
  {
    "url": "source/vue2.x/1.index.html",
    "revision": "68f0ffecdcf7aad3940773483f7e1cda"
  },
  {
    "url": "source/vue2.x/10.optimize.html",
    "revision": "c7d0627eab11b5de4bc4043820dc6d12"
  },
  {
    "url": "source/vue2.x/11.gencode.html",
    "revision": "0e9667206a37b69d506f46c6a09563a4"
  },
  {
    "url": "source/vue2.x/12.mount.html",
    "revision": "f4dd12dabf58befb8205f8e2033352c6"
  },
  {
    "url": "source/vue2.x/13._render.html",
    "revision": "4acbe41349dee7fe6c31c83ccfb09f56"
  },
  {
    "url": "source/vue2.x/14._update.html",
    "revision": "53f3c8bc65465a17d53c39e9c9efaf47"
  },
  {
    "url": "source/vue2.x/2.initGlobalAPI.html",
    "revision": "a92108ce17dec6e0acade34b363889ea"
  },
  {
    "url": "source/vue2.x/3.initMixin.html",
    "revision": "ecb0203ba8e2f617b823c0cae80f0b99"
  },
  {
    "url": "source/vue2.x/4.stateMixin.html",
    "revision": "8b523d14a901f15615101b80c8ac03c4"
  },
  {
    "url": "source/vue2.x/5.eventsMixin.html",
    "revision": "0e1af868d1bf8e2859e71744c3c46dd8"
  },
  {
    "url": "source/vue2.x/6.lifecycleMixin.html",
    "revision": "7f32d2117f1dd67956d59be0fe5433b4"
  },
  {
    "url": "source/vue2.x/7.renderMixin.html",
    "revision": "71004ba51486af63b6104fc6ef6da02c"
  },
  {
    "url": "source/vue2.x/8.mount.html",
    "revision": "d85ff1893cc2e9832931ad9882f09355"
  },
  {
    "url": "source/vue2.x/9.ast.html",
    "revision": "ac0678894efe8555eb87f93cc257a0ea"
  },
  {
    "url": "source/vue3.x/1.index.html",
    "revision": "93c982493192bdcf8e483dcd83349d7e"
  },
  {
    "url": "source/vue3.x/10.optimize.html",
    "revision": "94080f50fb3fdd5b450450f38e790fe1"
  },
  {
    "url": "source/vue3.x/11.gencode.html",
    "revision": "c045f7912ea34446f8f67280d24734d5"
  },
  {
    "url": "source/vue3.x/12.mount.html",
    "revision": "e492c89a68b80986751e7857959301e9"
  },
  {
    "url": "source/vue3.x/13._render.html",
    "revision": "b930ce77dfb57059e9e269372a7f4146"
  },
  {
    "url": "source/vue3.x/14._update.html",
    "revision": "e734518c1f43af61e17eb3e693c1e4f2"
  },
  {
    "url": "source/vue3.x/2.initGlobalAPI.html",
    "revision": "7ed5e383840ead60d21d107214f84483"
  },
  {
    "url": "source/vue3.x/3.initMixin.html",
    "revision": "d0b8ab398816b0db75af493caacc6472"
  },
  {
    "url": "source/vue3.x/4.stateMixin.html",
    "revision": "0816cc2f0b213fa211b3f20b85b868f1"
  },
  {
    "url": "source/vue3.x/5.eventsMixin.html",
    "revision": "2eb0a5e42ff605e9d690977654106c44"
  },
  {
    "url": "source/vue3.x/6.lifecycleMixin.html",
    "revision": "6b34e9b7c1c7c14d37eb9e827c4a6483"
  },
  {
    "url": "source/vue3.x/7.renderMixin.html",
    "revision": "0cac5ca5252d098300de283ddd919c54"
  },
  {
    "url": "source/vue3.x/8.mount.html",
    "revision": "711abb44bc9530c330dda31c8af512db"
  },
  {
    "url": "source/vue3.x/9.ast.html",
    "revision": "a4f155e29fc8ab5a16d97a9842de6c01"
  },
  {
    "url": "source/vuex3.x/1.index.html",
    "revision": "b3b8512047421cb9a0d2a93f602a3bd7"
  },
  {
    "url": "source/vuex3.x/2.use.html",
    "revision": "745923527e22d87117892f26550f5038"
  },
  {
    "url": "source/vuex3.x/3.origin.html",
    "revision": "f6299ddee20d28f02afc5aa87237c922"
  },
  {
    "url": "source/vuex4.x/1.index.html",
    "revision": "515904ca533df00e5cabc53e86eff07e"
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
