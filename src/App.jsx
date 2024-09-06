import { MdEmail } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import img1 from "/img1.svg";
import img2 from "/img2.svg";
import img3 from "/img3.svg";
import { useEffect, useState } from "react";
export default function Login() {
  const images = [
    { src: img1, caption: "Message Broadcast" },
    { src: img2, caption: "Voice Broadcast" },
    { src: img3, caption: " WhatsApp Management" },
  ];

  const [currIndex, setCurIndex] = useState(0);

  useEffect(() => {
    const imagesData = setInterval(() => {
      setCurIndex((previousIndex) => {
        return previousIndex === images.length - 1 ? 0 : previousIndex + 1;
      });
    }, 3000);

    return () => clearInterval(imagesData);
  }, [images.length]);

  return (
    <section className="app">
      <div
        style={{ backgroundImage: `url(${images[currIndex].src})` }}
        className="images"
      >
        <img src="./spext logo.png" alt="" className="logo" />
        <h4 className="hero-text">{images[currIndex].caption}</h4>
      </div>
      <div className="cta-secton">
        <div className="cta">
          <img src="./spext logo.png" alt="" className="header" />
          <button className="cta-btn">Login Using OneID</button>
        </div>

        <div className="contacts">
          <div className="icons">
            <span className="icon">
              <MdEmail size={26} />
            </span>
            Biz@Veevotech.com
          </div>
          <div className="icons">
            <span className="icon">
              <PiPhoneCallFill size={26} />
            </span>
            UAN +92 304 111 8333
          </div>
        </div>
      </div>
    </section>
  );
}
