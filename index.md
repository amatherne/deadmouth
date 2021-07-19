---
layout: blocks
title: Homepage
date: 2017-11-22T23:00:00.000+00:00
page_sections:
- template: navigation-header
  block: header
  navigation:
  - link: "#cta-music--5"
    link_text: Music
  - link: "#ctas--3"
    link_text: Members
  - link_text: Bio
    link: "#two-grid--4"
  - link: "#mosaic--6"
    link_text: Gallery
  - link: "#video--7"
    link_text: Monster
  - link: "#ctas--8"
    link_text: Merch
  logo: "/uploads/2021/07/19/deadmouth-monster-cover-art.png"
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
  button_url: "/deadmouth/#video--7"
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
    text: Guitarist
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
    text: Deadmouth is branding themselves as a NuCore 4-piece metal band based out
      of Austin, Texas! Looking to be the next creative flow in heavy metal, Deadmouth
      steps out with something to say from the very first note you hear! Having formed
      from multiple strong projects, Deadmouth looks to push the boundaries of the
      new wave of heavy while still respecting the sound that inspired them all.From
      headbanging riffs to body bending breakdowns, Deadmouth is working to bring
      you everything to love with all things heavy music.
    button_text: ''
    button_url: ''
    text_color: "#FFFFFF"
    background_color: "#B12929"
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
  - image: "/uploads/2021/07/19/deadmouth-monster-cover-art.png"
    title: Bio 2
    text: After debuting a few tracks, Deadmouth caught the attention of Brendan Williams  and
      Mike Kalajin (The Devil Wears Prada, Emmure, Drug Church) and began working
      on what is already turning out to be a fun next level feel for the band. Monster
      and Same Pain being the first two tracks with the new team of producers has
      been a very motivating start to what feels like a solid artistic relationship!
    button_text: ''
    button_url: ''
    text_color: "#000000"
    background_color: "#E13030"
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
  video_embed: <iframe width="560" height="315" src="https://www.youtube.com/embed/pwQAgs2tYls"
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
  - song_title: Monster (Released 8/16)
    record_title: ''
    song_file: "/uploads/2021/07/19/monster.wav"
  - song_title: Same Pain (Unreleased)
    record_title: ''
    song_file: "/uploads/2021/07/19/same-pain.wav"
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
  content: ggiugdufrf67i

---
