// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
import { PhotoEditorSDKUI } from 'photoeditorsdk'
import { ru } from './ru'

window.onload = function () {
  PhotoEditorSDKUI.init({
    license: '{"api_token":"-dyl2---T8y5Q21zwmp0Iw","app_identifiers":["localhost"],"available_actions":[],"domains":["https://api.photoeditorsdk.com"],"enterprise_license":false,"expires_at":1590278400,"features":["camera","library","export","customassets","whitelabel","focus","textdesign","transform","brush","text","frame","overlay","sticker","adjustment","filter"],"issued_at":1587737302,"minimum_sdk_version":"1.0","owner":"Alex Levashov","platform":"HTML5","products":["pesdk"],"version":"2.4","signature":"MAzRY9n2+WOS+rSuZMXegBm679SVB1bf1f7KN4IU6UBsOpLJ6POb9QBQRLBYlo+CUPyPoBHtzczN2U0OkprbH64X0rmViCqDTwf2ANKrKKRwXjpb4SLyGiubgLIM88fYaOyiXGa6OrDLX4tSafPIAYO/fF4pZSM7vxDZyvDvwfxZg4RLC27Hf35LbzKvTtVh6YiQP7MORNLIUh1JPG6vGz26GCakLLW7Ro8B5MEpRoZEA4A0aBK9plQ0+4hT6e7iZdBg2l6JPBl46O4eWvO+YL38IeVJ3DP41585m5WRU0a7VtGRq8IrpTJJ2cpbYjBQ2QUid664H8rX8y3ev1+bWYqsuRGn2LZ7P8tuClMe3O/VDbJkF87Q+srYFswkfKbvR4CB0F0RKfhead+Rxde2cb+wBkBi40xXuKNXyBBGbhaPsU2c8VaOkvKb4uU9WxObOh/6uJKe98hdPA4V3uSWCQArAqcUjPsJOGxo8ZT3AVimuQsMpc/7hJyyGZhqH48muOYInmszbxgl1PXhGJHNrIdDzfYGauu8Lav6eUIyq6L7HsbaQ1qLe2rO+xy7HNVv/wQFYxM9NnrTKQR/f1j+T2P2DKCaCPCanPdm4GRbF2mrRhJjACoYSnVUXCCqMKFnYpnuAf8nU0plSeiQ4+DApBYUFXxmRdC4YAML/3nSRgc="}', // <-- Please replace this with the content of your license file. The JSON-object must be in string format.
    container: '#pesdk',
    image: 'example.png',
    custom: {
        language: 'en',
        languages: {
          en: ru
        }
      }
  })
}