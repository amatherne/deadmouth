---
layout: blocks
title: Homepage
date: 2017-11-22T23:00:00.000+00:00
page_sections:
- template: navigation-header
  block: header
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
  content_width: 500px
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
    font-size: 90px;
    }
    == .rte {
    font-size: 34px;
    font-family: var(--font--header-stack);
    font-weight: 500;
    }

    == .center-content * {
    margin: 0;
    }
    == .center-content *:not(:first-child) {
    margin-top: 15px;
    }

    /small/ {
    == .center-content *:not(:first-child) {
    margin-top: 10px;
    }
    == h2 {
    font-size: 55px;
    }
    == .rte {
    font-size: 21px;
    }
    == .center-content {
    top: 95%;
    left: 50%;
    transform: translate(-50%,-95%);
    }
    }
- template: ctas
  block: ctas
  section_title: Members
  section_text: testing
  button_url: "/"
  cta:
  - image: "/uploads/2021/07/03/matt.png"
    title: Matt Fourman
    text: Vocalist
    link: ''
  - image: "/uploads/2021/07/03/jose.png"
    title: Jose Escudero
    text: Bassist
    link: ''
  - image: "/uploads/2021/07/03/austin.png"
    title: Austin Matherne
    text: Drummer
    link: ''
  - image: "/uploads/2021/07/03/nico.png"
    title: Nicolai Cespedes
    text: Studio Guitarist
    link: ''
  button_text: text
  large_images: true
  align_ctas_left: true

---
