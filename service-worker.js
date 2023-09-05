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
    "revision": "2cd1ad31d11ee07f6539d08e4ca9bd3b"
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
    "url": "assets/js/105.681567f6.js",
    "revision": "daf32599e157b276852af989da0902e5"
  },
  {
    "url": "assets/js/106.06b3edb9.js",
    "revision": "a6a2ce4375699e371759d00a077ccf91"
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
    "url": "assets/js/111.02c4271d.js",
    "revision": "5ac345d1fdda426a829f05d237ff7bce"
  },
  {
    "url": "assets/js/112.914746ff.js",
    "revision": "5f2e0de36f02f4458bcfb37c7ef8318f"
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
    "url": "assets/js/122.dc2df8ef.js",
    "revision": "7b06b5637276066dc56882ac573bb046"
  },
  {
    "url": "assets/js/123.e3e12760.js",
    "revision": "182ff5679b66873c23b3b6a1db7f9912"
  },
  {
    "url": "assets/js/124.3d59a963.js",
    "revision": "d19419ec48caa4a073c21ddd895324af"
  },
  {
    "url": "assets/js/125.7cbc6cc0.js",
    "revision": "3560cb2a2c20dc1ac97cd1308a10efc5"
  },
  {
    "url": "assets/js/126.c6ee872f.js",
    "revision": "86cd69efeb300f0a2343b2ae90ae130d"
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
    "url": "assets/js/138.54c7de0e.js",
    "revision": "8432ae6bcbee147aa68def7a860b9604"
  },
  {
    "url": "assets/js/139.3c8bc99d.js",
    "revision": "200341711ffb76e6c467073a5c0fb788"
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
    "url": "assets/js/141.a6a2a8e2.js",
    "revision": "3f41fe1ccf9ddf4b991be336b2b189d6"
  },
  {
    "url": "assets/js/142.c8101ddb.js",
    "revision": "9a618c0e9c2de3b88eedb71e4f6e35e2"
  },
  {
    "url": "assets/js/143.09ff8c07.js",
    "revision": "448bb461311bbb5f7dffb24f38fd52f9"
  },
  {
    "url": "assets/js/144.f3fa213a.js",
    "revision": "d49c21b6ca63d44811eb1d50a087b361"
  },
  {
    "url": "assets/js/145.cfd3a289.js",
    "revision": "53a4b5c3277abe80141066775eb7d572"
  },
  {
    "url": "assets/js/146.dae0af53.js",
    "revision": "f3513cc640e8a56a68802c2313b07fe7"
  },
  {
    "url": "assets/js/147.8942cdba.js",
    "revision": "46a694f91b80f07e51fc69c5bf0f0e5e"
  },
  {
    "url": "assets/js/148.f670845f.js",
    "revision": "55d4f751cfd27352d873e704cdf3252e"
  },
  {
    "url": "assets/js/149.54dfdb22.js",
    "revision": "37af11877ff4f607080a5ede0a143ea3"
  },
  {
    "url": "assets/js/15.8d0ab293.js",
    "revision": "e6b9e85090c9b1d966bcfa0822588781"
  },
  {
    "url": "assets/js/150.9536724a.js",
    "revision": "32fe1f29669e390b57cf96cab2f48f53"
  },
  {
    "url": "assets/js/151.e934636b.js",
    "revision": "0955359617b292127b6358452a1c7fbe"
  },
  {
    "url": "assets/js/152.244dd65c.js",
    "revision": "45a84cecf0100813d6f287be81e674ea"
  },
  {
    "url": "assets/js/153.398292e3.js",
    "revision": "74ef710df66328a0247e50718d8c6121"
  },
  {
    "url": "assets/js/154.2b8aa951.js",
    "revision": "4f835935c6ecb97d18c375f4fd60e7aa"
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
    "url": "assets/js/62.e0113ae4.js",
    "revision": "f5f108c10b248b4ced64f22e36d6626b"
  },
  {
    "url": "assets/js/63.3dfb1b7d.js",
    "revision": "19ce3815590b7605f624432ee5d34bd3"
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
    "url": "assets/js/71.43c25afc.js",
    "revision": "dd573a0ba97ca6c6cfb24ed13b92c4ec"
  },
  {
    "url": "assets/js/72.68d9bf2e.js",
    "revision": "de61cb7beef48507b88e505460b36525"
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
    "revision": "6a19c4b43cfef797d091c94d83a4e092"
  },
  {
    "url": "base/api/1.index.html",
    "revision": "b2eb65602f9421494ee4448acd87d624"
  },
  {
    "url": "base/api/2.echartsInstance.html",
    "revision": "80a4ac1e9c86c0386c45d7754de0ef7e"
  },
  {
    "url": "base/api/3.action.html",
    "revision": "1b28cab061c31fed4a7af615e457ccbe"
  },
  {
    "url": "base/api/4.events.html",
    "revision": "1e4d4cd6e8861d105c9cc15e46864b36"
  },
  {
    "url": "base/components/1.index.html",
    "revision": "7e33cf49a652a090f7a3f3c2b09e8c6d"
  },
  {
    "url": "base/components/1.legend.html",
    "revision": "c97bb44977d98feb586ac498e40e272c"
  },
  {
    "url": "base/components/2.grid.html",
    "revision": "7e3d4f880b079a7cfa4157517fcdb096"
  },
  {
    "url": "base/components/2.polar.html",
    "revision": "cd85cc1e51538ab8aca5845cf498d8a5"
  },
  {
    "url": "base/components/2.radiusAxis.html",
    "revision": "6c7998b022896206f72e6715cccaec9b"
  },
  {
    "url": "base/components/2.xAxis.html",
    "revision": "54f4712f4b3337a2d95cd397838da0b8"
  },
  {
    "url": "base/components/2.yAxis.html",
    "revision": "c7ddc13e9e5459172790a80f95c8dd60"
  },
  {
    "url": "base/components/3.angleAxis.html",
    "revision": "7e3f0358c99279a6b5cad74ebdc04826"
  },
  {
    "url": "base/components/4.radar.html",
    "revision": "1c20e9d372bf4730d1ccf7d71ed96732"
  },
  {
    "url": "base/components/5.dataZoom.html",
    "revision": "ab18d858db6ed02e5197f9a2226cd397"
  },
  {
    "url": "base/components/6.visualMap.html",
    "revision": "7253f5d84c50a220752f389414302a30"
  },
  {
    "url": "base/components/7.tooltip.html",
    "revision": "8a9ef5d9c07ba252f8b4e342dc0ebaf3"
  },
  {
    "url": "base/components/8.geo.html",
    "revision": "7888f96606f52e99bca7df1ba1e4bbf8"
  },
  {
    "url": "base/gl/1.index.html",
    "revision": "169a7210bd2bf90feadf0190f7d5873c"
  },
  {
    "url": "base/gl/1.scatter3D.html",
    "revision": "c9d82111db856ed64eb732d3e3784597"
  },
  {
    "url": "base/gl/10.flowGL.html",
    "revision": "beff0ff6cf1edccb1c4bd2c6e6eb3976"
  },
  {
    "url": "base/gl/2.bar3D.html",
    "revision": "7b77981e643f915a3dc124f14d518bfe"
  },
  {
    "url": "base/gl/3.line3D.html",
    "revision": "603b3920a522c185a484f12c2a644050"
  },
  {
    "url": "base/gl/4.lines3D.html",
    "revision": "b4c08a77a3e4c01c72dc149843abf726"
  },
  {
    "url": "base/gl/5.map3D.html",
    "revision": "28bd2c2e4cc90a0a3a2a83375b98426c"
  },
  {
    "url": "base/gl/6.surface.html",
    "revision": "27ad1d3d24af488a9b1e640be9132014"
  },
  {
    "url": "base/gl/7.polygons3D.html",
    "revision": "080ec00cb9bdf8401a00b6bebcb75cb5"
  },
  {
    "url": "base/gl/8.scatterGL.html",
    "revision": "abb8a917bb80c7a09281c281fef1b0e3"
  },
  {
    "url": "base/gl/9.graphGL.html",
    "revision": "7cc2bf3a33297b8b4b4fef89d19c0cea"
  },
  {
    "url": "base/series/1.index.html",
    "revision": "4bca033d3acedb534c9e655b8f2f0706"
  },
  {
    "url": "base/series/1.line.html",
    "revision": "a5c1c8e13ef8edea3fbe4cebf5cf0476"
  },
  {
    "url": "base/series/10.boxplot.html",
    "revision": "bf94e23106a40cc41975fe769915b243"
  },
  {
    "url": "base/series/11.candlestick.html",
    "revision": "2d0167d115922b9196445451df956e8f"
  },
  {
    "url": "base/series/12.heatmap.html",
    "revision": "30cd2479d34ca93b398593164c383ba0"
  },
  {
    "url": "base/series/13.map.html",
    "revision": "c9d3ad7376e1b3fae280bfc64d201c43"
  },
  {
    "url": "base/series/14.parallel.html",
    "revision": "ea3131ef3d4ccfb9b86c715d7091ac8a"
  },
  {
    "url": "base/series/15.lines.html",
    "revision": "add11f9000b23abc8314da43469ef89d"
  },
  {
    "url": "base/series/16.graph.html",
    "revision": "a4d23c7c5191b7bb10eb4dacc78f39f4"
  },
  {
    "url": "base/series/17.sankey.html",
    "revision": "b6ed68c82c139048bfa4616f0f0546a9"
  },
  {
    "url": "base/series/18.funnel.html",
    "revision": "dc739877056381f179681d8b8abc36b5"
  },
  {
    "url": "base/series/19.gauge.html",
    "revision": "920c0a120e98162ad7090a77c5eb62af"
  },
  {
    "url": "base/series/2.bar.html",
    "revision": "b90d09cb73fc0aec649dfb7dc7f7ad72"
  },
  {
    "url": "base/series/20.pictorialBar.html",
    "revision": "1953d4b2312e8e4ed50a104e26fe7cae"
  },
  {
    "url": "base/series/21.themeRiver.html",
    "revision": "575e8d10e27497fa0b96ac1d44b9eabf"
  },
  {
    "url": "base/series/22.custom.html",
    "revision": "029e7ecd59b563192a1f536a20dcdaf6"
  },
  {
    "url": "base/series/3.pie.html",
    "revision": "5acd7fba709c32f555727ac6b0aec85d"
  },
  {
    "url": "base/series/4.scatter.html",
    "revision": "ab448d2dd0c324f53a76060991fda960"
  },
  {
    "url": "base/series/5.effectScatter.html",
    "revision": "ba004b92522a3d59391054a1fcb1a397"
  },
  {
    "url": "base/series/6.radar.html",
    "revision": "4b91b2386c2e293bc6ca89a2ce102447"
  },
  {
    "url": "base/series/7.tree.html",
    "revision": "e82180cafc6a40ede10befab685180af"
  },
  {
    "url": "base/series/8.treemap.html",
    "revision": "f13d653ec1197297cedfa2b7c8e63ba0"
  },
  {
    "url": "base/series/9.sunburst.html",
    "revision": "0a2abedc721d31859c4b92f873aa7408"
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
    "revision": "f8525f27dea377a52cf4b5c8a15d8118"
  },
  {
    "url": "mock/http.js",
    "revision": "a219140640bec4dfbe8f4fe88d351ed8"
  },
  {
    "url": "senior/1.micro/1.index.html",
    "revision": "8c5d56b365b5be5625833964f3a31f9b"
  },
  {
    "url": "senior/1.micro/1.singlespa.html",
    "revision": "e8fa4c218293b83d226affbc7a8b8141"
  },
  {
    "url": "senior/1.micro/1.singlespa2.html",
    "revision": "fdb3af39182e3b677e29ad847c61fd47"
  },
  {
    "url": "senior/1.micro/2.qiankun.html",
    "revision": "e6c0d88e264bd79861df75735c5e9bc9"
  },
  {
    "url": "senior/1.micro/2.qiankun2.html",
    "revision": "f6e6a0eac516b84660fb31fcc2a48d23"
  },
  {
    "url": "senior/1.micro/3.share.html",
    "revision": "510cc1fb5d9ab12dc552d8d2d65e0d7c"
  },
  {
    "url": "senior/1.micro/4.dev.html",
    "revision": "732ce197a3444e441d441072b9efb205"
  },
  {
    "url": "senior/2.typescript/1.env.html",
    "revision": "42d3ee8be6ea519c0f390fa6b97686f6"
  },
  {
    "url": "senior/2.typescript/1.index.html",
    "revision": "211eb59c64ca93148ce523ea50365306"
  },
  {
    "url": "senior/2.typescript/10.infer.html",
    "revision": "ff45f5af3ef68d30afcbb8d3107f7ccd"
  },
  {
    "url": "senior/2.typescript/11.overlapping.html",
    "revision": "8730a0aa3287efbc8b9b724fe90a07f0"
  },
  {
    "url": "senior/2.typescript/12.condition.html",
    "revision": "f0f4cc33f0d16b2e340b5be0cbe11433"
  },
  {
    "url": "senior/2.typescript/13.builtin.html",
    "revision": "b048ea05c9f5646356dff8ec0679aec2"
  },
  {
    "url": "senior/2.typescript/14.package.html",
    "revision": "893fa6b320dd3a8af3dce52439604079"
  },
  {
    "url": "senior/2.typescript/15.custom.html",
    "revision": "64ce7e50d931d7042c5c57d10175e6f8"
  },
  {
    "url": "senior/2.typescript/16.unknown.html",
    "revision": "5e178d56a23f6dfb726419d46e4cff6f"
  },
  {
    "url": "senior/2.typescript/17.module.html",
    "revision": "8fc3f4f4369abf89cf8e2ec7d53c1954"
  },
  {
    "url": "senior/2.typescript/18.statement.html",
    "revision": "c8a4d3ddb345992263f594286cc4bea9"
  },
  {
    "url": "senior/2.typescript/19.extend.html",
    "revision": "fe9cd7e588cb284c48f65355b0335a5f"
  },
  {
    "url": "senior/2.typescript/2.base.html",
    "revision": "ce26356cfb1e4391e5b710bafc5e2a62"
  },
  {
    "url": "senior/2.typescript/3.deduction.html",
    "revision": "d56335bc6d0e67ee3c7564057c65ecd1"
  },
  {
    "url": "senior/2.typescript/4.type.html",
    "revision": "e32ddc00b8bc0b5bb1dce8bcc2720faa"
  },
  {
    "url": "senior/2.typescript/5.class.html",
    "revision": "b6646eb4a2a7141110e22a442941e793"
  },
  {
    "url": "senior/2.typescript/6.interface.html",
    "revision": "a68351fda4856861b842e572e0aa0bd5"
  },
  {
    "url": "senior/2.typescript/7.generic.html",
    "revision": "4d7ea5c7907b1dd176cc7613df042912"
  },
  {
    "url": "senior/2.typescript/8.compatible.html",
    "revision": "1c5b266ef9cc0819f249bfc240974846"
  },
  {
    "url": "senior/2.typescript/9.protect.html",
    "revision": "bc58439767b57de21bd0a66c7c9bf84d"
  },
  {
    "url": "senior/3.deploy/1.index.html",
    "revision": "fa891a01a76225dba2c0bf5d9dd88ae5"
  },
  {
    "url": "senior/3.deploy/1.local.html",
    "revision": "70a59bdaa6f86bfbd296f10a473da919"
  },
  {
    "url": "senior/3.deploy/2.gitlab.html",
    "revision": "ff5cc568c9e625ec1ee6b4b08d33e907"
  },
  {
    "url": "senior/3.deploy/3.genkins.html",
    "revision": "1979938079335a73282926dbf1de954f"
  },
  {
    "url": "senior/3.deploy/4.centos.html",
    "revision": "37a6dc6122c622c1be0f686b44013fca"
  },
  {
    "url": "senior/3.deploy/5.nginx.html",
    "revision": "3f27ff87933aa1fb999b929c765509a1"
  },
  {
    "url": "senior/4.component/1.button.html",
    "revision": "297e11161259414f3bb00de72b30d19c"
  },
  {
    "url": "senior/4.component/1.env.html",
    "revision": "d63bcc89f00cee27f526c4e5ad14e1b8"
  },
  {
    "url": "senior/4.component/1.index.html",
    "revision": "edfb19f15403bd7fe1bece051f45bda9"
  },
  {
    "url": "senior/4.component/1.recursion.html",
    "revision": "62b842f18ed9c988eec9ea50d598f037"
  },
  {
    "url": "senior/4.component/10.tree.html",
    "revision": "d3b441b5bccbe658006aee4019d6c74f"
  },
  {
    "url": "senior/4.component/12.table.html",
    "revision": "9e8222e15f2776142a3ddf46d594d7f7"
  },
  {
    "url": "senior/4.component/13.publish.html",
    "revision": "fc784e7ac04f45cac980cfd023a2a77b"
  },
  {
    "url": "senior/4.component/2.dropdown.html",
    "revision": "53b9030c8f08b5e7c8076053a6acb926"
  },
  {
    "url": "senior/4.component/3.dialog.html",
    "revision": "1519c5ae2da813787e767808fbdf744a"
  },
  {
    "url": "senior/4.component/3.form.html",
    "revision": "22697a3c4c4dab2302ca76d8f32b5338"
  },
  {
    "url": "senior/4.component/4.input.html",
    "revision": "5c9e6518523147b6986dff55fe999a16"
  },
  {
    "url": "senior/4.component/4.render.html",
    "revision": "919286af320d824b0603681d7c46a942"
  },
  {
    "url": "senior/4.component/5.checkBox.html",
    "revision": "068520dff792791298f4fefe314352c9"
  },
  {
    "url": "senior/4.component/6.cascader.html",
    "revision": "5806f32a4605f4da793ea5e4a4e4324c"
  },
  {
    "url": "senior/4.component/7.date.html",
    "revision": "3d6312bac575fbfb417c6d8081e94313"
  },
  {
    "url": "senior/4.component/8.dispaly.html",
    "revision": "ed5c0f51ee1cf0e9d9e108c3459401b4"
  },
  {
    "url": "senior/4.component/9.alert.html",
    "revision": "6fd34dceb2f197aea8b7e933482626b0"
  },
  {
    "url": "senior/4.component/9.dynamics.html",
    "revision": "f89f8b79a95f4a2f113d37b48616e4db"
  },
  {
    "url": "source/vue-cli2.x/1.index.html",
    "revision": "0935de4510de1c7bc2c41acf709c2612"
  },
  {
    "url": "source/vue-cli3.x/1.index.html",
    "revision": "509a98499d9fae9dc1ecab008064de35"
  },
  {
    "url": "source/vue-router3.x/1.index.html",
    "revision": "b8ec4b63146886787477bc01915f47e9"
  },
  {
    "url": "source/vue-router3.x/2.origin.html",
    "revision": "25ab528f7db92c76ae6de32aef6ac22b"
  },
  {
    "url": "source/vue-router4.x/1.index.html",
    "revision": "2ab96e330938fd8d40b91fa9c23d09db"
  },
  {
    "url": "source/vue2.x/1.index.html",
    "revision": "ca36900b1a9036dff8769b89eba82a9c"
  },
  {
    "url": "source/vue2.x/10.optimize.html",
    "revision": "246492f218762b361ffe2927e874ba28"
  },
  {
    "url": "source/vue2.x/11.gencode.html",
    "revision": "ffefd1d9bd78b42a3ee07d9cb2b24962"
  },
  {
    "url": "source/vue2.x/12.mount.html",
    "revision": "f1860381b1aa67e3ae64094039185859"
  },
  {
    "url": "source/vue2.x/13._render.html",
    "revision": "a15905ffe386f726cbbb961f7c6604fc"
  },
  {
    "url": "source/vue2.x/14._update.html",
    "revision": "348fffc59023d012f9fcf09e86de1a4d"
  },
  {
    "url": "source/vue2.x/2.initGlobalAPI.html",
    "revision": "f6957e1b14385603b4c5b90ea3bfc028"
  },
  {
    "url": "source/vue2.x/3.initMixin.html",
    "revision": "4aae515d2ce42521a892ce5cf0d88362"
  },
  {
    "url": "source/vue2.x/4.stateMixin.html",
    "revision": "7121df32e1ecf844f81dfcbe3d26cf4a"
  },
  {
    "url": "source/vue2.x/5.eventsMixin.html",
    "revision": "e10a9930e4d5f2856d7b22d9502a6ef7"
  },
  {
    "url": "source/vue2.x/6.lifecycleMixin.html",
    "revision": "20720c906833378958942400c7f3dea4"
  },
  {
    "url": "source/vue2.x/7.renderMixin.html",
    "revision": "51ddeb8181f4584efddab3cb5c7f9fec"
  },
  {
    "url": "source/vue2.x/8.mount.html",
    "revision": "927b6159ffe4be2abb1578c58b25e3d7"
  },
  {
    "url": "source/vue2.x/9.ast.html",
    "revision": "197fe2fe46d4c43dadc9f10feeda1638"
  },
  {
    "url": "source/vue3.x/1.index.html",
    "revision": "2ba217b913d4b5b6d0b430f7bae32bd9"
  },
  {
    "url": "source/vue3.x/10.optimize.html",
    "revision": "b03db42b0704a4fa94330bffc9857988"
  },
  {
    "url": "source/vue3.x/11.gencode.html",
    "revision": "9f95202d5b00f46c1e8e101b8a901a61"
  },
  {
    "url": "source/vue3.x/12.mount.html",
    "revision": "e2817831368b40723220265188de2ef8"
  },
  {
    "url": "source/vue3.x/13._render.html",
    "revision": "50285ef1fc0357505a0fce5e826545a4"
  },
  {
    "url": "source/vue3.x/14._update.html",
    "revision": "5b4c4546dd310dde161317fa6116db19"
  },
  {
    "url": "source/vue3.x/2.initGlobalAPI.html",
    "revision": "7d10f5f7898ddb23237cb4950dbe8f3c"
  },
  {
    "url": "source/vue3.x/3.initMixin.html",
    "revision": "71cb3503836ae15a10d5adef5928dd92"
  },
  {
    "url": "source/vue3.x/4.stateMixin.html",
    "revision": "e26955c8a6757bf5cf20f1a303577618"
  },
  {
    "url": "source/vue3.x/5.eventsMixin.html",
    "revision": "983936181bbaa328bacc554f72f601f6"
  },
  {
    "url": "source/vue3.x/6.lifecycleMixin.html",
    "revision": "2686685d7cb3444fb0909828fcd7c310"
  },
  {
    "url": "source/vue3.x/7.renderMixin.html",
    "revision": "34ed88ebae8867af1e16e77dc9154102"
  },
  {
    "url": "source/vue3.x/8.mount.html",
    "revision": "7ca338c3489227529af548a6197d7158"
  },
  {
    "url": "source/vue3.x/9.ast.html",
    "revision": "2c60f372e7cfde1b19218e1c8665423c"
  },
  {
    "url": "source/vuex3.x/1.index.html",
    "revision": "2b70376191a73e070a3bd1fd8271b377"
  },
  {
    "url": "source/vuex3.x/2.use.html",
    "revision": "b935eb50a7f2c9e788153a58d0363d72"
  },
  {
    "url": "source/vuex3.x/3.origin.html",
    "revision": "fe174e185e545b323bc5138e286c914f"
  },
  {
    "url": "source/vuex4.x/1.index.html",
    "revision": "7fcf38cf5e6bce3b0dd85d824d014dac"
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
