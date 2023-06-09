import { ReactElement } from "react"

type SvgProps = {
  profileIcon(): ReactElement
  barsIcon(): ReactElement
  plans(): ReactElement
  plansActive(): ReactElement
  bibleActive(): ReactElement
  bible(): ReactElement
  homeActive(): ReactElement
  home(): ReactElement
  video(): ReactElement
  videoActive(): ReactElement
  churchIco(): ReactElement
  english(): ReactElement
  facebook(): ReactElement
  twiter(): ReactElement
  instagram(): ReactElement
  linkedin(): ReactElement
  searchIcon(): ReactElement
}

export const Svg: SvgProps = {
  barsIcon() {
    return (
      <svg
        fill="none"
        height="20"
        role="img"
        viewBox="0 0 20 20"
        width="20"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          clipRule="evenodd"
          d="M4 4a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm0 6a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm1 5a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H5Z"
          fill="currentColor"
          fillRule="evenodd"
        ></path>
      </svg>
    )
  },
  profileIcon() {
    return (
      <svg
        fill="none"
        height="24"
        role="img"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        box-size="4"
        className="bg-gray-50 text-white plb-0.5 pis-0.25 pie-0.25 rounded-[6rem] h-[32px] w-[32px]"
        data-testid="blankAvatar"
      >
        <path
          clipRule="evenodd"
          d="M11.473 12.961a3.653 3.653 0 0 1-3.089-3.075l-.342-2.329a3.986 3.986 0 0 1 3.381-4.515c2.186-.317 4.217 1.19 4.537 3.366.056.384.051.783 0 1.15l-.342 2.328a3.652 3.652 0 0 1-4.145 3.075Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        ></path>
        <path
          clipRule="evenodd"
          d="M12 13c4.66 0 7.314 1.483 7.962 4.448.139.634-.115 1.305-.566 1.5a.632.632 0 0 1-.25.052H4.854C4.383 19 4 18.463 4 17.8c0-.12.013-.238.038-.352C4.685 14.483 7.339 13 12 13Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        ></path>
      </svg>
    )
  },

  searchIcon() {
    return (
      <svg
        aria-labelledby=":Rf6H3:"
        fill="none"
        height="24"
        role="img"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
        className="bg-gray-10 rounded-full pli-0.5 plb-0.5 h-4 w-4"
      >
        <title id=":Rf6H3:">Search Icon</title>
        <path
          clipRule="evenodd"
          d="M11.5 18a6.5 6.5 0 1 1 5.249-2.665l2.458 2.458a1 1 0 0 1-1.414 1.414l-2.458-2.458A6.47 6.47 0 0 1 11.5 18Zm0-2a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"
          fill="currentColor"
          fillRule="evenodd"
        ></path>
      </svg>
    )
  },
  linkedin() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="20"
        fill="currentColor"
        className="bi bi-linkedin"
        viewBox="0 0 16 16"
        id="IconChangeColor"
      >
        {" "}
        <path
          d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
          id="mainIconPathAttribute"
        ></path>{" "}
      </svg>
    )
  },
  instagram() {
    return (
      <svg
        aria-labelledby=":r4:"
        fill="none"
        height="24"
        role="img"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-current text-black"
      >
        <title id=":r4:">Instagram</title>
        <path
          d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0-2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm6.5-.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM12 4c-2.474 0-2.878.007-4.029.058-.784.037-1.31.142-1.798.332a2.886 2.886 0 0 0-1.08.703 2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.006 9.075 4 9.461 4 12c0 2.474.007 2.878.058 4.029.037.783.142 1.31.331 1.797.17.435.37.748.702 1.08.337.336.65.537 1.08.703.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.474 0 2.878-.007 4.029-.058.782-.037 1.309-.142 1.797-.331a2.92 2.92 0 0 0 1.08-.702c.337-.337.538-.65.704-1.08.19-.493.296-1.02.332-1.8.052-1.104.058-1.49.058-4.029 0-2.474-.007-2.878-.058-4.029-.037-.782-.142-1.31-.332-1.798a2.91 2.91 0 0 0-.703-1.08 2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.925 4.006 14.539 4 12 4Zm0-2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2Z"
          fill="currentColor"
        ></path>
      </svg>
    )
  },
  facebook() {
    return (
      <svg
        aria-labelledby=":r56:"
        fill="none"
        height="24"
        role="img"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-current text-black"
      >
        <title id=":r56:">Facebook</title>
        <path
          d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5Z"
          fill="currentColor"
        ></path>
      </svg>
    )
  },
  twiter() {
    return (
      <svg
        aria-labelledby=":r3:"
        fill="none"
        height="24"
        role="img"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-current text-black"
      >
        <title id=":r3:">Twitter</title>
        <path
          d="M22.162 5.656a8.385 8.385 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.73 1.86 3.48a4.168 4.168 0 0 1-1.894-.522v.052a4.185 4.185 0 0 0 3.355 4.1 4.208 4.208 0 0 1-1.89.073A4.185 4.185 0 0 0 7.97 16.65a8.393 8.393 0 0 1-6.19 1.732 11.83 11.83 0 0 0 6.409 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.497 8.497 0 0 0 2.087-2.165v-.001Z"
          fill="currentColor"
        ></path>
      </svg>
    )
  },
  plans() {
    return (
      <svg
        fill="none"
        focusable="false"
        height="24"
        role="img"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M3.25 5a2 2 0 0 0-2 2v10a6 6 0 0 0 6 6h10a2 2 0 0 0 2-2h-12a4 4 0 0 1-4-4V5Z"
          fill="currentColor"
          fillRule="evenodd"
        ></path>
        <path
          d="M6.25 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V4Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        ></path>
        <path
          clipRule="evenodd"
          d="M18.457 6.793a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 0-1.414l.353-.354a.5.5 0 0 1 .707 0l1.647 1.647 3.793-3.793a1 1 0 0 1 1.414 0Z"
          fill="currentColor"
          fillRule="evenodd"
        ></path>
      </svg>
    )
  },
  plansActive() {
    return (
      <svg
        fill="none"
        focusable="false"
        height="24"
        role="img"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 17V5a2 2 0 0 0-2 2v10a6 6 0 0 0 6 6h10a2 2 0 0 0 2-2H7a4 4 0 0 1-4-4Z"
          fill="currentColor"
        ></path>
        <path
          d="M20 1H8a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3Zm-1.8 7.21-4.5 4.5a1 1 0 0 1-1.41 0l-2-2a1 1 0 0 1 0-1.42l.35-.35a.5.5 0 0 1 .71 0L13 10.59l3.79-3.8a1 1 0 0 1 1.41 0 1 1 0 0 1 0 1.42Z"
          fill="currentColor"
        ></path>
      </svg>
    )
  },

  bible() {
    return (
      <svg
        fill="none"
        focusable="false"
        height="24"
        role="img"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          height="18"
          rx="3.5"
          width="18"
          x="3"
          y="3"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        ></rect>
        <path
          d="M6 17.074c0-.516.385-.952.897-1.016L18 14.67v1.714c0 .947-.767 1.715-1.714 1.715H7.024A1.024 1.024 0 0 1 6 17.074Z"
          fill="currentColor"
        ></path>
      </svg>
    )
  },
  homeActive() {
    return (
      <svg
        fill="none"
        focusable="false"
        height="24"
        role="img"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 10.46v9.41a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-9.41a2 2 0 0 0-.79-1.59l-8.6-6.54a1 1 0 0 0-1.21 0L2.79 8.87A2 2 0 0 0 2 10.46Z"
          fill="currentColor"
        ></path>
      </svg>
    )
  },
  home() {
    return (
      <svg
        fill="none"
        focusable="false"
        height="24"
        role="img"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 19.996v-9.411a1 1 0 0 1 .395-.797l8.609-6.532 8.6 6.532a1 1 0 0 1 .396.796v9.412a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        ></path>
      </svg>
    )
  },

  bibleActive() {
    return (
      <svg
        fill="none"
        focusable="false"
        height="24"
        role="img"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect height="18" rx="3.5" width="18" x="3" y="3"></rect>
        <path
          d="M17.5 2h-11A4.51 4.51 0 0 0 2 6.5v11A4.51 4.51 0 0 0 6.5 22h11a4.51 4.51 0 0 0 4.5-4.5v-11A4.51 4.51 0 0 0 17.5 2ZM19 17a2 2 0 0 1-2 2H6.2a1.19 1.19 0 0 1-.15-2.38L19 15Z"
          fill="currentColor"
        ></path>
      </svg>
    )
  },
  video() {
    return (
      <svg
        fill="none"
        focusable="false"
        height="24"
        role="img"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          height="18"
          rx="3"
          width="20"
          x="2"
          y="3"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        ></rect>
        <path
          d="M10 15.066a.5.5 0 0 0 .777.416l4.599-3.066a.5.5 0 0 0 0-.832l-4.599-3.066a.5.5 0 0 0-.777.416v6.132Z"
          fill="currentColor"
          clipRule="evenodd"
          fillRule="evenodd"
        ></path>
      </svg>
    )
  },
  videoActive() {
    return (
      <svg
        fill="none"
        focusable="false"
        height="24"
        role="img"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect height="18" rx="3" width="20" x="2" y="3"></rect>
        <path
          d="M19 2H5a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Zm-3.62 10.42-4.6 3.07a.5.5 0 0 1-.78-.42V8.94a.5.5 0 0 1 .78-.42l4.6 3.07a.5.5 0 0 1 0 .83Z"
          fill="currentColor"
        ></path>
      </svg>
    )
  },

  churchIco() {
    return (
      <svg
        aria-labelledby=":r55:"
        fill="none"
        height="24px"
        role="img"
        viewBox="0 0 185 24"
        width="184px"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-current text-black "
        color="gray.50"
      >
        <title id=":r55:">Life.Church</title>
        <path
          clipRule="evenodd"
          d="M21.213 10.883c-.628.942-1.38 2.071-2.034 3.076l7.733-1.105.602-.1c1.406-.201 1.909-1.507 2.009-1.808 1.55-3.39 3.099-3.697 5.909-4.255l.317-.063C42.176 5.222 45.189.1 45.189 0c-3.615.603-8.938 1.506-8.938 1.506-9.841 1.808-12.05 4.62-13.758 7.432-.15.25-.652 1.004-1.28 1.945Zm3.692 9.302s8.536-1.005 11.649-2.009c5.322-1.808 7.13-5.824 7.13-5.824s-8.134.903-11.75 2.51c-.073.031-.164.065-.272.105-.93.345-3.159 1.17-6.757 5.217Zm1.506-4.922s-1.306 3.113-6.427 5.523c-.268.134-.625.268-.982.402-.178.067-.357.134-.524.2L0 24l7.732-12.252C9.64 8.836 14.06 5.723 20.888 4.217l-7.03 10.745c-.041.083-.117.2-.207.339a7.17 7.17 0 0 0-.395.665l-2.11 3.214c-.3.602-.1.903.402.903.114-.01.223-.022.327-.032 1.74-.171 2.23-.22 2.987-1.072.302-.302 1.406-1.607 2.009-2.41l6.427-.904c1.807-.301 3.113-.402 3.113-.402ZM101.124 10.445c0 4.518 3.816 5.221 5.423 5.221 1.607 0 4.218-.703 5.021-3.213h1.406c-1.004 3.113-3.515 4.218-6.427 4.218-3.716 0-6.728-2.009-6.728-6.327s3.012-6.326 6.728-6.326c2.912 0 5.724 1.506 6.427 4.519h-1.305c-.804-2.611-3.415-3.314-5.122-3.314-1.707 0-5.423.803-5.423 5.222ZM55.131 4.318h-1.406V16.57h10.846v-1.205h-9.44V4.318Zm12.855 0H66.58V16.47h1.406V4.32ZM71.9 16.57h-1.406V4.318h11.348v1.306H71.9v4.218h9.44v1.104H71.9v5.624Zm13.357-5.724h10.043V9.64H85.258V5.624h10.344V4.318h-11.75V16.57h11.85v-1.205H85.258v-4.52ZM116.29 9.74h8.937V4.318h1.406V16.57h-1.406v-5.724h-8.937v5.724h-1.306V4.318h1.306v5.423Zm66.58 0h-8.938V4.318h-1.305V16.57h1.305v-5.724h8.938v5.724h1.406V4.318h-1.406v5.423Zm-47.902 7.03c4.017 0 6.026-2.009 6.026-4.921h.201V4.318h-1.406v7.23c0 3.415-3.314 4.018-4.72 4.018-1.506 0-4.72-.603-4.72-4.017v-7.23h-1.406v7.531c0 2.912 2.009 4.92 6.025 4.92Zm18.979-6.327c1.205-.502 1.908-1.506 1.908-2.812 0-2.109-1.406-3.314-3.816-3.314h-8.837V16.47h1.406v-5.523h7.029c2.009 0 2.812 1.205 2.812 3.113v2.51h1.406v-2.71c0-1.909-.803-2.913-1.908-3.415Zm-1.707-.703h-7.632V5.624h7.632c1.406 0 2.209.703 2.209 2.109 0 1.406-.803 2.008-2.209 2.008Zm11.95 5.925c-1.606 0-5.422-.703-5.422-5.221 0-4.419 3.715-5.222 5.422-5.222 1.708 0 4.319.703 5.122 3.314h1.305c-.703-3.013-3.514-4.52-6.427-4.52-3.715 0-6.728 2.009-6.728 6.327s3.013 6.327 6.728 6.327c2.913 0 5.423-1.105 6.427-4.218h-1.405c-.804 2.51-3.415 3.213-5.022 3.213Zm-66.68-.601h1.506v1.506h-1.507v-1.507Z"
          fill="currentColor"
          fillRule="evenodd"
        ></path>
      </svg>
    )
  },
  english() {
    return (
      <svg
        fill="none"
        height="24"
        role="img"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Zm-2.29-2.333A17.9 17.9 0 0 1 8.027 13H4.062a8.008 8.008 0 0 0 5.648 6.667ZM10.03 13c.151 2.439.848 4.73 1.97 6.752A15.906 15.906 0 0 0 13.97 13h-3.94Zm9.908 0h-3.965a17.9 17.9 0 0 1-1.683 6.667A8.008 8.008 0 0 0 19.938 13ZM4.062 11h3.965A17.9 17.9 0 0 1 9.71 4.333 8.008 8.008 0 0 0 4.062 11Zm5.969 0h3.938A15.904 15.904 0 0 0 12 4.248 15.906 15.906 0 0 0 10.03 11h.001Zm4.259-6.667A17.9 17.9 0 0 1 15.973 11h3.965a8.008 8.008 0 0 0-5.648-6.667Z"
          fill="currentColor"
        ></path>
      </svg>
    )
  },
}
