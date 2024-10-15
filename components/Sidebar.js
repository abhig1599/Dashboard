"use client";
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/solid';
import logo from '@/Assets/Profile.png'
import Image from 'next/image';
import Link from 'next/link';

export default function Sidebar() {
  return (
    
    <div className="h-screen w-64 bg-gradient-to-b from-purple-700 to-purple-900 text-white flex flex-col fixed top-0 left-0">
      {/* Logo */}
      <div className="flex items-center mb-8 p-4">
        <Image src={logo} alt="Logo" width={10} height={10} className="w-8 h-8" />
        <h1 className="ml-2 text-lg font-bold">LOGO</h1>
      </div>

      {/* User Info */}
      <div className="flex items-center mb-6 p-4">
        <Image src={logo} alt="Logo" width={10} height={10} // Replace with your user image path
          className="w-8 h-8 rounded-full"
        />
        <div className="ml-3">
          <p className="text-sm">Sebastian Adminson</p>
          <p className="text-xs text-gray-300">Client ID: 100</p>
        </div>
      </div>

      {/* Menu Items */}
      <div className="space-y-4 flex-1 overflow-y-auto p-4">
        <Link href="#" className="flex items-center text-sm hover:text-gray-300">
          📊 Getting Started
        </Link>
        <Link href="/" className="flex items-center text-sm hover:text-gray-300">
          📈 Dashboard
        </Link>
        
        <Link href="/Statistics" className="flex items-center text-sm hover:text-gray-300">
          📉 Statistics
        </Link>

        {/* Dropdown 1 */}
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex items-center justify-between w-full text-sm hover:text-gray-300">
                <span>💼 Services</span>
                {open ? (
                  <ChevronUpIcon className="w-5 h-5" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5" />
                )}
              </Disclosure.Button>
              <Disclosure.Panel className="pl-4 space-y-1">
                <Link href="#" className="block text-sm hover:text-gray-300">
                  Providers
                </Link>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/* Dropdown 2 */}
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex items-center justify-between w-full text-sm hover:text-gray-300">
                <span>💰 Finance</span>
                {open ? (
                  <ChevronUpIcon className="w-5 h-5" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5" />
                )}
              </Disclosure.Button>
              <Disclosure.Panel className="pl-4 space-y-1">
                <Link href="#" className="block text-sm hover:text-gray-300">
                  Wallet
                </Link>
                <Link href="#" className="block text-sm hover:text-gray-300">
                  Deposit
                </Link>
                <Link href="#" className="block text-sm hover:text-gray-300">
                  Withdraw
                </Link>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/* Dropdown 3 */}
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex items-center justify-between w-full text-sm hover:text-gray-300">
                <span>🤝 Partners</span>
                {open ? (
                  <ChevronUpIcon className="w-5 h-5" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5" />
                )}
              </Disclosure.Button>
              <Disclosure.Panel className="pl-4 space-y-1">
                <Link href="#" className="block text-sm hover:text-gray-300">
                  Members
                </Link>
                <Link href="#" className="block text-sm hover:text-gray-300">
                  Reporting
                </Link>
                <Link href="#" className="block text-sm hover:text-gray-300">
                  Links
                </Link>
                <Link href="#" className="block text-sm hover:text-gray-300">
                  Leads
                </Link>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/* Support */}
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex items-center justify-between w-full text-sm hover:text-gray-300">
                <span>🛠️ Support</span>
                {open ? (
                  <ChevronUpIcon className="w-5 h-5" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5" />
                )}
              </Disclosure.Button>
              <Disclosure.Panel className="pl-4 space-y-1">
                <Link href="#" className="block text-sm hover:text-gray-300">
                  Become a Provider
                </Link>
                <Link href="#" className="block text-sm hover:text-gray-300">
                  Contact
                </Link>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>

      {/* Call to Action Button */}
      <div className="mt-6 p-4">
        <button className="bg-white text-purple-900 py-2 px-4 w-full rounded-lg hover:bg-gray-200">
          Deposit Now
        </button>
      </div>
    </div>
  );
}
