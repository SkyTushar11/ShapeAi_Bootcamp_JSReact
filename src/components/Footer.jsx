import React from "react";

function Footer() {
  var nowYear = new Date().getFullYear();

  return (
    <footer>
      <p>Copyright @ {nowYear}</p>
    </footer>
  );
}

export default Footer;
