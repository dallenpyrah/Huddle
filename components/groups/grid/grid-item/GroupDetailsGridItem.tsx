import React from 'react'

export default function GroupDetailsGridItem (): JSX.Element {
  return (
        <div className={'grid grid-cols-7 hover:bg-zinc-900 mx-5 p-1 py-3 rounded'}>
            <div className={'col-span-2 ml-2'}>
                <span className={'text-sm text-zinc-500 font-normal'}>Can not open new modals</span>
            </div>
            <div className={'col-span-1'}>
                <span className={'text-sm text-zinc-500 font-normal'}>Status</span>
            </div>
            <div className={'col-span-1'}>
                <span className={'text-sm text-zinc-500 font-normal'}>Developer</span>
            </div>
            <div className={'col-span-1'}>
                <span className={'text-md text-zinc-500 font-normal'}>Language</span>
            </div>
            <div className={'col-span-1'}>
                <span className={'text-sm text-zinc-500 font-normal'}>Last Updated</span>
            </div>
            <div className={'col-span-1'}>
                <span className={'text-sm text-zinc-500 font-normal'}>Days Open</span>
            </div>
        </div>
  )
}
