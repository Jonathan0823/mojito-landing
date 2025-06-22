import { useGSAP } from "@gsap/react";
import { cocktailLists, mockTailLists } from "../constants";
import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

const Cocktails = () => {
  useGSAP(() => {
    const cocktailSplit = new SplitText(".popular", {
      type: "lines",
    });

    const mockTailSplit = new SplitText(".loved", {
      type: "lines",
    });

    const menuTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top 50%",
      },
    });

    const bothLines = [...cocktailSplit.lines, ...mockTailSplit.lines];
    menuTimeline.from(bothLines, {
      y: 50,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: "power2.out",
    });

    const parallaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top 30%",
        end: "bottom 80%",
        scrub: true,
      },
    });

    parallaxTimeline
      .from("#c-left-leaf", {
        x: -100,
        y: 100,
      })
      .from("#c-right-leaf", {
        x: 100,
        y: 100,
      });
  }, []);
  return (
    <section id="cocktails" className="noisy h-dvh">
      <img
        src="/images/cocktail-left-leaf.png"
        alt="left-leaf"
        id="c-left-leaf"
        className="c-left-leaf"
      />
      <img
        src="/images/cocktail-right-leaf.png"
        alt="right-leaf"
        id="c-right-leaf"
        className="c-right-leaf"
      />

      <div className="list">
        <div className="popular">
          <h2>List of Popular Cocktails</h2>
          <ul>
            {cocktailLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className="me-28">
                  <h3>{name}</h3>
                  <p>
                    {country} | {detail}
                  </p>
                </div>
                <span>- {price}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="loved">
          <h2>List of Loved Mocktails</h2>
          <ul>
            {mockTailLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className="me-28">
                  <h3>{name}</h3>
                  <p>
                    {country} | {detail}
                  </p>
                </div>
                <span>- {price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cocktails;
