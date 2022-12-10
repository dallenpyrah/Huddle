import React from 'react'

export default function GroupDetailsGridHeader (): JSX.Element {
  return (
      <div className={'grid grid-cols-7 mx-5 p-1'}>
          <div className={'col-span-2 mt-9 mb-2 ml-2'}>
              <span className={'text-md text-zinc-300 font-semibold'}>Title</span>
          </div>
          <div className={'col-span-1 mt-9'}>
              <span className={'text-md text-zinc-300 font-semibold'}>Status</span>
          </div>
          <div className={'col-span-1 mt-9'}>
              <span className={'text-md text-zinc-300 font-semibold'}>Developer</span>
          </div>
          <div className={'col-span-1 mt-9'}>
              <span className={'text-md text-zinc-300 font-semibold'}>Language</span>
          </div>
          <div className={'col-span-1 mt-9'}>
              <span className={'text-md text-zinc-300 font-semibold'}>Last Updated</span>
          </div>
          <div className={'col-span-1 mt-9'}>
              <span className={'text-sm text-zinc-300 font-semibold'}>Days Open</span>
          </div>
      </div>
  )
}
