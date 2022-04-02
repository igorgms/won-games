import React from "react";
import Wrapper, { A } from "./Wrapper";

function LeftMenuFooter() {
  // PROJECT_TYPE is an env variable defined in the webpack config
  // eslint-disable-next-line no-undef

  return (
    <Wrapper>
      <div className="poweredBy">
        <A
          key="website"
          href="https://www.linkedin.com/in/igorgomes8/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Igor Gomes
        </A>
      </div>
    </Wrapper>
  );
}

export default LeftMenuFooter;
