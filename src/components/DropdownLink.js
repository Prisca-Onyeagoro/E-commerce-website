import React from 'react';
import Link from 'next/link';

const DropdownLink = (props) => {
  let { href, children, ...rest } = props;
  return (
    <Link href={href}>
      <p {...rest}>{children}</p>
    </Link>
  );
};

export default DropdownLink;
