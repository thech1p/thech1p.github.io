import { Fragment } from 'react';
import LazyImage from '../lazy-image';
import { ga, skeleton } from '../../utils';
import { SanitizedExternalProject } from '../../interfaces/sanitized-config';

const ExternalProjectCard = ({
  externalProjects,
  header,
  loading,
  googleAnalyticId,
}: {
  externalProjects: SanitizedExternalProject[];
  header: string;
  loading: boolean;
  googleAnalyticId?: string;
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < externalProjects.length; index++) {
      array.push(
        <div className="card shadow-lg compact bg-base-100" key={index}>
          <div className="p-8 h-full w-full">
            <div className="flex items-center flex-col">
              <div className="w-full">
                <div className="flex items-start px-4">
                  <div className="w-full">
                    <h2>
                      {skeleton({
                        widthCls: 'w-32',
                        heightCls: 'h-8',
                        className: 'mb-2 mx-auto',
                      })}
                    </h2>
                    <div className="avatar w-full h-full">
                      <div className="w-24 h-24 mask mask-squircle mx-auto">
                        {skeleton({
                          widthCls: 'w-full',
                          heightCls: 'h-full',
                          shape: '',
                        })}
                      </div>
                    </div>
                    <div className="mt-2">
                      {skeleton({
                        widthCls: 'w-full',
                        heightCls: 'h-4',
                        className: 'mx-auto',
                      })}
                    </div>
                    <div className="mt-2 flex items-center flex-wrap justify-center">
                      {skeleton({
                        widthCls: 'w-full',
                        heightCls: 'h-4',
                        className: 'mx-auto',
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>,
      );
    }

    return array;
  };

const renderExternalProjects = () => {
	return externalProjects.map((item, index) => (
		<a
		className="card shadow-lg compact bg-base-100 cursor-pointer"
		key={index}
		href={item.link}
		onClick={(e) => {
			e.preventDefault();
			try {
				if (googleAnalyticId) {
					ga.event('Click External Project', {
					post: item.title,
					});
				}
			} catch (error) {
			console.error(error);
			}
			if (item.link)
				window?.open(item.link, '_blank');
		}}
		>
		<div className="p-8 h-full w-full">
			<div className="flex items-center flex-col">
			<div className="w-full">
				<div className="px-4">
				<div className="text-center w-full">
				<h2 className="font-medium text-center opacity-60 mb-2">
				{item.title}
				</h2>
				{item.imageUrl && (
				<div className="avatar opacity-90">
					<div className="w-32 h-32 mask mask-squircle">
					<LazyImage
						src={item.imageUrl}
						alt={'thumbnail'}
						placeholder={skeleton({
						widthCls: 'w-full',
						heightCls: 'h-full',
						shape: '',
						})}
					/>
					</div>
				</div>
				)}
				<p className="mt-2 text-base-content text-opacity-60 text-sm text-justify">
				{item.description}
				</p>
				{/* Render additional images if available */}
				{item.images?.length > 0 && (
					<div className="mt-2">
					<h3 className="font-medium text-center opacity-80 mb-2">
						Images
					</h3>
						<div className="grid grid-cols-3 gap-4">
							{item.images?.map((imageItem, imageIndex) => (imageItem.imageUrl && (
								<div
								key={imageIndex}
								className="w-full cursor-pointer overflow-hidden rounded-lg w-40 h-32"
								onClick={() => window?.open(imageItem.imageUrl, '_blank')}>
								<LazyImage
									src={imageItem.imageUrl}
									alt={`Image ${imageIndex + 1}`}
									placeholder={skeleton({
									widthCls: 'w-full',
									heightCls: 'h-full',
									shape: '',
									})}
								/>
								</div>
							)
							))}
						</div>
					</div>
				)}

				{/* Render additional images if available */}
				{item.videos?.length > 0 && (
					<div className="mt-2">
					<h3 className="font-medium text-center opacity-80 mb-2">
						Videos
					</h3>
						<div className="grid grid-cols-3 gap-4">
							{item.videos?.map((videoItem, videoIndex) => (videoItem.imageUrl && (
								<div
								key={videoIndex}
								className="w-full cursor-pointer mask mask-squircle w-24 h-24"
								onClick={() => window?.open(videoItem.videoUrl, '_blank')}>
								<LazyImage
									src={videoItem.imageUrl}
									alt={`Image ${videoIndex + 1}`}
									placeholder={skeleton({
									widthCls: 'w-full',
									heightCls: 'h-full',
									shape: '',
									})}
								/>
								</div>
							)
							))}
						</div>
					</div>
				)}

				</div>
				</div>
			</div>
		</div>
	</div>
	</a>
	));
  };

  return (
    <Fragment>
      <div className="col-span-1 lg:col-span-2">
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2">
            <div className="card compact bg-base-100 shadow bg-opacity-40">
              <div className="card-body">
                <div className="mx-3 flex items-center justify-between mb-2">
                  <h5 className="card-title">
                    {loading ? (
                      skeleton({ widthCls: 'w-40', heightCls: 'h-8' })
                    ) : (
                      <span className="text-base-content opacity-70">
                        {header}
                      </span>
                    )}
                  </h5>
                </div>
                <div className="col-span-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {loading ? renderSkeleton() : renderExternalProjects()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ExternalProjectCard;
