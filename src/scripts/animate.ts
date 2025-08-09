import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrambleTextPlugin);
gsap.registerPlugin(ScrollTrigger);

SplitText.create("#split-1", {
  type: "chars",
  smartWrap: true,
  onSplit(self) {
    gsap.from(self.chars, {
      duration: 0.5,
      y: 25,
      autoAlpha: 0,
      stagger: 0.02,
      ease: "back.out",
    });
  },
});
gsap.from("#button-1", {
  delay: 0.3,
  autoAlpha: 0,
  y: 10,
});
gsap.from("#number-1", {
  scrollTrigger: "#number-1",
  textContent: 0,
  duration: 2,
  snap: { textContent: 1 },
});
gsap.from("#number-2", {
  scrollTrigger: "#number-2",
  textContent: 0,
  duration: 2,
  snap: { textContent: 1 },
});
gsap.to("#anon", {
  scrollTrigger: "#anon",
  duration: 2,
  scrambleText: {
    text: "Анонимно",
    chars: "0123456789!#$&*",
  },
});
gsap.from("#logos>div", {
  scrollTrigger: "#logos",
  duration: 1.5,
  autoAlpha: 0,
  stagger: 0.1,
  delay: 0.3,
});
gsap.from(".discount", {
  scrollTrigger: ".discount",
  delay: 0.3,
  duration: 1,
  y: 25,
  autoAlpha: 0,
  stagger: 0.1,
  ease: "back.out",
});
SplitText.create("#split-2", {
  type: "words",
  smartWrap: true,
  onSplit(self) {
    gsap.from(self.words, {
      scrollTrigger: "#split-2",
      delay: 0.3,
      duration: 0.7,
      y: 25,
      autoAlpha: 0,
      stagger: 0.1,
      ease: "back.out",
    });
  },
});
