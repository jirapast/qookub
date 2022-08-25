import Head from 'next/head';
import { Menu } from '@headlessui/react';
import Link from 'next/link';
import Cookies from 'js-cookie';

export default function Layout({ title, children }) {

    return (
        <>
          <Head>
            <title>{title ? title + ' - Maw' : 'Maw'}</title>
            <meta name="description" content="Online Learning Website" />
            <link rel="icon" href="./favicon.ico" />
          </Head>
          <div className="flex min-h-screen flex-col justify-between ">
            <header>
                <nav className="flex h-12 items-center px-4 justify-between shadow-md">
                  <Link href="/">
                      <a className="text-lg font-bold">QooKub</a>
                  </Link>
                  <Link href="/">
                      <a className="text-lg">Category</a>
                  </Link>
                  <Menu as="div" className="relative inline-block">
                    <Menu.Button className="text-blue-600"> Personal </Menu.Button>
                    <Menu.Items className="absolute right-0 w-56 origin-top-right bg-white  shadow-lg ">
                       <Menu.Items>Menu 1</Menu.Items>
                       <Menu.Items>Menu 2</Menu.Items>
                    </Menu.Items>
                  </Menu>
                </nav>
            </header>
            <main className="container m-auto mt-4 px-4">{children}</main>
            <footer className="flex h-10 justify-center items-center shadow-inner">
                <p>Copyright © 2022 Qookub</p>
            </footer>
          </div>
        </>
    )
}