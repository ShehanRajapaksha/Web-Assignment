import React from "react";
import { faUser, faShoppingCart, faHeart, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Badge
} from "@material-tailwind/react";
import NavButton from "./NavButton";
import { CategoryPanel } from "./CategoryPanel";
import MobileSearch from "./MobileSearch";
import { CartOverlay } from "./CartOverlay";
import { useCart } from "react-use-cart";
import { useUtility } from "../Hooks/UtilityProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";


export function Navigationbar() {
  const { totalItems } = useCart();
  const { isSmall, openCart, updateOpenCart } = useUtility()
  const [openNav, setOpenNav] = React.useState(false);
  const [openUserMenu, setOpenUserMenu] = React.useState(false);




  // Function to handle clicks outside the CategoryPanel
  const handleClickOutside = (event) => {
    if (openNav && !event.target.closest('.category-panel')) {
      setOpenNav(false);
    }

    // Close user menu if clicked outside
    if (openUserMenu && !event.target.closest('.user-menu')) {
      setOpenUserMenu(false);
    }
  };

  // event listener to close category panel when clicked outside
  React.useEffect(() => {
    if (openNav || openUserMenu) {
      setTimeout(() => {
        document.addEventListener('click', handleClickOutside);
      }, 50);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [openNav, openUserMenu]);



  // Start of Navigationbar
  return (

    <div className="relative">
      <ul><li>
        <Navbar className="sticky top z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-8 ">
        

          <div className="container  mx-auto flex flex-wrap items-center justify-between text-blue-gray-900">
            <Link to="/">
              <div className="flex items-center xl:-ml-16  md:-ml-4" >
                {isSmall ? (
                  <img src="/icons/Zenko-logo-small.png" className="h-12 md:w-auto sm:scale-50" alt="Zenko Logo" />
                ) : (
                  <div className="p-2">
                    <img src="/icons/Zenko-logo-crop.png" className="h-12 w-auto" alt="Zenko Logo" />
                  </div>
                )}

              </div>
            </Link>


            <div className="hidden items-center gap-x-2 lg:flex w-1/2 ml-6">
              <div className="w-auto border border-blue-gray-300 rounded-full p-2 px-4 hover:shadow-lg hover:border-black1">
                <button
                  className="flex items-center gap-x-2 ml-auto focus:outline-none"
                  onClick={() => setOpenNav(!openNav)}
                >
                  <IconButton
                    variant="text"
                    className="h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent focus:outline-none"
                    ripple={false}
                  >
                    {openNav ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        className="h-6 w-6"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </IconButton>
                  <span className="w-full rounded-md">
                    <Typography variant="small">  Categories</Typography>
                  </span>

                </button>
              </div>



              <div className="relative flex w-full gap-2 md:w-max">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                    <svg fill="none" stroke="gray" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  </button>
                </span>
                <input
                  type="text"
                  id="simple-search"
                  class="bg-gray-50 border px-48 border-gray-400 text-gray-900 text-sm rounded-xl text-center block w-full ps-10 p-2.5 focus:outline-gray-500  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Looking For Something?"
                  required />

              </div>
              <Button size="md" className="rounded-lg bg-Red1 focus:outline-none focus:">
                Search
              </Button>

            </div>

            {/* Conditional render to make sure isSmall has a value when rendering- used to fix the icon render large glitch */}
            {isSmall !== null && (
              <div className="flex flex-row justify-items-end  xl:-mr-16">
                {!isSmall &&
                  <>
                    <button onClick={() => setOpenUserMenu(!openUserMenu)}>
                      <NavButton type={faUser} /></button>

                    {openUserMenu && !openNav && (

                      <ul role="menu" data-popover="profile-menu" data-popover-placement="bottom"
                        class="absolute z-10 mt-8 flex min-w-[180px] flex-col gap-2 overflow-auto rounded-xl border border-blue-gray-50 bg-white p-3 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none">
                        <button role="menuitem"
                          class="flex flex-col w-full cursor-pointer select-none items-center gap-2 rounded-md px-3 pt-[9px] pb-2 text-start leading-tight outline-none transition-all  hover:bg-opacity-80 hover:text-blue-gray-900  focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 hover:bg-white">
                          <svg width="40" height="40" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8ZM10 5C10 5.53043 9.78929 6.03914 9.41421 6.41421C9.03914 6.78929 8.53043 7 8 7C7.46957 7 6.96086 6.78929 6.58579 6.41421C6.21071 6.03914 6 5.53043 6 5C6 4.46957 6.21071 3.96086 6.58579 3.58579C6.96086 3.21071 7.46957 3 8 3C8.53043 3 9.03914 3.21071 9.41421 3.58579C9.78929 3.96086 10 4.46957 10 5ZM8 9C7.0426 8.99981 6.10528 9.27449 5.29942 9.7914C4.49356 10.3083 3.85304 11.0457 3.454 11.916C4.01668 12.5706 4.71427 13.0958 5.49894 13.4555C6.28362 13.8152 7.13681 14.0009 8 14C8.86319 14.0009 9.71638 13.8152 10.5011 13.4555C11.2857 13.0958 11.9833 12.5706 12.546 11.916C12.147 11.0457 11.5064 10.3083 10.7006 9.7914C9.89472 9.27449 8.9574 8.99981 8 9Z"
                              fill="#90A4AE"></path>
                          </svg>
                          <p class="block font-sans text-black text-sm antialiased font-medium leading-normal text-inherit">
                            Shehan Rajapaksha
                          </p>

                        </button>

                        <button role="menuitem"
                          class="flex w-full cursor-pointer select-none items-center -ml-2 gap-2 rounded-md px-3 pt-[9px] pb-2 text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                          <FontAwesomeIcon icon={faShoppingCart} />
                          <p class="block font-sans text-sm text-black antialiased font-medium leading-normal text-inherit">
                            My Orders
                          </p>
                        </button>
                        <button role="menuitem"
                          class="flex w-full -ml-2  cursor-pointer select-none items-center gap-2 rounded-md px-3 pt-[9px] pb-2 text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M9.48999 1.17C9.10999 -0.39 6.88999 -0.39 6.50999 1.17C6.45326 1.40442 6.34198 1.62213 6.18522 1.80541C6.02845 1.9887 5.83063 2.13238 5.60784 2.22477C5.38505 2.31716 5.1436 2.35564 4.90313 2.33709C4.66266 2.31854 4.42997 2.24347 4.22399 2.118C2.85199 1.282 1.28199 2.852 2.11799 4.224C2.65799 5.11 2.17899 6.266 1.17099 6.511C-0.390006 6.89 -0.390006 9.111 1.17099 9.489C1.40547 9.54581 1.62322 9.65719 1.80651 9.81407C1.98979 9.97096 2.13343 10.1689 2.22573 10.3918C2.31803 10.6147 2.35639 10.8563 2.33766 11.0968C2.31894 11.3373 2.24367 11.5701 2.11799 11.776C1.28199 13.148 2.85199 14.718 4.22399 13.882C4.42993 13.7563 4.66265 13.6811 4.90318 13.6623C5.14371 13.6436 5.38527 13.682 5.60817 13.7743C5.83108 13.8666 6.02904 14.0102 6.18592 14.1935C6.34281 14.3768 6.45419 14.5945 6.51099 14.829C6.88999 16.39 9.11099 16.39 9.48899 14.829C9.54599 14.5946 9.65748 14.377 9.8144 14.1939C9.97132 14.0107 10.1692 13.8672 10.3921 13.7749C10.6149 13.6826 10.8564 13.6442 11.0969 13.6628C11.3373 13.6815 11.57 13.7565 11.776 13.882C13.148 14.718 14.718 13.148 13.882 11.776C13.7565 11.57 13.6815 11.3373 13.6628 11.0969C13.6442 10.8564 13.6826 10.6149 13.7749 10.3921C13.8672 10.1692 14.0107 9.97133 14.1939 9.81441C14.377 9.65749 14.5946 9.546 14.829 9.489C16.39 9.11 16.39 6.889 14.829 6.511C14.5945 6.45419 14.3768 6.34281 14.1935 6.18593C14.0102 6.02904 13.8666 5.83109 13.7743 5.60818C13.682 5.38527 13.6436 5.14372 13.6623 4.90318C13.681 4.66265 13.7563 4.42994 13.882 4.224C14.718 2.852 13.148 1.282 11.776 2.118C11.5701 2.24368 11.3373 2.31895 11.0968 2.33767C10.8563 2.35639 10.6147 2.31804 10.3918 2.22574C10.1689 2.13344 9.97095 1.9898 9.81407 1.80651C9.65718 1.62323 9.5458 1.40548 9.48899 1.171L9.48999 1.17ZM7.99999 11C8.79564 11 9.55871 10.6839 10.1213 10.1213C10.6839 9.55871 11 8.79565 11 8C11 7.20435 10.6839 6.44129 10.1213 5.87868C9.55871 5.31607 8.79564 5 7.99999 5C7.20434 5 6.44128 5.31607 5.87867 5.87868C5.31606 6.44129 4.99999 7.20435 4.99999 8C4.99999 8.79565 5.31606 9.55871 5.87867 10.1213C6.44128 10.6839 7.20434 11 7.99999 11Z"
                              fill="#90A4AE"></path>
                          </svg>
                          <p class="block font-sans text-sm antialiased text-black font-medium leading-normal text-inherit">
                            Edit Profile
                          </p>
                        </button>

                        <hr class="my-2 border-blue-gray-50" role="menuitem" />
                        <button role="menuitem"
                          class="flex w-full cursor-pointer select-none items-center gap-2 rounded-md px-3 pt-[9px] pb-2 text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                          <FontAwesomeIcon icon={faPowerOff} color="Red" />
                          <p class="block font-sans text-sm antialiased text-red-800 font-medium leading-normal text-inherit">
                            Sign Out
                          </p>
                        </button>
                      </ul>)}
                  </>



                }
                <NavButton type={faHeart} />
                <Badge content={totalItems} overlap="circular" className=" w-6 h-6  md:mr-4 " placement="bottom-end" invisible={totalItems === 0} withBorder>
                  <button onClick={() => setTimeout(() => {
                    updateOpenCart(!openCart);
                  }, 100)}><NavButton type={faShoppingCart} />

                  </button>
                </Badge>




              </div>
            )}







          </div>
          <MobileSearch />



        </Navbar>
      </li>
        <li className="shadow-md border ">
          <CategoryPanel openNav={openNav} />
        </li>
      </ul>
      <div className="z-50">

        <CartOverlay />
      </div>
    </div>
  );
}