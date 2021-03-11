import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react';
import {motion} from 'framer-motion';
import Bitmap from "../img/bitmap.png";
import Image from "next/image";



const Home = () =>
pug`

nav.navbar.navbar-light.navbar-expand-md.navigation-clean
  .container
    a.navbar-brand(href='#') Hydrocut
    button.navbar-toggler(data-bs-toggle='collapse', data-bs-target='#navcol-1')
      span.visually-hidden Toggle navigation
      span.navbar-toggler-icon
    #navcol-1.collapse.navbar-collapse
      ul.navbar-nav.ms-auto
        li.nav-item
          a.nav-link.active(href='#') First Item
        li.nav-item
          a.nav-link(href='#') Second Item
        li.nav-item
          a.nav-link(href='#') Third Item
        li.nav-item.dropdown
          a.dropdown-toggle.nav-link(aria-expanded='false', data-bs-toggle='dropdown', href='#') Dropdown
          .dropdown-menu
            a.dropdown-item(href='#') First Item
            a.dropdown-item(href='#') Second Item
            a.dropdown-item(href='#') Third Item
.container.bg-white
  .row.d-flex.justify-content-center.align-items-center.vh-100
    .col-md-6.d-md-flex.flex-column.justify-content-center
      .h-100
        h1#hydrocut-heading.text-center.text-md-start.fw-bolder.bluecolor-main
          | Quality
          span.yellow-variant  MWFs and Lubes for the Equipments
          |  that Add Value to
          span.pink-variant  your Business
        a.primary-button-main(href='#') Talk to Experts
    .col-md-6.h-100.d-flex.justify-items-center.align-items-center
      img.img-fluid.w-100(src=${Bitmap} alt="no text")
.container
  .row.d-flex.justify-content-center.align-items-center.vh-100.flex-row-reverse
    .col-md-6.d-md-flex.flex-column.justify-content-center
      div
        h1.text-center.text-md-start Why Hydrocut
        p wths thsi&nbsp;
        .row
          ul.col-6
            li Item 1
            li Item 2
            li Item 3
            li Item 4
          ul.col-6
            li Item 1
            li Item 2
            li Item 3
            li Item 4
        button.btn.btn-primary(type='button') Call to Action button
    .col-md-6
      img.img-fluid(src='../img/clipboard-image.png')
section
  .container
    .row
      .col-md-4
        .d-flex.align-items-center.h-100.justify-content-center
          ul
            li Item 1
            li Item 2
            li Item 3
            li Item 4
      .col-md-4
        img.img-fluid(src='../img/clipboard-image.png')
      .col-md-4
        .d-flex.align-items-center.h-100.justify-content-center
          ul
            li Item Demo text
            li Item Demo text
            li Item Demo text
            li Item Demo text
section
  .container
    .row
      .col-md-12
        h1.text-center Categories
    .row
      .col-md-3
        .card
          img.card-img.w-100.d-block(src='../img/clipboard-image.png')
          .card-img-overlay.d-flex.justify-content-center.align-items-end
            h4 Oils
      .col-md-3
        .card
          img.card-img.w-100.d-block(src='../img/clipboard-image.png')
          .card-img-overlay.d-flex.justify-content-center.align-items-end
            h4 Gels
      .col-md-3
        .card
          img.card-img.w-100.d-block(src='../img/clipboard-image.png')
          .card-img-overlay.d-flex.justify-content-center.align-items-end
            h4 Additives
      .col-md-3
        .card
          img.card-img.w-100.d-block(src='../img/clipboard-image.png')
          .card-img-overlay.d-flex.justify-content-center.align-items-end
            h4 Chemicals
section
  .container
    .row
      .col-md-6
        img.img-fluid(src='../img/clipboard-image.png')
      .col-md-6
        .d-flex.flex-column.justify-content-center.align-items-center.align-items-md-start.h-100
          h1 Heading
          p
            | Lorem ipsum dolor aljdlj lfkj lsj flsj lajLorem ipsum dolor aljdlj lfkj lsj flsj lajLorem ipsum dolor aljdlj lfkj lsj flsj lajLorem ipsum dolor aljdlj lfkj lsj flsj lajLorem ipsum dolor aljdlj lfkj lsj flsj lajLorem ipsum dolor aljdlj lfkj lsj flsj lajLorem ipsum dolor aljdlj lfkj lsj flsj lajLorem ipsum dolor aljdlj lfkj lsj flsj laj
          button.btn.btn-primary(type='button') Button
section
  .container
    .row.flex-row-reverse
      .col-md-6
        img.img-fluid(src='../img/clipboard-image.png')
      .col-md-6
        .d-flex.flex-column.justify-content-center.align-items-center.align-items-md-start.h-100
          h1 Heading
          p
            | Lorem ipsum dolor aljdlj lfkj lsj flsj lajLorem ipsum dolor aljdlj lfkj lsj flsj lajLorem ipsum dolor aljdlj lfkj lsj flsj lajLorem ipsum dolor aljdlj lfkj lsj flsj lajLorem ipsum dolor aljdlj lfkj lsj flsj lajLorem ipsum dolor aljdlj lfkj lsj flsj lajLorem ipsum dolor aljdlj lfkj lsj flsj lajLorem ipsum dolor aljdlj lfkj lsj flsj laj
          button.btn.btn-primary(type='button') Button
section
  .container
    .row
      .col-md-6
        img.img-fluid(src='../img/clipboard-image.png')
      .col-md-6
        .d-flex.flex-column.justify-content-center.align-items-center.align-items-md-start.h-100
          h1 Heading
          p
            | Lorem ipsum dolor aljdlj lfkj lsj flsj lajLorem ipsum dolor aljdlj lfkj lsj flsj lajLorem ipsum dolor aljdlj lfkj lsj flsj lajLorem ipsum dolor aljdlj lfkj lsj flsj lajLorem ipsum dolor aljdlj lfkj lsj flsj lajLorem ipsum dolor aljdlj lfkj lsj flsj lajLorem ipsum dolor aljdlj lfkj lsj flsj lajLorem ipsum dolor aljdlj lfkj lsj flsj laj
          button.btn.btn-primary(type='button') Button
section
  .container
    .row.flex-row-reverse
      .col-md-6
        img.img-fluid(src='../img/clipboard-image.png')
      .col-md-6
        .d-flex.flex-column.justify-content-center.align-items-center.align-items-md-start.h-100
          h1 Heading
          p
            | Lorem ipsum dolor aljdlj lfkj lsj flsj lajLorem ipsum dolor aljdlj lfkj lsj flsj lajLorem ipsum dolor aljdlj lfkj lsj flsj lajLorem ipsum dolor aljdlj lfkj lsj flsj lajLorem ipsum dolor aljdlj lfkj lsj flsj lajLorem ipsum dolor aljdlj lfkj lsj flsj lajLorem ipsum dolor aljdlj lfkj lsj flsj lajLorem ipsum dolor aljdlj lfkj lsj flsj laj
          button.btn.btn-primary(type='button') Button
section
  .container
    .row
      .col-md-6
        img.img-fluid(src='../img/clipboard-image.png')
      .col-md-6
        .d-flex.flex-column.justify-content-center.align-items-center.align-items-md-start.h-100
          h1 Heading
          p
            | Lorem ipsum dolor aljdlj lfkj lsj flsj lajLorem ipsum dolor aljdlj lfkj lsj flsj lajLorem ipsum dolor aljdlj lfkj lsj flsj lajLorem ipsum dolor aljdlj lfkj lsj flsj lajLorem ipsum dolor aljdlj lfkj lsj flsj lajLorem ipsum dolor aljdlj lfkj lsj flsj lajLorem ipsum dolor aljdlj lfkj lsj flsj lajLorem ipsum dolor aljdlj lfkj lsj flsj laj
          button.btn.btn-primary(type='button') Button
section
  .p-md-5.d-flex.justify-content-center
    img.img-fluid(src='../img/clipboard-image-1.png')
section
section
  div
    img.w-100(src='../img/clipboard-image-2.png')
section.testimonials-clean
  .container
    .intro
      h2.text-center Testimonials
      p.text-center
        | Our customers love us! Read what they have to say below. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae.
    .row.people
      .col-md-6.col-lg-4.item
        .box
          p.description
            | Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est.
        .author
          img.rounded-circle(src='../img/clipboard-image.png')
          h5.name Heading
          p.title soem post
      .col-md-6.col-lg-4.item
        .box
          p.description
            | Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, et interdum justo suscipit id.
        .author
          img.rounded-circle(src='../img/clipboard-image.png')
          h5.name Heading
          p.title some post
      .col-md-6.col-lg-4.item
        .box
          p.description
            | Aliquam varius finibus est, et interdum justo suscipit. Vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu.
        .author
          img.rounded-circle(src='../img/clipboard-image.png')
          h5.name heading
          p.title post
section.contact-clean
  form(method='post')
    h2.text-center Contact us
    .mb-3
      input.form-control(type='text', name='name', placeholder='Name')
    .mb-3
      input.form-control.is-invalid(type='email', name='email', placeholder='Email')
      small.form-text.text-danger Please enter a correct email address.
    .mb-3
      textarea.form-control(name='message', placeholder='Message', rows='14')
    .mb-3
      button.btn.btn-primary(type='submit') send
  section.map-clean
    .container
      .intro
        h2.text-center Location
        p.text-center
          | Nunc luctus in metus eget fringilla. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae.
    iframe(allowfullscreen='', frameborder='0', src='https://cdn.bootstrapstudio.io/placeholders/map.html', width='100%', height='450')
footer.footer-dark
  .container
    .row
      .col-sm-6.col-md-3.item
        h3 Services
        ul
          li
            a(href='#') Web design
          li
            a(href='#') Development
          li
            a(href='#') Hosting
      .col-sm-6.col-md-3.item
        h3 About
        ul
          li
            a(href='#') Company
          li
            a(href='#') Team
          li
            a(href='#') Careers
      .col-md-6.item.text
        h3 Company Name
        p
          | Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.
      .col.item.social
        a(href='#')
          i.icon.ion-social-facebook
        a(href='#')
          i.icon.ion-social-twitter
        a(href='#')
          i.icon.ion-social-snapchat
        a(href='#')
          i.icon.ion-social-instagram
    p.copyright Company Name &copy; 2021

.d-flex.flex-column.justify-content-center.align-content-center.vh-100.w-100.px-4
    motion.Div.px-4(initial=${{x: '-100vw'}} animate=${{x: 0}} transition=${{type: 'spring', stiffness: 60}})
        h1#intro Hey! This is Hrithik&#x1F44B;&#x1F44B;
    motion.Div.px-4(initial=${{color: '#ff0000'}} animate=${{color: '#000'}} transition=${{type: 'spring', stiffness: 60}})
        p A student and will always be dedicated to learn new skills and implement his knowledge trying our new stuffs. What he believes is that The potential lies in the magnitude of your determination which is affected by your character not your appearance and behaviour.
    motion.Div.px-4(initial=${{x: '-100vw'}} animate=${{x: 0}} transition=${{type: 'spring', stiffness: 120}})
        h2#react-flutter Reactivity is important but React &amp; Flutter developers are necessary
    motion.Div.px-4(initial=${{color: '#ff0000'}} animate=${{color: '#000'}} transition=${{type: 'spring', stiffness: 120}})
        p I develop primarily React.js Websites and Progressive Web Applications and also believe Declarative Programming is well preferred by the the Technically sound softwares and applications and there I come up with being a Flutter Developer as well.
    motion.Div.px-4(initial=${{x: '-100vw'}} animate=${{x: 0}} transition=${{type: 'spring', stiffness: 150}})
        h2#full-stack Full Stack but with Node
    motion.Div.px-4(initial=${{color: '#ff0000'}} animate=${{color: '#000'}} transition=${{type: 'spring', stiffness: 150}})
        p
        | Node.js is what the market trusts and I want people to trust me and my work so I chose Node.js and the most popular Express for developing REST APIs efficiently.
`;

export default Home;
