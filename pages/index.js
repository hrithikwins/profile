import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return pug`
h1#intro Hey! This is Hrithik&#x1F44B;&#x1F44B;
p
  | A student and will always be dedicated to learn new skills and implement his knowledge trying our new stuffs. What he believes is that The potential lies in the magnitude of your determination which is affected by your character not your appearance and behaviour.
h2#react-flutter Reactivity is important but React &amp; Flutter developers are necessary
p
  | I develop primarily React.js Websites and Progressive Web Applications and also believe Declarative Programming is well preferred by the the Technically sound softwares and applications and there I come up with being a Flutter Developer as well.
h2#full-stack Full Stack but with Node
p
  | Node.js is what the market trusts and I want people to trust me and my work so I chose Node.js and the most popular Express for developing REST APIs efficiently.
      `;
}
