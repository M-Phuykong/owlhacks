import Link from "next/link";
import React from "react";
import Text from "../Typography/Text";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="mx-auto">
      <div className="h-px bg-skin-light" />
      <div className="flex flex-row items-center pt-2 justify-between px-10 py-4">
        <div className="flex flex-row text-skin-base gap-4">
          <Text className="font-semibold text-skin-base" size="large">
            OwlHacks © 2024
          </Text>
          <Link
            href="https://www.linkedin.com/company/templeowlhacks/"
            target="_blank"
          >
            <svg
              className="min-w-[2rem] text-skin-muted hover:text-skin-base"
              aria-hidden="true"
              focusable="false"
              height="1.5em"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
              />
            </svg>
          </Link>

          <Link href="https://discord.gg/haUbmXeXHA" target="_blank">
            <svg
              className="min-w-[2rem] text-skin-muted hover:text-skin-base"
              aria-hidden="true"
              focusable="false"
              height="1.5em"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 640 512"
            >
              <path
                fill="currentColor"
                d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
              />
            </svg>
          </Link>
        </div>
        <div>
          <Text className="text-skin-base font-semibold" size="large">
            Made with 💖 by{" "}
            <Link
              href="https://github.com/devinrankin"
              className="underline text-skin-muted"
            >
              Devin Rankin
            </Link>
          </Text>
        </div>
      </div>
    </footer>
  );
}
