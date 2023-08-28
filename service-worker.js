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
    "revision": "db1cdd7c2c888ec869be920f420101d2"
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
    "url": "assets/js/123.465f4c49.js",
    "revision": "ab6ff7641bf47ed3a77d47ea4a2e1265"
  },
  {
    "url": "assets/js/124.97234d7b.js",
    "revision": "bb256fb2d7cc82a0a450048f9b4d416d"
  },
  {
    "url": "assets/js/125.7cbc6cc0.js",
    "revision": "3560cb2a2c20dc1ac97cd1308a10efc5"
  },
  {
    "url": "assets/js/126.0ac0f824.js",
    "revision": "09e2bd371624151cec49f0febf09d7d8"
  },
  {
    "url": "assets/js/127.5f4ca6f0.js",
    "revision": "7fe06dd3371946eb5768f3922bb2e97f"
  },
  {
    "url": "assets/js/128.b13f6427.js",
    "revision": "bf10afc8c300a30e097e3f060f9fb168"
  },
  {
    "url": "assets/js/129.d950d466.js",
    "revision": "1ad3d2788ee6d9a5e2a6909d13a8916f"
  },
  {
    "url": "assets/js/13.cd10538f.js",
    "revision": "0bc70f6ded69aa60523d47234ab439cc"
  },
  {
    "url": "assets/js/130.6cd39324.js",
    "revision": "a554783e9516904ed82aadb71e66dcb1"
  },
  {
    "url": "assets/js/131.a3b26d4e.js",
    "revision": "5c807868e41d38d6999a986e389290f8"
  },
  {
    "url": "assets/js/132.034911af.js",
    "revision": "d94cd8ec2006f6ad771d53ee57e2b136"
  },
  {
    "url": "assets/js/133.e90b7388.js",
    "revision": "1225c54e316bbdecd30eaa1b2d733191"
  },
  {
    "url": "assets/js/134.a335f71d.js",
    "revision": "165c4486b39df6573f8e9068b95dbcfd"
  },
  {
    "url": "assets/js/135.53ff0e10.js",
    "revision": "28c9aeff4ee7ee02c4b498462a288881"
  },
  {
    "url": "assets/js/136.b3ab792f.js",
    "revision": "0fd39602daefb1bfc38c112d0378d033"
  },
  {
    "url": "assets/js/137.9617c62a.js",
    "revision": "7e45ca96b5c684d88aaf83dd1e0096a1"
  },
  {
    "url": "assets/js/138.54c7de0e.js",
    "revision": "8432ae6bcbee147aa68def7a860b9604"
  },
  {
    "url": "assets/js/139.fbae5a82.js",
    "revision": "7eebb7205eebc309a3024afb6f8f2250"
  },
  {
    "url": "assets/js/14.20605773.js",
    "revision": "7955f3c0334e75679fb36a8c018539f7"
  },
  {
    "url": "assets/js/140.8ca16860.js",
    "revision": "d4e156fbac300b7342f784bc5a917429"
  },
  {
    "url": "assets/js/141.a6a2a8e2.js",
    "revision": "3f41fe1ccf9ddf4b991be336b2b189d6"
  },
  {
    "url": "assets/js/142.56db9a93.js",
    "revision": "c0fc74d4a2e51795350965e449ae2f6b"
  },
  {
    "url": "assets/js/143.d1a5d198.js",
    "revision": "94d83846b6d0fa3066ed76f65c0e4889"
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
    "revision": "e6dd26bd2043bf6acf7ea5d1389b1a8f"
  },
  {
    "url": "base/api/1.index.html",
    "revision": "2eaa457616c9db29d32813afd483f0ac"
  },
  {
    "url": "base/api/2.echartsInstance.html",
    "revision": "c64b6d7f85c700622676c8d2ef631f13"
  },
  {
    "url": "base/api/3.action.html",
    "revision": "d60fe08fe1f0ead67c06ef1dfe2abdec"
  },
  {
    "url": "base/api/4.events.html",
    "revision": "c6783f223762354283d01616c218ca17"
  },
  {
    "url": "base/components/1.index.html",
    "revision": "0c8bb342ae9366b076b66a1631142418"
  },
  {
    "url": "base/components/1.legend.html",
    "revision": "7970717c7329e72a547f9404cec36979"
  },
  {
    "url": "base/components/2.grid.html",
    "revision": "aeaf865e9bfb6c0a6a950ee2f9d1bb40"
  },
  {
    "url": "base/components/2.polar.html",
    "revision": "dcda0addfe7c78e5561601faab099e73"
  },
  {
    "url": "base/components/2.radiusAxis.html",
    "revision": "a05406f8f01ed9ad957b91cbddc5f19f"
  },
  {
    "url": "base/components/2.xAxis.html",
    "revision": "1cfcb5b1be265e3d459818aa3f6fb7e8"
  },
  {
    "url": "base/components/2.yAxis.html",
    "revision": "12cdbea853e4e65f06dfec95f9707e49"
  },
  {
    "url": "base/components/3.angleAxis.html",
    "revision": "8ea7f227461c405d7734519fbb5eb141"
  },
  {
    "url": "base/components/4.radar.html",
    "revision": "a5b8bd4863cdc085620fdcd669d0e19c"
  },
  {
    "url": "base/components/5.dataZoom.html",
    "revision": "d5685312e949e5803f8f77cde1920b5e"
  },
  {
    "url": "base/components/6.visualMap.html",
    "revision": "19a7aa8b3ddfd6fcbf7a7f8f944d1e62"
  },
  {
    "url": "base/components/7.tooltip.html",
    "revision": "3bb80495d39e682e489dbf5da4dd00cd"
  },
  {
    "url": "base/components/8.geo.html",
    "revision": "e41570600efc07b619731356be6e24f9"
  },
  {
    "url": "base/gl/1.index.html",
    "revision": "1e551f13b0507ca1a8319c3e4e4507a3"
  },
  {
    "url": "base/gl/1.scatter3D.html",
    "revision": "603addf5330d771cc1db1e41c7f3e938"
  },
  {
    "url": "base/gl/10.flowGL.html",
    "revision": "d418014e7d7b6183b9b5a6522f3471e1"
  },
  {
    "url": "base/gl/2.bar3D.html",
    "revision": "f01b5231eeb4b7e857d4e60bce5abd7b"
  },
  {
    "url": "base/gl/3.line3D.html",
    "revision": "d0cc1677f4092b48515f8ff51d47919a"
  },
  {
    "url": "base/gl/4.lines3D.html",
    "revision": "9edfb85d86fc7a365ddf9087a43515a7"
  },
  {
    "url": "base/gl/5.map3D.html",
    "revision": "4ec9567e68127b9ea3481997b10044ef"
  },
  {
    "url": "base/gl/6.surface.html",
    "revision": "7c9f6f52405aa70c861143c9a86b6a89"
  },
  {
    "url": "base/gl/7.polygons3D.html",
    "revision": "53757edc3823ab4eb821398b176888d9"
  },
  {
    "url": "base/gl/8.scatterGL.html",
    "revision": "fec2a6ca7aa4aaa0e07f47a195b44a28"
  },
  {
    "url": "base/gl/9.graphGL.html",
    "revision": "87090c25b99c1893090f3e1476a14a7b"
  },
  {
    "url": "base/series/1.index.html",
    "revision": "755f1f077a55e381b8d6c3fb10ae0cdc"
  },
  {
    "url": "base/series/1.line.html",
    "revision": "3acb05e6c18f48eb81ccb9845d9c0c82"
  },
  {
    "url": "base/series/10.boxplot.html",
    "revision": "a9d73e04e3df5753efbc918c9e786537"
  },
  {
    "url": "base/series/11.candlestick.html",
    "revision": "4eeb80629e1cdc4b17ecb480f3635878"
  },
  {
    "url": "base/series/12.heatmap.html",
    "revision": "55cad0e2a5d11b710f7db95fa0a2c48d"
  },
  {
    "url": "base/series/13.map.html",
    "revision": "13c76f0dbfdcc6e8345850b4f82c705f"
  },
  {
    "url": "base/series/14.parallel.html",
    "revision": "13328e5019d7952fae78230af37a9d24"
  },
  {
    "url": "base/series/15.lines.html",
    "revision": "2f2856fc5272a3787d9ce8ef7648f025"
  },
  {
    "url": "base/series/16.graph.html",
    "revision": "c3d772f746190656cc5e09c3ffdb9d13"
  },
  {
    "url": "base/series/17.sankey.html",
    "revision": "f948b07ac61c25e0fc90384e46eed4ac"
  },
  {
    "url": "base/series/18.funnel.html",
    "revision": "ada1fdacef729e151ce4a9a884ba9a1d"
  },
  {
    "url": "base/series/19.gauge.html",
    "revision": "3868ba7482d9d625aa3e8b30f790399c"
  },
  {
    "url": "base/series/2.bar.html",
    "revision": "11b5d8752b6ecf49050ab74b05f88ff3"
  },
  {
    "url": "base/series/20.pictorialBar.html",
    "revision": "61a28144f8a60f31cbbc0376534fabbc"
  },
  {
    "url": "base/series/21.themeRiver.html",
    "revision": "4d8f9f71e8cff2963f11feba1ce0a663"
  },
  {
    "url": "base/series/22.custom.html",
    "revision": "8f3a29d2400b41a3da4d5969917e696f"
  },
  {
    "url": "base/series/3.pie.html",
    "revision": "2a8dbecb254b4295463ad0af1c16d57a"
  },
  {
    "url": "base/series/4.scatter.html",
    "revision": "42e08248a5663688c28bb436aeb897fa"
  },
  {
    "url": "base/series/5.effectScatter.html",
    "revision": "0d710495def32a933c2b606425096b9f"
  },
  {
    "url": "base/series/6.radar.html",
    "revision": "348573fc482a6611379f3c79d3d58854"
  },
  {
    "url": "base/series/7.tree.html",
    "revision": "7108f6bad3abc5532f5fdbc4323c2482"
  },
  {
    "url": "base/series/8.treemap.html",
    "revision": "21f6ea811db7d0e95d84934a63dbd84f"
  },
  {
    "url": "base/series/9.sunburst.html",
    "revision": "71dca3b9d1a8f2754407801bc2299772"
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
    "revision": "c24da8ff29bd7d99de50e16aced0cef4"
  },
  {
    "url": "mock/http.js",
    "revision": "a219140640bec4dfbe8f4fe88d351ed8"
  },
  {
    "url": "senior/1.micro/1.index.html",
    "revision": "479fc8c7738f129f1a0a1eb968cdcddc"
  },
  {
    "url": "senior/1.micro/1.singlespa.html",
    "revision": "34b365424de89bba8193b422db798b19"
  },
  {
    "url": "senior/1.micro/1.singlespa2.html",
    "revision": "66c12945a6a9783aaa67e0b84e2764c9"
  },
  {
    "url": "senior/1.micro/2.qiankun.html",
    "revision": "c267a3b3ff81ba8139dc4e78e18b1646"
  },
  {
    "url": "senior/1.micro/2.qiankun2.html",
    "revision": "7d1af8e174474815595a4eaca7c339b2"
  },
  {
    "url": "senior/1.micro/3.share.html",
    "revision": "79f5526f0b5c3e24f68929bcd27ba62b"
  },
  {
    "url": "senior/1.micro/4.dev.html",
    "revision": "90ad8ea019560c62c83078199fcd4c38"
  },
  {
    "url": "senior/2.typescript/1.env.html",
    "revision": "2ffd5a6ea1b5d483a44309fc7a43cb34"
  },
  {
    "url": "senior/2.typescript/1.index.html",
    "revision": "acbf6480acbfce883d2ee04bbd1adcf3"
  },
  {
    "url": "senior/2.typescript/10.infer.html",
    "revision": "b9d986cfdadbd8813b23a27364e23e7e"
  },
  {
    "url": "senior/2.typescript/11.overlapping.html",
    "revision": "382dae5769a1d1fe79b5e5d9eac6fff7"
  },
  {
    "url": "senior/2.typescript/12.condition.html",
    "revision": "8904dace07d4059949854fbfe0d5e690"
  },
  {
    "url": "senior/2.typescript/13.builtin.html",
    "revision": "52464317fdcdffb9e41c7450d0e0a9cf"
  },
  {
    "url": "senior/2.typescript/14.package.html",
    "revision": "00743e1f703977e62756e2b8e2d2a014"
  },
  {
    "url": "senior/2.typescript/15.custom.html",
    "revision": "8c5975fb6b6f6ac159ff46da4a3b21b9"
  },
  {
    "url": "senior/2.typescript/16.unknown.html",
    "revision": "9106ea7616c605246fa930535a8793a1"
  },
  {
    "url": "senior/2.typescript/17.module.html",
    "revision": "7633b29d832a124cbe99844f81a775e8"
  },
  {
    "url": "senior/2.typescript/18.statement.html",
    "revision": "ca331d798835727a85114a49bc9bfafb"
  },
  {
    "url": "senior/2.typescript/19.extend.html",
    "revision": "a535538cb4a2ba1db4b27d75c76f1d06"
  },
  {
    "url": "senior/2.typescript/2.base.html",
    "revision": "3295a0fda343fb445753e43fbf412714"
  },
  {
    "url": "senior/2.typescript/3.deduction.html",
    "revision": "4724d37ab46709b1731aead2b5d8d2a7"
  },
  {
    "url": "senior/2.typescript/4.type.html",
    "revision": "62fe05d40dfaf4f5febb6536e41e12df"
  },
  {
    "url": "senior/2.typescript/5.class.html",
    "revision": "203e4564fdb6a6f09e38388da9f6ab51"
  },
  {
    "url": "senior/2.typescript/6.interface.html",
    "revision": "dfefbc2f16b75ff3f3ad3edf29b4111b"
  },
  {
    "url": "senior/2.typescript/7.generic.html",
    "revision": "1347aa1a0939547377996f8c4724fb7a"
  },
  {
    "url": "senior/2.typescript/8.compatible.html",
    "revision": "bc172a9b7b736cdba9e5b9749e23906a"
  },
  {
    "url": "senior/2.typescript/9.protect.html",
    "revision": "4ec742a356b098a94e227290a4dce9d4"
  },
  {
    "url": "senior/3.deploy/1.index.html",
    "revision": "7fd90a98373c228ea736a67f6b9a3934"
  },
  {
    "url": "senior/3.deploy/1.local.html",
    "revision": "c7e26cda6a262f4a4100f2e86c04f683"
  },
  {
    "url": "senior/3.deploy/2.gitlab.html",
    "revision": "95937ca9b0df689e6e9062d726808120"
  },
  {
    "url": "senior/3.deploy/3.genkins.html",
    "revision": "bc97f896ec54f3bbe56b4b499607bb41"
  },
  {
    "url": "senior/3.deploy/4.centos.html",
    "revision": "89cfe10ef84910f122d109ad401cd3bd"
  },
  {
    "url": "senior/3.deploy/5.nginx.html",
    "revision": "fb78ba295e557376d880bb9d0994c445"
  },
  {
    "url": "senior/4.component/1.button.html",
    "revision": "737ded59e4e80d7d776f159ef6ffca11"
  },
  {
    "url": "senior/4.component/1.env.html",
    "revision": "db67e26bf718155de631a31e76f64678"
  },
  {
    "url": "senior/4.component/1.index.html",
    "revision": "7b1ad05c42ea99167e2fdb62e5910af7"
  },
  {
    "url": "senior/4.component/1.recursion.html",
    "revision": "c23c8f26e7ab78581eaa5445fa4e3b29"
  },
  {
    "url": "senior/4.component/10.tree.html",
    "revision": "adf78ad7e7c190d9f5e4f27d5da25313"
  },
  {
    "url": "senior/4.component/12.table.html",
    "revision": "b6e811602e898aa3175481ad81fda89c"
  },
  {
    "url": "senior/4.component/13.publish.html",
    "revision": "588277c78c2b940cc1ba172fd0d687ac"
  },
  {
    "url": "senior/4.component/2.dropdown.html",
    "revision": "cc4e10195dd90850f539f40e697afb45"
  },
  {
    "url": "senior/4.component/3.dialog.html",
    "revision": "086c71fa28bc9d7a149443ac99abaae1"
  },
  {
    "url": "senior/4.component/3.form.html",
    "revision": "2cc2e4e7a9b446538c266c5787ea11f6"
  },
  {
    "url": "senior/4.component/4.input.html",
    "revision": "7a9f50ccc6825e5132aececa7302dadf"
  },
  {
    "url": "senior/4.component/4.render.html",
    "revision": "a22a115f7e19776c7eadcaf30601b614"
  },
  {
    "url": "senior/4.component/5.checkBox.html",
    "revision": "e0816b58f6af36c28e7328d56145d47b"
  },
  {
    "url": "senior/4.component/6.cascader.html",
    "revision": "9db6657dad5701585b0909d5b90ade2d"
  },
  {
    "url": "senior/4.component/7.date.html",
    "revision": "57c7ee29d0a3512c22d82d054eb23bd4"
  },
  {
    "url": "senior/4.component/8.dispaly.html",
    "revision": "eabd907c871971fdb675ec1ffde75a2f"
  },
  {
    "url": "senior/4.component/9.alert.html",
    "revision": "77e838894604dd6ba59852d10b9baeed"
  },
  {
    "url": "senior/4.component/9.dynamics.html",
    "revision": "a62f07895189815d85ed6d3c10c8e58a"
  },
  {
    "url": "source/vue-cli2.x/1.index.html",
    "revision": "fa123e7ded8486f6967a01cd669d778d"
  },
  {
    "url": "source/vue-cli3.x/1.index.html",
    "revision": "ccd8f7e84335609cf738f9f2ce9df00c"
  },
  {
    "url": "source/vue-router3.x/1.index.html",
    "revision": "8c325565283d66b0fa4245e7f129b655"
  },
  {
    "url": "source/vue-router3.x/2.origin.html",
    "revision": "faf45a83f89e6055688a2646dff90755"
  },
  {
    "url": "source/vue-router4.x/1.index.html",
    "revision": "4779247bca1971fe24c6a262c0726f97"
  },
  {
    "url": "source/vue2.x/1.index.html",
    "revision": "d98ceae15cf7250e8813ce76e04bda45"
  },
  {
    "url": "source/vue2.x/10.optimize.html",
    "revision": "adecb28735d8062201988bf7aaf9251c"
  },
  {
    "url": "source/vue2.x/11.gencode.html",
    "revision": "6542b343b5ac0ce1ec48c224ce9b7d2a"
  },
  {
    "url": "source/vue2.x/12.mount.html",
    "revision": "fb68e23034f9fe633d3600a368baea0e"
  },
  {
    "url": "source/vue2.x/13._render.html",
    "revision": "66c805eab9a978c17d11aafb9a080496"
  },
  {
    "url": "source/vue2.x/14._update.html",
    "revision": "274c565cdcfd042468be8c83d2a10ee9"
  },
  {
    "url": "source/vue2.x/2.initGlobalAPI.html",
    "revision": "22cb3d254235c16186ff6f05346f655a"
  },
  {
    "url": "source/vue2.x/3.initMixin.html",
    "revision": "d14dd3f178748e01ccc8b6cf1297efb2"
  },
  {
    "url": "source/vue2.x/4.stateMixin.html",
    "revision": "24c003a92ed37fd4a147ac8b9f819b88"
  },
  {
    "url": "source/vue2.x/5.eventsMixin.html",
    "revision": "a6aa53d56f5f9958086ee30bcc8da470"
  },
  {
    "url": "source/vue2.x/6.lifecycleMixin.html",
    "revision": "8b08d408cfb671a1065d925a89d0c093"
  },
  {
    "url": "source/vue2.x/7.renderMixin.html",
    "revision": "eca194001ee716b9174aff28954036de"
  },
  {
    "url": "source/vue2.x/8.mount.html",
    "revision": "99bb9fdf2ae57f80d12a963d74876bc9"
  },
  {
    "url": "source/vue2.x/9.ast.html",
    "revision": "5e8f2c3af5744d68e7c256e165d4de1f"
  },
  {
    "url": "source/vue3.x/1.index.html",
    "revision": "0f669b5144e0f5db183657284a11968c"
  },
  {
    "url": "source/vue3.x/10.optimize.html",
    "revision": "15f05446b703ca0b5e2aba17ef9ad4dd"
  },
  {
    "url": "source/vue3.x/11.gencode.html",
    "revision": "036d4b3b9c168578de658fe728229b21"
  },
  {
    "url": "source/vue3.x/12.mount.html",
    "revision": "e19e09b78e9226fd095d254f963c8165"
  },
  {
    "url": "source/vue3.x/13._render.html",
    "revision": "297e067463bf750d3b32d01e171303ad"
  },
  {
    "url": "source/vue3.x/14._update.html",
    "revision": "2cb02e058aef9c5f908f9705b9aade47"
  },
  {
    "url": "source/vue3.x/2.initGlobalAPI.html",
    "revision": "29bccad707f058c60ba7c3e22d187a81"
  },
  {
    "url": "source/vue3.x/3.initMixin.html",
    "revision": "78135ce1ec8b82632e8cdcc4d78f6366"
  },
  {
    "url": "source/vue3.x/4.stateMixin.html",
    "revision": "8f1e62a125bc87da26890d1e3fa4b167"
  },
  {
    "url": "source/vue3.x/5.eventsMixin.html",
    "revision": "b9c274e85e69ce374d06f3b9bbb387bd"
  },
  {
    "url": "source/vue3.x/6.lifecycleMixin.html",
    "revision": "f8b204937176f55a646529ecb811bee2"
  },
  {
    "url": "source/vue3.x/7.renderMixin.html",
    "revision": "67980db322bc9d25301a0a4f5eff0c5f"
  },
  {
    "url": "source/vue3.x/8.mount.html",
    "revision": "d9db408f20d38a4751fea21f51ee8a50"
  },
  {
    "url": "source/vue3.x/9.ast.html",
    "revision": "bc08b9f630c5f99fdc4106a51287a931"
  },
  {
    "url": "source/vuex3.x/1.index.html",
    "revision": "eb442a1e06d1b5792f65c25d7a854bf5"
  },
  {
    "url": "source/vuex3.x/2.use.html",
    "revision": "954e692e68903c7899bff49f537fefb9"
  },
  {
    "url": "source/vuex3.x/3.origin.html",
    "revision": "11695466d21a33654499605a0b5cf268"
  },
  {
    "url": "source/vuex4.x/1.index.html",
    "revision": "fd965e7bd389bc93903aa8c0f203f3e5"
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
