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
    "revision": "f3aa9928cab70bb87ca21a29f43072bb"
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
    "url": "assets/js/71.024e3070.js",
    "revision": "87245e5ea87fb7959c680c952c0edb53"
  },
  {
    "url": "assets/js/72.68d9bf2e.js",
    "revision": "de61cb7beef48507b88e505460b36525"
  },
  {
    "url": "assets/js/73.671f1335.js",
    "revision": "bc0950604a41ead9135b13a9a5280dd7"
  },
  {
    "url": "assets/js/74.7d53f1ea.js",
    "revision": "d82464ca03a82442a910c811b1862bbf"
  },
  {
    "url": "assets/js/75.19297f4b.js",
    "revision": "513f21406c525d1b866efe47e4c38639"
  },
  {
    "url": "assets/js/76.7bab0349.js",
    "revision": "5fe270c1894fe311e78355eb46383a60"
  },
  {
    "url": "assets/js/77.1667ca9b.js",
    "revision": "ea9ce55badc9fa0f71f78d7d6a9b8b36"
  },
  {
    "url": "assets/js/78.e21e01f4.js",
    "revision": "42a60f7c43ff4072fe2f33974ad37ae4"
  },
  {
    "url": "assets/js/79.d28586b4.js",
    "revision": "ebacf43a113402de0525d690fe06d6b9"
  },
  {
    "url": "assets/js/8.f82583cf.js",
    "revision": "e0e0f2619cad455b700a83aae917517d"
  },
  {
    "url": "assets/js/80.5c6575a9.js",
    "revision": "bbbcfa63595613e86452c1bb17a48e3f"
  },
  {
    "url": "assets/js/81.78acdfe2.js",
    "revision": "04b1e87847307b7559fd9ff7e3008031"
  },
  {
    "url": "assets/js/82.3e63c498.js",
    "revision": "645aa8ccc46f330bcebb7dddcde48f8e"
  },
  {
    "url": "assets/js/83.2f5868f7.js",
    "revision": "320feab62b93476f23a7c8b6109cc5a0"
  },
  {
    "url": "assets/js/84.36f172ba.js",
    "revision": "f379b372c9369a4eb74dd7ed51a24432"
  },
  {
    "url": "assets/js/85.0ae78a56.js",
    "revision": "505fd2ce2ad53ca0dd4b44a60809ed07"
  },
  {
    "url": "assets/js/86.7be70fd3.js",
    "revision": "2de7e85aa576c554527d74050f78aae9"
  },
  {
    "url": "assets/js/87.86bf7a79.js",
    "revision": "78dc6ae037e35124cc006af75c01d63a"
  },
  {
    "url": "assets/js/88.c922f6be.js",
    "revision": "b8f4933548dd63971948e7780609164d"
  },
  {
    "url": "assets/js/89.ca4bb5ab.js",
    "revision": "e2c2c5aed145354bfdc2a07dab0ab32a"
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
    "revision": "ee1cd67ff97de2e46825146af87ea6fb"
  },
  {
    "url": "base/api/1.index.html",
    "revision": "3404dff45e5cf42d971d85268462dd23"
  },
  {
    "url": "base/api/2.echartsInstance.html",
    "revision": "86e6e84a3506b2f25d438e716f2f131b"
  },
  {
    "url": "base/api/3.action.html",
    "revision": "5cfeeebc28eb331da114738a29eb0125"
  },
  {
    "url": "base/api/4.events.html",
    "revision": "13628a746cd714894716fd451175119f"
  },
  {
    "url": "base/components/1.index.html",
    "revision": "0a668fd575655c70fddcb7127768ffa9"
  },
  {
    "url": "base/components/1.legend.html",
    "revision": "0e0179a04693f087fc6ce8b504c9555f"
  },
  {
    "url": "base/components/2.grid.html",
    "revision": "069ce5d23b9fa5aa2cb057034afaa4b5"
  },
  {
    "url": "base/components/2.polar.html",
    "revision": "e83e35f4d9659a0779e62cbd765d1c7f"
  },
  {
    "url": "base/components/2.radiusAxis.html",
    "revision": "53f34e7bb702353926e4958a62cc426a"
  },
  {
    "url": "base/components/2.xAxis.html",
    "revision": "68ced1ac1145dabd076e9b8833cebcda"
  },
  {
    "url": "base/components/2.yAxis.html",
    "revision": "2c08864a428924396e54e6dbca4447eb"
  },
  {
    "url": "base/components/3.angleAxis.html",
    "revision": "bf0f8f5b544904c4bb96403494ed524e"
  },
  {
    "url": "base/components/4.radar.html",
    "revision": "7e1b47b3af9eb1b695e6aae35808abeb"
  },
  {
    "url": "base/components/5.dataZoom.html",
    "revision": "35afcdb5f95fbabbc258d0a7ffd9685b"
  },
  {
    "url": "base/components/6.visualMap.html",
    "revision": "66e054a03cf6941f6e00ae54f17efc68"
  },
  {
    "url": "base/components/7.tooltip.html",
    "revision": "ea272906698ad05e2a289722e6e1e3bb"
  },
  {
    "url": "base/components/8.geo.html",
    "revision": "dd4c6ba9c44e4942c2e51ca973da2914"
  },
  {
    "url": "base/gl/1.index.html",
    "revision": "174159d3a520e1d62f969252072464e1"
  },
  {
    "url": "base/gl/1.scatter3D.html",
    "revision": "5a40dca6aef3c1630279e05c86af9c65"
  },
  {
    "url": "base/gl/10.flowGL.html",
    "revision": "75cf0186e114207bcfc1f8dde83a3632"
  },
  {
    "url": "base/gl/2.bar3D.html",
    "revision": "5280a96f8dd63ba089f7efff7d928f21"
  },
  {
    "url": "base/gl/3.line3D.html",
    "revision": "1f953e0d8ff5a983efc4a81fc9b7ac8e"
  },
  {
    "url": "base/gl/4.lines3D.html",
    "revision": "d3624de765e5588c18af343cb11624fb"
  },
  {
    "url": "base/gl/5.map3D.html",
    "revision": "bb30064fac90e0f284fc92e3c75c20c1"
  },
  {
    "url": "base/gl/6.surface.html",
    "revision": "077daee1572b220b3816deee7ec62f2e"
  },
  {
    "url": "base/gl/7.polygons3D.html",
    "revision": "077d9ef8e1dfc23cc62b1a5fee8a99b7"
  },
  {
    "url": "base/gl/8.scatterGL.html",
    "revision": "d46939ad2eabc650ae186b8a2673a46e"
  },
  {
    "url": "base/gl/9.graphGL.html",
    "revision": "a5a589b3babb1734ad686ac2b6a6fc59"
  },
  {
    "url": "base/series/1.index.html",
    "revision": "218e2d74538a4e1ffce3929b61a94f4a"
  },
  {
    "url": "base/series/1.line.html",
    "revision": "2432703730715a832ec8a4dd689f6046"
  },
  {
    "url": "base/series/10.boxplot.html",
    "revision": "4d3f6a39a9d23428f29ed4a6d1cbabec"
  },
  {
    "url": "base/series/11.candlestick.html",
    "revision": "ea3229fe007036988f95046890b4efab"
  },
  {
    "url": "base/series/12.heatmap.html",
    "revision": "80ca58473fa6c7cb12b964b0ab20758a"
  },
  {
    "url": "base/series/13.map.html",
    "revision": "c8cc1568f2051e1cc11d131ebc4ae6e2"
  },
  {
    "url": "base/series/14.parallel.html",
    "revision": "457b5b9ca898869dec348d09cc35d671"
  },
  {
    "url": "base/series/15.lines.html",
    "revision": "4d8299222cd0b51ca84c92c7203fa95d"
  },
  {
    "url": "base/series/16.graph.html",
    "revision": "500e57d7eb6984d912cf426bf62f58c6"
  },
  {
    "url": "base/series/17.sankey.html",
    "revision": "20a67a0fe44441deddab681e248b5d53"
  },
  {
    "url": "base/series/18.funnel.html",
    "revision": "063e433e0d6417e7188eec89adf01561"
  },
  {
    "url": "base/series/19.gauge.html",
    "revision": "c05ecd3b2909cfa47143cafa6e8e08e2"
  },
  {
    "url": "base/series/2.bar.html",
    "revision": "eb6cdfc7f0c79d003973d5529db55a5d"
  },
  {
    "url": "base/series/20.pictorialBar.html",
    "revision": "f0d8aa92b014e962f3eeba2f390563dc"
  },
  {
    "url": "base/series/21.themeRiver.html",
    "revision": "e1248412d5240e05302540909ce1fc8a"
  },
  {
    "url": "base/series/22.custom.html",
    "revision": "c04b91f1ce807fe60daec4d7d65d09c3"
  },
  {
    "url": "base/series/3.pie.html",
    "revision": "9386cb369ee21d2d08e5d4e55ded9d70"
  },
  {
    "url": "base/series/4.scatter.html",
    "revision": "3a2bd8befeed1a993734a765ee5bfb02"
  },
  {
    "url": "base/series/5.effectScatter.html",
    "revision": "d350a2b31cb05d2d46183ed70a7dd0cd"
  },
  {
    "url": "base/series/6.radar.html",
    "revision": "60a787d040af7f7d0412235266d4afc1"
  },
  {
    "url": "base/series/7.tree.html",
    "revision": "c263e31bb454ff5a18293eb45ed1b3b9"
  },
  {
    "url": "base/series/8.treemap.html",
    "revision": "17389e5a4aafec86b3a3a72e46d6f885"
  },
  {
    "url": "base/series/9.sunburst.html",
    "revision": "cd3b14ba57f3cbf54fdf1b4a33cff0e7"
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
    "revision": "5c4f6561932e84c70464db2a9e1be30f"
  },
  {
    "url": "mock/http.js",
    "revision": "a219140640bec4dfbe8f4fe88d351ed8"
  },
  {
    "url": "senior/1.micro/1.index.html",
    "revision": "03b28b6f70c8e56bf41070e0fdf0c4ea"
  },
  {
    "url": "senior/1.micro/1.singlespa.html",
    "revision": "d3854ec57e5222d8859e8085c89ae2c4"
  },
  {
    "url": "senior/1.micro/1.singlespa2.html",
    "revision": "5aaec9ca21a48c162b135d86e39bf90a"
  },
  {
    "url": "senior/1.micro/2.qiankun.html",
    "revision": "4be4b860cc51d1fbbc48ca675167af05"
  },
  {
    "url": "senior/1.micro/2.qiankun2.html",
    "revision": "d38ac39a8b1b1909957addf67f5451b1"
  },
  {
    "url": "senior/1.micro/3.share.html",
    "revision": "24058efee3cade0c2fd7f1bc99079de0"
  },
  {
    "url": "senior/1.micro/4.dev.html",
    "revision": "27008c56b553d6e5353276b910d0918b"
  },
  {
    "url": "senior/2.typescript/1.env.html",
    "revision": "698ace3c89482bf87d30a3ff223c634e"
  },
  {
    "url": "senior/2.typescript/1.index.html",
    "revision": "9fec82189d0f41f32358d87abe333159"
  },
  {
    "url": "senior/2.typescript/10.infer.html",
    "revision": "6963b970e1adcc94695f226db688bc44"
  },
  {
    "url": "senior/2.typescript/11.overlapping.html",
    "revision": "37cd24a7c4ff284fc030017c26082232"
  },
  {
    "url": "senior/2.typescript/12.condition.html",
    "revision": "7705fc215d101b432a8931667939fe4e"
  },
  {
    "url": "senior/2.typescript/13.builtin.html",
    "revision": "fe5fc7d814ca18a4b11649a460bd4e1d"
  },
  {
    "url": "senior/2.typescript/14.package.html",
    "revision": "dadff39ad588c78158327e635f9220ab"
  },
  {
    "url": "senior/2.typescript/15.custom.html",
    "revision": "7e63a5a0001e58bea4d05fa4fbde18b0"
  },
  {
    "url": "senior/2.typescript/16.unknown.html",
    "revision": "5a575b1c3784418826ce3197c39d52e3"
  },
  {
    "url": "senior/2.typescript/17.module.html",
    "revision": "0be16733a8bb14a1356e45f8094aec01"
  },
  {
    "url": "senior/2.typescript/18.statement.html",
    "revision": "dc5660cb9d894760415d131ada6d35b9"
  },
  {
    "url": "senior/2.typescript/19.extend.html",
    "revision": "af5f48cd93e48c4f99ae6b8cf64370ec"
  },
  {
    "url": "senior/2.typescript/2.base.html",
    "revision": "5df2a28a8c2c4b771553091eca2f6969"
  },
  {
    "url": "senior/2.typescript/3.deduction.html",
    "revision": "1bb1fc47323dbea2b1123bf5a9bb5083"
  },
  {
    "url": "senior/2.typescript/4.type.html",
    "revision": "bf0e90e6f2369af35e79b54d7f3649fe"
  },
  {
    "url": "senior/2.typescript/5.class.html",
    "revision": "29561b9f6aee2d4bda9df520a4511d7e"
  },
  {
    "url": "senior/2.typescript/6.interface.html",
    "revision": "727d050f5d0def5c4b92f6fae79da231"
  },
  {
    "url": "senior/2.typescript/7.generic.html",
    "revision": "e6f11b7dbc8d42c6a9a6e0ebd72877ca"
  },
  {
    "url": "senior/2.typescript/8.compatible.html",
    "revision": "e016def1393a42018f3c68ce271a5c49"
  },
  {
    "url": "senior/2.typescript/9.protect.html",
    "revision": "044bdaf026c284831a199a1ce775b6df"
  },
  {
    "url": "senior/3.deploy/1.index.html",
    "revision": "5d20301d4a6af349d0697011e7afd1e9"
  },
  {
    "url": "senior/3.deploy/1.local.html",
    "revision": "24db2db021e754e570d19a44bb4e9584"
  },
  {
    "url": "senior/3.deploy/2.gitlab.html",
    "revision": "c0c6c9fb0b6b2e12e0d69e8db711512c"
  },
  {
    "url": "senior/3.deploy/3.genkins.html",
    "revision": "f151221537b0a84ad994b667525e48cd"
  },
  {
    "url": "senior/3.deploy/4.centos.html",
    "revision": "e2b1a21d1418810e4259132805ac8fcc"
  },
  {
    "url": "senior/3.deploy/5.nginx.html",
    "revision": "6689aa11c5d347b2fcfcab5e678906e7"
  },
  {
    "url": "senior/4.component/1.button.html",
    "revision": "c75464ef6b4b34230832e2a904f5f134"
  },
  {
    "url": "senior/4.component/1.env.html",
    "revision": "6a87eeeb6a314ca0ec1bc3b50e89cc29"
  },
  {
    "url": "senior/4.component/1.index.html",
    "revision": "cd1ba06a867ff9b2f9acb402b8895b64"
  },
  {
    "url": "senior/4.component/1.recursion.html",
    "revision": "438524e1eeb9154e1096ae390abe3f31"
  },
  {
    "url": "senior/4.component/10.tree.html",
    "revision": "b0cc39612207cbb4b0bfc56d5bc249e6"
  },
  {
    "url": "senior/4.component/12.table.html",
    "revision": "77073a09171cadd5fdd596d1f3c8926b"
  },
  {
    "url": "senior/4.component/13.publish.html",
    "revision": "cd5445ea0222f28302e3e4151330a022"
  },
  {
    "url": "senior/4.component/2.dropdown.html",
    "revision": "3c15a79d7895edfe010f2633ec16a017"
  },
  {
    "url": "senior/4.component/3.dialog.html",
    "revision": "8f86c1e861c7707462f750e7ccf1e1b4"
  },
  {
    "url": "senior/4.component/3.form.html",
    "revision": "b92f89e5161a7ce624fed6afe134fd80"
  },
  {
    "url": "senior/4.component/4.input.html",
    "revision": "155e11b538bade829f49d67bc77ae4f9"
  },
  {
    "url": "senior/4.component/4.render.html",
    "revision": "1c9396daca08547946e804faae672323"
  },
  {
    "url": "senior/4.component/5.checkBox.html",
    "revision": "6af16380692914cc91b2feff398da782"
  },
  {
    "url": "senior/4.component/6.cascader.html",
    "revision": "ca2d9f48cf772315bfc386c5534dbaa4"
  },
  {
    "url": "senior/4.component/7.date.html",
    "revision": "fe67c9203a3ea4bd37dc4cdf13a1eefd"
  },
  {
    "url": "senior/4.component/8.dispaly.html",
    "revision": "d894f948e25736e5198dbc6baadaad24"
  },
  {
    "url": "senior/4.component/9.alert.html",
    "revision": "03d7be8232421c9fb85c62b587719252"
  },
  {
    "url": "senior/4.component/9.dynamics.html",
    "revision": "1266899f4ca08669099b5fc2fc28ada0"
  },
  {
    "url": "source/vue-cli2.x/1.index.html",
    "revision": "e8d0a271c6f8dc22705c880854c34a5b"
  },
  {
    "url": "source/vue-cli3.x/1.index.html",
    "revision": "f29035a8e2d87b426d778f263e797a90"
  },
  {
    "url": "source/vue-router3.x/1.index.html",
    "revision": "cdb8a66576d66d8863e14216e6c8c7e4"
  },
  {
    "url": "source/vue-router3.x/2.origin.html",
    "revision": "51e7c930619ab04d6b8ef7633c227ec1"
  },
  {
    "url": "source/vue-router4.x/1.index.html",
    "revision": "6368197f7a82098ec49d542536e65588"
  },
  {
    "url": "source/vue2.x/1.index.html",
    "revision": "164057287244b3bb00d5af09d909e5a2"
  },
  {
    "url": "source/vue2.x/10.optimize.html",
    "revision": "20b8b45d66d74dc62caec9154c41eec1"
  },
  {
    "url": "source/vue2.x/11.gencode.html",
    "revision": "7786a20e304251cfb2b29468124d5b97"
  },
  {
    "url": "source/vue2.x/12.mount.html",
    "revision": "9a455403972bdb1993c1f670756ea89b"
  },
  {
    "url": "source/vue2.x/13._render.html",
    "revision": "2cc1b6838ad6af955707b716ea094852"
  },
  {
    "url": "source/vue2.x/14._update.html",
    "revision": "142df15ab131c822acfbf44e6d1d4e11"
  },
  {
    "url": "source/vue2.x/2.initGlobalAPI.html",
    "revision": "4465d83bdb23de1a326e94802d20bb3b"
  },
  {
    "url": "source/vue2.x/3.initMixin.html",
    "revision": "4e51b794adc7fd89aff8d234382fbd52"
  },
  {
    "url": "source/vue2.x/4.stateMixin.html",
    "revision": "a3aa3448a7c8bba7765909e1ba8a5e6f"
  },
  {
    "url": "source/vue2.x/5.eventsMixin.html",
    "revision": "7d88bbd3b8da4bd6e6c24079855550ba"
  },
  {
    "url": "source/vue2.x/6.lifecycleMixin.html",
    "revision": "48f96f4b32275d3500d956d745416253"
  },
  {
    "url": "source/vue2.x/7.renderMixin.html",
    "revision": "0336df6fb26728e0e7eba0d690472e0f"
  },
  {
    "url": "source/vue2.x/8.mount.html",
    "revision": "c261b7946c5d39a63fffa84b0d7d29dc"
  },
  {
    "url": "source/vue2.x/9.ast.html",
    "revision": "200ef333601e6da126aae1cc9554c911"
  },
  {
    "url": "source/vue3.x/1.index.html",
    "revision": "24f9d57ff58f9a537b52c8a636999005"
  },
  {
    "url": "source/vue3.x/10.optimize.html",
    "revision": "261c8bd65cb19735cdb70b4652bbe2a1"
  },
  {
    "url": "source/vue3.x/11.gencode.html",
    "revision": "9944600f823922c111aa8164602b55b7"
  },
  {
    "url": "source/vue3.x/12.mount.html",
    "revision": "3b97d7822769f29adc763deb17c5c0cd"
  },
  {
    "url": "source/vue3.x/13._render.html",
    "revision": "c87e1a20e1bb4572f94d3862f082eed2"
  },
  {
    "url": "source/vue3.x/14._update.html",
    "revision": "dd8dc1761928ddf35e743afedfd62ba5"
  },
  {
    "url": "source/vue3.x/2.initGlobalAPI.html",
    "revision": "8c0bf05d06863ebc82746d586033bac3"
  },
  {
    "url": "source/vue3.x/3.initMixin.html",
    "revision": "8dcd91539b7ce33be99d92a46f55e4c0"
  },
  {
    "url": "source/vue3.x/4.stateMixin.html",
    "revision": "d59d43c400cb7e3e76ec38491c0a3628"
  },
  {
    "url": "source/vue3.x/5.eventsMixin.html",
    "revision": "6ab19acc65e372ec3bd861d12040f6f3"
  },
  {
    "url": "source/vue3.x/6.lifecycleMixin.html",
    "revision": "f630161374a251730388a3ec2339d482"
  },
  {
    "url": "source/vue3.x/7.renderMixin.html",
    "revision": "e642875af84cc0963729275f33ef7a95"
  },
  {
    "url": "source/vue3.x/8.mount.html",
    "revision": "82d24d46ca0ab04aa2004f1596c96561"
  },
  {
    "url": "source/vue3.x/9.ast.html",
    "revision": "caaea015536f3661035a70c0ecb79602"
  },
  {
    "url": "source/vuex3.x/1.index.html",
    "revision": "806ffcb4be15572efa633d06cb40a5d6"
  },
  {
    "url": "source/vuex3.x/2.use.html",
    "revision": "44af85a690ebc9cebc3fb3ec979c7236"
  },
  {
    "url": "source/vuex3.x/3.origin.html",
    "revision": "186bf6d59da9cc02bfccab972de96039"
  },
  {
    "url": "source/vuex4.x/1.index.html",
    "revision": "02e5237876e010c1fcfce620432c9107"
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
