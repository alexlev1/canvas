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
    license: '{"api_token":"-dyl2---T8y5Q21zwmp0Iw","app_identifiers":["localhost","canvas-oksana.herokuapp.com"],"available_actions":[],"domains":["https://api.photoeditorsdk.com"],"enterprise_license":false,"expires_at":1590278400,"features":["camera","library","export","customassets","whitelabel","focus","textdesign","transform","brush","text","frame","overlay","sticker","adjustment","filter"],"issued_at":1587758664,"minimum_sdk_version":"1.0","owner":"Alex Levashov","platform":"HTML5","products":["pesdk"],"version":"2.4","signature":"lHs3GontCOm0RRtl1ZaW6ECEUUUjG+/kv5sPW2detP2AiG3wD2LNiaHrtQ+QF73bud7zzqL4OlZftJWjdTtbgZAXMsw4wJn9EHMPKFPOLX9kCuAWyARr6wN5vWsY/fnPKnQFYXjitNXWVm5HmwugC/d/aXr1DdjPpTGyepe3uJ1ckcdWbJujP9z1Qw6zhQHvIE5RCEdpM2dMqnafOaHsnkK9O+aRfOVV88UUAq+uxZNe2KBpmSkvh4lZZ0xcJdg/rGntfzhGCWWJB9NeRKQUyIcPqICZseNWmRwSgB6gt2FtZV8bWAhY2+RZSwy9itFHCVXQQCpr9Phh2y2L+QD+5My4YBktsqU536HyUTNWqtr5frd8bcal3AQsty0Ha/I7ghrorbfU+n4UccXqMLxRkURWu02qq4dXp2xfbOQ4voPSFyd1+yh70SyySGBvZYfi0m+56apKCu+HguD+phoQ0NLv79lvQ22i5UELy2GvjxZ8X0Wjdo5GjWePYt3rptmxWeaow8a+fBE0AV0KrKhHBemlDv2Ln7Xd6tS1nng6asY7uXwrL932zFwcjmHLzZSblbLCz88yT1Vla3Ir18/4+Tt/vIdBif1DcVdm31Ye25G0lP7U6O0/tI6DxiLVr3wbhBE+XqIYOrIUN5IXJYIZpChfyViiLvfYY2wNvi+8ymw="}', // <-- Please replace this with the content of your license file. The JSON-object must be in string format.
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