import { OrbitProgress } from 'react-loading-indicators';

function Loader({
  text = 'fetching',
  variant
}: {
  text?: string;
  variant: 'disc' | 'dotted' | 'split-disc' | 'spokes' | 'track-disc';
}) {
  return (
    <OrbitProgress
      variant={variant}
      color=" #39cdcc"
      size="medium"
      text={text}
      textColor=" #213f7d"
    />
  );
}

export default Loader;
