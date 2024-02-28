import React, { memo } from 'react';

type NameListProps = {
	names: string[];
	onDelete: (index: number) => void;
};

// Child componentde bir action tetiklenince bu action ile ilgili parent componentde bir event fırlatacağız.
// Child componentde event props tanımlayıp bunu parent componentden dinleme işlemi yapıcaz.

function NameList(props: NameListProps) {
	console.log('...rendering');
	return (
		<div>
			<ul>
				{props.names.map((name: string, index: number) => {
					return (
						<li key={index}>
							{name}
							<button onClick={() => props.onDelete(index)}>Sil</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default memo(NameList);
