---
layout: blocks
title: Homepage
date: 2017-11-22T23:00:00.000+00:00
page_sections:
- template: navigation-header
  block: header
  navigation:
  - link: "#ctas--3"
    link_text: Members
  - link_text: Bio
    link: "#two-grid--4"
  - link: "#cta-music--5"
    link_text: Music
  - link: "#mosaic--6"
    link_text: Gallery
  - link: "#video--7"
    link_text: Monster
  - link: "#ctas--8"
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
  button_url: "/#video--7"
  alt_text: ''
  custom_size: ''
  custom_css: |-
    == {
    z-index: 999999;
    }
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
  section_text: ''
  button_url: ''
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
  button_text: ''
  large_images: true
  align_ctas_left: true
  custom_css: |-
    == .inner-container h3,
    == .inner-container .rte {
    text-transform:uppercase;
    }
    /small/ {
    == .grid__item {
    width: 50%;
    }
    }
- template: two-grid
  block: two-grid
  row:
  - image: "/uploads/2021/07/10/two-grid.png"
    title: Bio
    text: |-
      But with the blast shield down, I can't even see! How am I supposed to fight? Escape is not his plan. I must face him, alone. What good is a reward if you ain't around to use it? Besides, attacking that battle station ain't my idea of courage. It's more like…suicide.

      You're all clear, kid. Let's blow this thing and go home! I have traced the Rebel spies to her. Now she is my only link to finding their secret base. Leave that to me. Send a distress signal, and inform the Senate that all on board were killed.
    button_text: ''
    button_url: ''
    text_color: "#FFFFFF"
    background_color: ''
    button_colors:
      text: ''
      background: ''
      border: ''
      hover_-_text: ''
      hover_-_background: ''
      hover_-_border: ''
    custom_css: |-
      == h2 {
      text-transform: uppercase;
      }
    button_style: ''
  - image: "/uploads/2021/07/10/two-grid.png"
    title: Bio 2
    text: |-
      But with the blast shield down, I can't even see! How am I supposed to fight? Escape is not his plan. I must face him, alone. What good is a reward if you ain't around to use it? Besides, attacking that battle station ain't my idea of courage. It's more like…suicide.

      You're all clear, kid. Let's blow this thing and go home! I have traced the Rebel spies to her. Now she is my only link to finding their secret base. Leave that to me. Send a distress signal, and inform the Senate that all on board were killed.
    button_text: ''
    button_url: ''
    text_color: "#000000"
    background_color: "#FFFFFF"
    button_colors:
      text: ''
      background: ''
      border: ''
      hover_-_text: ''
      hover_-_background: ''
      hover_-_border: ''
    custom_css: ''
    button_style: ''
  reverse: false
  hide_images: false
  custom_css: ''
- template: cta-music
  block: cta-music
  section_title: Music
  image: "/uploads/2021/07/10/deadmouth-art.png"
  row_title: Mind Your Troubles
  row_text: "<p>Available Now!</p>"
  link_row:
  - image: "/uploads/2021/07/10/applemusiclogo.svg"
    text: ''
    link: https://apple/com/music
  - image: "/uploads/2021/07/10/spotifylogo.svg"
    text: ''
    link: https://spotify.com
  - image: "/uploads/2021/07/10/youtubelogo.svg"
    text: ''
    link: https://youtube.com
  section_text: ''
  row_button_text: ''
  row_button_url: "/test"
  custom_css: ''
