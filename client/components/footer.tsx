import React from 'react';

interface FooterProps {
  title?: string;
}

const Footer: React.FC<FooterProps> = ({ title }) => {
  return (
    <footer className="grid grid-cols-9 grid-rows-1 px-8 py-4 w-full h-[50svh] z-10">
      <h1>winslow.</h1>
        <p className="col-start-9 self-end place-self-end row-start-1">
        <a href='mailto:opportunities@winslow.xyz'>opportunities@winslow.xyz</a>
        </p>
        <p className="col-start-6 self-end place-self-end row-start-1">
          <a href='https://linkedin.com'>LinkedIn</a>
        </p>
    </footer>
  );
};

export default Footer;
