import { Link } from "@remix-run/react";

export default function Header() {
  const common = {
    actionItem: "w-6 h-6 text-gray-800 dark:text-white",
    textMenuItem:
      "relative text-[#a16207] font-bold after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#a16207] after:transition-all after:duration-300 hover:after:w-full",
  };
  return (
    <header>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-[#a16207]">
          E-Commerce
        </Link>
        <nav className="menu-item">
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className={common.textMenuItem}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className={common.textMenuItem}>
                Shop
              </Link>
            </li>
            <li>
              <Link to="/cart" className={common.textMenuItem}>
                About us
              </Link>
            </li>

            <li>
              <Link to="/cart" className={common.textMenuItem}>
                Contact us
              </Link>
            </li>
          </ul>
        </nav>

        <nav className="actions">
          <ul className="flex space-x-4">
            <li>
              <svg
                className={common.actionItem}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                />
              </svg>
            </li>

            <li>
              <svg
                className={common.actionItem}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </li>

            <li>
              <svg
                className={common.actionItem}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                />
              </svg>
            </li>

            <li>
              <svg
                className={common.actionItem}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z"
                />
              </svg>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
