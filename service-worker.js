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
    "revision": "0e9af77b62d51e3946f1b46e69ab8b34"
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
    "revision": "2571e2a39e96dd832d9d0d1c6edb196b"
  },
  {
    "url": "base/api/1.index.html",
    "revision": "80a25817e35bd16fd39f093cf2ac9b48"
  },
  {
    "url": "base/api/2.echartsInstance.html",
    "revision": "fbf93ff77f26a0e6f4b7c9f1870b9017"
  },
  {
    "url": "base/api/3.action.html",
    "revision": "839d7f1ab59103f53c51d2bb8be52599"
  },
  {
    "url": "base/api/4.events.html",
    "revision": "e47b817463e825d02acc56fa4523ab58"
  },
  {
    "url": "base/components/1.index.html",
    "revision": "ad8e075d365f9a3aa1768809f38d38de"
  },
  {
    "url": "base/components/1.legend.html",
    "revision": "db08d6906b4485ed5b25422ceb89e7c7"
  },
  {
    "url": "base/components/2.grid.html",
    "revision": "8de7a84a4e42af1363f9b271b08ba5b6"
  },
  {
    "url": "base/components/2.polar.html",
    "revision": "128d58fab148d8c3bfed0cc06b4e50b6"
  },
  {
    "url": "base/components/2.radiusAxis.html",
    "revision": "7a01d28f803685871d28386ef0950bb5"
  },
  {
    "url": "base/components/2.xAxis.html",
    "revision": "9ee95aa6fd23af35c51f801499e598dc"
  },
  {
    "url": "base/components/2.yAxis.html",
    "revision": "50621f9d37d33a061ab8c6c3a8b678f8"
  },
  {
    "url": "base/components/3.angleAxis.html",
    "revision": "6c0104ca7d908ccf593f6050bc90ce12"
  },
  {
    "url": "base/components/4.radar.html",
    "revision": "d18434f2a04bd34ddc33572a8b7ade9f"
  },
  {
    "url": "base/components/5.dataZoom.html",
    "revision": "ae0b9c33ad0dc3ab52c54c91f4ea2abc"
  },
  {
    "url": "base/components/6.visualMap.html",
    "revision": "8283679fb3f82265397f8fee433b1249"
  },
  {
    "url": "base/components/7.tooltip.html",
    "revision": "f443502530983f1dcf7b3fabfb3a6bed"
  },
  {
    "url": "base/components/8.geo.html",
    "revision": "cab530d0fc274d24ef90629bf8eec000"
  },
  {
    "url": "base/gl/1.index.html",
    "revision": "d1bfd18562675ce74fdb7310235b768a"
  },
  {
    "url": "base/gl/1.scatter3D.html",
    "revision": "afd6117681679f0edefca2c7afb010f8"
  },
  {
    "url": "base/gl/10.flowGL.html",
    "revision": "43409bfd5970ef2434cb68437b03ca05"
  },
  {
    "url": "base/gl/2.bar3D.html",
    "revision": "99041f71b6cb538c12c19a9b5e885e59"
  },
  {
    "url": "base/gl/3.line3D.html",
    "revision": "ca9eaabe3b67773750784b11e0a33377"
  },
  {
    "url": "base/gl/4.lines3D.html",
    "revision": "9df42b34ec86da2cf623870196c81bca"
  },
  {
    "url": "base/gl/5.map3D.html",
    "revision": "cc83602b9aba89011e73da19e3c2d814"
  },
  {
    "url": "base/gl/6.surface.html",
    "revision": "6c6a92b877a915a010a4248302b41f38"
  },
  {
    "url": "base/gl/7.polygons3D.html",
    "revision": "ff2fe649bbae8796b883544ef09d303e"
  },
  {
    "url": "base/gl/8.scatterGL.html",
    "revision": "ed0134033fe35074fde93134d24a9c6f"
  },
  {
    "url": "base/gl/9.graphGL.html",
    "revision": "21f3701aab7e3adbc7096aefe33c3d0c"
  },
  {
    "url": "base/series/1.index.html",
    "revision": "9759d86efa112c8c166f7f24f60e0a5e"
  },
  {
    "url": "base/series/1.line.html",
    "revision": "de624aef7a37dc1c668c63b4d1056aae"
  },
  {
    "url": "base/series/10.boxplot.html",
    "revision": "691752fb9f6f78ddf65e5c8f6b054b5c"
  },
  {
    "url": "base/series/11.candlestick.html",
    "revision": "2ba053b66a3728f396a90cd9c4072cd5"
  },
  {
    "url": "base/series/12.heatmap.html",
    "revision": "b94966277d5ddbe1bfaefa7368b925f0"
  },
  {
    "url": "base/series/13.map.html",
    "revision": "bab55fec3d93f0f101a6888dad881173"
  },
  {
    "url": "base/series/14.parallel.html",
    "revision": "cf6f26e9c5508835afb751758039cdaf"
  },
  {
    "url": "base/series/15.lines.html",
    "revision": "2f14afca41d6292dbf5f1291d43e354f"
  },
  {
    "url": "base/series/16.graph.html",
    "revision": "3a164084692e3325f60eab9ec124a4a4"
  },
  {
    "url": "base/series/17.sankey.html",
    "revision": "984acfd8fed3b5c0256e315e570b6cd2"
  },
  {
    "url": "base/series/18.funnel.html",
    "revision": "b5ec3a384ce5580e27e94a49e2737a47"
  },
  {
    "url": "base/series/19.gauge.html",
    "revision": "c86d12487cbf8d3e1508d58cc161b946"
  },
  {
    "url": "base/series/2.bar.html",
    "revision": "8132e46ef775b38bd5032b9fda014229"
  },
  {
    "url": "base/series/20.pictorialBar.html",
    "revision": "2dcda3b3dd88fb2a93abc02e13b3e176"
  },
  {
    "url": "base/series/21.themeRiver.html",
    "revision": "87fe05d1b22a539b14be8a1b0afa848e"
  },
  {
    "url": "base/series/22.custom.html",
    "revision": "611ddd6e2d13ef542c9fb065dac16244"
  },
  {
    "url": "base/series/3.pie.html",
    "revision": "a61eaf0ec29ae1221396b47681e642b4"
  },
  {
    "url": "base/series/4.scatter.html",
    "revision": "2bd70fd0e7e5b5e0432a51099407722a"
  },
  {
    "url": "base/series/5.effectScatter.html",
    "revision": "15da288beffc295c381ca55c1a958b55"
  },
  {
    "url": "base/series/6.radar.html",
    "revision": "b148ec8eab50b8c7e44ed364758dfd81"
  },
  {
    "url": "base/series/7.tree.html",
    "revision": "35538efa8e9498d3963dc611f61641f2"
  },
  {
    "url": "base/series/8.treemap.html",
    "revision": "fb8bb8f095aad27b98050c32502dff78"
  },
  {
    "url": "base/series/9.sunburst.html",
    "revision": "235e33bfaa589aa31ffdc6041f89b563"
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
    "revision": "2c061fd5b4a5faa40af88a74bf07eef5"
  },
  {
    "url": "mock/http.js",
    "revision": "a219140640bec4dfbe8f4fe88d351ed8"
  },
  {
    "url": "senior/1.micro/1.index.html",
    "revision": "76d0164edb256f176ff23030ac4f6b3e"
  },
  {
    "url": "senior/1.micro/1.singlespa.html",
    "revision": "010ef9fd8e311b7c497f23f591ab8013"
  },
  {
    "url": "senior/1.micro/1.singlespa2.html",
    "revision": "cc72b642013276dd82d73882ada4e625"
  },
  {
    "url": "senior/1.micro/2.qiankun.html",
    "revision": "adf9b605735e5886c7430f6c8f9be48f"
  },
  {
    "url": "senior/1.micro/2.qiankun2.html",
    "revision": "7054c39be2fe2288b28da64b9ee6ab99"
  },
  {
    "url": "senior/1.micro/3.share.html",
    "revision": "da7b901c13544beb9d9cdd716f6dc35e"
  },
  {
    "url": "senior/1.micro/4.dev.html",
    "revision": "452e706b74f9e420a1e49553ebf914a4"
  },
  {
    "url": "senior/2.typescript/1.env.html",
    "revision": "368b81ee06083022b9b518b62f8bb24a"
  },
  {
    "url": "senior/2.typescript/1.index.html",
    "revision": "9510d22a86cbf3699db710cecdf815a8"
  },
  {
    "url": "senior/2.typescript/10.infer.html",
    "revision": "58346bd77800c01f8df1080077f7611a"
  },
  {
    "url": "senior/2.typescript/11.overlapping.html",
    "revision": "0c82261e3cde162f436118e2ecdfb5e0"
  },
  {
    "url": "senior/2.typescript/12.condition.html",
    "revision": "980bae5f7248a1df3898c6be72c5dce5"
  },
  {
    "url": "senior/2.typescript/13.builtin.html",
    "revision": "4ff2ca831fdec22bd62911ab8d379810"
  },
  {
    "url": "senior/2.typescript/14.package.html",
    "revision": "b03817d6f90dcd06a43c757b3ec2d424"
  },
  {
    "url": "senior/2.typescript/15.custom.html",
    "revision": "e39927826e8fe0314e2708b63dfc730f"
  },
  {
    "url": "senior/2.typescript/16.unknown.html",
    "revision": "aa32ec7a99daf917e5648590dc68f105"
  },
  {
    "url": "senior/2.typescript/17.module.html",
    "revision": "c8be0942aa463da0f4c4a3e87bdc984d"
  },
  {
    "url": "senior/2.typescript/18.statement.html",
    "revision": "de8a32aa4723e47eace77fdd4d4f21b4"
  },
  {
    "url": "senior/2.typescript/19.extend.html",
    "revision": "22386849c854e09097f958be4a652069"
  },
  {
    "url": "senior/2.typescript/2.base.html",
    "revision": "f4d84da1c1f787217f1e0f88ee00f36b"
  },
  {
    "url": "senior/2.typescript/3.deduction.html",
    "revision": "ddfd9fc0659a5d339c87fe5d80935290"
  },
  {
    "url": "senior/2.typescript/4.type.html",
    "revision": "ebc8bedffc9ced7a8f669a1c92c94a95"
  },
  {
    "url": "senior/2.typescript/5.class.html",
    "revision": "9ca3240b86d53634293fd14f59e4d530"
  },
  {
    "url": "senior/2.typescript/6.interface.html",
    "revision": "9d75cc29204471eeb7169201a95284c2"
  },
  {
    "url": "senior/2.typescript/7.generic.html",
    "revision": "048a6a5e11a39d50c9c7fd40d1421b5d"
  },
  {
    "url": "senior/2.typescript/8.compatible.html",
    "revision": "6f2c7930244e36379dc31561e870127a"
  },
  {
    "url": "senior/2.typescript/9.protect.html",
    "revision": "524c19ee1e1eee67e4c9d0116090c5b5"
  },
  {
    "url": "senior/3.deploy/1.index.html",
    "revision": "2022a3eb9a028aadd2bdc878e88a1449"
  },
  {
    "url": "senior/3.deploy/1.local.html",
    "revision": "2dc047081e7f7bc57dc4af4b8bc2fb82"
  },
  {
    "url": "senior/3.deploy/2.gitlab.html",
    "revision": "9c6f3e5d4d59e9f0f8d9f5952c5821d2"
  },
  {
    "url": "senior/3.deploy/3.genkins.html",
    "revision": "834d0464f18dce98ba8dff0f8a737050"
  },
  {
    "url": "senior/3.deploy/4.centos.html",
    "revision": "7656cd145ec8d54dbad540f7a9266c93"
  },
  {
    "url": "senior/3.deploy/5.nginx.html",
    "revision": "25a4af8e8af6c753353d7743c3761091"
  },
  {
    "url": "senior/4.component/1.button.html",
    "revision": "ad0aa4b69a4262c7d70f75e4a4b767d8"
  },
  {
    "url": "senior/4.component/1.env.html",
    "revision": "d06b4413290653acd9e999e1c7c46150"
  },
  {
    "url": "senior/4.component/1.index.html",
    "revision": "cf22f0e03566234f2cead0ad81a697d3"
  },
  {
    "url": "senior/4.component/1.recursion.html",
    "revision": "6cceb6a2411c3f91b464bbe8f330d0fa"
  },
  {
    "url": "senior/4.component/10.tree.html",
    "revision": "1833bfab12e6b94844e5398544bb7f86"
  },
  {
    "url": "senior/4.component/12.table.html",
    "revision": "040a21b0569622703e9991bfec7e49ca"
  },
  {
    "url": "senior/4.component/13.publish.html",
    "revision": "d13050f451f6977b8b4ebf2e624018ee"
  },
  {
    "url": "senior/4.component/2.dropdown.html",
    "revision": "c2ce64e811a2a17764151e13adcea47a"
  },
  {
    "url": "senior/4.component/3.dialog.html",
    "revision": "6a88b484536813698e405952c02e6dbf"
  },
  {
    "url": "senior/4.component/3.form.html",
    "revision": "9bc3c10d6c9f87cde82de934d8b8a5d6"
  },
  {
    "url": "senior/4.component/4.input.html",
    "revision": "9c478220e5014063fbb3007a5afea2a0"
  },
  {
    "url": "senior/4.component/4.render.html",
    "revision": "01568901f7becc7e4ee2e1fa7a4220c8"
  },
  {
    "url": "senior/4.component/5.checkBox.html",
    "revision": "bc86f20dc0f3ec74df95c933e3add930"
  },
  {
    "url": "senior/4.component/6.cascader.html",
    "revision": "23458e6e5b9a0ce387e358a848d40d9d"
  },
  {
    "url": "senior/4.component/7.date.html",
    "revision": "ed7582b78fa8a9d68cb436f8b44b6e0f"
  },
  {
    "url": "senior/4.component/8.dispaly.html",
    "revision": "f2daa7069482db9ae92f881580250371"
  },
  {
    "url": "senior/4.component/9.alert.html",
    "revision": "b7b5681dfed28e3cdea205deb1e3dbcf"
  },
  {
    "url": "senior/4.component/9.dynamics.html",
    "revision": "b3345cade1efb778876f90df719a87b8"
  },
  {
    "url": "source/vue-cli2.x/1.index.html",
    "revision": "d73b4b377c39df2938c84bb9a7e6e31c"
  },
  {
    "url": "source/vue-cli3.x/1.index.html",
    "revision": "06453c5c4987d13611e328e279fa5e95"
  },
  {
    "url": "source/vue-router3.x/1.index.html",
    "revision": "6a5e3b57046f26d6dbafc7323329891f"
  },
  {
    "url": "source/vue-router3.x/2.origin.html",
    "revision": "0a620b5fc2c8e3699d8c7aaaed9230b7"
  },
  {
    "url": "source/vue-router4.x/1.index.html",
    "revision": "640d480a4e33e126cce1e4e11d22390a"
  },
  {
    "url": "source/vue2.x/1.index.html",
    "revision": "d79bc452c26d3e35585264920dd86205"
  },
  {
    "url": "source/vue2.x/10.optimize.html",
    "revision": "69a8f34e508361620d20cbdfc1c10d5a"
  },
  {
    "url": "source/vue2.x/11.gencode.html",
    "revision": "7b2e18f670daf19d97bf79f4eedd1aa5"
  },
  {
    "url": "source/vue2.x/12.mount.html",
    "revision": "39384bb175e81019c8215cdd7f2f69f9"
  },
  {
    "url": "source/vue2.x/13._render.html",
    "revision": "b68c8491a681aa205ec97176d8f7fcaa"
  },
  {
    "url": "source/vue2.x/14._update.html",
    "revision": "ea9531aa64262e6252dbb80b1cca135a"
  },
  {
    "url": "source/vue2.x/2.initGlobalAPI.html",
    "revision": "f68161358773ad5bb83a0306ca9f589c"
  },
  {
    "url": "source/vue2.x/3.initMixin.html",
    "revision": "d074f8345da2775f199e823ee4bbc047"
  },
  {
    "url": "source/vue2.x/4.stateMixin.html",
    "revision": "4b9ac061bebc46d54b33b7e5cba4ac3f"
  },
  {
    "url": "source/vue2.x/5.eventsMixin.html",
    "revision": "a4c41c43b52df904cf1729aa9953b862"
  },
  {
    "url": "source/vue2.x/6.lifecycleMixin.html",
    "revision": "ae1cf070c62d5a93293bf91b22689034"
  },
  {
    "url": "source/vue2.x/7.renderMixin.html",
    "revision": "be93314299602a9468b658642a9ea24d"
  },
  {
    "url": "source/vue2.x/8.mount.html",
    "revision": "029288acd1dc1989319d4e7aede4c9ae"
  },
  {
    "url": "source/vue2.x/9.ast.html",
    "revision": "37c469f0de99101913f4acaccd4b78b7"
  },
  {
    "url": "source/vue3.x/1.index.html",
    "revision": "a2340e3fcf112cfcfd4a12ba26512bc7"
  },
  {
    "url": "source/vue3.x/10.optimize.html",
    "revision": "269d3f55ab6936455d6676c9151916f9"
  },
  {
    "url": "source/vue3.x/11.gencode.html",
    "revision": "50e76ff0c159aca39187046108da533b"
  },
  {
    "url": "source/vue3.x/12.mount.html",
    "revision": "428d658115f3778a88611c95b789e86e"
  },
  {
    "url": "source/vue3.x/13._render.html",
    "revision": "28aad8d844ed2dd9dbe740f8694d0dcb"
  },
  {
    "url": "source/vue3.x/14._update.html",
    "revision": "7664bbfc2c7ea8528ae2eeb834302590"
  },
  {
    "url": "source/vue3.x/2.initGlobalAPI.html",
    "revision": "98716a85b5eff11a5b160fa00efc0f2a"
  },
  {
    "url": "source/vue3.x/3.initMixin.html",
    "revision": "9627b8373e0141c47a97d841a054ea59"
  },
  {
    "url": "source/vue3.x/4.stateMixin.html",
    "revision": "d829bb67382e0e651ff9feb8816e1484"
  },
  {
    "url": "source/vue3.x/5.eventsMixin.html",
    "revision": "a790f797018eb5f6b4d5088cc3b9a9ee"
  },
  {
    "url": "source/vue3.x/6.lifecycleMixin.html",
    "revision": "392c702fcfde83d95e83c9ed79869557"
  },
  {
    "url": "source/vue3.x/7.renderMixin.html",
    "revision": "44d4f957ec03da93bb80b9ec86560f24"
  },
  {
    "url": "source/vue3.x/8.mount.html",
    "revision": "e977d4ff0c475efc9f4a0c19327e6d4a"
  },
  {
    "url": "source/vue3.x/9.ast.html",
    "revision": "e6efc29e608bafdcec242396da4d7f15"
  },
  {
    "url": "source/vuex3.x/1.index.html",
    "revision": "03756cf43fe1018be5973d44eeff8e21"
  },
  {
    "url": "source/vuex3.x/2.use.html",
    "revision": "1bc9da27c916484a0b2c24cc808cfa79"
  },
  {
    "url": "source/vuex3.x/3.origin.html",
    "revision": "cf9d7e57bc20d14aeca30ad753e65283"
  },
  {
    "url": "source/vuex4.x/1.index.html",
    "revision": "66bb15893f4509935e480d4c13812d03"
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
