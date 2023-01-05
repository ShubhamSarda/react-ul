import Skeleton from 'react-loading-skeleton';

export const SkeletonCard = () => {
  return (
    <div className="card">
        <p className="title">{<Skeleton />}</p>
        <p className="description"><Skeleton count={3} /></p>
        <p className="control">
          <Skeleton width="70px" />
        </p>
    </div>
  )
}
