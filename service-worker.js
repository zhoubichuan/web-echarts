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
    "revision": "922459d511660c29bf1602a78257bcd2"
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
    "url": "assets/js/122.3b1441bf.js",
    "revision": "4a733659b38b733fbcff91e9251b2f5b"
  },
  {
    "url": "assets/js/123.4fbcb534.js",
    "revision": "f2606febf8107c21813cb68f77a3156f"
  },
  {
    "url": "assets/js/124.1c59bcb7.js",
    "revision": "ce1e7ee69bcb34e6d93546bba5804414"
  },
  {
    "url": "assets/js/125.d9cc8676.js",
    "revision": "88a53e5a0c796b59c1e3557fbd49fe37"
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
    "url": "assets/js/37.811ba12b.js",
    "revision": "96a706e8216d299dd60641702ddb16f7"
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
    "revision": "cf8747345c76aa2b407421f5ab0b53c3"
  },
  {
    "url": "base/api/1.index.html",
    "revision": "ad5b85ca9f485364c7bc5e7f628e7437"
  },
  {
    "url": "base/api/2.echartsInstance.html",
    "revision": "477c26fb4dfb38f8d139242d248047de"
  },
  {
    "url": "base/api/3.action.html",
    "revision": "027a5a27313fc8a25f9232f73bb30c4d"
  },
  {
    "url": "base/api/4.events.html",
    "revision": "5774d5e64557543322b81e2325b7e787"
  },
  {
    "url": "base/components/1.index.html",
    "revision": "c1a79b5deb474e773e6cf657e637b0af"
  },
  {
    "url": "base/components/1.legend.html",
    "revision": "ec5ab10151e16aa258bc10ca395d5411"
  },
  {
    "url": "base/components/2.grid.html",
    "revision": "c1937c9657cddc345ea0b7fc7bba50ce"
  },
  {
    "url": "base/components/2.polar.html",
    "revision": "d207f8d96112616917d2d3a169a37d4d"
  },
  {
    "url": "base/components/2.radiusAxis.html",
    "revision": "e11e6777162b089cb68274b86e94ed59"
  },
  {
    "url": "base/components/2.xAxis.html",
    "revision": "5beb5def46e6e71dfa172832566e7dab"
  },
  {
    "url": "base/components/2.yAxis.html",
    "revision": "7262a32bedcfe42490d2c2fb18164290"
  },
  {
    "url": "base/components/3.angleAxis.html",
    "revision": "a6c9cb726779cbdacede46f16f299e11"
  },
  {
    "url": "base/components/4.radar.html",
    "revision": "e401303161c571d475f74691f0725b1d"
  },
  {
    "url": "base/components/5.dataZoom.html",
    "revision": "31a83d20215e5b5aa29abd56cd8e9b59"
  },
  {
    "url": "base/components/6.visualMap.html",
    "revision": "14525bd0973bbd079321dc5e4af91157"
  },
  {
    "url": "base/components/7.tooltip.html",
    "revision": "0cd683f78e0f82280955def07c3cefff"
  },
  {
    "url": "base/components/8.geo.html",
    "revision": "fa85d99dc42c63d3ebbb0e711071b34c"
  },
  {
    "url": "base/gl/1.index.html",
    "revision": "bd164eda3c9a2f32525219a8c613bd6d"
  },
  {
    "url": "base/gl/1.scatter3D.html",
    "revision": "b3487b99a4c46c718c8d5329c630aca9"
  },
  {
    "url": "base/gl/10.flowGL.html",
    "revision": "897cb42e2a7cb4db41910c263808d669"
  },
  {
    "url": "base/gl/2.bar3D.html",
    "revision": "c1dc8b07e2abd761595b95e3fa771e1e"
  },
  {
    "url": "base/gl/3.line3D.html",
    "revision": "71984014859ae1fce64087951da1e54c"
  },
  {
    "url": "base/gl/4.lines3D.html",
    "revision": "4535d9d982da82495cd765d9315838b8"
  },
  {
    "url": "base/gl/5.map3D.html",
    "revision": "1d3124894e455cf2dee50f0c3664d423"
  },
  {
    "url": "base/gl/6.surface.html",
    "revision": "d555795eb982abb593185dbb393946e0"
  },
  {
    "url": "base/gl/7.polygons3D.html",
    "revision": "9c7b299f8009059883706e0fd7800c98"
  },
  {
    "url": "base/gl/8.scatterGL.html",
    "revision": "2c54d6d73303bcce2df84fdd7024844b"
  },
  {
    "url": "base/gl/9.graphGL.html",
    "revision": "0a0dd5d7d0fc9de7ab0342a0667d340f"
  },
  {
    "url": "base/series/1.index.html",
    "revision": "2260c238dfe5651b11abef2c15ab0c97"
  },
  {
    "url": "base/series/1.line.html",
    "revision": "572822b0f96e66b561e8fa1a5ee9b1c0"
  },
  {
    "url": "base/series/10.boxplot.html",
    "revision": "c5b752c1a5d86ec303928964ccce483d"
  },
  {
    "url": "base/series/11.candlestick.html",
    "revision": "44d69a20186ac52ef3bf5370d5e6938d"
  },
  {
    "url": "base/series/12.heatmap.html",
    "revision": "34058be809be9b677602b751ec11aea8"
  },
  {
    "url": "base/series/13.map.html",
    "revision": "cc8c5e344168f5306bc4c4fda1be17cb"
  },
  {
    "url": "base/series/14.parallel.html",
    "revision": "2e2b0f85b01a40349b55f3338e6bc8ac"
  },
  {
    "url": "base/series/15.lines.html",
    "revision": "9af53528be99262c8eb9ec8ebe79f9aa"
  },
  {
    "url": "base/series/16.graph.html",
    "revision": "5c3a7e9aba22c39fbc0bf7f95df57a5f"
  },
  {
    "url": "base/series/17.sankey.html",
    "revision": "80973330081da4240abbd9f3a09ae8ac"
  },
  {
    "url": "base/series/18.funnel.html",
    "revision": "48c4943986adc9f84b21d13924790165"
  },
  {
    "url": "base/series/19.gauge.html",
    "revision": "a33fbfe76fb3cd091ea1ce1fa3f994ca"
  },
  {
    "url": "base/series/2.bar.html",
    "revision": "42c8da3f2779e66fcdde6e8edc0e986b"
  },
  {
    "url": "base/series/20.pictorialBar.html",
    "revision": "997441b7419314e4c3222f9f81180ed6"
  },
  {
    "url": "base/series/21.themeRiver.html",
    "revision": "a62cd78cab68050a676e6328fcf9be3b"
  },
  {
    "url": "base/series/22.custom.html",
    "revision": "53e1589215f904392a1374b4c429c492"
  },
  {
    "url": "base/series/3.pie.html",
    "revision": "318baf2f78486e0cc5a149760d1be882"
  },
  {
    "url": "base/series/4.scatter.html",
    "revision": "3b4653a40ccdc217a331b51d010eec6d"
  },
  {
    "url": "base/series/5.effectScatter.html",
    "revision": "c96eedf602d8cc7152c35b8ea8b1d976"
  },
  {
    "url": "base/series/6.radar.html",
    "revision": "240eae84f51e4f5c31744d7abdee75d0"
  },
  {
    "url": "base/series/7.tree.html",
    "revision": "a5dda778b5495afb2ad1492c0eff6b8d"
  },
  {
    "url": "base/series/8.treemap.html",
    "revision": "67b0e5b6b0880bcf80876353d3581711"
  },
  {
    "url": "base/series/9.sunburst.html",
    "revision": "ad42333cdefe7646a1ef77e269f6a668"
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
    "revision": "5069fb7c3c7b9e1d764efd8fe49fa642"
  },
  {
    "url": "mock/http.js",
    "revision": "a219140640bec4dfbe8f4fe88d351ed8"
  },
  {
    "url": "senior/1.micro/1.index.html",
    "revision": "9f8e768c6dd2a17c65b63c6ef93f2fd6"
  },
  {
    "url": "senior/1.micro/1.singlespa.html",
    "revision": "f98f8fa68ba0635fcc16f9687fc9e95b"
  },
  {
    "url": "senior/1.micro/1.singlespa2.html",
    "revision": "ada09ad82f454044d0486a39a35003f5"
  },
  {
    "url": "senior/1.micro/2.qiankun.html",
    "revision": "8748ce97f8bd96bd9907b2cd0690dae1"
  },
  {
    "url": "senior/1.micro/2.qiankun2.html",
    "revision": "7e427b7c07008be1f6a32176d01f5e2d"
  },
  {
    "url": "senior/1.micro/3.share.html",
    "revision": "28be1ad1c54a2ba9876d079c657048d7"
  },
  {
    "url": "senior/1.micro/4.dev.html",
    "revision": "2a985ac9e216d5293514e634ceeee1d3"
  },
  {
    "url": "senior/2.typescript/1.env.html",
    "revision": "63673079c2d193360f0043f812dc285d"
  },
  {
    "url": "senior/2.typescript/1.index.html",
    "revision": "d34e6e73acb157f85dbb44f149115bce"
  },
  {
    "url": "senior/2.typescript/10.infer.html",
    "revision": "3fb6d46b318922ab56e141501868cd2a"
  },
  {
    "url": "senior/2.typescript/11.overlapping.html",
    "revision": "51391ea7d0ff5810e08aac348d573cfb"
  },
  {
    "url": "senior/2.typescript/12.condition.html",
    "revision": "08b19820d7e896fd079f4f1e1cfd1e30"
  },
  {
    "url": "senior/2.typescript/13.builtin.html",
    "revision": "a9548484e0f732c4edf5cb62120fb3ed"
  },
  {
    "url": "senior/2.typescript/14.package.html",
    "revision": "ecb0c66ab7ec86ebd54e3dc55029f205"
  },
  {
    "url": "senior/2.typescript/15.custom.html",
    "revision": "b86f950c3ae1366eb3ad7f29fb82fcbe"
  },
  {
    "url": "senior/2.typescript/16.unknown.html",
    "revision": "444b6832c16ae37f9392e1cf36fe475d"
  },
  {
    "url": "senior/2.typescript/17.module.html",
    "revision": "2ec6cba1b70e47b3fb98766f09b1fb71"
  },
  {
    "url": "senior/2.typescript/18.statement.html",
    "revision": "b5ab00a34be01468668469c47059191e"
  },
  {
    "url": "senior/2.typescript/19.extend.html",
    "revision": "23e7e3a7830ff8e77d3bbacdb4e4ed80"
  },
  {
    "url": "senior/2.typescript/2.base.html",
    "revision": "e29793cbd3af3bb57891b8e7cb2c98db"
  },
  {
    "url": "senior/2.typescript/3.deduction.html",
    "revision": "ad86adec88f014d0600994d85c88fa2e"
  },
  {
    "url": "senior/2.typescript/4.type.html",
    "revision": "52107dbf485c12152cde2fac33e72e6e"
  },
  {
    "url": "senior/2.typescript/5.class.html",
    "revision": "745d2883180931030ae39c07c6a21474"
  },
  {
    "url": "senior/2.typescript/6.interface.html",
    "revision": "446042883926493f9a53b4704e190337"
  },
  {
    "url": "senior/2.typescript/7.generic.html",
    "revision": "d8cff1c7b1d641eed3227fcbd7268e17"
  },
  {
    "url": "senior/2.typescript/8.compatible.html",
    "revision": "c590d4782e20589f2a1a3ee6d35407d5"
  },
  {
    "url": "senior/2.typescript/9.protect.html",
    "revision": "ba23a14803c0a8143eb9f40d2edfe386"
  },
  {
    "url": "senior/3.deploy/1.index.html",
    "revision": "1c9d3c9b849fdf1434da5d9634ee102a"
  },
  {
    "url": "senior/3.deploy/1.local.html",
    "revision": "d62bbfdae220ba38f5b87520f93a45c6"
  },
  {
    "url": "senior/3.deploy/2.gitlab.html",
    "revision": "461cbc717c7bd204d15a5ba3d4d74e01"
  },
  {
    "url": "senior/3.deploy/3.genkins.html",
    "revision": "9c005290dbc8506937d87970fe61de6b"
  },
  {
    "url": "senior/3.deploy/4.centos.html",
    "revision": "e38f96c48730cacacf1df2e4ee1e0d09"
  },
  {
    "url": "senior/3.deploy/5.nginx.html",
    "revision": "2d16984d8e3abc50a2a1dff45ba43df2"
  },
  {
    "url": "senior/4.component/1.button.html",
    "revision": "3c009645c850d05e4d06c45c69ccedba"
  },
  {
    "url": "senior/4.component/1.env.html",
    "revision": "2f7c729c3216edb3f5ea41f24deeb5f4"
  },
  {
    "url": "senior/4.component/1.index.html",
    "revision": "910782d6cd036a58d4d49344ec225cb3"
  },
  {
    "url": "senior/4.component/1.recursion.html",
    "revision": "10b8d6bcdb2824881cb579a90eef8401"
  },
  {
    "url": "senior/4.component/10.tree.html",
    "revision": "153aaabc5b74ccf43f035e2d27d05192"
  },
  {
    "url": "senior/4.component/12.table.html",
    "revision": "93ce3f81b94c71c4d9cbc4aff3dee498"
  },
  {
    "url": "senior/4.component/13.publish.html",
    "revision": "b48b42a5c697e027bb476d3b3dbd13d8"
  },
  {
    "url": "senior/4.component/2.dropdown.html",
    "revision": "afbd388bb6141cc67f20b75928ce2f05"
  },
  {
    "url": "senior/4.component/3.dialog.html",
    "revision": "94b67193d760ba139e84253bab7a6e3a"
  },
  {
    "url": "senior/4.component/3.form.html",
    "revision": "621df914246b19d32aa9c96794aa6937"
  },
  {
    "url": "senior/4.component/4.input.html",
    "revision": "9875bf2151377337cd7c9adcc214b44c"
  },
  {
    "url": "senior/4.component/4.render.html",
    "revision": "0b6d908c0e6be53f19c58a886519edb6"
  },
  {
    "url": "senior/4.component/5.checkBox.html",
    "revision": "88996596eb366e1aaf789d2f7369cd4d"
  },
  {
    "url": "senior/4.component/6.cascader.html",
    "revision": "41e08ccc84917d1163c12958640d2852"
  },
  {
    "url": "senior/4.component/7.date.html",
    "revision": "2024fa692425d742f5f0eea815d2c0c5"
  },
  {
    "url": "senior/4.component/8.dispaly.html",
    "revision": "c15f6d098d9c723799f715bede707d97"
  },
  {
    "url": "senior/4.component/9.alert.html",
    "revision": "3d5def944b5f0d75b2ecc737fbf22e30"
  },
  {
    "url": "senior/4.component/9.dynamics.html",
    "revision": "2e3654dd18935810da57fcec0844272b"
  },
  {
    "url": "source/vue-cli2.x/1.index.html",
    "revision": "8693a365c265efaf06e571e0f95f54f0"
  },
  {
    "url": "source/vue-cli3.x/1.index.html",
    "revision": "27e48cf20c2bd81133ff007f95067f40"
  },
  {
    "url": "source/vue-router3.x/1.index.html",
    "revision": "195fb4feb257bcc2c82e7fdb9e3a5010"
  },
  {
    "url": "source/vue-router3.x/2.origin.html",
    "revision": "ebf25911edd8177dff4e7f980d20f48a"
  },
  {
    "url": "source/vue-router4.x/1.index.html",
    "revision": "68119fc35acb8c607b11b49be4346ec3"
  },
  {
    "url": "source/vue2.x/1.index.html",
    "revision": "313e2a6fdc049235d51c1969ee5718d1"
  },
  {
    "url": "source/vue2.x/10.optimize.html",
    "revision": "c2751bae4c6e93d407b2e28447f74b32"
  },
  {
    "url": "source/vue2.x/11.gencode.html",
    "revision": "dedf0669abb31f01d1f0d67a5ae5c3cc"
  },
  {
    "url": "source/vue2.x/12.mount.html",
    "revision": "535485fa553f9c433ba47edb98166a09"
  },
  {
    "url": "source/vue2.x/13._render.html",
    "revision": "ddcf24c9caba622298c77a1c4033eda2"
  },
  {
    "url": "source/vue2.x/14._update.html",
    "revision": "1e20345133d6d89dac01894c7098b7dd"
  },
  {
    "url": "source/vue2.x/2.initGlobalAPI.html",
    "revision": "b6ae275bf6ee54f2301fc7d144774a9d"
  },
  {
    "url": "source/vue2.x/3.initMixin.html",
    "revision": "ec5ea6bc2c1563ba722761b484091916"
  },
  {
    "url": "source/vue2.x/4.stateMixin.html",
    "revision": "c9d05618f313c75959224c65ac565a48"
  },
  {
    "url": "source/vue2.x/5.eventsMixin.html",
    "revision": "ad8d77159f89e97c75d4e842ba93fe92"
  },
  {
    "url": "source/vue2.x/6.lifecycleMixin.html",
    "revision": "53a0c2e213928cf3a5565b0af8a5a725"
  },
  {
    "url": "source/vue2.x/7.renderMixin.html",
    "revision": "c6f77a83d15dfaf6dee080675ff8b9b4"
  },
  {
    "url": "source/vue2.x/8.mount.html",
    "revision": "c06654ce7120311b808a31442db88d6e"
  },
  {
    "url": "source/vue2.x/9.ast.html",
    "revision": "18259ee4d4330954eb32344c133ae7a7"
  },
  {
    "url": "source/vue3.x/1.index.html",
    "revision": "c5b6404da215b0604009434e7636ffd5"
  },
  {
    "url": "source/vue3.x/10.optimize.html",
    "revision": "f8a8bdaa6fb79c2bcc3e438e35456aea"
  },
  {
    "url": "source/vue3.x/11.gencode.html",
    "revision": "976727169c6649fa171ab4a3cd124368"
  },
  {
    "url": "source/vue3.x/12.mount.html",
    "revision": "c743a42b67c2d5f7e342033421d23e37"
  },
  {
    "url": "source/vue3.x/13._render.html",
    "revision": "fdb7c506cfacab5ec3aacad3de9fea9a"
  },
  {
    "url": "source/vue3.x/14._update.html",
    "revision": "f8eeb7694d30e9b50be512e29b789b09"
  },
  {
    "url": "source/vue3.x/2.initGlobalAPI.html",
    "revision": "93d9bc5e6b0e0314591cd7c03b71b4b2"
  },
  {
    "url": "source/vue3.x/3.initMixin.html",
    "revision": "e16fc69344a37bfd1b02136c58f94ae6"
  },
  {
    "url": "source/vue3.x/4.stateMixin.html",
    "revision": "9e116f3fbbe963011dd8e60b242c8c82"
  },
  {
    "url": "source/vue3.x/5.eventsMixin.html",
    "revision": "857c1cd91b98996a024466a292213ef0"
  },
  {
    "url": "source/vue3.x/6.lifecycleMixin.html",
    "revision": "026978bff0e0f693e09761979e73c264"
  },
  {
    "url": "source/vue3.x/7.renderMixin.html",
    "revision": "8eced76e4134e6e708b859016c2c836d"
  },
  {
    "url": "source/vue3.x/8.mount.html",
    "revision": "7244a9d670cdbadc7e7a897fca5dd02a"
  },
  {
    "url": "source/vue3.x/9.ast.html",
    "revision": "4bbc69e456e11cae4a8db2221b006c3b"
  },
  {
    "url": "source/vuex3.x/1.index.html",
    "revision": "3a8ea9d9b88d67f865afc6d315941d2b"
  },
  {
    "url": "source/vuex3.x/2.use.html",
    "revision": "024b4bac0fd3d86e197289b91dbad556"
  },
  {
    "url": "source/vuex3.x/3.origin.html",
    "revision": "bc7ff80459140dd326cc2ed38638a0ff"
  },
  {
    "url": "source/vuex4.x/1.index.html",
    "revision": "e54b7eb1f93a255ef5ea9556bf7c7cd2"
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
