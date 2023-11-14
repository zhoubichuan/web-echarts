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
    "revision": "683eea8f41bfe16036d776e8955de477"
  },
  {
    "url": "assets/css/0.styles.feb6ee6a.css",
    "revision": "2450395fe091378006354d6cbf0ac72c"
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
    "url": "assets/js/10.4ac3847b.js",
    "revision": "005990bd82468bee48bf2e17e93397d3"
  },
  {
    "url": "assets/js/100.1e508964.js",
    "revision": "f3b54c434323bb0e8812b3f8fb171b0e"
  },
  {
    "url": "assets/js/101.7ded009c.js",
    "revision": "f86e6d992d4afb3c486fd5f14f28acd4"
  },
  {
    "url": "assets/js/102.2833b85a.js",
    "revision": "43ca0efac0f0183cb4b5957bb9bab2ee"
  },
  {
    "url": "assets/js/103.3471bdb9.js",
    "revision": "fe85e356d266687ae1dabc885fc79bae"
  },
  {
    "url": "assets/js/104.4bb0f946.js",
    "revision": "bbe63dcd486712fcbdd0c090cf53ce6e"
  },
  {
    "url": "assets/js/105.d951c0b7.js",
    "revision": "816bad475775e81490733f0c92e189f0"
  },
  {
    "url": "assets/js/106.b6073961.js",
    "revision": "9daa9797de465153d2ac8747b4489d5c"
  },
  {
    "url": "assets/js/107.9618c4f4.js",
    "revision": "54dcbd27e35d73a3c8f41cdc71092f54"
  },
  {
    "url": "assets/js/108.03fc771e.js",
    "revision": "70384218a6d39f9c6c67e3c1ac75d5ce"
  },
  {
    "url": "assets/js/109.d14dfd2f.js",
    "revision": "6f24d6083e4f3bccc737b863db424769"
  },
  {
    "url": "assets/js/11.8cbde94a.js",
    "revision": "f3b188da117ca1835dbf1e4debec1bd7"
  },
  {
    "url": "assets/js/110.36d450f8.js",
    "revision": "18eedd014c8bb8ccfbee58dba8767d9c"
  },
  {
    "url": "assets/js/111.9f955d18.js",
    "revision": "85f0556c919f44352ac22b4c023a8454"
  },
  {
    "url": "assets/js/112.9ff956ad.js",
    "revision": "2dd803e7f631713d4f1ab143d06472ff"
  },
  {
    "url": "assets/js/113.13f05b1b.js",
    "revision": "ffd2c75204aeff3dac326f354c84b56d"
  },
  {
    "url": "assets/js/114.85a4c2f5.js",
    "revision": "187eaf653992cc07cf9da245763a1d92"
  },
  {
    "url": "assets/js/115.b858615a.js",
    "revision": "ba604ee75be9e1b6369db5e8ee76b5e5"
  },
  {
    "url": "assets/js/116.9f9cd6bd.js",
    "revision": "4490a5e26add1906ebc4f6a025e18530"
  },
  {
    "url": "assets/js/117.e7ce82dc.js",
    "revision": "d781ced140cca6136809083fead2404e"
  },
  {
    "url": "assets/js/118.2991c89d.js",
    "revision": "25e5f5f9a2f5a11a1b599045d4a1cf15"
  },
  {
    "url": "assets/js/119.cdb17d7f.js",
    "revision": "48ae3182106c0f4293f1e2cd437e44f2"
  },
  {
    "url": "assets/js/12.55833a57.js",
    "revision": "5f68a568a02097a29b804d4989b75e00"
  },
  {
    "url": "assets/js/120.40f20665.js",
    "revision": "9221c3570b77757e3c9fe0dfc46378bd"
  },
  {
    "url": "assets/js/121.ac58cece.js",
    "revision": "d3fa1b65c2894757ca853265dc15dfe7"
  },
  {
    "url": "assets/js/122.b1f2abe2.js",
    "revision": "c73ddc41554c64491a1f1ae62ddfa657"
  },
  {
    "url": "assets/js/123.8cb963ae.js",
    "revision": "e8c0e5b17e5a4dabcce23d621acc98b8"
  },
  {
    "url": "assets/js/124.016e7baa.js",
    "revision": "882127812230dfea8c53df27b9417c06"
  },
  {
    "url": "assets/js/125.b00ae97c.js",
    "revision": "51e1c99772d5719846f69d46dd77c61f"
  },
  {
    "url": "assets/js/126.02abcaa4.js",
    "revision": "6ecdb69532fa4cca4056615cabf46957"
  },
  {
    "url": "assets/js/127.78a89376.js",
    "revision": "5a6f98cd9b65a1dc58f13ebe226cba01"
  },
  {
    "url": "assets/js/128.a8c09743.js",
    "revision": "f27749227857b9c0e11eddcf3fae9199"
  },
  {
    "url": "assets/js/129.002589b2.js",
    "revision": "b85631009723275934952deb080527cb"
  },
  {
    "url": "assets/js/13.696d7318.js",
    "revision": "da149115706b623a536a20b89fe887dd"
  },
  {
    "url": "assets/js/130.b416a3fc.js",
    "revision": "56211f062e703b875186fcc0e54d9927"
  },
  {
    "url": "assets/js/131.a1515953.js",
    "revision": "6c6b6c5ddefac330171c89606a76c131"
  },
  {
    "url": "assets/js/132.0454be44.js",
    "revision": "ab78e1834815116aa075f42aa09f522a"
  },
  {
    "url": "assets/js/133.d7919cc9.js",
    "revision": "842dddb916686966a03fcd7b3c092995"
  },
  {
    "url": "assets/js/134.8c3135b9.js",
    "revision": "e881c820eb6f9221ca7a876c088e39cf"
  },
  {
    "url": "assets/js/135.68222806.js",
    "revision": "6b02c7c3e1a3070697ed99f379c815db"
  },
  {
    "url": "assets/js/136.fb81af00.js",
    "revision": "48ec6cd69de73924a02dcbef2e607f07"
  },
  {
    "url": "assets/js/137.93e0a61f.js",
    "revision": "7f5e629a804e4eab377ba33ab9b0a7d9"
  },
  {
    "url": "assets/js/138.3cf1aee3.js",
    "revision": "ef0282e3f1efb05f7991f956ba35fc9e"
  },
  {
    "url": "assets/js/139.318638d8.js",
    "revision": "1d17ed6c026e9d4eb7899820dc568ef2"
  },
  {
    "url": "assets/js/14.ec761b2f.js",
    "revision": "8cd52fb1ce44b93cfd1c6b2b7a82902f"
  },
  {
    "url": "assets/js/140.174a675c.js",
    "revision": "17187282539827c66a96920e122dd0be"
  },
  {
    "url": "assets/js/141.f865eccc.js",
    "revision": "c4434eeb933a340a1b4562b5fb934560"
  },
  {
    "url": "assets/js/142.18d93873.js",
    "revision": "22eba246098ff492cf43da0954ec0ada"
  },
  {
    "url": "assets/js/143.99484150.js",
    "revision": "95c2481190a4421c51daf9eb90c232e1"
  },
  {
    "url": "assets/js/144.56895edb.js",
    "revision": "7e12bf0913291df121cab4e2b4b95101"
  },
  {
    "url": "assets/js/145.3b24f069.js",
    "revision": "cb30178d6f04ae870d616729158782de"
  },
  {
    "url": "assets/js/146.5605be31.js",
    "revision": "dbf5c331ec59abc5f7ccc63b96d5384a"
  },
  {
    "url": "assets/js/147.748d987b.js",
    "revision": "33f8e32fb92012f6d927ce577935120c"
  },
  {
    "url": "assets/js/148.ecae309d.js",
    "revision": "9b4c271f4c786a6d925260c946e7cb73"
  },
  {
    "url": "assets/js/149.3a9eae2e.js",
    "revision": "2a73616df21a1882960fd2b9855128dd"
  },
  {
    "url": "assets/js/15.09d8ca0d.js",
    "revision": "7d175524b054518889c20aae6a023da5"
  },
  {
    "url": "assets/js/150.29208b67.js",
    "revision": "d603d09f88083a4e2501594cddfe599c"
  },
  {
    "url": "assets/js/151.cffaf6d1.js",
    "revision": "004ab52810280fa294800970f5daa522"
  },
  {
    "url": "assets/js/152.4606cb75.js",
    "revision": "20f9c28a0041405aa560d80c6a51898f"
  },
  {
    "url": "assets/js/153.c1ef00c7.js",
    "revision": "2321f166b1162b9cce28ad012b572e75"
  },
  {
    "url": "assets/js/154.8a152c78.js",
    "revision": "3e777c419ddfba78af76929ee2cc5a6b"
  },
  {
    "url": "assets/js/155.17f36be5.js",
    "revision": "68b8a5a1706040e6467bbfb069cc8f13"
  },
  {
    "url": "assets/js/156.5f063f06.js",
    "revision": "9501211b9523d656ea7ecf8d34d44258"
  },
  {
    "url": "assets/js/16.4676a72b.js",
    "revision": "d1193138110741ffeb6166b48ea829f3"
  },
  {
    "url": "assets/js/17.5e93c62a.js",
    "revision": "50e8321bce7fa5bda60dee7b3ff99d84"
  },
  {
    "url": "assets/js/18.e4ea5e8e.js",
    "revision": "e52887614b613de6119c298280b0aeb3"
  },
  {
    "url": "assets/js/19.de0e9232.js",
    "revision": "7382999426a48a28609988649714f65b"
  },
  {
    "url": "assets/js/2.4b75ea7a.js",
    "revision": "79078cd517a34ca3755b5d5c0527bfc1"
  },
  {
    "url": "assets/js/20.bb832777.js",
    "revision": "d282d276bfbb7cf15161c2310fc4d4c1"
  },
  {
    "url": "assets/js/21.0573a69f.js",
    "revision": "acbe7f79a42656fc20c3a4d6e9b5dbef"
  },
  {
    "url": "assets/js/22.faa6229c.js",
    "revision": "3ad9707ffa2fd084e4b0f7b0d411db58"
  },
  {
    "url": "assets/js/23.22e0a18b.js",
    "revision": "6227b19ce9fa0b88215cd571fcee6077"
  },
  {
    "url": "assets/js/24.c5b2661b.js",
    "revision": "d6357749253d46c3acde63fa5c51cd16"
  },
  {
    "url": "assets/js/25.48bbf77b.js",
    "revision": "9a1b632b1be15d558e2c5269ce217650"
  },
  {
    "url": "assets/js/26.3cc6b1d3.js",
    "revision": "3fcdfbb7c1faf39b68b71c20946603a6"
  },
  {
    "url": "assets/js/27.47067f26.js",
    "revision": "d97fc797a5eb08c60d30724ff1d5b5e5"
  },
  {
    "url": "assets/js/28.0fe24095.js",
    "revision": "029847f461f8c2c6a0ceeb327d13d794"
  },
  {
    "url": "assets/js/29.28ed0536.js",
    "revision": "8c8f646455ef1cb23964da9aa6e0cf1d"
  },
  {
    "url": "assets/js/3.cf65085c.js",
    "revision": "54dad147ab10d8a14601b78b306e5426"
  },
  {
    "url": "assets/js/30.6efc9632.js",
    "revision": "d67b551f2e48cc47f5d4ce01b85a37b5"
  },
  {
    "url": "assets/js/31.fb2b9723.js",
    "revision": "f938d5db618cc2f5e83ae0cd9f6ca868"
  },
  {
    "url": "assets/js/32.ccee044b.js",
    "revision": "15057c75a4c6b1c686cc46f136885b23"
  },
  {
    "url": "assets/js/33.7df1ac78.js",
    "revision": "04e18c40765a39a2345913be0eb4c912"
  },
  {
    "url": "assets/js/34.264977d6.js",
    "revision": "8c022080c8c2c0af60d8c86aa4542d8d"
  },
  {
    "url": "assets/js/35.d7596f90.js",
    "revision": "f7276e8555ff1406a95b072d5e1f532d"
  },
  {
    "url": "assets/js/36.a2536120.js",
    "revision": "33640d890f1e7b76443e58739e6d2e61"
  },
  {
    "url": "assets/js/37.2ac271a9.js",
    "revision": "f5e30627cdcace5d4b1432a594514d73"
  },
  {
    "url": "assets/js/38.2614df5f.js",
    "revision": "d7fc54ca067462ae2bc645168b45ad8f"
  },
  {
    "url": "assets/js/39.604e2539.js",
    "revision": "b04a2148827ae6390abafe9c3dcb5b26"
  },
  {
    "url": "assets/js/4.b5c059dc.js",
    "revision": "9e3b4a72624097aaa4c075588e8a3e0f"
  },
  {
    "url": "assets/js/40.be519b91.js",
    "revision": "967c856f760b2bd5f51daaeb72b2ccf7"
  },
  {
    "url": "assets/js/41.da625845.js",
    "revision": "7b1482587b7891c229cff4183b0c9361"
  },
  {
    "url": "assets/js/42.6e96053a.js",
    "revision": "8c46513fb72018e6c0d55300a6fcfaac"
  },
  {
    "url": "assets/js/43.3c3927f0.js",
    "revision": "541dd49b677d3caff1f8c6b1ef1cbd28"
  },
  {
    "url": "assets/js/44.99c63bf7.js",
    "revision": "05aa34b38b117ac617709850f22ab17e"
  },
  {
    "url": "assets/js/45.4b2abf8e.js",
    "revision": "c281d1ed6e7acda2ac2aeb3b2be1a095"
  },
  {
    "url": "assets/js/46.0913e222.js",
    "revision": "87a0bb33700a0c59553c054400af8fb2"
  },
  {
    "url": "assets/js/47.4d435842.js",
    "revision": "2f3255d65580ee3265f560e30f833a5c"
  },
  {
    "url": "assets/js/48.b426352f.js",
    "revision": "08ced938a8961024168f0c1d0e7be29c"
  },
  {
    "url": "assets/js/49.6f2bbb69.js",
    "revision": "55b85b8df0ffa00dbf1f94b214d0e8dc"
  },
  {
    "url": "assets/js/5.3da9d424.js",
    "revision": "f731ecb1ea081e87e91ec42ef8f8cc2d"
  },
  {
    "url": "assets/js/50.8d30758d.js",
    "revision": "adfa63472b3a771f15265368d931712f"
  },
  {
    "url": "assets/js/51.6d4305b0.js",
    "revision": "a824ba6ef71a7e00ee75819257ba5099"
  },
  {
    "url": "assets/js/52.1cd7acbd.js",
    "revision": "f6136fb72f9a6963ebaa2acb365b426d"
  },
  {
    "url": "assets/js/53.ff562316.js",
    "revision": "21c85643d4f908d58c18dd0403bd75cc"
  },
  {
    "url": "assets/js/54.8ae14703.js",
    "revision": "41cef8e7e90d4471fd2210df6df27dbe"
  },
  {
    "url": "assets/js/55.2f4e35d9.js",
    "revision": "630394e3d97d1de40102bddea44ca5f9"
  },
  {
    "url": "assets/js/56.d8d5afa5.js",
    "revision": "cb133c2e6b66d9ad6141aa41572489c4"
  },
  {
    "url": "assets/js/57.e07f6198.js",
    "revision": "15665a77f196a1d3d82b1266057000be"
  },
  {
    "url": "assets/js/58.4f6886cd.js",
    "revision": "74dd279ce4cc329213197e511c104e78"
  },
  {
    "url": "assets/js/59.eac31920.js",
    "revision": "bcdfbef0df932e23b8c5653085d922c6"
  },
  {
    "url": "assets/js/6.4040d6c6.js",
    "revision": "a912cb59a461bf806186da2d37c9f70d"
  },
  {
    "url": "assets/js/60.8e956fe9.js",
    "revision": "abbabbe7b4ace988c5850f0f60ad0097"
  },
  {
    "url": "assets/js/61.8e06282f.js",
    "revision": "0f6a1faefa428e4cefcce96fe25eeff8"
  },
  {
    "url": "assets/js/62.9b934d2a.js",
    "revision": "50f855dad61baf83c04dabbfd7ca87af"
  },
  {
    "url": "assets/js/63.8d6a2237.js",
    "revision": "bfd70335055a211d4a5376437eac447b"
  },
  {
    "url": "assets/js/64.45456ffd.js",
    "revision": "0908b14d6a96fc7e64c618f303327925"
  },
  {
    "url": "assets/js/65.4e24f8a5.js",
    "revision": "e8c5d221b21be9523154a318d2a19922"
  },
  {
    "url": "assets/js/66.699b8e6e.js",
    "revision": "b9fa61d800bee60fb2dbb2c264f454ac"
  },
  {
    "url": "assets/js/67.589fe0f2.js",
    "revision": "268af14e923982e80351326019150fcd"
  },
  {
    "url": "assets/js/68.c11a3bd8.js",
    "revision": "b32e39c4be6673819153ff5978a38f8d"
  },
  {
    "url": "assets/js/69.c6c8079b.js",
    "revision": "2dc0eda2e2e6e1c45a1ff8e7bd605269"
  },
  {
    "url": "assets/js/7.594e8322.js",
    "revision": "335139cc884a0daf61d2ba03289f7bc5"
  },
  {
    "url": "assets/js/70.f951d3eb.js",
    "revision": "34d8fa16e50e03e9fce1c1e9d77da229"
  },
  {
    "url": "assets/js/71.67625475.js",
    "revision": "9b913d996f92a59cba9cada49339a7db"
  },
  {
    "url": "assets/js/72.18db08fc.js",
    "revision": "f6484e94527cd25ebe5381a194fd6776"
  },
  {
    "url": "assets/js/73.68452df2.js",
    "revision": "03fdf8ec174955efe4a20b4ae2425d0a"
  },
  {
    "url": "assets/js/74.61837b92.js",
    "revision": "38816df9b5adb50cbf18609aa2566045"
  },
  {
    "url": "assets/js/75.c0ce3c24.js",
    "revision": "b279866f39add69d9d009315ca7216f8"
  },
  {
    "url": "assets/js/76.64712cf2.js",
    "revision": "1aa020343df0e11222b4743b8dc4754d"
  },
  {
    "url": "assets/js/77.c8ce9a8c.js",
    "revision": "58163c2cbc41662872101ca81dc6eda7"
  },
  {
    "url": "assets/js/78.c96c9744.js",
    "revision": "bfa1f72b2be004693c81f518dc2bd9b9"
  },
  {
    "url": "assets/js/79.6af1f8da.js",
    "revision": "c78795b426d545c78651564458edc7c3"
  },
  {
    "url": "assets/js/8.b79ee4e5.js",
    "revision": "9fe363c190b7f38b7f9dacc8ea82f8a0"
  },
  {
    "url": "assets/js/80.6509b5da.js",
    "revision": "4512d9e0038586b5e87253cece0141b1"
  },
  {
    "url": "assets/js/81.96f7912f.js",
    "revision": "f8a84ebc9155b98e2e70b3b907c54689"
  },
  {
    "url": "assets/js/82.481fb62a.js",
    "revision": "bbd3154b83dc9ac974925f23430345e5"
  },
  {
    "url": "assets/js/83.f5292d86.js",
    "revision": "12464d1f6a48d8563aafaf9411410f4a"
  },
  {
    "url": "assets/js/84.74d6ba2d.js",
    "revision": "b3db82ab4456462d21ad8567adf38b6e"
  },
  {
    "url": "assets/js/85.19999303.js",
    "revision": "fc1991849dfc25a26fb9a4ac134160bd"
  },
  {
    "url": "assets/js/86.72665574.js",
    "revision": "c76c4a321a7ae157c839ca0230492ba6"
  },
  {
    "url": "assets/js/87.8d38f063.js",
    "revision": "f5419bd9412fc810629cee0f08699044"
  },
  {
    "url": "assets/js/88.14f7d6de.js",
    "revision": "e36e8facab3db19d67e3deeb446589ff"
  },
  {
    "url": "assets/js/89.8adb244c.js",
    "revision": "417a2a546c5916ca9322319350b487f0"
  },
  {
    "url": "assets/js/9.8743a524.js",
    "revision": "e464600a49c876e849c24f578ee49e83"
  },
  {
    "url": "assets/js/90.c9fc476d.js",
    "revision": "8830f2cd8166c5e4e6f730808194c365"
  },
  {
    "url": "assets/js/91.880fdafb.js",
    "revision": "60c50af9b8b852bd32e06506439d192a"
  },
  {
    "url": "assets/js/92.beeb3ff9.js",
    "revision": "8614c9cfff7ad0dc7a115b373ee1d06d"
  },
  {
    "url": "assets/js/93.f034b704.js",
    "revision": "bf6979107c22edc3f940b5436dff1a06"
  },
  {
    "url": "assets/js/94.fbd9cb0d.js",
    "revision": "0babc25db5b1ed53086fb08c0c804502"
  },
  {
    "url": "assets/js/95.edc69956.js",
    "revision": "4c5bea99f18649c80a89c10d7c41befa"
  },
  {
    "url": "assets/js/96.3de15470.js",
    "revision": "463d9092fabe44bb483bf717a73a9b87"
  },
  {
    "url": "assets/js/97.1ab6f244.js",
    "revision": "812e96ad4c8c765856f46d4422a545d5"
  },
  {
    "url": "assets/js/98.bc98acec.js",
    "revision": "de2c7a3e1048fc8e6d0b1b198c55262e"
  },
  {
    "url": "assets/js/99.606c450a.js",
    "revision": "2f17c1dda8636c3d8c1407aca04f33bd"
  },
  {
    "url": "base/api/1.echarts.html",
    "revision": "406d22e7583cddfad689026e4ff413bf"
  },
  {
    "url": "base/api/1.index.html",
    "revision": "ebcef15c8edfa023d22592787848434e"
  },
  {
    "url": "base/api/2.echartsInstance.html",
    "revision": "dfa5b5122d6e968e65528d1ca5cb0219"
  },
  {
    "url": "base/api/3.action.html",
    "revision": "ab3ed817c04fce96851437fd8eb59421"
  },
  {
    "url": "base/api/4.events.html",
    "revision": "a47c83d9f5d12f8aacda618c9b36b6dc"
  },
  {
    "url": "base/components/1.index.html",
    "revision": "4d2bfcb20411ca585141ddb98913921a"
  },
  {
    "url": "base/components/1.legend.html",
    "revision": "e0e31ad089c8bb633f196a6104417404"
  },
  {
    "url": "base/components/2.grid.html",
    "revision": "eae9c49c20fe2bceca05e09338a6bdcf"
  },
  {
    "url": "base/components/2.polar.html",
    "revision": "f43b31e2dc989bacdbfdbd1ce4977824"
  },
  {
    "url": "base/components/2.radiusAxis.html",
    "revision": "170ecf4dd62511861f88c8ddf227590a"
  },
  {
    "url": "base/components/2.xAxis.html",
    "revision": "44b3e180dadd1f5f670310c8f339f4c0"
  },
  {
    "url": "base/components/2.yAxis.html",
    "revision": "1791b4a2ed94c306f076b9dd1d918e40"
  },
  {
    "url": "base/components/3.angleAxis.html",
    "revision": "934165ab0ec9cd621eba04f3f2bf2bf7"
  },
  {
    "url": "base/components/4.radar.html",
    "revision": "806b71e8607db01701e6e19121b789f1"
  },
  {
    "url": "base/components/5.dataZoom.html",
    "revision": "2c8d033f4336320fef36f422b3d5ad66"
  },
  {
    "url": "base/components/6.visualMap.html",
    "revision": "d73baf737931a784be1572193b7877b8"
  },
  {
    "url": "base/components/7.tooltip.html",
    "revision": "4e64caf5b92c3e05fd1fc2d0d6a0dda9"
  },
  {
    "url": "base/components/8.geo.html",
    "revision": "13a39c185fc8ec1cb5aa0929ec9a1f40"
  },
  {
    "url": "base/gl/1.index.html",
    "revision": "8a69da3ba5b378bfb7df3df3147a2b4f"
  },
  {
    "url": "base/gl/1.scatter3D.html",
    "revision": "120846dab06fd005ab1f3ea46e19b5b0"
  },
  {
    "url": "base/gl/10.flowGL.html",
    "revision": "8f5396645da99c9e9683cf4a2958f4cd"
  },
  {
    "url": "base/gl/2.bar3D.html",
    "revision": "20833079f102a5855167c7fa9ca47a48"
  },
  {
    "url": "base/gl/3.line3D.html",
    "revision": "7e514bf3f41a3ddb2840206c911bf7bb"
  },
  {
    "url": "base/gl/4.lines3D.html",
    "revision": "0d8fc7d407c896c1e26ca40968230096"
  },
  {
    "url": "base/gl/5.map3D.html",
    "revision": "fcdaf101e9b70299e4d1f8d00cdfb644"
  },
  {
    "url": "base/gl/6.surface.html",
    "revision": "cf8035c67e8d07d4acb8d2fd55614078"
  },
  {
    "url": "base/gl/7.polygons3D.html",
    "revision": "deba3f80c3d5589362d1884f4cf74171"
  },
  {
    "url": "base/gl/8.scatterGL.html",
    "revision": "101c5bba1f269e99a4a82d2b72d9db86"
  },
  {
    "url": "base/gl/9.graphGL.html",
    "revision": "eaf525767b6ac2c018e8f32a34646772"
  },
  {
    "url": "base/series/1.index.html",
    "revision": "5a0a9767a0b667ff0b93779211a70409"
  },
  {
    "url": "base/series/1.line.html",
    "revision": "90345ba78cf1642a9b09257fce305de2"
  },
  {
    "url": "base/series/10.boxplot.html",
    "revision": "2048894edaeb6ca70f281d4ebe9af6b4"
  },
  {
    "url": "base/series/11.candlestick.html",
    "revision": "19c36fa86e198a398bf87270e274222c"
  },
  {
    "url": "base/series/12.heatmap.html",
    "revision": "439e06da137f1b44ed3e519b439ee8e4"
  },
  {
    "url": "base/series/13.map.html",
    "revision": "d9cef193c0aa7bda9a4104565b1ce0c4"
  },
  {
    "url": "base/series/14.parallel.html",
    "revision": "1e885e6d1694ec4c4b695bac533f48d9"
  },
  {
    "url": "base/series/15.lines.html",
    "revision": "bcdd5cd46cfa8ea65c9eaf916968ebfe"
  },
  {
    "url": "base/series/16.graph.html",
    "revision": "def10fe65ce634f3b301e2f083daab5d"
  },
  {
    "url": "base/series/17.sankey.html",
    "revision": "27123e2de8f32222c2b8370c6a6daa0b"
  },
  {
    "url": "base/series/18.funnel.html",
    "revision": "d49882d83b917881c983d8f7f37e5761"
  },
  {
    "url": "base/series/19.gauge.html",
    "revision": "ddf11d004d9f8fac89740a2e0bea5410"
  },
  {
    "url": "base/series/2.bar.html",
    "revision": "f225cd0aae802a470319dc23a68d95d6"
  },
  {
    "url": "base/series/20.pictorialBar.html",
    "revision": "825cd0823cc8bea0fb8f3e73307868ca"
  },
  {
    "url": "base/series/21.themeRiver.html",
    "revision": "d7f56bfc0bd37bed2d44d0a52ec17a2d"
  },
  {
    "url": "base/series/22.custom.html",
    "revision": "59b10a9a526102df9c8f30703ae1203d"
  },
  {
    "url": "base/series/3.pie.html",
    "revision": "38832914479f6a33f3ad4f228d080da2"
  },
  {
    "url": "base/series/4.scatter.html",
    "revision": "a502a56590ac00060825b153e0b78b12"
  },
  {
    "url": "base/series/5.effectScatter.html",
    "revision": "34d0b9fed8b048f1be182f1a5922fe7f"
  },
  {
    "url": "base/series/6.radar.html",
    "revision": "6560019a063e35be39faf2f66a2cb405"
  },
  {
    "url": "base/series/7.tree.html",
    "revision": "9180e0e64657a2742fb198523372df6a"
  },
  {
    "url": "base/series/8.treemap.html",
    "revision": "e2617b5f1d2cb8a61a0b98499dc050e4"
  },
  {
    "url": "base/series/9.sunburst.html",
    "revision": "fd813f640690aa3ba0d155806bb377a7"
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
    "revision": "b27d89969b04977fc8938a6f27661de6"
  },
  {
    "url": "mock/http.js",
    "revision": "a219140640bec4dfbe8f4fe88d351ed8"
  },
  {
    "url": "senior/1.micro/1.index.html",
    "revision": "6fc79412dedebd4553c12d2247be1c52"
  },
  {
    "url": "senior/1.micro/1.singlespa.html",
    "revision": "923974e37239cdfe588b19170e1c9f2c"
  },
  {
    "url": "senior/1.micro/1.singlespa2.html",
    "revision": "d157ef93f88af3bd349f772398df916d"
  },
  {
    "url": "senior/1.micro/2.qiankun.html",
    "revision": "2550d38c6ea89cba222fa8de4a2cc662"
  },
  {
    "url": "senior/1.micro/2.qiankun2.html",
    "revision": "72d13bd527259fb1ba0314295c22c770"
  },
  {
    "url": "senior/1.micro/3.share.html",
    "revision": "5ee37217d5211d6fff6a36e240c92b39"
  },
  {
    "url": "senior/1.micro/4.dev.html",
    "revision": "45bc552f8fa3adba28382e7578a8fb51"
  },
  {
    "url": "senior/2.typescript/1.env.html",
    "revision": "6581a1f392536e55a76b59e020d8619a"
  },
  {
    "url": "senior/2.typescript/1.index.html",
    "revision": "a37d3a9bc292cfdd8921d18867e91c5b"
  },
  {
    "url": "senior/2.typescript/10.infer.html",
    "revision": "75333020e176589dde692a6e6ea3e37c"
  },
  {
    "url": "senior/2.typescript/11.overlapping.html",
    "revision": "21c8a2b18c58adb2811567af6d43b79f"
  },
  {
    "url": "senior/2.typescript/12.condition.html",
    "revision": "4eff8186311aa766320b2b3030a935d9"
  },
  {
    "url": "senior/2.typescript/13.builtin.html",
    "revision": "cc8966c953baa278e1265dff173aaf7a"
  },
  {
    "url": "senior/2.typescript/14.package.html",
    "revision": "2a1cdf68a8231ecd571481995f73a661"
  },
  {
    "url": "senior/2.typescript/15.custom.html",
    "revision": "c6a4bf9be2ef3806139d08bdcdd52670"
  },
  {
    "url": "senior/2.typescript/16.unknown.html",
    "revision": "d75794e8ca38edc7dc0b5bce4a69afd7"
  },
  {
    "url": "senior/2.typescript/17.module.html",
    "revision": "69d23e026573f4abb33bd717be660a86"
  },
  {
    "url": "senior/2.typescript/18.statement.html",
    "revision": "6086a6e524b40260a0c6f2ee68a33974"
  },
  {
    "url": "senior/2.typescript/19.extend.html",
    "revision": "f7fd343895c42246bbe714ebaee2e283"
  },
  {
    "url": "senior/2.typescript/2.base.html",
    "revision": "c3b6e3400e369a922e8cb8cb03829806"
  },
  {
    "url": "senior/2.typescript/3.deduction.html",
    "revision": "80e4590f4d1052feb82eaa53f1b925fc"
  },
  {
    "url": "senior/2.typescript/4.type.html",
    "revision": "c76bee48f67e0653ccfb286c04f3cd25"
  },
  {
    "url": "senior/2.typescript/5.class.html",
    "revision": "4ee2e3f766245cc5d199a686eedbc0e5"
  },
  {
    "url": "senior/2.typescript/6.interface.html",
    "revision": "9a6cbb13f097f8b296d8b5a2f46cf95b"
  },
  {
    "url": "senior/2.typescript/7.generic.html",
    "revision": "e9a04a14bb5add9f3aab41d2a6da9fad"
  },
  {
    "url": "senior/2.typescript/8.compatible.html",
    "revision": "1cacfe244b455c9d592eda96131eaa2c"
  },
  {
    "url": "senior/2.typescript/9.protect.html",
    "revision": "f259524887371f77d46ad7855c91de8c"
  },
  {
    "url": "senior/3.deploy/1.index.html",
    "revision": "5bb7ab0d7ea0491b8ce9d5eca634185e"
  },
  {
    "url": "senior/3.deploy/1.local.html",
    "revision": "bbfc108ecabb194d61e9047176f5c629"
  },
  {
    "url": "senior/3.deploy/2.gitlab.html",
    "revision": "71c96535db9b734a01be3b5d9f31de50"
  },
  {
    "url": "senior/3.deploy/3.genkins.html",
    "revision": "079a3e6daada867073e329cebd36d45a"
  },
  {
    "url": "senior/3.deploy/4.centos.html",
    "revision": "d8254877b93526e65fca387620c83334"
  },
  {
    "url": "senior/3.deploy/5.nginx.html",
    "revision": "18a46ae726ee81d8f5f26bff7c6dc671"
  },
  {
    "url": "senior/4.component/1.button.html",
    "revision": "d4f55e8bbb3a0b328adf8466c8dc9f32"
  },
  {
    "url": "senior/4.component/1.env.html",
    "revision": "29289f4e77cc1a27ea119d771dfc02d2"
  },
  {
    "url": "senior/4.component/1.index.html",
    "revision": "4e71e1619b65ba154c08fcd22b1b6009"
  },
  {
    "url": "senior/4.component/1.recursion.html",
    "revision": "e61a947ee33975aae0bf2f4384fef2c9"
  },
  {
    "url": "senior/4.component/10.tree.html",
    "revision": "373c96e64aaeda97166ef3238adce428"
  },
  {
    "url": "senior/4.component/12.table.html",
    "revision": "9d9291625cd9eb6c1cc10fb0da917e71"
  },
  {
    "url": "senior/4.component/13.publish.html",
    "revision": "15863d281e032d28d52508a883531a4f"
  },
  {
    "url": "senior/4.component/2.dropdown.html",
    "revision": "ff347d00a692a55b27a56dc6c5632fda"
  },
  {
    "url": "senior/4.component/3.dialog.html",
    "revision": "9d899c4faa1893606d8da181e23fa620"
  },
  {
    "url": "senior/4.component/3.form.html",
    "revision": "a24c74dbad194800bb27586886b39ac5"
  },
  {
    "url": "senior/4.component/4.input.html",
    "revision": "8127dc7110613c4c8bb6a6f70e25f4d6"
  },
  {
    "url": "senior/4.component/4.render.html",
    "revision": "8a66a9a93fd9a6bfc0b0cf3dea063ef7"
  },
  {
    "url": "senior/4.component/5.checkBox.html",
    "revision": "45c62d69286e72dafa60d121322ff620"
  },
  {
    "url": "senior/4.component/6.cascader.html",
    "revision": "9d933dd6ac5c43cf603625388b9e36c3"
  },
  {
    "url": "senior/4.component/7.date.html",
    "revision": "ca0d5ca0d34d7d0805fea2a55545b7d1"
  },
  {
    "url": "senior/4.component/8.dispaly.html",
    "revision": "d81de5676df6ae2e3f2928c500b1aec2"
  },
  {
    "url": "senior/4.component/9.alert.html",
    "revision": "e5bc8726ba630e12005fc70557aa6a2c"
  },
  {
    "url": "senior/4.component/9.dynamics.html",
    "revision": "25c470ff5b063cef7f83950f7e4274d1"
  },
  {
    "url": "source/vue-cli2.x/1.index.html",
    "revision": "67e3fcd38ddd595a3f49c3dbb2f5be0f"
  },
  {
    "url": "source/vue-cli3.x/1.index.html",
    "revision": "0c3958116c2f2b8ef7872f8df5ae466f"
  },
  {
    "url": "source/vue-router3.x/1.index.html",
    "revision": "39b167a5417e18d421a574f5ae642382"
  },
  {
    "url": "source/vue-router3.x/2.origin.html",
    "revision": "6d0e228526323f8c2cbc406befeae84d"
  },
  {
    "url": "source/vue-router4.x/1.index.html",
    "revision": "24573b0c52dea27f0754d4b1a98b1f12"
  },
  {
    "url": "source/vue2.x/1.index.html",
    "revision": "a7a904fba3cd28b3e094e03fe5a0a29e"
  },
  {
    "url": "source/vue2.x/10.optimize.html",
    "revision": "f6d628c10cdd8bac21d24c9e35328383"
  },
  {
    "url": "source/vue2.x/11.gencode.html",
    "revision": "c539511c1049edcf362f92dd0ed34ffb"
  },
  {
    "url": "source/vue2.x/12.mount.html",
    "revision": "a72bf903ec3074a42c479261f557be17"
  },
  {
    "url": "source/vue2.x/13._render.html",
    "revision": "288cc22549acfc8b56c259dbfdb1ef48"
  },
  {
    "url": "source/vue2.x/14._update.html",
    "revision": "981cd0a5e85774562cf7fa123971e27c"
  },
  {
    "url": "source/vue2.x/2.initGlobalAPI.html",
    "revision": "d923f194afe43659cf052cf2085acd44"
  },
  {
    "url": "source/vue2.x/3.initMixin.html",
    "revision": "732a2baaca7bb3bb69af034b2bdca612"
  },
  {
    "url": "source/vue2.x/4.stateMixin.html",
    "revision": "97853e4b5889ea1c77190e4ba0867352"
  },
  {
    "url": "source/vue2.x/5.eventsMixin.html",
    "revision": "95d3ef4104472998faea8b05f3195050"
  },
  {
    "url": "source/vue2.x/6.lifecycleMixin.html",
    "revision": "d6b82d97220f0e72d995d3c616b39b2a"
  },
  {
    "url": "source/vue2.x/7.renderMixin.html",
    "revision": "b63acee3c843832b6cfc7cb302eac75f"
  },
  {
    "url": "source/vue2.x/8.mount.html",
    "revision": "d2f6b316f890848eb2fbb99c18feea73"
  },
  {
    "url": "source/vue2.x/9.ast.html",
    "revision": "5ceb1d28aaac521611bfb37479aa0765"
  },
  {
    "url": "source/vue3.x/1.index.html",
    "revision": "3003c83269339f0c96e27ee278c122f0"
  },
  {
    "url": "source/vue3.x/10.optimize.html",
    "revision": "b0b2000564b1cab73cfb12b1cff0b807"
  },
  {
    "url": "source/vue3.x/11.gencode.html",
    "revision": "aea5cbc1f2869cd77f0b2668d776f7e4"
  },
  {
    "url": "source/vue3.x/12.mount.html",
    "revision": "525ea90ac493407482b001d9d1ac4a24"
  },
  {
    "url": "source/vue3.x/13._render.html",
    "revision": "d26a17b84ceb15aea5cc6873cf06fd00"
  },
  {
    "url": "source/vue3.x/14._update.html",
    "revision": "4163712c9a98c2636c719b0f43a25081"
  },
  {
    "url": "source/vue3.x/2.initGlobalAPI.html",
    "revision": "36b1a8e013f864b49748e72a1ded6285"
  },
  {
    "url": "source/vue3.x/3.initMixin.html",
    "revision": "17311eaa1d93dd45205e75441caa3d6a"
  },
  {
    "url": "source/vue3.x/4.stateMixin.html",
    "revision": "beae02d32db878d2da16412709d0f92d"
  },
  {
    "url": "source/vue3.x/5.eventsMixin.html",
    "revision": "7aea7d8b87ff6534e689923bc9792cae"
  },
  {
    "url": "source/vue3.x/6.lifecycleMixin.html",
    "revision": "2ae2872f0432effead7b3a6ff523ba68"
  },
  {
    "url": "source/vue3.x/7.renderMixin.html",
    "revision": "7ba8586b4f54a0c07ce20f9ff62b934e"
  },
  {
    "url": "source/vue3.x/8.mount.html",
    "revision": "3c8ad50cb1fa96bfeef9caf9089f5e2e"
  },
  {
    "url": "source/vue3.x/9.ast.html",
    "revision": "02529792404738da4e9d251832c3573b"
  },
  {
    "url": "source/vuex3.x/1.index.html",
    "revision": "aac8b961a5685984790ed25d336bae42"
  },
  {
    "url": "source/vuex3.x/2.use.html",
    "revision": "31a9f1828747dc17dcff352ef84873e5"
  },
  {
    "url": "source/vuex3.x/3.origin.html",
    "revision": "a9452e2a4743ae109f3922c5f5698d69"
  },
  {
    "url": "source/vuex4.x/1.index.html",
    "revision": "3ffc43ddb03227723fb8dc76978a4058"
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
