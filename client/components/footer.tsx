import React from 'react';

interface FooterProps {
  title?: string;
}

const Footer: React.FC<FooterProps> = ({ title }) => {
  return (
    <footer className="hidden fixed bottom-0 md:grid grid-cols-9 grid-rows-1 px-8 py-4 w-screen h-min z-10">
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
