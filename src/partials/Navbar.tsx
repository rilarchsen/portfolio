import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, MoonIcon } from '@heroicons/react/24/outline'
import {RouteAttributes, Routes} from "../config/Routes.tsx";
import {Link, useLocation} from "react-router-dom";
import Logo from "../assets/logo-color.svg";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {

  const location = useLocation();

  const routes = Routes.filter(route => RouteAttributes[route.path ?? ""]).map(route => ({
    name: RouteAttributes[route.path ?? ""]?.name ?? "",
    href: route.path ?? "",
    current: location.pathname === route.path
  }));

  function toggleDarkMode() {
    const setToDark = !document.documentElement.classList.contains("dark");
    if (setToDark) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }

  return (
    <Disclosure as="nav" className="bg-primary">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-black dark:text-white hover-bg-primary">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link to={"/"}>
                    <img
                      className="h-8 w-auto"
                      src={Logo}
                    />
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {routes.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current ? 'bg-secondary' : 'bg-primary hover-bg-primary',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full text-black dark:text-white p-2 hover-bg-primary"
                  onClick={() => toggleDarkMode()}
                >
                  <MoonIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                {/*<Menu as="div" className="relative ml-3">*/}
                {/*  <div>*/}
                {/*    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">*/}
                {/*      <span className="absolute -inset-1.5" />*/}
                {/*      <span className="sr-only">Open user menu</span>*/}
                {/*      <img*/}
                {/*        className="h-8 w-8 rounded-full"*/}
                {/*        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"*/}
                {/*        alt=""*/}
                {/*      />*/}
                {/*    </Menu.Button>*/}
                {/*  </div>*/}
                {/*  <Transition*/}
                {/*    as={Fragment}*/}
                {/*    enter="transition ease-out duration-100"*/}
                {/*    enterFrom="transform opacity-0 scale-95"*/}
                {/*    enterTo="transform opacity-100 scale-100"*/}
                {/*    leave="transition ease-in duration-75"*/}
                {/*    leaveFrom="transform opacity-100 scale-100"*/}
                {/*    leaveTo="transform opacity-0 scale-95"*/}
                {/*  >*/}
                {/*    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">*/}
                {/*      <Menu.Item>*/}
                {/*        {({ active }) => (*/}
                {/*          <a*/}
                {/*            href="#"*/}
                {/*            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}*/}
                {/*          >*/}
                {/*            Your Profile*/}
                {/*          </a>*/}
                {/*        )}*/}
                {/*      </Menu.Item>*/}
                {/*      <Menu.Item>*/}
                {/*        {({ active }) => (*/}
                {/*          <a*/}
                {/*            href="#"*/}
                {/*            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}*/}
                {/*          >*/}
                {/*            Settings*/}
                {/*          </a>*/}
                {/*        )}*/}
                {/*      </Menu.Item>*/}
                {/*      <Menu.Item>*/}
                {/*        {({ active }) => (*/}
                {/*          <a*/}
                {/*            href="#"*/}
                {/*            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}*/}
                {/*          >*/}
                {/*            Sign out*/}
                {/*          </a>*/}
                {/*        )}*/}
                {/*      </Menu.Item>*/}
                {/*    </Menu.Items>*/}
                {/*  </Transition>*/}
                {/*</Menu>*/}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {routes.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-secondary' : 'bg-primary hover-bg-primary',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}