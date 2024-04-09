import { Fragment } from 'react';

import { markText } from './markedText.css';

import { Text } from '@/components/Common';

interface MarkedTextProps {
  text: string;
  mark: string;
}

const MarkedText = ({ text, mark }: MarkedTextProps) => {
  const textFragments = text.split(new RegExp(`(${mark})`, 'gi'));

  return (
    <>
      {textFragments.map((fragment, index) => (
        <Fragment key={`fragment-${index}`}>
          {fragment.toLowerCase() === mark.toLowerCase() ? (
            <mark className={markText}>{fragment}</mark>
          ) : (
            <Text as="span" weight="semiBold">
              {fragment}
            </Text>
          )}
        </Fragment>
      ))}
    </>
  );
};

export default MarkedText;
