import React from 'react';
import { LuCopyright } from 'react-icons/lu';
import {
  BiLogoGithub
} from 'react-icons/bi';

function Footer() {
  return (
    <footer className="bg-base-200">
      <div className="flex justify-between items-center container max-w-7xl px-4 md:px-8 py-8">
        <div className="grid-flow-col">
          <p className="mb-1">Built by FSDM T3 Team</p>
          <LuCopyright className="inline mr-1" /> Copyright 2024
        </div>
        <div className="grid-flow-col justify-end text-3xl md:text-5xl">
          <a
            href="https://github.com/Sr-Preet/cinesearch"
            rel="noreferrer"
            target="_blank"
          >
            <BiLogoGithub className="inline mr-3" />
          </a>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
