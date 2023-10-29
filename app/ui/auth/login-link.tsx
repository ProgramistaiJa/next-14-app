import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'

export enum Version {
    PRIMERY = 'primery',
    SECONDARY = 'secondary',
    HEADER = 'header'
}
                {/**
                
                
                
                
                transition-colors 
                
                
                */}
export const LoginLink = ({version}:{version: string}) => {
  return (
    <Link
        href="/login"
        className={clsx("flex items-center gap-5 font-medium text-sm ",
            {
                "bg-blue-500 text-white self-start md:text-base rounded-lg px-6 py-3 transition-colors hover:bg-blue-400 ": version === Version.PRIMERY, 
                "bg-white text-blue-500 self-start md:text-base rounded-lg px-6 py-3 transition-colors  hover:bg-sky-100 hover:text-blue-600": version === Version.SECONDARY,
                "h-[48px] gap-2 justify-center rounded-md p-3 text-sm  md:flex-none md:justify-start md:p-2 md:px-3 text-white hover:bg-sky-100 hover:text-blue-600": version === Version.HEADER,
                /*  
                
                
                
                
                */
            }
        )}
    >
        <span>Log in</span>
    </Link>
  )
}
