import React from 'react'
import Skeleton from 'react-loading-skeleton'

export default function GroupDetailsGridItemLoader (): JSX.Element {
  return (
        <div className={'grid grid-cols-7 hover:bg-zinc-900 mx-5 p-1 py-3 rounded'}>
            <div className={'col-span-2 ml-2'}>
                <span className={'text-sm text-zinc-500 font-normal'}><Skeleton /></span>
            </div>
            <div className={'col-span-1'}>
                <span className={'text-sm text-zinc-500 font-normal'}><Skeleton /></span>
            </div>
            <div className={'col-span-1'}>
                <span className={'text-sm text-zinc-500 font-normal'}><Skeleton /></span>
            </div>
            <div className={'col-span-1'}>
                <span className={'text-md text-zinc-500 font-normal'}><Skeleton /></span>
            </div>
            <div className={'col-span-1'}>
                <span className={'text-sm text-zinc-500 font-normal'}><Skeleton /></span>
            </div>
            <div className={'col-span-1'}>
                <span className={'text-sm text-zinc-500 font-normal'}><Skeleton /></span>
            </div>
        </div>
  )
}
