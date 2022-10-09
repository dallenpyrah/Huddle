import React, { useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'

export default function UserNotificationsComponent (): JSX.Element {
  const [notifications, setNotifications] = React.useState<Notification[]>([])
  const [isSateLoaded, setIsStateLoaded] = React.useState<boolean>(false)
  const maxNotificationsCount = 7

  async function getUsersNotifications (): Promise<void> {
    // const userCredentialsString = window.localStorage.getItem('user') ?? '{}'
    // const userCredentials = JSON.parse(userCredentialsString)
    // const notifications = await notificationsService.getUserNotifications(userCredentials.uid)
    setNotifications(notifications)
    setIsStateLoaded(true)
  }

  function loadNotificationSkeletons (): JSX.Element[] {
    const skeletons = []

    for (let i = 0; i < maxNotificationsCount; i++) {
      skeletons.push(
                <div key={i} className="col-span-1 rounded-md hover:translate-x-1 hover:border-l-4 mt-2 hover:border-blue-400">
                    <h6 className="p-2 text-sm text-black truncate"><Skeleton /></h6>
                </div>)
    }

    return skeletons
  }

  useEffect(() => {
    void getUsersNotifications()
  })

  return (
        <>
            {isSateLoaded && notifications.map((notification, index) => (
                <div key={index} className="col-span-1 rounded-md hover:translate-x-1 hover:border-l-4 mt-2 hover:border-blue-400">
                    <h6 className="p-2 text-sm text-white truncate">Gaurav has commented on one of your issues.</h6>
                </div>
            ))}
            {!isSateLoaded && loadNotificationSkeletons()}
        </>
  )
}
