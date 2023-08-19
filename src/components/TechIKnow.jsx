import "./techiknow.css";
const TechIKnow = () => {
  return (
    <div className="techiknow-parent">
      <div className="telltechs">
        <h3>so i know these technologies</h3>
        <div className="wrapit">
          <div className="dev-stack stack">
            <p className="p">dev stack</p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>javaScript</li>
              <li>react.js</li>
              <li>SASS</li>
            </ul>
          </div>
          <div className="version-control stack">
            <p className="p">version control</p>
            <ul>
              <li>git/github</li>
            </ul>
          </div>
          <div className="operating-system stack">
            <p className="p">Operating System</p>
            <ul>
              <li>Linux</li>
              <li>windows</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechIKnow;
