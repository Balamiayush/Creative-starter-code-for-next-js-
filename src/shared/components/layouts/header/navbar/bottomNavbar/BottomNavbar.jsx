import React from 'react'
import LayoutWrapper from '@/shared/components/layouts/wrapper/LayoutWrapper'
import Button from '@/shared/components/ui/Button'
import Link from 'next/link'
import NavLinks from '../../NavLinks'
import {
    PrixaDigitalLogo,
    CalendarIcon,
    HamburgerMenuIcon,
  } from "../../../../icons";
  import { twMerge } from "tailwind-merge";

const BottomNavbar = () => {
    

  return (
    <div className=''> 
    
      <LayoutWrapper>
        <nav className="flex items-center justify-between">
          <Link href="/">
            <PrixaDigitalLogo />
          </Link>
          <div className="flex items-center gap-3">
            <NavLinks />
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Button className="max-xl:hidden">
                Book a Call <CalendarIcon />
              </Button>
            </a>
            <HamburgerMenuIcon
              className={twMerge(
                "md:hidden",
                "text-neutral-800",
              )}
            />
          </div>
        </nav>
      </LayoutWrapper>
    </div>
  )
}

export default BottomNavbar