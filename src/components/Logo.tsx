import "./Logo.css";
import image from "../resources/Honeycomb-edited.png";

function Logo() {
  return (
    <div>
      <figure>
        <img id="logo-image" src={image} alt="" />
        <figcaption>The Bea Hive</figcaption>
      </figure>
    </div>
  );
}
export default Logo;