- template: mosaic
  block: mosaic
  item:
  - image: "/uploads/2021/07/11/1.png"
    image_mobile: ''
    text_color: ''
    background_color: ''
    text_background_color: ''
    width: 33% (4/12)
    stack_item: false
    item_height: 4
    item_height_mobile: 
    title: ''
    title_size: 18
    bold_title: false
    text: ''
    text_size: 15
    button_text: ''
    button_url: ''
  - image: "/uploads/2021/07/11/2.png"
    image_mobile: ''
    text_color: ''
    background_color: ''
    text_background_color: ''
    width: 33% (4/12)
    stack_item: false
    item_height: 5
    item_height_mobile: 
    title: ''
    title_size: 18
    bold_title: false
    text: ''
    text_size: 15
    button_text: ''
    button_url: ''
  - image: "/uploads/2021/07/11/3.png"
    image_mobile: ''
    text_color: ''
    background_color: ''
    text_background_color: ''
    width: 33% (4/12)
    stack_item: false
    item_height: 3
    item_height_mobile: 
    title: ''
    title_size: 18
    bold_title: false
    text: ''
    text_size: 15
    button_text: ''
    button_url: ''
  - image: "/uploads/2021/07/11/6.png"
    image_mobile: ''
    text_color: ''
    background_color: ''
    text_background_color: ''
    width: 33% (4/12)
    stack_item: false
    item_height: 4
    item_height_mobile: 
    title: ''
    title_size: 18
    bold_title: false
    text: ''
    text_size: 15
    button_text: ''
    button_url: ''
  - image: "/uploads/2021/07/11/4.png"
    image_mobile: ''
    text_color: ''
    background_color: ''
    text_background_color: ''
    width: 33% (4/12)
    stack_item: false
    item_height: 5
    item_height_mobile: 
    title: ''
    title_size: 18
    bold_title: false
    text: ''
    text_size: 15
    button_text: ''
    button_url: ''
  - image: "/uploads/2021/07/11/5.png"
    image_mobile: ''
    text_color: ''
    background_color: ''
    text_background_color: ''
    width: 33% (4/12)
    stack_item: false
    item_height: 3
    item_height_mobile: 
    title: ''
    title_size: 18
    bold_title: false
    text: ''
    text_size: 15
    button_text: ''
    button_url: ''
  - image: "/uploads/2021/07/11/9.png"
    image_mobile: ''
    text_color: ''
    background_color: ''
    text_background_color: ''
    width: 33% (4/12)
    stack_item: false
    item_height: 4
    item_height_mobile: 
    title: ''
    title_size: 18
    bold_title: false
    text: ''
    text_size: 15
    button_text: ''
    button_url: ''
  - image: "/uploads/2021/07/11/8.png"
    image_mobile: ''
    text_color: ''
    background_color: ''
    text_background_color: ''
    width: 33% (4/12)
    stack_item: false
    item_height: 3
    item_height_mobile: 
    title: ''
    title_size: 18
    bold_title: false
    text: ''
    text_size: 15
    button_text: ''
    button_url: ''
  - image: "/uploads/2021/07/11/7.png"
    image_mobile: ''
    text_color: ''
    background_color: ''
    text_background_color: ''
    width: 33% (4/12)
    stack_item: false
    item_height: 2
    item_height_mobile: 
    title: ''
    title_size: 18
    bold_title: false
    text: ''
    text_size: 15
    button_text: ''
    button_url: ''
  custom_css: ''
- template: video
  block: video
  section_title: Monster - Music Video
  video_embed: <iframe width="560" height="315" src="https://www.youtube.com/embed/Uk18bFIgOS4"
    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write;
    encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  custom_css: ''
- template: ctas
  block: ctas
  large_images: true
  align_ctas_left: true
  section_title: Merch
  cta:
  - image: "/uploads/2021/07/18/dmrose.png"
    title: Toyko Long-Sleeve Shirt
    text: "$25.00"
    link: https://google.com
  - image: "/uploads/2021/07/18/dmrose2.png"
    title: Graphic T-Shirt
    text: "$25"
    link: https://google.com
  section_text: ''
  button_text: ''
  button_url: ''
  custom_css: ''
- template: audio-player
  block: audio-player
  songs:
  - song_title: The Middle
    record_title: New EP
    song_file: "/uploads/2021/07/18/the-middle.wav"
  - song_title: Quitter
    record_title: New EP
    song_file: "/uploads/2021/07/18/quitter.wav"
  - song_title: Headlocked
    record_title: New EP
    song_file: "/uploads/2021/07/18/headlocked.wav"
- template: simple-footer
  block: footer
  content: ''

---
