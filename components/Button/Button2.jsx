function ButtonBase(props) {
  const {
    className,
    size = 'base',
    as = 'button', // let Ana render it as a button or an anchor.
    children,
    IconStart, // use to render an icon before children
    IconEnd, // use to render an icon after children
    ...restProps
  } = props;

  const Element = as;

  return (
    <Element
      {...restProps}
      // use size, className prop to generate className for this element
      className='generated-base-classnames'
    >
      <span>{IconStart}</span>
      {children}
      <span>{IconEnd}</span>
    </Element>
  );
}

function ButtonSolid(props) {
  const { variant = 'primary', ...restProps } = props;
  return (
    <ButtonBase
      // all the other props like IconStart will be passed to ButtonBase
      {...restProps}
      // use variant to generate className and pass it to ButtonBase
      className='generated-solid-classnames'
    />
  );
}

function ButtonGhost(props) {
  const { variant = 'primary', ...restProps } = props;
  return (
    <ButtonBase
      // all the other props like IconStart will be passed to ButtonBase
      {...restProps}
      // use variant to generate className and pass it to ButtonBase
      className='generated-ghost-classnames'
    />
  );
}

export function IconButton(props) {
  const {
    className,
    size = 'base',
    as = 'button', // let Ana render it as a button or an anchor.
    Icon,
    tooltip, // button text in tooltip (code not shown)
    ...restProps
  } = props;

  const Element = as;

  return (
    <Element
      {...restProps}
      // use size, className prop to generate className for this element
      className={`generated-icon-classnames ${className}`}
    >
      {Icon}
    </Element>
  );
}
