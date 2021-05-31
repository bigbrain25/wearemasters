/* eslint-disable */
function Footer() {
  return (
    <footer className="px-8 py-4 text-gray-400 text-sm">
      <div className="mb-6">
        <p>
          Copyright © 2021{" "}
          <a href="https://www.apple.com/uk/" target="_blank" rel="noopener">
            WEAREMASTERS.IO
          </a>{" "}
          All Rights Reserved.
        </p>
      </div>
      <div>
        <ul className="sm:flex sm:space-x-8 text-gray-500">
          <li className="py-2">
            <a
              href="https://www.apple.com/uk/legal/internet-services/"
              target="_blank"
              rel="noopener"
              data-dt-link-to-exclude=""
            >
              Internet Service Terms
            </a>
          </li>
          <li className="py-2">
            <a
              href="https://support.apple.com/en-gb/HT204881"
              target="_blank"
              rel="noopener"
              data-dt-link-to-exclude=""
            >
              Apple Music &amp; Privacy
            </a>
          </li>
          <li className="py-2">
            <a
              href="https://www.apple.com/uk/legal/privacy/en-ww/cookies/"
              target="_blank"
              rel="noopener"
              data-dt-link-to-exclude=""
            >
              Cookie Warning
            </a>
          </li>
          <li className="py-2">
            <a
              href="https://support.apple.com/en-gb/music"
              target="_blank"
              rel="noopener"
              data-dt-link-to-exclude=""
            >
              Support
            </a>
          </li>
          <li className="py-2">
            <a
              href="https://www.apple.com/feedback/apple-music.html"
              target="_blank"
              rel="noopener"
              data-dt-link-to-exclude=""
            >
              Feedback
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
