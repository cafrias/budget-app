import React from 'react';

interface SkeletonProps {
	children?: React.ReactNode;
}

export default function Skeleton({
	children
}: SkeletonProps) {
	return <div className="w-full animate-pulse">{children}</div>;
}

Skeleton.Rectangle = function SkeletonRectangle() {
	return <div className="h-4 bg-gray-200 rounded w-full" />;
};
