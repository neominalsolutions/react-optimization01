import React from 'react';

type ChildSampleDemoProps = {
	parentRef: HTMLInputElement;
};

function ChildSampleDemo({ parentRef }: ChildSampleDemoProps) {
	return (
		<div>
			<button
				onClick={() => {
					parentRef.focus();
				}}
			>
				Parent Focus
			</button>
		</div>
	);
}

export default ChildSampleDemo;
