---
layout: blocks
title: Homepage
date: 2017-11-22T23:00:00.000+00:00
page_sections:
- template: navigation-header
  block: header-1
  navigation:
  - link: "#"
    link_text: Members
  - link_text: Bio
    link: "#"
  - link: "#"
    link_text: Music
  - link: "#"
    link_text: Gallery
  - link: "#"
    link_text: Monster
  - link: "#"
    link_text: Merch
  logo: ''
- template: hero-image
  alignment: Center
  size: Cover
  height: clamp(500px,66%,100vh)
  text_alignment: Center
  vertical_align: '95'
  horizontal_align: '50'
  content_width: 400px
  text_color: "#FFFFFF"
  overlay_color: "#8B2F2F"
  overlay_opacity: '40'
  block: hero-image
  image: "/uploads/2021/07/03/deadmouth-hero-image.png"
  title: Deadmouth
  text: New Music Video - “Monster”
  button_text: Watch Now
  button_url: "#"
  alt_text: ''
  custom_size: ''
  custom_css: |-
    == h2 {
    font-size: 50px;
    }
    == .rte {
    font-size: 34px;
    font-famiy: var(--font--header-stack);
    font-weight: 500;
    }
- template: simple-footer
  block: footer-1
  content: Made with ❤︎ in Canada

---
