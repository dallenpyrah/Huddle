import React from 'react'
import IssueModel from '../../../../models/issue/IssueModel'

interface IGroupDetailsGridItemProps {
  issue: IssueModel
}

export default function GroupDetailsGridItem (props: IGroupDetailsGridItemProps): JSX.Element {
  return (
        <div className={'grid grid-cols-7 hover:bg-zinc-900 mx-5 p-1 py-3 rounded'}>
            <div className={'col-span-2 ml-2'}>
                <span className={'text-sm text-zinc-500 font-normal'}>{props.issue.title}</span>
            </div>
            <div className={'col-span-1'}>
                <span className={'text-sm text-zinc-500 font-normal'}>{props.issue.status}</span>
            </div>
            <div className={'col-span-1'}>
                <span className={'text-sm text-zinc-500 font-normal'}>{props.issue.user.name}</span>
            </div>
            <div className={'col-span-1'}>
                <span className={'text-md text-zinc-500 font-normal'}>{props.issue.language}</span>
            </div>
            <div className={'col-span-1'}>
                <span className={'text-sm text-zinc-500 font-normal'}>{props.issue.updatedAt.toLocaleString()}</span>
            </div>
            <div className={'col-span-1'}>
                <span className={'text-sm text-zinc-500 font-normal'}>{props.issue.createdAt.toString()}</span>
            </div>
        </div>
  )
}
