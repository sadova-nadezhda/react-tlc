import React from 'react';
import clsx from 'clsx';
import { motion } from "framer-motion";

import BaseTitle from './BaseTitle';

import s from './Title.module.scss';

const Title = ({ className, component: Component = 'h1', ...props }) => {
  return (
    <BaseTitle
      component={Component}
      className={clsx(
        className,
        s.title,
        s.title_up 
      )}
      {...props}
    />
  );
};

export default Title;
